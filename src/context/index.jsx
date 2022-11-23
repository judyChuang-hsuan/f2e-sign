import React, { createContext, useState, useContext } from "react";

const SignContext = createContext();

const SignProvider = ({ children }) => {
  const [drawing, setDrawing] = useState(false);
  const [showClearBtn, setShowClearBtn] = useState(false);
  const [doneDrawing, setDoneDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);
  const [canvas, setCanvas] = useState(null);
  const [signSrc, setSignSrc] = useState(null)

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setShowClearBtn(false)
  };

  const handleConvertToImage =() =>{
    const image = canvas.toDataURL()
    setSignSrc(image)
  }
  return (
    <SignContext.Provider
      value={{
        drawing,
        setDrawing,
        showClearBtn,
        setShowClearBtn,
        ctx,
        setCtx,
        canvas,
        setCanvas,
        clearCanvas,
        handleConvertToImage,
        signSrc
      }}
    >
      {children}
    </SignContext.Provider>
  );
};

export const useSignContext = () => {
  return useContext(SignContext);
};

export { SignContext, SignProvider };
