import React, { useContext, createContext, useState } from 'react';

//Context
export const StepContext = createContext(null);

//Provider
export const StepContextContextProvider = ({ children }) => {
  const [step, setStep] = React.useState(0);
  console.log("step en context",step)
  //ComponentDidMouunt
  React.useEffect(() => {    
    console.log("step en context useEffect",step)
}, [step]);

  //
  const values = React.useMemo(() => (
    { step,      // States que seran visibles en el contexto.
    setStep,   // Funciones que son exportadas para manejo externo.
    }), 
    [ 
        step ]);   // States que serán visibles en el contexto.

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