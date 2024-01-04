import {useCallback, useState, useEffect} from 'react';
import copy from 'copy-to-clipboard';

export default function useCopyToClipboard(text, resetInterval=null){
    const [isCopied, setCopied]=useState(false);
    
    const handleCopy=useCallback((text)=>{
        if(typeof text === "string" || typeof text === "number"){
            copy(text.toString());
            setCopied(true);
        }else{
            setCopied(false);
            console.error(`Can't copy typeof ${typeof text} to Clipboard, must be a string or number`);
        };
    }, []);

    useEffect(()=>{
        let timeout;
        if(isCopied && resetInterval){
            timeout=setTimeout(()=>setCopied(false), resetInterval);
        }
        return ()=>{
            clearTimeout(timeout);
        };
    }, [isCopied, resetInterval]);

    return [isCopied, handleCopy];
}