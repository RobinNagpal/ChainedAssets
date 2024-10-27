// app/projects/[id]/page.js
import TempNav from '@/components/TempNav'
import Link from 'next/link'
import { projects } from '../../data/projects'
import { serviceProviders } from '../../data/serviceProviders'
import { categories } from '../../data/categories'

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
      <h2 className="mb-2 text-xl font-semibold">Service Providers:</h2>
      <ul className="list-disc pl-5">
        {project.serviceProviders.map((sp) => {
          const provider = serviceProviders.find((p) => p.id === sp.providerId)
          const category = categories.find((c) => c.id === sp.category)

          return (
            <li key={sp.providerId}>
              <Link
                href={`/service-providers/${sp.providerId}`}
                className="text-blue-500 hover:underline"
              >
                {provider ? provider.name : sp.providerId}
              </Link>{' '}
              for{' '}
              <Link
                href={`/categories/${sp.category}`}
                className="text-blue-500 hover:underline"
              >
                {category ? category.name : sp.category}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
