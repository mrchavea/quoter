export default function TextInput ({data, language, isLoading, required = true}){
    return (

        <div className={`${isLoading ? 'animate-pulse' : ''}`}>
            {isLoading ? 
                <div className="bg-gray-400 m-0 leading-tight h-[4rem] sm:w-[50vw] w-[80vw] text-center"/>
            :
                <label className="relative block p-3 border-2 border-gray-200 rounded-lg" htmlFor={data.variableName}>
                <input
                    className="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer focus:outline-none"
                    id={data.variableName}
                    name={data.variableName}
                    type="text"
                    placeholder={data.label[language.name]}
                    required={required}
                />

                <span className="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                    {data.label[language.name]}
                </span>
                </label>
            }
        </div>

    )
}