import React from 'react';
import { motion } from 'motion/react';

const CATEGORIES = [
  { id: 'water', title: 'WATER PROCUREMENT', icon: '💧', desc: 'Filtration, rationing, and purification.' },
  { id: 'food', title: 'FOOD STORAGE', icon: '🥫', desc: 'Calories, macro-rotation, and canning protocols.' },
  { id: 'medical', title: 'MEDICAL & TRAUMA', icon: '✚', desc: 'Post-antibiotic care and tactical first aid.' },
  { id: 'shelter', title: 'SHELTER & BUG-IN', icon: '🏠', desc: 'Structural reinforcement and safe rooms.' },
  { id: 'fire', title: 'FIRE & HEAT', icon: '🔥', desc: 'Primitive fire making, stoves, and thermals.' },
  { id: 'navigation', title: 'OFF-GRID NAVIGATION', icon: '🧭', desc: 'Topological maps, compass reading, and stars.' },
  { id: 'radio', title: 'RADIO & COMMS', icon: '📡', desc: 'Ham radios, bounce signals, and mesh networks.' },
  { id: 'bushcraft', title: 'BUSHCRAFT', icon: '🪓', desc: 'Wilderness survival and primitive engineering.' },
  { id: 'urban', title: 'URBAN SURVIVAL', icon: '🏙️', desc: 'Scavenging, evasion, and gray man theory.' },
  { id: 'cyber', title: 'CYBER SURVIVAL', icon: '💻', desc: 'Data privacy, OPSEC, and digital ghosting.' },
  { id: 'power', title: 'POWER OUTAGES', icon: '⚡', desc: 'Backup generators and solar grids.' },
  { id: 'emp', title: 'EMP PREPAREDNESS', icon: '🛡️', desc: 'Faraday cages and protecting electronics.' },
  { id: 'nuclear', title: 'NUCLEAR FALLOUT', icon: '☢️', desc: 'Radiation shielding and iodide rationing.' },
  { id: 'war', title: 'WAR ZONE & CIVIL UNREST', icon: '⚔️', desc: 'Conflict zones and asymmetric threats.' },
  { id: 'pandemic', title: 'PANDEMIC / OUTBREAK', icon: '☣️', desc: 'Isolation protocols and bio-hazard gear.' }
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
