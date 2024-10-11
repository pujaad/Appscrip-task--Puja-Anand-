'use client';

import { useState } from 'react';
import styles from "./FilterProducts.module.css";
import FilterSidebar from "./FilterSidebar";
import ProductList from './ProductList';
import ProductCard from './ProductCard';

const FilterProducts = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleToggleFilter = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div className={styles.mainContent}>

                <h2 className={styles.itemCount}> 3425 ITEMS</h2>
                <h2 className={styles.filtersLabel}>FILTERS</h2>


                <button onClick={handleToggleFilter} className={styles.toggleButton}>
                    {isVisible ? "HIDE FILTER" : "SHOW FILTER"}
                </button>
                <select className={styles.recommend}>
                    <option value="recommended">RECOMMENDED</option>
                    <option>NEWEST FIRST</option>
                    <option>POPULAR</option>
                    <option>PRICE: HIGH TO LOW</option>
                    <option>PRICE: LOW TO HIGH</option>
                </select>
            </div>
            <div className={styles.layoutContainer}>

                {isVisible && (
                    <div className={styles.sidebar} >
                        <FilterSidebar />
                    </div>
                )}
                <div className={styles.grid}>
                    <ProductList />
                </div>

            </div>

        </>
    );
};

export default FilterProducts;
