import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkeletonRectangle = () => {
  return (
    <div className="aspect-square w-full bg-neutral-800 flex items-center justify-center">
      <FontAwesomeIcon icon={faMusic} className="w-2/3 h-2/3 text-neutral-700" />
    </div>
  )
}

export default SkeletonRectangle
