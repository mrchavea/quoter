import { motion } from 'framer-motion'

export default function Layout ( {navHeight, children}) {

    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }
      
    return (
        <>
            <div>
                {children}
            </div>
            

            <style jsx>{`

            div {
                min-height:  calc(100vh - ${navHeight}px);
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height:  calc(100vh - ${navHeight}px);
            }

            `}
            </style>    
        </>    
    );
}