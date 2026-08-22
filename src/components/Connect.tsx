import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, ShieldAlert, Trash2, Key, Mail, X, MessageSquare } from 'lucide-react';
import { TranslationDict, ContactMessage } from '../types';

interface ConnectProps {
  t: TranslationDict;
  language: 'en' | 'ur';
  setCurrentPage: (page: 'portfolio' | 'blog' | 'projects' | 'contact') => void;
}

export default function Connect({ t, language, setCurrentPage }: ConnectProps) {
  const isUrdu = language === 'ur';

  // Contact modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Admin panel state inside contact
  const [showAdminConsole, setShowAdminConsole] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminMessages, setAdminMessages] = useState<ContactMessage[]>([]);
  const [adminError, setAdminError] = useState('');

  // Handle message submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  // Fetch admin logs
  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (response.ok) {
        const data = await response.json();
        setAdminMessages(data);
      }
    } catch (err) {
      console.error("Failed to load admin logs", err);
    }
  };

  // Authenticate admin (Simple Password, e.g. "iawaisahmd")
  const handleAdminLogin = (e: FormEvent) => {
    e.preventDefault();
    if (adminPassword.toLowerCase() === 'iawaisahmd') {
      setIsAdminAuthenticated(true);
      setAdminError('');
      fetchMessages();
    } else {
      setAdminError('Invalid authorization key');
    }
  };

  // Delete message
  const handleDeleteMessage = async (id: string) => {
    try {
      const response = await fetch(`/api/messages/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setAdminMessages(prev => prev.filter(m => m.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className={`mb-12 ${isUrdu ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {isUrdu ? "کیا آپ رابطہ کرنے کے لیے تیار ہیں؟" : "Ready to Connect?"}
          </h2>
          <p className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400 mt-1">
            {isUrdu ? "آئیے آپ کے اگلے آئیڈیا کو حقیقت کا روپ دیں" : "Let's turn your next idea into something real"}
          </p>
          <div className="h-1.5 w-16 bg-pink-500 mt-3 rounded-full" />
        </div>

        {/* Action Connect Board Container */}
        <div className="w-full rounded-3xl border border-slate-150/80 dark:border-slate-800/60 bg-gradient-to-br from-slate-50/50 to-white dark:from-slate-900/10 dark:to-slate-950 p-10 md:p-16 text-center shadow-xs relative overflow-hidden">
          
          {/* Accent decoration rings */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-pink-500/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

          {/* Heading */}
          <h3 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 leading-none mb-4">
            <span>FROM IDEA TO</span>
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent drop-shadow-sm">IMPACT</span>
          </h3>

          <p className="text-base font-extrabold text-slate-700 dark:text-slate-300 tracking-wide mb-10 uppercase">
            Let's build something real.
          </p>

          {/* Action button */}
          <div className="mb-10 flex justify-center">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.history.pushState(null, '', '/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-sans font-extrabold text-sm shadow-md hover:bg-pink-500 hover:dark:bg-pink-500 hover:text-white hover:dark:text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Get in Touch</span>
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Connect Subtext */}
          <div className="space-y-2 max-w-lg mx-auto">
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-500">
              Open to full-time roles & freelance projects
            </p>
            <p className="text-xs font-sans text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
              I build high-performance applications that turn complex ideas into seamless user experiences.
            </p>
          </div>

        </div>

      </div>

      {/* Floating Modal Contact overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsModalOpen(false);
                setShowAdminConsole(false);
                setIsAdminAuthenticated(false);
                setAdminPassword('');
              }}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 z-10 flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📬</span>
                  <span className="font-bold font-sans text-sm text-slate-900 dark:text-white">
                    {showAdminConsole ? 'Developer Inbound Logs' : 'Send a Message'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Console key to trigger database logs */}
                  <button
                    onClick={() => {
                      setShowAdminConsole(!showAdminConsole);
                      setIsAdminAuthenticated(false);
                      setAdminPassword('');
                      setAdminError('');
                    }}
                    className="text-[9px] font-mono font-bold text-slate-400 hover:text-pink-500 transition-colors uppercase flex items-center gap-1 cursor-pointer"
                    title="Developer Database Log Console"
                  >
                    <Key className="h-3 w-3" />
                    <span>Console</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setShowAdminConsole(false);
                      setIsAdminAuthenticated(false);
                    }}
                    className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-850 cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-6">
                
                {showAdminConsole ? (
                  /* Admin Messages Dashboard */
                  <div className="space-y-4">
                    {!isAdminAuthenticated ? (
                      /* Authenticate block */
                      <form onSubmit={handleAdminLogin} className="py-6 text-center space-y-4">
                        <ShieldAlert className="h-10 w-10 text-pink-500 mx-auto animate-pulse" />
                        <div>
                          <h4 className="font-bold text-sm text-slate-850 dark:text-slate-100">Access Key Required</h4>
                          <p className="text-[10px] text-slate-400 mt-1">Provide authorization credential (e.g. iawaisahmd)</p>
                        </div>
                        <input
                          type="password"
                          required
                          value={adminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                          placeholder="Authorization Password"
                          className="w-full max-w-xs px-4 py-2 text-center rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-pink-500"
                        />
                        {adminError && <p className="text-[10px] text-red-500 font-semibold">{adminError}</p>}
                        <button
                          type="submit"
                          className="w-full max-w-xs py-2 rounded-xl text-xs bg-slate-900 hover:bg-slate-800 dark:bg-pink-500 dark:hover:bg-pink-600 text-white font-semibold cursor-pointer"
                        >
                          Authenticate Log Access
                        </button>
                      </form>
                    ) : (
                      /* Logs Showcase */
                      <div className="space-y-4 pt-1">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Logged messages in database</span>
                          <span className="text-[10px] font-mono text-pink-500 font-bold">{adminMessages.length} Messages</span>
                        </div>

                        {adminMessages.length === 0 ? (
                          <div className="text-center py-10 text-slate-400 text-xs font-sans">
                            No customer queries logged yet.
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {adminMessages.map((msg) => (
                              <div key={msg.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-850 relative group">
                                <button
                                  onClick={() => handleDeleteMessage(msg.id)}
                                  className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
                                  title="Delete message record"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                                
                                <div className="space-y-0.5">
                                  <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">{msg.name}</span>
                                  <span className="block text-[9px] font-mono text-slate-400">{msg.email} &bull; {new Date(msg.date).toLocaleString()}</span>
                                </div>

                                <div className="pt-2 border-t border-slate-200/40 dark:border-slate-850/40 mt-2">
                                  <span className="block text-[10px] font-mono text-pink-500 font-bold mb-1">Subject: {msg.subject}</span>
                                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200/40 dark:border-slate-800/40 font-sans">
                                    {msg.message}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Standard Inbound Messaging Form */
                  <AnimatePresence mode="wait">
                    {status === 'success' ? (
                      <motion.div
                        key="success-screen"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8 space-y-4"
                      >
                        <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto animate-bounce" />
                        <h4 className="font-sans font-bold text-lg text-slate-900 dark:text-white">
                          Inbound Dispatched!
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed font-sans">
                          Thank you! Your inquiry was successfully registered. I'll reach out to your inbox as soon as possible.
                        </p>
                        <button
                          onClick={() => setStatus('idle')}
                          className="px-6 py-2.5 rounded-xl text-xs font-bold bg-pink-500 hover:bg-pink-600 text-white transition-all cursor-pointer shadow-sm"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="contact-form"
                        onSubmit={handleSubmit}
                        className="space-y-4 text-left"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Your Name</label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-pink-500 text-slate-800 dark:text-white"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Your Email</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-pink-500 text-slate-800 dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Subject</label>
                          <input
                            type="text"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-pink-500 text-slate-800 dark:text-white"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Message</label>
                          <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-pink-500 text-slate-800 dark:text-white resize-none"
                          />
                        </div>

                        {status === 'error' && (
                          <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200/50 rounded-xl text-red-600 dark:text-red-400 flex items-center gap-2 text-[10px]">
                            <AlertCircle className="h-4 w-4" />
                            <span>Kindly verify all inputs are populated.</span>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="w-full py-3 rounded-xl text-xs font-bold bg-pink-500 hover:bg-pink-600 disabled:bg-pink-400 text-white shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          {status === 'submitting' ? (
                            <span>Despatching Inbound...</span>
                          ) : (
                            <>
                              <span>Submit Inquiry</span>
                              <Send className="h-3.5 w-3.5" />
                            </>
                          )}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
