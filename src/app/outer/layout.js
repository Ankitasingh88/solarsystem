import Navigation from "@/components/Navigation";
import { outerPlanets } from "@/data/links"

const Layout = ({children}) => {
    return (
         <>
          <h2>The Outer Planets Are All Gas Giants!</h2>
           <Navigation links={outerPlanets} />
           {children}
         </>
    )
}

export default Layout