import moment from "moment";
import type { DayPlan, Meal } from "../../../Helper/ApiResponseInterface";
import {
  Utensils,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
interface Props {
  meal: Meal;
  dayInfo: DayPlan;
  index: number;
}
const MealsCard = (props: Props) => {
  const { meal } = props;
  return (
    <div className="min-w-[400px] shadow-lg"> 
      <div
        key={meal.id}
        className="bg-white rounded-lg p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-cyan-600 font-medium">
                  {meal.type.toUpperCase()}
                </p>
      
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {meal.restaurant_name}
              </h3>
            </div>
          </div>
          <div className="text-right">
            {meal.cost > 0 ? (
              <>
                <div className="text-lg font-semibold text-gray-900">
                  ₹{meal.cost.toFixed(2).toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                  ₹{meal.cost_per_person.toFixed(2).toLocaleString()}/person
                </div>
              </>
            ) : (
              <div className="text-lg font-semibold text-cyan-600">
                Included
              </div>
            )}
          </div>
        </div>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3">
          {meal.reservation_time&& <div className="flex items-center gap-3" >
             <Clock className="w-4 h-4 text-cyan-500" />
            <span className="font-medium text-gray-900">
              {moment(meal.reservation_time,"HH:mm").format("hh:mm a")}
            </span>
           </div>}
            <div className="flex items-center gap-1">
              {meal.booking_required ? (
                <>
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-amber-600">
                    Booking Required
                  </span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600">
                    Walk-in Available
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-gray-900">
                {meal.location.name}
              </div>
              <div className="text-sm text-gray-500">
                {meal.location.address}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 p-3 bg-cyan-50 rounded-lg">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium text-gray-900">{meal.rating.toFixed(2)}</span>
            <span className="text-sm text-gray-500">
              ({meal.review_count.toLocaleString()} reviews)
            </span>
          </div>
          <div className="text-sm text-gray-600">{meal.cuisine}</div>
        </div>

        <p className="text-gray-700 mb-4">{meal.description}</p>

        <div className="space-y-3">
          <div>
            <span className="text-sm font-medium text-gray-900">
              Specialties:{" "}
            </span>
            <span className="text-sm text-gray-600">
              {meal.specialties.join(", ")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-900">Dietary: </span>
            {meal.dietary_info.map((diet, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
              >
                {diet}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MealsCard;
