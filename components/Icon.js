import Image from "next/image"

export default function Icon ({height}){
    console.log("HEIGHT ERR", height)
    return(
        <Image src='/HelloAuto.png' alt="Logotipo" height={44} width={256} layout='fixed'/>
    )
}