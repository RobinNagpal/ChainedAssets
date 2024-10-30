// app/projects/[id]/page.js
import TempNav from '@/components/TempNav'
import { projects } from '../../data/projects'
import ProjectDetails from '@/components/ProjectDetails'

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params
  const project = projects.find((proj) => proj.id === id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="p-4">
      <TempNav />
      <h1 className="mb-4 text-2xl font-bold">{project.name}</h1>
      <ProjectDetails
        projectId={project.id}
        projectName={project.name}
      ></ProjectDetails>
    </div>
  )
}
