import Image from "next/image";

export default function SmallImage({ image, altText }) {
    return (
        <Image
            className="h-48 w-auto rounded-3xl"
            src={image}
            alt={altText}
            width={288}
            height={192}
        />
    )
}