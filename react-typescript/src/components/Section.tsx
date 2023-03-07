// Old Ways of doing things before React 18
// 👇
// import React from 'react'

// export const Section: React.FC<{title: string}> = ({children, title}) => {
//   return (
//     <section>
//         <h2>{title}</h2>
//         <p>{children}</p>
//     </section>
//   )
// }

// New ways of doing things React 18 onwards

import { ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

export const Section = ({ children, title = 'My subheading' }: SectionProps) => {
  return (
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
  )
}
