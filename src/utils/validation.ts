// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation regex (supports international format with + and numbers)
const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const validateEmail = (email: string): { isValid: boolean; error: string } => {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  return { isValid: true, error: '' };
};

export const validatePhone = (phone: string): { isValid: boolean; error: string } => {
  if (!phone) {
    return { isValid: false, error: 'Phone number is required' };
  }

  // Remove spaces, dashes, and parentheses for checking digit count
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.length < 10) {
    return { isValid: false, error: 'Phone number must be at least 10 digits' };
  }

  if (digitsOnly.length > 15) {
    return { isValid: false, error: 'Phone number must not exceed 15 digits' };
  }

  if (!PHONE_REGEX.test(phone)) {
    return { isValid: false, error: 'Please enter a valid phone number' };
  }

  return { isValid: true, error: '' };
};

export const validateCardNumber = (cardNumber: string): { isValid: boolean; error: string } => {
  if (!cardNumber) {
    return { isValid: false, error: 'Card number is required' };
  }

  // Remove spaces and dashes
  const digitsOnly = cardNumber.replace(/\D/g, '');

  // Check if card number is between 13 and 19 digits (valid for most card types)
  if (digitsOnly.length < 13 || digitsOnly.length > 19) {
    return { isValid: false, error: 'Card number must be between 13 and 19 digits' };
  }

  // Luhn algorithm validation
  if (!luhnCheck(digitsOnly)) {
    return { isValid: false, error: 'Invalid card number' };
  }

  return { isValid: true, error: '' };
};

// Luhn algorithm for card number validation
const luhnCheck = (cardNumber: string): boolean => {
  let sum = 0;
  let isEven = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

export const validateTravelerDetails = (traveler: {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!traveler.first_name?.trim()) {
    errors.first_name = 'First name is required';
  }

  if (!traveler.last_name?.trim()) {
    errors.last_name = 'Last name is required';
  }

  const emailValidation = validateEmail(traveler.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error;
  }

  const phoneValidation = validatePhone(traveler.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.error;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
