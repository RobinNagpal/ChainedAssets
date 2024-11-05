// app/service-providers/[id]/page.js
import TempNav from '@/components/TempNav'
import ServiceProviderDetails from '@/components/ServiceProviderDetails'
import serviceProvidersData from '../../data/generated-json/serviceProviders.json'
import PageWrapper from '@/components/PageWrapper'
import { ServiceProvider } from '@/app/types/serviceProviders'

export default function ServiceProviderPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const provider: ServiceProvider | undefined =
    serviceProvidersData.serviceProviders.find((sp) => sp.id === id)

  if (!provider) {
    return <div>Service Provider not found</div>
  }

  return (
    <PageWrapper>
      <ServiceProviderDetails
        serviceProviderId={provider.id}
        serviceProviderName={provider.name}
      ></ServiceProviderDetails>
    </PageWrapper>
  )
}
