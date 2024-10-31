/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

'use client'

import { useNotificationContext } from '@/ui/contexts/NotificationContext'
import { useState } from 'react'

export default function ContactPage() {
  const { showNotification } = useNotificationContext()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(form)
    e.preventDefault()
    showNotification({
      type: 'error',
      message: 'Error sending email',
    })
    // try {
    //   const response = await fetch('/api/send-email', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(form),
    //   })

    //   if (!response.ok) {
    //     throw new Error('Failed to send email')
    //   }

    //   showNotification({
    //     type: 'success',
    //     message: 'Email sent successfully',
    //   })

    //   setForm({
    //     name: '',
    //     email: '',
    //     message: '',
    //   })
    // } catch (error) {
    //   showNotification({
    //     type: 'error',
    //     message: 'Error sending email',
    //   })
    //   console.error('Error sending email:', error)
    // }
  }

  return (
    <section
      className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
      id="contact"
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-64}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Let’s talk about your RWA Strategy
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Ready to leverage the power of blockchain for real-world assets?
          Contact us today to explore how DoDAO can help you navigate regulatory
          complexities, develop innovative products, and drive sustainable
          growth.
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form
            action="#"
            method="POST"
            className="lg:flex-auto"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let’s talk
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              By submitting this form, I agree to the{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
          <div className="lg:mt-0 lg:w-80 lg:flex-none">
            <img
              alt="DoDAO Logo"
              src="/dodao_logo.png"
              className="h-12 w-auto"
            />
            <figure className="mt-8">
              <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                <p>
                  “DoDAO is your trusted partner in unlocking the potential of
                  real-world assets on blockchain. Our expertise in legal,
                  compliance, and business development empowers you to navigate
                  the complexities of the RWA ecosystem and achieve sustainable
                  success.”
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
