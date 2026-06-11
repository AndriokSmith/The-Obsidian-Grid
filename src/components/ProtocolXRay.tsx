import React, { useState, useEffect } from 'react';

export function ProtocolXRay() {
  const [vector, setVector] = useState(0);
  const [proximity, setProximity] = useState(0);
  const [posture, setPosture] = useState(0);
  
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<{ prob: number, text: string, status: 'critical' | 'contingency' | 'secure' } | null>(null);
  const [displayText, setDisplayText] = useState('');

  const runSimulation = () => {
    setIsRunning(true);
    setResult(null);
    setDisplayText('');
    
    const vScore = [-30, -10, -20][vector];
    const pScore = [-30, -10, 10][proximity];
    const poScore = [-30, 10, 40][posture];
    
    let prob = 60 + vScore + pScore + poScore;
    prob = Math.max(5, Math.min(95, prob)); 

    let statusType: 'critical' | 'contingency' | 'secure';
    let text = '';
    if (prob < 30) {
      statusType = 'critical';
      text = "STATUS: COMPROMISED. The virus is spreading too fast in your area. Your current setup won't hold. Lock your doors, grab your emergency pack, and get ready to move immediately.";
    } else if (prob <= 70) {
      statusType = 'contingency';
      text = "STATUS: MARGINAL HOLD. The grid is wobbling. Local infections reported. Action Required: Start a 48-hour silent lockdown. Do not trust strangers. Wait for radio updates.";
    } else {
      statusType = 'secure';
      text = "STATUS: SECURE. Your defenses are holding. You have good distance from the danger zone. Action Required: Save your supplies. Use quiet distractions to keep threats away from your home.";
    }

    setTimeout(() => {
        setResult({ prob, text, status: statusType });
        setIsRunning(false);
    }, 800); 
  };

  useEffect(() => {
    if (result) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(result.text.slice(0, i + 1));
        i++;
        if (i >= result.text.length) {
          clearInterval(interval);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [result]);

  const selectClass = "w-full bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] font-mono p-3 focus:outline-none hover:border-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition-colors appearance-none cursor-pointer";

  return (
    <section className="col-span-full border-b border-[var(--border-color)] py-16 px-6 md:px-12 bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 md:p-10 relative">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-50"></div>
            
            <h2 className="font-mono text-xl tracking-widest text-[var(--accent-primary)] mb-8 border-b border-[var(--border-color)] pb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-[var(--accent-primary)] animate-pulse inline-block"></span>
                [ SCENARIO: PROTOCOL X-RAY (ZOMBIE VIRUS) ]
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
               <div className="space-y-6">
                 <div>
                    <label className="block font-mono text-sm tracking-widest text-[var(--text-secondary)] mb-2 uppercase">Parameter 1: Viral Type</label>
                    <div className="relative">
                        <select className={selectClass} value={vector} onChange={(e) => setVector(Number(e.target.value))}>
                            <option value={0}>Airborne Virus</option>
                            <option value={1}>Spread by Bites/Blood</option>
                            <option value={2}>Zombie Virus</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--accent-primary)] font-mono text-xs">▼</div>
                    </div>
                 </div>

                 <div>
                    <label className="block font-mono text-sm tracking-widest text-[var(--text-secondary)] mb-2 uppercase">Parameter 2: Distance to City Core</label>
                    <div className="relative">
                        <select className={selectClass} value={proximity} onChange={(e) => setProximity(Number(e.target.value))}>
                            <option value={0}>Downtown &lt; 5mi</option>
                            <option value={1}>Suburbs &lt; 20mi</option>
                            <option value={2}>Middle of Nowhere</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--accent-primary)] font-mono text-xs">▼</div>
                    </div>
                 </div>
               </div>

               <div>
                 <label className="block font-mono text-sm tracking-widest text-[var(--text-secondary)] mb-4 uppercase">Parameter 3: Current Home Defense</label>
                 <div className="space-y-4 bg-[var(--bg-primary)] border border-[var(--border-color)] p-5 h-[calc(100%-2rem)]">
                    {[
                      { id: 0, label: "Open Doors / Unsecured" },
                      { id: 1, label: "Locked Doors & Blinds Closed" },
                      { id: 2, label: "Fortified Outpost" }
                    ].map((opt) => (
                      <label key={opt.id} className="flex items-center gap-4 cursor-pointer group w-full">
                        <div className="relative flex items-center justify-center w-5 h-5 flex-shrink-0 border border-[var(--border-color)] group-hover:border-[var(--accent-primary)] transition-colors">
                           <input type="radio" name="posture" value={opt.id} checked={posture === opt.id} onChange={() => setPosture(opt.id)} className="sr-only" />
                           {posture === opt.id && <div className="w-2.5 h-2.5 bg-[var(--accent-primary)]"></div>}
                        </div>
                        <span className={`font-mono text-sm uppercase tracking-wide transition-colors ${posture === opt.id ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'}`}>{opt.label}</span>
                      </label>
                    ))}
                 </div>
               </div>
            </div>

            <button 
                onClick={runSimulation}
                disabled={isRunning}
                className="w-full md:w-auto px-8 py-4 font-mono font-bold tracking-widest text-[var(--accent-primary)] bg-[var(--bg-primary)] hover:bg-[var(--accent-primary)] hover:text-black transition-all duration-200 uppercase border border-[var(--border-color)] hover:border-[var(--accent-primary)] disabled:opacity-50 disabled:cursor-wait"
            >
                {isRunning ? '[ EXECUTING... ]' : '[ RUN SIMULATION ]'}
            </button>

            {/* Interactive Terminal Output */}
            <div className="mt-8 bg-[var(--bg-primary)] border border-[var(--border-color)] p-6 md:p-8 min-h-[180px] relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
               <div className="absolute top-0 left-0 p-1 px-2 bg-[var(--border-color)] text-[10px] font-mono tracking-widest text-[var(--text-secondary)] leading-none uppercase">TERMINAL.OUT :: LOCAL</div>
               {result ? (
                 <div className="mt-4 font-mono">
                    <div className="flex items-center flex-wrap gap-4 mb-4 pb-4 border-b border-[var(--border-color)]/50">
                        <span className="text-sm text-[var(--text-secondary)]">SURVIVAL PROBABILITY:</span>
                        <span className={`text-2xl font-bold tracking-widest ${result.status === 'critical' ? 'text-[var(--accent-secondary)] drop-shadow-[0_0_8px_rgba(255,61,0,0.5)]' : 'text-[var(--accent-primary)] drop-shadow-[0_0_8px_rgba(0,230,118,0.3)]'}`}>
                            {result.prob}.00%
                        </span>
                    </div>
                    <div className={`leading-relaxed text-sm md:text-base selection:bg-black selection:text-white ${result.status === 'critical' ? 'text-[var(--accent-secondary)]' : 'text-[var(--accent-primary)]'}`}>
                       <span className="opacity-50 mr-2">&gt;</span>{displayText}
                       <span className="animate-pulse inline-block w-2.5 h-4 bg-current align-middle ml-1"></span>
                    </div>
                 </div>
               ) : (
                <div className="mt-4 font-mono text-sm text-[var(--text-secondary)] flex items-center h-full opacity-40">
                   <span className="opacity-50 mr-2">&gt;</span> Awaiting input telemetry...
                </div>
               )}
               {isRunning && (
                   <div className="absolute inset-0 bg-[var(--bg-primary)]/80 backdrop-blur-[1px] flex items-center justify-center border border-[var(--border-color)] z-10">
                       <span className="font-mono text-[var(--accent-primary)] text-sm tracking-widest animate-pulse">[ PROCESSING THREAT MATRIX ]</span>
                   </div>
               )}
            </div>
        </div>
    </section>
  )
}
