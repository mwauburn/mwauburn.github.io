import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Calendar,
  MessageSquare,
  ArrowRight,
  ChevronLeft,
  Clock,
  Video
} from 'lucide-react';
import { TranslationDict } from '../types';

interface ContactPageProps {
  t: TranslationDict;
  language: 'en' | 'ur';
  setCurrentPage: (page: any) => void;
  setActiveSection: (sec: string) => void;
}

const topics = ['Full-time role', 'Freelance project', 'Just saying hi', 'Bug report', 'Other'];
const WEB3FORMS_ACCESS_KEY = '9c6b543e-e2c8-4cf2-a0da-7942d7d061c3';

const socials = [
  { name: 'Email', icon: Mail, url: 'mailto:iawaisahmd@gmail.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/iawaisahmd' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/iawaisahmd' },
  { name: 'Twitter/X', icon: Twitter, url: 'https://x.com/awaisahmdd' },
];

export default function ContactPage({ setCurrentPage, setActiveSection }: ContactPageProps) {
  const [activeTab, setActiveTab] = useState<'call' | 'message'>('message');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Full-time role',
    message: '',
    agree: false
  });

  const goHome = () => {
    setCurrentPage('portfolio');
    setActiveSection('home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitMessage = async (event: FormEvent) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.agree) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    try {
      const payload = new FormData();
      payload.append('access_key', WEB3FORMS_ACCESS_KEY);
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('subject', `[${formData.topic}] Inbound Inquiry`);
      payload.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
      });
      const data = await response.json();

      if (!response.ok || !data.success) throw new Error(data.message || 'Failed to send message');
      setStatus('success');
      setFormData({ name: '', email: '', topic: 'Full-time role', message: '', agree: false });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-slate-50 dark:bg-[#030303] text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[460px] w-[760px] bg-pink-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-[34%] right-[14%] h-[260px] w-[260px] bg-emerald-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <button
          onClick={goHome}
          className="group inline-flex items-center gap-2 text-slate-500 dark:text-zinc-500 hover:text-pink-500 dark:hover:text-pink-400 text-xs font-mono mb-16 transition-colors cursor-pointer"
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </button>

        <section className="text-center mb-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.45em] text-pink-500 mb-5">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-7xl font-black tracking-tight">
            LET'S <span className="italic text-pink-500">Connect</span>
          </h1>
          <p className="mt-5 text-[11px] md:text-xs font-mono uppercase tracking-[0.35em] text-slate-500 dark:text-zinc-500">
            Schedule a call or send a message
          </p>

          <div className="flex items-center justify-center gap-3 mt-8">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  title={social.name}
                  className="h-10 w-10 rounded-full bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-900 text-slate-500 dark:text-zinc-500 hover:text-pink-500 dark:hover:text-white hover:border-pink-500/40 hover:bg-slate-100 dark:hover:bg-zinc-900 flex items-center justify-center transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </section>

        <div className="flex justify-center mb-8">
          <div className="p-1 rounded-full bg-slate-200/70 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-900 flex items-center gap-1">
            <button
              onClick={() => setActiveTab('call')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${activeTab === 'call' ? 'bg-slate-900 text-white dark:bg-white dark:text-black' : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book a Call</span>
            </button>
            <button
              onClick={() => setActiveTab('message')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${activeTab === 'message' ? 'bg-slate-900 text-white dark:bg-white dark:text-black' : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Send a Message</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'message' ? (
            <motion.form
              key="message"
              onSubmit={submitMessage}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.24 }}
              className="max-w-3xl mx-auto rounded-3xl border border-slate-200 dark:border-zinc-900 bg-white/90 dark:bg-zinc-950/70 p-6 md:p-8 shadow-2xl backdrop-blur"
            >
              {status === 'success' ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="h-14 w-14 text-emerald-500 mx-auto mb-5" />
                  <h2 className="text-2xl font-black mb-2">Message sent</h2>
                  <p className="text-sm text-slate-500 dark:text-zinc-500 max-w-sm mx-auto mb-7">Thanks. Your message was received and I will get back to you shortly.</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2.5 rounded-full bg-pink-500 text-white text-xs font-bold hover:bg-pink-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-5">
                    <label className="space-y-2">
                      <span className="block text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-[0.18em] font-bold">Name</span>
                      <input
                        value={formData.name}
                        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                        placeholder="Jane Doe"
                        className="w-full rounded-xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-zinc-900 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-700 focus:outline-none focus:border-pink-500/70"
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="block text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-[0.18em] font-bold">Email</span>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                        placeholder="jane@example.com"
                        className="w-full rounded-xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-zinc-900 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-700 focus:outline-none focus:border-pink-500/70"
                      />
                    </label>
                  </div>

                  <div className="mt-6">
                    <span className="block text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-[0.18em] font-bold mb-3">Topic</span>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setFormData({ ...formData, topic })}
                          className={`px-4 py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${formData.topic === topic ? 'bg-pink-500 border-pink-500 text-white' : 'bg-slate-50 dark:bg-black border-slate-200 dark:border-zinc-900 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-zinc-700'}`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="block mt-6 space-y-2">
                    <span className="block text-[10px] font-mono text-slate-500 dark:text-zinc-500 uppercase tracking-[0.18em] font-bold">Message</span>
                    <textarea
                      rows={6}
                      value={formData.message}
                      onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                      placeholder="Tell me about your project, idea, or just say hi..."
                      className="w-full rounded-xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-zinc-900 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-700 focus:outline-none focus:border-pink-500/70 resize-none"
                    />
                  </label>

                  <label className="mt-5 flex items-start gap-3 text-xs text-slate-500 dark:text-zinc-500 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agree}
                      onChange={(event) => setFormData({ ...formData, agree: event.target.checked })}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 dark:border-zinc-800 bg-white dark:bg-black accent-pink-500"
                    />
                    <span>I agree that my submitted data is collected and stored to respond to my inquiry.</span>
                  </label>

                  {status === 'error' && (
                    <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      <span>Please complete all fields and accept the agreement.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="mt-7 w-full rounded-xl bg-pink-500 px-5 py-4 text-sm font-black text-white hover:bg-pink-600 disabled:opacity-70 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </motion.form>
          ) : (
            <motion.div
              key="call"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.24 }}
              className="max-w-3xl mx-auto rounded-3xl border border-slate-200 dark:border-zinc-900 bg-white/90 dark:bg-zinc-950/70 p-6 md:p-8 shadow-2xl backdrop-blur"
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-pink-500 mb-3">30 minute meeting</p>
                  <h2 className="text-3xl font-black mb-4">Book a quick product call</h2>
                  <p className="text-sm text-slate-500 dark:text-zinc-500 leading-relaxed max-w-xl">
                    Send me your preferred date, time, and project context by email. I will reply with a confirmed slot and meeting link.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-6 text-xs text-slate-500 dark:text-zinc-500">
                    <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-pink-500" />30m</span>
                    <span className="inline-flex items-center gap-2"><Video className="h-4 w-4 text-pink-500" />Google Meet</span>
                  </div>
                </div>
                <a
                  href="mailto:iawaisahmd@gmail.com?subject=Book%20a%2030%20minute%20call"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-black hover:bg-zinc-200 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
