import './SignatureList.less'
import React,{useEffect, useState} from 'react'
import { Button } from '@mui/material'
const SignatureList = () =>{
    const [imageSrc, setImageSrc] = useState([])
    const [disableBtn, setDisableBtn] = useState(false)
    console.log(imageSrc)
    //預覽上傳的簽名照
    const handleOnPreview = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            const src={id:imageSrc.length+1,image:reader.result}
            setImageSrc([...imageSrc,src])
            localStorage.setItem('signature',JSON.stringify([...imageSrc,src]))
        }, false);
        if (file) {
          reader.readAsDataURL(file);
        }
      };

      //刪除簽名檔
      const handleDeleteSignature = (id)=>{
        setImageSrc(imageSrc.filter(image=>image.id!==id))
        console.log(imageSrc)
        localStorage.setItem('signature',JSON.stringify(imageSrc))
      }

      useEffect(()=>{
        if(imageSrc.length===2){
            setDisableBtn(true)
        }else{
            setDisableBtn(false)
        }
      },[imageSrc])


    return (
        <section>
            <div className="signatureDescription">
                <h5 className="descriptionTitle">我的簽名檔</h5>
                <div className={disableBtn?'disable btn':'addBtn btn'}><label for="upload">新增</label><input disabled={disableBtn} onChange={handleOnPreview} style={{'opacity':0}} type="file" id="upload" name="upload" accept=".jpg, .jpeg, .png"/></div>
            </div>
            <div className="signatureUpload"> 
                {!imageSrc && (<p className="description">尚未建立簽名檔，請按右上方新增鈕建立</p>)}
                    {imageSrc.map((img)=>(
                        <div key={img.id} className="picSection">
                            <div className='uploadPic'>
                                <img src={img.image} alt={''}/>
                            </div>
                            <Button onClick={()=>handleDeleteSignature(img.id)} className="deleteBtn">刪除</Button>
                        </div>
                    )
                )}
                {imageSrc.length===2&&<p className='limitText'>您的簽名檔已達兩則上限</p>}
            </div>
        </section>
    )
}

export default SignatureList