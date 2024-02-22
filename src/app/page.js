import Image from "next/image";
import Link from "next/link";
import EigerexpressImg from "/public/eigerexpress_fog.webp"
import KeepScreenOnIcon from "/public/keepscreenon_icon.webp"
import CandleIcon from "/public/candle_icon.webp"

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Image src={EigerexpressImg} alt="Photo of cable car" className="brightness-50 h-screen w-full object-cover z-0" priority={true}></Image>
        <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-white text-center font-bold text-4xl">Hi, I'm David</h1>
          <br className="block"></br>
          <p className="text-white text-center">I make photos, I play with computers, and I like cable cars.</p>
        </div>
      </div>

      <div className="px-12 py-12">
        <h1 className="text-center text-black font-bold text-3xl">My Apps</h1>
        <p className="text-center text-black py-4">To be more specific, one of the things I do is program apps for Android. Here are a few I made.</p>
        <div className="flex flex-wrap gap-12 justify-center py-4">
          <div className="w-[8rem] h-auto">
            <a href="#">
              <Image src={KeepScreenOnIcon} alt="Icon of KeepScreenOn" className="rounded-lg"/>
              <p className="text-center text-black py-2">KeepScreenOn</p>
            </a>
          </div>
          <div className="w-[8rem] h-auto">
            <a href="#">
              <Image src={CandleIcon} alt="Icon of Candle" className="rounded-lg"/>
              <p className="text-center text-black py-2">Candle</p>
            </a>
          </div>
        </div>
      </div>

      <div className="px-12 py-12 text-center bg-neutral-100">
        <h1 className="text-black font-bold text-3xl">Get in touch with me</h1>
        <p className="text-black py-4">Whetever the reason, if you have something to say, don't hesitate to contact me. I will try to get in touch with you as soon as possible.</p>
        <br className="block"></br>
        <Link href="/contact" className="rounded-full bg-neutral-300 hover:bg-neutral-400 px-4 py-2">Contact</Link>
      </div>
    </main>
  );
}
