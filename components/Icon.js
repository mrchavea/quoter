import Image from "next/image"

export default function Icon ({height}){
    return(
        <Image src='/HelloAuto.png' alt="Logotipo" height={29} width={167} layout='fixed'/>
    )
}