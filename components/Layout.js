import { motion } from 'framer-motion'

export default function Layout ( {navHeight, children}) {

    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }
      
    return (
        <>
            <div id="Layout" className="lg:columns-12 sm:columns-4 flex flex-col md:justify-center items-center md:pb-[10vh]">
                {children}
            </div>
            

            <style jsx>{`

            div {
                min-height:  calc(100vh - ${navHeight}px);
                height:  calc(100vh - ${navHeight}px);
            }

            `}
            </style>    
        </>    
    );
}