import { useState } from 'react'
import SkeletonRectangle from '../Skeletons/SkeletonRectangle'

export type CardBeatProps = {
  price: number
  badge: string
  bpm: number
  hasAd: boolean
  beatName: string
  author: string
  image: string
}

const CardBeat = ({ price, badge, bpm, hasAd, beatName, author, image }: CardBeatProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="w-full rounded-lg overflow-hidden p-3 hover:bg-neutral-600 hover:bg-opacity-25 border border-transparent hover:border-neutral-700 cursor-pointer">
      {/* Image */}
      <div className="aspect-square flex items-center justify-center border border-neutral-800 rounded-lg overflow-hidden">
        {loaded ? null : <SkeletonRectangle />}
        <img
          src={image}
          className={`object-cover w-full ${loaded ? 'visible' : 'hidden'}`}
          onLoad={() => setLoaded(true)}
        />
      </div>
      {/* Text content */}
      <div className="py-2">
        {/* 1st row */}
        <div className="flex justify-start items-center gap-1 overflow-hidden font-medium text-sm sm:text-base">
          <div className="text-blue-500 whitespace-nowrap overflow-hidden">€{price}</div>
          {badge && (
            <div className="badge bg-orange-500 text-orange-400 bg-opacity-20 font-light text-[0.6rem] whitespace-nowrap overflow-hidden">
              {badge}
            </div>
          )}
          <div className="text-neutral-400">·</div>
          <div className="text-neutral-400 opacity-90 whitespace-nowrap overflow-hidden">{bpm} BPM</div>
        </div>
        {/* 2nd row */}
        <div className="flex justify-start items-center gap-2 overflow-hidden">
          {hasAd && (
            <div className="badge bg-neutral-700 bg-opacity-50 font-neutral-500 text-[0.55rem] rounded-md border-none px-1.5">
              AD
            </div>
          )}
          <div className="text-neutral-200 font-extrabold text-lg truncate">{beatName}</div>
        </div>
        {/* 3rd row */}
        <div className="text-neutral-400 opacity-90 font-normal truncate">{author}</div>
      </div>
    </div>
  )
}

export default CardBeat
