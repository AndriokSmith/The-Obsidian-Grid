import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function GuidesView() {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

  const guide00104 = (
    <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed text-left">
      <div className="border-b border-[var(--border-color)] pb-6 mb-8">
        <h1 className="font-mono text-2xl md:text-4xl font-bold tracking-widest text-[var(--accent-primary)] uppercase">
          GUIDE 001.04: Protecting Electronics from a Grid Blowout
        </h1>
      </div>

      <p>
        An EMP (Electromagnetic Pulse) or a massive solar flare is like a lightning strike that hits every electronic device at the exact same time. It can instantly fry the computer chips inside your phone, laptop, flashlight, and radio, turning them into useless pieces of plastic.
      </p>

      <p>
        To protect your gear, you need to build a <strong className="text-[var(--text-primary)]">Faraday Cage</strong>—which is just a fancy name for a metal shield that blocks electrical waves from reaching your devices.
      </p>

      <p>
        Here is how to build a simple, working shield at home using a standard metal trash can.
      </p>

      <div className="h-px w-full bg-[var(--border-color)] my-8"></div>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">📦</span> Supply List
      </h3>
      <p className="mb-4">You don’t need military gear. You can find everything you need at a local hardware store:</p>
      <ul className="space-y-3 ml-4">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">A Heavy-Duty Metal Trash Can:</strong> It must have a tight-fitting metal lid. Plastic trash cans will not work.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Cardboard Boxes or Heavy Blankets:</strong> To line the inside of the can.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Heavy-Duty Aluminum Foil:</strong> For extra wrapping.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Duct Tape:</strong> To secure the lining.</div></li>
      </ul>

      <div className="h-px w-full bg-[var(--border-color)] my-8"></div>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">🛠️</span> Step-by-Step Build Instructions
      </h3>

      <h4 className="font-mono text-lg text-[var(--text-primary)] mt-6 mb-3 uppercase">Step 1: Line the Inside (The Non-Metal Layer)</h4>
      <p className="mb-4">Your electronics must never touch the metal walls of the trash can. If they touch the metal, the electrical surge will pass straight into your devices.</p>
      <ul className="space-y-3 ml-4 mb-6">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div>Line the bottom and sides of the inside of the trash can completely with thick cardboard, wood, or heavy blankets.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div>Use duct tape to keep the cardboard firmly against the walls.</div></li>
      </ul>

      <h4 className="font-mono text-lg text-[var(--text-primary)] mt-6 mb-3 uppercase">Step 2: Wrap Your Gear</h4>
      <p className="mb-6">For maximum safety, wrap each electronic item (like your backup phone, walkie-talkie, or emergency flashlight) in a layer of plastic wrap or a zip-top bag, and then wrap it completely in heavy-duty aluminum foil.</p>

      <h4 className="font-mono text-lg text-[var(--text-primary)] mt-6 mb-3 uppercase">Step 3: Pack and Seal the Can</h4>
      <ul className="space-y-3 ml-4 mb-8">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div>Place your wrapped electronics inside the cardboard-lined trash can.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div>Put the metal lid on the can.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div>For a complete seal, wrap heavy-duty aluminum foil over the seam where the lid meets the can, ensuring there are no open gaps.</div></li>
      </ul>

      <div className="h-px w-full bg-[var(--border-color)] my-8"></div>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">📱</span> How to Test Your Shield
      </h3>
      <p className="mb-4">You don't have to wait for a disaster to know if your build works. You can test it right now using your cell phone:</p>
      <ol className="space-y-3 ml-4 mb-6 list-decimal list-inside">
        <li>Turn the volume on your cell phone all the way up.</li>
        <li>Place the phone inside your newly built trash can shield and seal the lid tightly.</li>
        <li>Use another phone to call your cell phone.</li>
      </ol>

      <blockquote className="border-l-2 border-[var(--accent-primary)] pl-6 py-2 bg-[var(--bg-secondary)]/30 text-base italic">
        <strong className="text-[var(--text-primary)] font-mono not-italic tracking-wider uppercase block mb-2">THE TEST RESULT:</strong>
        If the call goes straight to voicemail, your shield works perfectly. It is successfully blocking wireless signals. If your phone rings inside the can, electrical waves are still leaking in. Check your lid fit and make sure the foil seal is tight.
      </blockquote>
      
      <div className="mt-12 flex justify-center pt-8 border-t border-[var(--border-color)]">
        <button 
          onClick={() => setSelectedGuide(null)}
          className="px-6 py-3 border border-[var(--border-color)] hover:border-[var(--accent-primary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors font-mono tracking-widest text-sm uppercase"
        >
          [ RETURN TO DIRECTORY ]
        </button>
      </div>
    </div>
  );

  return (
    <main className="pt-24 max-w-7xl mx-auto px-6 border-x border-[var(--border-color)] pb-24 min-h-[calc(100vh-100px)]">
      <AnimatePresence mode="wait">
        {!selectedGuide ? (
          <motion.div 
            key="directory"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto"
          >
            <div className="border-b border-[var(--border-color)] pb-12 mb-12 w-full text-center">
              <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-widest text-[var(--accent-primary)] mb-8 uppercase">
                [ SECURE GUIDES DIRECTORY ]
              </h2>
              <p className="text-[var(--text-secondary)] font-mono text-sm tracking-widest">
                SELECT A MODULE TO INITIATE DECRYPTION
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Tile 1: Guide 001.04 */}
              <div 
                onClick={() => setSelectedGuide('EMP')}
                className="group border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 text-left cursor-pointer hover:border-[var(--accent-primary)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-[var(--accent-primary)] group-hover:h-full transition-all duration-500"></div>
                <div className="flex justify-between items-start mb-6 w-full">
                  <span className="text-[var(--accent-primary)] font-mono text-xs tracking-widest border border-[var(--accent-primary)] px-2 py-1">
                    GUIDE 001.04
                  </span>
                  <span className="text-[var(--text-secondary)] font-mono text-xl group-hover:text-[var(--accent-primary)] transition-colors">
                    +]
                  </span>
                </div>
                <h3 className="font-mono text-xl text-[var(--text-primary)] font-bold mb-4 uppercase leading-tight group-hover:text-[var(--accent-primary)] transition-colors">
                  Protecting Electronics from a Grid Blowout
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3">
                  Build a simple, working shield at home using a standard metal trash can to protect your gear from an EMP or a massive solar flare.
                </p>
              </div>

              {/* Tile placeholder */}
              <div className="group border border-[var(--border-color)] bg-[var(--bg-secondary)] opacity-50 p-8 text-left cursor-not-allowed relative">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[var(--text-secondary)] font-mono text-xs tracking-widest border border-[var(--border-color)] px-2 py-1">
                    GUIDE 001.03
                  </span>
                  <span className="text-[var(--border-color)] font-mono text-xl">
                    _]
                  </span>
                </div>
                <h3 className="font-mono text-xl text-[var(--text-secondary)] font-bold mb-4 uppercase leading-tight">
                  Water Independence
                </h3>
                <p className="text-[var(--text-secondary)] text-sm italic font-mono mb-6">
                  [ MODULE ENCRYPTED / PENDING ]
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="guide-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto"
          >
             {guide00104}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
