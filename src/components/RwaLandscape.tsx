import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Organized Overview',
    description:
      'Easily navigate the RWA ecosystem with categorized companies.',
  },
  {
    name: 'Understanding Offerings',
    description:
      'Gain insights into what key players provide and their market roles.',
  },
  {
    name: 'Growth Opportunities',
    description: 'Identify potential areas for expansion and collaboration.',
  },
  {
    name: 'Market Insights',
    description:
      'Recognize trends and shifts within the landscape for strategic planning.',
  },
]

export default function RwaLandscape() {
  return (
    <section className="bg-white py-24 sm:py-32" id="rwaLandscape">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Everything you need
            </h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              RWA Landscape
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We provide a comprehensive overview of RWA companies, categorized
              to help you navigate the ecosystem easily. Our insights help you
              identify key players and understand the different segments within
              the market. Discover potential partnerships and opportunities for
              growth.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    aria-hidden="true"
                    className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
