import Image from "next/image";

export default function TopImage({ image, altText, title}) {
    return (
        <div className="relative">
            <Image
                src={image}
                alt={altText}
                className="brightness-50 h-96 w-full object-cover z-0"
                priority={true}
                quality={100}
                placeholder="blur"
            />
            <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <h1 className="text-white text-center font-bold text-4xl">{title}</h1>
            </div>
        </div>
    )
}