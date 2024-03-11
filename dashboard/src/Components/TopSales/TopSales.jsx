import styles from "./TopSales.module.scss";

const TopSales = () => {
  return (
    <div className={styles["top-sales"]}>
      <h3>Produtos mais vendidos</h3>
      <ul className={styles.content}>
        <li>
          <div className={styles.image}></div>
            <h4>O nome do produto em questão</h4>
          
        </li>
        <li>
          <div className={styles.image}></div>
            <h4>O nome do produto em questão</h4>
          
        </li>
        <li>
          <div className={styles.image}></div>
            <h4>O nome do produto em questão</h4>
          
        </li>
      </ul>
    </div>
  );
};

export default TopSales