import RigthArrow from "./RightArrow";

export default function Button ({text, isSubmit}) {
    return (
        <div className="w-fit group text-blue-600 transition-all duration-300 ease-in-out">
            <button type={isSubmit ? "submit" : "button"}
            className="bg-left-bottom bg-gradient-to-r from-blue-700 to-blue-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out
            self-end inline-flex items-center h-[2.6rem] text-blue-600 transition-colors duration-150 rounded-[0.35rem] hover:text-blue-800 h-12 py-6-6 my-2 text-lg">
                {text}
                <span className="ml-2">
                    <RigthArrow/>
                </span> 
            </button>
        </div>

    )
}