import {useStepContext} from '../context/stepContext';
import {useLanguageContext} from "../context/languageContext"
import {useConfigContext} from "../context/configContext"

import {motion} from 'framer-motion'

import Title from '../components/Title'
import Button from 'components/Button';
import ButtonSecondary from 'components/ButtonSecondary';
import TextInput from '../components/Inputs/TextInput'
import Helper from 'components/Helper';
import FormCopy from './FormCopy';

export default function DynamicForm (){

    const { state : {step}, dispatch} = useStepContext();
    const {language} = useLanguageContext();
    const {data, loadingState, states} = useConfigContext();

    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(loadingState === states.LOADED){
          const inputData = {
            [data.configurationJson.flow.questions[step].variableName]: event.target[data.configurationJson.flow.questions[step].variableName].value,
          }
          const JSONdata = JSON.stringify(inputData)
          const response = await fetch('/api/form', {
            body: JSONdata,
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })
          const result = await response.json()
          console.log("RES", result)
          stepForward();
        }  
      }
    
      const stepForward = () =>{
        dispatch({type : 'STEP_FORWARD'})
      }
    
      const stepBack = () =>{
        dispatch({type : 'STEP_BACK'})
      }

    return (
        <>

          <motion.div id="main-content"
          key={loadingState && loadingState===states.LOADED && data?.configurationJson.flow.questions[step]?.label[language.name] ? data?.configurationJson.flow.questions[step]?.label[language.name] : step}
          initial="hidden"
          animate="enter"
          variants={variants}
          transition={{ type: 'linear' }}
          className="md:h-full w-full"
          >
            <div className="md:grid md:grid-cols-12 gap-6 flex flex-wrap justify-center md:grid-rows-1 h-full">
            
                <div className='md:col-start-2 md:col-span-5 md:w-full w-[90%] m-auto flex flex-wrap md:content-center md:h-full'>

                    <FormCopy isLoading={loadingState!==states.LOADED} questionData={data?.configurationJson.flow.questions[step]} language={language}/>
                
                </div>

                <div className='flex md:col-start-7 md:col-span-5 w-full'>

                    <form className='flex flex-wrap h-full m-auto md:w-[384px] w-[90%] content-center pb-[80px]' onSubmit={handleSubmit}>

                        <div className="justify-center w-full">

                          {step!=0 ? 

                            <TextInput isLoading={loadingState!==states.LOADED} questionData={data?.configurationJson.flow.questions[step]} language={language}/>
                          :
                            <>
                              <TextInput isLoading={loadingState!==states.LOADED} questionData={data?.configurationJson.flow.questions[step]} language={language}/>
                              <TextInput isLoading={loadingState!==states.LOADED} questionData={data?.configurationJson.flow.questions[step]} language={language}/>
                              <TextInput isLoading={loadingState!==states.LOADED} questionData={data?.configurationJson.flow.questions[step]} language={language}/>
                              <TextInput isLoading={loadingState!==states.LOADED} questionData={data?.configurationJson.flow.questions[step]} language={language}/>
                            </>
                            
                          }

                        </div>

                        <div className="flex flex-row pt-3 w-full">

                            <div className='w-full'>

                              <ButtonSecondary text={"Atrás"} onClick={stepBack}/>

                            </div>

                            <div>

                              <Button text={"Siguiente"} isSubmit={true}/>

                            </div>

                        </div>

                    </form>

                </div>
                
            </div>

          </motion.div>        
    </>     
    )
}   