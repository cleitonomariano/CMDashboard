import GridChart from "@/Components/GridChart/GridChart";
import Heading from "@/UI/Heading/Heading";
import Link from "next/link";
import { useSelector } from "react-redux";

const columns = [
  { field: "name", headerText: "Nome", width: "200" },
  { field: "price", headerText: "Preço", width: "120", format: "C2" },
  { field: "orders", headerText: "Pedidos", width: "120" },
];
const Products = () => {
  const { list: products } = useSelector((state) => state.dashboard.products);
  console.log(products);
  return (
    <section>
      <Heading title="Produtos" subtitle="Esses são os produtos disponíveis" />
      <Link href="/produtos/adicionar" className="btn btn-primary mb-3">
        Novo produto
      </Link>
      <GridChart data={products} columns={columns}/>
    </section>
  );
};

export default Products;
