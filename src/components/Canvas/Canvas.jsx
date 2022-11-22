import React,{useEffect,useRef,useState} from 'react'
import './Canvas.less'
import {getTouchPos, getMousePos} from '@utils/index'
const Canvas = () =>{
    const canvasRef=useRef(null)
    const [canvas, setCanvas] = useState(null)
    const [ctx, setCtx] = useState(null)
    const [src, setSrc] = useState(null)
    const [drawing, setDrawing] = useState(false)

    useEffect(()=>{
        const current = canvasRef.current
        setCanvas(current)
        if(current)setCtx(current.getContext('2d'))
    },[canvasRef])

    //手機簽名
    const handleTouchStart = (e) =>{
        setDrawing(true)
        const touchPos = getTouchPos(canvas,e)
        ctx.beginPath()
        ctx.moveTo(touchPos.x,touchPos.y)
        console.log
    }
    const handleTouchMove=(e)=>{
        if(!drawing)return
        const touchPos = getTouchPos(canvas,e)
        ctx.lineWidth=2;
        ctx.lineCap="round"
        ctx.lineJoin="round"
        ctx.lineTo(touchPos.x,touchPos.y)
        ctx.stroke()
    }
    const handleTouchEnd=(e)=>{
        setDrawing(false)
    }

    //電腦簽名
    const handleMouseDown = e =>{
        setDrawing(true)
        const mousePos = getMousePos(canvas,e)
        ctx.beginPath()
        ctx.moveTo(mousePos.x,mousePos.y)
    }

    const handleMouseMove = e =>{
        if(!drawing)return
        const mousePos = getMousePos(canvas, e)
        ctx.lineWidth=2
        ctx.lineCap="round"
        ctx.lineJoin="round"
        ctx.shadowBlur=1
        ctx.shadowColor="black"
        ctx.lineTo(mousePos.x,mousePos.y)
        ctx.stroke()
        console.log(mousePos)
    }

    const handleMouseUp= () =>{
        setDrawing(false)
    }



    return (
        <div className="canvasSection">
            <canvas 
            height={350}
            ref={canvasRef} 
            onTouchStart={handleTouchStart} 
            onTouchMove={handleTouchMove} 
            onTouchEnd={handleTouchEnd} 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}></canvas>
        </div>
    )
}

export default Canvas