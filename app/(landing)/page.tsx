import Image from "next/image"
import airobot from "@/public/images/news/ai-robot.jpg"
import beaver from '@/public/images/news/beaver.jpg';
import couplecooking from '@/public/images/news/couple-cooking.jpg';
import hiking from '@/public/images/news/hiking.jpg';
import landscape from '@/public/images/news/landscape.jpg';
import logo from "@/app/icon.png"
import Link from "next/link"
import styles from "./page.module.scss"

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={logo} alt="logo" fill />
        </div>
        <h1>A News Site For The Next Generation</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, enim earum commodi non veniam quos, molestias facere, quibusdam reprehenderit neque ullam pariatur tempore obcaecati veritatis necessitatibus. Reiciendis tenetur cum officiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p> 
        <Link href="/news">Read the latest news</Link>
      </header>
      <main className={styles.main}>
        <div style={{ gridArea: 'box1' }}>
          <Image src={airobot} alt="airobot" fill />
          <h1>Ai-Robot</h1>
        </div>
        <div style={{ gridArea: 'box2' }}>
          <Image src={beaver} alt="beaver" fill />
          <h1>Beaver</h1>
        </div>
        <div style={{ gridArea: 'box3' }}>
          <Image src={couplecooking} alt="couplecooking" fill />
          <h1>Couple Cooking</h1>
        </div>
        <div style={{ gridArea: 'box4' }}>
          <Image src={hiking} alt="hiking" fill />
          <h1>Hiking</h1>
        </div>
        <div style={{ gridArea: 'box5' }}>
          <Image src={landscape} alt="landscape" fill />
          <h1>Landscape</h1>
        </div>
      </main>
    </>
  );
}
