import { useRef, useEffect } from 'react';

const useClickOutside = <T extends HTMLElement>(callback: (evt: MouseEvent) => void) => {
  const ref = useRef<T>(null);
  const handleClickOutside = (evt: MouseEvent) => {
    if (!ref.current?.contains(evt.target as Node)) {
      callback(evt);
      return;
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
  return ref;
};

export default useClickOutside;
