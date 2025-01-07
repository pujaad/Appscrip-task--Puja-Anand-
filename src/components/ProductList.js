'use client';

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

const ProductList = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const url = selectedCategory 
                    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
                    : 'https://fakestoreapi.com/products';
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedCategory]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className={styles.productgrid}>
            {products.length === 0 ? (
                <p>No Products found</p>
            ) : (
                products.map((prod) => <ProductCard key={prod.id} product={prod} />)
            )}
        </div>
    );
}

export default ProductList;