import { useEffect, useState } from "react"

import type { Trip } from "../Helper/ApiResponseInterface"

import { useSelector } from "react-redux"
import { TripInfo } from "../Store/itinerary-slice"
import ItineraryForm from "../Components/Itinerary/itineraryForm"
import ItineraryInfo from "../Components/Itinerary/itineraryInfo"

const ItineraryMain = ()=>{ 
    const tripAdded = useSelector(TripInfo)
    const [trip,setTrip] = useState<Trip|null>(null)
    useEffect(()=>{
        setTrip(tripAdded)
    },[tripAdded])

    return <div>
       {!trip && <ItineraryForm />}
       {trip && <ItineraryInfo trip={trip} />}
    </div>
}
export default ItineraryMain