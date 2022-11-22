import React,{useRef, useState, useEffect, useCallback} from 'react'
import './CreateSignature.less'
import Canvas from '@components/Canvas/Canvas'

const CreateSignature = () =>{
    return(
        <section className="createSection">
            <div className="createDescription">
                <h4 className="writeSignature">請在此寫下您的簽名</h4>
                <h4 className="writeSignature">或</h4>
                <h4 className="getSignature">從簽名檔中獲取簽名</h4>
            </div>
            <Canvas/>
        </section>
    )
}

export default CreateSignature