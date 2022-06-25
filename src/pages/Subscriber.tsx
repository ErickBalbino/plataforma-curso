import Logo from "../assets/Logo";

const Subscriber = () => {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full px-10 max-h-[1100px] flex justify-between items-center mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva se gratuitamente
          </strong>

          <form action="" className="flex flex-col gap-2 w-full">
            <input 
                type="text" 
                placeholder="Seu nome completo" 
                className=" bg-gray-700 rounded px-5 h-14"
            />
            <input 
                type="email" 
                placeholder="Digite seu e-mail" 
                className=" bg-gray-700 rounded px-5 h-14"
            />

            <button type="submit" 
            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors">
                Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img
        src="src/assets/image-group.png"
        alt="imagem coder markup"
        className="mt-10"
      />
    </div>
  );
};

export default Subscriber;
