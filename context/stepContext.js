import React, { useContext, createContext, useState, useReducer } from 'react';
import { useRouter } from 'next/router'

// initial state
const initialState = {
  step: 0,
  stepName: "regularQuestions"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STEP_FORWARD':
      return {
        ...state,
        step: state.step + 1,
        stepName: state.step +1 == 2? "precio" : state.stepName
      }
    case 'STEP_BACK':
      return {
        ...state,
        step: state.step -1
      }
    default:
      return state;
  }
}

//Context
export const StepContext = createContext(null);

//Provider
export const StepContextContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  //const [state2, setStep2] = useState(0);
  console.log("state en context",state)

  //ComponentDidMouunt
  React.useEffect(() => {   
    console.log("step en context useEffect",state)
}, [state]);

  //
  const values = React.useMemo(() => (
    { state,      // States que seran visibles en el contexto.
    dispatch,   // Funciones que son exportadas para manejo externo.
    }), 
    [ 
      state, dispatch ]);   // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <StepContext.Provider value={values}>{children}</StepContext.Provider>;
}

//
export function useStepContext() {
  console.log("DENTRO DE STEPCONTEXT")
  const context = useContext(StepContext);

  if(!context){
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useStepContext;