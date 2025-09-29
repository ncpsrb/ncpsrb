import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaDocker,
  FaPhp,
  FaFigma,
  FaRegObjectGroup,
  FaMicrosoft,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiOracle,
  SiVercel,
  SiWordpress,
} from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'
import { TbBrandVisualStudio } from 'react-icons/tb'
import { PiRobotBold } from 'react-icons/pi' // for UiPath icon substitute
import { MdOutlineExtension } from 'react-icons/md' // for Kofax substitute

export function TechStackSection() {
  const techs = [
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'React', icon: <FaReact className="text-sky-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
    { name: 'Java', icon: <FaJava className="text-red-600" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'PHP', icon: <FaPhp className="text-indigo-600" /> },
    {
      name: 'VBScript',
      icon: <TbBrandVisualStudio className="text-purple-600" />,
    },
    { name: 'UiPath', icon: <PiRobotBold className="text-purple-500" /> },
    {
      name: 'Kofax RPA',
      icon: <MdOutlineExtension className="text-orange-500" />,
    },
    {
      name: 'Power Automate',
      icon: <FaMicrosoft className="text-green-600" />,
    },
    {
      name: 'Power Apps',
      icon: <FaMicrosoft className="text-green-600" />,
    },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
    {
      name: 'SQL Server',
      icon: <DiMsqlServer className="text-red-500" />,
    },
    { name: 'Oracle DB', icon: <SiOracle className="text-orange-700" /> },
    { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-sky-500" /> },
    { name: 'Wordpress', icon: <SiWordpress className="text-blue-500" /> },
  ]

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        My Tech Stack
      </h2>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-transform duration-200 hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <div className="text-3xl">{tech.icon}</div>
            <span className="text-center text-sm text-zinc-700 dark:text-zinc-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
