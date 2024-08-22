import Image from "next/image"

export default function PhoneScreenshot({ image, altText }) {
    return (
        <Image
            className="w-64 h-auto"
            src={image}
            alt={altText}
            width={256}
            height={541}
            quality={100}
        />
    )
}