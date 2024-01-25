import { useState, useEffect } from 'react';

const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState({
    alpha: null,
    beta: null,
    gamma: null,
  });

  useEffect(() => {
    const handleDeviceOrientation = (event) => {
      setOrientation({
        alpha: event.alpha,
        beta: event.beta,
        gamma: event.gamma,
      });
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation, true);

      return () => {
        window.removeEventListener('deviceorientation', handleDeviceOrientation, true);
      };
    } else {
      console.warn('Device Orientation not supported on this device.');
    }
  }, []); 

  return orientation;
};

export default useDeviceOrientation;