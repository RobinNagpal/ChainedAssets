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
    <div className="w-full pt-6">
      <div className="mb-6 px-4 sm:px-0">
        <h3 className="text-2xl font-bold">Service Provider Information</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="px-4 text-lg font-semibold">
              Service Provider Name
            </dt>
            <dd className="mt-1 text-lg sm:col-span-2 sm:mt-0">
              {serviceProviderName}
            </dd>
          </div>
          {currentProvider?.icon && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="px-4 font-semibold">Icon</dt>
              <dd className="mt-1 sm:col-span-2 sm:mt-0">
                <img
                  src={currentProvider.icon}
                  alt={`${currentProvider.name} icon`}
                  className="h-16 rounded"
                />
              </dd>
            </div>
          )}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="px-4 text-lg font-semibold">Description</dt>
            <dd className="mt-1 text-lg sm:col-span-2 sm:mt-0">
              {currentProvider?.description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="px-4 text-lg font-semibold">Website</dt>
            <dd className="mt-1 text-lg sm:col-span-2 sm:mt-0">
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
            <dt className="px-4 text-lg font-semibold">Categories</dt>
            <dd className="mt-1 text-lg sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y">
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
                        <span className="text-base font-medium">
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
            <dt className="px-4 text-lg font-semibold">Projects</dt>
            <dd className="mt-1 text-lg sm:col-span-2 sm:mt-0">
              {currentProvider!.projects.map((providersProject) => {
                // Find all matching projects with IDs in serviceProvider.projects array
                const matchingProjects = projects.filter((project) =>
                  providersProject.projects.includes(project.id),
                )

                return matchingProjects.map((matchingProject) => (
                  <div key={matchingProject.id}>
                    <Link
                      href={`/projects/${matchingProject.id}`}
                      className="flex flex-row"
                    >
                      <span className="block text-lg">
                        {matchingProject.name}
                      </span>
                      {matchingProject?.icon && (
                        <img
                          src={matchingProject?.icon}
                          className="max-h-8 rounded px-2"
                        />
                      )}
                    </Link>
                    {matchingProject.website && (
                      <Link href={matchingProject.website}>
                        {matchingProject.website}
                      </Link>
                    )}
                  </div>
                ))
              })}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
