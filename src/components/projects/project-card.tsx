"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ProjectCardProps } from "@/types/types";
import Link from "next/link";
import { Button } from "../ui/button";

export function ProjectCard({
  title,
  description,
  image,
  stack,
  link,
  slug,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:border-[var(--brand)] transition-all bg-card pt-0">
      <CardHeader className="p-0">
        <div className="relative w-full h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 space-y-4">
        <div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-3 py-1">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          {link && (
            <Button variant="outline" size="sm">
              <a href={link} target="_blank" rel="noopener noreferrer">
                Live Project
              </a>
            </Button>
          )}
          {slug && (
            <Button size="sm" className="bg-[var(--brand)]">
              <Link href={`/projects/${slug}`}>View Details</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
