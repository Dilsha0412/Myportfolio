import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiNodedotjs, SiPython, SiMongodb, SiMysql, SiGit, SiGithub, SiFigma, SiJavascript, SiSpringboot } from 'react-icons/si';
import { FaJava, FaServer } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', Icon: SiReact, color: '#ffffff' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#ffffff' },
      // { name: 'TypeScript', Icon: SiTypescript, color: '#ffffff' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#ffffff' },
      { name: 'HTML5', Icon: SiHtml5, color: '#ffffff' },
      //{ name: 'CSS3', Icon: SiCss, color: '#ffffff' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      //{ name: 'Node.js', Icon: SiNodedotjs, color: '#ffffff' },
      //{ name: 'Python', Icon: SiPython, color: '#ffffff' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#ffffff' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#ffffff' },
      { name: 'Express.js', Icon: FaServer, color: '#ffffff' },
      { name: 'Java', Icon: FaJava, color: '#ffffff' },
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#ffffff' },
    ],
  },
  {
    name: 'Database & Tools',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#ffffff' },
      { name: 'MySQL', Icon: SiMysql, color: '#ffffff' },
      { name: 'Git', Icon: SiGit, color: '#ffffff' },
      { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
      //{ name: 'Figma', Icon: SiFigma, color: '#ffffff' },
      { name: 'VS Code', Icon: VscVscode, color: '#ffffff' },
    ],
  },
];

const SkillCard = ({ name, Icon, color }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.06 }}
    transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    className="group flex flex-col items-center justify-center gap-3 bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/10 rounded-none p-5 cursor-default hover:border-white/40 hover:bg-gray-50 dark:hover:bg-[#111] hover:shadow-[0_0_24px_rgba(255,255,255,0.08)] transition-all duration-300 shrink-0 w-[110px] sm:w-[130px] md:w-[150px] lg:w-[170px]"
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

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-normal text-gray-900 dark:text-white mb-4 transition-colors uppercase tracking-tight"
          >
            My Skills
          </motion.h2>
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
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center gap-4 mb-8"
              >
                <span className="text-sm font-normal dark:text-white text-gray-900 uppercase tracking-widest whitespace-nowrap">
                  {category.name}
                </span>
              </motion.div>

              {/* Cards container */}
              <div className="overflow-hidden w-full relative group/marquee py-4">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                  {/* First identical half */}
                  <div className="flex gap-4 pr-4">
                    {[...Array(3)].map((_, i) => (
                      <React.Fragment key={`first-${i}`}>
                        {category.skills.map((skill, idx) => (
                          <SkillCard key={`first-${i}-${idx}`} name={skill.name} Icon={skill.Icon} color={skill.color} />
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                  {/* Second identical half */}
                  <div className="flex gap-4 pr-4">
                    {[...Array(3)].map((_, i) => (
                      <React.Fragment key={`second-${i}`}>
                        {category.skills.map((skill, idx) => (
                          <SkillCard key={`second-${i}-${idx}`} name={skill.name} Icon={skill.Icon} color={skill.color} />
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
