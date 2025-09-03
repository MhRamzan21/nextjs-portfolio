"use client";

import { Button } from "@/components/ui/button";
import { BothLegsSeparator } from "@/components/ui/separator";
import { skillsData } from "@/data/skills";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2 }}
      className="w-full flex flex-col px-4 py-20"
    >
      <div className="mb-5 w-fit">
        <h2 className="text-2xl font-semibold mb-2 text-zinc-600 dark:text-zinc-400">
          Technical Skills
        </h2>
        <BothLegsSeparator className="" />
      </div>
      <p className="w-full md:w-3/4 text-zinc-600 dark:text-zinc-400">
        From pixel-perfect designs to scalable architectures, my development
        style is a crafted blend of artistry and engineering. These are the
        techniques I wield.
      </p>

      <div className="w-full my-10">
        {skillsData.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-8">
            <h3 className="text-xl font-medium mb-4 text-zinc-700 dark:text-zinc-300">
              {category.category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {category.skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{
                      x: idx % 2 === 0 ? -50 : 50,
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <Button
                      style={
                        {
                          "--hover-color": skill.hoverColor,
                        } as React.CSSProperties
                      }
                      variant="outline"
                      className="border flex flex-col items-center justify-center size-24 cursor-pointer rounded-xl p-2 hover:border-[var(--hover-color)] hover:text-[var(--hover-color)] dark:hover:border-[var(--hover-color)] dark:hover:text-[var(--hover-color)] transition-colors duration-300 relative"
                    >
                      {Icon ? (
                        <Icon className="!h-[2.5rem] !w-[2.5rem]" />
                      ) : (
                        <div className="!h-[3rem] !w-[3rem]" />
                      )}

                      <p className="text-[12px] mt-2">{skill.name}</p>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
