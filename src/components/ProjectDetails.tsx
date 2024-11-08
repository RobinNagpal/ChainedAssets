import serviceProvidersData from '@/app/data/generated-json/serviceProviders.json'
import projectsData from '@/app/data/generated-json/projects.json'
import categoriesData from '@/app/data/generated-json/categories.json'
import { Project } from '@/app/types/projects'
import { ServiceProvider } from '@/app/types/serviceProviders'
import { Category } from '@/app/types/categories'
import Link from 'next/link'

interface ExampleProps {
  projectId: string
  projectName: string
}
const projects: Project[] = projectsData.projects
const serviceProviders: ServiceProvider[] =
  serviceProvidersData.serviceProviders
const categories: Category[] = categoriesData.categories
export default function ProjectDetails({
  projectId,
  projectName,
}: ExampleProps) {
  // Find the current project based on projectId
  const currentProject: Project | undefined = projects.find(
    (project) => project.id === projectId,
  )

  // Filter service providers associated with this project
  const projectServiceProviders = serviceProviders.filter((provider) =>
    provider.projects.some((p) => p.projects.includes(projectId)),
  )

  return (
    <div className="w-full pt-6">
      <div className="mb-6 px-4 sm:px-0">
        <h3 className="text-2xl font-bold">Project Information</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="px-4 text-lg font-semibold">Project Name</dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              {projectName}
            </dd>
          </div>
          {currentProject?.icon && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="px-4 text-lg font-semibold">Icon</dt>
              <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
                <img
                  src={currentProject.icon}
                  alt={`${currentProject.name} icon`}
                  className="h-16 rounded"
                />
              </dd>
            </div>
          )}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="px-4 text-lg font-semibold">Website</dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              <Link
                href={currentProject?.website!}
                className="text-blue-600 hover:underline"
              >
                {currentProject?.website?.replace(/^https?:\/\//, '')}
              </Link>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="px-4 text-lg font-semibold">Description</dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              {currentProject?.description}
            </dd>
          </div>
          {currentProject?.assets && currentProject.assets.length > 0 && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="px-4 text-lg font-semibold">Assets</dt>
              <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-100">
                  {currentProject.assets.map((asset, index) => (
                    <li key={index} className="py-2">
                      <span className="font-semibold">{asset.assetName}:</span>{' '}
                      {asset.assetDescription}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          )}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="px-4 text-lg font-semibold">Service Providers</dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100">
                {projectServiceProviders.map((provider) => (
                  <li key={provider.id} className="flex items-start gap-4 py-2">
                    <div className="flex flex-col">
                      <Link href={provider?.website!} target="_blank">
                        <div className="flex flex-row">
                          <span className="px-2 text-lg font-medium">
                            {provider.name}
                          </span>
                          <span>
                            {' '}
                            {provider?.icon && (
                              <img
                                src={provider?.icon}
                                className="max-h-8 rounded"
                              />
                            )}
                          </span>
                        </div>
                      </Link>
                      <span className="px-2 text-sm text-gray-600">
                        Category:{' '}
                        {provider.categories
                          .map((categoryId) => {
                            // Find the matching category by ID
                            const category = categories.find(
                              (cat) => cat.id === categoryId,
                            )
                            // Return category name if found, otherwise show the ID or a fallback
                            return category ? category.name : 'Unknown Category'
                          })
                          .join(', ')}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
