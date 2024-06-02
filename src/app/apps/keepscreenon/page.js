import ScreenshotApp from "/public/keepscreenon/screenshot-app.png"
import ScreenshotTileDisabled from "/public/keepscreenon/screenshot-tile-disabled.png"
import ScreenshotTileEnabled from "/public/keepscreenon/screenshot-tile-enabled.png"
import CandleOnPhoneImg from "/public/candle/candle_on_phone.jpg"
import TopImage from "@/components/topimage";
import GetItOnFDroid from "@/components/getitonfdroid";
import GetItOnGitHub from "@/components/getitongithub";
import PhoneScreenshot from "@/components/phonescreenshot";

export const metadata = {
    title: "KeepScreenOn - David Weis"
}

export default function KeepScreenOn() {
    return (
        <main>
            <TopImage image={CandleOnPhoneImg} altText="Screenshot of the app Candle on a phone" title="KeepScreenOn"/>
            <div className="py-12 px-12 mx-auto max-w-5xl text-center text-black">
                <p>
                    Keep Screen On allows you to add a quick settings tile, with which you can easily disable screen timeout and then restore the previous timeout value.
                </p>
                <p className="py-4">
                    For example, this may be useful to you if you need the display to stay on temporarily when viewing a website or document or if your device does not have the option to set the screen timeout to never in the settings.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                    <a href="https://f-droid.org/packages/com.elasticrock.keepscreenon/" className="">
                        <GetItOnFDroid/>
                    </a>
                    <a href="https://github.com/elastic-rock/KeepScreenOn/releases/latest">
                        <GetItOnGitHub/>
                    </a>
                </div>
                <div className="flex flex-wrap gap-4 justify-center py-4">
                    <PhoneScreenshot image={ScreenshotApp} altText="Screenshot of KeepScreenOn app"/>
                    <PhoneScreenshot image={ScreenshotTileDisabled} altText="Screenshot of KeepScreenOn tile in disabled state"/>
                    <PhoneScreenshot image={ScreenshotTileEnabled} altText="Screenshot of KeepScreenOn tile in enabled state"/>
                </div>
            </div>
        </main>  
    );
}