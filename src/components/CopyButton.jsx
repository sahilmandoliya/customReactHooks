import {useState} from 'react';
import useCopyToClipboard from "../utils/useCopyToClipboard"

const CopyButton = (text) => {
    const [isCopied, handleCopy]=useCopyToClipboard(3000);

  return (
    <>
      <button onClick={()=> handleCopy(text)}>
        {isCopied ? <>Copied Successfully</> : <>Copy</>}
      </button>
    </>
  )
}

export default CopyButton;