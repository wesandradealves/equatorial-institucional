'use client'
import { useState, useEffect } from 'react';

function useWindowWidth(debounceTime = 100) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
   const handleResize = () => {
     setWindowWidth(window.innerWidth);
   }

   const debounce = (func, wait) => {
     let timeout;
     return () => {
       clearTimeout(timeout);
       timeout = setTimeout(() => {
         timeout = null;
         func.apply(this, arguments);
       }, wait);
     }
   }
    const handleResizeDebounced = debounce(handleResize, debounceTime);

    window.addEventListener('resize', handleResizeDebounced);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResizeDebounced);
    };
  }, [debounceTime]);

  return windowWidth;
}

export default useWindowWidth;
