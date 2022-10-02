export default function Button ({text, onClick}) {

    const handleClick = ()=>{
        onClick();
    }

    return (
        <button onClick={handleClick} type={"button"}
        className="h-[2.6rem] px-5 m-2 text-blue-600 hover:text-blue-700 transition-colors duration-150 bg-white rounded-[0.35rem] hover:border-blue-700 h-12 px-6 m-2 text-lg border-2 border-blue-700/75">
            {text}
        </button>
    )
}