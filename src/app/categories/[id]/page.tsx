// app/categories/[id]/page.js
import TempNav from '@/components/TempNav'
import Link from 'next/link'
import { categories } from '../../data/categories'
import { serviceProviders } from '../../data/serviceProviders'
import { projects } from '../../data/projects'

export default function CategoryPage({ params }: { params: { id: string } }) {
  const { id } = params
  const category = categories.find((cat) => cat.id === id)

  if (!category) {
    return <div>Category not found</div>
  }

  const providersInCategory = serviceProviders.filter((sp) =>
    sp.categories.includes(id),
  )

  return (
    <div className="p-4">
      <TempNav />
      <h1 className="mb-4 text-2xl font-bold">{category.name}</h1>

      {providersInCategory.map((provider) => (
        <div key={provider.id} className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">
            <Link
              href={`/service-providers/${provider.id}`}
              className="text-blue-500 hover:underline"
            >
              {provider.name}
            </Link>
          </h2>
          <h3 className="text-lg font-medium">Projects:</h3>
          <ul className="list-disc pl-5">
            {provider.projects
              .filter((p) => p.category === id)
              .flatMap((p) => p.projects)
              .map((projId) => {
                const project = projects.find((p) => p.id === projId)
                return (
                  <li key={projId}>
                    <Link
                      href={`/projects/${projId}`}
                      className="text-blue-500 hover:underline"
                    >
                      {project ? project.name : projId}
                    </Link>
                  </li>
                )
              })}
          </ul>
        </div>
      ))}
    </div>
  )
}
