import { Button } from '@mui/material'
import './UploadFile.less'

const UploadFile = () =>{
    return (
        <section className="uploadSection">
            <div className='descriptionSection'>
                <ul>
                    <li>檔案格式須為PDF或IMG</li>
                    <li>檔案大小上限為10MB</li>
                </ul>
                <div className="descriptionBtn"><label for="upload">上傳文件</label><input style={{'opacity':0}} type="file" id="upload" name="upload" accept=".jpg, .jpeg, .png, .pdf"/></div>
            </div>
            <div className='fileSection'>
                文件顯示區
            </div>
        </section>
    )
}

export default UploadFile