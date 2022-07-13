import React, { useContext, createContext, useState } from 'react';

//Context
export const LanguageContext = createContext(null);

//Provider
export const LanguageContextContextProvider = ({ children }) => {

  const LANGUAGES = [
    {
        "name" : "Español",
        "icon" : "🏴‍☠️"
    },
    {
        "name" : "English",
        "icon" : "🏳️‍🌈"
    }
  ]

  const [language, setLanguage] = React.useState(LANGUAGES[0]);
  
  //ComponentDidMouunt
  React.useEffect(() => {   
    setLanguage (prevLanguage => language);
    console.log("LANG en context", language)
}, [language]);

  //
  const values = React.useMemo(() => (
    { language, LANGUAGES,     // States que seran visibles en el contexto.
    setLanguage,   // Funciones que son exportadas para manejo externo.
    }), 
    [ 
      language ]);   // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>;
}

//
export function useLanguageContext() {
  const context = useContext(LanguageContext);

  if(!context){
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useLanguageContext;