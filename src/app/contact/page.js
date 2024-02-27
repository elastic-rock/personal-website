import TopImage from "@/components/topimage";
import ArrowImg from "/public/arrow_lux.jpg"

export default function Contact() {
    return (
        <main>
            <TopImage image={ArrowImg} altText="Arrow sign on painted on a tree" title="Contact"></TopImage>

            <div className="px-12 py-12 text-black flex justify-center">
                <div>
                    <p>If you wish to contact me, you can do so using one of the following encrypted methods below:</p>
                    <br className="block"/>
                    <ul className="list-disc list-inside">
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
