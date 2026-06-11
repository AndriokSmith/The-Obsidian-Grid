import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Data Format for Scenarios
// To add more scenarios (e.g. EMP blast, Economic collapse), just add another object to this array.
const SCENARIOS = [
  {
    id: "zombie",
    title: "[ SCENARIO 01 : OUTBREAK ALPHA ]",
    metaTitle: "[ STATUS: CRITICAL ]",
    threat: {
      description: "A fast-spreading virus makes infected people highly aggressive. It spreads through physical contact and bites, causing local emergency services to crash instantly.",
      status: "STATUS: ACTIVE / CONTAINMENT: FAILED",
    },
    first24: [
      "Lock down your structure and secure all windows and doors immediately.",
      "Fill up every clean container, sink, and bathtub with water before pressure drops.",
      "Go completely dark and silent to avoid drawing attention to your position."
    ],
    gear: [
      "72-Hour mobile backpack with food and water purifiers",
      "Heavy multi-tool for quick repairs and turning off utilities",
      "Flashlight with a red filter to stay hidden in the dark"
    ]
  },
  {
    id: "blackout",
    title: "[ SCENARIO 02 : GRID BLACKOUT ]",
    metaTitle: "[ GRID: OFFLINE ]",
    threat: {
      description: "A massive power blowout or EMP destroys the electrical grid, cellular networks, and all basic electronic devices instantly.",
      status: "STATUS: GRID DOWN / COMMS: OFFLINE",
    },
    first24: [
      "Disconnect any backup batteries or solar panels to protect them from secondary surges.",
      "Secure your immediate home area and check on your household supplies.",
      "Avoid major highways, as traffic lights will be dead and roads will jam fast."
    ],
    gear: [
      "Emergency hand-crank radio for local audio broadcasts",
      "Physical paper road maps and a reliable analog compass",
      "Non-electric tools like manual can openers and hand saws"
    ]
  },
  {
    id: "collapse",
    title: "[ SCENARIO 03 : SYSTEM FAILURE ]",
    metaTitle: "[ SUPPLY: COMPROMISED ]",
    threat: {
      description: "A total economic collapse halts delivery trucks. Grocery stores empty out completely within hours, and utility companies stop running.",
      status: "STATUS: COLLAPSE / INFRASTRUCTURE: FAILING",
    },
    first24: [
      "Withdraw any available cash before bank networks and ATMs freeze entirely.",
      "Gather remaining shelf-stable food and prescription medicines immediately.",
      "Team up with trusted neighbors to establish a basic neighborhood watch."
    ],
    gear: [
      "Long-term food supplies like rice, beans, and canned goods",
      "Small items for trading, such as lighters, batteries, and simple water filters",
      "A secure, fireproof box for physical cash and vital identification documents"
    ]
  },
  {
    id: "fallout",
    title: "[ SCENARIO 04 : FALLOUT ZONE ]",
    metaTitle: "[ RADIATION: HIGH ]",
    threat: {
      description: "A nuclear emergency fills the air with dangerous, invisible radioactive dust that contaminates everything outside.",
      status: "STATUS: LETHAL / RADIATION: RISING",
    },
    first24: [
      "Get inside a thick brick or concrete building immediately and move to the center.",
      "Turn off all air conditioning units and seal your vents with plastic or tape.",
      "Wash your skin and clothes thoroughly if you were exposed to the outside air."
    ],
    gear: [
      "Thick plastic sheeting and heavy-duty duct tape to seal air gaps",
      "N95 or particle masks to protect your lungs from inhaling dust",
      "A compact radiation detector or personal dosimeter card"
    ]
  },
  {
    id: "climate",
    title: "[ SCENARIO 05 : CLIMATE EXTREME ]",
    metaTitle: "[ TEMP: CRITICAL ]",
    threat: {
      description: "Severe weather or a sudden deep freeze drops temperatures to deadly lows, knocking out heating systems and freezing water pipes.",
      status: "STATUS: SEVERE / TEMPERATURE: DROPPING",
    },
    first24: [
      "Move everyone into a single, small interior room to seal in body heat.",
      "Shut off your main water valve and drain your pipes so they do not burst.",
      "Layer your warmest winter clothes and blankets before your body cools down."
    ],
    gear: [
      "Sub-zero rated sleeping bags and heavy thermal emergency blankets",
      "An indoor-safe portable heater with extra fuel canisters",
      "High-calorie foods that do not require cooking or water to prepare"
    ]
  }
];

// Single Scenario Card Component
const ScenarioCard: React.FC<{ data: typeof SCENARIOS[0] }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border-color)] last:border-b-0">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-6 bg-[var(--bg-secondary)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 cursor-pointer hover:bg-[var(--bg-primary)] transition-colors"
      >
        <h2 className="font-mono text-lg tracking-widest text-[var(--accent-primary)] transition-colors flex items-center gap-3">
          <span className="w-6 text-center">{isOpen ? '[-]' : '[+]'}</span>
          {data.title}
        </h2>
        <div className="font-mono text-xs text-[var(--text-secondary)]">{data.metaTitle}</div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)] border-t border-[var(--border-color)]">
              {/* The Threat */}
              <div className="p-8 hover:bg-[var(--bg-secondary)]/50 transition-colors">
                <h3 className="font-mono tracking-widest text-[var(--accent-secondary)] mb-6 border-b border-[var(--border-color)] pb-4 flex items-center gap-3">
                  <span className="text-xl">🚨</span> THE THREAT
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  {data.threat.description}
                </p>
                <div className="font-mono text-xs text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-color)] p-3">
                  {data.threat.status}
                </div>
              </div>

              {/* First 24 Hours */}
              <div className="p-8 hover:bg-[var(--bg-secondary)]/50 transition-colors">
                <h3 className="font-mono tracking-widest text-[var(--text-primary)] mb-6 border-b border-[var(--border-color)] pb-4 flex items-center gap-3">
                  <span className="text-xl">🏃</span> FIRST 24 HOURS
                </h3>
                <ul className="space-y-4 font-mono text-sm leading-relaxed">
                  {data.first24.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="text-[var(--accent-primary)] font-bold">{index + 1}.</span>
                      <span className="text-[var(--text-secondary)]">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The Gear */}
              <div className="p-8 hover:bg-[var(--bg-secondary)]/50 transition-colors">
                <h3 className="font-mono tracking-widest text-[var(--text-primary)] mb-6 border-b border-[var(--border-color)] pb-4 flex items-center gap-3">
                  <span className="text-[var(--accent-primary)] text-xl">📦</span> THE GEAR
                </h3>
                <ul className="space-y-4 font-mono text-sm leading-relaxed text-[var(--text-secondary)]">
                  {data.gear.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-[var(--accent-primary)] flex-shrink-0"></span> 
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ScenarioGrid() {
  return (
    <section className="col-span-full border-b border-[var(--border-color)] flex flex-col">
      {SCENARIOS.map(scenario => (
        <ScenarioCard key={scenario.id} data={scenario} />
      ))}
    </section>
  );
}
