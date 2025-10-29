/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect, type KeyboardEvent, type ChangeEvent } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import type { Trip } from '../../Helper/ApiResponseInterface';

type MessageSender = 'user' | 'bot';

interface Message {
  id: string;
  text: string;
  sender: MessageSender;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: '1',
  text: 'Hello! How can I help you today?',
  sender: 'bot',
  timestamp: new Date()
};

const BOT_RESPONSES: readonly string[] = [
  "That's interesting! Tell me more about that.",
  "I understand. How can I assist you with this?",
  "Great question! Let me help you with that.",
  "I'm here to help. What else would you like to know?",
  "Thanks for sharing! Is there anything specific you'd like assistance with?"
] as const;
interface Props {
    chats:any[],
    updateValues:(value:Trip)=>void
}
 const ChatBot=(props:Props)=>  {
    console.log(props,"props")
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateBotResponse = (userMessage: string): void => {
    console.log(userMessage)
    setIsTyping(true);
    
    setTimeout(() => {
      const randomIndex: number = Math.floor(Math.random() * BOT_RESPONSES.length);
      const botMessage: Message = {
        id: Date.now().toString(),
        text: BOT_RESPONSES[randomIndex],
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages((prev: Message[]) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSend = (): void => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev: Message[]) => [...prev, userMessage]);
    setInput('');
    simulateBotResponse(input);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
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
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={toggleChat}
          className="bg-cyan-600 cursor-pointer hover:bg-cyan-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
        <div className='flex items-center'>
           <p className='mr-2'> Chat with AI to make changes</p> <MessageCircle size={28} />
        </div>
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-2xl w-96 h-[32rem] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-cyan-100">Online</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg: Message) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    msg.sender === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 shadow-sm rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t bg-white p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                aria-label="Message input"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full p-4 flex justify-center items-center transition-colors"
                aria-label="Send message"
              >
                <Send size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot