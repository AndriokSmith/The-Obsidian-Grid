import { useState } from 'react';
import { HomeView } from './components/HomeView';
import { SurvivalView } from './components/SurvivalView';
import { StoreView } from './components/StoreView';
import { GuidesView } from './components/GuidesView';
import { NetworkView } from './components/NetworkView';
import { ObsidianLogo } from './components/Logo';
import { SystemsView } from './components/SystemsView';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'survival' | 'store' | 'guides' | 'network' | 'systems'>('home');

  return (
    <div className="min-h-screen selection:bg-[var(--accent-primary)] selection:text-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            onClick={() => setCurrentView('home')}
            className="font-mono font-bold text-[var(--text-primary)] tracking-widest text-xl cursor-pointer hover:text-[var(--accent-primary)] transition-colors flex items-center gap-3"
          >
            <ObsidianLogo className="w-8 h-8 text-white" />
            THE OBSIDIAN GRID
          </div>
          <nav className="hidden md:flex gap-8 font-mono text-sm tracking-wider text-[var(--text-secondary)]">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('guides'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'guides' ? 'text-[var(--accent-primary)]' : ''}`}>[ GUIDES ]</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('systems'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'systems' ? 'text-[var(--accent-primary)]' : ''}`}>[ SYSTEMS ]</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('network'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'network' ? 'text-[var(--accent-primary)]' : ''}`}>[ NETWORK ]</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('survival'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'survival' ? 'text-[var(--accent-primary)]' : ''}`}>[ SURVIVAL ]</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('store'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'store' ? 'text-[var(--accent-primary)]' : ''}`}>[ STORE ]</a>
          </nav>
          
          <div className="hidden lg:flex items-center gap-4 text-xs font-mono">
            <div className="flex flex-col items-end">
              <span className="text-[var(--accent-primary)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full animate-pulse"></span>
                OFFLINE SYNC
              </span>
              <span className="text-[var(--text-secondary)] text-[10px]">CACHE: 42.8 MB</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Router */}
      {currentView === 'home' && <HomeView />}
      {currentView === 'survival' && <SurvivalView />}
      {currentView === 'store' && <StoreView />}
      {currentView === 'guides' && <GuidesView />}
      {currentView === 'network' && <NetworkView />}
      {currentView === 'systems' && <SystemsView />}

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
