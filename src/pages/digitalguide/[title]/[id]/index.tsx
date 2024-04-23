import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Lawyer } from "../../../../../interfaces/lawyer";
import ProfileCard from "../../../../../Components/Cards/ProfileCard/ProfileCard";
import InfoCard from "../../../../../Components/Cards/InfoCard/InfoCard";
import ClientsReview from "../../../../../Components/ClientsReview/ClientsReview";
import ReserveInfo from "../../../../../Components/ReserveInfo/ReserveInfo";

const LawyerDetails = () => {
  const [lawyerData, setLawyerData] = useState<Lawyer>({} as Lawyer);
  const [showRating,setShowRating] = useState(false)
  const router = useRouter();
  const { id } = router.query;
  const reviewsRef = useRef<null | HTMLDivElement>(null);

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4'
  
const getLawyerData = async () => {
    try {
      const response = await axios.get(
        `https://ymtaz.sa/api/client/lawyer/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}`,
              },
        }
      );
      const data = response.data.data;
      setLawyerData(data.lawyer);
    } catch (error) {
      console.log(error);
    }
  };
  const showReviewsHandler = ()=>{
    setShowRating(true);
    if(reviewsRef.current)
    {
        reviewsRef.current.scrollIntoView({behavior: "smooth",block: 'start',})
    }
  }

  useEffect(() => {
    if (id) {
      getLawyerData();
    }
  }, [id]);
  return (
        <div className="w-full flex items-baseline-start justify-between">
            {/* right side */}
            <div className="basis-[55%] flex flex-col gap-8">
                <ProfileCard
                    name={lawyerData.name}
                    topRating="5.00"
                    totalRating={154}
                    about={lawyerData.about}
                    image="/icons/person.svg"
                    showReviewsHandler={showReviewsHandler}
                />
                <InfoCard />
                { showRating &&
                    <ClientsReview  ref={reviewsRef}/>
                }
            </div>
            {/* left side */}
            <div className="basis-[43%]">
                <ReserveInfo />

            </div>
        </div>
    )
};

export default LawyerDetails;
