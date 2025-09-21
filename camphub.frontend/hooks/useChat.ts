
import { useState, useCallback } from 'react';
import { Author, ChatMessage } from '../types';

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial-message',
      author: Author.BOT,
      text: 'Olá! Como posso ajudar você hoje?',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      author: Author.USER,
      text,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    // --- PONTO DE INTEGRAÇÃO COM O BACKEND ---
    // Substitua este setTimeout pela sua chamada de API para o backend do chatbot.
    // Exemplo:
    // try {
    //   const response = await fetch('https://your-chatbot-backend.com/api/chat', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ message: text, history: messages }),
    //   });
    //   const data = await response.json();
    //   const botResponse: ChatMessage = {
    //     id: data.id || Date.now().toString() + '-bot',
    //     author: Author.BOT,
    //     text: data.reply,
    //   };
    //   setMessages((prev) => [...prev, botResponse]);
    // } catch (error) {
    //   console.error("Error communicating with backend:", error);
    //   const errorResponse: ChatMessage = {
    //     id: Date.now().toString() + '-error',
    //     author: Author.BOT,
    //     text: "Desculpe, não consegui me conectar ao servidor. Tente novamente mais tarde.",
    //   };
    //   setMessages((prev) => [...prev, errorResponse]);
    // } finally {
    //   setIsLoading(false);
    // }

    // Simulação de resposta do backend com um atraso
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: Date.now().toString() + '-bot',
        author: Author.BOT,
        text: `Esta é uma resposta simulada para: "${text}"`,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  }, []);

  return { messages, isLoading, sendMessage };
};
