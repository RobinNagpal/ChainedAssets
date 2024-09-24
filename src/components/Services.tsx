import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Security Verification',
    description:
      'We conduct comprehensive security assessments to identify and mitigate vulnerabilities in integrated AI tools.',
  },
  {
    name: 'Data Leakage Checks',
    description:
      'Proactive identification and prevention of sensitive data exposure.',
  },
  {
    name: 'Access Controls',
    description:
      'We implement strict access control measures to ensure that only authorized users can access specific data and functionalities within your AI integrated applications. ',
  },
  // {
  //   name: 'Data Encryption',
  //   description:
  //     'Safeguarding data at rest and in transit with advanced encryption techniques.',
  // },
  {
    name: 'Hallucinations/Inaccuracies Verification',
    description:
      'We verify the accuracy and reliability of AI outputs, identifying and mitigating instances of hallucinations or incorrect information.',
  },
  {
    name: 'Automated Continuous Testing',
    description:
      'Ongoing monitoring and testing to identify and address emerging threats.',
  },
  {
    name: 'Secure Data Storages',
    description:
      'Ensuring data is stored securely and complies with industry standards.',
  },
  // {
  //   name: 'Hallucinations/Inaccuracies Verification',
  //   description:
  //     'We verify the accuracy and reliability of AI outputs, identifying and mitigating instances of hallucinations or incorrect information.',
  // },
  // {
  //   name: 'Penetration Testing',
  //   description:
  //     'Simulating real-world attacks to uncover vulnerabilities and strengthen defenses.',
  // },
//   {
//     name: 'Data Retention Tests',
//     description:
//       'Verifying adherence to data retention policies and secure disposal of sensitive information.',
//   },
//   {
//     name: 'Web Application Firewalls (WAF)',
//     description:
//       'Our WAF solutions protect your applications from malicious traffic and attacks, ensuring secure and reliable operation.',
//   },
//   {
//     name: 'Vendor Lock-in Verification',
//     description:
//       'Assess potential dependencies on specific AI providers and develop strategies for seamless transitions.',
//   },
//   {
//     name: 'AI Guardrails Implementation',
//     description:
//       'We implement guardrails to enforce safe and ethical usage of AI tools, preventing misuse and ensuring that the AI system operates within predefined and secure parameters.',
//   },
]

export default function Services() {
  return (
    <section className="bg-white py-24 sm:py-32" id="service">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All-in-one platform
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Ensure the highest security standards for your AI-integrated
              enterprise applciations. Protect your data, control access, and
              ensure reliable, accurate outputs from your AI tools with our
              comprehensive security solutions.
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
