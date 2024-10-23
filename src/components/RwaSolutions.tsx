import { CheckCircleIcon } from '@heroicons/react/20/solid'

const benefits = [
  'RWA Research',
  'RWA Landscape',
  'Consultations',
  'Business Development',
]

export default function RwaSolutions() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="rwaSolutions">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              alt="Illustration of real-world assets being digitized on mobile devices."
              src="https://miro.medium.com/v2/resize:fit:1400/1*P2MS4jsoyYoHWY9chiFMWg.jpeg"
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                RWA Solutions Tailored for You
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                At DoDAO, we offer a range of services to help RWA companies
                easily bring their assets onto the blockchain. Whether it’s
                research, consulting, or business development, we provide the
                guidance and support needed to make the process simple and
                successful.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3 whitespace-nowrap">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  )
}
