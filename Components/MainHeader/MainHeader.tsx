import Image from "next/image"
import Link from "next/link"
// import '../../src/styles/globals.css'

const MainHeader = () => {
    const tabs = ['الرئيسية','من نحن','اتصل بنا','الدعم الفني','أرقام التشغيل','سياسية الخصوصية']
  return (
    <div className='w-full flex items-center justify-between px-2 py-4 mb-4'>
        <div className="cursor-pointer">
            <Image
            src={'/icons/logo.svg'}
            width={100}
            height={30}
            alt="yamtazLogo"
            />
        </div>
        <ul className={`basis-[40%] flex items-center justify-between text-[14px] font-[700] leading-[16px] text-[#2C4768] cursor-pointer`}>
            {
                tabs.map((tab,index)=>(
                    tab === 'الرئيسية'?
                    <Link key={index} href={`/`}>
                    <li className={`${tab}`} >{tab}</li>
                    </Link>
                    :
                    <li key={index} className={`${tab}`} >{tab}</li>
                ))
            }
        </ul>
            <div className={`cursor-pointer`}>
                <Image
                 src={'/icons/Burger.svg'}
                 width={20}
                 height={20}
                 alt="menu"
                />
            </div>
    </div>
  )
}

export default MainHeader
