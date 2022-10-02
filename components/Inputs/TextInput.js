export default function TextInput ({questionData, language, isLoading, required = true}){
    return (

        <div className={`mt-3 w-full flex justify-center ${isLoading ? 'animate-pulse' : ''}`}>
            {isLoading ? 
                <div className="bg-gray-300 m-0 leading-tight h-[3rem] w-full text-center rounded-md"/>
            :
                <label className="m-auto w-full h-[56px] relative block p-3 border-2 border-gray-200 rounded" htmlFor={questionData.variableName}>
                <input
                    className="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer focus:outline-none"
                    id={questionData.variableName}
                    name={questionData.variableName}
                    type="text"
                    placeholder={questionData.label[language.name]}
                    required={required}
                />

                <span className="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                    {questionData.label[language.name]}
                </span>
                </label>
            }
        </div>

    )
}