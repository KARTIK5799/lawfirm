import React from 'react' 
import styles from './HeroRight.module.css'
import HeroImg from '../../../assets/Hero-img.png'

const HeroRight=()=>{
    return(
        <>
        <div className={styles.wrapper}>
        <img src={HeroImg} alt="Hero" className={styles.heroImg} />
        </div>
        </>
    )

}
export default HeroRight