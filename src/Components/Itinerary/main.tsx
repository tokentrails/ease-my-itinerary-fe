
import { useEffect, useState } from "react";
import ItineraryForm from "./itineraryForm";
import type { Trip } from "../../Helper/ApiResponseInterface";
import ItineraryInfo from "./itineraryInfo";
import {  useSelector } from "react-redux";
import {  TripInfo } from "../../Store/itinerary-slice";


const ItineraryMain = () => {

  const tripAdded = useSelector(TripInfo);
  const [trip, setTrip] = useState<Trip | null>(null);
  useEffect(() => {
    if (tripAdded.id.length > 0) {
      setTrip(tripAdded);
    }
  }, [tripAdded]);


  return (
    <div>
      {!trip && <ItineraryForm />}
      {trip && <ItineraryInfo trip={trip} />}
    </div>
  );
};
export default ItineraryMain;
