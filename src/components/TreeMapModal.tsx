'use client'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

interface TreeMapModalProps {
  name: string
  id?: string
  details: string
  link: string
  icon: string
  onClose: () => void
  type: string
}

export default function TreeMapModal({
  name,
  id,
  details,
  link,
  icon,
  onClose,
  type,
}: TreeMapModalProps) {
  return (
    <Dialog open={true} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div>
              <div className="h-15 w-15 mx-auto flex items-center justify-center">
                {id ? (
                  <Link href={`/${type}/${id}`}>
                    <Image
                      src={icon}
                      alt={name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </Link>
                ) : (
                  <Image
                    src={icon}
                    alt={name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                )}
              </div>
              <div className="mt-3 text-center sm:mt-5">
                {id ? (
                  <Link href={`/${type}/${id}`}>
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-white"
                    >
                      {name}
                    </DialogTitle>
                  </Link>
                ) : (
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-white"
                  >
                    {name}
                  </DialogTitle>
                )}
                <div className="mt-2">
                  <p className="text-sm text-gray-300">{details}</p>
                  <Link
                    href={`/${type}/${id}`}
                    className="py-4 text-indigo-400 underline"
                  >
                    View Details
                  </Link>
                  <p className="mt-2 text-sm text-gray-300">
                    <strong>Website:</strong>{' '}
                    <Link
                      datatype="external"
                      target="_blank"
                      href={link}
                      className="text-indigo-400 hover:text-indigo-300 hover:underline"
                    >
                      {link}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
