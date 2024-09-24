import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, ExclamationTriangleIcon} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Data Security and Privacy',
    description:
      'Sensitive customer data could be exposed or misused, harming trust and reputation.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Prompt Injection Attacks',
    description:
      'Malicious inputs can manipulate AI tool’s prompts, leading to unintended actions or data leaks.',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Output Manipulation and Hallucinations',
    description:
      'Inaccurate or misleading AI responses can damage credibility and lead to incorrect decisions.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Unauthorized Access',
    description:
      'Unrestricted access to the AI tool or its underlying data can lead to data breaches and system compromise.',
    icon: FingerPrintIcon,
  },
//   {
//     name: 'Adversarial Attacks',
//     description:
//       'Malicious actors can manipulate inputs to deceive the AI tool, leading to incorrect or harmful outputs, compromising the system reliability and security.',
//     icon: ArrowPathIcon,
//   },
//   {
//     name: 'API Security',
//     description:
//       'Weaknesses in the communication channels between systems can expose sensitive information.',
//     icon: FingerPrintIcon,
//   },
]

export default function Challenges() {
  return (
    <section className="bg-white py-24 sm:py-32" id="challenge">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Security Challenges in AI Integration
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Soon, everyone will be using LLMs. But not everyone is ready. Step forward and lead the way.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
