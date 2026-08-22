import { Sparkles, Smartphone, Code2, Camera, Database, Search } from 'lucide-react';
import AppDetailTemplate from './AppDetailTemplate';
import { TranslationDict } from '../types';

interface LuminaDetailProps {
  t: TranslationDict;
  language: 'en' | 'ur';
  setCurrentPage: (page: any) => void;
  setActiveSection: (sec: string) => void;
}

export default function LuminaDetail({ setCurrentPage, setActiveSection }: LuminaDetailProps) {
  return (
    <AppDetailTemplate
      name="Lumina"
      description="Smart cosmetic ingredient scanner and skin safety analyzer."
      overview="Lumina helps users understand what touches their skin. It scans or accepts cosmetic ingredient labels, flags comedogenic risks and allergens, suggests safer alternatives, and stores useful ingredient references locally for faster shopping decisions."
      appIcon={<img src="/app-icons/lumina.png" alt="Lumina app icon" className="h-full w-full object-cover rounded-2xl" />}
      theme="amber"
      actions={[
        { label: 'GitHub', href: 'https://github.com/iawaisahmd/lumina_skincare', icon: 'github' },
        { label: 'Web Demo', href: 'https://lumina.awrs.me', icon: 'external' },
        { label: 'Privacy Policy', href: '/privacy/lumina-privacy-policy.html', icon: 'privacy' }
      ]}
      specs={[
        ['TYPE', 'AI Skin App'],
        ['PLATFORM', 'Android / iOS / Web'],
        ['RELEASED', 'Q2 2025'],
        ['ROLE', 'Creator & Lead Dev']
      ]}
      features={[
        'Camera label scanner for cosmetic ingredient lists',
        'OCR-powered text extraction from product packaging',
        'Comedogenic rating engine for acne-prone skin',
        'Personal allergen and irritant warnings',
        'Safer ingredient alternatives for risky formulas',
        'Saved ingredient list for shopping reference',
        'Offline local history for scanned products',
        'Clean skin-focused interface for quick decisions'
      ]}
      tech={[
        { name: 'Flutter', icon: <Smartphone className="h-7 w-7" /> },
        { name: 'Dart', icon: <Code2 className="h-7 w-7" /> },
        { name: 'ML Kit', icon: <Camera className="h-7 w-7" /> },
        { name: 'Gemini', icon: <Sparkles className="h-7 w-7" /> },
        { name: 'Hive DB', icon: <Database className="h-7 w-7" /> },
        { name: 'Search', icon: <Search className="h-7 w-7" /> }
      ]}
      stats={[
        { value: '98%', label: 'OCR Flow' },
        { value: '15k+', label: 'Ingredient DB' },
        { value: '5k+', label: 'Downloads' },
        { value: '4.9/5', label: 'Rating' }
      ]}
      screenshots={[
        { src: '/screens/lumina_01.png', title: 'Home Dashboard' },
        { src: '/screens/lumina_02.png', title: 'Label Scanner' },
        { src: '/screens/lumina_03.png', title: 'Ingredient Report' },
        { src: '/screens/lumina_04.png', title: 'Saved Ingredients' }
      ]}
      privacyHref="/privacy/lumina-privacy-policy.html"
      privacyText="Learn how Lumina handles scan history and ingredient data."
      setCurrentPage={setCurrentPage}
      setActiveSection={setActiveSection}
    />
  );
}
