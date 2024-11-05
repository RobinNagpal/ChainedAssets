// app/service-providers/page.js
import PageWrapper from '@/components/PageWrapper'
import ServiceProvidersList from '@/components/ServiceProvidersList'

export default function ServiceProvidersPage() {
  return (
    <PageWrapper>
      <ServiceProvidersList></ServiceProvidersList>
    </PageWrapper>
  )
}
