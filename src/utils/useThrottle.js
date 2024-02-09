import { useState, useEffect } from 'react';

function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    let timeoutId = null;

    const updateThrottledValue = () => {
      setThrottledValue(value);
      timeoutId = null;
    };

    if (value !== throttledValue) {
      if (!timeoutId) {
        timeoutId = setTimeout(updateThrottledValue, delay);
      }
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [value, throttledValue, delay]);

  return throttledValue;
}

export default useThrottle;
