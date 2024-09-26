import {
  ScaleIcon,
  WrenchIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Informed Decisions',
    description:
      'Use our research to guide your strategic choices and stay updated on trends that can impact your business. Our comprehensive analysis offers actionable insights, ensuring that your business remains agile and well-positioned in the evolving RWA market.',
    icon: InformationCircleIcon,
  },
  {
    name: 'Risk Mitigation',
    description:
      'Understand regulatory risks to navigate the market safely and confidently. We provide in-depth research into legal frameworks, compliance requirements, and emerging regulations, helping you to avoid potential pitfalls and ensure your investments are secure.',
    icon: ScaleIcon,
  },
  {
    name: 'Addressing Gaps',
    description:
      'Identify gaps in the market to tailor your offerings for better alignment with demand. By analyzing unmet needs and emerging trends, we help you refine your product or service to meet customer expectations.',
    icon: WrenchIcon,
  },
]

export default function RwaResearch() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="rwaResearch">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            RWA Research
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We provide detailed research on Real World Assets, covering
            regulations, different types of alternative investments, process of
            securitization, rubrics and use cases. Our insights will help
            companies understand the landscape and make informed decisions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
