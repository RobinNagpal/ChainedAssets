// app/service-providers/page.js
import PageWrapper from '@/components/PageWrapper'
import ServiceProvidersList from '@/components/ServiceProvidersList'
import TempNav from '@/components/TempNav'

export default function ServiceProvidersPage() {
  return (
    <div className="p-4">
      <TempNav />
      <PageWrapper>
      <h1 className="mb-4 text-2xl font-bold">Service Providers</h1>
        <ServiceProvidersList></ServiceProvidersList>
        </PageWrapper>
    </div>
  )
}
