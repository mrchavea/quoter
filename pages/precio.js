import useNextStep from 'hooks/useNextStep'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import {useStepContext} from '../context/stepContext';
import {useConfigContext} from "../context/configContext"
import {useLanguageContext} from "../context/languageContext"

import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'

export default function Precio({prize}) {

  const {config} = useConfigContext();
  const {language} = useLanguageContext();

  console.log("CONFIG EN PRIZE", config)
  const { state, dispatch} = useStepContext()
  const {step} = state

  const {title, numero} = config.flow.questions[step]

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  }

  useEffect(()=>{
    console.log("step en useEffect de pregunta", step)
  },[step])

  // Handle the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      first: event.target.first.value,
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
    const nextStep = useNextStep(step)
    setStep(nextStep)
  }


  return (
        <>
          <motion.div id="main-content"
            key={title}
            initial="hidden"
            animate="enter"
            variants={variants}
            transition={{ type: 'linear' }}
            className="
                    flex flex-col items-start w-full pt-10
                    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                    pt-24 h-full
                "
          >
            <h1 className={styles.title}>
            {title[language.name]}{' '}
              <Link href="/">
                <a>{numero}</a>
              </Link>{' '}
            </h1>

            <section>
              <span>
                {prize} €
              </span>        
            </section>

        </motion.div>

        <style jsx>
          {`
            section{
              display:flex;
              align-items: center;
              text-align:center;
              justify-content:center;
              height: 60vh;
            }

            span{
              color:#0070f3;
              font-size:40px;
            }
          `}
        </style>
        </>
        
      
  )
}


Precio.getInitialProps = async () => {
  return await fetch("http://localhost:3000/api/prize?id=1").then(res => res.json())
}