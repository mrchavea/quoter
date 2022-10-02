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
        step: state.step - 1 < 0 ? 0 : state.step - 1
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

  //ComponentDidMouunt
  React.useEffect(() => {   
    //if(router.asPath !== "/precio" && state.step == 1) router.push("/precio")
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
  const context = useContext(StepContext);

  if(!context){
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useStepContext;