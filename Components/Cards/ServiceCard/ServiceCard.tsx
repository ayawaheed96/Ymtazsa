
type ServiceProps = {
    serviceIcon:string;
    serviceTitle:string;
    serviceCost:number;
    serviceDesc:string;
}
const ServiceCard = ({serviceIcon,serviceTitle,serviceCost,serviceDesc}:ServiceProps) => {
  return (
    <div className="w-[65%] bg-[#F9F9F9] rounded-xl flex flex-col px-4 py-6">
        <div className="w-full flex items-baseline-start">
        <div className="basis-[80%] flex flex-col gap-4">
            <div className=" flex items-center gap-2 ">
                <img 
                 src={serviceIcon} 
                 alt={'service'}
                 className="w-[20px] h-[20px]"
                 loading="lazy"
                 />
                <h2 className="text-[14px] font-[700] text-[#2C4768] leading-[15px]">{serviceTitle}</h2>
            </div>
            <p className="w-[80%] px-2 text-[12px] font-[400] leading-[16px] text-[#B0B0B0] ">
                {serviceDesc}
            </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-[12px] font-[700] leading-[16px]">
            <p className="text-[#2C4768]">سعر الخدمة</p>
            <p className=" text-[#3FD06F] flex items-center gap-2">
                <span className="text-[24px] font-[400] leading-[16px]">{serviceCost}</span>
                <span className="text-[12px] font-[700] leading-[16px]">ر.س</span> </p>
        </div>
    </div>
    <button className="mt-6 w-[90%] mx-auto rounded-xl py-3 text-center bg-[#DDB762] text-white text-[16px] font-[700] leading-[17.86px] cursor-pointer">طلب الخدمة</button>
    </div>
  )
}

export default ServiceCard