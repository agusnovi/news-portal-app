import { use } from "react";
import { getAvailableNewsMonths, getAvailableNewsYears, getMonthByDate, getNewsForYear, getNewsForYearAndMonth } from '@/lib/helper';
import Link from "next/link"
import { News } from "@/lib/types";
import NewsList from "@/components/news/news-list";
import styles from './page.module.scss';
import NavLink from "@/components/nav/nav-link";

export default function FilterPage({ params }: { params: Promise<{ filter: string[] | undefined }> }) {
    const { filter } = use(params)
    const year = filter?.[0]
    const month = filter?.[1]

    const yearsFilter: number[] = getAvailableNewsYears()
    let news: News[] = []
    let monthFilter: number[] = []

    if (year) {
        monthFilter = getAvailableNewsMonths(year);
    }

    if (year && !month) {
        news = getNewsForYear(year)
    }

    if (year && month) {
        news = getNewsForYearAndMonth(year, month)
    }

    if (year && !yearsFilter.includes(+year) || month && !monthFilter.includes(+month)) {
        throw new Error("invalid filter")
    }
      return (
        <main className="main border-bottom">
          <h1>Archive News</h1>
          <section className={styles.filter}>
            {yearsFilter.length > 0 && (
              <div className={styles.filters}>
                <p>Filter: </p>
                {yearsFilter.map((year) => (
                  <NavLink
                    href={`/archive/${year}`}
                    className={styles['filter-item']}
                    key={year}
                  >
                    {year}
                  </NavLink>
                ))}
              </div>
            )}
            {monthFilter.length > 0 && (
              <div className={styles.filters}>
                <p>Filter months: </p>
                {monthFilter.map((month) => (
                  <NavLink
                    href={`/archive/${year}/${month}`}
                    className={styles['filter-item']}
                    key={month}
                  >
                    {getMonthByDate(+month)}
                  </NavLink>
                ))}
              </div>
            )}
          </section>
          <section className={styles.list}>
            {news.length > 0 ? (
              <NewsList news={news} />
            ) : (
              <>
                <h3>Empty news</h3>
                <p>Please change filters and finds your favorite news</p>
              </>
            )}
          </section>
        </main>
      );
}