import HeatMap from "@/Components/HeatMap/HeatMap";
import PieChart from "@/Components/PieChart/Piechart";
import SalesHistory from "@/Components/SalesHistory/SalesHistory";
import Heading from "@/UI/Heading/Heading";
import styles from "styles/Relatorio.module.scss"


const Report = () => {
  return (
    <section className={styles.section}>
      <Heading
        title="Relatório"
        subtitle="Estes são seus relatórios de vendas"
      />
      <SalesHistory />
      <div className={styles.charts}>
      <HeatMap />
      <PieChart />
      </div>
    </section>
  );
};

export default Report;