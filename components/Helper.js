export default function Helper({questionData, language, isLoading}){
    return (
        <div className={`md:h-[40%] w-full self-start ${isLoading ? 'flex animate-pulse justify-center' : ''}`}>
            {   isLoading ? 
                <div className="flex flex-wrap h-full w-full content-start">
                    <div className="w-[100%] h-5 bg-gray-300 rounded-md"></div>
                    <div className="w-[100%] h-5 bg-gray-300 rounded-md mt-2"></div>
                </div>
            :
                <p className="text-left text-[16px] md:text-[20px] text-blue-500">{questionData.helper[language.name]}</p>
            }
        </div>

    )
}
//md:mt-[3.2rem] mt-2 