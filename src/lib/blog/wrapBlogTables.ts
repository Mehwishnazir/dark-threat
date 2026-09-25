/**
 * Wraps blog comparison tables in a horizontal scroll container for mobile.
 * Does not alter source post files - only the HTML string at render time.
 */
export function wrapBlogTablesForScroll(html: string): string {
  let out = wrapBalancedDivClass(html, "blog-table", "blog-table-scroll");
  out = wrapNativeTables(out);
  return out;
}

function wrapNativeTables(html: string): string {
  return html.replace(/<table\b[\s\S]*?<\/table>/gi, (block) => {
    if (block.includes("blog-table-scroll")) return block;
    return `<div class="blog-table-scroll">${block}</div>`;
  });
}

/** Wrap each div.NAME block (including nested divs) in an outer scroll div. */
function wrapBalancedDivClass(html: string, className: string, wrapperClass: string): string {
  const openRe = new RegExp(`<div\\s+class=["']${className}["']\\s*>`, "gi");
  let result = "";
  let cursor = 0;

  while (cursor < html.length) {
    openRe.lastIndex = cursor;
    const match = openRe.exec(html);
    if (!match) {
      result += html.slice(cursor);
      break;
    }

    const start = match.index;
    result += html.slice(cursor, start);

    // Already wrapped?
    const before = html.slice(Math.max(0, start - 80), start);
    if (before.includes(`class="${wrapperClass}"`) || before.includes(`class='${wrapperClass}'`)) {
      result += match[0];
      cursor = start + match[0].length;
      continue;
    }

    let depth = 0;
    let j = start;
    let end = -1;

    while (j < html.length) {
      const nextOpen = html.indexOf("<div", j);
      const nextClose = html.indexOf("</div>", j);

      if (nextClose === -1) break;

      if (nextOpen !== -1 && nextOpen < nextClose) {
        const tagEnd = html.indexOf(">", nextOpen);
        if (tagEnd === -1) break;
        const tag = html.slice(nextOpen, tagEnd + 1);
        if (!/^<div\b[^>]*\/\s*>$/i.test(tag)) depth += 1;
        j = tagEnd + 1;
        continue;
      }

      depth -= 1;
      j = nextClose + 6;
      if (depth === 0) {
        end = j;
        break;
      }
    }

    if (end === -1) {
      result += html.slice(start);
      break;
    }

    const block = html.slice(start, end);
    result += `<div class="${wrapperClass}">${block}</div>`;
    cursor = end;
  }

  return result;
}
