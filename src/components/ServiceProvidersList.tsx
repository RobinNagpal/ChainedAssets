import serviceProvidersData from '@/app/data/generated-json/serviceProviders.json'
import { ServiceProvider } from '@/app/types/serviceProviders'
import categoriesData from '@/app/data/generated-json/categories.json'

import Link from 'next/link'
import { Category } from '@/app/types/categories'

const serviceProviders: ServiceProvider[] =
  serviceProvidersData.serviceProviders
const categories: Category[] = categoriesData.categories

export default function ServiceProvidersList() {
  return (
    <div className="w-full pt-6">
      <div role="list" className="w-full divide-y divide-gray-200">
        {serviceProviders.map((serviceProvider) => (
          <div
            key={serviceProvider.id}
            className="flex w-full justify-between py-4"
          >
            <div className="min-w-0">
              <Link
                href={`/service-providers/${serviceProvider.id}`}
                className="flex flex-coltext-blue-600 hover:underline"
              > <p className="text-xl">{serviceProvider.name}</p>
                {serviceProvider.icon && <img src={serviceProvider.icon} className='h-8 max-w-48 mx-4'></img>}
              </Link>
            </div>

            <div>
              {serviceProvider.projects.map((project) => {
                // Find the matching category by ID
                const matchedCategory = categories.find(
                  (category) => category.id === project.category,
                )

                return (
                  <div key={project.category}>
                    {matchedCategory ? matchedCategory.name : project.category}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
