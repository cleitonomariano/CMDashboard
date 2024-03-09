import Heading from "@/UI/Heading/Heading.jsx";
import Link from "next/link";
import styles from 'styles/dashboard.module.scss'

export default function Home() {
  return (
    <section className={styles.dashboard}>
      <Heading title="Hello Mariano " subtitle="Amanhã tem mais" />
      <Link href="/novavenda" className="btn btn-primary">Nova Venda</Link>
      <section className={styles.columns1}></section>
      <section className={styles.columns2}></section>
    </section>
  );
}
