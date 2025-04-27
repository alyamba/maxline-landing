import React from "react";
import styles from "./Offer.module.css";
import gif from "../../assets/fire.gif";
import rectangle from "../../assets/rectangle.png";

const Offer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gifContainer}>
        <img src={gif} alt="gif" className={styles.gif} />
        <img src={gif} alt="gif" className={styles.inversedGif} />
      </div>
      <img src={rectangle} className={styles.background} />
      <div className={styles.textContainer}>
        <div className={styles.value}>200</div>
        <div className={styles.freespins}>ФРИСПИНОВ</div>
        <div className={styles.subtitle}>ЗА РЕГИСТРАЦИЮ</div>
      </div>
    </div>
  );
};

export default Offer;
