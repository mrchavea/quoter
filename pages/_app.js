import '../styles/globals.css'
import Layout from '../components/Layout'
import Stepper from "../components/Stepper";
import Header from 'components/Header';

import {StepContextContextProvider} from '../context/stepContext'
import { ConfigContextContextProvider } from 'context/configContext';
import { LanguageContextContextProvider } from 'context/languageContext';

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
    
      <ConfigContextContextProvider>
        <LanguageContextContextProvider>
          <StepContextContextProvider>

            <Header height={NAV_HEIGHT}/>

            <Layout navHeight = {NAV_HEIGHT}>
              <Component  {...pageProps} />
            </Layout>

          </StepContextContextProvider>
        </LanguageContextContextProvider>
      </ConfigContextContextProvider>

    </>
  )
}