import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

export function useTypedText(text: string, interval = 55, step = 1, delay = 0) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(text);
  useEffect(() => {
    if (reduced || !text) { setValue(text); return; }
    setValue('');
    let count = 0;
    let timer: ReturnType<typeof setTimeout>;
    const type = () => {
      count = Math.min(count + step, text.length);
      setValue(text.slice(0, count));
      if (count < text.length) timer = setTimeout(type, interval);
    };
    timer = setTimeout(type, delay);
    return () => clearTimeout(timer);
  }, [text, interval, step, delay, reduced]);
  return reduced ? text : value;
}
