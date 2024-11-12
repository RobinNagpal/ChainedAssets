// app/categories/page.js
import CategoriesList from '@/components/CategoriesList'
import PageWrapper from '@/components/PageWrapper'

export default function CategoriesPage() {
  return (
    <div className="p-4">
      <PageWrapper>
        <CategoriesList></CategoriesList>
      </PageWrapper>
    </div>
  )
}
