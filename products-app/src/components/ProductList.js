'use client';

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

const ProductList = () => {
    const [product, setProduct] = useState([]);

    const products = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const products = await response.json()
            setProduct(products)
        } catch (error) {
            console.error('Error fetching products:', error);

        }

    }
    useEffect(() => {
        products()
        console.log(products);
    }, [])
    return (

        <div className={styles.productgrid}>
            {product.map((item) => (

                <ProductCard key={item.id} product={item} />

            ))}
        </div>
    )
}
export default ProductList;