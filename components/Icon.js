import Image from "next/image"

export default function Icon ({height}){
    console.log("HEIGHT ERR", height)
    return(
        <Image src='/driverly.jpg' alt="Logotipo" height={height} width={height} layout='fixed'/>
    )
}