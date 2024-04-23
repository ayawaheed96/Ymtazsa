import { useRouter } from "next/router";
import SearchBox from "../../../../Components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import LawyerCard from "../../../../Components/Cards/LawyerCard/LawyerCard";

const DigitalTitle = () => {
  const router = useRouter();
  const { title } = router.query;
  const [searchedText, setSearchedText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4`;
  const searchHandler = (val: string) => {
    setSearchedText(val);
  };

  const searchData = async (searchValue: string) => {
    try {
      const response = await axios.post(
        "https://ymtaz.sa/api/client/digital-guide/search",
        {
          name: searchValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setSearchResults(response.data.data.lawyers);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      searchData(searchedText);
    }, 1000);
  }, [searchedText]);

  console.log(searchResults);
  return (
    <div className=" w-full flex flex-col gap-8">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <div className="w-[90%] mx-auto">
        <SearchBox value={searchedText} onChange={searchHandler} />
      </div>
      {searchResults?.length > 0 && (
        <div className="w-3/4 mx-auto grid grid-cols-3 gap-10 my-2">
          {searchResults.map((item: any) => (
            <div key={item.id} className="col-span-1">
              <Link href={`/digitalguide/${title}/${item.id}`}>
                <LawyerCard lawyer={item} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DigitalTitle;
