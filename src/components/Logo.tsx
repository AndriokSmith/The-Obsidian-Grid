import React from 'react';

export function ObsidianLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Outer Ring segmented */}
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="8" strokeDasharray="18 5" />
      
      {/* Inner Hexagon framework */}
      <path d="M50 16 L79.4 33 L79.4 67 L50 84 L20.6 67 L20.6 33 Z" stroke="currentColor" strokeWidth="3" />
      
      {/* Connecting Spokes to the central cube */}
      <path d="M50 20 L50 38 M79.4 33 L64.7 41.5 M79.4 67 L64.7 58.5 M50 80 L50 62 M20.6 67 L35.3 58.5 M20.6 33 L35.3 41.5" stroke="currentColor" strokeWidth="3" />
      
      {/* Central Cube outer hexagon */}
      <path d="M50 38 L62 45 L62 59 L50 66 L38 59 L38 45 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
      
      {/* Inner Cube Y lines (making it look 3D) */}
      {/* Use a contrasting color, or just cut out using stroke */}
      <path d="M50 52 L50 66 M50 52 L38 45 M50 52 L62 45" stroke="#111" strokeWidth="2.5" />
      
      {/* Glowing Nodes at Vertices (triangles/spikes) */}
      <g fill="var(--accent-primary, #00ff00)">
        <polygon points="50,11 54,16 50,21 46,16" />
        <polygon points="83.4,30.7 79.4,36 75.4,30.7 79.4,25.4" className="origin-[79.4px_33px] rotate-[30deg]" />
        <polygon points="83.4,69.3 79.4,64 75.4,69.3 79.4,74.6" className="origin-[79.4px_67px] rotate-[-30deg]" />
        <polygon points="50,89 54,84 50,79 46,84" />
        <polygon points="16.6,69.3 20.6,64 24.6,69.3 20.6,74.6" className="origin-[20.6px_67px] rotate-[30deg]" />
        <polygon points="16.6,30.7 20.6,36 24.6,30.7 20.6,25.4" className="origin-[20.6px_33px] rotate-[-30deg]" />
      </g>
      
      {/* Inner glowing details mimicking magma cracks */}
      <circle cx="50" cy="52" r="3" fill="var(--accent-primary, #00ff00)" />
    </svg>
  );
}
