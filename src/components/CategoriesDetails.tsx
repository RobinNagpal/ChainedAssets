import { serviceProviders } from '@/app/data/serviceProviders'
import { projects } from '@/app/data/projects'
import { categories } from '@/app/data/categories'

interface ExampleProps {
  categoryId: string
  categoryName: string
}

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
    <div className="m-4 max-w-6xl rounded-lg border border-gray-300 bg-white p-6 shadow-md">
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
                      <span className="text-base font-medium text-gray-900">
                        {provider.name}
                      </span>
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
                <span
                  key={matchingProject.id}
                  className="block text-sm text-gray-600"
                >
                  {matchingProject.name}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
