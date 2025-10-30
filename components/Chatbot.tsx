import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { ChatbotIcon, SendIcon } from './icons';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! How can I help you with Climex Academy's courses today?" }
  ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const initializeChat = async () => {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const chatSession = ai.chats.create({
                model: 'gemini-2.5-flash',
                systemInstruction: `You are a friendly and helpful AI assistant for Climex Academy. Your purpose is to answer questions from prospective students about the academy's courses, founder, and general information.
                
                Key Information about Climex Academy:
                - Founder: Arpan Singh.
                - Location: Piro, Bhojpur, Bihar.
                - Focus: Dual pathway - Academic coaching (Classes 9-12) and job-ready Career Tech courses.
                - Student Count: Over 1000 students taught.
                - Academic Courses (Senior, 11-12th): Physics, Chemistry, Mathematics, Biology.
                - Academic Courses (Junior, 9-10th): Mathematics, English, Hindi, Social Science, Science.
                - Career Tech Courses: Advanced Excel, Tally Prime with GST, ADCA, AI & Machine Learning, E-Commerce Management.
                
                Your tone should be encouraging, professional, and clear. Keep your answers concise and directly related to the user's query about the academy. If asked about something outside of Climex Academy, politely state that you can only provide information about the academy and its offerings.`,
            });
            setChat(chatSession);
            setError(null);
        } catch (e) {
            console.error("Failed to initialize chat:", e);
            setError("Could not connect to the AI assistant. Please check your connection or try again later.");
        }
    };
    initializeChat();
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
        const stream = await chat.sendMessageStream({ message: currentInput });
        let botResponse = '';
        setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

        for await (const chunk of stream) {
            botResponse += chunk.text;
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].text = botResponse;
                return newMessages;
            });
        }
    } catch (e) {
        console.error('Error sending message:', e);
        setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-teal text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform transition-transform hover:scale-110 focus:outline-none"
          aria-label="Toggle chatbot"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <ChatbotIcon className="h-8 w-8" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 w-[90vw] max-w-sm h-[60vh] max-h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col transform transition-all duration-300 ease-out origin-bottom-right animate-pop-in">
          <header className="bg-primary-blue text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h3 className="font-bold text-lg">Climex AI Assistant</h3>
          </header>

          <main className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="flex flex-col gap-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-xl px-4 py-2 max-w-[80%] whitespace-pre-wrap ${msg.sender === 'user' ? 'bg-primary-blue text-white' : 'bg-gray-200 text-gray-800'}`}>
                    {msg.text}
                    {isLoading && msg.sender === 'bot' && index === messages.length -1 && <span className="inline-block w-2 h-4 bg-gray-800 ml-1 animate-pulse"></span>}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {error && <p className="text-center text-red-500 p-2">{error}</p>}
          </main>

          <footer className="p-4 border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-teal"
                disabled={isLoading || !!error}
              />
              <button
                type="submit"
                className="bg-primary-teal text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={isLoading || !input.trim() || !!error}
                aria-label="Send message"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </form>
          </footer>
        </div>
      )}
      <style>{`
        @keyframes pop-in {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-pop-in {
          animation: pop-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Chatbot;
