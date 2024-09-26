import {
  RocketLaunchIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Faster Launch.',
    description: 'Speed up your project development with our tailored support.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Jurisdiction Flexibility.',
    description:
      'Understand which jurisdictions offer the most flexibility for your needs.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Expert Guidance.',
    description: 'Access specialized knowledge to streamline your processes.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Navigating Exemptions.',
    description:
      'Learn about available exemptions that can benefit your projects.',
    icon: DocumentMagnifyingGlassIcon,
  },
]

export default function Consultations() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="consultations">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Consultations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our consulting services guide RWA companies through legal setup and
            compliance. We simplify complex regulations, helping you navigate
            the best options for your projects. With our knowledge of available
            exemptions and flexible jurisdictions, we make the process easier
            for you.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
