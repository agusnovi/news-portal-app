import NewsList from "@/components/news/news-list"
import { getLatestNews } from "@/lib/helper"
import { News } from "@/lib/types"

export default function LatestPage() {
    const latestNews: News[] = getLatestNews()

    if(latestNews.length === 0) return <main className="main"><h1>Latest news empty</h1><p>We don`t have news latest</p></main>
    
    return <main className="main">
        <h1>Latest News</h1>
        <NewsList news={latestNews} />
    </main>
}