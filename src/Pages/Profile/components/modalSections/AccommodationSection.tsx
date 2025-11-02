import React from 'react';
import { motion } from 'motion/react';
import moment from 'moment';

interface AccommodationBooking {
  hotel_name: string;
  check_in_date: string;
  check_out_date: string;
  room_type: string;
}

interface AccommodationSectionProps {
  accommodation: AccommodationBooking;
  delay?: number;
}

const AccommodationSection: React.FC<AccommodationSectionProps> = ({
  accommodation,
  delay = 0.2,
}) => {
  if (!accommodation) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4">Accommodation</h3>
      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div>
          <p className="text-xs text-gray-500 uppercase">Hotel Name</p>
          <p className="text-gray-900 font-medium">{accommodation.hotel_name}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase">Check-in</p>
            <p className="text-gray-900 font-medium">
              {moment(accommodation.check_in_date).format('MMM DD, YYYY')}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Check-out</p>
            <p className="text-gray-900 font-medium">
              {moment(accommodation.check_out_date).format('MMM DD, YYYY')}
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Room Type</p>
          <p className="text-gray-900 font-medium">{accommodation.room_type}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AccommodationSection;
