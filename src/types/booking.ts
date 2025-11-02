/* eslint-disable @typescript-eslint/no-explicit-any */

export interface TravelerDetails {
  title: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  nationality: string;
  aadhar_no: string;
  email: string;
  phone: string;
  is_primary: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  country: string;
}

export interface PaymentDetails {
  upi_id?: string;
  cardholder_name?: string;
  card_number?: string;
  expiry_month?: number;
  expiry_year?: number;
  cvv?: string;
}

export interface ConfirmBookingPayload {
  trip_id: string;
  payment_method: 'credit_card' | 'upi';
  payment_details: PaymentDetails;
  traveler_details: TravelerDetails[];
  contact_info: ContactInfo;
  accept_terms: boolean;
}

// Response Types
export interface CostSummary {
  accommodation_cost: number;
  transport_cost: number;
  activity_cost: number;
  meal_cost: number;
  taxes_and_fees: number;
  service_charge: number;
  convenience_fee: number;
  discount_amount: number;
  promo_code: string;
  sub_total: number;
  total_amount: number;
  amount_paid: number;
  amount_due: number;
  cost_per_person: number;
  traveler_count: number;
  currency: string;
}

export interface AccommodationBooking {
  booking_reference: string;
  hotel_name: string;
  hotel_address: string;
  room_type: string;
  room_count: number;
  check_in_date: string;
  check_out_date: string;
  nights: number;
  meal_plan: string;
  total_cost: number;
  guest_names: string[];
  check_in_time: string;
  check_out_time: string;
  amenities: any;
  hotel_contact: string;
  hotel_email: string;
  cancellation_policy: string;
}

export interface TransportBooking {
  booking_reference: string;
  mode: string;
  type: string;
  from: string;
  to: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  duration: string;
  carrier: string;
  flight_number?: string;
  class: string;
  seat_numbers: string[];
  pnr: string;
  total_cost: number;
  cost_per_person: number;
  passenger_names: string[];
  baggage: string;
  terminal_info?: string;
  gate_info?: string;
  cancellation_policy: string;
}

export interface ActivityBooking {
  booking_reference: string;
  activity_name: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  participant_count: number;
  participant_names: string[];
  total_cost: number;
  cost_per_person: number;
  meeting_point: string;
  contact_person: string;
  contact_phone: string;
  special_instructions: string;
  what_to_carry: string[];
  cancellation_policy: string;
}

export interface PaymentSummary {
  payment_id: string;
  transaction_id: string;
  payment_method: string;
  payment_status: string;
  payment_date: string;
  amount: number;
  currency: string;
  upi_id?: string;
  receipt_url: string;
}

export interface ETicket {
  ticket_id: string;
  ticket_type: string;
  passenger_name: string;
  pnr: string;
  booking_reference: string;
  qr_code: string;
  barcode_data: string;
  download_url: string;
}

export interface Traveler {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  nationality: string;
  title: string;
  gender: string;
  email: string;
  phone: string;
  is_primary: boolean;
}

export interface BookingConfirmationData {
  booking_id: string;
  trip_id: string;
  booking_status: string;
  confirmation_date: string;
  cost_summary: CostSummary;
  accommodation_booking: AccommodationBooking;
  transport_bookings: TransportBooking[];
  activity_bookings: ActivityBooking[];
  payment_summary: PaymentSummary;
  travelers: Traveler[];
  voucher_url: string;
  e_tickets: ETicket[];
  contact_info: ContactInfo;
  support_phone: string;
  support_email: string;
  terms: string[];
  cancellation_policy: string;
  important_notes: string[];
}

export interface ConfirmBookingResponse {
  success: boolean;
  message: string;
  data: BookingConfirmationData;
  timestamp: string;
}
