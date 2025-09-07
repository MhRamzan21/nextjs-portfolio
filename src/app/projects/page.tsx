import { ProjectList } from "@/components/projects/project-list";
import { TitleWithSubtitle } from "@/components/title-subtitle";
import React from "react";

const page = () => {
  return (
    <div className="w-full xl:w-[90%] mx-auto">
      <section className="w-full px-4 py-20">
        <TitleWithSubtitle title="Projects" subtitle="My Recent Work" />
        <ProjectList />
      </section>
    </div>
  );
};

export default page;
