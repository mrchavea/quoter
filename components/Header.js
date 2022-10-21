import Icon from "./Icon";
import Stepper from "./Stepper"
import LanguageSwitch from "./languageSwitch"

import {useConfigContext} from '../context/configContext'

export default function Header ({height}) {

    const {getHeaderData, loadingState, states} = useConfigContext();
    const headerData = loadingState === states.LOADED ? getHeaderData() : null;
    console.log("HEADERDATA", headerData)

    return (
        <>
            <nav className="h-fit mb-6 md:mb-10">           
                {headerData ?
                
                    <div className="md:ml-[8.33%] ml-[5%] mt-10" id="icon">
                        <Icon height={height}/>
                    </div>

                :   <div></div>
                }
                <div className="">
                    <LanguageSwitch height={height}/>
                </div>     
            </nav>

            <style jsx>{`

                nav{
                    width: 100%;
                    display:flex;
                    text-align:center;
                    background: ${headerData?.primaryColor}
                }

                section{
                    width:100%;
                    justify-self: center;
                }

                div{
                    width:${height+15}px;
                    height:100%;
                }

        `}
        </style>
        </>
    )
}