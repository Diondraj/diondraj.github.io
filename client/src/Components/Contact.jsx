import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

export default function Contact() {
  return (
    <section className="bg-emerald-50 py-16 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Let’s Connect!</h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out via social or drop a message—I'm always excited to connect with other creatives, devs, or small biz dreamers 🌱
        </p>

        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 hover:bg-emerald-200 p-3 rounded-full shadow-md transition-all duration-300"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 hover:bg-emerald-200 p-3 rounded-full shadow-md transition-all duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 hover:bg-emerald-200 p-3 rounded-full shadow-md transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          Made with 💚 and Tailwind CSS · © {new Date().getFullYear()} Diondra Evans
        </p>
      </div>
    </section>
  )
}