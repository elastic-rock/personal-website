import Link from 'next/link'
import Image from "next/image";
import CaffinchImage from "/public/eurasian_chaffinch.jpg"
 
export default function NotFound() {
  return (
    <main>
        <div className="relative">
            <Image src={CaffinchImage} alt="Eurasian Chaffinch" className="h-96 w-full object-cover z-0" priority={true}/>
            <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <h1 className="text-white text-center font-bold text-4xl">Error 404</h1>
            </div>
        </div>

        <div className="px-12 py-12 text-black text-center">
            <p>The page you are looking for cannot be found.</p>
            <br className='block'></br>
            <Link href="/" className="rounded-full bg-neutral-100 hover:bg-neutral-200 px-4 py-2">Homepage</Link>
        </div>
    </main> 
  )
}