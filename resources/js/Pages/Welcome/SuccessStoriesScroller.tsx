import Scroller from '@/Components/Scroller'
import React, { useContext, useEffect, useState } from 'react'
import artwork1 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (1).png'
import artwork2 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (2).png'
import artwork3 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (3).png'
import artwork4 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (4).png'
import artwork5 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (5).png'
import artwork6 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (6).png'
import artwork7 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (7).png'
import artwork8 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (8).png'
import artwork9 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (9).png'
import artwork10 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (10).png'
import artwork11 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (11).png'
import artwork12 from '../../../images/Pages/Welcome/Trending album artwroks/album-cover (12).png'
import { CardBeatProps } from '@/Components/Cards/CardBeat'
import CardBeatRectangle from '@/Components/Cards/CardBeatRectangle'

const tracksDummyData: CardBeatProps[] = [
  {
    price: 70,
    badge: 'NEW',
    bpm: 130,
    hasAd: true,
    beatName: 'Summer Groove',
    author: 'Beach Vibes',
    image: artwork1,
  },
    {
      price: 75,
      badge: 'FEATURED',
      bpm: 100,
      hasAd: false,
      beatName: 'Neon City',
      author: 'Urban Dreams',
      image: artwork2,
    },
    {
      price: 60,
      badge: 'CLASSIC',
      bpm: 128,
      hasAd: true,
      beatName: 'Sunset Melody',
      author: 'Calm Waves',
      image: artwork3,
    },
  {
    price: 85,
    badge: 'HYPE',
    bpm: 140,
    hasAd: true,
    beatName: 'Vibrant Echoes',
    author: 'Artistic Soul',
    image: artwork4,
  },
  {
    price: 55,
    badge: 'TRENDING',
    bpm: 125,
    hasAd: false,
    beatName: 'Night Show',
    author: 'The Soloist',
    image: artwork5,
  },
  {
    price: 50,
    badge: 'HOT',
    bpm: 120,
    hasAd: false,
    beatName: 'Apocalyptic Strings',
    author: 'DJ Strato',
    image: artwork6,
  },
  {
    price: 65,
    badge: 'FIRE',
    bpm: 110,
    hasAd: false,
    beatName: 'Battle Cry',
    author: 'Epic Sound',
    image: artwork7,
  },
  {
    price: 80,
    badge: 'EXCLUSIVE',
    bpm: 95,
    hasAd: true,
    beatName: 'Rap Anthem',
    author: 'MC Rhymes',
    image: artwork8,
  },
  {
    price: 99,
    badge: 'ELECTRO',
    bpm: 128,
    hasAd: true,
    beatName: 'Retro Wave',
    author: 'DJ Pixel',
    image: artwork9,
  },
  {
    price: 150,
    badge: 'RAP',
    bpm: 90,
    hasAd: false,
    beatName: 'Street Verse',
    author: 'MC Lyricist',
    image: artwork10,
  },
  {
    price: 120,
    badge: 'CHILL',
    bpm: 100,
    hasAd: false,
    beatName: 'Urban Sunset',
    author: 'Soul Beats',
    image: artwork11,
  },
  {
    price: 200,
    badge: 'HYPE',
    bpm: 140,
    hasAd: true,
    beatName: 'Hyper Flow',
    author: 'Rap Machine',
    image: artwork12,
  },
]
const SuccessStoriesScroller = () => {
  const [slicedTracks, setSlicedTracks] = useState<CardBeatProps[][]>([])
  useEffect(() => {
    setSlicedTracks(() => {
      const arraysCount = 3
      let chunks: CardBeatProps[][] = []
      const totalElements = tracksDummyData.length
      const baseChunkSize = Math.ceil(totalElements / arraysCount)
      let index = 0

      for (let i = 0; i < arraysCount; i++) {
        const chunk: CardBeatProps[] = []
        if (i < arraysCount - 1) {
          // For all but the last chunk
          for (let j = 0; j < baseChunkSize && index < totalElements; j++) {
            chunk.push(tracksDummyData[index])
            index++
          }
        } else {
          // For the last chunk
          for (let j = 0; j < baseChunkSize; j++) {
            chunk.push(tracksDummyData[tracksDummyData.length - 1 - j])
            index++
          }
        }
        chunks.push(chunk)
      }
      return chunks
    })
  }, [])

  return (
    <div className="w-full bg-black">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:grid lg:grid-cols-2 mx-auto">
        {/* Content on Left */}
        <div className="flex flex-col justify-center gap-8 px-2 py-8 lg:py-0">
          <div className="text-lg text-neutral-400">#MadeInLatvia</div>
          <h1 className="text-5xl text-white uppercase font-bold">Introducing you to the Baltic beats</h1>
          <div className="text-lg text-white font-normal">
            Find the beat that suits you the most so You can deliver the the best.
          </div>
          <button className="btn btn-md bg-neutral-800 border border-neutral-700 text-white w-fit text-lg rounded-md">
            Your next song is waiting
          </button>
        </div>

        {/* Content on Right */}
        <div className="bg-black relative grid grid-cols-3">
          {slicedTracks &&
            slicedTracks.map((trackSubArray, i) => (
              <Scroller
                key={`scroller-${i}`}
                name={`test-scroller-${i}`}
                direction={i % 2 ? 'down' : 'up'}
                animationType="ease-in-out"
                scrollPattern="forward-and-back"
                elementClassName="px-2"
                scrollSpeed={30}
                height={512}
                gap={0}
                elements={trackSubArray.map((track, i) => (
                  <CardBeatRectangle {...(track as CardBeatProps)} key={`trending-track-card-${i}`} />
                ))}
              />
            ))}
          <div
            className="absolute top-0 right-0 bottom-0 left-0"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, transparent 37.5%, transparent 62.5%, rgba(0,0,0,1) 100%)`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default SuccessStoriesScroller
