import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface BookingHeaderProps {
  trip: {
    destination: string;
    duration_days: number;
  };
}

const BookingHeader: React.FC<BookingHeaderProps> = ({ trip }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-4"
        >
          <ArrowBackIcon sx={{ fontSize: '24px' }} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900"> 1</h1>
          <p className="text-sm text-gray-500">
            {trip?.destination} • {trip?.duration_days} Days
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingHeader;
