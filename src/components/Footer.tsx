import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Sobre Nós</h3>
            <p className="text-gray-600">
              Ajudamos pessoas a descobrirem seu verdadeiro potencial através de
              autoconhecimento e análise personalizada.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Entre em Contato
                </Link>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <p className="text-gray-600">
              Email: contato@proposito.com.br
              <br />
              Telefone: (11) 99999-9999
            </p>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Propósito. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};