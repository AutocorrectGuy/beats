import React from 'react'
import { CardBeatProps } from './CardBeat'

type Props = {}

const CardBeatRectangle = (cardProps: CardBeatProps) => {
  return (
    <div className="relative m-2 rounded-lg overflow-hidden">
      <img src={cardProps.image} className={`object-cover w-full`} />
      <div className="absolute bottom-0 w-full text-white bg-black bg-opacity-40 px-3 py-2 text-sm font-normal">
        <div className="truncate">{cardProps.beatName}</div>
        <div className="truncate">{cardProps.author}</div>
      </div>
    </div>
  )
}

export default CardBeatRectangle
