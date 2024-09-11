import FrontierResAtom from './FrontierResAtom'
import { FrSourceData } from '../data/Data'

const FrontierResource = () => {
  return (
    <div className='flex flex-wrap justify-center items-start gap-4'>
      {FrSourceData.map((i, index) => (
        <FrontierResAtom key={index} content={i.content} imgUrl={i.imgUrl} />
      ))}
    </div>
  )
}

export default FrontierResource
