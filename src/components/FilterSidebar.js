import styles from "./FilterSidebar.module.css";
import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

const FilterSidebar = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(selectedCategory === category ? '' : category);
    };

    if (loading) return <div>Loading categories...</div>;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.filterSection}>
                    <label>CATEGORIES</label>
                    <p className="unselect" onClick={() => setSelectedCategory('')}>
                        Unselect all
                    </p>
                    {categories.map((category) => (
                        <label key={category}>
                            <input
                                type="checkbox"
                                checked={selectedCategory === category}
                                onChange={() => handleCategoryChange(category)}
                            />
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </label>
                    ))}
                    <div className={styles.filterSection}>
                        <label>
                            OCCASION
                        </label>
                        <select>
                            <option value="all">All</option>
                        </select>
                    </div>
                    <div className={styles.filterSection}>
                        <label>
                            WORK
                        </label>
                        <select>
                            <option value="all">All</option>
                        </select>
                    </div>
                    <div className={styles.filterSection}>
                        <label>
                            FABRIC
                        </label>
                        <select>
                            <option value="all">All</option>
                        </select>
                    </div>
                    <div className={styles.filterSection}>
                        <label>
                            SEGMENT
                        </label>
                        <select>
                            <option value="all">All</option>
                        </select>
                    </div>
                    <div className={styles.filterSection}>
                        <label>
                            SUITABLE FOR
                        </label>
                        <select>
                            <option value="all">All</option>
                        </select>
                    </div>
                    <div className={styles.filterSection}>
                        <label>
                            RAW MATERIALS
                        </label>
                        <select>
                            <option value="all">All</option>
                        </select>
                    </div>
                    <div className={styles.filterSection}>
                        <label>
                            PATTERN
                        </label>
                        <select>
                            <option value="all">All</option>
                        </select>
                    </div>
                </div>
                <div className={styles.productSection}>
                    <ProductList selectedCategory={selectedCategory} />
                </div>
            </div>
        </>
    );
};

export default FilterSidebar;