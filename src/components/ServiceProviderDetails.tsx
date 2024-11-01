import serviceProvidersData from '@/app/data/generated-json/serviceProviders.json'
import { ServiceProvider } from '@/app/types/serviceProviders'
import projectsData from '@/app/data/generated-json/projects.json'
import { Project } from '@/app/types/projects'
import categoriesData from '@/app/data/generated-json/categories.json'
import { Category } from '@/app/types/categories'
import Link from 'next/link'
interface ExampleProps {
  serviceProviderId: string
  serviceProviderName: string
}

const serviceProviders: ServiceProvider[] =
  serviceProvidersData.serviceProviders
const projects: Project[] = projectsData.projects
const categories: Category[] = categoriesData.categories
export default function Example({
  serviceProviderId,
  serviceProviderName,
}: ExampleProps) {
  // Find the current serviceProvider based on serviceProviderId
  const currentProvider = serviceProviders.find(
    (serviceProvider) => serviceProvider.id === serviceProviderId,
  )

  return (
    <div className="m-4 max-w-6xl rounded-lg border border-gray-300 bg-white p-6 shadow-md">
      <div className="mb-6 px-4 sm:px-0">
        <h3 className="text-2xl font-bold text-gray-900">
          Service Provider Information
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="px-4 text-lg font-semibold text-gray-900">
              Service Provider Name
            </dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              {serviceProviderName}
            </dd>
          </div>
          {currentProvider?.icon && (
            <div className="bg-gray-200 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="px-4 text-lg font-semibold text-gray-900">Icon</dt>
              <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
                <img
                  src={currentProvider.icon}
                  alt={`${currentProvider.name} icon`}
                  className="h-16 rounded"
                />
              </dd>
            </div>
          )}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="px-4 text-lg font-semibold text-gray-900">
              Description
            </dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              {currentProvider?.description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="px-4 text-lg font-semibold text-gray-900">
              Website
            </dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              <Link
                href={currentProvider?.website!}
                className="text-blue-600 hover:underline"
              >
                {currentProvider?.website
                  ?.replace(/^https?:\/\//, '')
                  .replace(/\/$/, '')}
              </Link>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="px-4 text-lg font-semibold text-gray-900">
              Categories
            </dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100">
                {currentProvider?.categories.map((categoryId) => {
                  // Find the matching category by ID
                  const category = categories.find(
                    (cat) => cat.id === categoryId,
                  )

                  return (
                    <li
                      key={categoryId}
                      className="flex items-start gap-4 py-2"
                    >
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-900">
                          {category ? category.name : 'Unknown Category'}
                        </span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="px-4 text-lg font-semibold text-gray-900">
              Projects
            </dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              {currentProvider!.projects.map((providersProject) => {
                // Find all matching projects with IDs in serviceProvider.projects array
                const matchingProjects = projects.filter((project) =>
                  providersProject.projects.includes(project.id),
                )

                return matchingProjects.map((matchingProject) => (
                  <span
                    key={matchingProject.id}
                    className="block text-sm text-gray-600"
                  >
                    {matchingProject.name}
                  </span>
                ))
              })}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
