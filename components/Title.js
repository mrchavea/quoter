export default function Title ({questionData, language, isLoading}) {
    return(
        <div className={`flex md:h-[28%] w-full md:items-end mb-2 ${isLoading ? 'animate-pulse flex justify-center' : ''}`}>
            {isLoading ? 
                <div className="bg-gray-400 leading-tight h-12 md:w-full w-[80vw] rounded-md"/>
            :
                <p className="text-left leading-tight  md:text-[2.1rem] text-[1.8rem]">
                    {questionData?.title[language.name]}
                </p>
            }
        </div>

    )
}
//md:mt-[-5rem]