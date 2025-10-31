import type { Trip } from "../../Helper/ApiResponseInterface";

interface Props {
  tripInfo: Trip;
}

const Summary = (props: Props) => {
  const { tripInfo } = props;
  return (
    <div className="rounded-xl shadow-lg sticky top-0 right-0 bg-gray-100 px-5 py-5 w-full">
      <p className="text-lg font-semibold text-center">Trip Summary</p>
      <div className="grid grid-cols-1">
        <div className="space-y-4">
          <div>
            <span className="text-sm font-medium text-gray-700">Route:</span>
            <p className="text-gray-900">
              {tripInfo.source} → {tripInfo.destination}
            </p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-700">Duration:</span>
            <p className="text-gray-900">
              {tripInfo.duration_days} days, {tripInfo.traveler_count} travelers
            </p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-700">
              Total Cost:
            </span>
            <p className="text-lg font-semibold text-gray-900">
              ₹{tripInfo.total_cost.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">
              ₹{tripInfo.cost_per_person.toLocaleString()} per person
            </p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-700">Savings:</span>
            <p className="text-green-600 font-medium">
              ₹{tripInfo.saved.toLocaleString()} saved from budget
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <button className="text-white text-xl font-semibold w-full p-2 my-4 rounded-sm" style={{ backgroundColor: '#2093EF' }}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
