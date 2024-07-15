"use client"

import { useParams } from 'next/navigation';
import Head from 'next/head';
import ProjectDetails from '@/components/ProjectDetails';
import projects from "@/lib/DigitalMarketingProjects";

export default function ProjectPage() {
  const { id } = useParams();
  
  const project = projects.find(project => project.id === id);

  if (!project) {
    return (
      <div>
        <Head>
          <title>Project Not Found</title>
          <meta name="description" content="Project not found" />
        </Head>
        <main className="max-w-4xl mx-auto p-4 pt-16">
          <p>Project not found</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
      </Head>
      <main className="max-w-4xl mx-auto p-4 pt-16">
        <ProjectDetails id={project.id} />
      </main>
    </div>
  );
}
