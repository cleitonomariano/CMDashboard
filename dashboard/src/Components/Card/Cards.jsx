import Card from "./Card";
import styles from "./Cards.module.scss";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <Card title="Pedidos" subtitle="Total em pedidos" value="20" />
      <Card title="Vendas" subtitle="Total em vendas hoje" value="R$ 500,00" />
      <Card title="Acumulado" subtitle="Total em vendas" value="R$ 2000,00" />
    </div>
  );
};
export default Cards;
