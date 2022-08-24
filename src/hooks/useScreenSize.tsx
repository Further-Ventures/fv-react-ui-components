import { useEffect, useState } from 'react';
import { useTheme } from '../components/Theme';

export const useScreenSize = () => {
  const [ mobile, setMobile ] = useState(false);

  const { theme } = useTheme();
  const handleResize = () => {
    if (window.innerWidth > theme.mobileView) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };

  useEffect( () => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize]);

  return {
    isMobile: mobile
  }
};