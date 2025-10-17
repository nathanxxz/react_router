import NavBar from "../components/common/navBar";

export default function HomeP() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex -mt-180 flex-col items-center justify-center flex-1 p-6 pt-28 text-center">
        <h1 className="text-4xl font-bold mb-4 text-pink-700">
          Bem-vindo ao nosso site!
        </h1>
        <p className="text-gray-700 max-w-xl">
          Aqui você encontra informações sobre nossos serviços, equipe e como entrar em contato.
          Explore as páginas usando o menu acima.
        </p>
      </div>
    </div>
  );
}
