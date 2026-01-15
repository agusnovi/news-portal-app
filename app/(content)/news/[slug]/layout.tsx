import { ReactNode } from "react";

export default function DetailLayout({children, modal} : {children: ReactNode, modal: ReactNode}) {
    return (
      <>
        {children}
        {modal}
      </>
    );
}