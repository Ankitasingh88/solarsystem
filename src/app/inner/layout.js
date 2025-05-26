import Navigation from "@/components/Navigation"
import { innerPlanets } from "@/data/links"

const Layout = ({children}) => {
    return (
        <>
        <div>Subtitle for Inner Planets</div>
        <Navigation links={innerPlanets} />
        {children}
        </>    
    )
}

export default Layout