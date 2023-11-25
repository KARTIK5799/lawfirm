import React from 'react'
import styles from './SecondSection.module.css'

export default function SecondSection(){
    return (
        <>
        <div className={styles.wrapper}>
            <h1>Let’s Introduce<br/> Ourself</h1>
            <div className={styles.line}></div>
            <div className={styles.wrapperText}>
            <h2>Criminal Lawyer</h2>
            <p className={styles.text}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.
</p>
            </div>
        </div>
       </>
    )
}