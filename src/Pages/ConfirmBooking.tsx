import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TripInfo } from '../Store/itinerary-slice';
import BookingPage from '../Components/Booking';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { logEvent } from '../firebase';

const ConfirmBooking: React.FC = () => {
  const trip = useSelector(TripInfo);
  const navigate = useNavigate();

  useEffect(() => {
    // Log analytics event when user proceeds to booking
    if (trip && trip.destination) {
      logEvent('begin_checkout', {
        trip_id: trip.id,
        destination: trip.destination,
        source: trip.source,
        value: trip.budget
      });
    }
  }, [trip]);

  // Redirect to home if no trip data
  if (!trip || !trip.destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No Trip Selected</h1>
          <p className="text-gray-600 mb-8">Please select a trip first</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Home
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <BookingPage trip={trip} />
    </div>
  );
};

export default ConfirmBooking;
