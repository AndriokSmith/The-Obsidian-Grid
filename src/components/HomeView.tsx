import React from 'react';
import { motion } from 'motion/react';
import { ScenarioGrid } from './ScenarioGrid';

export function HomeView() {
  return (
    <main className="pt-16 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-0 border-x border-[var(--border-color)]">
      {/* Hero Section */}
      <section className="col-span-full border-b border-[var(--border-color)] relative overflow-hidden flex flex-col items-center justify-center py-32 md:py-48 text-center bg-[var(--bg-secondary)]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--text-secondary)_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative z-10 max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-4xl md:text-6xl font-bold tracking-tighter text-[var(--text-primary)] mb-6 uppercase"
          >
            THE PREVIOUS GRID IS DEAD.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Welcome to the new infrastructure. We provide the blueprints, protocols, and tactical blueprints necessary for sovereign survival in the total aftermath.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-8 py-4 font-mono font-bold tracking-widest text-[var(--accent-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--accent-primary)] hover:text-black transition-all duration-200 uppercase"
          >
            ACCESS PROTOCOLS
          </motion.button>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="col-span-full border-b border-[var(--border-color)] py-24 px-8 md:px-24 flex flex-col items-center text-center">
        <h2 className="font-mono text-xl md:text-2xl text-[var(--accent-secondary)] mb-6 uppercase tracking-widest">
          SYSTEM COLLAPSE IS INEVITABLE. SURVIVAL IS A CHOICE.
        </h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-3xl leading-relaxed">
          Doomsday isn't just about explosions; it's about infrastructure failure. Power, water, logistics, and law will cease. The Obsidian Grid is a methodical database engineered to bridge the gap between panic and performance. We do not fear the end; we prepare for the beginning.
        </p>
      </section>

      {/* Core Pillars */}
      <section className="col-span-full grid grid-cols-1 md:grid-cols-3 border-b border-[var(--border-color)]">
        {/* Pillar 1 */}
        <div className="p-10 border-b md:border-b-0 md:border-r border-[var(--border-color)] hover:bg-[var(--bg-secondary)]/50 transition-colors">
          <h3 className="font-mono text-xl text-[var(--text-primary)] mb-4 flex items-center gap-3">
            <span className="text-[var(--accent-primary)] border border-[var(--accent-primary)] px-2 py-1 text-xs">P.01</span>
            1. HOME & POWER
          </h3>
          <p className="text-[var(--text-secondary)] uppercase text-sm leading-relaxed tracking-wide">
            Keeping the lights on and water clean when the grid dies.
          </p>
        </div>
        
        {/* Pillar 2 */}
        <div className="p-10 border-b md:border-b-0 md:border-r border-[var(--border-color)] hover:bg-[var(--bg-secondary)]/50 transition-colors">
          <h3 className="font-mono text-xl text-[var(--text-primary)] mb-4 flex items-center gap-3">
            <span className="text-[var(--accent-primary)] border border-[var(--accent-primary)] px-2 py-1 text-xs">P.02</span>
            2. FOOD & MEDS
          </h3>
          <p className="text-[var(--text-secondary)] uppercase text-sm leading-relaxed tracking-wide">
            Storing long-term food and building emergency medical kits.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="p-10 hover:bg-[var(--bg-secondary)]/50 transition-colors">
          <h3 className="font-mono text-xl text-[var(--text-primary)] mb-4 flex items-center gap-3">
            <span className="text-[var(--accent-primary)] border border-[var(--accent-primary)] px-2 py-1 text-xs">P.03</span>
            3. SAFETY & SURVIVAL
          </h3>
          <p className="text-[var(--text-secondary)] uppercase text-sm leading-relaxed tracking-wide">
            Simple home defense and bug-out basics.
          </p>
        </div>
      </section>

      {/* Recent Intel */}
      <section className="col-span-full border-b border-[var(--border-color)]">
        <div className="border-b border-[var(--border-color)] p-6 bg-[var(--bg-secondary)]">
          <h2 className="font-mono text-lg tracking-widest text-[var(--text-primary)]">[ RECENT GUIDES ]</h2>
        </div>
        <div className="flex flex-col">
          {[
            { id: "001.04", title: "Protecting Electronics from a Grid Blowout", time: "14 min read" },
            { id: "001.03", title: "Water Independence: 5 Ways to Filter Dirty Water", time: "21 min read" },
            { id: "001.02", title: "First Aid: Treating Infected Wounds Without Antibiotics", time: "9 min read" },
          ].map((article, i) => (
            <a href="#" key={i} className="group p-6 md:p-8 border-b border-[var(--border-color)] last:border-b-0 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[var(--bg-secondary)] transition-colors">
              <div>
                <div className="text-[var(--accent-primary)] font-mono text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">GUIDE {article.id}</div>
                <h3 className="text-lg md:text-xl text-[var(--text-primary)] group-hover:text-white transition-colors">{article.title}</h3>
              </div>
              <div className="font-mono text-sm text-[var(--text-secondary)]">
                {article.time}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Scenario Grid */}
      <ScenarioGrid />

      {/* The Gridless Protocol Asset Map */}
      <section className="col-span-full border-b border-[var(--border-color)]">
        <div className="border-b border-[var(--border-color)] p-6 bg-[var(--bg-secondary)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="font-mono text-lg tracking-widest text-[var(--accent-primary)]">[ ASSET ARCHITECTURE : THE GRIDLESS PROTOCOL ]</h2>
          <div className="font-mono text-xs text-[var(--text-secondary)]">FORMAT: PDF / PAGES: 400+ / CLASSIFICATION: CRITICAL</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)]">
          {/* Structural Chapters */}
          <div className="p-8 hover:bg-[var(--bg-secondary)]/50 transition-colors">
            <h3 className="font-mono tracking-widest text-[var(--text-primary)] mb-6 border-b border-[var(--border-color)] pb-4">STRUCTURAL CHAPTERS</h3>
            <ul className="space-y-4 font-mono text-sm leading-relaxed">
              <li className="flex gap-4"><span className="text-[var(--accent-secondary)] font-bold">CH.01</span><span className="text-[var(--text-secondary)]">EMP & Geomagnetic Hardening Vectors</span></li>
              <li className="flex gap-4"><span className="text-[var(--accent-secondary)] font-bold">CH.02</span><span className="text-[var(--text-secondary)]">Long-Term Biological Sustenance Operations</span></li>
              <li className="flex gap-4"><span className="text-[var(--accent-secondary)] font-bold">CH.03</span><span className="text-[var(--text-secondary)]">Water Procurement, Filtration & Storage</span></li>
              <li className="flex gap-4"><span className="text-[var(--accent-secondary)] font-bold">CH.04</span><span className="text-[var(--text-secondary)]">Asymmetric Perimeter Defense Networking</span></li>
              <li className="flex gap-4"><span className="text-[var(--accent-secondary)] font-bold">CH.05</span><span className="text-[var(--text-secondary)]">Post-Grid Medical & Trauma Care</span></li>
              <li className="flex gap-4"><span className="text-[var(--accent-secondary)] font-bold">CH.06</span><span className="text-[var(--text-secondary)]">Alternative Comms & Signal Intelligence</span></li>
            </ul>
          </div>

          {/* Safety Checklists */}
          <div className="p-8 hover:bg-[var(--bg-secondary)]/50 transition-colors">
            <h3 className="font-mono tracking-widest text-[var(--text-primary)] mb-6 border-b border-[var(--border-color)] pb-4">SAFETY CHECKLISTS</h3>
            <ul className="space-y-4 font-mono text-sm leading-relaxed">
              <li className="flex gap-4 flex-shrink-0"><span className="text-[var(--text-primary)] font-bold min-w-[75px]">[ ALPHA ]</span><span className="text-[var(--text-secondary)]">72-Hour Evacuation ("Bug Out") Loadout</span></li>
              <li className="flex gap-4 flex-shrink-0"><span className="text-[var(--text-primary)] font-bold min-w-[75px]">[ BRAVO ]</span><span className="text-[var(--text-secondary)]">Shelter-In-Place Barricade & Blackout</span></li>
              <li className="flex gap-4 flex-shrink-0"><span className="text-[var(--text-primary)] font-bold min-w-[75px]">[ CHARLIE ]</span><span className="text-[var(--text-secondary)]">Radiation/Biological Decontamination</span></li>
              <li className="flex gap-4 flex-shrink-0"><span className="text-[var(--text-primary)] font-bold min-w-[75px]">[ DELTA ]</span><span className="text-[var(--text-secondary)]">Deep Winter Survival & Thermodynamics</span></li>
            </ul>
          </div>

          {/* Compliance Protocols */}
          <div className="p-8 hover:bg-[var(--bg-secondary)]/50 transition-colors">
            <h3 className="font-mono tracking-widest text-[var(--text-primary)] mb-6 border-b border-[var(--border-color)] pb-4">COMPLIANCE PROTOCOLS</h3>
            <ul className="space-y-4 font-mono text-sm leading-relaxed">
              <li className="flex gap-4"><span className="text-[var(--accent-primary)] font-bold">PRT.M1</span><span className="text-[var(--text-secondary)]">Medication Rotation & Procurement</span></li>
              <li className="flex gap-4"><span className="text-[var(--accent-primary)] font-bold">PRT.O7</span><span className="text-[var(--text-secondary)]">Organizational Hierarchy & Command Level</span></li>
              <li className="flex gap-4"><span className="text-[var(--accent-primary)] font-bold">PRT.S3</span><span className="text-[var(--text-secondary)]">Stealth, Decoys, and Light Discipline</span></li>
              <li className="flex gap-4"><span className="text-[var(--accent-primary)] font-bold">PRT.W9</span><span className="text-[var(--text-secondary)]">Waste Management & Sanitation Operations</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Manual CTA */}
      <section className="col-span-full py-16 px-8 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/30 text-center flex flex-col items-center">
        <p className="text-[var(--text-secondary)] mb-8 max-w-2xl leading-relaxed font-mono text-sm tracking-wide">
          DOWNLOAD THE DEFINITIVE 400-PAGE MANUAL. STRUCTURAL, BIOLOGICAL, AND TACTICAL INSTRUCTIONS FOR COMPLETE SOVEREIGN SEPARATION FROM FAILING SYSTEMS.
        </p>
        <button className="px-8 py-4 font-mono font-bold tracking-widest text-[var(--accent-primary)] bg-[var(--bg-primary)] hover:bg-[var(--accent-primary)] hover:text-black transition-all duration-200 uppercase border border-[var(--border-color)] hover:border-[var(--accent-primary)]">
          SECURE THE ARCHIVE
        </button>
      </section>

    </main>
  );
}
