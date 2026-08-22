import { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Lock, 
  Ban, 
  MessageSquare, 
  AlertTriangle, 
  Activity, 
  RefreshCw, 
  Mail, 
  ArrowLeft,
  Calendar
} from 'lucide-react';
import { TranslationDict } from '../types';

interface TermsOfUseProps {
  t: TranslationDict;
  language: 'en' | 'ur';
  setCurrentPage: (page: 'portfolio' | 'blog' | 'projects' | 'contact' | 'terms' | 'privacy') => void;
  setActiveSection: (sec: string) => void;
}

export default function TermsOfUse({ t, language, setCurrentPage, setActiveSection }: TermsOfUseProps) {
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBackToHome = () => {
    setCurrentPage('portfolio');
    setActiveSection('home');
    window.history.pushState(null, '', '/');
  };

  const handleGoToPrivacy = () => {
    setCurrentPage('privacy');
    window.history.pushState(null, '', '/privacy');
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
            {isUrdu ? 'استعمال کی شرائط' : 'Terms of Use'}
          </h1>
          <div className="mt-4 flex justify-center items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/60 w-fit mx-auto px-3 py-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/50">
            <Calendar className="h-3.5 w-3.5 text-pink-500" />
            <span>
              {isUrdu ? 'آخری بار اپڈیٹ کیا گیا: 25 مئی 2026' : 'Last updated: May 25, 2026'}
            </span>
          </div>
          <p className="mt-6 text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed max-w-2xl mx-auto border border-slate-200/40 dark:border-slate-800/40 bg-slate-100/50 dark:bg-slate-900/30 p-4 rounded-2xl">
            {isUrdu 
              ? 'awrs.me تک رسائی حاصل کرکے اور استعمال کرکے، آپ مندرجہ ذیل شرائط و ضوابط سے اتفاق کرتے ہیں۔ براہ کرم انہیں غور سے پڑھیں۔'
              : 'By accessing and using awrs.me, you agree to the following terms and conditions. Please read them carefully.'
            }
          </p>
        </div>

        {/* Terms Cards Grid / List */}
        <div className="space-y-6">

          {/* 1. Acceptance of Terms */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'شرائط کی قبولیت' : 'Acceptance of Terms'}
              </h2>
            </div>
            <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              {isUrdu 
                ? 'اس ویب سائٹ تک رسائی حاصل کر کے، آپ تسلیم کرتے ہیں کہ آپ نے ان شرائط کو پڑھا، سمجھا اور ان کا پابند ہونے کا اعتراف کیا ہے۔ اگر آپ ان شرائط سے متفق نہیں ہیں، تو براہ کرم اس ویب سائٹ کا استعمال نہ کریں۔'
                : 'By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree, please do not use this website.'
              }
            </p>
          </motion.div>

          {/* 2. Intellectual Property */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <Lock className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'دانشورانہ ملکیت' : 'Intellectual Property'}
              </h2>
            </div>
            <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              {isUrdu 
                ? 'اس ویب سائٹ پر موجود تمام مواد بشمول ٹیکسٹ، کوڈ، ڈیزائن، لوگوز، اور پروجیکٹ کی تفصیلات، اویس احمد کی دانشورانہ ملکیت ہیں جب تک کہ دوسری صورت میں بیان نہ کیا گیا ہو۔ آپ واضح تحریری اجازت کے بغیر اس مواد کو دوبارہ تیار، تقسیم یا اس سے اخذ کردہ کام تخلیق نہیں کر سکتے۔'
                : 'All content on this website — including but not limited to text, code, designs, logos, and project descriptions — is the intellectual property of Awais Ahmad unless otherwise stated. You may not reproduce, distribute, or create derivative works without explicit written permission.'
              }
            </p>
          </motion.div>

          {/* 3. Restrictions on Use */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <Ban className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'استعمال پر پابندیاں' : 'Restrictions on Use'}
              </h2>
            </div>
            <div className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="mb-2.5">{isUrdu ? 'آپ درج ذیل کام نہ کرنے پر اتفاق کرتے ہیں:' : 'You agree not to:'}</p>
              <ul className="list-disc list-inside space-y-2">
                <li>{isUrdu ? 'اس ویب سائٹ کو کسی بھی غیر قانونی مقصد کے لیے استعمال کرنا' : 'Use this website for any unlawful purpose'}</li>
                <li>{isUrdu ? 'ویب سائٹ کے کسی بھی حصے یا اس کے انفراسٹرکچر تک غیر مجاز رسائی حاصل کرنے کی کوشش کرنا' : 'Attempt to gain unauthorized access to any part of the website or its infrastructure'}</li>
                <li>{isUrdu ? 'اجازت کے بغیر مواد کو سکریپ یا ڈاؤن لوڈ کرنا' : 'Scrape, crawl, or harvest content without permission'}</li>
                <li>{isUrdu ? 'وزٹر وال فیچر پر کسی دوسرے شخص کی سوانح یا روپ دھارنا' : 'Impersonate another person or entity on the Wall feature'}</li>
                <li>{isUrdu ? 'وزٹر وال پر نقصان دہ، جارحانہ یا گمراہ کن مواد پوسٹ کرنا' : 'Post harmful, offensive, or misleading content on the Wall'}</li>
              </ul>
            </div>
          </motion.div>

          {/* 4. User-Generated Content */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'صارف کا تیار کردہ مواد' : 'User-Generated Content'}
              </h2>
            </div>
            <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              {isUrdu 
                ? 'وزٹر وال فیچر صارفین کو نوٹس اور ڈرائنگز پن کرنے کی اجازت دیتا ہے۔ مواد جمع کروا کر، آپ awrs.me کو ویب سائٹ پر اس مواد کو ظاہر کرنے کا ایک غیر خصوصی، رائلٹی فری لائسنس دیتے ہیں۔ آپ اس بات کو یقینی بنانے کے ذمہ دار ہیں کہ آپ کا مواد کسی قانون یا تیسرے فریق کے حقوق کی خلاف ورزی نہ کرے۔ میں اپنے صوابدید پر کسی بھی وقت کسی بھی مواد کو ہٹانے کا حق محفوظ رکھتا ہوں۔'
                : 'The Wall feature allows visitors to pin notes and drawings. By submitting content, you grant awrs.me a non-exclusive, royalty-free license to display that content on the website. You are responsible for ensuring your contributions do not violate any laws or third-party rights. I reserve the right to remove any content at my sole discretion.'
              }
            </p>
          </motion.div>

          {/* 5. No Warranty */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'کوئی وارنٹی نہیں' : 'No Warranty'}
              </h2>
            </div>
            <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              {isUrdu 
                ? 'یہ ویب سائٹ جوں کی توں (as is) فراہم کی گئی ہے، بغیر کسی صریح یا مضمر وارنٹی کے۔ میں اس بات کی ضمانت نہیں دیتا کہ ویب سائٹ ہر وقت دستیاب رہے گی، غلطیوں سے پاک ہوگی، یا کسی بھی خرابی کو ٹھیک کیا جائے گا۔'
                : 'This website is provided "as is" without warranties of any kind, express or implied. I do not guarantee that the website will be available at all times, free of errors, or that any defects will be corrected.'
              }
            </p>
          </motion.div>

          {/* 6. Limitation of Liability */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <Activity className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'ذمہ داری کی حد' : 'Limitation of Liability'}
              </h2>
            </div>
            <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              {isUrdu 
                ? 'قانون کے مطابق، اویس احمد اس ویب سائٹ کے استعمال سے پیدا ہونے والے کسی بھی بالواسطہ، اتفاقی، یا نتیجہ خیز نقصانات بشمول ڈیٹا کے نقصان یا معلومات تک غیر مجاز رسائی کے لیے جوابدہ نہیں ہوں گے۔'
                : 'To the fullest extent permitted by law, Awais Ahmad shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website, including but not limited to loss of data or unauthorized access to your information.'
              }
            </p>
          </motion.div>

          {/* 7. Changes to These Terms */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 shadow-sm"
          >
            <div className="flex items-center gap-3.5 mb-4 border-b border-slate-100 dark:border-slate-800/60 pb-3">
              <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <RefreshCw className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold font-sans text-slate-900 dark:text-slate-100">
                {isUrdu ? 'ان شرائط میں تبدیلیاں' : 'Changes to These Terms'}
              </h2>
            </div>
            <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
              {isUrdu 
                ? 'میں کسی بھی وقت ان شرائط میں ترمیم کرنے کا حق محفوظ رکھتا ہوں۔ تبدیلیاں پوسٹ ہونے پر فوری طور پر لاگو ہوتی ہیں۔ ویب سائٹ کا مسلسل استعمال ان شرائط کو قبول کرنے کے مترادف سمجھا جائے گا۔'
                : 'I reserve the right to modify these terms at any time. Changes take effect immediately upon posting. Continued use of the website constitutes acceptance of the updated terms.'
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
                ? 'اگر آپ کے پاس ان شرائط کے بارے میں کوئی سوالات ہیں، تو بلا جھجھک رابطہ کریں۔'
                : 'If you have any questions about these terms, feel free to reach out.'
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
            onClick={handleGoToPrivacy}
            className="font-sans font-bold hover:text-pink-500 dark:hover:text-pink-400 cursor-pointer transition-all"
          >
            {isUrdu ? 'رازداری کی پالیسی' : 'Privacy Policy'}
          </button>
        </div>

      </div>
    </div>
  );
}
