'use client'
import cs from "classnames"
import Image from "next/image"
import Link from "next/link"
import logo from "@/app/icon.png"
import { useState } from "react"
import { usePathname } from 'next/navigation';

import styles from "./main-header.module.scss"

export default function MainHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

    return (
      <>
        <div className={styles["mobile-nav"]}>
          <Link className={styles["mobile-logo"]} href="/">
            <div className={styles.image}>
              <Image src={logo} alt="logo" fill />
            </div>
            News Portal
          </Link>
          <button className={styles.open} type="button" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#c9c9c9"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
        <nav className={cs(styles.nav, open && styles.show)}>
          <ul>
            <li>
              <button className={styles.close} type="button" onClick={() => setOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#c9c9c9"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </li>
            <li>
              <Link className={styles.logo} href="/">
                <div className={styles.image}>
                  <Image src={logo} alt="logo" fill />
                </div>
                News Portal
              </Link>
            </li>
            <li>
              <Link className={cs(pathname.startsWith("/news") && styles.active)} href="/news" onNavigate={() => setOpen(false)}>News</Link>
            </li>
            <li>
              <Link className={cs(pathname.startsWith("/archive") && styles.active)} href="/archive" onNavigate={() => setOpen(false)}>Archive</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.overlay} aria-hidden="true" onClick={() => setOpen(false)}/>
      </>
    );
}