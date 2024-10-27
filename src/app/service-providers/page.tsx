// app/service-providers/page.js
import TempNav from '@/components/TempNav'
import Link from 'next/link'
import { serviceProviders } from './../data/serviceProviders'

export default function ServiceProvidersPage() {
  return (
    <div className="p-4">
      <TempNav />
      <h1 className="mb-4 text-2xl font-bold">Service Providers</h1>
      <ul className="list-disc pl-5">
        {serviceProviders.map((sp) => (
          <li key={sp.id}>
            <Link
              href={`/service-providers/${sp.id}`}
              className="text-blue-500 hover:underline"
            >
              {sp.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
