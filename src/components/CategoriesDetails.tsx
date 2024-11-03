import categoriesData from '@/app/data/generated-json/categories.json'
import serviceProvidersData from '@/app/data/generated-json/serviceProviders.json'
import { Category } from '@/app/types/categories'
import { ServiceProvider } from '@/app/types/serviceProviders'
import projectsData from '@/app/data/generated-json/projects.json'
import { Project } from '@/app/types/projects'
import Link from 'next/link'
interface ExampleProps {
  categoryId: string
  categoryName: string
}

const categories:Category[] = categoriesData.categories
const serviceProviders: ServiceProvider[] = serviceProvidersData.serviceProviders
const projects: Project[] = projectsData.projects

export default function Example({ categoryId, categoryName }: ExampleProps) {
  const currentCategory = categories.find(
    (category) => category.id === categoryId,
  )

  // Filter service providers that belong to the current category
  const providersInCategory = serviceProviders.filter((sp) =>
    sp.categories.includes(categoryId),
  )

  // Find all unique projects that match any of the service providers in the category
  const matchingProjects = projects.filter((project) =>
    project.serviceProviders.some(
      (provider) => provider.category === categoryId,
    ),
  )


  return (
    <div className="m-4 max-w-6xl rounded-lg border border-gray-700 bg-slate-200 p-6 shadow-md">
      <div className="mb-6 px-4 sm:px-0">
        <h3 className="text-2xl font-bold text-gray-900">
          Category Information
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-semibold text-gray-900">
              Category Name
            </dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              {categoryName}
            </dd>
          </div>

          {/* Service Providers Section */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-semibold text-gray-900">
              Service Providers
            </dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100">
                {providersInCategory.map((provider) => (
                  <li key={provider.id} className="flex items-start gap-4 py-2">
                  <div className="flex flex-col">
                  <Link href={provider?.website!} target="_blank">
                    <div className="flex flex-row ">
                    <span className="text-lg font-medium text-gray-900">
                      {provider.name}
                    </span>
                    <span>
                      {' '}
                      {provider?.icon && (
                        <img
                          src={provider?.icon}
                          className="px-2 max-h-8 rounded"
                        />
                      )}
                      </span>
                      </div>
                    </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>

          {/* Projects Section */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-semibold text-gray-900">Projects</dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              {matchingProjects.map((matchingProject) => (
                <Link key={matchingProject.id} href={matchingProject?.website!}>
                    <div className='flex flex-row'>
                <span
                  className="block text-lg text-gray-600"
                >
                  {matchingProject.name}
                    </span>
                    {matchingProject?.icon &&
                  <img
                  src={matchingProject?.icon}
                  className="px-2 max-h-8 rounded"
                        />}
                </div>
                </Link>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
