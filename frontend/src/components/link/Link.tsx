import React from 'react'
import styles from "./link.module.css";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string;
  children?: React.ReactNode;
}

function Link({ text, children, ...linkProps }: LinkProps) {
  return (
    <div className={styles.container}>
        <a {...linkProps} >
          {text}
          {children}  
        </a>
    </div>
  )
}

export default Link