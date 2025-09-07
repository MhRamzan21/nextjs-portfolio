import projectsData from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Carousel } from "@/components/ui/apple-card-carousel";
import { CheckCircle2 } from "lucide-react";
import { BothLegsSeparator } from "@/components/ui/separator";

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await Promise.resolve(params);
  const project = projectsData.find((p) => p.slug === slug);

  const cards = project?.images?.map((img: string, idx: number) => (
    <ProjectImageCard
      key={idx}
      img={img}
      title={`${project.title} screenshot ${idx + 1}`}
    />
  ));

  if (!project) return notFound();

  return (
    <div className="max-w-5xl mx-auto py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground mt-4">{project.description}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Tech Stack</h2>
        <ul className="flex flex-wrap gap-2 mt-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 bg-secondary rounded-md text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <Carousel items={cards || []} />
      {(project?.keyPoints?.length ?? 0) > 0 && (
        <div className="mt-8">
          <div className="w-fit mb-4">
            <h2 className="text-lg font-semibold mb-2">Key Contributions</h2>
            <BothLegsSeparator />
          </div>
          <ul className="space-y-3">
            {project.keyPoints!.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-[2px]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

       {project.credentials &&
        (project.credentials.name || project.credentials.password) && (
          <div className="mt-8">
            <div className="w-fit mb-4">
              <h2 className="text-lg font-semibold mb-2">Demo Credentials</h2>
              <BothLegsSeparator />
            </div>
            <div className="bg-muted rounded-lg p-4 space-y-2 text-sm">
              {project.credentials.name && (
                <p>
                  <span className="font-semibold">Username:</span>{" "}
                  {project.credentials.name}
                </p>
              )}
              {project.credentials.password && (
                <p>
                  <span className="font-semibold">Password:</span>{" "}
                  {project.credentials.password}
                </p>
              )}
            </div>
          </div>
        )}
        
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-primary hover:underline underline-offset-4"
        >
          Visit Live Project →
        </a>
      )}
    </div>
  );
}

type ProjectImageCardProps = {
  img: string;
  title: string;
};

const ProjectImageCard = ({ img, title }: ProjectImageCardProps) => {
  return (
    <Card className="overflow-hidden rounded-xl shadow-md py-0">
      <div className="relative w-84 h-52 md:w-[800px] md:h-[450px]">
        <Image
          src={img}
          alt={`${title} `}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </Card>
  );
};
