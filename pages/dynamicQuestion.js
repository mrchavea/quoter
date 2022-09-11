import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import {useStepContext} from '../context/stepContext';
import {useLanguageContext} from "../context/languageContext"
import {useConfigContext} from "../context/configContext"

import {motion} from 'framer-motion'

import Title from '../components/Title'
import Button from 'components/Button';
import ButtonSecondary from 'components/ButtonSecondary';
import SkeletonTitle from '../components/Skeleton/SkeletonTitle'
import TextInput from '../components/Inputs/TextInput'

export default function DynamicQuestion() {
  const router = useRouter()

  const [isLoading,setIsLoading] = useState(true);
  const [question, setQuestion] = useState("");
  
  const { state : {step}, dispatch} = useStepContext();
  const {language} = useLanguageContext();
  const {configurationJson} = useConfigContext();

  
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  }

  const stepForward = () =>{
    dispatch({type : 'STEP_FORWARD'})
  }

  const stepBack = () =>{
    dispatch({type : 'STEP_BACK'})
  }

  useEffect( ()=>{
    console.table("CONF y STEP", configurationJson, step)
    if(configurationJson){
      setQuestion(configurationJson.flow.questions[step])
      if(isLoading) setIsLoading(false);
    } 
  },[configurationJson,step])

  // Handle the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    console.log("FORM", event)
    console.log('first 👉️',question);
    // Get data from the form.
    const data = {
      [question?.variableName]: event.target[question.variableName].value,
    }

    //useLogicValidator(data,step);

    const JSONdata = JSON.stringify(data)

    // Send the form data to our API and get a response.
    const response = await fetch('/api/form', {
      // Body of the request is the JSON data we created above.
      body: JSONdata,

      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    stepForward();
  }

  return (

    <>
        {isLoading ? 
        
          <SkeletonTitle/> 

          :

          <motion.div id="main-content"
          key={question?.title[language.name]}
          initial="hidden"
          animate="enter"
          variants={variants}
          transition={{ type: 'linear' }}
          >
            
            <div className="grid gap-8">

              <Title title={question?.title[language.name]}/>       

              <form onSubmit={handleSubmit}>

                  <TextInput id={question.variableName} label={question.label[language.name]}/>

                  <div className="flex flex-row justify-center pt-3">
                    <ButtonSecondary text={"Atrás"} onClick={stepBack}/>
                    <Button text={"Siguiente"} isSubmit={true}/>
                  </div>

              </form>

            </div>

          </motion.div>        
        }
    </>     
  )
}