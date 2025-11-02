import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import StatusSection from './modalSections/StatusSection';
import AccommodationSection from './modalSections/AccommodationSection';
import TransportSection from './modalSections/TransportSection';
import ActivitiesSection from './modalSections/ActivitiesSection';
import PaymentSection from './modalSections/PaymentSection';
import TravelersSection from './modalSections/TravelersSection';
import CostSummarySection from './modalSections/CostSummarySection';
import ETicketSection from './modalSections/ETicketSection';

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

interface BookingDetailsModalProps {
  isOpen: boolean;
  booking: Booking | null;
  onClose: () => void;
  onDownloadVoucher: (url?: string) => void;
}

const BookingDetailsModal: React.FC<BookingDetailsModalProps> = ({
  isOpen,
  booking,
  onClose,
  onDownloadVoucher,
}) => {
  if (!booking) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 flex items-center justify-between sticky top-0">
              <div>
                <h2 className="text-2xl font-bold">Booking Details</h2>
                <p className="text-blue-100 text-sm mt-1">{booking.booking_id}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Status Section */}
              <StatusSection
                confirmationDate={booking.confirmation_date}
                status={booking.booking_status}
                delay={0.1}
              />

              {/* Accommodation Section */}
              {booking.accommodation_booking && (
                <AccommodationSection
                  accommodation={booking.accommodation_booking}
                  delay={0.2}
                />
              )}

              {/* Transport Section */}
              {booking.transport_bookings && booking.transport_bookings.length > 0 && (
                <TransportSection
                  transports={booking.transport_bookings}
                  delay={0.3}
                />
              )}

              {/* Activities Section */}
              {booking.activity_bookings && booking.activity_bookings.length > 0 && (
                <ActivitiesSection
                  activities={booking.activity_bookings}
                  delay={0.4}
                />
              )}

              {/* Payment Section */}
              {booking.payment_summary && (
                <PaymentSection
                  payment={booking.payment_summary}
                  totalAmount={booking.cost_summary.total_amount}
                  delay={0.5}
                />
              )}

              {/* Travelers Section */}
              {booking.travelers && booking.travelers.length > 0 && (
                <TravelersSection travelers={booking.travelers} delay={0.6} />
              )}

              {/* Cost Summary Section */}
              <CostSummarySection
                costSummary={booking.cost_summary}
                delay={0.7}
              />

              {/* E-Ticket Section */}
              {booking.e_tickets && booking.e_tickets.length > 0 ? (
                <ETicketSection eTickets={booking.e_tickets} delay={0.8} />
              ) : booking.qr_code ? (
                <ETicketSection eTickets={[{
                  ticket_id: booking.booking_id,
                  ticket_type: 'booking',
                  passenger_name: 'Booking',
                  booking_reference: booking.booking_id,
                  qr_code: booking.qr_code,
                  download_url: booking.voucher_url,
                }]} delay={0.8} />
              ) : null}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                {booking.voucher_url && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onDownloadVoucher(booking.voucher_url)}
                    className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Download Voucher
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="flex-1 px-4 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingDetailsModal;
