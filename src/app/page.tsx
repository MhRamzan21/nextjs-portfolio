import { FullScreen } from "@/components/full-screen";
import About from "@/containers/About";
import { Hero } from "@/containers/Hero";
import { Skills } from "@/containers/Skills";

export default function Home() {
  return (
    <div>
      <FullScreen className="w-full xl:w-[70%] mx-auto">
        <Hero />
      </FullScreen>

      <div className="xl:w-[70%] mx-auto py-5 md:py-20">
        <About />
      </div>
      <div className="xl:w-[70%] mx-auto">
        <Skills />
      </div>

      <div className="my-10"></div>
    </div>
  );
}
