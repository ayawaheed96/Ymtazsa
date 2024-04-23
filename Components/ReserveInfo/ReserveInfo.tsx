import { useState } from "react"
import ServiceCard from "../Cards/ServiceCard/ServiceCard"
import Image from "next/image"

const ReserveInfo = () => {
    const tabs = ['أسعار الخدمات','أوقات العمل']
    const [selectedTab,setSelectedTab] = useState('أسعار الخدمات')
    const services = [{title:'خدمة الاستشارة الهاتفية',icon:'/icons/Calling.svg',desc:'ونقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة',cost:300},
    {title:'خدمة الاستشارة المرئية',icon:'/icons/Play.svg',desc:'ونقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة',cost:300},
    {title:'خدمة الاستشارة المكتوبة',icon:'/icons/Edit.svg',desc:'ونقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة',cost:300},
    ]
  return (
    <div className="w-full bg-white rounded-xl py-4">
        <h2 className="text-[28px] font-[700] leading-[31.25px] text-[#2C4768] my-4 px-6">معلومات الحجز</h2>
        <div className="w-[50%] mx-auto my-4 flex items-center gap-6 mt-12">
            {
                tabs.map((tab:string)=>(
                    <div key={tab} className={`text-[20px] leading-[22.32px] cursor-pointer ${selectedTab===tab?`text-[#2C4768] font-[700]`:`text-[#A3A4A5] font-[400]`}`} onClick={()=>setSelectedTab(tab)}>
                        {tab}
                    </div>
                ))
            }
        </div>
        <div className="w-full h-[2px] bg-[#ECECEC] relative">
            <div className={`w-[25%] h-[2px] rounder-sm absolute bg-[#2C4768] ${selectedTab === 'أوقات العمل'?'top-0 right-[260px]':'top-0 right-[118px]'}`}></div>
        </div>
        {
            selectedTab === 'أسعار الخدمات' &&
            <div className="flex flex-col items-center justify-center gap-4 my-6">
            {
                services.map((service:any)=>(
                    <ServiceCard key={service.title} 
                    serviceTitle={service.title}
                    serviceIcon={service.icon}
                    serviceDesc={service.desc}
                    serviceCost={service.cost}
                    />
                ))
            }
            </div>
        }
        {
            selectedTab === 'أوقات العمل' &&
            <div className="w-full flex items-center justify-evenly my-10 mx-auto">
                <Image 
                src={'/icons/leftArrow.svg'}
                width={30}
                height={30}
                alt="arrow"
                className="cursor-pointer"
                />
                <div className="w-[8rem] h-[15rem] rounded-xl overflow-hidden bg-[#F9F9F9]" >
                    <div className="w-full h-[3rem] text-white bg-[#DDB762] flex items-center justify-center">
                        <p className="text-[16px] font-[400] leading-[17.86px] ">اليوم</p>
                    </div>
                    <div className="flex item-center justify-center my-12 px-3">
                        <p className="text-[16px] font-[400] leading-[17.86px] text-[#A3A4A5] ">لا يوجد مواعيد متاحة</p>
                    </div>
                </div>
                <div className="w-[8rem] h-[15rem] rounded-xl overflow-hidden bg-[#F9F9F9]" >
                    <div className="w-full h-[3rem] text-white bg-[#DDB762] flex items-center justify-center">
                        <p className="text-[16px] font-[400] leading-[17.86px] ">غدا</p>
                    </div>
                    <div className="flex flex-col item-center justify-center gap-2 py-4">
                        <p className="text-[16px] font-[400] leading-[17.86px] text-white bg-[#DDB762] rounded-lg w-fit p-2 mx-auto">10:00 ص</p>
                        <p className="text-[16px] font-[400] leading-[17.86px] text-[#A3A4A5] mx-auto ">10:00 ص</p>
                        <p className="text-[16px] font-[400] leading-[17.86px] text-[#A3A4A5] mx-auto ">10:00 ص</p>
                        <p className="text-[16px] font-[400] leading-[17.86px] text-[#A3A4A5] mx-auto ">10:00 ص</p>
                        <p className="text-[16px] font-[400] leading-[17.86px] text-[#A3A4A5] mx-auto ">10:00 ص</p>
                    </div>
                </div>
                <div className="w-[8rem] h-[15rem] rounded-xl overflow-hidden bg-[#F9F9F9]" >
                    <div className="w-full h-[3rem] text-white bg-[#DDB762] flex items-center justify-center">
                        <p className="text-[16px] font-[400] leading-[17.86px] ">الاثنين 02/03</p>
                    </div>
                    <div className="flex flex-col item-center justify-center gap-2 py-4">
                        <p className="text-[16px] font-[400] leading-[17.86px] text-white bg-[#DDB762] rounded-lg w-fit p-2 mx-auto">10:00 ص</p>
                        <p className="text-[16px] font-[400] leading-[17.86px] text-[#A3A4A5] mx-auto ">10:00 ص</p>
                        <p className="text-[16px] font-[400] leading-[17.86px] text-[#A3A4A5] mx-auto ">10:00 ص</p>
                        <p className="text-[16px] font-[400] leading-[17.86px] text-[#A3A4A5] mx-auto ">10:00 ص</p>
                        <p className="text-[16px] font-[400] leading-[17.86px] text-[#A3A4A5] mx-auto ">10:00 ص</p>
                    </div>
                </div>
                <Image 
                src={'/icons/rightArrow.svg'}
                width={30}
                height={30}
                alt="arrow"
                className="cursor-pointer"

                />
            </div>
        }

    </div>
  )
}

export default ReserveInfo