import { Stepper,Step,StepContent,Button, StepLabel } from "@mui/material"
import './SignFile.less'
import React,{useState} from 'react'
import UploadFile from "@components/UploadFile/UploadFile"
import CreateSignature from '@components/CreateSignature/CreateSignature'
import Output from '@components/Output/Output'
const steps=[
    {
        id:1,
        component:<UploadFile/>
    },
    {
        id:2,
        component:<CreateSignature/>
    },
    {
        id:3,
        component:<Output/>
    }
]
const SignFile = () =>{
    const [activeStep,  setActiveStep] = useState(0)
    const [disable, setDisable] = useState(false)
    const handleNext = () =>{
        setActiveStep(prevActiveStep=>prevActiveStep+1)
    }
    const handleBack =() =>{
        setActiveStep(prevActiveStep=>prevActiveStep-1)
    }
    console.log(steps.length,activeStep)

    return(
        <>
        <Stepper className="stepSection" activeStep={activeStep} orientation="vertical">
            {steps.map(step=>(
                <Step key={step.id}>
                    <StepLabel className="stepLabel">{}</StepLabel>
                <StepContent className="stepContent">{step.component}</StepContent>
                </Step>
            ))}
        </Stepper>
        <div className="btnSection">
            {activeStep!==0 && <Button className="backBtn" onClick={handleBack}>上一步</Button>}
            <Button className="nextBtn" onClick={handleNext}>{activeStep===2?'下載':'下一步'}</Button>
        </div>
        </>
    )
}

export default SignFile