import { Home, Star } from "lucide-react";
import type { Accommodation, Trip } from "../../Helper/ApiResponseInterface";
import moment from "moment";

interface Props {
  accommodation: Accommodation;
  TripInfo: Trip;
  index: number;
}

const AccommodationCard = (props: Props) => {
  const { accommodation, index } = props;
  return (
    <div
      key={index}
      className="flex-shrink-0 w-[500px]  shadow-lg rounded-lg p-4"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4  rounded-lg">
          <Home className="w-8 h-8 text-cyan-600" />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900">
              {accommodation.name}
            </h4>
            <p className="text-gray-600">{accommodation.type}</p>
            <div className="flex items-center gap-2 mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">
                {accommodation.rating} (
                {accommodation.review_count.toLocaleString()} reviews)
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">
              ₹{accommodation.total_cost.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">
              {accommodation.nights} nights
            </p>
            <p className="text-xs text-gray-500">
              ₹{accommodation.cost_per_night.toLocaleString()}/night
            </p>
          </div>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
          <h5 className="font-medium text-gray-900 mb-3">Property Details</h5>
          <p className="text-sm text-gray-700 mb-3">
            {accommodation.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
            {accommodation.amenities.map((amenities) => {
              return (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-600">{amenities}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-cyan-200 w-full">
            <div className="flex items-start flex-col  w-full text-sm text-gray-600">
              <div className="flex justify-between w-full">
                <p>Room: </p>
                <p>{accommodation.room_type}</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p>Check In: </p>
                <p>
                  {moment(accommodation.check_in_date).format("MMM DD, YYYY")}
                </p>
              </div>
              <div className="flex justify-between w-full">
                <p>Check Out: </p>
                <p>
                  {moment(accommodation.check_out_date).format("MMM DD, YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccommodationCard;
