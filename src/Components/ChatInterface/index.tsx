import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { UsetInfo } from "../../Store/user-slice";
import DOMPurify from "dompurify";
import { marked } from "marked";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  htmlContent?: string;
}

interface ChatInterfaceProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  isOpen = false,
  onClose,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const userInfo = useSelector(UsetInfo);

  // Convert markdown to HTML
  const convertMarkdownToHtml = async (text: string): Promise<string> => {
    const html = await marked(text);
    return DOMPurify.sanitize(html);
  };

  // Initialize session ID on component mount
  useEffect(() => {
    setSessionId(uuidv4());
  }, []);

  // Reset session on modal close
  const handleClose = () => {
    setIsModalOpen(false);
    setSessionId(uuidv4()); // Generate new session for next conversation
    setMessages([]); // Clear messages
    onClose?.();
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);

    // Auto-grow textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      const maxHeight = 500; // Maximum 5 lines
      textareaRef.current.style.height =
        Math.min(scrollHeight, maxHeight) + "px";
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const payload = {
        session_id: sessionId,
        message: inputValue,
        event_type: "user_message",
        payload: {
          context: {
            channel: "web",
            locale: "en-IN",
          },
        },
        metadata: {
          debug: false,
          client_version: "web-1.0.0",
        },
      };

      const response = await fetch(
        "https://ease-my-itinerary-703138722646.us-central1.run.app/api/v1/agent/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.access_token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data = await response.json();

      const aiMessageText =
        data.data?.text ||
        "Sorry, I could not understand that. Could you please rephrase?";
      const htmlContent = await convertMarkdownToHtml(aiMessageText);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiMessageText,
        sender: "ai",
        timestamp: new Date(),
        htmlContent,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat API error:", error);
      const errorText = "Sorry, I encountered an error. Please try again.";
      const htmlContent = await convertMarkdownToHtml(errorText);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        sender: "ai",
        timestamp: new Date(),
        htmlContent,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 1 }}
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 p-4 text-white rounded-full shadow-lg z-40 transition-all ${
          isModalOpen ? "hidden" : "flex items-center justify-center"
        }`}
        style={{ backgroundColor: "#2093EF" }}
      >

        Generate Itinary with Chat AI
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
              className="fixed inset-0 z-100 bg-opacity-50  backdrop-blur-xs"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="fixed inset-0 flex items-end md:items-center justify-center z-500 p-4"
            >
              <motion.div
                className="flex flex-col h-[90vh] md:h-[80vh] w-full md:w-[60vw] bg-white rounded-t-3xl md:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(32, 147, 239, 0.15)" }}
              >
                {/* Header with Close Button */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center justify-between p-4 text-white"
                  style={{ backgroundColor: "#2093EF" }}
                >
                  <div>
                    <h2 className="text-xl font-bold">AI Travel Assistant</h2>
                    <p className="text-sm opacity-95">
                      Ask me anything about your trip!
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                    className="p-1 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                  >
                    <CloseIcon sx={{ fontSize: "24px" }} />
                  </motion.button>
                </motion.div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-50">
                  {messages.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center justify-center h-full text-center space-y-6"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-5xl"
                      >
                        ✈️
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Plan Your Next Adventure
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Get personalized travel recommendations tailored to
                          your preferences
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <AnimatePresence>
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${
                            message.sender === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                              message.sender === "user"
                                ? "text-white rounded-br-none"
                                : "bg-gray-100 text-gray-900 rounded-bl-none"
                            }`}
                            style={
                              message.sender === "user"
                                ? { backgroundColor: "#2093EF" }
                                : {}
                            }
                          >
                            {message.sender === "user" ? (
                              <p className="text-sm leading-relaxed">
                                {message.text}
                              </p>
                            ) : (
                              <div
                                className="text-sm leading-relaxed prose prose-sm max-w-none prose-p:m-0 prose-p:mb-2 prose-headings:m-0 prose-headings:mb-2 prose-headings:font-semibold prose-ul:m-0 prose-ul:mb-2 prose-li:m-0 prose-li:p-0 prose-strong:font-semibold prose-em:italic"
                                dangerouslySetInnerHTML={{
                                  __html: message.htmlContent || message.text,
                                }}
                              />
                            )}
                            <p className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  )}

                  {/* Typing Indicator */}
                  <AnimatePresence>
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-gray-100 px-4 py-3 rounded-lg rounded-bl-none">
                          <div className="flex space-x-2">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: 0.2,
                              }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: 0.4,
                              }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-end space-x-2">
                    <motion.textarea
                      whileFocus={{ scale: 1 }}
                      ref={textareaRef}
                      value={inputValue}
                      onChange={handleTextareaChange}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 overflow-hidden rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:border-transparent"
                      style={{
                        boxShadow: "none",
                        outlineColor: "transparent",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 0 0 2px rgba(32, 147, 239, 0.2)";
                        e.currentTarget.style.borderColor = "#2093EF";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor = "#d1d5db";
                      }}
                      rows={1}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="p-2 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex-shrink-0"
                      style={{ backgroundColor: "#2093EF" }}
                    >
                      <SendIcon />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatInterface;
