import TopImage from "@/components/topimage";
import ArrowImg from "/public/arrow_lux.jpg"

export const metadata = {
    title: "Contact - David Weis"
}

export default function Contact() {
    return (
        <main>
            <TopImage image={ArrowImg} altText="Arrow sign on painted on a tree" title="Contact"></TopImage>

            <div className="px-12 py-12 text-black flex justify-center">
                <div>
                    <p>If you wish to contact me, you can do so using one of the following encrypted methods below (in order of preference):</p>
                    <br className="block"/>
                    <ul className="list-disc list-inside">
                        <li>
                            Signal:&nbsp;
                            <a href="https://signal.me/#eu/caBq8g9dFKBQGOV28qlTSX0LUalVwKZImzIshcx-s-diioxrnSlCXYiPyTqf4n4l" className="hover:underline">@ibex.07</a>
                        </li>
                        <li>
                            Matrix:&nbsp;
                            <a href="https://matrix.to/#/@elasticrock:matrix.org" className="hover:underline">@elasticrock:matrix.org</a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>  
    );
}
