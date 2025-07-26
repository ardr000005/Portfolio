
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User, Loader } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { contextualChatbot } from '@/ai/flows/contextual-chatbot';
import { Avatar, AvatarFallback } from './ui/avatar';
import { cn } from '@/lib/utils';

type Message = {
  id: number;
  role: 'user' | 'bot';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'bot', text: "Hello! I'm a chatbot here to answer questions about Aravind. How can I help you?" },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now(), role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const { response } = await contextualChatbot({ query: input });
      const botMessage: Message = { id: Date.now() + 1, role: 'bot', text: response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = { id: Date.now() + 1, role: 'bot', text: 'Sorry, something went wrong. Please try again.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <Button size="icon" className="h-14 w-14 rounded-full shadow-lg" onClick={toggleChat}>
          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: 45, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: -45, scale: 0 }}>
                <X />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: -45, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: 45, scale: 0 }}>
                <Bot />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed bottom-24 right-4 z-40 h-[70vh] max-h-[500px] w-[90vw] max-w-sm overflow-hidden rounded-2xl border border-border/20 bg-background/50 shadow-2xl backdrop-blur-xl sm:right-6 md:w-full"
          >
            <div className="flex h-full flex-col">
              <header className="flex items-center gap-4 border-b p-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <h3 className="font-bold">Aravind's Assistant</h3>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </header>
              <ScrollArea className="flex-1" ref={scrollAreaRef}>
                <div className="p-4 space-y-6">
                  {messages.map((message) => (
                    <div key={message.id} className={cn('flex items-end gap-2', message.role === 'user' ? 'justify-end' : 'justify-start')}>
                      {message.role === 'bot' && (
                         <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs"><Bot size={14}/></AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          'max-w-[80%] rounded-2xl px-4 py-2 text-sm',
                          message.role === 'user' ? 'rounded-br-none bg-primary text-primary-foreground' : 'rounded-bl-none bg-secondary text-secondary-foreground'
                        )}
                      >
                        {message.text}
                      </div>
                      {message.role === 'user' && (
                         <Avatar className="h-6 w-6">
                            <AvatarFallback><User size={14} /></AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-end gap-2 justify-start">
                        <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs"><Bot size={14}/></AvatarFallback>
                        </Avatar>
                        <div className="rounded-2xl rounded-bl-none px-4 py-2 bg-secondary text-secondary-foreground">
                            <Loader className="animate-spin" size={20} />
                        </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t p-4">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                  <Send />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
