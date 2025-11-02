import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'motion/react';
import { MapPin, Loader } from 'lucide-react';
import { UsetInfo } from '../../Store/user-slice';
import { apiCaller } from '../../utils/apiCall';
import BookingCard from './components/BookingCard';
import BookingDetailsModal from './components/BookingDetailsModal';

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

interface BookingsData {
  bookings: Booking[];
  total: number;
}

interface BookingsResponse {
  success: boolean;
  data: BookingsData;
  message?: string;
}

const MyTrips: React.FC = () => {
  const navigate = useNavigate();
  const userInfo = useSelector(UsetInfo);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const fetchUserBookings = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiCaller<BookingsResponse>(
        '/api/v1/bookings/',
        'GET',
        {},
        {
          Authorization: `Bearer ${userInfo.access_token}`,
        }
      );

      if (response.success && response.data) {
        console.log('Fetched Bookings:', response.data);
        setBookings(response.data.bookings);
      } else {
        setError(response.message || 'Failed to load bookings');
      }
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError(err instanceof Error ? err.message : 'Failed to load bookings');
    } finally {
      setLoading(false);
    }
  }, [userInfo.access_token]);

  useEffect(() => {
    fetchUserBookings();
  }, [fetchUserBookings]);

  const handleViewDetails = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowDetailsModal(true);
  };

  const handleDownloadVoucher = (voucherUrl?: string) => {
    if (voucherUrl) {
      window.open(voucherUrl, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-gradient-to-br  p-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              
              <div>
                <h1 className="text-4xl font-bold text-gray-900">My Trips</h1>
                <p className="text-gray-600 mt-1">Manage your bookings and itineraries</p>
              </div>
            </div>
            
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <Loader size={48} className="text-blue-600 animate-spin" />
            <p className="text-gray-600 mt-4">Loading your trips...</p>
          </motion.div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6"
          >
            <p className="text-red-800 font-medium">{error}</p>
            <button
              onClick={() => fetchUserBookings()}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && !error && bookings.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <MapPin className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No trips booked yet</h3>
            <p className="text-gray-600 mb-6">Start planning your next adventure!</p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Book Your First Trip
            </button>
          </motion.div>
        )}

        {/* Bookings Grid */}
        {!loading && !error && bookings.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {bookings.map((booking, index) => (
              <BookingCard
                key={booking.booking_id}
                booking={booking}
                index={index}
                onViewDetails={handleViewDetails}
                onDownloadVoucher={handleDownloadVoucher}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Details Modal */}
      <BookingDetailsModal
        isOpen={showDetailsModal}
        booking={selectedBooking}
        onClose={() => setShowDetailsModal(false)}
        onDownloadVoucher={handleDownloadVoucher}
      />
    </motion.div>
  );
};

export default MyTrips;
