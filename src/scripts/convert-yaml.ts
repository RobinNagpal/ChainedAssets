import { load } from 'js-yaml'
import fs from 'fs'

// read file ./data/categories.yaml

const convertYaml = (dataFile: string) => {
  const yaml = fs.readFileSync(
    __dirname + '/../app/data/yaml/' + dataFile + '.yaml',
    'utf8',
  )
  const categories = load(yaml)
  fs.writeFileSync(
    __dirname + '/../app/data/generated-json/' + dataFile + '.json',
    JSON.stringify(categories, null, 2),
    {
      encoding: 'utf8',
    },
  )
}

convertYaml('categories')
convertYaml('projects')
convertYaml('serviceProviders')
