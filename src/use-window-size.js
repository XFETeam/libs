import { useState, useEffect } from 'react';
import useDebounce from '@umijs/hooks/lib/useDebounce';

/**
 * 获取 window 大小, 当 resize 时会跟随变化
 * @param debounceWait
 * @param onResize
 */
export default function useWindowSize(
  { debounceWait = 300, onResize } = {},
) {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);
  const debouncedWindowSize = useDebounce(windowSize, debounceWait);

  useEffect(() => {
    if (!isClient) {
      return () => undefined;
    }
    function handleResize() {
      const size = getSize();
      onResize && onResize(size);
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return debouncedWindowSize;
}
