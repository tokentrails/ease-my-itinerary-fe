import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, ExternalLink } from 'lucide-react';
import moment from 'moment';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareData: {
    id: string;
    share_link: string;
    share_code: string;
    permission: string;
    expires_at: string;
    created_at: string;
  } | null;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, shareData }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!shareData) return null;

  const shareUrl = `${window.location.origin}/share/${shareData.share_code}`;
  const expiryTime = moment(shareData.expires_at).format('MMM DD, YYYY HH:mm');
  const expiresIn = moment(shareData.expires_at).fromNow();

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Share Itinerary</h2>
                <button
                  onClick={onClose}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Share Code */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Share Code</label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <p className="font-mono text-lg font-bold text-gray-900">
                        {shareData.share_code}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(shareData.share_code, 'code')}
                      className="p-3 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {copiedField === 'code' ? (
                        <Check size={20} className="text-green-600" />
                      ) : (
                        <Copy size={20} className="text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Share URL */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Share Link</label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-50 rounded-lg p-3 border border-gray-200 overflow-hidden">
                      <p className="text-sm text-gray-700 truncate break-all">
                        {shareUrl}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(shareUrl, 'link')}
                      className="p-3 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                    >
                      {copiedField === 'link' ? (
                        <Check size={20} className="text-green-600" />
                      ) : (
                        <Copy size={20} className="text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Permission and Expiry Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                      Permission
                    </p>
                    <p className="text-sm font-bold text-blue-700 capitalize">
                      {shareData.permission}
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                      Expires
                    </p>
                    <p className="text-sm font-bold text-blue-700">
                      {expiresIn}
                    </p>
                  </div>
                </div>

                {/* Expiry timestamp */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-xs text-gray-600 uppercase font-semibold mb-2">
                    Expiry Date & Time
                  </p>
                  <p className="text-sm text-gray-700">{expiryTime}</p>
                </div>

                {/* Open Link Button */}
                <a
                  href={shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105"
                >
                  <ExternalLink size={20} />
                  Open Share Link
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShareModal;
