import { serviceProviders } from '@/app/data/serviceProviders'
import { projects } from '@/app/data/projects'

interface ExampleProps {
  serviceProviderId: string
  serviceProviderName: string
}

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
            <dt className="text-lg font-semibold text-gray-900">
              Service Provider Name
            </dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              {serviceProviderName}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-semibold text-gray-900">Categories</dt>
            <dd className="mt-1 text-lg text-gray-700 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100">
                {currentProvider?.categories.map((category) => (
                  <li key={category} className="flex items-start gap-4 py-2">
                    <div className="flex flex-col">
                      <span className="text-base font-medium text-gray-900">
                        {category}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-semibold text-gray-900">Projects</dt>
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
