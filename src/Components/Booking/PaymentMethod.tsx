import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, Smartphone, AlertCircle } from 'lucide-react';
import { validateCardNumber } from '../../utils/validation';

interface PaymentMethodProps {
  paymentMethod: 'credit_card' | 'upi';
  setPaymentMethod: (method: 'credit_card' | 'upi') => void;
  cardholderName: string;
  setCardholderName: (value: string) => void;
  cardNumber: string;
  setCardNumber: (value: string) => void;
  expiryMonth: number | '';
  setExpiryMonth: (value: number | '') => void;
  expiryYear: number | '';
  setExpiryYear: (value: number | '') => void;
  cvv: string;
  setCvv: (value: string) => void;
  upiId: string;
  setUpiId: (value: string) => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  paymentMethod,
  setPaymentMethod,
  cardholderName,
  setCardholderName,
  cardNumber,
  setCardNumber,
  expiryMonth,
  setExpiryMonth,
  expiryYear,
  setExpiryYear,
  cvv,
  setCvv,
  upiId,
  setUpiId,
}) => {
  const [cardError, setCardError] = React.useState<string>('');
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  const handleCardNumberChange = (value: string) => {
    const cleanedValue = value.replace(/\s/g, '');
    setCardNumber(cleanedValue);
    
    // Validate card number in real-time
    if (cleanedValue) {
      const validation = validateCardNumber(cleanedValue);
      setCardError(validation.isValid ? '' : validation.error);
    } else {
      setCardError('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-lg md:shadow-md md:p-6"
    >
      <h2 className="text-xl font-bold mb-6 text-gray-900">Payment Method</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card Option */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setPaymentMethod('credit_card')}
          className={`p-6 rounded-lg border-2 transition-all ${
            paymentMethod === 'credit_card'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 bg-white hover:border-gray-300'
          }`}
        >
          <div className="flex items-center gap-3">
            <CreditCard
              className={`w-6 h-6 ${
                paymentMethod === 'credit_card'
                  ? 'text-blue-600'
                  : 'text-gray-400'
              }`}
            />
            <span
              className={`font-semibold ${
                paymentMethod === 'credit_card'
                  ? 'text-blue-900'
                  : 'text-gray-700'
              }`}
            >
              Credit Card
            </span>
          </div>
        </motion.button>

        {/* UPI Option */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setPaymentMethod('upi')}
          className={`p-6 rounded-lg border-2 transition-all ${
            paymentMethod === 'upi'
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 bg-white hover:border-gray-300'
          }`}
        >
          <div className="flex items-center gap-3">
            <Smartphone
              className={`w-6 h-6 ${
                paymentMethod === 'upi'
                  ? 'text-blue-600'
                  : 'text-gray-400'
              }`}
            />
            <span
              className={`font-semibold ${
                paymentMethod === 'upi'
                  ? 'text-blue-900'
                  : 'text-gray-700'
              }`}
            >
              UPI
            </span>
          </div>
        </motion.button>
      </div>

      {/* Payment Details */}
      {paymentMethod === 'credit_card' ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-6 pt-6 border-t    space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cardholder Name *
            </label>
            <input
              type="text"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number *
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => handleCardNumberChange(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                cardError ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
            {cardError && (
              <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle size={16} />
                <span>{cardError}</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Month *
              </label>
              <select
                value={expiryMonth}
                onChange={(e) =>
                  setExpiryMonth(e.target.value ? parseInt(e.target.value) : '')
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {String(month).padStart(2, '0')}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year *
              </label>
              <select
                value={expiryYear}
                onChange={(e) =>
                  setExpiryYear(e.target.value ? parseInt(e.target.value) : '')
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV *
              </label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="***"
                maxLength={3}
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-6 pt-6 border-t border-gray-200 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              UPI ID *
            </label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="yourname@upi"
            />
            <p className="text-xs text-gray-500 mt-2">
              ✓ You will receive a UPI request that you can approve from your preferred UPI app.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PaymentMethod;
