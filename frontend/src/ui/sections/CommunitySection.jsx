import React from 'react'
import Ficon from '../../assets/icons/Ficon'
import XIcon from '../../assets/icons/Xicon'
import InIcon from '../../assets/icons/InIcon'
import IIcon from '../../assets/icons/IIcon'
import Wicon from '../../assets/icons/Wicon'

const CommunitySection = () => {
  return (
   <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE] py-[67px] ">
   <div className='px-5 md:px-0 lg:max-w-[1200px] mx-auto md:flex md:justify-between md:items-center lg:justify-between gap-[130px]'>
    <div className=''>
        <h2 className=' text-rasin-black font-boldsize text-medium lg:text-medium-large font-[600]'>Community</h2>
        <p className='text-small text-text-gray'>Join the Storyious community on social media! Connect with fellow readers and writers, share your favorite stories, and stay updated on the latest tales, writing tips, and storytelling events.</p>
    </div>
    <div className='flex gap-2 '>
        <Ficon />
        <XIcon />
        <InIcon />
        <IIcon />
        <Wicon />
        
    </div>
   </div>
    </div>
  )
}

export default CommunitySection