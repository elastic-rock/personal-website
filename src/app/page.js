import Image from "next/image";
import Link from "next/link";
import EigerexpressImg from "/public/eigerexpress_fog.jpg"
import EigerImg from "/public/eiger.jpg"
import ChaffinchImg from "/public/eurasian_chaffinch.jpg"
import SnowGunImg from "/public/snow_gun.jpg"
import PhoneImg from "/public/girl_holding_phone.jpg"
import SnowCloudImg from "/public/snow_cloud.jpg"
import KeepScreenOnIcon from "/public/keepscreenon/icon.png"
import CandleIcon from "/public/candle/icon.png"
import SmallImage from "@/components/smallimage";
import AppIcon from "@/components/appicon";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Image src={EigerexpressImg} alt="Photo of cable car" className="brightness-50 object-cover z-0 h-screen w-full" priority={true} placeholder="blur"></Image>
        <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-white text-center font-bold text-4xl">Hi, I'm David</h1>
          <br className="block"></br>
          <p className="text-white text-center">I make photos, I play with computers, and I like cable cars.</p>
        </div>
      </div>

      <div className="px-12 py-12 mx-auto max-w-[88rem] text-center">
        <h1 className="text-black font-bold text-3xl">My Apps</h1>
        <p className="text-black py-4">To be a bit more specific, one of the things I do is program apps for Android. Here are a few I made.</p>
        <div className="flex flex-wrap gap-12 justify-center py-4">
          <div className="sm:flex gap-12 w-[36rem] sm:text-start">
            <AppIcon image={KeepScreenOnIcon} altText="KeepScreenOn icon"/>
            <div className="max-sm:py-4">
              <Link href="/apps/keepscreenon" className="text-black font-bold text-xl hover:underline">KeepScreenOn</Link>
              <p className="text-black py-2">
                Keep Screen On allows you to add a quick settings tile, with which you can easily disable screen timeout and then restore the previous timeout value.
              </p>
            </div>
          </div>

          <div className="sm:flex gap-12 w-[36rem] sm:text-start">
            <AppIcon image={CandleIcon} altText="Candle icon"/>
            <div className="max-sm:py-4">
              <Link href="/apps/candle" className="text-black font-bold text-xl hover:underline">Candle</Link>
              <p className="text-black py-2">
                A very simple app that allows you to use your display as a torch. The brightness can be adjusted and the app can be started from a quick settings tile.
              </p>
            </div>
          </div>
        </div>
        <br className="block"></br>
        <Link href="/apps" className="rounded-full bg-neutral-200 hover:bg-neutral-300 px-4 py-2">Apps</Link>
      </div>

      <div className="relative text-center">
        <Image src={EigerImg} className="-z-10 brightness-[.25] absolute inset-0 object-cover h-full w-full" alt="Eiger"></Image>
        <div className="px-12 py-12 z-10 text-white mx-auto max-w-5xl">
          <h1 className="font-bold text-3xl">Capturing the world</h1>
          <p className="py-4">Appart from the above, I am very much into photography. You may see some of my work on the webpages of this site but also on the dedicated page.</p>
          <div className="py-4 gap-4 flex flex-wrap justify-center">
            <SmallImage image={EigerImg} altText="Photo of the Eiger north face in autumn"/>
            <SmallImage image={ChaffinchImg} altText="Photo of a Eurasian Chiffinch"/>
            <SmallImage image={SnowGunImg} altText="Photo of a snow gun overlooking a valley"/>
            <SmallImage image={PhoneImg} altText="Photo of a person holding their phone above them"/>
            <SmallImage image={SnowCloudImg} altText="Photo of a dramatic cloud formation in the mountains"/>
          </div>
          <br className="block"/>
          <Link href="/photography" className="rounded-full border hover:border-2 hover:font-bold px-4 py-2 text-white">Photography</Link>
        </div>
      </div>

      <div className="px-12 py-12 text-center mx-auto max-w-5xl">
        <h1 className="text-black font-bold text-3xl">A bit more about me</h1>
        <p className="text-black py-4">
          There won't be a lot here as I value my right to privacy. However, if I were to say something, appart from taking interest in the realm of online privacy, I enjoy nature, mountains, playing piano and guitar, and anything that has to do with computers.&#128579;
        </p>
      </div>

      <div className="px-12 py-12 text-center bg-neutral-100">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-black font-bold text-3xl">Get in touch with me</h1>
          <p className="text-black py-4">Whetever the reason, if you have something to say, don't hesitate to contact me. I will try to get in touch with you as soon as possible.</p>
          <br className="block"></br>
          <Link href="/contact" className="rounded-full bg-neutral-300 hover:bg-neutral-400 px-4 py-2">Contact</Link>
        </div>
      </div>
    </main>
  );
}
