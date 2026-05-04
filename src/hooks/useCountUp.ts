import { useEffect, useRef, useState } from 'react';

/**
 * Animates a numeric value from 0 to `end` once the element enters viewport.
 * Returns ref + current display value (string).
 * Preserves prefix/suffix from the original `display` string (e.g. "$4.37M", "280 Days", "2M+").
 */
export function useCountUp(display: string, durationMs = 1600) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState('0');
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Parse number + prefix/suffix from display
    const match = display.match(/^([^\d.,-]*)([\d.,]+)(.*)$/);
    if (!match) {
      setValue(display);
      return;
    }
    const prefix = match[1] || '';
    const numStr = match[2];
    const suffix = match[3] || '';
    const target = parseFloat(numStr.replace(/,/g, ''));
    const decimals = (numStr.split('.')[1] || '').length;

    const format = (n: number) => {
      const fixed = n.toFixed(decimals);
      // Re-add thousands separators if original had them
      if (numStr.includes(',')) {
        const [intPart, decPart] = fixed.split('.');
        const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return prefix + (decPart ? `${withCommas}.${decPart}` : withCommas) + suffix;
      }
      return prefix + fixed + suffix;
    };

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(format(target * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [display, durationMs]);

  return { ref, value };
}
