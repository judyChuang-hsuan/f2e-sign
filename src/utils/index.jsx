
export const getMousePos=(canvas,evt)=>{
    let rect = canvas.getBoundingClientRect()
    console.log(evt.clientX,rect)
    return{
        x:evt.clientX-rect.left,
        y:evt.clientY-rect.top
    }
}

export const getTouchPos=(canvas,evt)=>{
    let rect = canvas.getBoundingClientRect()
    return{
        x:evt.touches[0].clientX - rect.left,
        y:evt.touches[0].clientY - rect.top
    }
}

export const getScaledDim = (img,maxWidth,maxHeight)=>{
    let scaled = {
        ratio:img.width/img.height,
        width:img.width,
        height:img.height
    }
    if(scaled.width>maxWidth){
        scaled.width=maxWidth
        scaled.height=scaled.width/scaled.ratio
    }
    if(scaled.height>maxHeight){
        scaled.height=maxHeight
        scaled.width=scaled.height/scaled.ratio
    }
    return scaled
}