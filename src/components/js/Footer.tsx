import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "../../styles/footer.scss";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand or Logo */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold text-white">
              Bedrani Mohammed Adel
            </h3>
            <p className="text-sm">Fullstack Developer & Software engineer</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/youcefbedrani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bedrani-mohammed-adel-%F0%9F%87%B5%F0%9F%87%B8-3477b9247/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/Youcef43069530"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:youcefwork99@gmail.com"
              className="hover:text-white"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-t border-gray-700 pt-4">
          {/* Additional Links */}
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-white">
              Email: YoucefWork99@gmail.com
            </a>
            <a href="#" className="hover:text-white">
              Phone: (213) 662-628-576
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Mohammed Adel. All Rights Not Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
