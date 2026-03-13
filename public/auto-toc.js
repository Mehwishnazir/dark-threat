

(function () {
  "use strict";

  /* ── CONFIG (mirrors CyberSilo) ─────────────────────── */
  const ARTICLE_SELECTOR = ".blog-post-article";   // CyberSilo: .blog-content
  const ANCHOR_SELECTOR  = ".dt-intro-section";    // CyberSilo: .intro-section
  const MIN_HEADINGS     = 3;
  const HEADING_TAGS     = ["H2", "H3"];
  const EXCLUDE_PATTERNS = [
    /^table of contents/i,
    /^contents/i,
    /^references/i,
  ];
  /* ──────────────────────────────────────────────────── */

  /* ── UTILITIES ──────────────────────────────────────── */
  function toSlug(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/[\s_]+/g, "-")
      .replace(/-+/g, "-");
  }

  function ensureId(el, usedIds) {
    if (el.id) return el.id;
    let base = toSlug(el.textContent);
    if (!base) base = "section";
    let candidate = base;
    let counter   = 1;
    while (usedIds.has(candidate)) candidate = `${base}-${counter++}`;
    el.id = candidate;
    usedIds.add(candidate);
    return candidate;
  }

  function isExcluded(el) {
    const text = el.textContent.trim();
    return EXCLUDE_PATTERNS.some((re) => re.test(text));
  }

  /* ── BUILD TOC ──────────────────────────────────────── */
  function buildToc(headings) {
    const wrap = document.createElement("div");
    wrap.className = "dt-toc";

    /* Header row */
    wrap.innerHTML = `
      <div class="dt-toc__header">
        <span class="dt-toc__icon" aria-hidden="true">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="8"  y1="6"  x2="21" y2="6"/>
            <line x1="8"  y1="12" x2="21" y2="12"/>
            <line x1="8"  y1="18" x2="21" y2="18"/>
            <line x1="3"  y1="6"  x2="3.01" y2="6"/>
            <line x1="3"  y1="12" x2="3.01" y2="12"/>
            <line x1="3"  y1="18" x2="3.01" y2="18"/>
          </svg>
        </span>
        <h2 class="dt-toc__title">Table of Contents</h2>
        <button class="dt-toc__toggle" aria-label="Toggle table of contents" aria-expanded="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      </div>
      <nav class="dt-toc__nav" aria-label="Article contents"></nav>
    `;

    const nav    = wrap.querySelector(".dt-toc__nav");
    const rootOl = document.createElement("ol");
    rootOl.className = "dt-toc__list";
    nav.appendChild(rootOl);

    let currentH2Li  = null;
    let currentSubOl = null;
    let h2Counter    = 0;

    headings.forEach((el) => {
      const a       = document.createElement("a");
      a.href        = `#${el.id}`;
      a.textContent = el.textContent.trim();
      a.className   = "dt-toc__link";

      const li      = document.createElement("li");
      li.className  = "dt-toc__item";

      if (el.tagName === "H2") {
        h2Counter++;

        /* Numbered span — same visual pattern as CyberSilo's counter() */
        const num       = document.createElement("span");
        num.className   = "dt-toc__num";
        num.textContent = `${h2Counter}.`;
        num.setAttribute("aria-hidden", "true");

        li.appendChild(num);
        li.appendChild(a);
        rootOl.appendChild(li);

        currentH2Li  = li;
        currentSubOl = null;

      } else {
        /* H3 — indented sub-item, mirrors CyberSilo's nested <ul> */
        li.classList.add("dt-toc__item--sub");
        li.appendChild(a);

        if (!currentH2Li) {
          rootOl.appendChild(li);
        } else {
          if (!currentSubOl) {
            currentSubOl = document.createElement("ol");
            currentSubOl.className = "dt-toc__sublist";
            currentH2Li.appendChild(currentSubOl);
          }
          currentSubOl.appendChild(li);
        }
      }
    });

    /* Collapse / expand toggle */
    const toggle = wrap.querySelector(".dt-toc__toggle");
    toggle.addEventListener("click", () => {
      const isCollapsed = nav.classList.toggle("dt-toc__nav--collapsed");
      toggle.setAttribute("aria-expanded", String(!isCollapsed));
      toggle.style.transform = isCollapsed ? "rotate(-90deg)" : "rotate(0deg)";
    });

    return wrap;
  }

  /* ── SCROLL SPY (matches CyberSilo's rootMargin) ────── */
  function initScrollSpy(headings) {
    if (!("IntersectionObserver" in window)) return;

    const linkMap = {};
    document.querySelectorAll(".dt-toc__link[href^='#']").forEach((a) => {
      linkMap[a.getAttribute("href").slice(1)] = a;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkMap[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            Object.values(linkMap).forEach((l) =>
              l.classList.remove("dt-toc__link--active")
            );
            link.classList.add("dt-toc__link--active");
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
  }

  /* ── MAIN INIT ──────────────────────────────────────── */
  function init() {
    const article = document.querySelector(ARTICLE_SELECTOR);
    if (!article) return;

    /* Idempotent — don't inject twice */
    if (article.querySelector(".dt-toc")) return;

    /* Collect headings */
    const usedIds  = new Set();
    const headings = Array.from(
      article.querySelectorAll(HEADING_TAGS.join(","))
    ).filter((el) => {
      if (isExcluded(el)) return false;
      ensureId(el, usedIds);
      return true;
    });

    if (headings.length < MIN_HEADINGS) return;

    /*
     * Find anchor — mirrors CyberSilo exactly:
     *   1. Try .dt-intro-section  (explicit wrapper we add to blog HTML)
     *   2. Fall back to first <p> (graceful degradation for older blogs)
     *   3. Fall back to firstElementChild
     */
    const anchor =
      article.querySelector(ANCHOR_SELECTOR) ||
      article.querySelector("p")             ||
      article.firstElementChild;

    if (!anchor) return;

    const toc = buildToc(headings);
    anchor.insertAdjacentElement("afterend", toc);

    initScrollSpy(headings);
  }

  /* ── REACT SPA POLLING ──────────────────────────────── */
  /*
   * React renders async. Poll up to MAX_ATTEMPTS × 300 ms = 6 s.
   * Once the article element appears we run init() once and stop.
   */
  function waitAndInit(attempts) {
    if (attempts <= 0) return;
    const article = document.querySelector(ARTICLE_SELECTOR);
    if (article) {
      init();
    } else {
      setTimeout(() => waitAndInit(attempts - 1), 300);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => waitAndInit(20));
  } else {
    waitAndInit(20);
  }

  /* ── REACT ROUTER NAVIGATION ────────────────────────── */
  /* Intercept pushState so TOC re-inits on every SPA route change */
  const _pushState = history.pushState.bind(history);
  history.pushState = function (...args) {
    _pushState(...args);
    setTimeout(() => waitAndInit(20), 400);
  };
  window.addEventListener("popstate", () => setTimeout(() => waitAndInit(20), 400));

})();
