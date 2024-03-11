import Heading from "@/UI/Heading/Heading";

const Settings = () => {
  return (
    <section>
      <Heading
        title="Configurações"
        subtitle="Defina as configurações da aplicações"
      />
      <form action="">
        <div>
          <label htmlFor="name" className="hidden">
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome da empresa"
          />
        </div>
        <div>
          <label htmlFor="price" className="hidden">
            Meta de vendas
          </label>
          <input type="text" name="price" id="price" placeholder="Meta de vendas" />
        </div>      
        <button className="btn btn-primary">Salvar</button>
      </form>
    </section>
  );
};

export default Settings;
