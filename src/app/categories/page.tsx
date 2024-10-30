// app/categories/page.js
import TempNav from '@/components/TempNav'
import Link from 'next/link'
import { categories } from '../data/categories'
import CategoriesList from '@/components/CategoriesList'
import PageWrapper from '@/components/PageWrapper'

export default function CategoriesPage() {
  return (
    <div className="p-4">
      <TempNav />
      <PageWrapper>
        <h1 className="mb-4 text-2xl font-bold">Categories</h1>
        <CategoriesList></CategoriesList>
      </PageWrapper>
    </div>
  )
}
