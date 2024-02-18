import { FC, ReactNode } from "react"
import { ProgressBarBG, ProgressBarScale, ProgressBarWrapper } from "./Progress-bar-style"

interface ProgressBarProps {
    currentQuestion: number,
    totalQuestionQuontity: number,
}
const ProgressBar = ({currentQuestion, totalQuestionQuontity, }: ProgressBarProps):ReactNode => {
    const progressInPercentage = currentQuestion/totalQuestionQuontity*100
    
    return (
    <ProgressBarWrapper>
        <ProgressBarBG> 
            <ProgressBarScale style={{width: `${progressInPercentage}%`}}/>
        </ProgressBarBG>
    </ProgressBarWrapper>
)
}

export default ProgressBar