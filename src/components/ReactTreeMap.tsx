import React, { useState } from 'react'
import Image from 'next/image'
import TreeMapModal from './TreeMapModal'
import TreeMapNavbar from './TreeMapNavbar'

type ItemType = {
  name: string
  icon: string
  details: string
  link: string
}

type CategoryType = {
  name: string
  children: ItemType[]
}

type EcosystemMapProps = {
  data: CategoryType[]
}

const EcosystemMap: React.FC<EcosystemMapProps> = ({ data }) => {
  const [modalData, setModalData] = useState<{
    name: string
    details: string
    link: string
    icon: string
  } | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <div className="mx-auto min-w-[768px] max-w-[1440px] p-4 pt-0">
        <TreeMapNavbar />
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {data.map((category: CategoryType, index: number) => (
            <div
              key={index}
              className="rounded-lg border border-gray-700 bg-gray-800 p-4"
            >
              <h2 className="mb-4 text-center text-xl font-bold text-white">
                {category.name}
              </h2>
              <div className="grid grid-cols-4 gap-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5">
                {category.children.map((item: ItemType, itemIndex: number) => (
                  <div
                    key={itemIndex}
                    onClick={() => {
                      setModalData({
                        name: item.name,
                        details: item.details || '',
                        link: item.link || '',
                        icon: item.icon || '',
                      })
                      setModalOpen(true)
                    }}
                    className="duration-250 block h-[125px] w-[125px] transform rounded-lg border border-gray-600 bg-gray-700 p-4 transition-all ease-in-out hover:scale-105 hover:bg-gray-600 hover:shadow-lg"
                  >
                    <div className="flex h-full flex-col items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="mb-2"
                      />
                      <h3 className="text-center text-sm font-semibold text-gray-200">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && modalData && (
        <TreeMapModal
          name={modalData.name}
          details={modalData.details}
          link={modalData.link}
          icon={modalData.icon}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}

export default EcosystemMap
