import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { validateEmail, validatePhone } from '../../utils/validation';

export interface TravelerDetailsType {
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

interface TravelerDetailsProps {
  travelers: TravelerDetailsType[];
  expandedTraveler: number | null;
  setExpandedTraveler: (index: number | null) => void;
  onTravelerChange: (
    index: number,
    field: keyof TravelerDetailsType,
    value: string | boolean
  ) => void;
}

interface ValidationErrors {
  [key: number]: {
    email?: string;
    phone?: string;
  };
}

const TravelerDetails: React.FC<TravelerDetailsProps> = ({
  travelers,
  expandedTraveler,
  setExpandedTraveler,
  onTravelerChange,
}) => {
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validateField = (index: number, field: 'email' | 'phone', value: string) => {
    const validation =
      field === 'email' ? validateEmail(value) : validatePhone(value);

    setValidationErrors((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: validation.error,
      },
    }));
  };

  const handleTravelerChange = (
    index: number,
    field: keyof TravelerDetailsType,
    value: string | boolean
  ) => {
    onTravelerChange(index, field, value);

    // Validate email and phone fields on change
    if (field === 'email' && typeof value === 'string') {
      validateField(index, 'email', value);
    } else if (field === 'phone' && typeof value === 'string') {
      validateField(index, 'phone', value);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="md:bg-white bg-white rounded-lg md:shadow-md md:p-6"
    >
      <h2 className="text-xl font-bold mb-2  md:mb-6 text-gray-900">Traveler Details</h2>
      <div className="space-y-4">
        {travelers.map((traveler, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
          >
            <button
              onClick={() =>
                setExpandedTraveler(
                  expandedTraveler === index ? null : index
                )
              }
              className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {traveler.first_name
                      ? `${traveler.first_name} ${traveler.last_name}`
                      : `Traveler ${index + 1}`}
                  </p>
                  {traveler.is_primary && (
                    <p className="text-xs text-blue-600 font-medium">
                      Primary Contact
                    </p>
                  )}
                </div>
              </div>
              {expandedTraveler === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {expandedTraveler === index && (
              <div className="px-6 py-6 space-y-4 bg-white border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <select
                      value={traveler.title}
                      onChange={(e) =>
                        onTravelerChange(index, 'title', e.target.value)
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Ms</option>
                      <option>Dr</option>
                    </select>
                  </div>

                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={traveler.first_name}
                      onChange={(e) =>
                        onTravelerChange(
                          index,
                          'first_name',
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={traveler.last_name}
                      onChange={(e) =>
                        onTravelerChange(
                          index,
                          'last_name',
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={traveler.date_of_birth}
                      onChange={(e) =>
                        onTravelerChange(
                          index,
                          'date_of_birth',
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <select
                      value={traveler.gender}
                      onChange={(e) =>
                        onTravelerChange(index, 'gender', e.target.value)
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Nationality */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality
                    </label>
                    <input
                      type="text"
                      value={traveler.nationality}
                      onChange={(e) =>
                        onTravelerChange(
                          index,
                          'nationality',
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Indian"
                    />
                  </div>

                  {/* Aadhar No */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Aadhar No
                    </label>
                    <input
                      type="text"
                      value={traveler.aadhar_no}
                      onChange={(e) =>
                        onTravelerChange(
                          index,
                          'aadhar_no',
                          e.target.value
                        )
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="1234-5678-9012"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={traveler.email}
                      onChange={(e) =>
                        handleTravelerChange(index, 'email', e.target.value)
                      }
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                        validationErrors[index]?.email
                          ? 'border-red-500 focus:ring-red-500 bg-red-50'
                          : 'border-gray-300 focus:ring-blue-500'
                      }`}
                      placeholder="john@example.com"
                    />
                    {validationErrors[index]?.email && (
                      <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{validationErrors[index].email}</span>
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={traveler.phone}
                      onChange={(e) =>
                        handleTravelerChange(index, 'phone', e.target.value)
                      }
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                        validationErrors[index]?.phone
                          ? 'border-red-500 focus:ring-red-500 bg-red-50'
                          : 'border-gray-300 focus:ring-blue-500'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {validationErrors[index]?.phone && (
                      <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{validationErrors[index].phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TravelerDetails;
