import '../styles/globals.css'
import Layout from '../components/Layout'
import Stepper from "../components/Stepper";
import {StepContextContextProvider} from '../context/stepContext'
import { AnimatePresence } from 'framer-motion'

export default function MyApp({ Component, pageProps }) {
  const NAV_HEIGHT = 152;

  /*
  <AnimatePresence
                exitBeforeEnter
                initial={true}
                onExitComplete={() => window.scrollTo(0, 0)}
        >
  */

  return (
    <>
      <StepContextContextProvider>
        <Stepper height={NAV_HEIGHT}/>
        
          <Layout navHeight = {NAV_HEIGHT}>
            <Component  {...pageProps} />
          </Layout>
      </StepContextContextProvider>
     
    </>
  )
}