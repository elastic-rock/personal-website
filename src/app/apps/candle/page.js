import ScreenshotApp from "/public/candle/screenshot-app.png"
import CandleOnPhoneImg from "/public/candle/candle_on_phone.jpg"
import TopImage from "@/components/topimage";
import GetItOnFDroid from "@/components/getitonfdroid";
import PhoneScreenshot from "@/components/phonescreenshot";

export const metadata = {
    title: "Candle - David Weis"
}

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
                        <GetItOnFDroid/>
                    </a>
                </div>
                <div className="flex flex-wrap gap-4 justify-center py-4">
                    <PhoneScreenshot image={ScreenshotApp} altText="Screenshot of KeepScreenOn app"/>
                </div>
            </div>
        </main>  
    );
}