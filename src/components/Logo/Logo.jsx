import React from 'react'
import LogoImg from '../../assets/Logo.png'
import styles from './Logo.module.css'


export default function Logo(parent){

    return(
        <>
        <img src={LogoImg} alt="logo" className={styles.logoImg}/>
        </>
    )


}