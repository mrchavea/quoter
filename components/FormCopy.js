import Helper from "./Helper";
import Title from "./Title";

export default function FormCopy({isLoading, questionData, language}){
    return (
        <>
            <Title isLoading={isLoading} questionData={questionData} language={language}/>   

            <Helper isLoading={isLoading} questionData={questionData} language={language}/>
        </>
    )
}