// components/chatbot/Chatbot.tsx
import { useState } from 'react';
import { ChatbotIcon } from './ChatbotIcon';

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: 'user' as const, content: input }];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: input }),
        });

        const data = await res.json();
        setMessages([...newMessages, { role: 'bot' as const, content: data.reply }]);
        setIsLoading(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
            >
                <ChatbotIcon />
            </button>
            {isOpen && (
                <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col">
                    <div className="p-4 border-b">
                        <h3 className="font-bold text-lg text-gray-800">Portfolio Assistant</h3>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`my-2 p-2 rounded-lg ${
                                    msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100'
                                }`}
                            >
                                <p className="text-sm text-gray-800">{msg.content}</p>
                            </div>
                        ))}
                        {isLoading && <p className="text-sm text-gray-500">Thinking...</p>}
                    </div>
                    <div className="p-4 border-t">
                        <div className="flex">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                className="flex-1 border rounded-l-lg p-2 text-black"
                                placeholder="Ask me anything..."
                            />
                            <button onClick={handleSend} className="bg-blue-600 text-white p-2 rounded-r-lg">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};