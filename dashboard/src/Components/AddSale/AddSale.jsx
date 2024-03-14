import styles from "./AddSale.module.scss";

const AddSale = () => {
  return (
    <form action="">
      <div>
        <label htmlFor="dropdown" className="hidden">
          Produto
        </label>
        input
      </div>
      <div>
        <label htmlFor="qunatity" className="hidden">
          Quantidade
        </label>
        <input
          type="number"
          name="quntity"
          id="quantity"
          min="0"
          placeholder="Quantidade"
        />
      </div>
      <button className="btn btn-primary">Confirmar</button>
    </form>
  );
};

export default AddSale;
