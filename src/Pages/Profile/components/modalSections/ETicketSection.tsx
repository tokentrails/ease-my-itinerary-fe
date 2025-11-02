import React from 'react';
import { motion } from 'motion/react';


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

interface ETicketSectionProps {
  eTickets?: ETicket[];
  delay?: number;
}

const ETicketSection: React.FC<ETicketSectionProps> = ({
  eTickets,
  delay = 0.8,
}) => {
  if (!eTickets || eTickets.length === 0) return null;

  

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4">🎫 E-Tickets</h3>
      <div className="space-y-4">
        {eTickets.map((ticket, idx) => (
          <motion.div
            key={ticket.ticket_id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + idx * 0.1 }}
            className="bg-gradient-to-r rounded-lg p-4  "
          >
            {/* Ticket Header */}
            <div className="flex items-start justify-between mb-4 pb-4 border-b-2 border-dashed border-blue-200">
              <div className="flex items-center gap-3">

                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    {ticket.ticket_type} Ticket
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {ticket.passenger_name}
                  </p>
                </div>
              </div>
              <span className="px-3 py-1rounded-full text-xs font-medium">
                {ticket.ticket_id}
              </span>
            </div>

            {/* Ticket Details */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Booking Reference</p>
                <p className="text-sm font-mono font-semibold text-gray-900">
                  {ticket.booking_reference}
                </p>
              </div>
              {ticket.pnr && (
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">PNR</p>
                  <p className="text-sm font-mono font-semibold text-gray-900">
                    {ticket.pnr}
                  </p>
                </div>
              )}
            </div>

            {/* QR Code Display */}
            {ticket.qr_code && (
              <div className="flex flex-col items-center py-4 mb-4  border-dashed">
                <p className="text-xs text-gray-500 uppercase mb-3 font-semibold">
                  Scan for Details
                </p>
                <div className="bg-white p-3 rounded-lg border-2  shadow-md">
                  {ticket.qr_code.startsWith('data:') || ticket.qr_code.startsWith('http') ? (
                    <img
                      src={ticket.qr_code}
                      alt={`E-Ticket QR Code for ${ticket.passenger_name}`}
                      className="w-40 h-40 object-contain"
                    />
                  ) : (
                    <div className="w-40 h-40 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
                      QR Code
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-600 mt-3 text-center font-medium">
                  Present this QR code at check-in
                </p>
              </div>
            )}


          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ETicketSection;
