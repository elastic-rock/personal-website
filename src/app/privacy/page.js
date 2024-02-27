import TopImage from "@/components/topimage";
import CathedralImg from "/public/cathedral.jpg"

export default function Contact() {
    return (
        <main>
            <TopImage image={CathedralImg} altText="A cathedral" title="Privacy"></TopImage>
            <p className="text-center text-black py-12 px-12">This website does not collect any personal information.</p>
        </main>  
    );
}