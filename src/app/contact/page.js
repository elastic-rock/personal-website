import Image from "next/image";
import ArrowImg from "/public/arrow_lux.webp"

export default function Contact() {
    return (
        <main>
            <div className="relative">
                <Image src={ArrowImg} alt="Sign on tree" className="brightness-50 h-96 w-full object-cover z-0" priority={true}/>
                <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <h1 className="text-white text-center font-bold text-4xl">Contact</h1>
                </div>
            </div>

            <div className="px-12 py-12 text-black flex justify-center">
                <div>
                    <p>If you wish to contact me, you can do so using one of the following encrypted methods below:</p>
                    <br className="block"/>
                    <ul className="list-disc list-inside">
                        <li>
                            Matrix:&nbsp;
                            <a href="https://matrix.to/#/@elasticrock:matrix.org" className="hover:underline">@elasticrock:matrix.org</a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>  
    );
}
