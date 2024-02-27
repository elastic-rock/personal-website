import Image from "next/image";
import GetItOnFDroid from "/public/get-it-on-fdroid.png"
import ScreenshotApp from "/public/candle/screenshot-app.png"
import CandleOnPhoneImg from "/public/candle/candle_on_phone.jpg"
import TopImage from "@/components/topimage";

export default function Candle() {
    return (
        <main>
            <TopImage image={CandleOnPhoneImg} altText="Photo of Candle running on a phone" title="Candle"/>
            <div className="py-12 px-12 mx-auto max-w-5xl text-center text-black">
                <p>
                    A very simple app that allows you to use your display as a torch. The brightness can be adjusted and the app can be started from a quick settings tile.
                </p>
                <br className="block"/>
                <div className="flex flex-wrap gap-2 justify-center">
                    <a href="https://f-droid.org/packages/com.elasticrock.candle/" className="">
                        <Image src={GetItOnFDroid} alt="Get it on F-Droid" className="h-20 w-auto"></Image>
                    </a>
                </div>
                <div className="flex flex-wrap gap-4 justify-center py-4">
                    <Image src={ScreenshotApp} alt="Screenshot of KeepScreenOn app" className="w-64 h-auto"/>
                </div>
            </div>
        </main>  
    );
}