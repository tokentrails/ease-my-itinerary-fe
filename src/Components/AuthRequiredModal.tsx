import { motion } from "motion/react";
import { LogIn, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AuthRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature?: string;
}

const AuthRequiredModal = ({
  isOpen,
  onClose,
  feature = "this feature",
}: AuthRequiredModalProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLoginClick = () => {
    onClose();
    navigate("/login");
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0  bg-opacity-40 backdrop-blur-md z-40"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 w-[90%] max-w-md overflow-hidden"
      >
        {/* Content */}
        <div className="p-6 md:p-8 text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: "#eaf3ff" }}
          >
            <AlertCircle size={32} color="#2093EF" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Login Required
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            You need to be logged in to access {feature}. Please log in to
            continue with your itinerary planning.
          </p>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-900">
              ✓ Create personalized itineraries
            </p>
            <p className="text-sm text-blue-900">
              ✓ Generate AI-powered travel plans
            </p>
            <p className="text-sm text-blue-900">✓ Chat with AI assistant</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLoginClick}
              className="flex-1 px-4 py-3 rounded-lg text-white font-medium transition-colors flex items-center justify-center gap-2"
              style={{ backgroundColor: "#2093EF" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#1678D4";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#2093EF";
              }}
            >
              <LogIn size={18} />
              Go to Login
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AuthRequiredModal;
