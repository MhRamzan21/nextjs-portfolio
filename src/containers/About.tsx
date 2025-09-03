import { BothLegsSeparator } from '@/components/ui/separator'
import React from 'react'
import { motion } from "framer-motion";
import { KeyAchievements } from '@/components/key-achivements';

type Props = {}

const About = (props: Props) => {
  return (
    <div className='px-2'>
      <div className="mb-5 w-fit ">
        <p className="text-2xl font-semibold mb-2 text-zinc-600 dark:text-zinc-400">
          About Me
        </p>
        <BothLegsSeparator className="" />
      </div>

      <div className="w-full  space-y-5 text-zinc-600 dark:text-zinc-400">
        <p>
          I'm a Full Stack Developer with over three years of experience building fast, scalable, and user-friendly web applications. My core expertise lies in the MERN stack, along with frameworks like Next.js, NestJS, Node.js, and Express for building robust full-stack solutions.
        </p>

        <p>
          I’m equally comfortable on the frontend and backend — from crafting responsive UIs with Tailwind CSS, Shadcn/UI, Radix UI, and MUI, to building secure APIs, managing databases like MongoDB and PostgreSQL, and integrating services like Firebase and Cloudinary.
        </p>

        <p>
          Beyond the code, I enjoy mentoring, exploring new tools in the JS ecosystem, and building projects that solve real problems. I believe in writing clean, maintainable code and learning something new with every project.
        </p>

        <p>
          Let’s turn ideas into great software.
        </p>
      </div>
      <KeyAchievements />
    </div>
  )
}

export default About
