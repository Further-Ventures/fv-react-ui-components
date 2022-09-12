import { useEffect, useState } from 'react';

export const useScreenSize = (breakPoint: number) => {
  const [mobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > breakPoint) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile: mobile,
  };
};
