// app/projects/page.js
import TempNav from '@/components/TempNav'
import Link from 'next/link'
import { projects } from '../data/projects'
import ProjectList from '@/components/ProjectList'

export default function ProjectsPage() {
  return (
    <div className="p-4">
      <TempNav />
      <h1 className="mb-4 text-2xl font-bold">Projects</h1>
      <ProjectList></ProjectList>
    </div>
  )
}
