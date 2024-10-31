import categoriesData from '@/app/data/generated-json/categories.json'
import serviceProvidersData from '@/app/data/generated-json/serviceProviders.json'
import { Category } from '@/app/types/categories'
import { ServiceProvider } from '@/app/types/serviceProviders'

import Link from 'next/link'

const categories:Category[] = categoriesData.categories
const serviceProviders: ServiceProvider[]=serviceProvidersData.serviceProviders
export default function CategoriesList() {
  return (
    <div className="m-4 w-full max-w-6xl rounded-lg border border-gray-300 bg-white p-6 shadow-md">
      <ul role="list" className="w-full divide-y divide-gray-200">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex items-start justify-between gap-x-6 py-5"
          >
            <div className="min-w-0">
              <Link
                href={`/categories/${category.id}`}
                className="text-blue-600 hover:underline"
              >
                <p className="text-xl font-bold text-gray-900">
                  {category.name}
                </p>
              </Link>
            </div>

            {/* Right-aligned Service Providers */}
            <div className="flex w-full flex-col items-end text-right sm:w-auto">
              <h4 className="py-2 text-lg font-semibold text-gray-900">
                Service Providers
              </h4>
              <ul
                role="list"
                className="w-full divide-y divide-gray-100 sm:w-auto"
              >
                {serviceProviders
                  .filter((provider) =>
                    category.serviceProviders.includes(provider.id),
                  )
                  .map((matchingProvider) => (
                    <li key={matchingProvider.id} className="py-2">
                      <p className="text-base font-medium text-gray-800">
                        {matchingProvider.name}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
