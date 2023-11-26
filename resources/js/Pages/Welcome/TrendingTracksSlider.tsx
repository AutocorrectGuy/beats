import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import TrackCard, { TrackCardProps } from '@/Components/TrackCard'
import artwork1 from '../../../images/Trending album artwroks/album-cover (1).png'
import artwork2 from '../../../images/Trending album artwroks/album-cover (2).png'
import artwork3 from '../../../images/Trending album artwroks/album-cover (3).png'
import artwork4 from '../../../images/Trending album artwroks/album-cover (4).png'
import artwork5 from '../../../images/Trending album artwroks/album-cover (5).png'
import artwork6 from '../../../images/Trending album artwroks/album-cover (6).png'
import artwork7 from '../../../images/Trending album artwroks/album-cover (7).png'
import artwork8 from '../../../images/Trending album artwroks/album-cover (8).png'
import { useContext } from 'react'
import { WindowUtilsContext } from '@/Contexts/WindowUtilsContext'

const TrendingTracksSlider = () => {
  const { isDesktopWidth } = useContext(WindowUtilsContext)

  const tracksDummyData: TrackCardProps[] = [
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
    }
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktopWidth ? 6 : 2,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className="py-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto text-white">
        <h1 className="font-bold text-3xl pb-4 px-2">Trending tracks</h1>
        <Slider {...settings}>
          {tracksDummyData.map((track, i) => (
            <span key={`trending-track-card-${i}`}>
              <TrackCard {...track} />
            </span>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TrendingTracksSlider
