import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex fixed p-8 bg-pink-700 w-full px-3 z-50">
        <div className="flex items-end flex-1 text-white font-bold">
          <nav className="flex-1">
            <ul className="flex justify-end flex-1">
              <li className="px-4">
                <Link href="/home" className="hover:text-slate-900 font-bold">
                  Home
                </Link>
              </li>
              <li className="px-4">
                <Link href="/contatos" className="hover:text-slate-900 font-bold">
                  Contatos
                </Link>
              </li>
              <li className="px-4">
                <span className="border-r border-white"></span>
              </li>
              <li className="px-4">
                <Link href="/sobre" className="hover:text-slate-900 font-bold">
                  Sobre
                </Link>
              </li>
              <li className="px-4">
                <Link href="/sair" className="hover:text-slate-900 font-bold">
                  Sair
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
