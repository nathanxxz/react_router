import NavBar from "../components/common/navBar";

export default function Contato() {
  return (
    <div className=" flex justify-center items-center">
      <NavBar />
      <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
        <h1 className="text-2xl text-black font-bold mb-4 text-center">Fale Conosco</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="border text-black p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="border text-black p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            placeholder="Mensagem"
            className="border text-black p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="bg-pink-700 text-white font-bold py-2 rounded hover:bg-pink-600 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
