// app/projects/[id]/page.js
import TempNav from '@/components/TempNav'
import projectsData from '../../data/generated-json/projects.json'
import ProjectDetails from '@/components/ProjectDetails'
import PageWrapper from '@/components/PageWrapper'
import { Project } from '@/app/types/projects'

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params
  const project:Project | undefined= projectsData.projects.find((proj) => proj.id === id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="p-4">
      <TempNav />
      <PageWrapper>
        <h1 className="mb-4 text-2xl font-bold">{project.name}</h1>
        <ProjectDetails
          projectId={project.id}
          projectName={project.name}
        ></ProjectDetails>
      </PageWrapper>
    </div>
  )
}
