// import { useParams } from 'next/navigation'
import Head from 'next/head'
import ProjectDetails from '@/components/ProjectDetails'
import projects from "@/lib/DigitalMarketingProjects";


export default function ProjectPage() {
  // const params = useParams()
  // const  {id}  = params.id
  const project = projects.find((project) => project.id)

  if (!project) return <p>Project not found</p>

  return (
    <div>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
      </Head>
      <main className="max-w-4xl mx-auto p-4 pt-16">
        <ProjectDetails project={project} />
      </main>
    </div>
  )
}
