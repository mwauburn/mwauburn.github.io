import { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Database, 
  Shield, 
  Link as LinkIcon, 
  Clock, 
  Eye, 
  Users, 
  FileText, 
  Mail, 
  ArrowLeft,
  Calendar
} from 'lucide-react';
import { TranslationDict } from '../types';

interface PrivacyPolicyProps {
  t: TranslationDict;
  language: 'en' | 'ur';
  setCurrentPage: (page: 'portfolio' | 'blog' | 'projects' | 'contact' | 'terms' | 'privacy') => void;
  setActiveSection: (sec: string) => void;
}

export default function PrivacyPolicy({ t, language, setCurrentPage, setActiveSection }: PrivacyPolicyProps) {
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBackToHome = () => {
    setCurrentPage('portfolio');
    setActiveSection('home');
    window.history.pushState(null, '', '/');
  };

  const handleGoToTerms = () => {
    setCurrentPage('terms');
    window.history.pushState(null, '', `/${language}/terms`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Hero Section */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-pink-500 dark:text-pink-400">
            {isUrdu ? 'قانونی' : 'LEGAL'}
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-sans font-black tracking-tight text-slate-900 dark:text-white">
            {isUrdu ? 'رازداری کی پالیسی' : 'Privacy Policy'}
          </h1>
          <div className="mt-4 flex justify-center items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/60 w-fit mx-auto px-3 py-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/50">
            <Calendar className="h-3.5 w-3.5 text-pink-500" />
            <span>
              {isUrdu ? 'آخری بار اپڈیٹ کیا گیا: 25 مئی 2026' : 'Last updated: May 25, 2026'}
            </span>
          </div>
          <p className="mt-6 text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed max-w-2xl mx-auto border border-slate-200/40 dark:border-slate-800/40 bg-slate-100/50 dark:bg-slate-900/30 p-4 rounded-2xl">
            {isUrdu 
              ? 'آپ کی رازداری ہمارے لیے اہم ہے۔ یہ پالیسی تفصیل سے بتاتی ہے کہ awrs.me کون سا ڈیٹا جمع کرتا ہے، ہم اسے کیوں جمع کرتے ہیں، اور آپ اسے کیسے کنٹرول کر سکتے ہیں۔'
              : 'Your privacy matters. This policy explains exactly what data awrs.me collects, why we collect it, and how you can control it.'
            }
          </p>
        </div>

        {/* Policy Cards Grid / List */}
        <div className="space-y-6">

          {/* 1. What We Collect */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <Database className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'ہم کیا معلومات جمع کرتے ہیں' : 'What We Collect'}
              </h2>
            </div>
            <div className="space-y-4 text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              <div>
                <h3 className="font-extrabold text-slate-800 dark:text-slate-250 mb-1">
                  {isUrdu ? 'تصدیق (Authentication)' : 'Authentication'}
                </h3>
                <p>
                  {isUrdu 
                    ? 'جب آپ وزٹر وال فیچر میں سائن ان کرتے ہیں، تو ہم سپابیس آتھ کے ذریعے آپ کے گٹ ہب یا گوگل اکاؤنٹ سے آپ کا نام اور پروفائل تصویر حاصل کرتے ہیں۔ ہم آپ کے ای میل، ریپوزٹریز، یا کسی دوسرے اکاؤنٹ کے ڈیٹا تک رسائی حاصل نہیں کرتے۔'
                    : 'When you sign in to the Wall feature, we receive your name and avatar from your GitHub or Google account via Supabase Auth. We do not access your email, repositories, or any other account data.'
                  }
                </p>
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 dark:text-slate-250 mb-1">
                  {isUrdu ? 'رابطہ فارم (Contact Form)' : 'Contact Form'}
                </h3>
                <p>
                  {isUrdu 
                    ? 'جب آپ رابطہ فارم کے ذریعے پیغام بھیجتے ہیں، تو ہم آپ کا نام، ای میل پتہ، منتخب موضوع اور پیغام کا مواد جمع کرتے ہیں۔ یہ ڈیٹا ریسینڈ کے ذریعے بھیجا جاتا ہے اور اسے صرف آپ کے سوال کا جواب دینے کے لیے استعمال کیا جاتا ہے۔'
                    : 'When you send a message through the contact form, we collect your name, email address, selected topic, and message content. This data is sent via Resend and is used solely to respond to your inquiry.'
                  }
                </p>
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 dark:text-slate-250 mb-1">
                  {isUrdu ? 'وال کا مواد (Wall Content)' : 'Wall Content'}
                </h3>
                <p>
                  {isUrdu 
                    ? 'اگر آپ وزٹر وال پر کوئی نوٹ پن کرتے ہیں، تو آپ کا تخلیق کردہ مواد (ٹیکسٹ، ڈرائنگ) آپ کے نام اور پروفائل تصویر کے ساتھ محفوظ کیا جاتا ہے۔'
                    : 'If you pin a note or drawing on the visitor Wall, the content you create (text, drawings) is stored along with your display name and avatar.'
                  }
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. How We Use Your Data */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <Shield className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'ہم آپ کے ڈیٹا کا استعمال کیسے کرتے ہیں' : 'How We Use Your Data'}
              </h2>
            </div>
            <ul className="list-disc list-inside space-y-2.5 text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              <li>
                {isUrdu ? 'وال فیچر پر آپ کی شناخت کی تصدیق کرنے کے لیے تاکہ آپ نوٹ پن کر سکیں' : 'To authenticate you on the Wall feature so you can leave pins'}
              </li>
              <li>
                {isUrdu ? 'رابطہ فارم کے ذریعے بھیجے گئے پیغامات کا جواب دینے کے لیے' : 'To respond to messages you send through the contact form'}
              </li>
              <li>
                {isUrdu ? 'وزٹر وال پر آپ کے تعاون کو ظاہر کرنے کے لیے' : 'To display your contributions on the visitor Wall'}
              </li>
              <li>
                {isUrdu ? 'ویب سائٹ کے تجربے کو بہتر بنانے کے لیے' : 'To improve the website experience'}
              </li>
            </ul>
          </motion.div>

          {/* 3. Third-Party Services */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <LinkIcon className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'تیسرے فریق کی خدمات' : 'Third-Party Services'}
              </h2>
            </div>
            <div className="space-y-4 text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              <div>
                <h3 className="font-extrabold text-slate-800 dark:text-slate-250 mb-1">Supabase</h3>
                <p>
                  {isUrdu 
                    ? 'لاگ ان اور ڈیٹا بیس اسٹوریج کو سنبھالتا ہے۔ آپ کا ڈیٹا سپابیس کے محفوظ انفراسٹرکچر پر اسٹور کیا جاتا ہے۔'
                    : 'Handles authentication and database storage. Your data is stored securely on Supabase infrastructure.'
                  }
                </p>
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 dark:text-slate-250 mb-1">Resend</h3>
                <p>
                  {isUrdu 
                    ? 'رابطہ فارم کی ای میلز پروسیس کرتا ہے۔ آپ کا پیغام میرے ان باکس تک پہنچنے کے لیے ریسینڈ کے سرورز سے گزرتا ہے۔'
                    : "Processes contact form emails. Your message data passes through Resend's servers to reach my inbox."
                  }
                </p>
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 dark:text-slate-250 mb-1">Vercel</h3>
                <p>
                  {isUrdu 
                    ? 'اس ویب سائٹ کی میزبانی (Hosting) کرتا ہے۔ ورسیل گمنام تجزیات اور کارکردگی کی پیمائش جمع کر سکتا ہے۔'
                    : 'Hosts this website. Vercel may collect anonymous usage analytics and performance metrics.'
                  }
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. Data Retention */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <Clock className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'ڈیٹا برقرار رکھنا' : 'Data Retention'}
              </h2>
            </div>
            <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              {isUrdu 
                ? 'رابطہ فارم کے ذریعے موصول ہونے والے پیغامات صرف اس وقت تک برقرار رکھے جاتے ہیں جب تک آپ کے سوال کا جواب دینے کے لیے ضروری ہو۔ وال کے نوٹ اس وقت تک ظاہر رہیں گے جب تک آپ انہیں ہٹانے کی درخواست نہ کریں۔ تصدیقی ڈیٹا اس وقت تک برقرار رکھا جاتا ہے جب تک آپ کا اکاؤنٹ موجود ہے۔'
                : 'Contact form submissions are retained only as long as needed to respond to your inquiry. Wall contributions remain visible unless you request removal. Authentication data is retained as long as your account exists.'
              }
            </p>
          </motion.div>

          {/* 5. Your Rights */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <Eye className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'آپ کے حقوق' : 'Your Rights'}
              </h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              <li>{isUrdu ? 'اپنے محفوظ کردہ ڈیٹا کی نقل طلب کرنا' : 'Request a copy of your data'}</li>
              <li>{isUrdu ? 'اپنے ڈیٹا کو حذف کرنے کی درخواست کرنا' : 'Request deletion of your data'}</li>
              <li>{isUrdu ? 'وزٹر وال پر اپنے نوٹ ہٹانے کی درخواست کرنا' : 'Request removal of your Wall contributions'}</li>
              <li>{isUrdu ? 'کسی بھی وقت ڈیٹا پروسیسنگ کی رضامندی واپس لینا' : 'Withdraw consent for data processing at any time'}</li>
            </ul>
            <p className="mt-4 text-xs font-sans text-slate-500 dark:text-slate-500 leading-relaxed italic border-t border-slate-100 dark:border-slate-800/40 pt-3">
              {isUrdu 
                ? 'ان حقوق میں سے کسی کو استعمال کرنے کے لیے، براہ کرم نیچے دیے گئے ای میل پر مجھ سے رابطہ کریں۔'
                : 'To exercise any of these rights, contact me at the email below.'
              }
            </p>
          </motion.div>

          {/* 6. Children's Privacy */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'بچوں کی رازداری' : "Children's Privacy"}
              </h2>
            </div>
            <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              {isUrdu 
                ? 'یہ ویب سائٹ 13 سال سے کم عمر بچوں کے لیے نہیں ہے۔ میں جان بوجھ کر بچوں سے ذاتی معلومات جمع نہیں کرتا۔ اگر آپ کو لگتا ہے کہ کسی بچے نے ہمیں معلومات فراہم کی ہیں، تو براہ کرم رابطہ کریں تاکہ میں اسے فوری طور پر حذف کر سکوں۔'
                : 'This website is not directed at children under 13. I do not knowingly collect personal data from children. If you believe a child has provided data, please contact me so I can remove it.'
              }
            </p>
          </motion.div>

          {/* 7. Changes to This Policy */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'اس پالیسی میں تبدیلیاں' : 'Changes to This Policy'}
              </h2>
            </div>
            <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              {isUrdu 
                ? 'میں وقتاً فوقتاً اس رازداری کی پالیسی کو اپ ڈیٹ کر سکتا ہوں۔ تبدیلیاں اس صفحے پر نئی تاریخ کے ساتھ شائع کی جائیں گی۔ تبدیلیوں کے بعد ویب سائٹ کا مسلسل استعمال نئی پالیسی کو قبول کرنے کے مترادف سمجھا جائے گا۔'
                : 'I may update this privacy policy from time to time. Changes will be reflected on this page with an updated date. Continued use of the website after changes constitutes acceptance of the revised privacy policy.'
              }
            </p>
          </motion.div>

          {/* 8. Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'رابطہ کریں' : 'Contact'}
              </h2>
            </div>
            <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {isUrdu 
                ? 'اگر آپ کے پاس اس رازداری کی پالیسی یا اپنے ڈیٹا کے استعمال کے بارے میں کوئی سوالات ہیں، تو بلا جھجھک رابطہ کریں۔'
                : 'If you have any questions about this privacy policy or how your data is handled, feel free to reach out.'
              }
            </p>
            <a 
              href="mailto:iawaisahmd@gmail.com" 
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-xl text-xs font-extrabold font-mono hover:scale-105 active:scale-95 transition-all"
            >
              <Mail className="h-4 w-4" />
              <span>iawaisahmd@gmail.com</span>
            </a>
          </motion.div>

        </div>

        {/* Sub-navigation & Footer links */}
        <div className="mt-12 flex items-center justify-between border-t border-slate-200/60 dark:border-slate-800/60 pt-6 text-xs text-slate-500 dark:text-slate-400">
          <button 
            onClick={handleBackToHome}
            className="flex items-center gap-2 font-sans font-bold hover:text-pink-500 dark:hover:text-pink-400 cursor-pointer transition-all hover:-translate-x-1"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{isUrdu ? 'ہوم پیج پر واپس جائیں' : 'Back to Home'}</span>
          </button>

          <button 
            onClick={handleGoToTerms}
            className="font-sans font-bold hover:text-pink-500 dark:hover:text-pink-400 cursor-pointer transition-all"
          >
            {isUrdu ? 'استعمال کی شرائط' : 'Terms of Use'}
          </button>
        </div>

      </div>
    </div>
  );
}
