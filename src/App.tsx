import { useState } from 'react';
import { HomeView } from './components/HomeView';
import { SurvivalView } from './components/SurvivalView';
import { StoreView } from './components/StoreView';
import { GuidesView } from './components/GuidesView';
import { NetworkView } from './components/NetworkView';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'survival' | 'store' | 'guides' | 'network'>('home');

  return (
    <div className="min-h-screen selection:bg-[var(--accent-primary)] selection:text-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            onClick={() => setCurrentView('home')}
            className="font-mono font-bold text-[var(--text-primary)] tracking-widest text-xl cursor-pointer hover:text-[var(--accent-primary)] transition-colors"
          >
            THE OBSIDIAN GRID
          </div>
          <nav className="hidden md:flex gap-8 font-mono text-sm tracking-wider text-[var(--text-secondary)]">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('guides'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'guides' ? 'text-[var(--accent-primary)]' : ''}`}>[ GUIDES ]</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('network'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'network' ? 'text-[var(--accent-primary)]' : ''}`}>[ NETWORK ]</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('survival'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'survival' ? 'text-[var(--accent-primary)]' : ''}`}>[ SURVIVAL ]</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('store'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'store' ? 'text-[var(--accent-primary)]' : ''}`}>[ STORE ]</a>
          </nav>
        </div>
      </header>

      {/* Main Content Router */}
      {currentView === 'home' && <HomeView />}
      {currentView === 'survival' && <SurvivalView />}
      {currentView === 'store' && <StoreView />}
      {currentView === 'guides' && <GuidesView />}
      {currentView === 'network' && <NetworkView />}

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 border-x border-[var(--border-color)] text-center md:text-left bg-[var(--bg-primary)]">
        <div className="font-mono text-sm text-[var(--text-secondary)]">
          &copy; {new Date().getFullYear()} THE OBSIDIAN GRID. ALL RIGHTS RESERVED.
        </div>
        <div className="text-xs text-[var(--text-secondary)]/60 max-w-lg font-mono">
          DISCLAIMER: Information provided for educational and contingency planning purposes only.
        </div>
        <a href="#" className="font-mono text-sm text-[var(--accent-primary)] hover:text-white transition-colors tracking-widest">
          [ NETWORK STATUS ]
        </a>
      </footer>
    </div>
  );
}
