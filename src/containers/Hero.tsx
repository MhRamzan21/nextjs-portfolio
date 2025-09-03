"use client";

import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BothLegsSeparator } from "@/components/ui/separator";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "next/image";
import { memo } from "react";

export const Hero = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-20 px-2 md:px-6">
      <div className="flex-1 relative w-full lg:w-auto">
        <div className="flex flex-col md:flex-row gap-4 items-center my-4 lg:my-0 lg:block">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl  font-bold tracking-tight my-0 md:my-8 dark:text-zinc-300 text-zinc-700">
            Hello! I'm<span className="lg:hidden">,</span>
          </h1>

          <Title />
        </div>
        <BothLegsSeparator />

        <div className="text-lg text-zinc-600 dark:text-zinc-400 my-6 md:my-6 font-bold">
          Full Stack Developer 🚀
          <br />{" "}
          <span className="font-normal">
            I build full stack web applications and dynamic digital experiences
            using modern technologies. With expertise in both frontend and
            backend development, I create responsive UIs and efficient
            server-side logic, delivering scalable, high-performance web
            solutions. 💻✨
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="border size-10 cursor-pointer rounded-xl p-2 hover:border-[var(--brand)] hover:text-[var(--brand)] dark:hover:border-[var(--brand)] dark:hover:text-[var(--brand)] transition-colors duration-300 relative"
          >
            <IconBrandGithub />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border size-10 cursor-pointer rounded-xl p-2 hover:border-[var(--brand)] hover:text-[var(--brand)] dark:hover:border-[var(--brand)] dark:hover:text-[var(--brand)] transition-colors duration-300 relative"
          >
            <IconBrandLinkedin />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border size-10 cursor-pointer rounded-xl p-2 hover:border-[var(--brand)] hover:text-[var(--brand)] dark:hover:border-[var(--brand)] dark:hover:text-[var(--brand)] transition-colors duration-300 relative"
          >
            <IconBrandGmail />
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
        <div className="relative w-3/4 rounded-xl">
          <GlowingEffect
            blur={0}
            borderWidth={5}
            spread={700}
            glow={true}
            disabled={false}
          />
          <Image
            src="/images/profile-img.jpeg"
            alt="Your Image Description"
            className="object-cover w-full h-auto rounded-xl"
            layout="responsive"
            width={1}
            height={1}
          />
        </div>
      </div>
    </div>
  );
};

export const Title = memo(() => {
  return (
    <h1 className="text-2xl  sm:text-3xl md:text-4xl xl:text-5xl  font-bold tracking-tight sm:my-6 dark:text-zinc-300 text-zinc-700">
      <span className="text-[var(--brand)]">Muhammad</span> Ramzan
    </h1>
  );
});

Title.displayName = "Title";
