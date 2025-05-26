import { STIX_Two_Text } from "next/font/google"

const stix = STIX_Two_Text({subsets:["latin"]})

const Earth = () => {
    return (
        <div className={stix.className}>
            <h2>Earth is Our HOME!!</h2>
        </div>
    )
}

export default Earth