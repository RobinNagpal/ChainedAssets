'use client'

import { useEffect, useMemo, useState } from 'react'
import { Tree } from '../app/data'
import * as d3 from 'd3'

type TreemapProps = {
  width: number
  height: number
  data: Tree
}

const colors = [
  '#e0ac2b',
  '#6689c6',
  '#a4c969',
  '#e85252',
  '#9a6fb0',
  '#a53253',
  '#7f7f7f',
]

export const Treemap = ({ width, height, data }: TreemapProps) => {
  const iconWidth = 30
  const iconHeight = 30
  const [tooltip, setTooltip] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number
    y: number
  } | null>(null)

  const handleMouseOver = (
    event: React.MouseEvent<SVGRectElement>,
    name: string,
  ) => {
    setTooltip(name)
    setTooltipPosition({ x: event.clientX, y: event.clientY })
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (tooltipPosition) {
      setTooltipPosition({ x: event.clientX, y: event.clientY })
    }
  }

  const handleMouseOut = () => {
    setTooltip(null)
    setTooltipPosition(null)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [tooltip])

  const hierarchy = useMemo(() => {
    return d3.hierarchy(data).sum((d) => d.value)
  }, [data])

  const firstLevelGroups = hierarchy?.children?.map((child) => child.data.name)
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(firstLevelGroups || [])
    .range(colors)

  const root = useMemo(() => {
    const treeGenerator = d3
      .treemap<Tree>()
      .size([width, height])
      .paddingOuter(8)
      .paddingInner(4)
    return treeGenerator(hierarchy)
  }, [hierarchy, width, height])

  const allShapes = root.children?.map((parent, i) => {
    const parentName = parent.data.name
    const parentX0 = parent.x0
    const parentY0 = parent.y0
    const parentWidth = parent.x1 - parent.x0
    const parentHeight = parent.y1 - parent.y0

    const leaves = parent.leaves().map((leaf) => {
      const rectWidth = leaf.x1 - leaf.x0
      const rectHeight = leaf.y1 - leaf.y0

      return (
        <g key={leaf.id}>
          <rect
            x={leaf.x0}
            y={leaf.y0}
            width={rectWidth}
            height={rectHeight}
            stroke="transparent"
            fill={colorScale(parentName || 'default')}
            // className={'opacity-80 hover:opacity-100'}
            onMouseOver={(event) =>
              handleMouseOver(event, `${parentName} -> ${leaf.data.name}`)
            }
            onMouseOut={handleMouseOut}
          />
          <foreignObject
            x={leaf.x0 + 3}
            y={leaf.y0 + 3}
            width={rectWidth - 6}
            height={rectHeight / 3}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                wordWrap: 'break-word',
                lineHeight: '1.2em',
                overflow: 'hidden',
              }}
            >
              {leaf.data.name}
            </div>
          </foreignObject>
          <image
            href={leaf.data.icon}
            x={leaf.x0 + rectWidth / 2 - iconWidth / 2}
            y={leaf.y0 + rectHeight / 2 - iconHeight / 2}
            width={iconWidth}
            height={iconHeight}
          />
        </g>
      )
    })

    return (
      <g key={parent.data.name}>
        <text
          x={parentX0 + parentWidth / 2}
          y={parentY0}
          fontSize={15}
          fontWeight={600}
          textAnchor="middle"
          alignmentBaseline="middle"
          fill={colorScale(parentName)}
        >
          {parentName}
        </text>

        {leaves}
      </g>
    )
  })

  return (
    <div style={{ marginTop: '10px' }}>
      <svg width={width} height={height}>
        {allShapes}
      </svg>
      {tooltip && tooltipPosition && (
        <div
          style={{
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #ccc',
            padding: '2px 4px',
            borderRadius: '3px',
            pointerEvents: 'none',
            left: tooltipPosition.x + 5,
            top: tooltipPosition.y - 20,
            fontSize: '10px',
            transition: 'opacity 0.2s ease-in-out',
            opacity: 0.8,
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          {tooltip}
        </div>
      )}
    </div>
  )
}
