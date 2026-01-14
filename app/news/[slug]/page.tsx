import Image from "next/image"
import { use } from "react"
import Link from "next/link"
import { getDetailNews } from "@/lib/helper";
import styles from './page.module.scss';
import { notFound } from "next/navigation";

export default function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const detail = getDetailNews(slug)

    if (!detail) return notFound()
    
    return (
      <main className={styles.main}>
        <div className={styles.image}>
          <Link href={`/news/${slug}/image`}>
            <Image
              src={`/images/news/${detail.image}`}
              alt={detail.title}
              fill
            />
          </Link>
        </div>
        <h1>{detail.title}</h1>
        <p className={styles.date}>{detail.date}</p>
        <p>{detail.content}</p>
      </main>
    );
}