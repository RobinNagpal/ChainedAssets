import {
  ScaleIcon,
  LightBulbIcon,
  LockClosedIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Complex Legal and Regulatory Issues',
    description:
      'We simplify the challenging legal frameworks and compliance requirements for RWA companies, making it easier for new builders to navigate.',
    icon: ScaleIcon,
  },
  {
    name: 'Lack of Useful Products',
    description:
      'We focus on the need for RWA companies to create practical products while addressing the gaps like global distribution, ensuring that useful assets reach a wider audience.',
    icon: LightBulbIcon,
  },
  {
    name: 'Limited Adoption of Blockchain',
    description:
      'We address why blockchain hasn’t been widely adopted in finance and work to make it accessible to everyone.',
    icon: LockClosedIcon,
  },
  {
    name: 'Fragmented Market',
    description:
      'We help connect RWA companies with the right partners and assets to build a more unified and effective ecosystem.',
    icon: LinkIcon,
  },
]

export default function Challenges() {
  return (
    <section className="bg-white py-24 sm:py-32" id="challenge">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Unlocking Potential in Real World Assets
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Challenges Are We Addressing?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {
              "Blockchain holds immense promise for real-world assets (RWAs), but significant hurdles remain. We're here to bridge the gap."
            }
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
