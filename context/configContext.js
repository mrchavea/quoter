import React, { useContext, createContext, useState } from 'react';

//Context
export const ConfigContext = createContext(null);

//Provider
export const ConfigContextContextProvider = ({ children }) => {
  const [config, setConfig] = React.useState({});
  
  //ComponentDidMouunt
  React.useEffect( async () => {   
    const {configurationJson} = await fetch("http://localhost:3000/api/configuration?id=1").then(res => res.json()); 
    setConfig (prevConfig => configurationJson);
    console.log("config en configcontext useEffect",configurationJson)
}, []);

  //
  const values = React.useMemo(() => (
    { config,      // States que seran visibles en el contexto.
    setConfig,   // Funciones que son exportadas para manejo externo.
    }), 
    [ 
      config ]);   // States que serán visibles en el contexto.

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