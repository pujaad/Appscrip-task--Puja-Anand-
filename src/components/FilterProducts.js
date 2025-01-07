'use client';

import { useState } from 'react';
import styles from "./FilterProducts.module.css";
import FilterSidebar from "./FilterSidebar";

const FilterProducts = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleToggleFilter = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div className={styles.mainContent}>
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
                    <FilterSidebar />
                )}
            </div>
        </>
    );
};

export default FilterProducts;
