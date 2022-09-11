import React, { useContext, createContext, useState } from 'react';

//Context
export const ConfigContext = createContext(null);

const states = {
  LOADING : 'Cargando contenido',
  LOADED : 'Contenido cargado',
  INITIALIZED: 'Contenido recogido e inicializado',
  ERROR: 'Ha ocurrido un error'
}

//Provider
export const ConfigContextContextProvider = ({ children }) => {
  const [configurationJson, setConfigurationJson] = React.useState(undefined);
  const [loadingState, setLoadingState] = React.useState(states.LOADING);

  //ComponentDidMount
  React.useEffect( async () => {   
    const {configurationJson} = await fetch(`/api/configuration?id=1`)
    .then(res => res.json())
    .catch(err => setLoadingState(states.ERROR)); 
    setConfigurationJson (prevConfig => {
      if(configurationJson) setLoadingState(states.LOADED)
      return configurationJson;
    });
  }, []);

  //
  const values = React.useMemo(() => (
    { configurationJson, loadingState, states,      // States que seran visibles en el contexto.
      setConfigurationJson, setLoadingState  // Funciones que son exportadas para manejo externo.
    }), 
    [ 
      configurationJson, loadingState, states, ]);   // States que serán visibles en el contexto.

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