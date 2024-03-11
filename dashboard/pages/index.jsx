import Cards from "@/Components/Card/Cards";
import SalesGoal from "@/Components/SalesGoal/SalesGoal";
import SalesHistory from "@/Components/SalesHistory/SalesHistory";
import TopSales from "@/Components/TopSales/TopSales";
import Heading from "@/UI/Heading/Heading.jsx";
import Link from "next/link";
import styles from "styles/Dashboard.module.scss";


export default function Home() {
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
