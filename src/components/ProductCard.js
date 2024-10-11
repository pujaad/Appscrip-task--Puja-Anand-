import styles from "./Product.module.css";
import Image from 'next/image';
import { useState } from "react";
const ProductCard = ({ product }) => {
    const [isClick, setisClick] = useState(false)
    if (!product) {
        return null;
    }
    return (

        <div className={styles.productCard}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.product}><a href="/sign" className={styles.signIn}>Sign in</a>  or create an account to see pricing</p>
            <span onClick={() => setisClick(!isClick)}>
                {!isClick ? (
                    <Image src="/heart2.svg" alt="heart" width={24} height={24} />
                ) : (
                    <Image src="/heart.svg" alt="Favorite" width={24} height={24} />
                )}
            </span>
        </div>

    )


}
export default ProductCard;