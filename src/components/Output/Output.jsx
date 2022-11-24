import React,{useRef, useState, useEffect} from 'react'
import { fabric } from 'fabric'
import { useSignContext } from '@context'
import './Output.less'
const Output = () =>{
    const {fileSrc, signSrc} = useSignContext()

    const mainRef = useRef(null)
    const [canvas, setCanvas] = useState(null)

    useEffect(()=>{
        const c = new fabric.Canvas(mainRef.current)
        setCanvas(c)
    },[mainRef])

    useEffect(()=>{
        if(canvas&&signSrc){
            fabric.Image.fromURL(signSrc,(img)=>{
                img.scaleToWidth(100)
                img.scaleToHeight(100)
                canvas.add(img).renderAll()
                console.log(img)
            })
        }
    },[canvas,signSrc])
    console.log(signSrc)

    

    return (
        <section className="outputSection">
            <canvas ref={mainRef}></canvas>
        </section>
    )
}

export default Output