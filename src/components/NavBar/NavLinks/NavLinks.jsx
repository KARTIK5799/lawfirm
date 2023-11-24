import React from 'react';
import styles from './NavLinks.module.css';

export default function NavLinks() {
  return (
    <>
      <div className={styles.navLink}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Attorneys</a>
        </li>
        <li>
          <a href="/about">Practice Areas</a>
        </li>
        <li>
          <a href="/contact">About Us</a>
        </li>
      </div>
    </>
  );
}
