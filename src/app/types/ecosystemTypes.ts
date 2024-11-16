export type TreeNode = {
  type: string
  value: number
  name: string
  icon?: string
  details?: string
  link?: string
  children: Tree[]
}

export type TreeLeaf = {
  type: 'leaf'
  id?: string
  name: string
  value: number
  icon: string
  details: string
  link: string
}

export type Tree = TreeNode | TreeLeaf
