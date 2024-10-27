// app/projects/page.js
import TempNav from '@/components/TempNav'
import Link from 'next/link'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <div className="p-4">
      <TempNav />
      <h1 className="mb-4 text-2xl font-bold">Projects</h1>
      <ul className="list-disc pl-5">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={`/projects/${project.id}`}
              className="text-blue-500 hover:underline"
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
