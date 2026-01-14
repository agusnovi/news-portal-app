import { getDetailNews } from "@/lib/helper"
import { notFound } from "next/navigation"
import Image from "next/image"
import { use } from "react"
import styles from './page.module.scss';

export default function ImagePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const detail = getDetailNews(slug)

    if (!detail) notFound()
    
    const { image, title } = detail

    return (
      <main className="main">
        <div className={styles.image}>
          <Image src={`/images/news/${image}`} alt={title} fill />
        </div>
      </main>
    );
}