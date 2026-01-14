import { News } from "@/lib/types";
import Link from "next/link"
import Image from "next/image"
import styles from "./news-list.module.scss"

export default function NewsList({ news }: {news: News[]}) {
    return (
      <section className="grid">
        {news.map((newsItem) => {
          return (
            <Link
              className={styles.item}
              key={newsItem.id}
              href={`/news/${newsItem.slug}`}
            >
              <Image
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
                fill
              />
              <h1>{newsItem.title}</h1>
            </Link>
          );
        })}
      </section>
    );
}