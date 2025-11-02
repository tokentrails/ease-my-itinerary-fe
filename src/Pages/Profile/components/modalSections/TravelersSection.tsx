import React from 'react';
import { motion } from 'motion/react';

interface Traveler {
  title: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone?: string;
}

interface TravelersSectionProps {
  travelers: Traveler[];
  delay?: number;
}

const TravelersSection: React.FC<TravelersSectionProps> = ({
  travelers,
  delay = 0.6,
}) => {
  if (!travelers || travelers.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4">Travelers</h3>
      <div className="space-y-3">
        {travelers.map((traveler, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-3">
            <p className="font-semibold text-gray-900">
              {traveler.title} {traveler.first_name} {traveler.last_name}
            </p>
            {traveler.email && (
              <p className="text-sm text-gray-600">{traveler.email}</p>
            )}
            {traveler.phone && (
              <p className="text-sm text-gray-600">{traveler.phone}</p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TravelersSection;
