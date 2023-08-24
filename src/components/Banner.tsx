import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src={"/vaccine.jpg"}
        alt="cover"
        fill={true}
        objectFit="cover"
        style={{ opacity: 0.6 }}
      />
      <div className={styles.bannerText}>
        <h1>Your vaccine provider</h1>
        <h3>Protect your body with us</h3>
      </div>
    </div>
  );
}
