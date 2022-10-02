export default function ButtonSecondary ({text, onClick}) {

    const handleClick = ()=>{
        onClick();
    }

    return (
        <div className="w-fit auto group text-blue-600 transition-all duration-300 ease-in-out">
            <button onClick={handleClick} type={"button"}
            className="bg-right-bottom bg-gradient-to-r from-blue-700 to-blue-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out
            h-[2.6rem] mr-2 text-blue-600 hover:text-blue-700 transition-colors duration-150 rounded-[0.35rem] h-12 py-6-6 my-2 text-lg">
                {text}
            </button>
        </div>

    )
}