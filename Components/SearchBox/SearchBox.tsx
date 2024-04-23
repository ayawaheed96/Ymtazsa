import Image from "next/image"

type searchProps = {
    value :string;
    onChange:(val:string)=>void
}
const SearchBox = ({value,onChange}:searchProps) => {
  return (
    <div className="border border-[#ccc] rounded-lg w-[60%] flex items-center px-4 py-2 text-xl bg-white mx-auto">
        <Image 
        src={'/icons/Search.svg'}
        width={20}
        height={20}
        alt="search"
        />
        <input 
        type="text"
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        className="w-[90%] focus:outline-none "
        />
        <Image 
         src={'/icons/mi_filter.svg'}
         width={20}
         height={20}
         alt="search"
        />

    </div>
  )
}

export default SearchBox