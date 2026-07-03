export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="font-display text-5xl mb-8">Let's Connect</h1>
      <p className="text-textSecondary text-xl mb-12">
        Schedule a call or send a message.
      </p>
      
      <div className="flex flex-col space-y-4">
        <a href="mailto:iawaisahmd@gmail.com" className="text-amber text-lg border border-white/10 rounded-xl px-6 py-4 hover:bg-surface transition-all">
          iawaisahmd@gmail.com
        </a>
        <a href="https://github.com/iawaisahmd" target="_blank" rel="noreferrer" className="text-textPrimary text-lg border border-white/10 rounded-xl px-6 py-4 hover:bg-surface transition-all">
          GitHub Profile
        </a>
        <a href="https://www.linkedin.com/in/iawaisahmd" target="_blank" rel="noreferrer" className="text-textPrimary text-lg border border-white/10 rounded-xl px-6 py-4 hover:bg-surface transition-all">
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
}
