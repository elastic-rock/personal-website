import Image from "next/image";
import GetItOnFDroid from "/public/get-it-on-fdroid.png"
import ScreenshotApp from "/public/keepscreenon/screenshot-app.png"
import ScreenshotTileDisabled from "/public/keepscreenon/screenshot-tile-disabled.png"
import ScreenshotTileEnabled from "/public/keepscreenon/screenshot-tile-enabled.png"
import ScreenshotTablet from "/public/keepscreenon/screenshot-tablet.png"
import TopImage from "@/components/topimage";

export default function KeepScreenOn() {
    return (
        <main>
            <TopImage image={ScreenshotTablet} altText="Screenshot of KeepScreenOn on a tablet" title="KeepScreenOn"/>
            <div className="py-12 px-12 mx-auto max-w-5xl text-center text-black">
                <p>
                    Keep Screen On allows you to add a quick settings tile, with which you can easily disable screen timeout and then restore the previous timeout value.
                </p>
                <p className="py-4">
                    For example, this may be useful to you if you need the display to stay on temporarily when viewing a website or document or if your device does not have the option to set the screen timeout to never in the settings.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                    <a href="https://f-droid.org/packages/com.elasticrock.keepscreenon/" className="">
                        <Image src={GetItOnFDroid} alt="Get it on F-Droid" className="h-20 w-auto"></Image>
                    </a>
                </div>
                <div className="flex flex-wrap gap-4 justify-center py-4">
                    <Image src={ScreenshotApp} alt="Screenshot of KeepScreenOn app" className="w-64 h-auto"/>
                    <Image src={ScreenshotTileDisabled} alt="Screenshot of KeepScreenOn tile in disabled state" className="w-64 h-auto"/>
                    <Image src={ScreenshotTileEnabled} alt="Screenshot of KeepScreenOn tile in enabled state" className="w-64 h-auto"/>
                </div>
            </div>
        </main>  
    );
}