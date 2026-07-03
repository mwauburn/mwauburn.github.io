import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Apple, Play } from 'lucide-react';
import appsData from '../data/apps.json';

export default function AppDetail() {
  const { slug } = useParams();
  const app = appsData.find(a => a.slug === slug);

  if (!app) {
    return (
      <div className="pt-40 px-6 text-center">
        <h1 className="font-display text-4xl mb-4">App not found</h1>
        <Link to="/apps" className="text-amber">Back to Apps</Link>
      </div>
    );
  }

  // Render store buttons. If link is empty, use '#' and fade the button slightly.
  const StoreButton = ({ href, icon: Icon, label }) => (
    <a 
      href={href || '#'} 
      target={href ? '_blank' : '_self'} 
      rel="noreferrer"
      className={`flex items-center space-x-2 border rounded-full px-4 py-2 text-sm transition-all ${
        href ? 'border-white/20 hover:border-amber text-textPrimary' : 'border-white/5 text-textSecondary cursor-default'
      }`}
    >
      <Icon size={16} />
      <span>{label}</span>
    </a>
  );

  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/apps" className="inline-flex items-center text-textSecondary hover:text-amber transition-colors mb-12 font-mono text-sm">
          <ArrowLeft size={16} className="mr-2" /> Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-3xl bg-surface border border-white/10 overflow-hidden">
              {app.icon && <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />}
            </div>
            <div>
              <p className="font-mono text-amber text-xs mb-1">{app.type}</p>
              <h1 className="font-display text-5xl md:text-6xl text-textPrimary">{app.name}</h1>
            </div>
          </div>
          <p className="text-2xl text-textSecondary font-light">{app.tagline}</p>
        </div>

        {/* Store Buttons - Always Visible */}
        <div className="flex flex-wrap gap-3 mb-16 pb-16 border-b border-white/10">
          <StoreButton href={app.links.github} icon={Globe} label="GitHub" />
          <StoreButton href={app.links.playStore} icon={Play} label="Google Play" />
          <StoreButton href={app.links.appStore} icon={Apple} label="App Store" />
        </div>

        {/* Meta Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <p className="text-textSecondary text-xs font-mono mb-1">Platform</p>
            <p className="text-textPrimary">{app.platform}</p>
          </div>
          <div>
            <p className="text-textSecondary text-xs font-mono mb-1">Released</p>
            <p className="text-textPrimary">{app.released}</p>
          </div>
          <div>
            <p className="text-textSecondary text-xs font-mono mb-1">Role</p>
            <p className="text-textPrimary">{app.role}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-16 max-w-3xl">
          <h2 className="font-display text-3xl mb-4 text-textPrimary">Overview</h2>
          <p className="text-textSecondary text-lg leading-relaxed">{app.description}</p>
        </div>

        {/* Core Features */}
        <div className="mb-16 max-w-3xl">
          <h2 className="font-display text-3xl mb-6 text-textPrimary">Core Features</h2>
          <ul className="space-y-3">
            {app.features.map((feature, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start text-textSecondary border-b border-white/5 pb-3"
              >
                <span className="text-amber mr-4 font-mono text-sm">0{i + 1}</span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Screenshots Gallery */}
        <div className="mb-16">
          <h2 className="font-display text-3xl mb-6 text-textPrimary">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {app.screenshots.map((shot, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-surface aspect-[4/3]">
                {shot ? (
                  <img src={shot} alt={`${app.name} screenshot ${i + 1}`} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-textSecondary text-sm font-mono">Screenshot Placeholder</div>
                )}
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}
