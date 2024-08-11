import Styles from "./NavBar.module.scss";

const NavBar = ({ className }) => {
  return (
    <nav className={`${Styles.navBar} ${className}`}>
      <div href="#">Home</div>
      <div href="#">Services</div>
      <div href="#">Blog</div>
      <div href="#">Portfolio</div>
      <div href="#">Contact</div>
      <div className={Styles.animation}></div>
    </nav>
  );
}

export default NavBar;