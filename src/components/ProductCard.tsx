import styles from "./productCard.module.css";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image
          src={"/vaccine2.jpg"}
          alt="vaccine"
          fill={true}
          objectFit="cover"
          style={{ opacity: 0.6 }}
        />
      </div>
      <div className={styles.cardText}>
        <h1>Vaccine is Good</h1>
        <h3>It the easiest way to protect you from COVID-19</h3>
      </div>
    </div>
  );
}
