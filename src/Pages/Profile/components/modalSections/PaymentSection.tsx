import React from 'react';
import { motion } from 'motion/react';

interface PaymentSummary {
  payment_method?: string;
  transaction_id: string;
  amount?: number;
}

interface PaymentSectionProps {
  payment: PaymentSummary;
  totalAmount?: number;
  delay?: number;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({
  payment,
  totalAmount,
  delay = 0.5,
}) => {
  if (!payment) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4">Payment</h3>
      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Payment Method</span>
          <span className="font-medium text-gray-900">
            {payment.payment_method?.toUpperCase() || 'N/A'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Transaction ID</span>
          <span className="font-medium text-gray-900 font-mono text-sm">
            {payment.transaction_id}
          </span>
        </div>
        <div className="flex justify-between pt-3 border-t">
          <span className="font-semibold text-gray-900">Amount Paid</span>
          <span className="font-bold text-blue-600 text-lg">
            ₹{(payment.amount || totalAmount || 0).toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentSection;
