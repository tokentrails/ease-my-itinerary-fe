import React from 'react';
import { motion } from 'motion/react';
import moment from 'moment';

interface ActivityBooking {
  booking_reference: string;
  activity_name: string;
  date: string;
  duration: string;
  location: string;
  participant_count: number;
  total_cost?: number;
}

interface ActivitiesSectionProps {
  activities: ActivityBooking[];
  delay?: number;
}

const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  activities,
  delay = 0.4,
}) => {
  if (!activities || activities.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4"> Activities</h3>
      <div className="space-y-3">
        {activities.map((activity, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-gray-900">
                {activity.activity_name}
              </p>
              <p className="text-xs font-mono text-purple-600 bg-purple-50 px-2 py-1 rounded">
                {activity.booking_reference}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs text-gray-500 uppercase">Date</p>
                <p className="text-gray-900 font-medium">
                  {moment(activity.date).format('MMM DD, YYYY')}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Duration</p>
                <p className="text-gray-900 font-medium">{activity.duration}</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-gray-500 uppercase">Location</p>
                <p className="text-gray-900 font-medium">{activity.location}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Participants</p>
                <p className="text-gray-900 font-medium">
                  {activity.participant_count}
                </p>
              </div>
              {activity.total_cost && (
                <div>
                  <p className="text-xs text-gray-500 uppercase">Cost</p>
                  <p className="text-gray-900 font-medium">
                    ₹{activity.total_cost.toLocaleString('en-IN')}
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

export default ActivitiesSection;
