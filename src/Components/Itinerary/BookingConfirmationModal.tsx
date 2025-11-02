import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, MapPin, Calendar, Users, DollarSign, Briefcase } from 'lucide-react';

interface BookingConfirmationModalProps {
  isOpen: boolean;
  bookingData: any;
  onClose: () => void;
}

const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  isOpen,
  bookingData,
  onClose,
}) => {
  if (!bookingData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-white rounded-xl shadow-2xl p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>

              {/* Success Header */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="flex justify-center mb-6"
              >
                <div className="text-green-600">
                  <CheckCircle className="w-16 h-16" />
                </div>
              </motion.div>

              <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
                Booking Confirmed!
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Your trip has been successfully booked
              </p>

              {/* Confirmation Details */}
              <div className="space-y-4 mb-8">
                {/* Trip Details */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Destination</p>
                      <p className="font-semibold text-gray-900">{bookingData.trip?.destination}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Date Details */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-green-50 rounded-lg p-4 border border-green-200"
                >
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Travel Dates</p>
                      <p className="font-semibold text-gray-900">
                        {bookingData.trip?.start_date} to {bookingData.trip?.end_date}
                        <span className="text-gray-500 ml-2">({bookingData.trip?.duration_days} days)</span>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Travelers */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                >
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Travelers</p>
                      <p className="font-semibold text-gray-900">
                        {bookingData.traveler_details?.length || 0} {bookingData.traveler_details?.length === 1 ? 'Person' : 'People'}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Cost Details */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-orange-50 rounded-lg p-4 border border-orange-200"
                >
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div className="w-full">
                      <p className="text-sm text-gray-600 mb-2">Total Amount</p>
                      <div className="flex justify-between items-end">
                        <p className="font-semibold text-gray-900">
                          ₹{bookingData.total_cost?.toLocaleString('en-IN', { maximumFractionDigits: 0 }) || 'N/A'}
                        </p>
                        <p className="text-xs text-gray-600">
                          {bookingData.payment_method?.toUpperCase() === 'CREDIT_CARD' ? '💳 Credit Card' : '📱 UPI'}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Booking Reference */}
                {bookingData.booking_id && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-600">Booking Reference</p>
                        <p className="font-mono font-semibold text-gray-900">{bookingData.booking_id}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4"
              >
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Continue to Itinerary
                </button>
              </motion.div>

              <p className="text-center text-sm text-gray-500 mt-4">
                A confirmation email has been sent to your registered email address
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingConfirmationModal;
