import {useState, useEffect} from 'react';

const useIdle =(timeout=30000)=>{
    const isIdle=useRef(false);

    const handleIdle=()=>{
        isIdle.current=true;
    };

    const handleActive=()=>{
        isIdle.current=false;
    }

    useEffect(()=>{
        let idleTimer;

        const resetIdleTimer=()=>{
            clearTimeout(idleTimer);
            idleTimer=setTimeout(handleIdle, timeout);
        };

        const handleActivity=()=>{
            handleActive();
            resetIdleTimer();
        };


        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);
        window.addEventListener('scroll', handleActivity);

        resetIdleTimer();

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            window.removeEventListener('scroll', handleActivity);
            clearTimeout(idleTimer);
          };
        }, [timeout]);

        return isIdle.current;
}

export default useIdle;