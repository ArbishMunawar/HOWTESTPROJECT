import React from 'react'
import Thumbdown from '../../../assets/icons/Thumbdown'
import Thumbup from '../../../assets/icons/Thumbup'
import Ficon from '../../../assets/icons/Ficon'
import Xicon from '../../../assets/icons/Xicon'
import InIcon from '../../../assets/icons/InIcon'
import IIcon from '../../../assets/icons/IIcon'
import Wicon from '../../../assets/icons/Wicon'

const ReviewArticle = () => {
  return (
   <>
   <div className='  border-t border-[#DCDBDB] my-[40px] hidden md-block'></div>
   <div className='text-center my-[40px]'>


    <h2 className='text-[#4F4F4F] text-[18px] font-[400] pt-5'>Was Article helpful?</h2>
    <h2 className='text-[#64748B] text-[15px] font-[400]'>(12,300 found it helpful)
        <div className='flex justify-center gap-5 py-3'>
        <Thumbdown/>
        <Thumbup/>
        </div>
        <div className='bg-[#3874FF] flex justify-center md:px-5 md:flex md:justify-between items-center py-3 rounded-[8px]'>
            <p className='hidden md:block text-white'>Share this article</p>
            <div className='flex justify-center gap-2 '>
              <Ficon/>
              <Xicon/>
              <InIcon />
              <IIcon />
              </div>
        </div>
</h2>
   </div>
   </>
  )
}

export default ReviewArticle