import TopImage from "@/components/topimage";

import Image from "next/image";

import KaunertalFaceImg from "/public/kaunertal_face.jpg"

export default function Photography() {
    return (
        <main>
            <TopImage image={KaunertalFaceImg} altText="A wooden creature" title="Photography"/>

            <div className="px-12 py-12 text-black flex justify-center">
                <div>
                    <p>My photos can be found on the following stock imagery websites:</p>
                    <br className="block"/>
                    <ul className="list-disc list-inside">
                        <li>
                            <a href="https://www.shutterstock.com/g/davidweis" className="hover:underline">Shutterstock</a>
                        </li>
                        <li>
                            <a href="https://stock.adobe.com/contributor/211042452/david-weis" className="hover:underline">Adobe Stock</a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}