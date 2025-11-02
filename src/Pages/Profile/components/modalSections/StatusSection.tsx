import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import moment from 'moment';

interface StatusSectionProps {
  confirmationDate: string;
  status: string;
  delay?: number;
}

const StatusSection: React.FC<StatusSectionProps> = ({
  confirmationDate,
  status,
  delay = 0.1,
}) => {
  const isConfirmed = status === 'confirmed';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`rounded-lg p-4 border ${
        isConfirmed
          ? 'bg-green-50 border-green-200'
          : 'bg-yellow-50 border-yellow-200'
      }`}
    >
      <div className="flex items-center gap-3">
        <CheckCircle
          className={isConfirmed ? 'text-green-600' : 'text-yellow-600'}
          size={24}
        />
        <div>
          <p
            className={`font-semibold ${
              isConfirmed ? 'text-green-900' : 'text-yellow-900'
            }`}
          >
            Booking {isConfirmed ? 'Confirmed' : 'Pending'}
          </p>
          <p
            className={`text-sm ${
              isConfirmed ? 'text-green-700' : 'text-yellow-700'
            }`}
          >
            {isConfirmed ? 'Confirmed on' : 'Expected confirmation'}{' '}
            {moment(confirmationDate).format('MMM DD, YYYY')}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default StatusSection;
