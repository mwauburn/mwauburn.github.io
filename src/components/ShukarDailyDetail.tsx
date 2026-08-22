import { Smartphone, Code2, Database, Bell, BookOpen } from 'lucide-react';
import AppDetailTemplate from './AppDetailTemplate';
import { TranslationDict } from '../types';

interface ShukarDailyDetailProps {
  t: TranslationDict;
  language: 'en' | 'ur';
  setCurrentPage: (page: any) => void;
  setActiveSection: (sec: string) => void;
}

export default function ShukarDailyDetail({ setCurrentPage, setActiveSection }: ShukarDailyDetailProps) {
  return (
    <AppDetailTemplate
      name="Shukar Daily"
      description="A peaceful, ad-free Islamic gratitude journal and counter app for daily reflection."
      overview="Shukar Daily is an offline-first gratitude journal and counter app designed to help users notice blessings, build daily reflection habits, track streaks, save private journal entries, and read curated gratitude duas without ads, accounts, or cloud tracking."
      appIcon={<img src="/app-icons/shukar-daily.png" alt="Shukar Daily app icon" className="h-full w-full object-cover rounded-2xl" />}
      theme="emerald"
      actions={[
        { label: 'GitHub', href: 'https://github.com/iawaisahmd/shukar_daily', icon: 'github' },
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.shukrdaily.shukar_daily', icon: 'external' },
        { label: 'Web Demo', href: 'https://shukardaily.awrs.me', icon: 'external' },
        { label: 'Privacy Policy', href: '/privacy/shukar-daily-privacy-policy.html', icon: 'privacy' }
      ]}
      specs={[
        ['TYPE', 'Gratitude App'],
        ['PLATFORM', 'Android / iOS / Web'],
        ['RELEASED', 'Q1 2025'],
        ['ROLE', 'Creator & Lead Dev']
      ]}
      features={[
        'Interactive Alhamdulillah counter with smooth tap feedback',
        'Private offline gratitude journal for daily reflections',
        'Curated gratitude duas with translations and references',
        'Daily reminders for morning and evening reflection',
        'Weekly progress, streaks, and gratitude insights',
        'Local-first storage with no ads, accounts, or trackers',
        'Simple settings for reminders, language, and app behavior',
        'Clean spiritual interface built for calm repeated use'
      ]}
      tech={[
        { name: 'Flutter', icon: <Smartphone className="h-7 w-7" /> },
        { name: 'Dart', icon: <Code2 className="h-7 w-7" /> },
        { name: 'Hive DB', icon: <Database className="h-7 w-7" /> },
        { name: 'Provider', icon: <BookOpen className="h-7 w-7" /> },
        { name: 'Notifications', icon: <Bell className="h-7 w-7" /> }
      ]}
      stats={[
        { value: '3', label: 'Platforms' },
        { value: '2', label: 'Languages' },
        { value: '100%', label: 'Offline' },
        { value: '0', label: 'Ads' }
      ]}
      screenshots={[
        { src: '/screens/shukar_01.png', title: 'Home Screen' },
        { src: '/screens/shukar_02.png', title: 'Settings' },
        { src: '/screens/shukar_03.png', title: 'Gratitude Duas' },
        { src: '/screens/shukar_04.png', title: 'Journal' },
        { src: '/screens/shukar_05.png', title: 'Progress' }
      ]}
      privacyHref="/privacy/shukar-daily-privacy-policy.html"
      privacyText="Learn how Shukar Daily keeps journal and counter data local."
      setCurrentPage={setCurrentPage}
      setActiveSection={setActiveSection}
    />
  );
}
