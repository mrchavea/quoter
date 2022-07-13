import { motion } from "framer-motion"
import {useLanguageContext} from "../context/languageContext"
import React from "react";

export function LanguageSwitch ({height}) {

    console.log("LANG2");

    const {language, setLanguage, LANGUAGES} = useLanguageContext();

    const handleClick = (newLanguage) => {
        console.log("language change to",language)
        setLanguage(prevLanguage => newLanguage)
    }

    return(
        <>
            <div>
                {LANGUAGES.map(language =>     
                            <motion.a 
                                id="flag"
                                style={{height:"fit-content"}}
                                whileHover={{ scale: 1.05, rotate: 3 }}
                                whileTap={{
                                    scale: 0.8,
                                    rotate: -5,
                                    borderRadius: "50%"
                                }}
                                onClick={()=>handleClick(language)} 
                                key={language.name}>

                                    <span>{language.icon}</span>

                            </motion.a>                
                )}
            </div>


            <style jsx>{`

            div {
                display: inline-flex;
                width:${height+15}px;
                height:100%;
                justify-content: flex-end;
                margin-top: 20%;
                padding-right: 2vw;
            }

            span{
                cursor: pointer;
                font-size: 42px;
            }

            `}
            </style>

        </>
    )
}

export default React.memo(LanguageSwitch)