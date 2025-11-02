/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useState,
  useRef,
  useEffect,
  type KeyboardEvent,
  type ChangeEvent,
} from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { Trip } from "../../Helper/ApiResponseInterface";
import { apiCaller } from "../../utils/apiCall";
import { useSelector } from "react-redux";
import { UsetInfo } from "../../Store/user-slice";
import { showErrorToast, showSuccessToast } from "../../utils/toastHelper";
import DOMPurify from "dompurify";
import { marked } from "marked";

type MessageSender = "user" | "bot";

interface Message {
  id: string;
  text: string;
  sender: MessageSender;
  timestamp: Date;
  htmlContent?: string;
}

const INITIAL_MESSAGE: Message = {
  id: "1",
  text: "Hello! How can I help you today?",
  sender: "bot",
  timestamp: new Date(),
};

interface Props {
  tripId?: string;
  chats: any[];
  updateValues: (value: string) => void;
}
const ChatBot = (props: Props) => {
  console.log(props, "props");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const userInfo = useSelector(UsetInfo);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const renderMarkdown = async (text: string): Promise<string> => {
    const html = await marked(text);
    return DOMPurify.sanitize(html);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendChatMessage = async (userMessage: string): Promise<void> => {
    if (!props.tripId) {
      showErrorToast("Trip ID not found. Cannot send message.");
      return;
    }

    console.log(userMessage);
    setIsTyping(true);

    try {
      const response = await apiCaller<any>(
        `/api/v1/trips/${props.tripId}/chat`,
        "POST",
        {
          message: userMessage,
        },
        {
          Authorization: `Bearer ${userInfo.access_token}`,
        }
      );

      if (response && response.data) {
        if(response.data.trip_updated){
          props.updateValues(props.tripId);
        }
        const htmlContent = await renderMarkdown(response.data.message);
        const botMessage: Message = {
          id: Date.now().toString(),
          text: response.data.message,
          sender: "bot",
          timestamp: new Date(),
          htmlContent: htmlContent,
        };
        setMessages((prev: Message[]) => [...prev, botMessage]);
        showSuccessToast("Response received!");

      } else {
        showErrorToast("Failed to get response from AI");
      }
    } catch (error: any) {
      console.error("Chat error:", error);
      showErrorToast(error.message || "Failed to send message");
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = (): void => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev: Message[]) => [...prev, userMessage]);
    const messageToSend = input;
    setInput("");
    sendChatMessage(messageToSend);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const toggleChat = (): void => {
    setIsOpen((prev: boolean) => !prev);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleChat}
            className="fixed inset-0 sm:hidden z-40"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          />
        )}
      </AnimatePresence>
      <div className="fixed bottom-30  right-4 md:bottom-30 md:right-6 z-500">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="button"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                ease: "easeInOut",

                damping: 20,
                stiffness: 300,
              }}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleChat}
              className="cursor-pointer text-white rounded-full p-3 md:p-4 shadow-lg transition-all flex items-center gap-2"
              style={{ backgroundColor: "#2093EF" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#1678D4")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#2093EF")
              }
              aria-label="Open chat"
            >
              <MessageCircle size={8} className="md:size-8" />
              <span className=" md:inline text-sm font-medium">
                Any Changes?
              </span>
            </motion.button>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 600 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 600 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-t-3xl w-full sm:w-96  md:w-[50vw] h-[70vh] sm:h-[32rem] flex flex-col overflow-hidden fixed bottom-0 right-0 sm:relative sm:bottom-auto sm:right-auto sm:rounded-2xl"
              style={{
                boxShadow:
                  "0 -4px 20px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(32, 147, 239, 0.1)",
              }}
            >
              {/* Header */}
              <div
                className="text-white p-3 md:p-4 flex items-center justify-between flex-shrink-0"
                style={{ backgroundColor: "#2093EF" }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
                  >
                    <MessageCircle size={18} />
                  </motion.div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm md:text-base">
                      AI Assistant
                    </h3>
                    <motion.p
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      Online
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  whileHover={{

                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleChat}
                  className="rounded-full p-1.5 transition-colors flex-shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  aria-label="Close chat"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Messages */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-50"
              >
                <AnimatePresence>
                  {messages.map((msg: Message) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1 }}
                        className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-3 md:px-4 py-2 text-sm md:text-sm ${
                          msg.sender === "user"
                            ? "text-white rounded-br-none shadow-md"
                            : "bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-100"
                        }`}
                        style={
                          msg.sender === "user"
                            ? { backgroundColor: "#2093EF" }
                            : {}
                        }
                      >
                        {msg.sender === "bot" && msg.htmlContent ? (
                          <div
                            className="prose prose-sm max-w-none prose-headings:text-base prose-p:m-0 prose-p:mb-2 prose-ul:m-0 prose-ul:mb-2 prose-li:m-0 prose-strong:font-bold prose-em:italic"
                            dangerouslySetInnerHTML={{
                              __html: msg.htmlContent,
                            }}
                          />
                        ) : (
                          <p>{msg.text}</p>
                        )}
                        <p
                          className={`text-xs mt-1 ${
                            msg.sender === "user"
                              ? "text-cyan-100"
                              : "text-gray-400"
                          }`}
                        >
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white text-gray-800 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-100">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
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
                <div ref={messagesEndRef} />
              </motion.div>

              {/* Input */}
              <div className="border-t bg-white p-3 md:p-4 flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Type message..."
                    className="flex-1 border border-gray-300 rounded-full px-3 md:px-4 py-2 text-sm focus:outline-none focus:border-transparent transition-all"
                    style={{ borderColor: "#e5e7eb" }}
                    onFocus={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 0 0 2px rgba(32, 147, 239, 0.1), 0 0 0 3px #2093EF")
                    }
                    onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                    aria-label="Message input"
                  />
                  <motion.button
                    whileHover={
                      input.trim()
                        ? { scale: 1, backgroundColor: "#1678D4" }
                        : {}
                    }
                    whileTap={input.trim() ? { scale: 0.95 } : {}}
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full p-2 md:p-3 flex justify-center items-center transition-all flex-shrink-0"
                    style={{
                      backgroundColor: input.trim() ? "#2093EF" : "#d1d5db",
                    }}
                    aria-label="Send message"
                  >
                    <Send size={20} />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ChatBot;
