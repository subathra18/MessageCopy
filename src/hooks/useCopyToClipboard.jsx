import React from "react";

const fallback = (text) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
};

const useCopyToClipboard = () => {
  const [state, setState] = React.useState();
  const copyToClipboard = (textToCopy) => {
    const copyFn = async () => {
      console.log("text to copy", textToCopy);
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          throw new Error("write to clipboard not supported in your browser");
        }
      } catch (Error) {
        fallback(textToCopy);
      } finally {
        setState(textToCopy);
      }
    };
    copyFn();
  };

  return [state, copyToClipboard];
};

export default useCopyToClipboard;
