import projectData from '@/app/data/generated-json/projects.json'
import serviceProvidersData from '@/app/data/generated-json/serviceProviders.json'
import categoriesData from '@/app/data/generated-json/categories.json'
import Link from 'next/link'
import { Project } from '@/app/types/projects'
import { ServiceProvider } from '@/app/types/serviceProviders'
import { Category } from '@/app/types/categories'

const projects: Project[] = projectData.projects
const serviceProviders: ServiceProvider[] =
  serviceProvidersData.serviceProviders
const categories: Category[] = categoriesData.categories
export default function ProjectList() {
  return (
    <div className="w-full pt-6">
      <div role="list" className="w-full divide-y divide-gray-200">
        {projects.map((project) => (
          <div key={project.id} className="flex w-full items-start">
            <div className="sm:w-1/2">
              <Link
                href={`/projects/${project.id}`}
                className="hover:underline"
              >
                <p className="text-xl font-bold">{project.name}</p>
              </Link>
            </div>

            <div className="flex w-full flex-col sm:w-1/2">
              <h4 className="text-lg font-semibold">Service Providers</h4>
              {project.serviceProviders?.length!=0 ? (
                <ul
                  role="list"
                  className="w-full divide-y divide-gray-100 sm:w-auto"
                >
                  {project.serviceProviders?.map((serviceProviderRef) => {
                    // Find the corresponding service provider by providerId
                    const matchingCategory = categories.find(
                      (category) => category.id === serviceProviderRef.category,
                    )

                    const matchingProvider = serviceProviders.find(
                      (sp) => sp.id === serviceProviderRef.providerId,
                    )
                    return (
                      <Link
                        className="flex w-full justify-between"
                        href={'/service-providers/' + matchingProvider?.id}
                        key={serviceProviderRef.providerId}
                      >
                        <div
                          key={serviceProviderRef.providerId}
                          className="w-72 py-2"
                        >
                          <p className="text-sm font-medium">
                            {matchingCategory?.name}
                          </p>
                        </div>
                        <div key={serviceProviderRef.providerId}>
                          <div className="flex flex-col items-center justify-center align-middle">
                            <div className="flex w-full justify-center align-middle text-sm font-medium">
                              {matchingProvider?.name}
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </ul>
              ) : (<p>NO service providers known for {project.name }</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
