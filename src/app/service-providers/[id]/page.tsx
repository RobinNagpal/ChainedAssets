// app/service-providers/[id]/page.js
import TempNav from '@/components/TempNav'
import Link from 'next/link'
import { serviceProviders } from '../../data/serviceProviders'
import { categories } from '../../data/categories'
import { projects } from '../../data/projects'

export default function ServiceProviderPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const provider = serviceProviders.find((sp) => sp.id === id)

  if (!provider) {
    return <div>Service Provider not found</div>
  }

  return (
    <div className="p-4">
      <TempNav />
      <h1 className="mb-4 text-2xl font-bold">{provider.name}</h1>
      <h2 className="mb-2 text-xl font-semibold">Categories:</h2>
      <ul className="mb-4 list-disc pl-5">
        {provider.categories.map((catId) => {
          const category = categories.find((c) => c.id === catId)
          return (
            <li key={catId}>
              <Link
                href={`/categories/${catId}`}
                className="text-blue-500 hover:underline"
              >
                {category ? category.name : catId}
              </Link>
            </li>
          )
        })}
      </ul>
      <h2 className="mb-2 text-xl font-semibold">Projects:</h2>
      {provider.projects.map((p) => {
        const category = categories.find((c) => c.id === p.category)
        return (
          <div key={p.category} className="mb-4">
            <h3 className="mb-1 text-lg font-medium">
              <Link
                href={`/categories/${p.category}`}
                className="text-blue-500 hover:underline"
              >
                {category ? category.name : p.category}
              </Link>
            </h3>
            <ul className="list-disc pl-5">
              {p.projects.map((projId) => {
                const project = projects.find((proj) => proj.id === projId)
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
        )
      })}
    </div>
  )
}
