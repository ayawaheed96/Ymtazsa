import Image from "next/image";


export type Item = {
    id:number;
    title:string;
    image:string;
    need_license: number;
    lawyers_count: number;
}
type CardProps = {
    item:Item
}
const DigitalCard = ({item}:CardProps) => {
    const {title,image,lawyers_count} = item;


  return (
    <div className="w-[18rem] mx-8 py-4 rounded-xl shadow bg-white flex flex-col items-center gap-4 hover:bg-gradient-to-r from-[#DDB762] to-[#676765cc] hover:!text-[#fff] cursor-pointer ">
        <div className="w-[10rem] h-[10rem] rounded-full shadow bg-white flex items-center justify-center hover:bg-[#DDB762]">
            <img  src={'https://ymtaz.sa/uploads/person.png'} alt='cat' className="w-[5rem] h-[5rem] rounded-full" loading="lazy"/>
        </div>
        <h2 className="text-[20px] font-[700] text-[#292019] hover:text-white">{title}</h2>
        <p className="my-4 text-[#6F6863] hover:text-white">متوفر عدد {lawyers_count}</p>
    </div>
  )
}

export default DigitalCard