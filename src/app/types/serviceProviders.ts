export interface ServiceProvider {
  id: string
  name: string
  website?: string
  description?:string
  icon:string
  categories: string[]
  projects: ServiceProviderCategoryProjects[]
}
interface ServiceProviderCategoryProjects {
  category: string
  projects: string[]
}
