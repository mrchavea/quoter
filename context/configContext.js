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
    loadingState : !error && !data ? states.LOADING : error ? states.ERROR : states.LOADING,
    error: error 
  }
}


//Provider
export const ConfigContextContextProvider = ({ children }) => {
  const {data, loadingState} = getInitialData();

  const values = React.useMemo(() => (
    { data, loadingState, states,      // States que seran visibles en el contexto.
                                       // Funciones que son exportadas para manejo externo.
    }), 
    [ 
      data, loadingState, states, ]);   // States que serán visibles en el contexto.

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