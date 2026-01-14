import { ReactNode } from "react";

export default function ArchiveLayout({
  archive,
  latest,
}: {
  archive: ReactNode;
  latest: ReactNode;
}) {
  return (
    <main>
      <section>{archive}</section>
      <section>{latest}</section>
    </main>
  );
}