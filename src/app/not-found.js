import Link from 'next/link'
import CaffinchImage from "/public/eurasian_chaffinch.jpg"
import TopImage from '@/components/topimage';

export const metadata = {
  title: "Page not found - David Weis"
}
 
export default function NotFound() {
  return (
    <main>
        <div className="relative">
            <TopImage image={CaffinchImage} altText="Eurasian Chaffinch" title="Error 404"/>
        </div>

        <div className="px-12 py-12 text-black text-center">
            <p>The page you are looking for cannot be found.</p>
            <br className='block'></br>
            <Link href="/" className="rounded-full bg-neutral-100 hover:bg-neutral-200 px-4 py-2">Homepage</Link>
        </div>
    </main> 
  )
}