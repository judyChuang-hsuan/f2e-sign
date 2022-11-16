import Navbar from '@components/Navbar/Navbar'
import './signPage.less'
import { Tabs, Tab } from '@mui/material'
const SignPage = () =>{
    return(
        <main>
            <Navbar text={'歷史文件'} link={"/history"}/>
            <Tabs>
                <Tab label="簽署文件" href="/sign#file"/>
                <Tab label="建立簽名檔" href="/sign#signature"/>
            </Tabs>
        </main>
    )
}

export default SignPage