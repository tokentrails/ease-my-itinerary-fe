import { useState } from "react";
import type { BudgetBreakdown, Trip } from "../../Helper/ApiResponseInterface";
import {  ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface Props {
  trip: Trip;
  breakDown: BudgetBreakdown;
}


const ItimeraryBreakDown = (props: Props) => {
  const [open, setOpen] = useState(true);
  const { breakDown, trip } = props;
  const budgetPercentage = (trip.total_cost / trip.budget) * 100;

  return (
    <div className="flex relative w-full cursor-pointer">
      <div className="w-full ">
        <div
          className="w-full rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          onClick={() => setOpen(!open)}
        >
          {/* Header */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex-1">
              <h3 style={{ color: "#2093EF" }} className="font-semibold">
                Budget & Cost Breakdown
              </h3>
              <div className="flex items-center gap-4 mt-2">
                <div>
                  <p className="text-xs text-gray-500">Total Cost</p>
                  <p className="font-bold text-lg" style={{ color: "#2093EF" }}>
                    ₹{trip.total_cost.toFixed(2).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Budget</p>
                  <p className="font-semibold">
                    ₹{trip.budget.toLocaleString()}
                  </p>
                </div>
                {trip.saved && trip.saved > 0 && (
                  <div className="bg-green-50 px-3 py-1 rounded-full">
                    <p className="text-sm font-semibold text-green-700">
                      ₹{trip.saved.toFixed(2).toLocaleString()} saved
                    </p>
                  </div>
                )}
              </div>
            </div>
            <motion.button
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-2 flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </motion.button>
          </div>

          {/* Progress Bar */}
          <div className="px-4 pb-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-500">Budget Usage</p>
              <p className="text-sm font-semibold" style={{ color: "#2093EF" }}>
                {Math.round(budgetPercentage)}%
              </p>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(budgetPercentage, 100)}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ backgroundColor: "#2093EF" }}
              />
            </div>
          </div>

          {/* Expandable Details */}
          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gray-100"
          >
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <p className="text-gray-600 font-medium">Accommodation</p>
                <p className="font-semibold">
                  ₹{breakDown.accommodation.toFixed(2).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <p className="text-gray-600 font-medium">Transport</p>
                <p className="font-semibold">
                  ₹{breakDown.transport.toFixed(2).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <p className="text-gray-600 font-medium">Activities</p>
                <p className="font-semibold">
                  ₹{breakDown.activities.toFixed(2).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <p className="text-gray-600 font-medium">Meals</p>
                <p className="font-semibold">
                  ₹{breakDown.meals.toFixed(2).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <p className="text-gray-600 font-medium">Miscellaneous</p>
                <p className="font-semibold">
                  ₹{breakDown.miscellaneous.toFixed(2).toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ItimeraryBreakDown;
