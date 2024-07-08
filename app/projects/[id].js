import { useRouter } from 'next/router'
import Head from 'next/head'
import ProjectDetails from '@/components/ProjectDetails'

const projects = [
  {
    id: 1,
    title: 'SEO Optimization for E-commerce Site',
    description: 'Improved organic search rankings and increased traffic.',
    imageUrl: '/images/project1.jpg',
    category: 'SEO',
    goals: 'Increase organic traffic and search rankings.',
    solutions: 'Implemented on-page SEO, link building, and content strategy.',
    results: 'Achieved a 50% increase in organic traffic.',
  },
  // Add more projects as needed
]

export default function ProjectPage() {
  const router = useRouter()
  const { id } = router.query
  const project = projects.find((p) => p.id == id)

  if (!project) return <p>Project not found</p>

  return (
    <div>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
      </Head>
      <main className="max-w-4xl mx-auto p-4">
        <ProjectDetails project={project} />
      </main>
    </div>
  )
}
