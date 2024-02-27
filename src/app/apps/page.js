import Image from "next/image";
import Link from "next/link";

import TopImage from "@/components/topimage";

import KeepScreenOnIcon from "/public/keepscreenon/icon.png"
import CandleIcon from "/public/candle/icon.png"
import WebsiteReflectionImg from "/public/website_reflection.jpg"

export const metadata = {
    title: "Apps - David Weis"
}

export default function Apps() {
    return (
        <main>
            <TopImage image={WebsiteReflectionImg} altText="Photo of the website reflected on a phone" title="Apps"/>
        
            <div className=" px-12 py-12 flex flex-wrap gap-12 justify-center mx-auto max-w-[88rem] text-center">
                <div className="sm:flex gap-12 w-[36rem] sm:text-start">
                    <Image src={KeepScreenOnIcon} alt="KeepScreenOn icon" className="h-36 w-36 rounded-3xl mx-auto"></Image>
                    <div className="max-sm:py-4">
                        <Link href="/apps/keepscreenon" className="text-black font-bold text-xl hover:underline">KeepScreenOn</Link>
                        <p className="text-black py-2">
                            Keep Screen On allows you to add a quick settings tile, with which you can easily disable screen timeout and then restore the previous timeout value.
                        </p>
                    </div>
                </div>

                <div className="sm:flex gap-12 w-[36rem] sm:text-start">
                    <Image src={CandleIcon} alt="Candle icon" className="h-36 w-36 rounded-3xl mx-auto"></Image>
                    <div className="max-sm:py-4">
                        <Link href="/apps/candle" className="text-black font-bold text-xl hover:underline">Candle</Link>
                        <p className="text-black py-2">
                            A very simple app that allows you to use your display as a torch. The brightness can be adjusted and the app can be started from a quick settings tile.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}