import Image from "next/image"
import airobot from "@/public/images/news/ai-robot.jpg"
import beaver from '@/public/images/news/beaver.jpg';
import couplecooking from '@/public/images/news/couple-cooking.jpg';
import hiking from '@/public/images/news/hiking.jpg';
import landscape from '@/public/images/news/landscape.jpg';
import styles from "./page.module.scss"

export default function Home() {
  return (
    <>
      <header className={styles.header}>
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
      </header>
      <main className={styles.main}>
        <h1>Read your favorite news</h1>
      </main>
    </>
  );
}
