'use client'

import Image from "next/image";
import SolarSystemImage from '../../public/solarsystem.jpg'
import styles from "./page.module.css";
import SpaceImage from "@/components/SpaceImage";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.page}>
      <h3>Welcome to my solar system page</h3>
      
      <Image src={SolarSystemImage} alt="solar system image"
        style={{
          width: "100%",
          height: "auto"
        }} />
      <p>Here is an Image of some cool space stuff</p>
      <SpaceImage imageUrl="/pillars.webp" />
      <p>Testing images</p>
      <div className="bg-image">
        <Image fill src="/pillars.webp"  alt="pillars of creation"
        style= {{
          objectFit: "cover"
        }}/>
      </div>

      
      <button onClick={ () => setCount(count + 1)}>Click me!</button>
      {count && <p>{count}</p>}
    </div>
  )
}
