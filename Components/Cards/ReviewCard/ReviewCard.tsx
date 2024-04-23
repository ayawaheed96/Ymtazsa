import Image from 'next/image'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='w-full bg-white border-b-2 border-gray-100 py-4 px-6'>
        <Image 
            src={'/icons/rating.svg'} 
            width={100}
            height={80}
            alt={'rating'}/>
        <div className='w-full flex justify-between items-baseline-start px-2 mt-4 '>
            <div className='flex flex-col gap-4 text-[#A3A4A5] text-[16px] font-[400] leading-[19px]'>
                <h2>التقييم العام</h2>
                <p className='w-[80%]'>
                “ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية والفقهية
                </p>
                <p className='mt-4 text-[12px] leading-[14.4px]'>الخميس 3 فبراير 2024</p>
            </div>

            <div className='flex flex-col justify-center items-center gap-3'>
            <Image 
                src={'/icons/nbrRating.svg'} 
                width={40}
                height={40}
                alt={'rating'}/>
                <p className='text-[20px] font-[400] leading-[24px] text-[#A3A4A5] whitespace-nowrap'>تقييم الاستشاري</p>
            </div>

        </div>
    </div>
  )
}

export default ReviewCard