import styles from "./FilterSidebar.module.css";

const FilterSidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.filterSection}>
                <label>
                    <input type="checkbox" /> CUSTOMIZABLE
                </label>
            </div>
            <div className={styles.filterSection}>
                <label>
                    IDEAL FOR
                </label>
                <p className="unselect">Unselect all</p>
                <label><input type="checkbox" />Men</label>
                <label><input type="checkbox" />Women</label>
                <label><input type="checkbox" />Baby & Kids</label>


            </div>
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
    )
}
export default FilterSidebar;