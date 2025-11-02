import React from 'react';
import { motion } from 'motion/react';
import { Eye, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

interface CostSummary {
  total_amount: number;
  discount_amount: number;
  promo_code?: string;
  traveler_count: number;
  accommodation_cost?: number;
  transport_cost?: number;
  activity_cost?: number;
  meal_cost?: number;
}

interface AccommodationBooking {
  hotel_name: string;
  check_in_date: string;
  check_out_date: string;
  room_type: string;
}

interface TransportBooking {
  booking_reference: string;
  mode: string;
  from: string;
  to: string;
  departure_date: string;
  total_cost?: number;
}

interface ActivityBooking {
  booking_reference: string;
  activity_name: string;
  date: string;
  duration: string;
  location: string;
  participant_count: number;
  total_cost?: number;
}

interface PaymentSummary {
  payment_method?: string;
  transaction_id: string;
  amount?: number;
}

interface Traveler {
  title: string;
  first_name: string;
  last_name: string;
  email?: string;
  phone?: string;
}

interface ETicket {
  ticket_id: string;
  ticket_type: string;
  passenger_name: string;
  pnr?: string;
  booking_reference: string;
  qr_code: string;
  barcode_data?: string;
  download_url?: string;
}

interface Booking {
  booking_id: string;
  trip_id: string;
  booking_status: string;
  confirmation_date: string;
  cost_summary: CostSummary;
  accommodation_booking?: AccommodationBooking;
  transport_bookings?: TransportBooking[];
  activity_bookings?: ActivityBooking[];
  payment_summary?: PaymentSummary;
  travelers?: Traveler[];
  voucher_url?: string;
  qr_code?: string;
  e_tickets?: ETicket[];
}

interface BookingCardProps {
  booking: Booking;
  index: number;
  onViewDetails: (booking: Booking) => void;
  onDownloadVoucher: (url?: string) => void;
}

const BookingCard: React.FC<BookingCardProps> = ({
  booking,
  index,
  onViewDetails,
  onDownloadVoucher,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
    >
      {/* Booking Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-mono text-blue-100 mb-1">Booking ID</h3>
            <h3 className="text-lg font-bold mb-2">
              {booking.booking_id.slice(0, 8).toUpperCase()}...
            </h3>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              booking.booking_status === 'confirmed'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {booking.booking_status?.charAt(0).toUpperCase() +
              booking.booking_status?.slice(1) ||
              'Pending'}
          </span>
        </div>
      </div>

      {/* Booking Details */}
      <div className="p-4 space-y-3">
        {/* Hotel */}
        {booking.accommodation_booking && (
          <div className="pb-3 border-b border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              Accommodation
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {booking.accommodation_booking.hotel_name}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              {moment(booking.accommodation_booking.check_in_date).format(
                'MMM DD'
              )}{' '}
              -{' '}
              {moment(booking.accommodation_booking.check_out_date).format(
                'MMM DD, YYYY'
              )}
            </p>
          </div>
        )}

        {/* Cost */}
        <div className="pb-3 border-b border-gray-200">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Total Cost
          </p>
          <p className="text-2xl font-bold text-blue-600">
            ₹
            {booking.cost_summary.total_amount.toLocaleString('en-IN', {
              maximumFractionDigits: 0,
            })}
          </p>
          {booking.cost_summary.discount_amount > 0 && (
            <p className="text-xs text-green-600 mt-1">
              Saved ₹
              {booking.cost_summary.discount_amount.toLocaleString('en-IN', {
                maximumFractionDigits: 0,
              })}
            </p>
          )}
        </div>

        {/* Travelers */}
        <div className="pb-3">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Travelers
          </p>
          <p className="text-sm font-medium text-gray-900">
            {booking.cost_summary.traveler_count} person
            {booking.cost_summary.traveler_count > 1 ? 's' : ''}
          </p>
        </div>

        {/* Confirmation Date */}
        <div className="pb-3">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Confirmed On
          </p>
          <p className="text-sm font-medium text-gray-900">
            {moment(booking.confirmation_date).format('MMM DD, YYYY')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-3 border-t border-gray-200">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onViewDetails(booking)}
            className="flex-1 px-3 py-2  font-medium text-sm cursor-pointer transition-colors flex items-center justify-center gap-2"
          >
            <Eye size={16} />
            Details
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/itinerary?id=${booking.trip_id}`)}
            className="flex-1 px-3 py-2  rounded-lg font-medium  cursor-pointer text-sm 0 transition-colors flex items-center justify-center gap-2"
          >
            <Eye size={16} />
            Itinerary
          </motion.button>
          {booking.voucher_url && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onDownloadVoucher(booking.voucher_url)}
              className="flex-1 px-3 py-2  rounded-lg font-medium cursor-pointer text-sm 0 transition-colors flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Voucher
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BookingCard;
