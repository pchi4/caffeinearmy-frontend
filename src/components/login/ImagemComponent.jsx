import styles from "../login/LoginStyle.module.css";
import { Image } from "react-bootstrap";

function ImagemComponent() {
  return <Image src="/logo.png" fluid="true" className={styles.imageLogin} alt="logo"></Image>;
}

export default ImagemComponent;
