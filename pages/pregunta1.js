import useNextStep from 'hooks/useNextStep'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import {useStepContext} from '../context/stepContext';
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'

export default function PageWithJSbasedForm({configurationJson}) {
  console.log("conf",configurationJson)
  const router = useRouter()

  const { step, setStep } = useStepContext();
  const {title, numero} = configurationJson.flow.questions[step]
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
    if(nextStep == 2){
      router.push("/precio")
    }
    else setStep(prevStep => useNextStep(prevStep))
  }
  return (

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
            {title}{' '}
            <Link href="/">
              <a>{numero}</a>
            </Link>{' '}
          </h1>

          <p className={styles.description}>
            Get started by looking at{' '}
            <code className={styles.code}>pages/js-from.js</code>
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="first">First Name</label>
            <input type="text" id="first" name="first" required />
            <button type="submit">Submit</button>
          </form>

        </motion.div>
      
  )
}


PageWithJSbasedForm.getInitialProps = () => {
  return fetch("http://localhost:3000/api/configuration?id=1").then(res => res.json())
}