import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Socials() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      <a
        href="https://www.linkedin.com/in/diondra-e/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-gray-800 hover:bg-emerald-200 p-3 rounded-full shadow-md transition-all duration-300"
      >
        <FaLinkedin className="w-5 h-5" />
      </a>
      <a
        href="https://github.com/DiondraEvans"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-gray-800 hover:bg-emerald-200 p-3 rounded-full shadow-md transition-all duration-300"
      >
        <FaGithub className="w-5 h-5" />
      </a>
    </div>
  );
}