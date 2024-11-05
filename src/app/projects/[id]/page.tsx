// app/projects/[id]/page.js
import { Project } from '@/app/types/projects'
import PageWrapper from '@/components/PageWrapper'
import ProjectDetails from '@/components/ProjectDetails'
import projectsData from '../../data/generated-json/projects.json'

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params
  const project: Project | undefined = projectsData.projects.find(
    (proj) => proj.id === id,
  )

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <PageWrapper>
      <ProjectDetails
        projectId={project.id}
        projectName={project.name}
      ></ProjectDetails>
    </PageWrapper>
  )
}
