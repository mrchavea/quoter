export default function Title ({questionData, language, isLoading}) {
    return(
        <div className={`flex md:h-[28%] w-full md:items-end mb-2 ${isLoading ? 'animate-pulse flex justify-center' : ''}`}>
            {isLoading ? 
                <div className="flex flex-wrap h-full w-full content-end">
                    <div className="bg-gray-300 leading-tight h-9 w-full  rounded-md mt-2"/>
                    <div className="bg-gray-300 leading-tight h-9 w-full rounded-md mt-2"/>
                </div>           
            :
                <p className="text-left leading-tight  md:text-[2.1rem] text-[1.8rem]">
                    {questionData?.title[language.name]}
                </p>
            }
        </div>

    )
}
//md:mt-[-5rem]