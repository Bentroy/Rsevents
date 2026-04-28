import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (options.once !== false) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -60px 0px',
      }
    );

    // Observe the element itself and all children with animation classes
    const animEls = el.querySelectorAll('.fade-up, .fade-in, .fade-left, .fade-right');
    if (el.classList.contains('fade-up') || el.classList.contains('fade-in') ||
        el.classList.contains('fade-left') || el.classList.contains('fade-right')) {
      observer.observe(el);
    }
    animEls.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}

// Hook to observe many elements at once globally
export function useGlobalReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    const els = document.querySelectorAll('.fade-up, .fade-in, .fade-left, .fade-right');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
