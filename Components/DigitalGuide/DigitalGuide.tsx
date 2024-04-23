import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import axios from "axios";
import DigitalCard, { Item } from "../Cards/DigitalCard/DigitalCard";
import Link from "next/link";

const DigitalGuide = () => {
  const [searchedText, setSearchedText] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [results, setResults] = useState([]);

  const searchHandler = (val: string) => {
    setSearchedText(val)
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://ymtaz.sa/api/client/digital-guide/categories`
      );
      const data = response.data.data;
      setAllCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{
    if(searchedText){
        setTimeout(()=>{
            let res = allCategories.filter((item:Item)=>item.title === searchedText)
            if(res.length>0){
                setResults(res)
            }
        },500)
    }else{
      if(allCategories) setResults(allCategories)
    }
  },[searchedText,allCategories])

  return (
    <div className="w-full flex flex-col gap-4 my-8">
      <h2 className="text-2xl font-bold text-center">الدليل الرقمي </h2>
      <div className="w-[90%] mx-auto">
        <SearchBox value={searchedText} onChange={searchHandler} />
      </div>
      {
        results?.length > 0 && 
        <div className="w-3/4 mx-auto grid grid-cols-3 gap-10">
            {
                results.slice(0,6).map((item :Item)=>(
                    <div key={item.id} className="col-span-1">
                        <Link href={`/digitalguide/${item.title}`}>
                        <DigitalCard  item={item}/>
                        </Link>
                    </div>
                ))
            }

        </div>
      }
    </div>
  );
};

export default DigitalGuide;
