export default function Button ({text, isSubmit}) {
    return (
        <button type={isSubmit ? "submit" : "button"}
        className="h-[2.6rem] px-5 m-2 text-indigo-100 transition-colors duration-150 bg-blue-600 rounded-[0.35rem] hover:bg-blue-700 h-12 px-6 m-2 text-lg">
            {text}
        </button>
    )
}