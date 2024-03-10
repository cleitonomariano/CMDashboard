import Cards from "@/Components/Card/Cards";
import Heading from "@/UI/Heading/Heading.jsx";
import Link from "next/link";
import styles from "styles/Dashboard.module.scss";


export default function Home() {
  return (
    <section className={styles.dashboard}>
      <Heading title="Hello Mariano " subtitle="Confira seu Dashboard" />
      <Link href="/novavenda" className="btn btn-primary">
        Nova Venda
      </Link>
      <section className={styles.columns}>
        <section className={styles.column1}>
          <Cards />
        </section>
        <section className={styles.column2}></section>
      </section>
    </section>
  );
}
