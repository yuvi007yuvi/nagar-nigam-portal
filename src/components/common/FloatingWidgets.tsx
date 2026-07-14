'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './FloatingWidgets.module.css';

export default function FloatingWidgets() {
  const { t } = useLanguage();
  const [chatOpen, setChatOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: t('Namaste! I am your AI assistant. How can I help you today?', 'नमस्ते! मैं आपका AI सहायक हूँ। मैं आज आपकी कैसे मदद कर सकता हूँ?'), isBot: true },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, isBot: false }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: t(
            'Thank you for your query. Our team will assist you shortly. For urgent help, call 1533.',
            'आपके प्रश्न के लिए धन्यवाद। हमारी टीम जल्द ही आपकी सहायता करेगी। तत्काल सहायता के लिए 1533 पर कॉल करें।'
          ),
          isBot: true,
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/915652503632?text=Hello%20Nagar%20Nigam"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        aria-label={t('Contact us on WhatsApp', 'WhatsApp पर संपर्क करें')}
        title={t('WhatsApp Support', 'WhatsApp सहायता')}
      >
        💬
      </a>

      {/* AI Chatbot */}
      <button
        className={styles.chatToggle}
        onClick={() => setChatOpen(!chatOpen)}
        aria-label={t('Open AI Assistant', 'AI सहायक खोलें')}
        aria-expanded={chatOpen}
      >
        {chatOpen ? '✕' : '🤖'}
      </button>

      {chatOpen && (
        <div className={styles.chatWindow} role="dialog" aria-label="AI Assistant">
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderInfo}>
              <span className={styles.chatHeaderIcon}>🤖</span>
              <div>
                <div className={styles.chatHeaderTitle}>{t('AI Assistant', 'AI सहायक')}</div>
                <div className={styles.chatHeaderStatus}>● {t('Online', 'ऑनलाइन')}</div>
              </div>
            </div>
            <button className={styles.chatClose} onClick={() => setChatOpen(false)}>✕</button>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.isBot ? styles.botMessage : styles.userMessage}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className={styles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t('Type your message...', 'अपना संदेश टाइप करें...')}
              className={styles.chatTextField}
            />
            <button className={styles.chatSendBtn} onClick={handleSend} aria-label={t('Send', 'भेजें')}>
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Back to Top */}
      {showBackToTop && (
        <button
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={t('Back to top', 'ऊपर जाएं')}
        >
          ↑
        </button>
      )}
    </>
  );
}
