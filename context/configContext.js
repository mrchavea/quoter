import React, { useContext, createContext } from 'react';
import useSWR from 'swr';

//Context
export const ConfigContext = createContext(null);

const states = {
  LOADING : 'Cargando contenido',
  LOADED : 'Contenido cargado',
  ERROR: 'Ha ocurrido un error'
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const getInitialData = () => {
  const {data, error} = useSWR('/api/configuration?id=1', fetcher)

  console.log("SWR", data)
  return {
    data : data,
    loadingState : !error && !data ? states.LOADING : error ? states.ERROR : states.LOADED,
    error: error 
  }
}


//Provider
export const ConfigContextContextProvider = ({ children }) => {
  const {data, loadingState, error} = getInitialData();

  const getQuestion = (step) => {
    if (!error && loadingState === states.LOADED) return data.configurationJson.flow.questions[step];
    return null;
  }

  const values = React.useMemo(() => (
    { loadingState, states,      // States que seran visibles en el contexto.
      getQuestion,                              // Funciones que son exportadas para manejo externo.
    }), 
    [ 
      getQuestion, loadingState, states, ]);   // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <ConfigContext.Provider value={values}>{children}</ConfigContext.Provider>;
}

//
export function useConfigContext() {
  const context = useContext(ConfigContext);

  if(!context){
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useConfigContext;