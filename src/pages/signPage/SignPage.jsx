import Navbar from '@components/Navbar/Navbar'
import './signPage.less'
import React,{useState} from 'react'
import { TabUnstyled,TabsListUnstyled,TabPanelUnstyled,TabsUnstyled } from '@mui/base'
import SignFile from '@components/SignFile/SignFile'
import SignatureList from '@components/Signature/SignatureList'

const SignPage = () =>{
    const selected = document.querySelector('.tabSign')
    
    return(
        <main>
            <Navbar text={'歷史文件'} link={"/history"}/>
            <TabsUnstyled className="tabsSection " defaultValue={0} selectionFollowsFocus>
                <TabsListUnstyled className="tabListSection">
                    <TabUnstyled className='tabSign tabs'>簽署文件</TabUnstyled>
                    <TabUnstyled className='tabSignature tabs'>建立簽名檔</TabUnstyled>
                </TabsListUnstyled>
                <TabPanelUnstyled value={0}>
                    <SignFile/>
                </TabPanelUnstyled>
                <TabPanelUnstyled value={1}>
                    <SignatureList/>
                </TabPanelUnstyled>
            </TabsUnstyled>
        </main>
    )
}

export default SignPage