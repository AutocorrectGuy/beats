import { useState } from 'react'
import { CardBeatProps } from './CardBeat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import SkeletonRectangle from '../Skeletons/SkeletonRectangle'

const CardBeatRectangle = (cardProps: CardBeatProps) => {
  const [loaded, setLoaded] = useState(false)
  
  return (
    <div className="relative m-2 rounded-lg overflow-hidden">
      {loaded ? null : <SkeletonRectangle />}
      <img
        src={cardProps.image}
        className={`object-cover w-full transition duration-300 ${loaded ? 'visible' : 'hidden'}`}
        onLoad={() => setLoaded(true)}
      />

      <div className="absolute bottom-0 w-full text-white bg-black bg-opacity-40 px-3 py-2 text-sm font-normal">
        <div className="truncate">{cardProps.beatName}</div>
        <div className="truncate">{cardProps.author}</div>
      </div>
    </div>
  )
}

export default CardBeatRectangle
