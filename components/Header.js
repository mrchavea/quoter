import Icon from "./Icon";
import Stepper from "./Stepper"
import LanguageSwitch from "./languageSwitch"

import {useConfigContext} from '../context/configContext'

export default function Header ({height}) {

    const {config} = useConfigContext();
    console.log("CONF en header", config)

    return (
        <>
            <nav>           
                {config.logo ?
                
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
                    margin-left:15px;
                }
        `}
        </style>
        </>
    )
}