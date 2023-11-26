import React from "react";
import styles from "./Card.module.css";
import InfoCardImg from '../../assets/card-info.png'
import Button from "../Button/Button";
 
function Card({ type ,heading,text,profile}) {
  switch (type) {
    case "info":
      return <div>
        <div className={styles.card}>
        
           <img src={InfoCardImg} alt="card info" className={styles.infoCardImg}/>
            <h3 className={styles.heading}>{heading}</h3>
            <p className={styles.cardText}>{text}</p>
            <Button value={'Read More'} type={"card"}/>

         
        </div>
      </div>;
    case "profile":
      return <div>
          <div className={styles.card}>
            <img src={profile} alt="card-profile" className={styles.infoCardImg}/>
            <h3 className={styles.heading}>{heading}</h3>
            <p className={styles.cardText}>{text}</p>
        </div>
      </div>;
    default:
      <></>;
      break;
  }
  return <div></div>;
}

export default Card;
