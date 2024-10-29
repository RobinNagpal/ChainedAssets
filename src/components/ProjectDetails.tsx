import { serviceProviders } from '@/app/data/serviceProviders'
import { projects } from '@/app/data/projects'

interface ExampleProps {
  projectId: string
  projectName: string
}

export default function Example({ projectId, projectName }: ExampleProps) {
  // Find the current project based on projectId
  const currentProject = projects.find((project) => project.id === projectId)

  // Filter service providers associated with this project
  const projectServiceProviders = serviceProviders.filter((provider) =>
    provider.projects.some((p) => p.projects.includes(projectId)),
  )

  return (
    <div className="m-4 max-w-6xl rounded-lg border border-gray-300 bg-white p-6 shadow-md">
      <div className="mb-6 px-4 sm:px-0">
        <h3 className="text-2xl font-bold text-gray-900">
          Project Information
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-semibold text-gray-900">
              Project Name
            </dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              {projectName}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-semibold text-gray-900">
              Service Providers
            </dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100">
                {projectServiceProviders.map((provider) => (
                  <li key={provider.id} className="flex items-start gap-4 py-2">
                    <div className="flex flex-col">
                      <span className="text-base font-medium text-gray-900">
                        {provider.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        Categories: {provider.categories.join(', ')}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-semibold text-gray-900">Categories</dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              {currentProject?.serviceProviders.map((serviceProvider) => (
                <span
                  key={serviceProvider.providerId}
                  className="block text-sm text-gray-600"
                >
                  {serviceProvider.category}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
