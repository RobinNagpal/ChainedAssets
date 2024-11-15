'use client'

import { Tree, TreeLeaf, TreeNode } from '@/app/types/ecosystemTypes'
import React, { useState } from 'react'
import Image from 'next/image'
import TreeMapModal from './TreeMapModal'

interface EcosystemMapProps {
  data: Tree[]
}

const EcosystemMap: React.FC<EcosystemMapProps> = ({ data }) => {
  const [modalData, setModalData] = useState<{
    name: string
    id: string
    details: string
    link: string
    icon: string
  } | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const isTreeNode = (item: Tree): item is TreeNode => item.type === 'node'
  const isTreeLeaf = (item: Tree): item is TreeLeaf => item.type === 'leaf'

  return (
    <>
      <div className="mx-auto min-w-[768px] max-w-[1440px] p-4 pt-0">
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {data.map((category, index) => {
            if (isTreeNode(category)) {
              return (
                <div
                  key={index}
                  className="rounded-lg border border-gray-700 bg-gray-800 p-4"
                >
                  <h2 className="mb-4 text-center text-xl font-bold text-white">
                    {category.name}
                  </h2>
                  <div className="grid grid-cols-4 gap-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5">
                    {category.children.map((item, itemIndex) => {
                      if (isTreeLeaf(item)) {
                        return (
                          <div
                            key={itemIndex}
                            onClick={() => {
                              setModalData({
                                name: item.name,
                                id: item.id || '',
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
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
      {modalOpen && modalData && (
        <TreeMapModal
          name={modalData.name}
          id={modalData.id}
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
