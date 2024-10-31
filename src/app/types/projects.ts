export interface Project {
  id: string
  name: string
  website?:string
  description?:string
  icon:string
  serviceProviders: ProjectServiceProvider[]
}

interface ProjectServiceProvider {
  providerId: string
  category: string
}
