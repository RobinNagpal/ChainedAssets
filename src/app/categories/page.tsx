// app/categories/page.js
import TempNav from '@/components/TempNav'
import Link from 'next/link'
import { categories } from '../data/categories'

export default function CategoriesPage() {
  return (
    <div className="p-4">
      <TempNav />
      <h1 className="mb-4 text-2xl font-bold">Categories</h1>
      <ul className="list-disc pl-5">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/categories/${category.id}`}
              className="text-blue-500 hover:underline"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
