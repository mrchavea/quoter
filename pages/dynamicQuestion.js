import { useRouter } from 'next/router'
import { useState, useEffect, useCallback } from 'react'

import {useStepContext} from '../context/stepContext';
import {useLanguageContext} from "../context/languageContext"
import {useConfigContext} from "../context/configContext"

import {motion} from 'framer-motion'

import Title from '../components/Title'
import Button from 'components/Button';
import ButtonSecondary from 'components/ButtonSecondary';
import TextInput from '../components/Inputs/TextInput'

export default function DynamicQuestion() {
  const router = useRouter()

  // const [isLoading,setIsLoading] = useState(true);
  const [question, setQuestion] = useState("");
  
  const { state : {step}, dispatch} = useStepContext();
  const {language} = useLanguageContext();
  const {data, loadingState, initializeData, states} = useConfigContext();

  
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      [question?.variableName]: event.target[question.variableName]?.value,
    }
    const JSONdata = JSON.stringify(data)
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

  const stepForward = () =>{
    dispatch({type : 'STEP_FORWARD'})
  }

  const stepBack = () =>{
    dispatch({type : 'STEP_BACK'})
  }

  return (

    <>

          <motion.div id="main-content"
          key={loadingState && loadingState===states.LOADED ? data?.configurationJson.flow.questions[step]?.label[language.name] : step}
          initial="hidden"
          animate="enter"
          variants={variants}
          transition={{ type: 'linear' }}
          >
            
            <div className="grid gap-8">

              <Title isLoading={loadingState!==states.LOADED} data={data?.configurationJson.flow.questions[step]} language={language}/>       

              <form onSubmit={handleSubmit}>

                  <TextInput isLoading={loadingState!==states.LOADED} data={data?.configurationJson.flow.questions[step]} language={language}/>

                  <div className="flex flex-row justify-center pt-3">
                    <ButtonSecondary text={"Atrás"} onClick={stepBack}/>
                    <Button text={"Siguiente"} isSubmit={true}/>
                  </div>

              </form>

            </div>

          </motion.div>        
    </>     
  )
}