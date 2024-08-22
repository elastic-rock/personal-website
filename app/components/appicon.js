import Image from "next/image";

export default function AppIcon({ image, altText }) {
    return (
        <Image
            className="h-36 w-36 rounded-3xl mx-auto"
            src={image}
            alt={altText}
            width={144}
            height={144}
        />
    )
}