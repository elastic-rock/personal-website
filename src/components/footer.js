import Link from "next/link"

export default function Footer() {
    return (
        <footer className="sticky top-[100vh] px-12 py-12 bg-neutral-800 text-white">
            <div className="flex gap-12 justify-center">
                <p>© 2024 David Weis</p>
                <Link href="/privacy" className="hover:underline">Privacy</Link>
                <a href="https://github.com/elastic-rock" className="hover:underline">GitHub</a>
            </div>
        </footer>
    )
}