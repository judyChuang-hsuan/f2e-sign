import { Button } from '@mui/material'
import './UploadFile.less'
import React, {useState} from 'react'
const UploadFile = () =>{
    const [imageSrc,setImageSrc] = useState('')
    const [imageAlt, setImageAlt] = useState('')

    const handleChange = (e)=>{
        console.log(e.target.files)
    }
    const handleOnPreview = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
          setImageAlt(file.name)
          setImageSrc(reader.result).
          console.log(reader)
        }, false);
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };
    
    return (
        <section className="uploadSection">
            <div className='descriptionSection'>
                <ul>
                    <li>檔案格式須為PDF或IMG</li>
                    <li>檔案大小上限為10MB</li>
                </ul>
                <div className="descriptionBtn"><label for="upload">上傳文件</label><input onChange={handleOnPreview} style={{'opacity':0}} type="file" id="upload" name="upload" accept=".jpg, .jpeg, .png, .pdf"/></div>
            </div>
            <div className='fileSection'>
                {!imageSrc && (<p>文件顯示區</p>)}
                <img src={imageSrc} alt={imageAlt}/>
            </div>
        </section>
    )
}

export default UploadFile