// app/service-providers/[id]/page.js
import TempNav from '@/components/TempNav'
import ServiceProviderDetails from '@/components/ServiceProviderDetails'
import Link from 'next/link'
import { serviceProviders } from '../../data/serviceProviders'
import { categories } from '../../data/categories'
import { projects } from '../../data/projects'

export default function ServiceProviderPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params
  const provider = serviceProviders.find((sp) => sp.id === id)

  if (!provider) {
    return <div>Service Provider not found</div>
  }

  return (
    <div className="p-4">
      <TempNav />
      <ServiceProviderDetails
        serviceProviderId={provider.id}
        serviceProviderName={provider.name}
      ></ServiceProviderDetails>
    </div>
  )
}
