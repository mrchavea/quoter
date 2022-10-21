import DynamicForm from 'components/DynamicForm';
import { useMemo } from 'react';
import {useConfigContext} from '../context/configContext'
import {useStepContext} from '../context/stepContext'

export default function DynamicQuestion() {
  const {getQuestion, loadingState, states} = useConfigContext();
  const { state : {step}, dispatch} = useStepContext();
  
  const createDynamicForm = (step) => {
  
      const formConfig = {
        getQuestion: getQuestion,
        loadingState : loadingState,
        states : states,
        step : step,
        stepDispatch : dispatch
      }

    return <DynamicForm formConfig = {formConfig}/>

  }


  const DynamicFormWithConfig = useMemo (() =>{
    return createDynamicForm(step);
  }, [step, loadingState])

  return DynamicFormWithConfig;
}