import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  CheckCircle,
  Phone,
  Mail,
  Download,
  ArrowRight,
  Hotel,
  Bus,
  Activity,
  DollarSign,
  Users,
} from 'lucide-react';
import moment from 'moment';

interface BookingConfirmationData {
  booking_id: string;
  trip_id: string;
  booking_status: string;
  confirmation_date: string;
  cost_summary: {
    total_amount: number;
    cost_per_person: number;
    discount_amount?: number;
    promo_code?: string;
    currency: string;
  };
  accommodation_booking?: {
    hotel_name: string;
    hotel_address: string;
    check_in_date: string;
    check_out_date: string;
    booking_reference: string;
  };
  transport_bookings?: Array<{
    booking_reference: string;
    from: string;
    to: string;
    departure_date: string;
    departure_time: string;
    mode: string;
  }>;
  activity_bookings?: Array<{
    booking_reference: string;
    activity_name: string;
    date: string;
  }>;
  travelers: Array<{
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  }>;
  payment_summary?: {
    payment_method: string;
    payment_status: string;
    upi_id?: string;
  };
  voucher_url?: string;
  support_phone?: string;
  support_email?: string;
}

const BookingConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState<BookingConfirmationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve booking data from session storage
    const storedData = sessionStorage.getItem('bookingConfirmation');
    if (storedData) {
      try {
        const data = JSON.parse(storedData);
        setBookingData(data);
      } catch (error) {
        console.error('Error parsing booking data:', error);
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin">
          <CheckCircle size={48} className="text-blue-600" />
        </div>
      </div>
    );
  }

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No booking information found</p>
          <button
            onClick={() => navigate('/profile')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Go to Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <CheckCircle size={64} className="text-green-500" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-xl text-gray-600">Your trip is all set. Here's your confirmation details.</p>
        </motion.div>

        {/* Booking Reference & Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Booking Reference</p>
              <p className="text-2xl font-bold text-blue-600">{bookingData.booking_id.substring(0, 13).toUpperCase()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Status</p>
              <div className="inline-flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="text-lg font-semibold text-green-600 capitalize">{bookingData.booking_status}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Confirmation Date</p>
              <p className="text-lg font-semibold text-gray-900">
                {moment(bookingData.confirmation_date).format('DD MMM, YYYY')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cost Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <DollarSign size={24} />
            Total Cost
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Amount:</span>
              <span className="text-2xl font-bold">
                ₹{bookingData.cost_summary.total_amount.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Cost per Person:</span>
              <span>₹{bookingData.cost_summary.cost_per_person.toLocaleString('en-IN')}</span>
            </div>
            {bookingData.cost_summary.discount_amount && (
              <div className="flex justify-between text-sm text-green-200 border-t border-white/20 pt-2 mt-2">
                <span>Discount ({bookingData.cost_summary.promo_code}):</span>
                <span>-₹{bookingData.cost_summary.discount_amount.toLocaleString('en-IN')}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Bookings Details */}
        <div className="space-y-6">
          {/* Accommodation */}
          {bookingData.accommodation_booking && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600"
            >
              <div className="flex items-start gap-4">
                <Hotel size={24} className="text-blue-600 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{bookingData.accommodation_booking.hotel_name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{bookingData.accommodation_booking.hotel_address}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Reference</p>
                      <p className="font-semibold text-gray-900">{bookingData.accommodation_booking.booking_reference}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Check-in</p>
                      <p className="font-semibold text-gray-900">
                        {moment(bookingData.accommodation_booking.check_in_date).format('DD MMM YYYY')}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Check-out</p>
                      <p className="font-semibold text-gray-900">
                        {moment(bookingData.accommodation_booking.check_out_date).format('DD MMM YYYY')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Transport Bookings */}
          {bookingData.transport_bookings && bookingData.transport_bookings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              {bookingData.transport_bookings.map((transport, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
                  <div className="flex items-start gap-4">
                    <Bus size={24} className="text-amber-600 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 capitalize">{transport.mode} Journey</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">From</p>
                          <p className="font-semibold text-gray-900">{transport.from}</p>
                        </div>
                        <ArrowRight size={20} className="text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-600">To</p>
                          <p className="font-semibold text-gray-900">{transport.to}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Reference</p>
                          <p className="font-semibold text-gray-900">{transport.booking_reference}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Departure</p>
                          <p className="font-semibold text-gray-900">
                            {moment(transport.departure_date).format('DD MMM')} at {transport.departure_time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Activities */}
          {bookingData.activity_bookings && bookingData.activity_bookings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              {bookingData.activity_bookings.map((activity, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <div className="flex items-start gap-4">
                    <Activity size={24} className="text-purple-600 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.activity_name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Reference</p>
                          <p className="font-semibold text-gray-900">{activity.booking_reference}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Date</p>
                          <p className="font-semibold text-gray-900">{moment(activity.date).format('DD MMM YYYY')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Traveler Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-lg shadow-md p-6 mt-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Users size={24} />
            Traveler Details
          </h3>
          <div className="space-y-3">
            {bookingData.travelers.map((traveler, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">
                  {traveler.first_name} {traveler.last_name}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={16} />
                    {traveler.email}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={16} />
                    {traveler.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Payment Method */}
        {bookingData.payment_summary && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-lg shadow-md p-6 mt-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Payment Method</p>
                <p className="font-semibold text-gray-900 uppercase">{bookingData.payment_summary.payment_method}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="font-semibold text-green-600 capitalize">{bookingData.payment_summary.payment_status}</p>
                </div>
              </div>
              {bookingData.payment_summary.upi_id && (
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500 mb-1">UPI ID</p>
                  <p className="font-semibold text-gray-900">{bookingData.payment_summary.upi_id}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Support Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-blue-50 rounded-lg p-6 mt-6 border border-blue-200"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-3">Need Help?</h3>
          <div className="space-y-2 text-sm">
            {bookingData.support_phone && (
              <p className="flex items-center gap-2 text-gray-700">
                <Phone size={18} className="text-blue-600" />
                <span>{bookingData.support_phone}</span>
              </p>
            )}
            {bookingData.support_email && (
              <p className="flex items-center gap-2 text-gray-700">
                <Mail size={18} className="text-blue-600" />
                <span>{bookingData.support_email}</span>
              </p>
            )}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row gap-4 mt-8"
        >
          {bookingData.voucher_url && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={bookingData.voucher_url}
              download
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              <Download size={20} />
              Download Voucher
            </motion.a>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/profile')}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition"
          >
            Go to My Trips
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
