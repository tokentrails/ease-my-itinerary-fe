import React from 'react';
import { motion } from 'motion/react';

interface SummaryCardProps {
  trip: {
    destination: string;
    duration_days: number;
    start_date: string;
    end_date: string;
    traveler_count: number;
  };
  basePrice: number;
  taxes: number;
  totalCost: number;
  onBookNow: () => void;
  isSubmitting: boolean;
  isFormValid: boolean;
  acceptTerms: boolean;
  onAcceptTermsChange: (value: boolean) => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  trip,
  basePrice,
  taxes,
  totalCost,
  onBookNow,
  isSubmitting,
  isFormValid,
  acceptTerms,
  onAcceptTermsChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="lg:col-span-1"
    >
      <div className="sticky top-32 bg-white rounded-lg shadow-md p-6 space-y-6">
        {/* Trip Summary Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Trip Summary</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
             
              <div>
                <p className="text-xs text-gray-500">Destination</p>
                <p className="font-semibold text-gray-900">{trip?.destination}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-semibold text-gray-900">{trip?.duration_days} Days</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
             
              <div>
                <p className="text-xs text-gray-500">Travelers</p>
                <p className="font-semibold text-gray-900">
                  {trip?.traveler_count} {trip?.traveler_count === 1 ? 'Person' : 'People'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-200" />

        {/* Cost Summary Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Cost Summary</h3>
          <div className="space-y-3 pb-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Estimated Trip Cost</span>
              <span className="font-semibold text-gray-900">
                ₹{basePrice.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">GST (18%)</span>
              <span className="font-semibold text-gray-900">
                ₹{taxes.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>

          {/* Total Cost */}
          <div className="flex justify-between items-center pt-4 pb-4">
            <span className="text-lg font-bold text-gray-900">Total Cost</span>
            <span className="text-2xl font-bold text-blue-600">
              ₹{totalCost.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </span>
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-3 py-4 border-t border-gray-200">
          <input
            type="checkbox"
            id="terms"
            checked={acceptTerms}
            onChange={(e) => onAcceptTermsChange(e.target.checked)}
            className="mt-1 w-4 h-4 accent-blue-600 rounded cursor-pointer"
          />
          <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
            I agree to the terms and conditions and privacy policy of Ease My Itinerary
          </label>
        </div>

        {/* Book Now Button */}
        <motion.button
          whileHover={{ scale: isFormValid && !isSubmitting ? 1.02 : 1 }}
          whileTap={{ scale: isFormValid && !isSubmitting ? 0.98 : 1 }}
          onClick={onBookNow}
          disabled={!isFormValid || isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
            isFormValid && !isSubmitting
              ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? 'Processing...' : 'Book Now'}
        </motion.button>

        <p className="text-xs text-gray-500 text-center">
          By clicking "Book Now", you agree to the terms and conditions
        </p>
      </div>
    </motion.div>
  );
};

export default SummaryCard;
