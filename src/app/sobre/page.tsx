import NavBar from "../components/common/navBar";

export default function Sobre() {
  return (
    <div className="flex justify-center items-center">
      <NavBar />
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
        <h1 className="text-3xl text-black font-bold mb-4 text-center">Sobre Nós</h1>
        <p className="text-gray-700 mb-4">
          Somos uma equipe dedicada a criar soluções web modernas e eficientes. 
          Nosso objetivo é oferecer experiências de usuário simples, intuitivas e bonitas, 
          utilizando tecnologias atuais como Next.js, Tailwind CSS e outras ferramentas do mercado.
        </p>
        <p className="text-gray-700">
          Nossa missão é transformar ideias em produtos digitais funcionais e 
          acessíveis para todos, mantendo sempre qualidade e inovação em cada projeto.
        </p>
      </div>
    </div>
  );
}
