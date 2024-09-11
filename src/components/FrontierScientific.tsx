import React from 'react'
import FrontierScAtom from './FrontierScAtom'
import { FrScData } from '../data/Data'

const FrontierScientific = () => {
  return (
    <div className='flex flex-wrap justify-center items-start gap-4'>
      {FrScData.map((i, index) => (
        <FrontierScAtom key={index} content={i.content} title={i.title} imgUrl={i.imgUrl} />
      ))}
    </div>
  )
}

export default FrontierScientific
