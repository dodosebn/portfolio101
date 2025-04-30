import { MainInfoHolder, Navigations, StackHolderProfile } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className="py-1 p-4 lg:px-16">
    <div className="lg:flex">
    <StackHolderProfile />
    <div className="flex-1 lg:relative bottom-[4.2rem] left-[2rem]">
    <MainInfoHolder />
    </div>
    </div>
  </div>
  )
}

export default page
