import { useCallback, useEffect, useState } from 'react';

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState<number | null>(0);

  const handleScroll = useCallback(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const windowScroll = document.documentElement.scrollTop;

    setScrollPosition(height == 0 ? null : (windowScroll / height) * 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return scrollPosition;
}

export default useScrollPosition;
