// import { Timeline } from '@/components/timeline'
import { Timeline } from '@/components/timeline'
import { experienceData } from '@/data/experience'
import React from 'react'

const page = () => {
  return (
    <div className="w-full xl:w-[70%] mx-auto">
      <Timeline
        title="Experience" 
        items={experienceData}
        className="max-w-6xl mx-auto"
      />
    </div>
  )
}

export default page