import React from 'react';
import { motion } from 'motion/react';

interface CostSummary {
  total_amount: number;
  discount_amount: number;
  promo_code?: string;
  traveler_count: number;
  accommodation_cost?: number;
  transport_cost?: number;
  activity_cost?: number;
  meal_cost?: number;
}

interface CostSummarySectionProps {
  costSummary: CostSummary;
  delay?: number;
}

const CostSummarySection: React.FC<CostSummarySectionProps> = ({
  costSummary,
  delay = 0.7,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200"
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4"> Cost Summary</h3>
      <div className="space-y-2 text-sm">
        {costSummary.accommodation_cost && (
          <div className="flex justify-between">
            <span className="text-gray-600">Accommodation</span>
            <span className="font-medium">
              ₹{costSummary.accommodation_cost.toLocaleString('en-IN')}
            </span>
          </div>
        )}
        {costSummary.transport_cost && (
          <div className="flex justify-between">
            <span className="text-gray-600">Transport</span>
            <span className="font-medium">
              ₹{costSummary.transport_cost.toLocaleString('en-IN')}
            </span>
          </div>
        )}
        {costSummary.activity_cost && (
          <div className="flex justify-between">
            <span className="text-gray-600">Activities</span>
            <span className="font-medium">
              ₹{costSummary.activity_cost.toLocaleString('en-IN')}
            </span>
          </div>
        )}
        {costSummary.meal_cost && (
          <div className="flex justify-between">
            <span className="text-gray-600">Meals</span>
            <span className="font-medium">
              ₹{costSummary.meal_cost.toLocaleString('en-IN')}
            </span>
          </div>
        )}
        {costSummary.discount_amount > 0 && (
          <div className="flex justify-between pt-2 border-t border-blue-200">
            <span className="text-green-600 font-medium">
              Discount {costSummary.promo_code && `(${costSummary.promo_code})`}
            </span>
            <span className="font-medium text-green-600">
              -₹{costSummary.discount_amount.toLocaleString('en-IN')}
            </span>
          </div>
        )}
        <div className="flex justify-between pt-2 border-t border-blue-200 font-bold">
          <span>Total Amount</span>
          <span className="text-blue-600 text-lg">
            ₹{costSummary.total_amount.toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CostSummarySection;
