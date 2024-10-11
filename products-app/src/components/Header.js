import styles from "./Header.module.css";
import Image from 'next/image';



const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.leftSection}>
                    <Image src="/Logo.svg" alt="logo" width={24} height={24} />
                </div>
                <h3 className={styles.logoHeading}>LOGO</h3>
                <div className={styles.rightSection}>
                    <Image src="/Icons.svg" alt="icons" width={200} height={30} />
                </div>
            </header>
            <nav className={styles.navlink}>
                <a href="#">Shop</a>
                <a href="#">Skills</a>
                <a href="#">Stories</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
            </nav>
            <div className={styles.heading}>
                <h1>DISCOVER OUR PRODUCTS</h1>

            </div>
            <p className={styles.para}>Lorem Ipsum</p>
        </>

    );
};

export default Header;