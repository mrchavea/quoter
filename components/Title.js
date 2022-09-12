export default function Title ({questionData, language, isLoading}) {
    return(
        <div className={`${isLoading ? 'animate-pulse' : ''}`}>
            {isLoading ? 
                <div className="bg-gray-400 m-0 leading-tight h-[4rem] sm:w-[50vw] w-[80vw] text-center"/>
            :
                <p className="m-0 leading-tight  md:text-[4rem] text-[2rem] text-center">
                    {questionData?.title[language.name]}
                </p>
            }
        </div>

    )
}