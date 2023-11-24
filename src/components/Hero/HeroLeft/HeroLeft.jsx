import React from 'react' 
import styles from './HeroLeft.module.css'
import Button from '../../Button/Button'

const HeroLeft=()=>{
    return(
        <>
        <div className={styles.heroLeft}>
            <h1 className={styles.heroHeading}>You don’t have to</h1>
            <h1 className={styles.heroHeadingBold}>Fight them Alone.</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>

            <div className={styles.wrapper}>
              
                    <input type="text" className={styles.searchBox} placeholder='Enter your eamil address'/>
                    <Button value={"Let’s Talk"} type={"form"}/>
             
            </div>
        </div>
        </>
    )

}
export default HeroLeft