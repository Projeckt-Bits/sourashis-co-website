import Link from "next/link";
import Styles from "./SciFiButton.module.scss";

const SciFiButton = ({ className, caption, link }) => {
  return (
    <Link href={link} passHref>
      <button className={`${Styles.ctaBtn} ${className}`}>
        <span>{caption}</span>
      </button>
    </Link>
  );
};

export default SciFiButton;
