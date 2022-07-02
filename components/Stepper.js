import { useEffect } from 'react';
import Icon from '../components/Icon'
import {useStepContext} from '../context/stepContext';

export default function Stepper(props) {
    const {height} = props;
    const { step, setStep } = useStepContext();

    const STEPS = {
        0: "Vehículo 🚗",
        1: "Tu seguro ⚖️",
        2: "Tu presupuesto 👍"
    }
    console.log("step en steppet",step)

    
    return (
        <>
        <nav>
            <div id="icon">
                <Icon height={height}/>
            </div>
            <section>
                <h1>{STEPS[step]}</h1>
                <span>{step+1}</span> 
            </section>
            <div></div>     
        </nav>
                      
        <style jsx>{`

            nav{
                min-height: ${height}px;
                height: ${height}px;
                width: 100%;
                display:flex;
                text-align:center;
            }

            span{

                color: #0070f3;
            }

            h1{
                margin-bottom: 2px;
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