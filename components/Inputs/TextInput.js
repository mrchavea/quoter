export default function TextInput ({id, label, required = true}){
    return (
        <label class="relative block p-3 border-2 border-gray-200 rounded-lg" for={id}>
        <input
            class="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer focus:outline-none"
            id={id}
            name={id}
            type="text"
            placeholder={label}
            required={required}
        />

        <span class="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
            {label}
        </span>
        </label>
    )
}