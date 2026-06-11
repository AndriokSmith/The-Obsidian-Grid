import React from 'react';
import { motion } from 'motion/react';

const CATEGORIES = [
  { id: 'shelter', title: 'HOME & SHELTER', icon: '🏠', desc: 'Structural reinforcement, bug-in barricades, and secure perimeter setup.' },
  { id: 'water', title: 'WATER PROCUREMENT', icon: '💧', desc: 'Redundant filtration systems, rainwater catchment, and long-term storage.' },
  { id: 'food', title: 'FOOD STORAGE', icon: '🥫', desc: 'Calories, macro-rotation, canning protocols, and deep pantry management.' },
  { id: 'power', title: 'OFF-GRID POWER', icon: '⚡', desc: 'Solar generators, EMP hardening, and localized blackout power grids.' },
  { id: 'medical', title: 'MEDICAL & FIRST AID', icon: '✚', desc: 'Post-antibiotic trauma care, surgical kits, and contagion containment.' },
  { id: 'security', title: 'SECURITY & DEFENSE', icon: '🛡️', desc: 'Asymmetric defense, stealth protocols, and tactical evasion techniques.' },
  { id: 'comms', title: 'SIGNAL & COMMS', icon: '📡', desc: 'Ham radio operation, emergency broadcast beacons, and information security.' },
  { id: 'evacuation', title: 'EVACUATION & MOBILITY', icon: '🗺️', desc: 'Emergency route planning, vehicle preparation, and navigating safely without a GPS network.' },
  { id: 'trade', title: 'TRADE & BARTER', icon: '⚖️', desc: 'Trading without cash, choosing high-value supplies, and building simple community sharing networks.' },
];

export function SurvivalView() {
  return (
    <main className="pt-24 max-w-7xl mx-auto px-6 grid grid-cols-1 gap-0 border-x border-[var(--border-color)] pb-24 min-h-[calc(100vh-100px)]">
      <div className="border-b border-[var(--border-color)] p-8 bg-[var(--bg-secondary)]/30 text-center flex flex-col items-center">
        <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-widest text-[var(--text-primary)] mb-4 uppercase">
          [ SURVIVAL DATABASE ]
        </h1>
        <p className="text-[var(--text-secondary)] max-w-2xl leading-relaxed text-sm md:text-base font-mono">
          CORE PILLARS OF POST-GRID RESILIENCE. SELECT A MODULE TO ACCESS TACTICAL PROTOCOLS AND GEAR LISTS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {CATEGORIES.map((cat, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            key={cat.id}
            className="p-8 border-b lg:border-b border-[var(--border-color)] lg:[&:not(:nth-child(3n))]:border-r group cursor-pointer hover:bg-[var(--bg-secondary)] transition-colors relative"
          >
            <div className="absolute top-4 right-4 font-mono text-[var(--border-color)] text-xs font-bold group-hover:text-[var(--accent-primary)] transition-colors">
              MOD.{String(index + 1).padStart(2, '0')}
            </div>
            <div className="text-4xl mb-6 opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">{cat.icon}</div>
            <h3 className="font-mono text-xl tracking-widest text-[var(--accent-primary)] mb-3 transition-colors">
              {cat.title}
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
              {cat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
