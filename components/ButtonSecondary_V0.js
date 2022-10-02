export default function Button ({text, onClick}) {

    const handleClick = ()=>{
        onClick();
    }

    return (
        <button onClick={handleClick} type={"button"}
        className="bg-left-bottom bg-gradient-to-r from-blue-700 to-blue-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out
        h-[2.6rem] px-5 m-2 text-blue-600 hover:text-blue-700 transition-colors duration-150 bg-white rounded-[0.35rem] hover:border-blue-700 h-12 px-6 m-2 text-lg border-2 border-blue-700/75">
            {text}
        </button>
    )
}