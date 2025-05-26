'use client'
 
import Link from "next/link"
import { usePathname } from "next/navigation"
 
const Navigation = ({links}) => {
    const path = usePathname();
 
    const isActive = (link) => {
        if (link === "/") {
            return path === link ?  "active" : ''
        } else {
             return path.includes(link) ?  "active" : ''
        }
    }
   
    return (
        <nav>
            {links.map((item, index) =>
                <Link className={`navItem ${isActive(item.link)}`} key={index} href={item.link}>{item.name}</Link>)
            }
        </nav>
    )
}
 
export default Navigation