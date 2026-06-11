import React from 'react';
import { motion } from 'motion/react';

export function StoreView() {
  return (
    <main className="pt-24 max-w-7xl mx-auto px-6 border-x border-[var(--border-color)] pb-24 min-h-[calc(100vh-100px)] flex flex-col items-center justify-center text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-12 md:p-20 max-w-2xl w-full relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-50"></div>
        
        <span className="text-[var(--accent-primary)] border border-[var(--accent-primary)] px-3 py-1 text-xs font-mono mb-8 inline-block cursor-default tracking-widest">
            SYSTEM UPDATE PENDING
        </span>
        
        <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-widest text-[var(--accent-primary)] mb-6 uppercase">
            [ COMING SOON ]
        </h1>
        
        <p className="text-[var(--text-secondary)] leading-relaxed font-mono text-sm md:text-base max-w-md mx-auto relative group cursor-default">
            THE SUPPLY ARCHIVE IS CURRENTLY UNDERGOING ENCRYPTION AND INVENTORY VERIFICATION. SECURE COMMERCE CHANNELS WILL OPEN SHORTLY.
        </p>
        
        <div className="mt-12 flex justify-center">
            <span className="w-2 h-2 bg-[var(--accent-primary)] animate-pulse inline-block"></span>
        </div>
      </motion.div>
    </main>
  );
}
