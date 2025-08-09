'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Loader2, Send, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sendMessageToChatbot } from '@/app/actions';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Logo } from './logo';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    startTransition(async () => {
      const chatHistory = [...messages, userMessage];
      const result = await sendMessageToChatbot({
        history: chatHistory.slice(0, -1), // send history without the current message
        message: userMessage.content,
      });

      if (result.success) {
        setMessages((prev) => [...prev, { role: 'model', content: result.message }]);
      } else {
        setMessages((prev) => [...prev, { role: 'model', content: "Sorry, something went wrong." }]);
      }
    });
  };
  
  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-6 right-24 h-14 w-14 rounded-full shadow-lg"
        aria-label="Open Chat"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Card className="w-[380px] h-[600px] flex flex-col shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <Logo />
                <span className="text-xs text-muted-foreground">AI Assistant</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden">
              <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.length === 0 && (
                     <div className="text-center text-sm text-muted-foreground p-4">
                        <p>Welcome to SYNC TECH! How can I help you today?</p>
                     </div>
                  )}
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        'flex gap-2 text-sm',
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      {message.role === 'model' && (
                          <Avatar className="h-8 w-8">
                            <AvatarFallback><Bot size={16} /></AvatarFallback>
                          </Avatar>
                      )}
                      <div
                        className={cn(
                          'rounded-lg px-3 py-2 max-w-[80%]',
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary'
                        )}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                   {isPending && (
                        <div className="flex justify-start gap-2">
                             <Avatar className="h-8 w-8">
                                <AvatarFallback><Bot size={16} /></AvatarFallback>
                            </Avatar>
                            <div className="rounded-lg px-3 py-2 bg-secondary flex items-center">
                                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                            </div>
                        </div>
                    )}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our services..."
                  disabled={isPending}
                />
                <Button type="submit" size="icon" disabled={isPending}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
