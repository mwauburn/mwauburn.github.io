import { Project, BlogPost, TranslationDict } from '../types';

export const translations: Record<'en' | 'ur', TranslationDict> = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navBlog: "Blog",
    navWall: "The Wall",
    navContact: "Contact",
    heroGreeting: "Hi, I'm",
    heroTitle: "Awais Ahmad",
    heroSubtitle: "A professional app developer dedicated to crafting high-performance, elegant mobile and web experiences.",
    heroCtaWork: "View Projects",
    heroCtaContact: "Let's Connect",
    aboutTitle: "About Me",
    aboutSubtitle: "Discover my journey, background, and the interactive elements that represent my daily life.",
    experienceTitle: "Professional Experience",
    experienceSubtitle: "A timeline of my software engineering journey, contract collaborations, and technical milestones.",
    skillsTitle: "Core Expertise",
    skillsSubtitle: "The technologies and frameworks I use to bring ideas to life.",
    projectsTitle: "Featured Projects",
    projectsSubtitle: "A showcase of custom-built applications under active development.",
    projectsStatus: "Active Project",
    blogTitle: "Technical Blog",
    blogSubtitle: "Articles and tutorials on mobile development, performance optimization, and modern tech.",
    blogReadMore: "Read Article",
    wallTitle: "The Wall",
    wallSubtitle: "Leave a nice public note, sign your presence, or share what's on your mind!",
    wallSubmit: "Sign the Wall",
    wallSuccess: "Your message has been posted on the wall!",
    contactTitle: "Get in Touch",
    contactSubtitle: "Have an app idea or need a developer? Drop a message and let's build something exceptional.",
    contactName: "Your Name",
    contactEmail: "Your Email Address",
    contactSubject: "Subject",
    contactMessage: "Your Message",
    contactSubmit: "Send Message",
    contactSubmitting: "Sending...",
    contactSuccess: "Thank you! Your message has been sent successfully. I'll get back to you shortly.",
    footerRights: "All rights reserved."
  },
  ur: {
    navHome: "ہوم",
    navAbout: "میرے بارے میں",
    navExperience: "تجربہ",
    navSkills: "مہارت",
    navProjects: "پروجیکٹس",
    navBlog: "بلاگ",
    navWall: "دیوار",
    navContact: "رابطہ",
    heroGreeting: "سلام، میں ہوں",
    heroTitle: "اویس احمد",
    heroSubtitle: "ایک پیشہ ور ایپ ڈویلپر جو اعلیٰ کارکردگی اور خوبصورت موبائل اور ویب ایپلی کیشنز بنانے میں مہارت رکھتا ہے۔",
    heroCtaWork: "پروجیکٹس دیکھیں",
    heroCtaContact: "رابطہ کریں",
    aboutTitle: "میرے بارے میں",
    aboutSubtitle: "میرا سفر، پس منظر اور ان انٹرایکٹو عناصر کو دریافت کریں جو میری روزمرہ کی زندگی کی عکاسی کرتے ہیں۔",
    experienceTitle: "پیشہ ورانہ تجربہ",
    experienceSubtitle: "میرے سوفٹ ویئر انجینئرنگ کا سفر، کنٹریکٹ پر کام اور اہم تکنیکی سنگِ میل کی تفصیل۔",
    skillsTitle: "بنیادی مہارت",
    skillsSubtitle: "وہ ٹیکنالوجیز جنہیں میں خیالات کو حقیقت کا روپ دینے کے لیے استعمال کرتا ہوں۔",
    projectsTitle: "نمایاں پروجیکٹس",
    projectsSubtitle: "زیرِ تعمیر اور جدید ترین ایپلی کیشنز کا ایک شوکیس۔",
    projectsStatus: "فعال پروجیکٹ",
    blogTitle: "تکنیکی بلاگ",
    blogSubtitle: "موبائل ڈویلپمنٹ، کارکردگی اور جدید ویب ٹیکنالوجی پر مضامین۔",
    blogReadMore: "مضمون پڑھیں",
    wallTitle: "دیوارِ پیغام",
    wallSubtitle: "ایک اچھا عوامی پیغام چھوڑیں، اپنی موجودگی درج کریں، یا اپنے خیالات کا اظہار کریں!",
    wallSubmit: "دیوار پر دستخط کریں",
    wallSuccess: "آپ کا پیغام کامیابی کے ساتھ دیوار پر شائع ہو گیا ہے!",
    contactTitle: "رابطہ کریں",
    contactSubtitle: "کوئی ایپ کا خیال ہے یا ڈویلپر کی ضرورت ہے؟ پیغام بھیجیں اور مل کر کچھ بہترین بناتے ہیں۔",
    contactName: "آپ کا نام",
    contactEmail: "آپ کا ای میل",
    contactSubject: "موضوع",
    contactMessage: "آپ کا پیغام",
    contactSubmit: "پیغام بھیجیں",
    contactSubmitting: "بھیجا جا رہا ہے...",
    contactSuccess: "شکریہ! آپ کا پیغام کامیابی کے ساتھ موصول ہو گیا ہے۔ میں جلد ہی آپ سے رابطہ کروں گا۔",
    footerRights: "جملہ حقوق محفوظ ہیں۔"
  }
};

export const skillsData = [
  {
    category: "Mobile App Development",
    icon: "Smartphone",
    skills: [
      { name: "React Native / Expo", level: 95 },
      { name: "Flutter / Dart", level: 85 },
      { name: "Swift / iOS", level: 80 },
      { name: "Kotlin / Android", level: 75 },
      { name: "App Store Optimization", level: 85 }
    ]
  },
  {
    category: "Frontend Web Stack",
    icon: "Layout",
    skills: [
      { name: "React.js / Next.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "State Management (Zustand, Redux)", level: 90 },
      { name: "Motion Animations", level: 88 }
    ]
  },
  {
    category: "Backend & Storage",
    icon: "Database",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Firebase (Firestore, Auth)", level: 92 },
      { name: "PostgreSQL & Supabase", level: 85 },
      { name: "RESTful APIs / GraphQL", level: 90 },
      { name: "Cloud Functions / Serverless", level: 82 }
    ]
  },
  {
    category: "Developer Workflow",
    icon: "Cpu",
    skills: [
      { name: "Git & GitHub CI/CD", level: 92 },
      { name: "Docker & Containerization", level: 78 },
      { name: "Figma UI/UX Prototyping", level: 85 },
      { name: "Jest & Native Testing", level: 80 }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "shukar-daily",
    name: "Shukar Daily",
    index: "01",
    quarter: "Q1 2025",
    category: "MOBILE APP",
    tagline: "A peaceful, ad-free Islamic gratitude journal and counters app to build daily reflection streaks",
    description: "Shukar Daily is a beautifully minimalist, offline-first gratitude journal and counter app designed to help you notice and celebrate your blessings. With rich stats tracking, daily reminders, elegant local journal entries, interactive counter rings, and custom gratitude duas, it serves as a peaceful digital sanctuary for reflection and daily spiritual streaks without any ads or distractions.",
    tags: ["Flutter", "Dart", "Hive DB", "Local Notifications", "Provider"],
    features: [
      "Daily Shukr Counter with high-fidelity animations, a responsive green ring, and live status metrics",
      "Full offline-first Gratitude Journal with prompt guidance to capture daily reflections and blessings",
      "Curated 30 Duas of Gratitude with complete Arabic text, English/Urdu translation, transliteration, and authentic Hadith sources",
      "Smart recurring local notification reminders for morning gratitude and evening reflection triggers"
    ],
    metrics: [
      { label: "User Rating", value: "5.0 ★" },
      { label: "Ad Experience", value: "100% Free" },
      { label: "Data Security", value: "Full Offline" }
    ],
    image: "from-emerald-950 to-teal-900",
    accentColor: "emerald-500",
    links: {
      github: "https://github.com/iawaisahmd/shukar_daily",
      demo: "https://shukardaily.awrs.me"
    }
  },
  {
    id: "lumina",
    name: "Lumina",
    index: "02",
    quarter: "Q2 2025",
    category: "AI MOBILE APP",
    tagline: "Know what touches your skin — Smart cosmetic ingredient scanner & allergen analyzer",
    description: "Lumina is an intelligent skincare and cosmetic ingredient scanner designed to empower users to analyze product formulations instantly. Using mobile OCR and Google ML Kit combined with Gemini AI analysis, Lumina extracts ingredient lists from product labels, detects personal allergens, calculates comedogenic risk scores, and provides clean, evidence-based ingredient insights.",
    tags: ["Flutter", "Dart", "Google ML Kit", "Gemini API", "Hive DB", "Provider"],
    features: [
      "Real-time Camera Label OCR Scanner & Instant Ingredient List Parsing",
      "Comedogenic Rating Calculator (0-5 scale) with acne risk warnings & pore-clogging flags",
      "Personalized Allergen Detector flagging Fragrances, Parabens, Sulfates, Retinoids, and custom irritants",
      "Curated 'My Safe List' & Product Library with offline bookmarking and safer ingredient alternatives"
    ],
    metrics: [
      { label: "Scan Accuracy", value: "98.5%" },
      { label: "Ingredient DB", value: "15,000+" },
      { label: "User Rating", value: "4.9 ★" }
    ],
    image: "from-amber-950 to-stone-900",
    accentColor: "amber-500",
    links: {
      github: "https://github.com/iawaisahmd/lumina_skincare",
      demo: "https://lumina.awrs.me"
    }
  },
  {
    id: "packsavvy",
    name: "Packsavvy",
    index: "03",
    quarter: "Q4 2024",
    category: "UTILITY APP",
    tagline: "Smart Packing List Companion",
    description: "Packsavvy is an elegant, intelligent utility app that generates bespoke, travel checklist templates adjusted for local destination climates, trip duration, and custom-added activities. Designed to reduce pre-travel cognitive load through stateful offline synchronization.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Weather API"],
    features: [
      "Intelligent weather-informed automated checklist generator",
      "Preloaded checklists for hiking, diving, business, and ski trips",
      "Integrated luggage limit calculators with airline support lists",
      "Fully responsive state system with multi-device local synchronizing"
    ],
    metrics: [
      { label: "Travelers Helped", value: "8,500+" },
      { label: "Lists Created", value: "32,000+" },
      { label: "Load Time", value: "0.2s" }
    ],
    image: "from-[#1b152e] to-[#0c0a17]",
    accentColor: "indigo-500",
    links: {
      github: "https://github.com/iawaisahmd/packsavvy",
      demo: "https://packsavvy.awrs.me"
    }
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "offline-first-react-native",
    title: "Building Offline-First React Native Apps",
    summary: "A comprehensive developer's guide on structuring robust offline support using SQLite, Zustand, and background synchronization.",
    date: "June 28, 2026",
    readTime: "6 min read",
    tags: ["React Native", "Offline-First", "Zustand", "SQLite"],
    category: "Mobile Architecture",
    views: 1240,
    content: `## Why Offline-First Matters

In mobile application development, network reliability is a luxury. Your app should remain perfectly functional during subways transits, flight modes, or in regions with patchy connectivity. An offline-first architecture isn't just a fallback; it defines a premium, seamless user experience.

### Core Architecture Principles

Building an offline-first app requires two primary layers:
1. **Local Storage Engine**: A fast, low-overhead database directly on the device (e.g., SQLite, WatermelonDB, or MMKV).
2. **Synchronization Coordinator**: A background queue system that tracks local operations, batches them, and fires requests when an active network connection is detected.

### Sample Zustand + SQLite Store Workflow

Let's look at how we structure local writes first, then queue synching:

\`\`\`typescript
import { create } from 'zustand';
import NetInfo from '@react-native-community/netinfo';

interface SyncQueueItem {
  id: string;
  action: 'CREATE' | 'UPDATE' | 'DELETE';
  payload: any;
}

export const useTodoStore = create((set, get) => ({
  todos: [],
  syncQueue: [],
  
  addTodo: async (todo) => {
    // 1. Instantly write to Local SQLite
    await database.writeTodo(todo);
    set((state) => ({ todos: [...state.todos, todo] }));
    
    // 2. Add to Sync Queue
    const syncItem = { id: todo.id, action: 'CREATE', payload: todo };
    set((state) => ({ syncQueue: [...state.syncQueue, syncItem] }));
    
    // 3. Attempt instantaneous sync
    get().triggerSync();
  },
  
  triggerSync: async () => {
    const state = NetInfo.fetch();
    if (!state.isConnected) return;
    
    const queue = get().syncQueue;
    if (queue.length === 0) return;
    
    try {
      await api.syncBatch(queue);
      set({ syncQueue: [] }); // Clear queue on success
    } catch (err) {
      console.warn("Sync failed, retrying on next cycle", err);
    }
  }
}));
\`\`\`

### Key Takeaways

By writing to the local store **first**, UI updates become instantaneous (0ms perceived latency). Sync queries run quietly in the background without blocking user action. It's the secret to creating responsive, professional mobile apps like *Packsavvy* and *Shukar Daily*.`
  },
  {
    id: "skincare-ocr-gemini",
    title: "Decoding Cosmetic Chemistry: Combining OCR & Gemini API",
    summary: "How I engineered Lumina's scanning engine using Google ML Kit and Gemini Pro to analyze complex skincare ingredients in real-time.",
    date: "May 15, 2026",
    readTime: "8 min read",
    tags: ["Flutter", "Google ML Kit", "Gemini API", "OCR"],
    category: "AI Integration",
    views: 1890,
    content: `## The Problem: Cosmetic Jargon

Picking skincare products is a battlefield of unpronounceable chemical names (like *Methylisothiazolinone* or *Tetrasodium EDTA*). Most consumers have no idea if a product contains active irritants, pore-clogging comedogens, or hormones disruptors. 

For **Lumina**, we set out to build an app that acts as an expert dermatologist in your pocket. This article details the pipeline that captures ingredients and transforms them into clear, visual, and personalized analysis.

### The Scanning Architecture Pipeline

Our pipeline consists of three major stages:
1. **Camera Image Capture & Crop**: A high-contrast mobile camera screen overlays a target capture card.
2. **On-Device Optical Character Recognition (OCR)**: Utilizing **Google ML Kit** on-device scanner to parse lines of chemical text in milliseconds.
3. **Structured Gemini Processing**: Forwarding raw parsed text to our Express backend which queries Gemini with structured prompts, returning an exact JSON format.

\`\`\`
[Camera View] -> [Google ML Kit OCR] -> [Raw Ingredient String]
                                              |
                                              v
[Dermatology Database] <- [Structured JSON] <- [Express Backend (Gemini Pro)]
\`\`\`

### Crafting the AI Analysis Prompt

To get incredibly fast and highly reliable results from the LLM, we use strict JSON schemas. We instruct Gemini to act as a toxicologist and cosmetic chemist:

\`\`\`typescript
const prompt = \`
You are an expert cosmetic toxicologist. Analyze the following list of skincare ingredients.
List: "\${rawIngredients}"

Return a structured JSON object strictly conforming to this interface:
{
  "safetyScore": number (1-10, where 10 is perfect),
  "hasAllergens": boolean,
  "hazardIngredients": [
    { "name": string, "hazardLevel": "HIGH"|"MEDIUM"|"LOW", "description": string }
  ],
  "comedogenicRating": number (0-5),
  "keyBeneficials": [
    { "name": string, "benefit": string }
  ]
}
\`;
\`\`\`

### Performance Optimization

To ensure fast load speeds:
* **Local OCR Filtering**: We run regex cleanups on the device to drop header noise, brand names, and weights before passing strings to the backend.
* **Streamlining Server Responses**: The parsed JSON is instantly cached. If another user scans a product containing identical ingredients, our database resolves the query in **less than 10ms**, bypassing the Gemini API entirely.

Through smart local filters and structured LLM queries, Lumina delivers a premium scanner experience that runs in less than two seconds.`
  },
  {
    id: "mastering-react-motion-animations",
    title: "Seamless Screen Transitions in React with Motion",
    summary: "How to implement premium, smooth-as-butter layout animations and slide-overs without compromising on page load times.",
    date: "April 02, 2026",
    readTime: "5 min read",
    tags: ["React", "Motion", "Tailwind CSS", "UI/UX"],
    category: "Frontend Craft",
    views: 1530,
    content: `## Animation as Communication

In a generic app, changing routes or opening details is a harsh, instant pop. In a premium portfolio or high-end mobile app, transitions are **organic**. They provide spatial context—letting the user know exactly *where* a panel came from and *where* it is returning.

For this website, I used the **Motion** library (formerly Framer Motion) integrated with Tailwind CSS to construct natural, responsive spring-based movements.

### Principle 1: Spring Physics Over Durations

Avoid standard linear or cubic-bezier durations. In nature, things don't stop abruptly or move at constant speeds; they have inertia, drag, and rebound. Spring transitions feel infinitely more comfortable to the human eye.

\`\`\`typescript
// ❌ Flat and artificial
const badAnimation = { transition: { duration: 0.3, ease: 'easeOut' } };

// ✅ Warm, professional, and tactile
const premiumSpring = {
  type: 'spring',
  stiffness: 180,
  damping: 24,
  mass: 0.8
};
\`\`\`

### Principle 2: Layout Animations

One of the most powerful features of Motion is \`layout\`. If a card expands in size, or an item in a list is deleted, adding the \`layout\` prop instructs Motion to automatically and smoothly animate the sizing and positioning changes of neighboring elements.

\`\`\`jsx
import { motion } from 'motion/react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div layout className="border-b border-gray-200 py-4">
      <motion.h3 layout="position" onClick={() => setIsOpen(!isOpen)} className="cursor-pointer font-medium">
        {title}
      </motion.h3>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-2 text-gray-600"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
\`\`\`

### Performance Considerations

Every animation requires browser paint. To keep the site loading and scrolling at a locked 120 FPS:
* Use \`transform\` transitions (like \`x\`, \`y\`, \`scale\`) instead of modifying top, left, width, or height properties, which force layout calculations.
* Wrap large layout updates in \`<AnimatePresence>\` to ensure elements animate beautifully as they exit the React DOM.

By sticking to spring-based physics and hardware-accelerated transforms, you can deliver an immersive, tactile digital experience.`
  }
];
