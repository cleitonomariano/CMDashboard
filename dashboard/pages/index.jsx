import Cards from "@/Components/Card/Cards";
import SalesGoal from "@/Components/SalesGoal/SalesGoal";
import SalesHistory from "@/Components/SalesHistory/SalesHistory";
import TopSales from "@/Components/TopSales/TopSales";
import Heading from "@/UI/Heading/Heading.jsx";
import Link from "next/link";
import styles from "styles/Dashboard.module.scss";
import client from "src/sanity";
import store from "src/store";


export default function Home({ orders, products, config }) {

  console.log(store);

  return (
    <section className={styles.dashboard}>
      <Heading title="Welcome " subtitle="Confira seus relatórios" />
      <Link href="/nova-venda" className="btn btn-primary">
        Nova Venda
      </Link>
      <section className={styles.columns}>
        <section className={styles.column1}>
          <Cards />
          <SalesHistory />
        </section>
        <section className={styles.column2}>
          <SalesGoal />
          <TopSales />
        </section>
      </section>
    </section>
  );
}

export const getStaticProps = async () => {
  const orders = await client.fetch('*[_type == "orders"]');
  const products = await client.fetch('*[_type == "products"]');
  const config = await client.fetch('*[_type == "config"]');

  return {
    props: {
      orders,
      products,
      config,
    },
  };
};
