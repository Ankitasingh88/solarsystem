import SpaceImage from "@/components/SpaceImage"
import { Honk } from "next/font/google"
import { Rhodium_Libre } from "next/font/google"
import { Rubik_Beastly } from "next/font/google"

const rl = Rhodium_Libre({subsets: ["latin"]})
const rb = Rubik_Beastly({
    weight: "400",
    subsets: ["latin"]
})

const honk = Honk({ subsets: ["math"] })
const Sun = () => {

    return (
        <>
            <h2 className={honk.className}>The sun</h2>
            <h4 className={rl.className}>Here is the Rhodium Libre font</h4>
            <p className={rb.className}>The sun is a big explosion that contains 99% of the mass of our solar system</p>
            <SpaceImage imageUrl={"/sun.jpg"} />
        </>
    )
}

export default Sun