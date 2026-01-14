import { getAllNews } from "@/lib/helper"
import NewsList from "@/components/news/news-list"
import styles from './page.module.scss';

export default function NewsPage() {
  const newsList = getAllNews()

  return <main className="main">
    <NewsList news={newsList}/>
  </main>
}