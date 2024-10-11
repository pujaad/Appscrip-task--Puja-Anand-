// import Image from "next/image";

// import FilterProducts from "../components/FilterProducts";
import styles from "./page.module.css";
import Header from "../components/Header";
import FilterProducts from "../components/FilterProducts";
// import ProductList from "../components/ProductList";
export default function Home() {
  return (
    <div className={styles.background}>
      <div>
        <Header />

        <FilterProducts />

      </div>
    </div>
  );
}
