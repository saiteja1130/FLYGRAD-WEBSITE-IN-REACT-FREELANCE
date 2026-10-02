import { useState, useEffect } from 'react';

interface CountUpOptions {
  end: number;
  duration?: number;
  decimals?: number;
  startOnMount?: boolean;
}

export function useCountUp({
  end,
  duration = 2000,
  decimals = 0,
  startOnMount = true
}: CountUpOptions) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOnMount) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = easeProgress * end;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, startOnMount]);

  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();

  return formatted;
}
