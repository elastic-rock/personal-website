import Image from "next/image";
import GetItOnGitHubImg from "/public/get-it-on-github.png"


export default function GetItOnGitHub() {
    return (
        <Image
        src={GetItOnGitHubImg}
        alt="Get it on GitHub"
        className="h-20 w-auto"
        height={80}
        />
    )
}