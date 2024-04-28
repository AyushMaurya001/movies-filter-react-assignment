import React from 'react'
import { NotFound } from '../components'

export default function ErrorElement() {
  return (
    <div className=' min-h-screen w-full flex justify-center items-center p-6'>

      <NotFound content={`404 Not Found`} className={` w-96`} />

    </div>
  )
}
