import Image from 'next/image'
import React from 'react'
import { Lawyer } from '../../../interfaces/lawyer'
type LawyerProp = {
    lawyer:Lawyer
}

const LaywerCard = ({lawyer}:LawyerProp) => {
    const {name,first_name,about} = lawyer
  return (
    <div className="w-[18rem] mx-8 py-8 rounded-xl shadow bg-white flex flex-col items-center gap-4 hover:bg-gradient-to-r from-[#DDB762] to-[#676765] hover:text-[#fff] cursor-pointer ">
        <div className="w-[8rem] h-[8rem] rounded-full shadow flex items-center justify-center overflow-hidden">
            <Image 
            src={'/icons/person.svg'} 
            width={150}
            height={150}
            alt={first_name} 
            />
        </div>
        <div className='flex flex-col items-center hover:!text-white '>
        <div className="text-[#2C4768] flex items-center gap-2">
        <Image 
            src={'/icons/claimed.svg'} 
            width={15}
            height={15}
            alt={'claimed'} 
            />
            <h2 className='text-[16px] font-[700] '>{name}</h2>
            </div>
            <p className="my-4 text-[14px] font-[400] flex items-center gap-2 text-[#A3A4A5]">
                <span>{about}</span>
                <Image 
                src={'/icons/crown.svg'} 
                width={20}
                height={20}
                alt={'crown'} 
                />

            </p>
            <p className='text-[12px] font-[500] flex items-center gap-2 text-[#2C4768]'>
            <Image 
            src={'/icons/star.svg'} 
            width={15}
            height={15}
            alt={'star'} 
            />
            <span>4.56</span>
            <span>( 35 مراجعة )</span>
            </p>
        
        </div>
    </div>
  )
}

export default LaywerCard