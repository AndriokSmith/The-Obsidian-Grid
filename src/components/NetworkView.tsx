import React from 'react';
import { motion } from 'motion/react';

export function NetworkView() {
  return (
    <main className="pt-24 max-w-7xl mx-auto px-6 border-x border-[var(--border-color)] pb-24 min-h-[calc(100vh-100px)]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="border-b border-[var(--border-color)] pb-12 mb-12">
          <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-widest text-[var(--accent-primary)] mb-8 uppercase">
            [ NETWORK STATUS : ABOUT THE GRID ]
          </h2>
          
          <div className="border-y border-[var(--border-color)] py-6 bg-[var(--bg-secondary)]/30 px-6 font-mono text-sm tracking-widest">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 text-[var(--text-secondary)]">
              <div>
                <span className="text-[var(--text-primary)] font-bold">SYSTEM STATUS:</span> <span className="text-[var(--accent-primary)]">OPERATIONAL</span>
              </div>
              <div>
                <span className="text-[var(--text-primary)] font-bold">PURPOSE:</span> PRACTICAL HANDBOOK FOR AN UNPREDICTABLE WORLD
              </div>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mb-6 uppercase border-b border-[var(--border-color)] pb-4 inline-block">
            Why The Obsidian Grid Exists
          </h3>
          <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed text-lg">
            <p>
              Most survival websites want to scare you. They throw terrifying headlines at you, sell you unhelpful doomsday panic, and leave you feeling overwhelmed.
            </p>
            <p className="text-[var(--text-primary)] font-bold">
              We don't do that here.
            </p>
            <p>
              <strong className="text-[var(--text-primary)]">The Obsidian Grid</strong> was built because our modern world relies on a very fragile system. The electricity, the internet, grocery store deliveries, and clean tap water are all connected to a grid that can blink out during a major crisis. When that grid goes down, everyday people get left in the dark.
            </p>
            <p>
              We don't predict <em>when</em> the world will face a disaster, and we don't fan the flames of fear. We just believe that being prepared is common sense.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mb-6 uppercase border-b border-[var(--border-color)] pb-4 inline-block">
            Our Core Philosophy: Simple & Action-Focused
          </h3>
          <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed text-lg">
            <p>
              We stripped away the complex military jargon, the confusing technical manuals, and the conspiracy theories. Instead, we focused entirely on a clean, <strong className="text-[var(--accent-primary)] font-mono font-normal">9-module survival framework</strong> that anyone can understand and use.
            </p>
            <ul className="space-y-4 mt-6">
              <li className="flex gap-4">
                <span className="text-[var(--accent-primary)] mt-1.5">▪</span>
                <div>
                  <strong className="text-[var(--text-primary)]">No Overwhelming Slop:</strong> We deliver direct, plain-English instructions on how to secure your home, find clean water, store food, and protect your loved ones.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[var(--accent-primary)] mt-1.5">▪</span>
                <div>
                  <strong className="text-[var(--text-primary)]">Step-by-Step Clarity:</strong> Whether it's the first 24 hours of a power blackout or a severe weather crisis, you get immediate actions and simple gear lists.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[var(--accent-primary)] mt-1.5">▪</span>
                <div>
                  <strong className="text-[var(--text-primary)]">Built for Action:</strong> Our tools—like the interactive Outbreak Simulator—are designed to help you think through real-world problems before they actually happen.
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mb-6 uppercase border-b border-[var(--border-color)] pb-4 inline-block">
            The Offline Guarantee
          </h3>
          <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed text-lg">
            <p>
              There is an ultimate irony to modern technology: <strong className="text-[var(--text-primary)]">when a real crisis hits, the cloud dies first.</strong> You can't ask an AI chatbot for help or browse a search engine if your phone has no signal and the power is out.
            </p>
            <p>
              That is why The Obsidian Grid is designed to be <strong className="text-[var(--text-primary)]">completely downloadable and printable</strong>.
            </p>
            <p>
              We encourage our users to save our guides, download our protocols onto thumb drives, and print out physical paper copies for their homes. We aren't just a website; we are your offline insurance policy.
            </p>
            
            <div className="mt-8 flex flex-col items-center border border-[var(--accent-primary)] bg-[var(--bg-secondary)] p-8 text-center space-y-6">
              <div className="text-[var(--accent-primary)] font-mono tracking-widest text-lg">
                [ INITIATE SECURE DOWNLOAD ]
              </div>
              <p className="font-mono text-sm text-[var(--text-secondary)]">
                Acquire the complete, offline-ready Obsidian Grid source data, containing all 9 modules, tactical emergency protocols, and survival checklists.
              </p>
              <button 
                onClick={() => {
                  const content = "THE OBSIDIAN GRID\nOFFLINE SURVIVAL ARCHIVE\n\nSTATUS: ENCRYPTED OFFLINE COPY\n\n[ MODULE DATA ]\n" + 
                    "1. SHELTER & PERIMETER\n2. WATER PROCUREMENT\n3. NUTRITION & CACHE\n4. MEDICAL & FIRST AID\n" +
                    "5. SECURITY & DEFENSE\n6. SIGNAL & COMMS\n7. PSYCHOLOGICAL ENDURANCE\n8. EVACUATION & MOBILITY\n" +
                    "9. TRADE & BARTER\n\nStore this file on a secure, EMP-shielded USB drive.";
                  const blob = new Blob([content], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'obsidian_grid_archive.txt';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
                }}
                className="w-full md:w-auto px-8 py-4 bg-[var(--accent-primary)] text-black font-mono font-bold tracking-widest hover:bg-white transition-colors uppercase text-sm"
              >
                Download Source Archive (.txt)
              </button>
            </div>

            <div className="mt-8 p-6 text-[var(--accent-primary)] font-mono text-center">
              The previous grid might fail, but your system doesn't have to.
            </div>
          </div>
        </section>

      </motion.div>
    </main>
  );
}
