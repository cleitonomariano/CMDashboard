import GridChart from "@/Components/GridChart/GridChart";
import Heading from "@/UI/Heading/Heading";

const Sales = () => {
  return (
    <section>
      <Heading title="Vendas" subtitle="Aqui está o seu histórico de vendas" />
      <GridChart />
    </section>
  );
};

export default Sales;
