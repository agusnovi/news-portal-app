'use client'
import Link from "next/link"
import cs from 'classnames'
import styles from "./nav-link.module.scss"
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className: string
    }) {
    const pathname = usePathname()
    
  return (
    <Link href={href} className={cs(styles.link, className, pathname.startsWith(href) && styles.active)}>
      {children}
    </Link>
  );
}