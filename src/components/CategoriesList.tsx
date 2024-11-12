import categoriesData from '@/app/data/generated-json/categories.json'
import serviceProvidersData from '@/app/data/generated-json/serviceProviders.json'
import { Category } from '@/app/types/categories'
import { ServiceProvider } from '@/app/types/serviceProviders'

import Link from 'next/link'

const categories: Category[] = categoriesData.categories
const serviceProviders: ServiceProvider[] =
  serviceProvidersData.serviceProviders
export default function CategoriesList() {
  return (
    <div className="w-full pt-6">
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
            <div className="flex w-full flex-col sm:w-1/2">
              <ul
                role="list"
                className="w-full divide-y divide-gray-100 sm:w-auto"
              >
                {serviceProviders
                  .filter((provider) =>
                    category.serviceProviders.includes(provider.id),
                  )
                  .map((matchingProvider) => (
                    <Link
                      className="flex h-12 w-full justify-between align-middle"
                      href={'/service-providers/' + matchingProvider?.id}
                      key={matchingProvider.id}
                    >
                      <div
                        className="mt-3 flex w-full justify-between align-middle"
                        key={matchingProvider.id}
                      >
                        <div className="flex justify-center align-middle">
                          {matchingProvider?.icon && (
                            <img
                              src={matchingProvider?.icon}
                              className="h-6 rounded"
                            />
                          )}
                        </div>
                        <div>{matchingProvider?.name}</div>
                      </div>
                    </Link>
                  ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
