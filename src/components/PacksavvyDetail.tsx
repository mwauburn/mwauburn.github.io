import { ShoppingBag, Smartphone, Code2, Database, Camera, CloudRain } from 'lucide-react';
import AppDetailTemplate from './AppDetailTemplate';
import { TranslationDict } from '../types';

interface PacksavvyDetailProps {
  t: TranslationDict;
  language: 'en' | 'ur';
  setCurrentPage: (page: any) => void;
  setActiveSection: (sec: string) => void;
}

export default function PacksavvyDetail({ setCurrentPage, setActiveSection }: PacksavvyDetailProps) {
  return (
    <AppDetailTemplate
      name="PackPrep"
      description="Smart travel packing list app with trip planning, bag management, and offline-first storage."
      overview="PackPrep, listed as Travel Packing List: PackPrep, turns a trip idea into practical packing lists. It captures destination, dates, travelers, transport, accommodation, professions, pets, and special needs, then helps users organize items into bags, verify packed essentials, and avoid last-minute forgetting."
      appIcon={<img src="/app-icons/packsavvy.png" alt="PackPrep app icon" className="h-full w-full object-cover rounded-2xl" />}
      theme="indigo"
      actions={[
        { label: 'GitHub', href: 'https://github.com/iawaisahmd/packsavvy', icon: 'github' },
        { label: 'Web Demo', href: 'https://packsavvy.awrs.me', icon: 'external' },
        { label: 'Privacy Policy', href: '/privacy/packprep-privacy-policy.html', icon: 'privacy' }
      ]}
      specs={[
        ['TYPE', 'Travel Utility'],
        ['PLATFORM', 'Android / iOS / Web'],
        ['RELEASED', 'Q3 2025'],
        ['ROLE', 'Creator & Lead Dev']
      ]}
      features={[
        'Guided trip wizard with destination, dates, and travelers',
        '102 professional packing lists for smarter suggestions',
        'Bag manager for carry-on, checked luggage, and backpacks',
        'Photo proof for packed item verification',
        'Outfit planning across trip days',
        'Weather-aware suggestions for destination conditions',
        'Special needs support for pets, accessibility, and medical items',
        'Local-first trip data with fast offline access'
      ]}
      tech={[
        { name: 'Flutter', icon: <Smartphone className="h-7 w-7" /> },
        { name: 'Dart', icon: <Code2 className="h-7 w-7" /> },
        { name: 'Provider', icon: <ShoppingBag className="h-7 w-7" /> },
        { name: 'SQLite', icon: <Database className="h-7 w-7" /> },
        { name: 'Image Picker', icon: <Camera className="h-7 w-7" /> },
        { name: 'Weather', icon: <CloudRain className="h-7 w-7" /> }
      ]}
      stats={[
        { value: '102', label: 'Lists' },
        { value: '7', label: 'Screens' },
        { value: '100%', label: 'Local First' },
        { value: '3', label: 'Platforms' }
      ]}
      screenshots={[
        { src: '/screens/packsavvy_02.png', title: 'Home Dashboard' },
        { src: '/screens/packsavvy_03.png', title: 'Trip Wizard' },
        { src: '/screens/packsavvy_04.png', title: 'Traveler Details' },
        { src: '/screens/packsavvy_05.png', title: 'Special Needs' },
        { src: '/screens/packsavvy_06.png', title: 'Profession Lists' },
        { src: '/screens/packsavvy_07.png', title: 'Did I Forget?' },
        { src: '/screens/packsavvy_01.png', title: 'Splash Screen' }
      ]}
      privacyHref="/privacy/packprep-privacy-policy.html"
      privacyText="Learn how PackPrep handles local trip and packing data."
      setCurrentPage={setCurrentPage}
      setActiveSection={setActiveSection}
    />
  );
}
