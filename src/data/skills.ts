import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTailwind,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandFirebase,
  IconBrandMongodb,
  IconBrandFramerMotion,
} from '@tabler/icons-react';

import {
  SiGit,
  SiNestjs,
  SiPrisma,
  SiPython,
  SiRedux,
  SiShadcnui,
  SiExpress,
  SiMui,
} from "react-icons/si";

import { BsFiletypeScss } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: IconBrandReact, hoverColor: '#61DAFB' },
      { name: 'Next.js', icon: IconBrandNextjs, hoverColor: '#000000' },
      { name: 'Tailwind CSS', icon: IconBrandTailwind, hoverColor: '#06B6D4' },
      { name: 'shadcn/ui', icon: SiShadcnui, hoverColor: '#000000' },
      { name: 'MUI', icon: SiMui, hoverColor: '#007FFF' },
      { name: 'Bootstrap', icon: IconBrandBootstrap, hoverColor: '#7952B3' },
      { name: 'SCSS', icon: BsFiletypeScss, hoverColor: '#CC6699' },
      { name: 'CSS', icon: IconBrandCss3, hoverColor: '#264DE4' },
      { name: 'HTML', icon: IconBrandHtml5, hoverColor: '#E34F26' },
      { name: 'Framer Motion', icon: IconBrandFramerMotion, hoverColor: '#0055FF' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: IconBrandNodejs, hoverColor: '#5FA04E' },
      { name: 'Express', icon: SiExpress, hoverColor: '#000000' },
      { name: 'NestJS', icon: SiNestjs, hoverColor: '#E0234E' },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', icon: IconBrandJavascript, hoverColor: '#F7DF1E' },
      { name: 'TypeScript', icon: IconBrandTypescript, hoverColor: '#3178C6' },
      { name: 'Python', icon: SiPython, hoverColor: '#3776AB' },
    ],
  },
  {
    category: 'Databases & ORMs',
    skills: [
      { name: 'MongoDB', icon: IconBrandMongodb, hoverColor: '#47A248' },
      { name: 'Firebase', icon: IconBrandFirebase, hoverColor: '#FFCA28' },
      { name: 'PostgreSQL', icon: BiLogoPostgresql, hoverColor: '#336791' },
      { name: 'Prisma', icon: SiPrisma, hoverColor: '#2D3748' },
    ],
  },
  {
    category: 'Tools & Version Control',
    skills: [
      { name: 'Git', icon: SiGit, hoverColor: '#F05032' },
      { name: 'Redux', icon: SiRedux, hoverColor: '#764ABC' },
    ],
  },
];