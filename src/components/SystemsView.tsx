import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function SystemsView() {
  const [activeSystem, setActiveSystem] = useState<string>('water');

  return (
    <main className="pt-24 max-w-7xl mx-auto px-6 border-x border-[var(--border-color)] pb-24 min-h-[calc(100vh-100px)]">
      <div className="border-b border-[var(--border-color)] pb-12 mb-12 w-full text-center">
        <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-widest text-[var(--accent-primary)] mb-8 uppercase">
          [ INTERACTIVE SYSTEMS ]
        </h2>
        <p className="text-[var(--text-secondary)] font-mono tracking-widest text-sm uppercase max-w-2xl mx-auto">
          Tactical calculators, planning tools, and offline resources. Data processing is local.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-1/4 flex flex-col gap-2 font-mono">
          <div className="text-[var(--text-secondary)] text-xs tracking-widest mb-4 border-b border-[var(--border-color)] pb-2">
            [ TACTICAL CALCULATORS ]
          </div>
          <SystemNav 
            id="water" activeId={activeSystem} onClick={setActiveSystem} 
            label="Water Forecaster" 
          />
          <SystemNav 
            id="food" activeId={activeSystem} onClick={setActiveSystem} 
            label="Food Storage Planner" 
          />
          <SystemNav 
            id="fallout" activeId={activeSystem} onClick={setActiveSystem} 
            label="Fallout Shelter Time" 
          />
          <SystemNav 
            id="kit" activeId={activeSystem} onClick={setActiveSystem} 
            label="Kit Builder" 
          />
          <SystemNav 
            id="cipher" activeId={activeSystem} onClick={setActiveSystem} 
            label="Radio Cipher" 
          />
          
          <div className="text-[var(--text-secondary)] text-xs tracking-widest mt-8 mb-4 border-b border-[var(--border-color)] pb-2">
            [ INTEL ARCHIVES ]
          </div>
          <SystemNav 
            id="maps" activeId={activeSystem} onClick={setActiveSystem} 
            label="Disaster Maps" 
          />
          <SystemNav 
            id="myths" activeId={activeSystem} onClick={setActiveSystem} 
            label="Myth vs Reality" 
          />
          <SystemNav 
            id="pdfs" activeId={activeSystem} onClick={setActiveSystem} 
            label="Printable Documents" 
          />
          <SystemNav 
            id="community" activeId={activeSystem} onClick={setActiveSystem} 
            label="Community Outpost" 
          />
        </aside>

        <section className="lg:w-3/4 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSystem}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="w-full h-full border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 relative"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--accent-primary)] opacity-50 block"></div>
              {renderActiveSystem(activeSystem)}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}

function SystemNav({ id, activeId, onClick, label }: { id: string, activeId: string, onClick: (id: string) => void, label: string }) {
  const isActive = id === activeId;
  return (
    <button
      onClick={() => onClick(id)}
      className={`text-left px-4 py-3 tracking-widest text-sm transition-all border-l-2 ${
        isActive 
          ? 'border-[var(--accent-primary)] text-[var(--text-primary)] bg-[var(--bg-secondary)]' 
          : 'border-transparent text-[var(--text-secondary)] hover:border-[var(--border-color)] hover:text-[var(--text-primary)]'
      }`}
    >
      {isActive && <span className="text-[var(--accent-primary)] mr-2">+]</span>}
      {label}
    </button>
  );
}

function renderActiveSystem(id: string) {
  switch (id) {
    case 'water': return <WaterCalculator />;
    case 'food': return <FoodPlanner />;
    case 'fallout': return <FalloutCalculator />;
    case 'kit': return <KitBuilder />;
    case 'cipher': return <RadioCipher />;
    case 'maps': return <DisasterMaps />;
    case 'myths': return <MythVsReality />;
    case 'pdfs': return <PrintablePDFs />;
    case 'community': return <CommunityOutpost />;
    default: return <div>[ SYS.ERR ]</div>;
  }
}

function WaterCalculator() {
  const [people, setPeople] = useState<number>(4);
  const [days, setDays] = useState<number>(14);

  const minLiters = people * days * 3.785; // 1 gallon is approx 3.785 liters
  const recLiters = people * days * 5.678; // 1.5 gallons

  return (
    <div className="space-y-8 font-mono">
      <h3 className="text-2xl text-[var(--text-primary)] tracking-widest uppercase border-b border-[var(--border-color)] pb-4">
        💧 Water Forecaster
      </h3>
      <p className="text-[var(--text-secondary)] text-sm">Calculate precise water storage requirements based on personnel and duration.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-xs tracking-widest text-[var(--text-secondary)] mb-2 uppercase">Personnel Count</label>
            <input 
              type="number" min="1" max="50" 
              value={people} onChange={e => setPeople(Number(e.target.value) || 1)}
              className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest text-[var(--text-secondary)] mb-2 uppercase">Duration (Days)</label>
            <input 
              type="number" min="1" max="365" 
              value={days} onChange={e => setDays(Number(e.target.value) || 1)}
              className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
            />
          </div>
        </div>
        
        <div className="bg-[var(--bg-primary)] p-6 border border-[var(--border-color)] flex flex-col justify-center space-y-6">
          <div>
            <div className="text-xs tracking-widest text-[var(--text-secondary)] mb-1 uppercase">Required (Survival Min.)</div>
            <div className="text-3xl font-bold text-[var(--text-primary)]">{Math.round(minLiters)} <span className="text-sm font-normal text-[var(--text-secondary)]">Liters</span></div>
          </div>
          <div className="border-t border-[var(--border-color)] pt-6">
            <div className="text-xs tracking-widest text-[var(--text-secondary)] mb-1 uppercase">Recommended (Sanitation)</div>
            <div className="text-3xl font-bold text-[var(--accent-primary)]">{Math.round(recLiters)} <span className="text-sm font-normal text-[var(--text-secondary)]">Liters</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FoodPlanner() {
  const [people, setPeople] = useState<number>(4);
  const [months, setMonths] = useState<number>(3);
  const [calories, setCalories] = useState<number>(2000);

  // Simplified basic calorie ratio calculation
  const totalDays = months * 30;
  const personDays = people * totalDays;
  
  const riceKg = Math.round(personDays * 0.3);
  const beansKg = Math.round(personDays * 0.15);
  const oatsKg = Math.round(personDays * 0.1);
  const saltKg = Math.round(personDays * 0.015);
  const oilLiters = Math.round(personDays * 0.05);

  return (
    <div className="space-y-8 font-mono">
      <h3 className="text-2xl text-[var(--text-primary)] tracking-widest uppercase border-b border-[var(--border-color)] pb-4">
        🍚 Food Storage Planner
      </h3>
      <p className="text-[var(--text-secondary)] text-sm">Long-term staple inventory generator.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <div>
            <label className="block text-xs tracking-widest text-[var(--text-secondary)] mb-2 uppercase">Target Cals/Day</label>
            <select value={calories} onChange={e => setCalories(Number(e.target.value))} className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none">
              <option value="1500">1500 (Ration)</option>
              <option value="2000">2000 (Standard)</option>
              <option value="2500">2500 (Active)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs tracking-widest text-[var(--text-secondary)] mb-2 uppercase">Personnel Size</label>
            <input type="number" value={people} onChange={e => setPeople(Number(e.target.value) || 1)} className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 text-[var(--text-primary)] focus:outline-none"/>
          </div>
          <div>
            <label className="block text-xs tracking-widest text-[var(--text-secondary)] mb-2 uppercase">Duration (Months)</label>
            <input type="number" value={months} onChange={e => setMonths(Number(e.target.value) || 1)} className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 text-[var(--text-primary)] focus:outline-none"/>
          </div>
        </div>
        
        <div className="lg:col-span-2 bg-[var(--bg-primary)] border border-[var(--border-color)] p-6">
          <div className="text-xs tracking-widest text-[var(--accent-primary)] mb-6 border-b border-[var(--border-color)] pb-2 uppercase">
            [ INVENTORY REQUIREMENT MATRIX ]
          </div>
          <ul className="space-y-4">
            <li className="flex justify-between border-b border-[var(--border-color)] pb-2"><span className="text-[var(--text-secondary)]">RICE / BARLEY (Carbs)</span> <span className="text-[var(--text-primary)]">{riceKg} kg</span></li>
            <li className="flex justify-between border-b border-[var(--border-color)] pb-2"><span className="text-[var(--text-secondary)]">BEANS / LENTILS (Protein)</span> <span className="text-[var(--text-primary)]">{beansKg} kg</span></li>
            <li className="flex justify-between border-b border-[var(--border-color)] pb-2"><span className="text-[var(--text-secondary)]">ROLLED OATS (Fiber)</span> <span className="text-[var(--text-primary)]">{oatsKg} kg</span></li>
            <li className="flex justify-between border-b border-[var(--border-color)] pb-2"><span className="text-[var(--text-secondary)]">COOKING OIL / FAT</span> <span className="text-[var(--text-primary)]">{oilLiters} Liters</span></li>
            <li className="flex justify-between"><span className="text-[var(--text-secondary)]">SALT / PRESERVATIVES</span> <span className="text-[var(--text-primary)]">{saltKg} kg</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function FalloutCalculator() {
  const [eventTime, setEventTime] = useState<number>(0);

  return (
    <div className="space-y-8 font-mono">
      <h3 className="text-2xl text-[var(--text-primary)] tracking-widest uppercase border-b border-[var(--border-color)] pb-4 flex items-center justify-between">
        ☢️ Fallout Shelter Time
        <span className="text-xs text-[var(--accent-primary)] border border-[var(--accent-primary)] px-2 py-1">UNCLASSIFIED</span>
      </h3>
      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
        Based on the 7/10 rule of decay. For every 7-fold increase in time from detonation, radiation exposure decreases by a factor of 10.
      </p>
      
      <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] p-6">
        <div className="text-xs tracking-widest text-[var(--text-secondary)] mb-6 uppercase">
          RADIATION DECAY TIMETABLE
        </div>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-red-900/30 pb-4">
            <div className="mb-2 md:mb-0">
              <span className="text-red-500 font-bold tracking-widest mr-4">H + 1 HOUR</span>
              <span className="text-[var(--text-secondary)] text-sm">Peak Radiation (1000 R/hr ref.)</span>
            </div>
            <div className="text-[var(--text-primary)] px-3 py-1 bg-red-950/40 text-xs border border-red-900">STAY SHELTERED</div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-orange-900/30 pb-4">
            <div className="mb-2 md:mb-0">
              <span className="text-orange-500 font-bold tracking-widest mr-4">H + 7 HOURS</span>
              <span className="text-[var(--text-secondary)] text-sm">10% of Peak (100 R/hr)</span>
            </div>
            <div className="text-[var(--text-primary)] px-3 py-1 bg-orange-950/40 text-xs border border-orange-900">STAY SHELTERED</div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-yellow-900/30 pb-4">
            <div className="mb-2 md:mb-0">
              <span className="text-yellow-500 font-bold tracking-widest mr-4">H + 48 HOURS</span>
              <span className="text-[var(--text-secondary)] text-sm">1% of Peak (10 R/hr)</span>
            </div>
            <div className="text-[var(--text-primary)] px-3 py-1 bg-yellow-950/40 text-xs border border-yellow-900">BRIEF EMERGENCIES ONLY</div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-green-900/30 pb-4">
            <div className="mb-2 md:mb-0">
              <span className="text-[var(--accent-primary)] font-bold tracking-widest mr-4">H + 14 DAYS</span>
              <span className="text-[var(--text-secondary)] text-sm">0.1% of Peak (1 R/hr)</span>
            </div>
            <div className="text-[var(--text-primary)] px-3 py-1 bg-green-950/40 text-xs border border-[var(--accent-primary)]">EVACUATION POSSIBLE</div>
          </div>
        </div>
        <p className="text-[10px] text-[var(--text-secondary)] mt-6 text-center italic">
          *DISCLAIMER: This is a mathematical approximation. True radiation rates vary based on weapon yield, burst altitude, and weather phenomena. Always rely on local Geiger counter readings.
        </p>
      </div>
    </div>
  );
}

function KitBuilder() {
  const [budget, setBudget] = useState('standard');
  const [familySize, setFamilySize] = useState('family');

  const baseWeight = budget === 'minimal' ? 12 : budget === 'standard' ? 25 : 45;
  const sizeMultiplier = familySize === 'solo' ? 1 : familySize === 'couple' ? 1.5 : 2.5;
  const totalWeight = (baseWeight * sizeMultiplier).toFixed(1);

  return (
    <div className="space-y-8 font-mono">
      <h3 className="text-2xl text-[var(--text-primary)] tracking-widest uppercase border-b border-[var(--border-color)] pb-4 flex justify-between items-center">
        <span>🎒 Survival Kit Builder</span>
        <span className="text-sm border border-[var(--border-color)] px-3 py-1">TOTAL LOAD: <strong className="text-[var(--accent-primary)]">{totalWeight} lbs</strong></span>
      </h3>
      
      <div className="flex gap-4">
        <select value={budget} onChange={e => setBudget(e.target.value)} className="bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-primary)] w-full">
          <option value="minimal">Minimalist / Low Budget (Light Fast)</option>
          <option value="standard">Standard Capability (72-Hour)</option>
          <option value="premium">Premium / Indefinite (Heavy Load)</option>
        </select>
        <select value={familySize} onChange={e => setFamilySize(e.target.value)} className="bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--accent-primary)] w-full">
          <option value="solo">Solo Operator</option>
          <option value="couple">Two Persons</option>
          <option value="family">Family (3-5)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-[var(--border-color)] p-4 bg-[var(--bg-primary)]">
          <div className="text-[var(--accent-primary)] text-xs tracking-widest mb-4">CORE ESSENTIALS</div>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li className="flex justify-between items-center"><span>[ ] Sawyer Squeeze Mini Filter</span><span className="text-xs text-[var(--text-secondary)]/50">0.2 lbs</span></li>
            <li className="flex justify-between items-center"><span>[ ] Emergency Rations (3 Days)</span><span className="text-xs text-[var(--text-secondary)]/50">3.5 lbs</span></li>
            <li className="flex justify-between items-center"><span>[ ] IFAK (Individual First Aid Kit)</span><span className="text-xs text-[var(--text-secondary)]/50">1.2 lbs</span></li>
            <li className="flex justify-between items-center"><span>[ ] LED Headlamp + Batteries</span><span className="text-xs text-[var(--text-secondary)]/50">0.3 lbs</span></li>
          </ul>
        </div>
        <div className="border border-[var(--border-color)] p-4 bg-[var(--bg-primary)]">
          <div className="text-[var(--accent-primary)] text-xs tracking-widest mb-4">TACTICAL GEAR</div>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li className="flex justify-between items-center"><span>[ ] Baofeng UV-5R Ham Radio</span><span className="text-xs text-[var(--text-secondary)]/50">0.5 lbs</span></li>
            <li className="flex justify-between items-center"><span>[ ] Heavy Duty Emergency Blanket</span><span className="text-xs text-[var(--text-secondary)]/50">0.8 lbs</span></li>
            <li className="flex justify-between items-center"><span>[ ] Fixed Blade Tang Knife</span><span className="text-xs text-[var(--text-secondary)]/50">0.9 lbs</span></li>
            <li className="flex justify-between items-center"><span>[ ] Physical Passport & Cash Cache</span><span className="text-xs text-[var(--text-secondary)]/50">0.1 lbs</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function RadioCipher() {
  const [input, setInput] = useState('');
  const [shift, setShift] = useState(3);
  
  const processText = (text: string, amount: number) => {
    return text.replace(/[a-zA-Z]/g, (c) => {
      const base = c <= 'Z' ? 65 : 97;
      return String.fromCharCode(((c.charCodeAt(0) - base + amount + 26) % 26) + base);
    });
  };

  return (
    <div className="space-y-8 font-mono">
      <h3 className="text-2xl text-[var(--text-primary)] tracking-widest uppercase border-b border-[var(--border-color)] pb-4">
        📻 Radio Comms Cipher
      </h3>
      <p className="text-[var(--text-secondary)] text-sm">Offline Caesarian shift tool for encoding unsecure radio transmissions (VHF/UHF).</p>
      
      <div className="bg-[var(--bg-primary)] p-6 border border-[var(--border-color)]">
        <label className="block text-xs tracking-widest text-[var(--text-secondary)] mb-4 uppercase">Key Shift</label>
        <input 
          type="number" min="1" max="25" 
          value={shift} onChange={e => setShift(Number(e.target.value) || 0)}
          className="bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-2 text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none w-24 mb-6"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs tracking-widest text-[var(--text-secondary)] mb-2 uppercase">Cleartext Input</label>
            <textarea 
              value={input}
              onChange={e => setInput(e.target.value)}
              className="w-full h-32 bg-[var(--bg-secondary)] border border-[var(--border-color)] p-4 text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none resize-none placeholder:text-[var(--text-secondary)]/30"
              placeholder="Enter message..."
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest text-[var(--accent-primary)] mb-2 uppercase">Ciphertext Output</label>
            <div className="w-full h-32 bg-black border border-[var(--accent-primary)] p-4 text-[var(--accent-primary)] overflow-auto break-all">
              {processText(input, shift)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MythVsReality() {
  return (
    <div className="space-y-8 font-mono">
      <h3 className="text-2xl text-[var(--text-primary)] tracking-widest uppercase border-b border-[var(--border-color)] pb-4">
        Myth vs Reality
      </h3>
      
      <div className="space-y-6">
        <div className="border border-[var(--border-color)] p-6 bg-[var(--bg-primary)] relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
          <div className="text-xl text-red-500 mb-2 flex items-center gap-2">
            <span>❌</span> Drink alcohol after radiation exposure
          </div>
          <p className="text-[var(--text-secondary)] text-sm mb-4">
            A common cinematic myth suggests alcohol helps prevent radiation sickness.
          </p>
          <div className="text-[var(--text-primary)] text-sm border-t border-[var(--border-color)] pt-4 mt-2">
            <strong className="text-[var(--accent-primary)]">REALITY:</strong> False. Alcohol causes severe dehydration and cellular stress, which radically accelerates radiation damage. Potassium Iodide (KI) is the only proven preventative for thyroid absorption.
          </div>
        </div>

        <div className="border border-[var(--border-color)] p-6 bg-[var(--bg-primary)] relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
          <div className="text-xl text-red-500 mb-2 flex items-center gap-2">
            <span>❌</span> Suck out snake venom from a bite
          </div>
          <p className="text-[var(--text-secondary)] text-sm mb-4">
             Widespread belief that making an incision and sucking out venom saves lives.
          </p>
          <div className="text-[var(--text-primary)] text-sm border-t border-[var(--border-color)] pt-4 mt-2">
            <strong className="text-[var(--accent-primary)]">REALITY:</strong> False. This introduces rapid infection and damages local tissue further. Venom travels through lymphatic systems instantly. Keep the limb immobilized at heart level and seek antivenom.
          </div>
        </div>
      </div>
    </div>
  );
}

function PrintablePDFs() {
  return (
    <div className="space-y-8 font-mono">
      <h3 className="text-2xl text-[var(--text-primary)] tracking-widest uppercase border-b border-[var(--border-color)] pb-4">
        🖨️ Offline Protocols (PDF)
      </h3>
      <p className="text-[var(--text-secondary)] text-sm">Download physical copies. If the internet is unreliable, your content should still be useful.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          '72-Hour Emergency Checklist',
          'Urban Bug-Out Protocol',
          'Family Rendezvous Plan',
          'First Aid & Trauma Guide',
          'Emergency Radio Frequencies',
          'Water Filtration Manual'
        ].map((doc, i) => (
          <div key={i} className="group border border-[var(--border-color)] p-4 bg-[var(--bg-primary)] flex justify-between items-center cursor-pointer hover:border-[var(--accent-primary)] transition-colors">
            <span className="text-[var(--text-primary)] text-sm group-hover:text-[var(--accent-primary)] transition-colors">{doc}</span>
            <span className="group-hover:text-[var(--accent-primary)]">📥</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DisasterMaps() {
  return (
    <div className="space-y-8 font-mono h-full flex flex-col">
      <h3 className="text-2xl text-[var(--text-primary)] tracking-widest uppercase border-b border-[var(--border-color)] pb-4">
        🗺️ Disaster Heatmaps
      </h3>
      <p className="text-[var(--text-secondary)] text-sm">Real-time localized threat vectors. Layers include fault lines, flood zones, nuclear plants, and wildfire risks.</p>
      
      <div className="flex-1 bg-[var(--bg-primary)] border border-[var(--border-color)] min-h-[300px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--accent-primary)] via-transparent to-transparent"></div>
        <div className="text-center">
          <div className="text-4xl mb-4 text-[var(--border-color)] animate-pulse">🌐</div>
          <div className="text-[var(--accent-primary)] tracking-widest text-sm">[ MAP API OFFLINE / SIMULATION MODE ]</div>
          <div className="text-[var(--text-secondary)] text-xs mt-2">Fetching cached topological data...</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4 text-center text-xs text-[var(--text-secondary)]">
        <div className="border border-[var(--border-color)] p-2">Tectonic Shift [0]</div>
        <div className="border border-[var(--border-color)] p-2">Active Wildfires [0]</div>
        <div className="border border-[var(--border-color)] p-2">Reactor Rad [0]</div>
        <div className="border border-[var(--border-color)] p-2">Atmospheric [0]</div>
      </div>
    </div>
  );
}

function CommunityOutpost() {
  return (
    <div className="space-y-8 font-mono">
      <h3 className="text-2xl text-[var(--text-primary)] tracking-widest uppercase border-b border-[var(--border-color)] pb-4 flex justify-between items-center">
        <span>📡 Community Outpost</span>
        <span className="text-xs border border-[var(--accent-primary)] text-[var(--accent-primary)] px-2 py-1">FACT CHECKED</span>
      </h3>
      
      <div className="text-[var(--text-secondary)] text-sm">Secure channel for peer-to-peer survival communications. Comments are strictly moderated for factual accuracy.</div>

      <div className="border border-[var(--border-color)] p-6 bg-[var(--bg-primary)]">
        <div className="mb-6 border-b border-[var(--border-color)] pb-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[var(--accent-primary)] text-sm font-bold">@GhostEcho_09</span>
            <span className="text-[var(--text-secondary)] text-xs">2 HOURS AGO</span>
          </div>
          <p className="text-[var(--text-primary)] text-sm leading-relaxed">
            Tested the EMP trash-can Faraday cage from Guide 001.04. Submerged a Baofeng and an old Galaxy phone. Called it from outside, zero signal penetration. Cheap, effective build.
          </p>
          <div className="mt-4 flex gap-4 text-xs text-[var(--text-secondary)]">
            <span className="hover:text-[var(--accent-primary)] cursor-pointer">[ VERIFY ]</span>
            <span className="hover:text-[var(--accent-primary)] cursor-pointer">[ ENGAGE ]</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-[var(--accent-primary)] text-sm font-bold">@HighSierra77</span>
            <span className="text-[var(--text-secondary)] text-xs">1 DAY AGO</span>
          </div>
          <p className="text-[var(--text-primary)] text-sm leading-relaxed">
            Monthly Challenge #4 Complete: Lived out of my bug-out bag for 3 days in the Cascades. Found out my water filter clogs faster in silt streams than I thought. Pack extra backflush syringes, folks. Need to adjust my loadout.
          </p>
          <div className="mt-4 flex gap-4 text-xs text-[var(--text-secondary)]">
            <span className="hover:text-[var(--accent-primary)] cursor-pointer">[ VERIFY ]</span>
            <span className="hover:text-[var(--accent-primary)] cursor-pointer">[ ENGAGE ]</span>
          </div>
        </div>
      </div>
      
      <button className="w-full py-4 border border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-black transition-colors font-bold tracking-widest text-sm uppercase">
        TRANSMIT DISPATCH
      </button>
    </div>
  );
}
