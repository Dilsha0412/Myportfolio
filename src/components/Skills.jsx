import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiNodedotjs, SiPython, SiMongodb, SiMysql, SiGit, SiGithub, SiFigma } from 'react-icons/si';
import { FaJava, FaServer } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      // { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
      // { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      //{ name: 'CSS3', Icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      //{ name: 'Node.js', Icon: SiNodedotjs, color: '#68A063' },
      //{ name: 'Python', Icon: SiPython, color: '#F7C948' },
      //{ name: 'Express', Icon: FaServer, color: '#cccccc' },
      { name: 'Java', Icon: FaJava, color: '#f89820' },
    ],
  },
  {
    name: 'Database & Tools',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
      //{ name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
      { name: 'VS Code', Icon: VscVscode, color: '#007ACC' },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const SkillCard = ({ name, Icon, color }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -6, scale: 1.06 }}
    transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    className="group flex flex-col items-center justify-center gap-3 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-2xl p-5 cursor-default hover:border-blue-500/50 hover:bg-gray-50 dark:hover:bg-[#161d2d] hover:shadow-[0_0_24px_rgba(59,130,246,0.15)] transition-all duration-300"
  >
    <Icon size={40} style={{ color }} className="transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" />
    <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200 text-center leading-tight">
      {name}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-transparent text-gray-600 dark:text-gray-300 relative font-sans transition-colors">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 right-[-5%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[350px] h-[350px] bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 text-base md:text-lg text-center max-w-xl transition-colors"
          >
            These are the technologies and tools I work with to bring ideas to life.
          </motion.p>
        </div>

        {/* Skill Category Groups */}
        <div className="space-y-14">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx}>
              {/* Category label + divider */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest whitespace-nowrap">
                  {category.name}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/40 to-transparent" />
              </motion.div>

              {/* Cards grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
              >
                {category.skills.map((skill, idx) => (
                  <SkillCard key={idx} name={skill.name} Icon={skill.Icon} color={skill.color} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
