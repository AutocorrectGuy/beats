import { WindowUtilsContext } from '@/Contexts/WindowUtilsContext'
import { useState, useEffect, useRef, useContext } from 'react'

type ScrollerProps = {
  images?: string[]
  elements?: JSX.Element[]
  name: string
  height?: number
  scrollSpeed?: number
  elementClassName?: string
  containerClassName?: string
  vertical?: boolean
  direction?: 'left' | 'right' | 'up' | 'down'
  animationType?: 'linear' | 'ease-in-out'
  scrollPattern?: 'forward' | 'forward-and-back'
  gap?: number
}
type TrackType = { i: number; isInitial: boolean; isHorizontal: boolean }

const Scroller = ({
  images,
  elements,
  name,
  height = 100,
  scrollSpeed = 100,
  elementClassName = '',
  containerClassName = '',
  direction = 'left',
  animationType = 'linear',
  scrollPattern = 'forward',
  gap = 20,
}: ScrollerProps) => {
  const { windowDimensions } = useContext(WindowUtilsContext)
  const [track, setTrack] = useState({ size: 0, animationDuration: 0, trackCount: 0 })
  const [isInitialTrackMeasured, setIsInitialTrackMeasured] = useState(false)
  const isHorizontal = direction === 'left' || direction === 'right'
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (trackRef.current && containerRef.current) {
      const totalSize = Array.from(trackRef.current.children).reduce((total, child, index, array) => {
        return (
          total +
          (isHorizontal ? child.getBoundingClientRect().width : child.getBoundingClientRect().height) +
          (index !== array.length - 1 ? 0 : gap)
        ) // 80px is the margin-right
      }, 0)

      setTrack({
        size: totalSize,
        animationDuration: totalSize / scrollSpeed,
        trackCount: Math.ceil(containerRef.current.clientWidth / totalSize) + 1,
      })
      setIsInitialTrackMeasured(true)
    }
  }, [images, windowDimensions])

  const Track = ({ i, isInitial, isHorizontal }: TrackType) => {
    // Common style that applies to both horizontal and vertical tracks
    const commonStyle = {
      animation: `scroll-${direction}-${scrollPattern} ${track.animationDuration}s ${animationType} infinite`,
    }

    // Style adjustments for horizontal or vertical orientation
    const specificStyle = isHorizontal
      ? {
          width: `${track.size}px`,
          left: (direction === 'left' ? 1 : -1) * track.size * i,
          top: 0,
        }
      : {
          left: 0,
          width: `100%`,
          height: `${track.size}px`,
          // Adds another track below, so `+ track.size` in the end of the statement
          top: (direction === 'down' ? -1 : 1) * track.size * i,
        }

    return (
      <div
        ref={isInitial ? trackRef : null}
        className={`absolute flex ${isHorizontal ? 'flex-row' : 'flex-col'}`}
        style={{ ...commonStyle, ...specificStyle }}
      >
        {images &&
          images.map((image, index) => (
            <div
              key={`scroller_${name}_${index}`}
              style={{
                padding: `0px ${isHorizontal ? (index !== images.length - 1 ? `${gap}px` : '') : '0px'} ${
                  index !== images.length - 1 ? `${gap}px` : ''
                } 0px`,
              }}
              className={`flex-none `}
            >
              <img
                src={image}
                style={isHorizontal ? { height: `${height}px` } : {}}
                alt={`Image ${index}`}
                className={`object-cover ${isHorizontal ? 'w-auto h-full' : 'w-full'} ${elementClassName}`}
              />
            </div>
          ))}
        {elements &&
          elements.map((el, index) => (
            <div
              key={`scroller_${name}_${index}`}
              className={`${isHorizontal ? 'w-auto h-full' : 'w-full'} ${elementClassName}`}
              style={{
                padding: `0px ${isHorizontal ? (index !== elements.length - 1 ? `${gap}px` : '') : '0px'} ${
                  index !== elements.length - 1 ? `${gap}px` : ''
                } 0px`,
              }}
            >
              {el}
            </div>
          ))}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full ${containerClassName}`}
      style={{ height: `${height}px` }}
    >
      {/* Initially render only one track to measure its width */}
      <Track i={0} isInitial={true} isHorizontal={isHorizontal} />

      {/* Render additional tracks with correct index */}
      {isInitialTrackMeasured &&
        // Adds an extra track on vertical scroller, because it moves up AND down - (isHorizontal ? -1 : 0)
        Array.from({ length: track.trackCount + (isHorizontal ? -1 : -1) }).map((_, i) => (
          <Track i={i + 1} isInitial={false} isHorizontal={isHorizontal} key={`scroller-${name}-track-${i}`} />
        ))}
    </div>
  )
}

export default Scroller
