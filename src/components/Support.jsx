import React, { useRef, useState, useEffect } from "react";
import { MessageCircle,X, Music,MessageSquareText, Calendar, MapPin, CreditCard, Users, Clock, Phone } from "lucide-react";
import {motion} from "framer-motion"
// ETERLANAN event and booking information
const events = [
  {
    id: "summer-fest-2025",
    name: "Summer Music Festival 2025",
    date: "August 15-17, 2025",
    venue: "Central Park Arena",
    artists: ["The Electric Waves", "Neon Dreams", "Bass Legends", "Acoustic Soul"],
    ticketTypes: {
      general: { price: 150, available: 2500 },
      vip: { price: 350, available: 500 },
      premium: { price: 600, available: 200 }
    }
  },
  {
    id: "rock-night-2025",
    name: "Rock Night Spectacular",
    date: "September 22, 2025",
    venue: "Thunder Stadium",
    artists: ["Metal Storm", "Classic Rock Revival", "Underground Heroes"],
    ticketTypes: {
      general: { price: 120, available: 3000 },
      vip: { price: 280, available: 600 }
    }
  },
  {
    id: "jazz-evening",
    name: "Jazz Evening Under Stars",
    date: "October 5, 2025",
    venue: "Moonlight Amphitheater",
    artists: ["Smooth Jazz Collective", "Blue Note Masters", "Modern Jazz Fusion"],
    ticketTypes: {
      general: { price: 80, available: 1200 },
      premium: { price: 180, available: 300 }
    }
  }
];

const companyInfo = {
  name: "ETERLANAN",
  established: "2020",
  eventsHosted: "500+",
  totalTicketsSold: "1.2M+",
  supportHours: "24/7 during event weeks",
  paymentMethods: ["Credit Cards", "Debit Cards", "PayPal", "Apple Pay", "Google Pay", "Bank Transfer"],
  refundPolicy: "Full refund up to 7 days before event, 50% refund 3-7 days before",
  ageRestrictions: "18+ for most events, some all-ages available",
  securityFeatures: ["Digital tickets with QR codes", "Anti-fraud protection", "Secure payment processing"],
  customerSupport: {
    phone: "+1-800-ETERLANAN",
    email: "support@eterlanan.com",
    chat: "Available 24/7"
  },
  venues: ["Central Park Arena", "Thunder Stadium", "Moonlight Amphitheater", "City Convention Center"],
  FAQ: [
    {
      question: "How do I buy tickets?",
      answer: "You can purchase tickets directly through our website, mobile app, or authorized ticket outlets. Select your event, choose ticket type, and complete secure payment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, PayPal, Apple Pay, Google Pay, and bank transfers for your convenience."
    },
    {
      question: "Can I get a refund?",
      answer: "Yes! Full refunds available up to 7 days before the event. 50% refund available 3-7 days before the event. No refunds within 3 days of event."
    },
    {
      question: "How do I receive my tickets?",
      answer: "All tickets are digital and sent via email with secure QR codes. You can also access them through our mobile app."
    },
    {
      question: "Is there an age limit?",
      answer: "Most events are 18+, but we also host all-ages shows. Check individual event details for age restrictions."
    },
    {
      question: "What if the event is cancelled?",
      answer: "In case of cancellation, all ticket holders receive full refunds automatically within 5-7 business days."
    }
  ]
};

const EterlanenChatbot = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [typingText, setTypingText] = useState("");
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);
  const messagesEndRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Export setOpen for external use
  useEffect(() => {
    window.__setEterlanenChatOpen = setOpen;
    return () => { delete window.__setEterlanenChatOpen; };
  }, []);

  // Initialize chat with welcome message
  useEffect(() => {
    if (open && chat.length === 0) {
      setChat([{
        from: "bot",
        text: "🎵 Hey there! Welcome to ETERLANAN - your ultimate music event destination! I'm here to help you discover amazing events, book tickets, and answer any questions. What can I help you with today?",
        isComplete: true
      }]);
    }
  }, [open, chat.length]);

  // Word-by-word typing effect
  useEffect(() => {
    if (typingText && currentTypingIndex < typingText.length) {
      const timer = setTimeout(() => {
        setCurrentTypingIndex(prev => prev + 1);
      }, 50); // Adjust typing speed here
      return () => clearTimeout(timer);
    } else if (typingText && currentTypingIndex >= typingText.length) {
      // Typing complete, update the last message
      setChat(prev => prev.map((msg, idx) => 
        idx === prev.length - 1 ? { ...msg, text: typingText, isComplete: true } : msg
      ));
      setTypingText("");
      setCurrentTypingIndex(0);
      setIsTyping(false);
    }
  }, [typingText, currentTypingIndex]);

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

    if (distanceFromBottom < 100 || isTyping) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat, isTyping, currentTypingIndex]);

  // Enhanced text formatting
  const formatText = (text) => {
    const htmlPattern = /<[^>]+>/;
    if (htmlPattern.test(text)) {
      return <div dangerouslySetInnerHTML={{ __html: text }} />;
    }

    const parts = [];
    let lastIndex = 0;
    const regex = /\*\*(.*?)\*\*/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(<span key={`plain-${lastIndex}`}>{text.substring(lastIndex, match.index)}</span>);
      }
      parts.push(<strong key={`bold-${match.index}`} className="font-bold text-red-500">{match[1]}</strong>);
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(<span key={`plain-${lastIndex}`}>{text.substring(lastIndex)}</span>);
    }

    return <>{parts}</>;
  };

  // Enhanced smart context for RAG responses with detailed instructions
  const addSmartContext = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    const ticketKeywords = ["ticket", "buy", "purchase", "book", "reserve", "price", "cost", "pricing"];
    const eventKeywords = ["event", "show", "concert", "festival", "when", "where", "date", "lineup", "artist"];
    const refundKeywords = ["refund", "cancel", "return", "money back", "cancellation"];
    const paymentKeywords = ["payment", "pay", "card", "paypal", "method", "visa", "mastercard"];
    const ageKeywords = ["age", "old", "minor", "18", "kid", "child", "family"];
    const venueKeywords = ["venue", "location", "address", "parking", "accessibility"];
    const supportKeywords = ["help", "contact", "support", "phone", "email"];

    const hasTicketQuery = ticketKeywords.some(keyword => lowerMessage.includes(keyword));
    const hasEventQuery = eventKeywords.some(keyword => lowerMessage.includes(keyword));
    const hasRefundQuery = refundKeywords.some(keyword => lowerMessage.includes(keyword));
    const hasPaymentQuery = paymentKeywords.some(keyword => lowerMessage.includes(keyword));
    const hasAgeQuery = ageKeywords.some(keyword => lowerMessage.includes(keyword));
    const hasVenueQuery = venueKeywords.some(keyword => lowerMessage.includes(keyword));
    const hasSupportQuery = supportKeywords.some(keyword => lowerMessage.includes(keyword));

    let baseCompanyDetails = `You are ETERLANAN AI Assistant - a friendly, enthusiastic music event specialist. ETERLANAN is a premium music event ticket booking platform established in ${companyInfo.established}. We've hosted ${companyInfo.eventsHosted} events and sold ${companyInfo.totalTicketsSold} tickets.

CURRENT UPCOMING EVENTS:
${events.map(event => 
  `🎵 **${event.name}**
  📅 Date: ${event.date}
  📍 Venue: ${event.venue}
  🎤 Artists: ${event.artists.join(', ')}
  🎫 Ticket Options:
  ${Object.entries(event.ticketTypes).map(([type, info]) => 
    `   - ${type.toUpperCase()}: ${info.price} (${info.available} available)`
  ).join('\n')}`
).join('\n\n')}

COMPANY INFORMATION:
- Support Hours: ${companyInfo.supportHours}
- Payment Methods: ${companyInfo.paymentMethods.join(', ')}
- Refund Policy: ${companyInfo.refundPolicy}
- Age Policy: ${companyInfo.ageRestrictions}
- Contact: Phone ${companyInfo.customerSupport.phone}, Email ${companyInfo.customerSupport.email}
- Security: ${companyInfo.securityFeatures.join(', ')}

FREQUENTLY ASKED QUESTIONS:
${companyInfo.FAQ.map(faq => `Q: ${faq.question}\nA: ${faq.answer}`).join('\n\n')}`;

    let responseInstructions = `
RESPONSE GUIDELINES:
- CRITICAL: Keep ALL responses under 30 words maximum
- Be extremely concise and direct
- Use bullet points or short phrases instead of paragraphs
- Use music-themed emojis (🎵, 🎫, 🎪, 🎤) sparingly
- Use **bold** only for prices, dates, event names
- No long explanations - give quick, actionable answers
- If complex info needed, say "Need more details? Contact support!"
- Always sound enthusiastic but brief`;

    if (hasTicketQuery) {
      responseInstructions += `
TICKET QUERY:
- Show prices: General $X, VIP $Y, Premium $Z
- Say "Book on website/app"
- Mention "Digital QR tickets"
- Max 30 words total`;
    }

    if (hasEventQuery) {
      responseInstructions += `
EVENT QUERY:
- List 1-2 upcoming events max
- Format: **Event Name** - Date, Venue
- Artists in one line
- Max 40 words total`;
    }

    if (hasRefundQuery) {
      responseInstructions += `
REFUND QUERY:
- "Full refund: 7+ days before"
- "50% refund: 3-7 days before" 
- "No refund: <3 days"
- Max 25 words total`;
    }

    if (hasPaymentQuery) {
      responseInstructions += `
PAYMENT QUERY:
- List: Cards, PayPal, Apple Pay, Google Pay
- Say "100% secure"
- Max 20 words total`;
    }

    if (hasAgeQuery) {
      responseInstructions += `
AGE QUERY:
- "Most events 18+"
- "Some all-ages available"
- "ID required"
- Max 15 words total`;
    }

    if (hasVenueQuery) {
      responseInstructions += `
VENUE QUERY:
- Give venue name from event data
- Say "Check website for details"
- Max 15 words total`;
    }

    if (hasSupportQuery) {
      responseInstructions += `
SUPPORT QUERY:
- Phone: ${companyInfo.customerSupport.phone}
- Email: ${companyInfo.customerSupport.email}
- "24/7 during events"
- Max 20 words total`;
    }

    return `${baseCompanyDetails}\n\nUser query: "${userMessage}"\n\n${responseInstructions}`;
  };

  // Gemini AI response with RAG context
  const getAIResponse = async (userMessage, chatHistory) => {
    setIsTyping(true);

    const formattedHistory = chatHistory.map((msg) => ({
      role: msg.from === "user" ? "user" : "model",
      parts: [{ text: typeof msg.text === 'string' ? msg.text.replace(/<[^>]*>/g, '') : msg.text }],
    }));

    // Add smart context to user message for RAG functionality
    const enhancedMessage = addSmartContext(userMessage);

    formattedHistory.push({
      role: "user",
      parts: [{ text: enhancedMessage }],
    });

    const payload = {
      contents: formattedHistory,
      generationConfig: {
        temperature: 0.3,
        topK: 20,
        topP: 0.8,
        maxOutputTokens: 150,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        }
      ]
    };

    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error = await res.json();
        console.error("Gemini API Error:", error);
        return "🎵 Oops! I'm having trouble connecting right now. Please try again in a moment or contact our support team at support@eterlanan.com! 🎶";
      }

      const result = await res.json();
      const reply = result?.candidates?.[0]?.content?.parts?.[0]?.text || "🎵 I'm here to help! Could you please rephrase your question about ETERLANAN events or tickets? 🎫";
      
      return reply;
    } catch (err) {
      console.error("Gemini API Fetch failed:", err);
      return "🎵 Something went wrong with my connection! Please check your internet and try again, or reach out to our support team. We're here to help! 🎶";
    } finally {
      setIsTyping(false);
    }
  };

  const handleUserChat = async (message) => {
    if (!message.trim()) return;

    const userMsg = { from: "user", text: message, isComplete: true };
    setChat(prev => [...prev, userMsg]);
    setCurrentMessage("");
    setIsTyping(true);

    // Add placeholder bot message
    const botMsg = { from: "bot", text: "", isComplete: false };
    setChat(prev => [...prev, botMsg]);

    const botResponse = await getAIResponse(message, [...chat, userMsg]);
    
    // Start word-by-word typing
    setTypingText(botResponse);
    setCurrentTypingIndex(0);
  };

  const resetWidget = () => {
    setChat([{
      from: "bot",
      text: "🎵 Hey there! Welcome to ETERLANAN - your ultimate music event destination! I'm here to help you discover amazing events, book tickets, and answer any questions. What can I help you with today?",
      isComplete: true
    }]);
    setIsTyping(false);
    setCurrentMessage("");
    setTypingText("");
    setCurrentTypingIndex(0);
  };

  const quickResponses = [
    { text: "Upcoming events?", icon: "🎪" },
    { text: "Ticket prices?", icon: "💰" },
    { text: "Refund policy?", icon: "↩️" },
    { text: "How to buy?", icon: "🎫" },
    { text: "Payment methods?", icon: "💳" },
    { text: "Age limits?", icon: "🆔" }
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 3.5, duration: 0.5, type: "spring" }}
  onClick={() => setOpen(!open)}
  className="fixed bottom-6 right-6 z-50 bg-red-500 text-white font-bold p-4 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
  style={{
    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
    animation: open ? 'none' : 'pulse 2s infinite',
  }}
  aria-label={open ? 'Close chat' : 'Open chat'}
>
  {open ? <X size={24} /> : <MessageSquareText size={24} />}
</motion.button>


      {/* Chat Widget Window */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-96 bg-white shadow-2xl border-4 border-black max-h-[85vh] overflow-hidden flex flex-col animate-slideIn">
          {/* Header */}
          <div className="bg-red-500 p-4 text-white border-b-4 border-black">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">ETERLANAN</h3>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full animate-bounce bg-green-500"></div>
                  <span className="font-bold">AI MUSIC ASSISTANT</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={resetWidget}
                  className="w-8 h-8 bg-black text-white hover:bg-gray-800 flex items-center justify-center transition-colors font-bold"
                  title="Reset Chat"
                >
                  ↻
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 bg-black text-white hover:bg-gray-800 flex items-center justify-center transition-colors font-bold"
                  title="Close Chat"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
          >
            {chat.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 text-sm max-w-[85%] border-2 border-black font-medium ${
                    msg.from === "user"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {msg.from === "bot" && !msg.isComplete ? 
                    formatText(typingText.substring(0, currentTypingIndex)) :
                    formatText(msg.text)
                  }
                  {msg.from === "bot" && !msg.isComplete && (
                    <span className="inline-block w-2 h-4 bg-red-500 ml-1 animate-pulse"></span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses and Input Area */}
          <div className="p-4 bg-white border-t-4 border-black">
            <div className="flex gap-2 flex-wrap mb-4">
              {quickResponses.map((response, idx) => (
                <button
                  key={idx}
                  onClick={() => handleUserChat(response.text)}
                  disabled={isTyping || typingText}
                  className="text-xs bg-gray-100 hover:bg-red-500 hover:text-white border-2 border-black px-3 py-1 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed font-bold"
                >
                  <span>{response.icon}</span>
                  <span>{response.text.split(' ').slice(0, 2).join(' ')}</span>
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isTyping && !typingText && currentMessage.trim()) {
                    handleUserChat(currentMessage);
                  }
                }}
                placeholder="Ask me about events, tickets, or anything..."
                className="flex-1 px-4 py-3 border-2 border-black text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none font-medium"
                disabled={isTyping || typingText}
              />
              <button
                onClick={() => {
                  if (currentMessage.trim()) {
                    handleUserChat(currentMessage);
                  }
                }}
                disabled={isTyping || typingText || !currentMessage.trim()}
                className="bg-red-500 text-white px-4 py-3 border-2 border-black hover:bg-red-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-bold"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </>
  );
};

export default EterlanenChatbot;