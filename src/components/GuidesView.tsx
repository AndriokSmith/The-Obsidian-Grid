import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Printer } from 'lucide-react';

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
      
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 pt-8 border-t border-[var(--border-color)]">
        <button 
          onClick={() => window.print()}
          className="px-6 py-3 border border-[var(--border-color)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors font-mono tracking-widest text-sm uppercase flex items-center justify-center gap-2"
        >
          <Printer size={16} />
          [ PRINT PHYSICAL ARCHIVE ]
        </button>
        <button 
          onClick={() => setSelectedGuide(null)}
          className="px-6 py-3 border border-[var(--border-color)] hover:border-[var(--accent-primary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors font-mono tracking-widest text-sm uppercase"
        >
          [ RETURN TO DIRECTORY ]
        </button>
      </div>
    </div>
  );

  const guide00103 = (
    <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed text-left">
      <div className="border-b border-[var(--border-color)] pb-6 mb-8">
        <h1 className="font-mono text-2xl md:text-4xl font-bold tracking-widest text-[var(--accent-primary)] uppercase">
          GUIDE 001.03: Water Independence: 5 Ways to Filter Dirty Water
        </h1>
      </div>

      <p>
        When the grid fails, tap water stops running within hours, and whatever is left in the pipes can quickly become unsafe. You can live for weeks without food, but you only have about 3 days without clean water.
      </p>

      <p>
        Here is the plain-English, step-by-step guide to turning sketchy puddle, river, or rainwater into safe drinking water using basic household items.
      </p>

      <div className="h-px w-full bg-[var(--border-color)] my-8"></div>

      <blockquote className="border-l-2 border-[var(--accent-primary)] pl-6 py-2 bg-[var(--bg-secondary)]/30 text-base italic">
        Before you use any chemical or boiling method, always run your dirty water through a clean cloth, t-shirt, or coffee filter first. This removes the big chunks of dirt, sand, and mud so your main purification method can do its job properly.
      </blockquote>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mt-12 mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">1.</span> The Gold Standard: Boiling
      </h3>
      <p className="mb-4">Boiling is the simplest and most effective way to kill everything that can make you sick, including bacteria, viruses, and parasites.</p>
      <ul className="space-y-3 ml-4">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">How to do it:</strong> Bring your water to a rolling boil (where the bubbles are aggressively popping) and let it stay that way for at least <strong>1 full minute</strong>. If you are high up in the mountains, boil it for <strong>3 minutes</strong>.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Tip:</strong> Let it cool completely before drinking. If it tastes flat, pour it back and forth between two clean containers to mix air back into it.</div></li>
      </ul>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mt-12 mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">2.</span> The Household Backup: Unscented Bleach
      </h3>
      <p className="mb-4">If you lose power and cannot start a fire to boil water, standard liquid household bleach from your laundry room is a lifesaver.</p>
      <ul className="space-y-3 ml-4">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">The Rule:</strong> You must use <strong>regular, unscented liquid bleach</strong>. Do not use color-safe, scented, or splashless bleach, as the added perfumes and chemicals will poison the water.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">How to do it:</strong> Add exactly <strong>8 drops</strong> of bleach to 1 gallon of clear water (or 16 drops if the water is cloudy). Stir it well and let it sit untouched for <strong>30 minutes</strong>.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">The Test:</strong> After 30 minutes, smell the water. It should have a very slight chlorine smell. If it doesn't, add 8 more drops and wait another 15 minutes.</div></li>
      </ul>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mt-12 mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">3.</span> The Natural Filter: Charcoal, Sand, and Gravel
      </h3>
      <p className="mb-4">If your water looks like thick mud, chemicals won't clear it up. You need a gravity filter to trap the dirt particles.</p>
      <ul className="space-y-3 ml-4 mb-4">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">How to do it:</strong> Cut the bottom off a plastic water bottle and flip it upside down like a funnel. Stuff a clean cloth or coffee filter into the narrow neck first. Then, add layers in this exact order from bottom to top:</div></li>
      </ul>
      <ol className="space-y-3 ml-12 mb-4 list-decimal list-inside">
        <li>A thick layer of crushed charcoal (burnt wood from a campfire works perfectly).</li>
        <li>A layer of clean sand.</li>
        <li>A layer of small gravel or pebbles.</li>
      </ol>
      <ul className="space-y-3 ml-4">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">How it works:</strong> Pour the muddy water into the top. It will trickle down through the layers and come out of the neck vastly clearer. <em>(Note: This removes dirt and odor, but you still need to boil the water afterward to kill microscopic bugs)</em>.</div></li>
      </ul>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mt-12 mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">4.</span> The Free Resource: Solar Disinfection (SODIS)
      </h3>
      <p className="mb-4">If you have zero tools, zero fuel, and zero bleach, you can let the sun do the heavy lifting. Ultraviolet (UV) light destroys organic hazards.</p>
      <ul className="space-y-3 ml-4">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">How to do it:</strong> Find a completely clear, clean plastic bottle (glass won't let enough UV light through). Fill it up with clear water and shake it to add oxygen.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">The Wait:</strong> Place the bottle flat on a dark surface (like a tin roof or black asphalt) under direct, unshaded sunlight. Leave it there for <strong>6 hours</strong>. If the weather is cloudy, leave it out for <strong>2 days</strong>.</div></li>
      </ul>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mt-12 mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">5.</span> The Ultimate Purifier: Basic Distillation
      </h3>
      <p className="mb-4">Distillation is the only method that removes heavy chemicals, salt, and radiation dust. It works by turning water into steam and catching the clean condensation.</p>
      <ul className="space-y-3 ml-4 mb-8">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">How to do it:</strong> Place a large pot filled with dirty water on a stove or campfire. Put a smaller, clean bowl inside the pot so it floats on the dirty water. Turn the big pot's lid <strong>upside down</strong> and place it on top, then put ice or cold water on top of the inverted lid.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">How it works:</strong> As the dirty water boils, the steam rises, hits the cold, upside-down lid, turns back into clean water droplets, and drips directly into your clean center bowl.</div></li>
      </ul>

      <div className="border border-yellow-600 bg-yellow-900/20 p-6 text-yellow-500 font-mono text-sm leading-relaxed relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-yellow-600"></div>
        <strong className="text-yellow-400 block mb-2 uppercase tracking-wide">⚠️ CRITICAL SAFETY REMINDER:</strong>
        Filtering removes dirt, mud, and sand. Purifying kills live bugs and bacteria. For the safest possible drink, always filter the dirt out <em>first</em>, then boil or bleach the water <em>second</em>.
      </div>
      
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 pt-8 border-t border-[var(--border-color)]">
        <button 
          onClick={() => window.print()}
          className="px-6 py-3 border border-[var(--border-color)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors font-mono tracking-widest text-sm uppercase flex items-center justify-center gap-2"
        >
          <Printer size={16} />
          [ PRINT PHYSICAL ARCHIVE ]
        </button>
        <button 
          onClick={() => setSelectedGuide(null)}
          className="px-6 py-3 border border-[var(--border-color)] hover:border-[var(--accent-primary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors font-mono tracking-widest text-sm uppercase"
        >
          [ RETURN TO DIRECTORY ]
        </button>
      </div>
    </div>
  );

  const guide00102 = (
    <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed text-left">
      <div className="border-b border-[var(--border-color)] pb-6 mb-8">
        <h1 className="font-mono text-2xl md:text-4xl font-bold tracking-widest text-[var(--accent-primary)] uppercase">
          GUIDE 001.02: First Aid: Treating Infected Wounds Without Antibiotics
        </h1>
      </div>

      <p>
        In a major grid-down scenario, minor cuts can quickly become life-threatening if they get infected. Without access to a pharmacy or modern doctors, you have to rely on proper cleaning and natural alternatives to keep bacteria from spreading.
      </p>

      <p>
        An infection happens when bacteria enter a break in the skin. Your primary goal is to make the wound an environment where bacteria cannot survive. If you don't have access to standard antibiotic ointments or pills, follow this three-step protocol using simple household supplies.
      </p>

      <div className="h-px w-full bg-[var(--border-color)] my-8"></div>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mt-12 mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">🚨</span> How to Spot an Infection First
      </h3>
      <p className="mb-4">Before treating a wound, you need to know what you are dealing with. Look for these clear warning signs:</p>
      <ul className="space-y-3 ml-4">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Heat:</strong> The skin around the wound feels unusually warm.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Redness & Swelling:</strong> The red area is expanding outward from the cut.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Ooze:</strong> The wound is discharging thick, yellow, or greenish pus.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Smell:</strong> The wound has a foul, distinct odor.</div></li>
      </ul>

      <div className="h-px w-full bg-[var(--border-color)] my-8"></div>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">🛠️</span> The 3-Step Treatment Protocol
      </h3>

      <h4 className="font-mono text-lg text-[var(--text-primary)] mt-8 mb-3 uppercase">Step 1: Aggressive Cleaning (The Most Important Step)</h4>
      <p className="mb-4">You cannot just put a bandage over dirt. You need to physically flush out the bacteria.</p>
      <ul className="space-y-3 ml-4 mb-6">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Boil and Cool Water:</strong> Clean water is mandatory. Boil a pot of water for 1 minute, then let it cool down until it is safe to touch.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Make a Saline Flush:</strong> Mix 2 teaspoons of standard salt into a quart of your cooled, boiled water. This creates a saltwater solution that matches your body's natural fluids, which cleans the wound without damaging healthy tissue.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Flush the Wound:</strong> Use a clean cloth, a syringe, or just pour the water directly over the wound with pressure to wash away dirt and loose bacteria. Scrub very gently with plain soap around the edges, but do not get harsh soap directly inside the deep cut.</div></li>
      </ul>

      <h4 className="font-mono text-lg text-[var(--text-primary)] mt-8 mb-3 uppercase">Step 2: Apply a Natural Antiseptic</h4>
      <p className="mb-4">If Neosporin isn't available, you can use these common alternatives that naturally kill or slow down bacteria:</p>
      <ul className="space-y-3 ml-4 mb-6">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Raw Honey:</strong> This is one of the best natural antibiotics ever discovered. Bacteria cannot grow in honey because it draws moisture out of them and produces trace amounts of hydrogen peroxide. Apply a thin layer of pure, raw honey directly into the clean wound.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Crushed Garlic (For Edges Only):</strong> Garlic contains a powerful germ-killing compound called alicin. Crush a clove of garlic to activate it, let it sit for 5 minutes, mix it with a tiny bit of clean water or oil, and apply it <em>around</em> the wound. Do not put raw garlic directly inside a deep cut, as it will cause severe burning and tissue irritation.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Salt Paste:</strong> If honey isn't an option, you can mix a tiny bit of boiled water with salt to create a thick paste. Apply it to the wound. It will sting intensely, but salt draws water out of bacteria cells, dehydrating and killing them.</div></li>
      </ul>

      <h4 className="font-mono text-lg text-[var(--text-primary)] mt-8 mb-3 uppercase">Step 3: Dress, Protect, and Drain</h4>
      <ul className="space-y-3 ml-4 mb-8">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Cover It:</strong> Wrap the wound with a clean, dry cloth or sterile gauze. Do not wrap it so tightly that it cuts off blood flow.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Let It Breathe and Drain:</strong> Change the bandage at least twice a day. If the wound is oozing pus, gently press the edges during bandage changes to help the fluid drain out. Bacteria thrive in trapped fluids.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Keep It Elevated:</strong> If the wound is on an arm or leg, keep that limb raised above heart level as much as possible to reduce swelling and pain.</div></li>
      </ul>

      <div className="border border-red-900 bg-red-950/30 p-6 text-red-500 font-mono text-sm leading-relaxed relative mt-12">
        <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
        <strong className="text-red-400 block mb-2 uppercase tracking-wide">⚠️ CRITICAL RED ALERT WARNING:</strong>
        Keep a close eye on the red skin around the cut. If you see dark red lines or streaks starting to travel up the arm or leg toward the heart, the infection has entered the bloodstream. This is a severe condition called sepsis. If you see these streaks, you must prioritize finding medical help or advanced antibiotics immediately.
      </div>
      
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 pt-8 border-t border-[var(--border-color)]">
        <button 
          onClick={() => window.print()}
          className="px-6 py-3 border border-[var(--border-color)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors font-mono tracking-widest text-sm uppercase flex items-center justify-center gap-2"
        >
          <Printer size={16} />
          [ PRINT PHYSICAL ARCHIVE ]
        </button>
        <button 
          onClick={() => setSelectedGuide(null)}
          className="px-6 py-3 border border-[var(--border-color)] hover:border-[var(--accent-primary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors font-mono tracking-widest text-sm uppercase"
        >
          [ RETURN TO DIRECTORY ]
        </button>
      </div>
    </div>
  );

  const guide00101 = (
    <div className="space-y-8 text-[var(--text-secondary)] leading-relaxed text-left">
      <div className="border-b border-[var(--border-color)] pb-6 mb-8">
        <h1 className="font-mono text-2xl md:text-4xl font-bold tracking-widest text-[var(--accent-primary)] uppercase">
          GUIDE 001.01: Long-Term Food Storage: The 3 Enemies of a Deep Pantry
        </h1>
      </div>

      <p>
        When a major supply chain collapse happens, grocery store shelves clear out in less than 24 hours. Storing bulk foods like white rice, dried beans, oats, and pasta is the cheapest way to guarantee your family has food.
      </p>

      <p>
        However, if you just leave these foods in their original plastic grocery bags, they will spoil within months. To make your food last for <strong>20 to 30 years</strong>, you must defeat the three main enemies of storage: <strong>Oxygen, Moisture, and Pests.</strong>
      </p>

      <p>
        Here is the simple, step-by-step method to seal your food like a pro using standard 5-gallon buckets and Mylar bags.
      </p>

      <div className="h-px w-full bg-[var(--border-color)] my-8"></div>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">📦</span> Supply List
      </h3>
      <p className="mb-4">You can buy these online or at local hardware stores for very little money:</p>
      <ul className="space-y-3 ml-4">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Food-Grade 5-Gallon Plastic Buckets:</strong> Make sure they are marked "Food-Grade" (usually HDPE #2 plastic).</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">5-Gallon Mylar Bags:</strong> Thick, metallic bags that block out light and air completely.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">Oxygen Absorbers (3000 CC size):</strong> Small packets that look like gel packs but chemically absorb all left-over oxygen inside the bag.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><strong className="text-[var(--text-primary)]">A Standard Household Clothes Iron or Hair Straightener:</strong> To heat-seal the bags.</div></li>
      </ul>

      <div className="h-px w-full bg-[var(--border-color)] my-8"></div>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">🛠️</span> The Step-by-Step Packaging Protocol
      </h3>

      <h4 className="font-mono text-lg text-[var(--text-primary)] mt-6 mb-3 uppercase">Step 1: Drop and Fill</h4>
      <ul className="space-y-3 ml-4 mb-6">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div>Open a 5-gallon Mylar bag and place it directly inside your empty plastic bucket.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div>Pour your dry food (like white rice or pinto beans) straight into the bag until it is filled about 3 inches from the top.</div></li>
      </ul>

      <h4 className="font-mono text-lg text-[var(--text-primary)] mt-6 mb-3 uppercase">Step 2: Add the Oxygen Absorber</h4>
      <ul className="space-y-3 ml-4 mb-6">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div>Drop one <strong>3000 CC Oxygen Absorber packet</strong> right on top of the food.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><em>Crucial Rule:</em> Keep your extra oxygen absorbers inside a tightly sealed Mason jar while you work. If they sit out in the open air for more than 10-15 minutes, they will absorb the room's air and become completely useless before you drop them in the bag.</div></li>
      </ul>

      <h4 className="font-mono text-lg text-[var(--text-primary)] mt-6 mb-3 uppercase">Step 3: Heat-Seal the Lid</h4>
      <ul className="space-y-3 ml-4 mb-6">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div>Pull the top edges of the Mylar bag straight and flat against each other.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div>Press out as much trapped air with your hands as you can.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div>Take your hot clothes iron or hair straightener and run it slowly along the top 1 inch of the bag. The heat will melt the plastic layer inside the Mylar together, creating a completely airtight weld. Leave a tiny 1-inch gap open at the very corner for one last air-squeeze, then seal it completely shut.</div></li>
      </ul>

      <h4 className="font-mono text-lg text-[var(--text-primary)] mt-6 mb-3 uppercase">Step 4: Seal the Outer Bucket</h4>
      <ul className="space-y-3 ml-4 mb-8">
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div>Hammer the plastic lid onto the 5-gallon bucket.</div></li>
        <li className="flex gap-4"><span className="text-[var(--accent-primary)] mt-1.5">▪</span><div><em>Note:</em> The plastic bucket does not need to be airtight. Its only job is to protect the fragile metal Mylar bag inside from getting punctured by mice, tools, or sharp edges.</div></li>
      </ul>

      <div className="h-px w-full bg-[var(--border-color)] my-8"></div>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">🕒</span> The 24-Hour Inspection
      </h3>
      <p className="mb-4">Within 12 to 24 hours, the oxygen absorber will pull all the remaining air out of the bag.</p>

      <blockquote className="border-l-2 border-[var(--accent-primary)] pl-6 py-2 bg-[var(--bg-secondary)]/30 text-base italic mb-8">
        <strong className="text-[var(--text-primary)] font-mono not-italic tracking-wider uppercase block mb-2">THE VISUAL TEST:</strong>
        The Mylar bag should look completely crushed and vacuum-packed, tight against the shape of the rice or beans inside. If it looks tight like a brick, your seal is perfect. If it still looks loose and puffy after a day, your heat seal has a tiny leak. Cut the top off, drop a fresh absorber in, and re-iron it.
      </blockquote>

      <h3 className="font-mono text-xl tracking-widest text-[var(--text-primary)] mb-6 uppercase flex items-center gap-3">
        <span className="text-[var(--accent-primary)]">🚫</span> 3 Common Foods That Will Spoil If You Try This
      </h3>
      <p className="mb-4">Not all dry foods can be stored long-term. Avoid putting these items in Mylar bags, or they will turn rancid quickly:</p>
      <ol className="space-y-3 ml-12 mb-8 list-decimal list-inside text-[var(--text-primary)]">
        <li><strong>Brown Rice:</strong> Unlike white rice, brown rice contains natural oils that go bad and sour within a year, even without oxygen.</li>
        <li><strong>Whole Wheat Flour:</strong> Flour packs too tightly and contains moisture that can create deadly bacteria if sealed completely flat. Store whole wheat berries instead, and grind them when needed.</li>
        <li><strong>Salt & Sugar:</strong> These two items <strong>never</strong> spoil. You can store them in buckets, but <strong>never add an oxygen absorber to them</strong>, or they will chemically turn into a solid, unuseable block of stone.</li>
      </ol>
      
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 pt-8 border-t border-[var(--border-color)]">
        <button 
          onClick={() => window.print()}
          className="px-6 py-3 border border-[var(--border-color)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors font-mono tracking-widest text-sm uppercase flex items-center justify-center gap-2"
        >
          <Printer size={16} />
          [ PRINT PHYSICAL ARCHIVE ]
        </button>
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

              {/* Tile 2: Guide 001.03 */}
              <div 
                onClick={() => setSelectedGuide('WATER')}
                className="group border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 text-left cursor-pointer hover:border-[var(--accent-primary)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-[var(--accent-primary)] group-hover:h-full transition-all duration-500"></div>
                <div className="flex justify-between items-start mb-6 w-full">
                  <span className="text-[var(--accent-primary)] font-mono text-xs tracking-widest border border-[var(--accent-primary)] px-2 py-1">
                    GUIDE 001.03
                  </span>
                  <span className="text-[var(--text-secondary)] font-mono text-xl group-hover:text-[var(--accent-primary)] transition-colors">
                    +]
                  </span>
                </div>
                <h3 className="font-mono text-xl text-[var(--text-primary)] font-bold mb-4 uppercase leading-tight group-hover:text-[var(--accent-primary)] transition-colors">
                  Water Independence
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3">
                  5 ways to filter dirty water. Turn sketchy puddle, river, or rainwater into safe drinking water using basic household items.
                </p>
              </div>

              {/* Tile 3: Guide 001.02 */}
              <div 
                onClick={() => setSelectedGuide('MEDICAL')}
                className="group border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 text-left cursor-pointer hover:border-[var(--accent-primary)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-[var(--accent-primary)] group-hover:h-full transition-all duration-500"></div>
                <div className="flex justify-between items-start mb-6 w-full">
                  <span className="text-[var(--accent-primary)] font-mono text-xs tracking-widest border border-[var(--accent-primary)] px-2 py-1">
                    GUIDE 001.02
                  </span>
                  <span className="text-[var(--text-secondary)] font-mono text-xl group-hover:text-[var(--accent-primary)] transition-colors">
                    +]
                  </span>
                </div>
                <h3 className="font-mono text-xl text-[var(--text-primary)] font-bold mb-4 uppercase leading-tight group-hover:text-[var(--accent-primary)] transition-colors">
                  First Aid: Treating Infected Wounds
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3">
                  Treating infected wounds without antibiotics. Rely on proper cleaning, natural anti-bacterials, and 3-step protocol.
                </p>
              </div>

              {/* Tile 4: Guide 001.01 */}
              <div 
                onClick={() => setSelectedGuide('FOOD')}
                className="group border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 text-left cursor-pointer hover:border-[var(--accent-primary)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-[var(--accent-primary)] group-hover:h-full transition-all duration-500"></div>
                <div className="flex justify-between items-start mb-6 w-full">
                  <span className="text-[var(--accent-primary)] font-mono text-xs tracking-widest border border-[var(--accent-primary)] px-2 py-1">
                    GUIDE 001.01
                  </span>
                  <span className="text-[var(--text-secondary)] font-mono text-xl group-hover:text-[var(--accent-primary)] transition-colors">
                    +]
                  </span>
                </div>
                <h3 className="font-mono text-xl text-[var(--text-primary)] font-bold mb-4 uppercase leading-tight group-hover:text-[var(--accent-primary)] transition-colors">
                  Long-Term Food Storage
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3">
                  Defeat the three main enemies of storage: Oxygen, Moisture, and Pests using standard 5-gallon buckets and Mylar bags.
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
             {selectedGuide === 'EMP' && guide00104}
             {selectedGuide === 'WATER' && guide00103}
             {selectedGuide === 'MEDICAL' && guide00102}
             {selectedGuide === 'FOOD' && guide00101}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
