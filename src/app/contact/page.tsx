import React from 'react'
import { Meteors } from '../components/ui/meteors'

export default function page() {
  return (
    <div className='min-h-screen bg-black py-12 pt-36 flex justify-center'>
      <Meteors number={30} className='w-90' />
    </div>
  )
}
