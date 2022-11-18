import React,{useState} from 'react'
import Navbar from '@components/Navbar/Navbar'
import './historyPage.less'
import Photo from '@assets/photo.jpg'
import { Button } from '@mui/material'
const HistoryPage = () =>{
    const [history,setHistory] = useState([Photo,Photo])
    return(
        <main>
            <Navbar text={'回到首頁'} link={"/"}/>
            <div className='historySection'>
            {history.map((photo)=>(
                <div className="fileSection">
                <h3 className="fileTitle">檔案名稱</h3>
                <div className="filePhoto">
                    <img src={Photo} alt="title"/>
                </div>
                <div className="fileBtn">
                    <Button variant='outlined' className="delete">刪除</Button>
                    <Button variant='contained' className="download">下載</Button>
                </div>
            </div>
            ))}
            </div>
        </main>
    )
}

export default HistoryPage