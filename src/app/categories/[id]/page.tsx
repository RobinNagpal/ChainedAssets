// app/categories/[id]/page.js
import TempNav from '@/components/TempNav'
import Link from 'next/link'
import { categories } from '../../data/categories'
import { serviceProviders } from '../../data/serviceProviders'
import { projects } from '../../data/projects'
import PageWrapper from '@/components/PageWrapper'
import CategoriesDetails from '@/components/CategoriesDetails'

export default function CategoryPage({ params }: { params: { id: string } }) {
  const { id } = params
  const category = categories.find((cat) => cat.id === id)

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className="p-4">
      <TempNav />
      <PageWrapper>
        <h1 className="mb-4 text-2xl font-bold">{category.name}</h1>
        <CategoriesDetails
          categoryId={category.id}
          categoryName={category.name}
        ></CategoriesDetails>
      </PageWrapper>
    </div>
  )
}
