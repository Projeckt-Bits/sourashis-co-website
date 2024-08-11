import Image from "next/image";
import Styles from "../Loader/Loader.module.scss";

const Loader = ({ className }) => {
  return (
    <main className={`${Styles.main} ${className}`}>
      <div class={Styles.loadingwave}>
        <div class={Styles.loadingbar}></div>
        <div class={Styles.loadingbar}></div>
        <div class={Styles.loadingbar}></div>
        <div class={Styles.loadingbar}></div>
      </div>
    </main>
  );
}

export default Loader;