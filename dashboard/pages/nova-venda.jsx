import AddSale from "@/Components/AddSale/AddSale"
import Heading from "@/UI/Heading/Heading"

const NewSAle = () => {
  return (
    <section>
      <Heading 
      title='Adicionar venda' 
      subtitle='Adicione uma nova venda'
      />
      <div>
        <AddSale />
      </div>
    </section>
  )
}
export default NewSAle