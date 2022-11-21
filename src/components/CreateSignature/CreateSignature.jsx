import React,{useRef, useState, useEffect} from 'react'
import './CreateSignature.less'
import {getTouchPos,getMousePos} from '@utils/index'

const canvasSize=500
const CreateSignature = () =>{
    const canvasRef=useRef(null)
    const [canvas,setCanvas] = useState(null)
    const [ctx,setCtx] = useState(null)
    const [src,setSrc] = useState(null)
    const [drawing,setDrawing] = useState(false)
    
  useEffect(() => {
    const c = canvasRef.current;
    setCanvas(c);
    if (c) setCtx(c.getContext("2d"));
  }, [canvasRef]);
    /** 開始 */
  const handleTouchStart = (event) => {
    setDrawing(true);
    const touchPos = getTouchPos(canvas, event);
    ctx.beginPath(touchPos.x, touchPos.y);
    ctx.moveTo(touchPos.x, touchPos.y);
    event.preventDefault();
  };

  const handleMouseDown = (event) => {
    setDrawing(true);
    const mousePos = getMousePos(canvas, event);
    console.log(mousePos)
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);
    event.preventDefault();
  };

  /** 移動 */
  const handleTouchMove = (event) => {
    if (!drawing) return;
    const touchPos = getTouchPos(canvas, event);
    ctx.lineWidth = 2;
    ctx.lineCap = "round"; // 繪制圓形的結束線帽
    ctx.lineJoin = "round"; // 兩條線條交匯時，建立圓形邊角
    ctx.shadowBlur = 1; // 邊緣模糊，防止直線邊緣出現鋸齒
    ctx.shadowColor = "black"; // 邊緣顏色
    ctx.lineTo(touchPos.x, touchPos.y);
    ctx.stroke();
  };

  const handleMouseMove = (event) => {
    if (!drawing) return;
    const mousePos = getMousePos(canvas, event);
    console.log(mousePos)
    ctx.lineWidth = 2;
    ctx.lineCap = "round"; // 繪制圓形的結束線帽
    ctx.lineJoin = "round"; // 兩條線條交匯時，建立圓形邊角
    ctx.shadowBlur = 1; // 邊緣模糊，防止直線邊緣出現鋸齒
    ctx.shadowColor = "black"; // 邊緣顏色
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
  };

  /** 結束 */
  const handleTouchEnd = (event) => {
    setDrawing(false);
  };

  const handleMouseUp = (event) => {
    setDrawing(false);
  };
  const handleConvertToImage=() =>{
    const image = canvas.toDataUrl()
    console.log(image)
  }

    return(
        <section className="createSection">
            <div className="createDescription">
                <h4 className="writeSignature">請在此寫下您的簽名</h4>
                <h4 className="writeSignature">或</h4>
                <h4 className="getSignature">從簽名檔中獲取簽名</h4>
            </div>
            <canvas ref={canvasRef} onTouchStart={handleTouchStart} 
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}></canvas>
        </section>
    )
}

export default CreateSignature