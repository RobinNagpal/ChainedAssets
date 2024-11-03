import projectData from '@/app/data/generated-json/projects.json'
import serviceProvidersData from '@/app/data/generated-json/serviceProviders.json'
import categoriesData from '@/app/data/generated-json/categories.json'
import Link from 'next/link'
import { Project } from '@/app/types/projects'
import { ServiceProvider } from '@/app/types/serviceProviders'
import { Category } from '@/app/types/categories'

const projects: Project[] = projectData.projects
const serviceProviders: ServiceProvider[] =
  serviceProvidersData.serviceProviders
const categories: Category[] = categoriesData.categories
export default function Example() {
  return (
    <div className="m-4 w-full max-w-6xl rounded-lg border border-gray-700 bg-slate-200 p-6 shadow-md">
      <ul role="list" className="w-full divide-y divide-gray-200">
        {projects.map((project) => (
          <li
            key={project.id}
            className="flex items-start justify-between gap-x-6 py-5"
          >
            <div className="min-w-0">
              <Link
                href={`/projects/${project.id}`}
                className="text-blue-600 hover:underline"
              >
                <p className="text-xl font-bold text-gray-900">
                  {project.name}
                </p>
              </Link>
            </div>
            <div className="flex w-full flex-col items-end rounded-lg text-right sm:w-auto">
              <h4 className="px-2 py-2 text-lg font-semibold text-gray-900">
                Categories
              </h4>
              <ul
                role="list"
                className="w-full divide-y divide-gray-100 sm:w-auto"
              >
                {project.serviceProviders.map((serviceProviderRef) => {
                  // Find the corresponding service provider by providerId
                  const matchingCategory = categories.find(
                    (category) => category.id === serviceProviderRef.category,
                  )

                  return (
                    <li key={serviceProviderRef.providerId} className="py-2">
                      <p className="px-2 py-4 text-lg font-medium text-gray-800">
                        {matchingCategory?.name}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
            {/* Right-aligned Service Providers */}
            <div className="flex w-full flex-col items-end rounded-lg text-right sm:w-auto">
              <h4 className="px-2 py-2 text-lg font-semibold text-gray-900">
                Service Providers
              </h4>
              <ul
                role="list"
                className="w-full divide-y divide-gray-100 sm:w-auto"
              >
                {project.serviceProviders.map((serviceProviderRef) => {
                  // Find the corresponding service provider by providerId
                  const matchingProvider = serviceProviders.find(
                    (sp) => sp.id === serviceProviderRef.providerId,
                  )

                  return (
                    <li
                      key={serviceProviderRef.providerId}
                      className="w-72 py-2"
                    >
                      <Link href={matchingProvider?.website!} target="_blank">
                        <p className="px-2 text-lg font-medium text-gray-800">
                          {matchingProvider?.name}
                        </p>
                        {matchingProvider?.icon && (
                          <img
                            src={matchingProvider?.icon}
                            className="max-h-8 rounded"
                          />
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
