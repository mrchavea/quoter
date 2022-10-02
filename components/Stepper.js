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
            <div className="md:w-[60%] w-[90%] h-fit md:self-start md:ml-[8.33%] mx-auto mb-16 max-w-[600px]">
                <div className="flex items-center">
                    <div className="flex items-center text-blue-600 relative">
                        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark ">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </div>
                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-600">Vehicle</div>
                    </div>
                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600"></div>
                    <div className="flex items-center text-white relative">
                        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-blue-600 border-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus ">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <line x1="20" y1="8" x2="20" y2="14"></line>
                                <line x1="23" y1="11" x2="17" y2="11"></line>
                            </svg>
                        </div>
                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-600">FIGURES</div>
                    </div>
                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                    <div className="flex items-center text-gray-500 relative">
                        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail ">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Message</div>
                    </div>
                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                    <div className="flex items-center text-gray-500 relative">
                        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database ">
                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                            </svg>
                        </div>
                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Confirm</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(Stepper)