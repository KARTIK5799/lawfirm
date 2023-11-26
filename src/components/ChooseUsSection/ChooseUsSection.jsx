import React from 'react';
import styles from './ChooseUsSection.module.css';
import Card from '../Card/Card'; 

const ChooseUsSection = () => {
    const cardInfo = [
        {
            heading: "98% Success Rate",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        },
        {
            heading: "100% Success Rate",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        },
        {
            heading: "100% Success Rate",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        }
        
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h2>Why Choose us?</h2>
            </div>
            <div className={styles.cardSection}>
                {cardInfo.map((card, index) => (
                    <Card key={index} {...card} type={"info"} />
                ))}
            </div>
        </div>
    );
}

export default ChooseUsSection;
