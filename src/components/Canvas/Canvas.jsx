import React, { useEffect, useRef, useState } from "react";
import "./Canvas.less";
import { getTouchPos, getMousePos } from "@utils/index";
import { useSignContext } from "@context";
import { useMediaQuery } from "@mui/material";
const Canvas = () => {
  const { drawing, setDrawing, setShowClearBtn, ctx, setCtx,canvas, setCanvas } = useSignContext();
  const canvasRef = useRef(null);
  const query = useMediaQuery('(min-width:600px)')
  const canvasHeight = query?650:300
  const canvasWidth = query?2000:500
  useEffect(() => {
    const current = canvasRef.current;
    setCanvas(current);
    if (current) setCtx(current.getContext("2d"));
  }, [canvasRef]);

  //手機簽名
  const handleTouchStart = (e) => {
    setDrawing(true);
    const touchPos = getTouchPos(canvas, e);
    ctx.beginPath();
    ctx.moveTo(touchPos.x, touchPos.y);
  };
  const handleTouchMove = (e) => {
    if (!drawing) return;
    const touchPos = getTouchPos(canvas, e);
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(touchPos.x, touchPos.y);
    ctx.stroke();
  };
  const handleTouchEnd = () => {
    setDrawing(false);
    setShowClearBtn(true);
  };

  //電腦簽名
  const handleMouseDown = (e) => {
    setDrawing(true);
    const mousePos = getMousePos(canvas, e);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;
    const mousePos = getMousePos(canvas, e);
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.shadowBlur = 1;
    ctx.shadowColor = "black";
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
  }; 

  const handleMouseUp = () => {
    setDrawing(false);
    setShowClearBtn(true);
  };

  return (
    <div className="canvasSection">
      <canvas
        height={canvasHeight}
        width={canvasWidth}
        ref={canvasRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
    </div>
  );
};

export default Canvas;
