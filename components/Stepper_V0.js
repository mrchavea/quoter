import {useStepContext} from '../context/stepContext';
import React from 'react'

export function Stepper() {

    const { state : {step}, dispatch} = useStepContext();

    const STEPS = {
        0: "Vehículo 🚗",
        1: "Tu seguro ⚖️",
        2: "Tu presupuesto 👍"
    }
    
    return (
        <>
            <section>
                <h1>{STEPS[step]}</h1>
                <span>{step+1}</span> 
            </section> 

        <style jsx>{`

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

        `}
        </style>
        </>
    )
}

export default React.memo(Stepper)