import Image from "next/image";
import GetItOnFDroidImg from "/public/get-it-on-fdroid.png"


export default function GetItOnFDroid() {
    return (
        <Image
        src={GetItOnFDroidImg}
        alt="Get it on F-Droid"
        className="h-20 w-auto"
        height={80}
        />
    )
}