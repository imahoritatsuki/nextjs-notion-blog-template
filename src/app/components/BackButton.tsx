'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {

  const router = useRouter()

  const handleClick = () => {
    router.push("/")
  }

  return (
    <div>
      <button className='bg-gray-700 rounded-lg px-2 py-2 text-white text-xs' onClick={handleClick}>もどる</button>
    </div>
  )
}

export default BackButton