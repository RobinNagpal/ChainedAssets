export interface Project {
  id: string
  name: string
  website?:string
  description?:string
  icon:string
  serviceProviders: ProjectServiceProvider[]
  assets: ProjectAsset[]
}

interface ProjectServiceProvider {
  providerId: string
  category: string
}
interface ProjectAsset {
  assetName: string
  assetDescription: string
}