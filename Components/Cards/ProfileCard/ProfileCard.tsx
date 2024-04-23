import Image from "next/image";
import { SetStateAction } from "react";

type ProfileProps = {
    name:string;
    about:string;
    topRating:string;
    image:string;
    totalRating:number;
    showReviewsHandler:()=>void
}
const ProfileCard = ({name,about,topRating,image,totalRating,showReviewsHandler}:ProfileProps) => {
  return (
    <div className="w-full bg-white rounded-xl py-4 px-10 ">
        <h2 className="text-[28px] font-[700] leading-[31.25px] text-[#2C4768] my-4 "> المعلومات الشخصية</h2>
        <div className="flex items-baseline-start my-6 ">
            <div className="w-[8rem] h-[8rem] rounded-full relative">
                <Image 
                src={image} 
                width={95}
                height={95}
                alt={name} 
                />
                <Image 
                 src={'/icons/claimed.svg'} 
                 width={18}
                 height={18}
                 alt='claimed'
                 className="absolute top-[6px] right-[5px]" 
                />
            </div>
            <div className="basis-3/4 flex flex-col gap-2">
                <h2 className="text-[20px] font-[700] leading-[24px] text-[#2C4768] ">{name}</h2>
                <p className="my-4 text-[14px] font-[400] flex items-center gap-2 text-[#A3A4A5]">
                <span>{about}</span>
                <Image                 
                src={'/icons/crown.svg'} 
                width={20}
                height={20}
                alt={'crown'} 
                />
            </p>
            <div className="w-full flex items-center justify-between">
                <p className="flex items-center gap-2 text-[#A3A4A5]">
                    <Image 
                    src={'/icons/rating.svg'} 
                    width={90}
                    height={80}
                    alt={'rating'}/>
                    <span>{topRating}</span>
                    <span> التقييم العام من {totalRating} من العملاء</span>
                </p>
                <p className="text-[16px] font-[400] text-[#2C4768] leading-[19.02px] cursor-pointer" 
                onClick={showReviewsHandler}>اظهر التقييمات</p>
            </div>

            <div className="w-[90%] bg-[#F9F9F9] rounded-es-2xl rounded-se-2xl flex flex-col p-4 gap-6 ">
                <p className="flex items-center gap-2">
                    <Image 
                    src={'/icons/quote.svg'} 
                    width={20}
                    height={20}
                    alt={'quote'}/>
                <span className="text-[14px] font-[400] leading-[15.62px] text-[#A3A4A5] ">
                تميز الاستشاري بالاحترافية والخبرة العالية في المسائل القانونية
                </span>
                </p>

                <p className="w-full flex items-center justify-between text-[12px] font-[400] leading-[14.4px] text-[#A3A4A5]">
                <Image 
                    src={'/icons/rating.svg'} 
                    width={100}
                    height={80}
                    alt={'rating'}/>
                    <span>Abdullah Faleh</span>
                    <span>الخميس 3 فبراير 2024</span>
                </p>
            </div>

            </div>
        </div>
    </div>
  )
}

export default ProfileCard