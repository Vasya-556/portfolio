import React from 'react'
import styles from "./Link.module.css";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string;
  children?: React.ReactNode;
}

function Link({ text, children, ...linkProps }: LinkProps) {
  return (
    <>
        <a {...linkProps} className={styles.link}>
          {text}
          {children}  
        </a>
    </>
  )
}

export default Link