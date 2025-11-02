import React from 'react';
import { motion } from 'motion/react';
import moment from 'moment';

interface TransportBooking {
  booking_reference: string;
  mode: string;
  from: string;
  to: string;
  departure_date: string;
  total_cost?: number;
}

interface TransportSectionProps {
  transports: TransportBooking[];
  delay?: number;
}

const TransportSection: React.FC<TransportSectionProps> = ({
  transports,
  delay = 0.3,
}) => {
  if (!transports || transports.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4">Transport</h3>
      <div className="space-y-3">
        {transports.map((transport, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-gray-900">
                {transport.mode?.toUpperCase()}
              </p>
              <p className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">
                {transport.booking_reference}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-gray-500 uppercase">From</p>
                <p className="text-gray-900 font-medium">{transport.from}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">To</p>
                <p className="text-gray-900 font-medium">{transport.to}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Departure</p>
                <p className="text-gray-900 font-medium">
                  {moment(transport.departure_date).format('MMM DD, HH:mm')}
                </p>
              </div>
              {transport.total_cost && (
                <div>
                  <p className="text-xs text-gray-500 uppercase">Cost</p>
                  <p className="text-gray-900 font-medium">
                    ₹{transport.total_cost.toLocaleString('en-IN')}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TransportSection;
