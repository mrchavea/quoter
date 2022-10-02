export default function Helper({questionData, language, isLoading}){
    return (
        <div className={`md:h-[40%] w-full self-start ${isLoading ? 'flex animate-pulse justify-center' : ''}`}>
            {   isLoading ? 
                <div className="md:w-[100%] w-[80%] h-8 bg-gray-400 rounded-md"></div>
            :
                <p className="text-left text-[16px] md:text-[20px] text-blue-500">{questionData.helper[language.name]}</p>
            }
        </div>

    )
}
//md:mt-[3.2rem] mt-2 