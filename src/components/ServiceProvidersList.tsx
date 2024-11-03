import serviceProvidersData from '@/app/data/generated-json/serviceProviders.json'
import { ServiceProvider } from '@/app/types/serviceProviders'
import categoriesData from '@/app/data/generated-json/categories.json'

import Link from 'next/link'
import { Category } from '@/app/types/categories'

const serviceProviders: ServiceProvider[] =
  serviceProvidersData.serviceProviders
const categories: Category[] = categoriesData.categories

export default function Example() {
  return (
    <div className="m-4 w-full max-w-6xl rounded-lg border border-gray-700 bg-slate-200 p-6 shadow-md">
      <ul role="list" className="w-full divide-y divide-gray-200">
        {serviceProviders.map((serviceProvider) => (
          <li
            key={serviceProvider.id}
            className="flex items-start justify-between gap-x-6 py-5"
          >
            <div className="min-w-0">
              <Link
                href={`/service-providers/${serviceProvider.id}`}
                className="text-blue-600 hover:underline"
              >
                <p className="text-xl font-bold text-gray-900">
                  {serviceProvider.name}
                </p>
              </Link>
            </div>

            {/* Right-aligned Categories */}
            <div className="flex w-full flex-col items-end text-right sm:w-auto">
              <h4 className="py-2 text-lg font-semibold text-gray-900">
                Categories
              </h4>
              <ul
                role="list"
                className="w-full divide-y divide-gray-100 sm:w-auto"
              >
                {serviceProvider.projects.map((project) => {
                  // Find the matching category by ID
                  const matchedCategory = categories.find(
                    (category) => category.id === project.category,
                  )

                  return (
                    <li key={project.category} className="py-2">
                      <p className="text-base font-medium text-gray-800">
                        {matchedCategory
                          ? matchedCategory.name
                          : project.category}
                      </p>
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
