import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaFigma,
  FaGithub,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-24 bg-emerald-50 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-sm leading-relaxed">
            I'm a web designer and developer passionate about building intuitive digital experiences that balance creativity with function. I’ve worked across industries from education and government to woman-owned and faith-based startups delivering clean, accessible websites using tools like React, WordPress, and Wix.
          </p>
          <p className="text-sm mt-4 leading-relaxed">
            Whether I’m managing daily web content as a web admin or creating immersive websites, I thrive at the intersection of design, development, and storytelling.
          </p>
          <p className="text-sm mt-4 leading-relaxed">
            I believe great digital experiences are both thoughtful and fun — and I bring that energy into every project I touch.
          </p>

          {/* Icon Toolbar */}
          <div className="flex flex-wrap gap-4 mt-6">
            <IconBubble icon={<FaPython />} label="Python" />
            <IconBubble icon={<FaJsSquare />} label="JavaScript" />
            <IconBubble icon={<FaReact />} label="React" />
            <IconBubble icon={<SiExpress />} label="Express.js" />
            <IconBubble icon={<SiTailwindcss />} label="Tailwind" />
            <IconBubble icon={<SiMongodb />} label="MongoDB" />
            <IconBubble icon={<FaHtml5 />} label="HTML" />
            <IconBubble icon={<FaCss3Alt />} label="CSS3" />
            <IconBubble icon={<FaBootstrap />} label="Bootstrap" />
            <IconBubble icon={<FaFigma />} label="Figma" />
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <img 
            src="/assets/avatar/image9 (1).jpeg" 
            alt="Diondra profile"
            className="w-60 h-60 rounded-full shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

// Reusable icon + label bubble
function IconBubble({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-center w-20">
      <div className="bg-white rounded-full p-3 shadow-md text-emerald-600 text-2xl hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="mt-2 text-sm text-gray-700">{label}</span>
    </div>
  );
}
