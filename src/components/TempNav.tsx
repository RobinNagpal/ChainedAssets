import Link from 'next/link'

export default function TempNav() {
  return (
    <div className="p-4">
      <h1 className="mb-6 text-3xl font-bold">
        Welcome to Our Service Directory
      </h1>
      <div className="space-y-4">
        <div>
          <Link
            href="/categories"
            className="text-2xl text-blue-500 hover:underline"
          >
            Categories
          </Link>
        </div>
        <div>
          <Link
            href="/projects"
            className="text-2xl text-blue-500 hover:underline"
          >
            Projects
          </Link>
        </div>
        <div>
          <Link
            href="/service-providers"
            className="text-2xl text-blue-500 hover:underline"
          >
            Service Providers
          </Link>
        </div>
      </div>
    </div>
  )
}
