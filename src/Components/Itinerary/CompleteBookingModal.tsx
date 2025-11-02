import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import BookingPage from "../Booking";
import type { Trip } from "../../Helper/ApiResponseInterface";

interface CompleteBookingModalProps {
  isOpen: boolean;
  tripData: Trip | null;
  onClose: () => void;
}

const CompleteBookingModal: React.FC<CompleteBookingModalProps> = ({
  isOpen,
  tripData,
  onClose,
}) => {
  if (!tripData) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
            transition={{ duration: 0.2 }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-1000 flex items-center justify-center p-4 pointer-events-none backdrop-blur-sm bg-black/20"
          >
            <div className="relative w-full max-h-[90vh]  overflow-y-auto bg-white rounded-2xl shadow-2xl pointer-events-auto max-w-4xl">
              {/* Close Button */}

              {/* Modal Header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-6 text-white shadow-md z-5"
              >
                <h2 className="text-2xl font-bold">Complete Your Booking</h2>
                <p className="text-blue-100 mt-1">
                  Enter traveler details and payment information to confirm your
                  booking
                </p>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#fee2e2" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-700 transition-colors rounded-full"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </motion.div>

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="p-6 lg:p-8"
              >
                <BookingPage trip={tripData} />
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CompleteBookingModal;
