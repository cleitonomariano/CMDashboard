import GridChart from "@/Components/GridChart/GridChart";
import Heading from "@/UI/Heading/Heading";
import Link from "next/link";

const Products = () => {
return(
  <section>
    <Heading title='Produtos'  subtitle='Esses são os produtos disponíveis'/>
    <Link href='/produtos/adicionar' className="btn btn-primary mb-3">
      Novo produto
    </Link>
    <GridChart />
  </section>
)
}

export default Products;