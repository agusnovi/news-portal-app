'use client'
import { getDetailNews } from '@/lib/helper';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { use } from 'react';
import styles from './page.module.scss';

export default function InterceptedImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
  }) {
  const router = useRouter()
  const { slug } = use(params);
  const detail = getDetailNews(slug);

  if (!detail) notFound();

  const { image, title } = detail;

  return (
    <>
      <div className={styles.backdrop} onClick={router.back} />
      <dialog open className={styles.dialog}>
        <div className={styles.image}>
          <Image
            src={`/images/news/${image}`}
            alt={title}
            width={900}
            height={900}
          />
        </div>
      </dialog>
    </>
  );
}
