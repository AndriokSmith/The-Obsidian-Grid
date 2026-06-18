import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { HomeView } from './components/HomeView';
import { SurvivalView } from './components/SurvivalView';
import { StoreView } from './components/StoreView';
import { GuidesView } from './components/GuidesView';
import { NetworkView } from './components/NetworkView';
import { ObsidianLogo } from './components/Logo';
import { SystemsView } from './components/SystemsView';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'survival' | 'store' | 'guides' | 'network' | 'systems'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (view: 'home' | 'survival' | 'store' | 'guides' | 'network' | 'systems') => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-[var(--accent-primary)] selection:text-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            onClick={() => navigateTo('home')}
            className="font-mono font-bold text-[var(--text-primary)] tracking-widest text-xl cursor-pointer hover:text-[var(--accent-primary)] transition-colors flex items-center gap-3"
          >
            <ObsidianLogo className="w-8 h-8 text-white" />
            <span className="hidden sm:inline">THE OBSIDIAN GRID</span>
          </div>
          <nav className="hidden md:flex gap-8 font-mono text-sm tracking-wider text-[var(--text-secondary)]">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('guides'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'guides' ? 'text-[var(--accent-primary)]' : ''}`}>[ GUIDES ]</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('systems'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'systems' ? 'text-[var(--accent-primary)]' : ''}`}>[ SYSTEMS ]</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('network'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'network' ? 'text-[var(--accent-primary)]' : ''}`}>[ NETWORK ]</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('survival'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'survival' ? 'text-[var(--accent-primary)]' : ''}`}>[ SURVIVAL ]</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('store'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'store' ? 'text-[var(--accent-primary)]' : ''}`}>[ STORE ]</a>
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

          <button 
            className="md:hidden text-[var(--text-primary)] hover:text-[var(--accent-primary)] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
            <nav className="flex flex-col p-6 gap-6 font-mono text-base tracking-wider text-[var(--text-secondary)]">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('guides'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'guides' ? 'text-[var(--accent-primary)]' : ''}`}>[ GUIDES ]</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('systems'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'systems' ? 'text-[var(--accent-primary)]' : ''}`}>[ SYSTEMS ]</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('network'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'network' ? 'text-[var(--accent-primary)]' : ''}`}>[ NETWORK ]</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('survival'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'survival' ? 'text-[var(--accent-primary)]' : ''}`}>[ SURVIVAL ]</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('store'); }} className={`hover:text-[var(--accent-primary)] transition-colors ${currentView === 'store' ? 'text-[var(--accent-primary)]' : ''}`}>[ STORE ]</a>
              
              <div className="border-t border-[var(--border-color)] pt-6 mt-4 flex items-center gap-4 text-xs font-mono">
                <div className="flex flex-col items-start">
                  <span className="text-[var(--accent-primary)] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full animate-pulse"></span>
                    OFFLINE SYNC ACTIVE
                  </span>
                  <span className="text-[var(--text-secondary)] text-[10px]">CACHE: 42.8 MB</span>
                </div>
              </div>
            </nav>
          </div>
        )}
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
