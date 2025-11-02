import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiCaller } from '../../utils/apiCall';
import type { ConfirmBookingPayload, ConfirmBookingResponse, PaymentDetails } from '../../types/booking';
import { showSuccessToast, showErrorToast } from '../../utils/toastHelper';
import { validateEmail, validatePhone } from '../../utils/validation';
import { setBookingData } from '../../Store/itinerary-slice';
import type { Trip } from '../../Helper/ApiResponseInterface';
import BookingHeader from './BookingHeader';
import TravelerDetails from './TravelerDetails';
import type { TravelerDetailsType } from './TravelerDetails';
import PaymentMethod from './PaymentMethod';
import SummaryCard from './SummaryCard';

interface BookingPageProps {
  trip: Trip;
}

const BookingPage: React.FC<BookingPageProps> = ({ trip }) => {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'upi'>('credit_card');
  const [expandedTraveler, setExpandedTraveler] = useState<number | null>(0);
  const [upiId, setUpiId] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  // Credit Card State
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState<number | ''>('');
  const [expiryYear, setExpiryYear] = useState<number | ''>('');
  const [cvv, setCvv] = useState('');
  
  const [travelers, setTravelers] = useState<TravelerDetailsType[]>(
    Array(trip?.traveler_count || 1)
      .fill(null)
      .map((_, index) => ({
        title: 'Mr',
        first_name: '',
        last_name: '',
        date_of_birth: '',
        gender: 'male',
        nationality: 'Indian',
        aadhar_no: '',
        email: '',
        phone: '',
        is_primary: index === 0,
      }))
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTravelerChange = (
    index: number,
    field: keyof TravelerDetailsType,
    value: string | boolean
  ) => {
    const updatedTravelers = [...travelers];
    updatedTravelers[index] = {
      ...updatedTravelers[index],
      [field]: value,
    };
    setTravelers(updatedTravelers);
  };

  const calculateCostSummary = () => {
    const basePrice = trip?.total_cost || 0;
    const taxes = basePrice * 0.18; // 18% GST
    const totalCost = basePrice + taxes;

    return {
      basePrice,
      taxes,
      totalCost,
    };
  };

  const { basePrice, taxes, totalCost } = calculateCostSummary();

  const handleBookNow = async () => {
    if (!acceptTerms) {
      showErrorToast('Please accept the terms and conditions');
      return;
    }

    setIsSubmitting(true);

    try {
      // Build payment details based on payment method
      const paymentDetails: PaymentDetails = 
        paymentMethod === 'upi'
          ? { upi_id: upiId }
          : {
              cardholder_name: cardholderName,
              card_number: cardNumber,
              expiry_month: typeof expiryMonth === 'number' ? expiryMonth : 0,
              expiry_year: typeof expiryYear === 'number' ? expiryYear : 0,
              cvv: cvv,
            };

      const bookingPayload: ConfirmBookingPayload = {
        trip_id: trip?.id,
        payment_method: paymentMethod,
        payment_details: paymentDetails,
        traveler_details: travelers,
        contact_info: {
          email: travelers[0]?.email || '',
          phone: travelers[0]?.phone || '',
          country: 'India',
        },
        accept_terms: acceptTerms,
      };

      console.log('Booking Payload:', bookingPayload);

      const response = await apiCaller<ConfirmBookingResponse>(
        '/api/v1/bookings/confirm',
        'POST',
        bookingPayload
      );

      if (response.success && response.data) {
        showSuccessToast('Booking confirmed successfully!');
        console.log('Booking Confirmation:', response.data);
        
        // Dispatch booking data to Redux store
        dispatch(setBookingData(response.data));
        
        // Store booking data in session storage for confirmation page
        sessionStorage.setItem('bookingConfirmation', JSON.stringify(response.data));
        
        // Navigate to itinerary page to show confirmation modal
        setTimeout(() => {
          const tripId = response.data?.trip_id;
          if (tripId) {
            window.location.href = `/itinerary?id=${tripId}`;
          } else {
            window.location.href = '/itinerary';
          }
        }, 2000);
      } else {
        showErrorToast(response.message || 'Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to complete booking. Please try again.';
      showErrorToast(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = Boolean(
    travelers.every((t) => {
      // Check required fields
      if (!t.first_name || !t.last_name || !t.phone || !t.email) {
        return false;
      }
      // Validate email format
      const emailValidation = validateEmail(t.email);
      if (!emailValidation.isValid) {
        return false;
      }
      // Validate phone format
      const phoneValidation = validatePhone(t.phone);
      if (!phoneValidation.isValid) {
        return false;
      }
      return true;
    }) &&
    acceptTerms &&
    (paymentMethod === 'credit_card' 
      ? (cardholderName && cardNumber && expiryMonth && expiryYear && cvv)
      : (paymentMethod === 'upi' && upiId))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <BookingHeader trip={trip} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <TravelerDetails
              travelers={travelers}
              expandedTraveler={expandedTraveler}
              setExpandedTraveler={setExpandedTraveler}
              onTravelerChange={handleTravelerChange}
            />
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              cardholderName={cardholderName}
              setCardholderName={setCardholderName}
              cardNumber={cardNumber}
              setCardNumber={setCardNumber}
              expiryMonth={expiryMonth}
              setExpiryMonth={setExpiryMonth}
              expiryYear={expiryYear}
              setExpiryYear={setExpiryYear}
              cvv={cvv}
              setCvv={setCvv}
              upiId={upiId}
              setUpiId={setUpiId}
            />
          </div>

          {/* Sidebar */}
          <SummaryCard
            trip={trip}
            basePrice={basePrice}
            taxes={taxes}
            totalCost={totalCost}
            onBookNow={handleBookNow}
            isSubmitting={isSubmitting}
            isFormValid={isFormValid}
            acceptTerms={acceptTerms}
            onAcceptTermsChange={setAcceptTerms}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
