import Image from "next/image"
import ReviewCard from "../Cards/ReviewCard/ReviewCard"
import { Ref } from "react"
type ReviewsProps = {
  ref:Ref<HTMLDivElement>;
}
const ClientsReview = ({ref}:ReviewsProps) => {
  return (
    <div className="w-full flex flex-col gap-4" ref={ref}>
        <div className="w-full bg-white rounded-xl py-4 px-10">
        <h2 className="text-[28px] font-[700] leading-[31.25px] text-[#2C4768] my-4"> تقييم العملاء :</h2>
        <div className="w-full flex items-baseline-start justify-between mt-6">
          <p className="flex flex-col justify-center items-center gap-2">
          <Image 
            src={'/icons/rating.svg'} 
            width={150}
            height={100}
            alt={'rating'}/>
            <span className="w-[55%] flex justify-center items-center  flex-wrap text-[16px] font-[400] text-[#A3A4A5] leading-[17.86px] ">التقييم العام من 154 من العملاء </span>
          </p>
          <p className="flex flex-col justify-center items-center gap-4">
          <Image 
            src={'/icons/rating.svg'} 
            width={150}
            height={100}
            alt={'rating'}/>
            <span className="text-[16px] font-[400] text-[#A3A4A5] leading-[17.86px] ">تقييم المنصة </span>
          </p>
          <p className="flex flex-col justify-center items-center gap-4 text-center">
          <Image 
            src={'/icons/totRating.svg'} 
            width={50}
            height={50}
            alt={'rating'}/>
            <span className="text-[16px] font-[400] text-[#A3A4A5] leading-[17.86px]">تقييم الاستشاري </span>
        </p>
        </div>

        </div>
      <div className="mb-10">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>

    </div>
  )
}

export default ClientsReview