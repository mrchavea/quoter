// import useNextStep from 'hooks/useNextStep'
// import Link from 'next/link'
// import { useState, useEffect } from 'react'

// import {useStepContext} from '../context/stepContext';
// import {useConfigContext} from "../context/configContext"
// import {useLanguageContext} from "../context/languageContext"

// import styles from '../styles/Home.module.css'
// import {motion} from 'framer-motion'

// export default function Precio({prize}) {

//   const {config} = useConfigContext();
//   const {language} = useLanguageContext();

//   console.log("CONFIG EN PRIZE", config)
//   const { state, dispatch} = useStepContext()
//   const {step} = state

//   const {title, numero} = config.flow.questions[step]

//   const variants = {
//     hidden: { opacity: 0, x: -200, y: 0 },
//     enter: { opacity: 1, x: 0, y: 0 },
//   }

//   useEffect(()=>{
//     console.log("step en useEffect de pregunta", step)
//   },[step])

//   // Handle the submit event on form submit.
//   const handleSubmit = async (event) => {
//     // Stop the form from submitting and refreshing the page.
//     event.preventDefault()

//     // Get data from the form.
//     const data = {
//       first: event.target.first.value,
//     }

//     //useLogicValidator(data,step);

//     const JSONdata = JSON.stringify(data)

//     // Send the form data to our API and get a response.
//     const response = await fetch('/api/form', {
//       // Body of the request is the JSON data we created above.
//       body: JSONdata,

//       // Tell the server we're sending JSON.
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // The method is POST because we are sending data.
//       method: 'POST',
//     })

//     // Get the response data from server as JSON.
//     // If server returns the name submitted, that means the form works.
//     const result = await response.json()
//   }


//   return (
//         <>
//           <motion.div id="main-content"
//             key={title}
//             initial="hidden"
//             animate="enter"
//             variants={variants}
//             transition={{ type: 'linear' }}
//             className="
//                     flex flex-col items-start w-full pt-10
//                     px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
//                     pt-24 h-full
//                 "
//           >
//             <h1 className={styles.title}>
//             {title[language.name]}{' '}
//               <Link href="/">
//                 <a>{numero}</a>
//               </Link>{' '}
//             </h1>

//             <section>
//               <span>
//                 {prize} €
//               </span>        
//             </section>

//         </motion.div>

//         <style jsx>
//           {`
//             section{
//               display:flex;
//               align-items: center;
//               text-align:center;
//               justify-content:center;
//               height: 60vh;
//             }

//             span{
//               color:#0070f3;
//               font-size:40px;
//             }
//           `}
//         </style>
//         </>
        
      
//   )
// }


// Precio.getInitialProps = async () => {
//   return await fetch("http://localhost:3000/api/prize?id=1").then(res => res.json())
// }

export default function Precio (){
  return (
    <>
    <div class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-8 mx-auto">
                <p class="text-xl text-center text-gray-500 dark:text-gray-300">
                    Choose your plan
                </p>

                <h1 class="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Pricing Plan</h1>
            
                
                <div class="mt-6 space-y-8 xl:mt-12">
                    <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 sm:h-9 sm:w-9" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <div class="flex flex-col items-center mx-5 space-y-1">
                                <h2 class="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">Basic</h2>
                                <div class="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                    Save 20%
                                </div>
                            </div>
                        </div>
                        
                        <h2 class="text-2xl font-semibold text-gray-500 sm:text-4xl dark:text-gray-300">$49 <span class="text-base font-medium">/Month</span></h2>
                    </div>

                    <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600 sm:h-9 sm:w-9" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <div class="flex flex-col items-center mx-5 space-y-1">
                                <h2 class="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">Popular</h2>
                                <div class="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                    Save 20%
                                </div>
                            </div>
                        </div>
                        
                        <h2 class="text-2xl font-semibold text-blue-600 sm:text-4xl">$99 <span class="text-base font-medium">/Month</span></h2>
                    </div>

                    <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 sm:h-9 sm:w-9" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <div class="flex flex-col items-center mx-5 space-y-1">
                                <h2 class="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">Enterprise</h2>
                                <div class="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                    Save 20%
                                </div>
                            </div>
                        </div>
                        
                        <h2 class="text-2xl font-semibold text-gray-500 sm:text-4xl dark:text-gray-300">$149 <span class="text-base font-medium">/Month</span></h2>
                    </div>

                    <div class="flex justify-center">
                        <button class="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Choose Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}