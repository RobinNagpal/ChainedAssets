// app/projects/page.js
import TempNav from '@/components/TempNav'
import Link from 'next/link'
import { projects } from '../data/projects'
import ProjectList from '@/components/ProjectList'
import PageWrapper from '@/components/PageWrapper'

export default function ProjectsPage() {
  return (
    <>
    <TempNav />
    <PageWrapper>
      <h1 className="mb-4 text-2xl font-bold">Projects</h1>
      <ProjectList></ProjectList>
      </PageWrapper>
      </>
  )
}
