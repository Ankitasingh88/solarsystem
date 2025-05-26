import Image from "next/image"

const SpaceImage = ({ imageUrl }) => {
    return (
        <Image src={imageUrl} alt="space picture" height={1000} width={1000}
          style = {{
            height: "auto",
            width: "100%"
         }}

        sizes="
        (max-width: 480px) 100vw,
        (max-width: 1024px) 50vw,
        25vw
        "
        />
    )
}

export default SpaceImage