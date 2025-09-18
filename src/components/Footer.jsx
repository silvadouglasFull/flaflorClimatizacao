import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#172548] border-t border-gray-700 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="https://www.instagram.com/dswebdev/" className="text-sm">
              &copy; {new Date().getFullYear()} Ds Web. Todos os direitos
              reservados.
            </a>
            <p className="text-xs mt-1">Powerfull Programming</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/flaflor.climatizacao/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#83b653] transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#83b653] transition-colors duration-300"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
