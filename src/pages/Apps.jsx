import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import appsData from '../data/apps.json';

export default function Apps() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-mono text-amber text-sm mb-4">Portfolio</p>
        <h1 className="font-display text-5xl md:text-6xl text-textPrimary mb-4">Apps Gallery</h1>
        <p className="text-textSecondary text-lg">A collection of mobile apps built with passion and precision.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appsData.map((app, index) => (
          <motion.div
            key={app.slug}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Link 
              to={`/apps/${app.slug}`}
              className="group block bg-surface border border-white/5 rounded-2xl overflow-hidden h-full transition-all hover:border-amber/30"
            >
              {/* Placeholder for app screenshot/hero */}
              <div className="h-48 bg-obsidian relative overflow-hidden">
                {app.heroImage ? (
                  <img src={app.heroImage} alt={app.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-6xl text-white/5">{app.name}</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-display text-2xl text-textPrimary">{app.name}</h3>
                  <span className="text-xs font-mono text-textSecondary">{app.released}</span>
                </div>
                <p className="text-textSecondary text-sm mb-4">{app.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {app.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono bg-obsidian text-textSecondary px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
