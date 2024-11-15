import { Project } from '@/app/types/projects'
import { ServiceProvider } from '@/app/types/serviceProviders'
import * as fs from 'fs'
import * as path from 'path'
import { load } from 'js-yaml'

interface Category {
  id: string
  name: string
  serviceProviders: string[]
}

let validationErrors: string[] = []

const readYamlFile = (filePath: string): any => {
  const yaml = fs.readFileSync(filePath, 'utf8')
  return load(yaml)
}

const categoriesYamlPath = path.join(
  __dirname,
  '../app/data/yaml/categories.yaml',
)
const projectsYamlPath = path.join(__dirname, '../app/data/yaml/projects.yaml')
const serviceProvidersYamlPath = path.join(
  __dirname,
  '../app/data/yaml/serviceProviders.yaml',
)

const categoriesData = readYamlFile(categoriesYamlPath)
const projectsData = readYamlFile(projectsYamlPath)
const serviceProvidersData = readYamlFile(serviceProvidersYamlPath)

const categoriesMap = new Map<string, Category>()
const projectsMap = new Map<string, Project>()
const serviceProvidersMap = new Map<string, ServiceProvider>()

validateCategories(categoriesData)
validateProjects(projectsData)
validateServiceProviders(serviceProvidersData)

validateCrossReferences()

if (validationErrors.length > 0) {
  console.error('Validation errors:')
  validationErrors.forEach((error) => console.error(error))
  process.exit(1)
} else {
  // Write JSON files
  fs.writeFileSync(
    path.join(__dirname, '../app/data/generated-json/categories.json'),
    JSON.stringify({ categories: Array.from(categoriesMap.values()) }, null, 2),
    { encoding: 'utf8' },
  )
  fs.writeFileSync(
    path.join(__dirname, '../app/data/generated-json/projects.json'),
    JSON.stringify({ projects: Array.from(projectsMap.values()) }, null, 2),
    { encoding: 'utf8' },
  )
  fs.writeFileSync(
    path.join(__dirname, '../app/data/generated-json/serviceProviders.json'),
    JSON.stringify(
      { serviceProviders: Array.from(serviceProvidersMap.values()) },
      null,
      2,
    ),
    { encoding: 'utf8' },
  )
}

function validateCategories(data: any): void {
  if (!Array.isArray(data.categories)) {
    validationErrors.push('Categories data is not an array.')
    return
  }

  for (const categoryData of data.categories) {
    const id = categoryData.id
    if (!id) {
      validationErrors.push('Category missing id.')
      continue
    }
    if (categoriesMap.has(id)) {
      validationErrors.push(`Duplicate category id: ${id}`)
      continue
    }
    const name = categoryData.name
    if (!name) {
      validationErrors.push(`Category ${id} missing name.`)
    }
    const serviceProviders = categoryData.serviceProviders
    if (!Array.isArray(serviceProviders)) {
      validationErrors.push(`Category ${id} serviceProviders is not an array.`)
    }
    categoriesMap.set(id, {
      id,
      name,
      serviceProviders: serviceProviders || [],
    })
  }
}

function validateProjects(data: any): void {
  if (!Array.isArray(data.projects)) {
    validationErrors.push('Projects data is not an array.')
    return
  }

  for (const projectData of data.projects) {
    const id = projectData.id
    if (!id) {
      validationErrors.push('Project missing id.')
      continue
    }
    if (projectsMap.has(id)) {
      validationErrors.push(`Duplicate project id: ${id}`)
      continue
    }
    const name = projectData.name
    if (!name) {
      validationErrors.push(`Project ${id} missing name.`)
    }
    const description = projectData.description
    if (!description) {
      validationErrors.push(`Project ${id} missing description.`)
    }
    const serviceProviders = projectData.serviceProviders
    if (!Array.isArray(serviceProviders)) {
      validationErrors.push(`Project ${id} serviceProviders is not an array.`)
    }
    const assets = projectData.assets
    if (!Array.isArray(assets)) {
      validationErrors.push(`Project ${id} assets is not an array.`)
    }
    projectsMap.set(id, {
      id,
      name,
      description,
      icon: projectData.icon,
      website: projectData.website,
      serviceProviders: serviceProviders || [],
      assets: assets || [],
    })
  }
}

function validateServiceProviders(data: any): void {
  if (!Array.isArray(data.serviceProviders)) {
    validationErrors.push('ServiceProviders data is not an array.')
    return
  }

  for (const spData of data.serviceProviders) {
    const id = spData.id
    if (!id) {
      validationErrors.push('ServiceProvider missing id.')
      continue
    }
    if (serviceProvidersMap.has(id)) {
      validationErrors.push(`Duplicate service provider id: ${id}`)
      continue
    }
    const name = spData.name
    if (!name) {
      validationErrors.push(`ServiceProvider ${id} missing name.`)
    }
    const website = spData.website
    if (!website) {
      validationErrors.push(`ServiceProvider ${id} missing website.`)
    }
    const description = spData.description
    if (!description) {
      validationErrors.push(`ServiceProvider ${id} missing description.`)
    }
    const categories = spData.categories
    if (!Array.isArray(categories)) {
      validationErrors.push(`ServiceProvider ${id} categories is not an array.`)
    }
    const projects = spData.projects
    if (!Array.isArray(projects)) {
      validationErrors.push(`ServiceProvider ${id} projects is not an array.`)
    }
    serviceProvidersMap.set(id, {
      id,
      name,
      website,
      description,
      icon: spData.icon,
      categories: categories || [],
      projects: projects || [],
    })
  }
}

function validateCrossReferences(): void {
  // Validate that categories' serviceProviders exist
  for (const [categoryId, category] of categoriesMap.entries()) {
    for (const spId of category.serviceProviders) {
      if (!serviceProvidersMap.has(spId)) {
        validationErrors.push(
          `Category ${categoryId} references non-existent service provider ${spId}`,
        )
      }
    }
  }

  // Validate that projects' serviceProviders exist
  for (const [projectId, project] of projectsMap.entries()) {
    for (const sp of project.serviceProviders || []) {
      const providerId = sp.providerId
      const categoryId = sp.category
      if (!serviceProvidersMap.has(providerId)) {
        validationErrors.push(
          `Project ${projectId} references non-existent service provider ${providerId}`,
        )
      }
      if (!categoriesMap.has(categoryId)) {
        validationErrors.push(
          `Project ${projectId} references non-existent category ${categoryId}`,
        )
      }
    }
  }

  // Validate that serviceProviders' categories and projects exist
  for (const [spId, sp] of serviceProvidersMap.entries()) {
    for (const categoryId of sp.categories) {
      if (!categoriesMap.has(categoryId)) {
        validationErrors.push(
          `ServiceProvider ${spId} references non-existent category ${categoryId}`,
        )
      }
    }
    for (const projCategory of sp.projects) {
      const categoryId = projCategory.category
      if (!categoriesMap.has(categoryId)) {
        validationErrors.push(
          `ServiceProvider ${spId} references non-existent category ${categoryId} in projects.`,
        )
      }
      for (const projectId of projCategory.projects) {
        if (!projectsMap.has(projectId)) {
          validationErrors.push(
            `ServiceProvider ${spId} references non-existent project ${projectId} in category ${categoryId}.`,
          )
        }
      }
    }
  }
}
