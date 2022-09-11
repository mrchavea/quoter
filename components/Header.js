import Icon from "./Icon";
import Stepper from "./Stepper"
import LanguageSwitch from "./languageSwitch"

import {useConfigContext} from '../context/configContext'

export default function Header ({height}) {

    const {configurationJson} = useConfigContext();
    console.log("CONF en header", configurationJson)

    return (
        <>
            <nav>           
                {configurationJson && configurationJson.logo ?
                
                    <div id="icon">
                        <Icon height={height}/>
                    </div>

                :   <div></div>
                }
                <section>
                    <Stepper/>
                </section>
                <div>
                    <LanguageSwitch height={height}/>
                </div>     
            </nav>

            <style jsx>{`

                nav{
                    min-height: ${height}px;
                    height: ${height}px;
                    width: 100%;
                    display:flex;
                    text-align:center;
                }

                section{
                    width:100%;
                    justify-self: center;
                }

                div{
                    width:${height+15}px;
                    height:100%;
                }

                #icon{
                    margin-top: 35px;
                    margin-left:15px;
                }
        `}
        </style>
        </>
    )
}