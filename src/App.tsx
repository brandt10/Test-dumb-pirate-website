/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Anchor, Compass, Map, Skull, Coins, Waves, Wind, Ship, Sword, Users } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('map');

  const tabs = [
    { id: 'map', icon: Map, label: 'Treasure Map' },
    { id: 'crew', icon: Users, label: 'The Crew' },
    { id: 'loot', icon: Coins, label: 'Loot & Booty' },
    { id: 'voyage', icon: Compass, label: 'Current Voyage' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-serif selection:bg-[#f27d26] selection:text-black">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3a1510] rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#1a2a3a] rounded-full blur-[150px] opacity-20" />
      </div>

      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-20 md:w-64 border-r border-white/10 bg-black/40 backdrop-blur-xl z-50 flex flex-col">
        <div className="p-6 flex items-center gap-3 border-bottom border-white/10">
          <div className="w-10 h-10 bg-[#f27d26] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(242,125,38,0.3)]">
            <Skull className="text-black w-6 h-6" />
          </div>
          <span className="hidden md:block font-bold text-xl tracking-tighter uppercase italic">Pirate's Cove</span>
        </div>

        <div className="flex-1 px-4 py-8 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group ${
                activeTab === tab.id 
                  ? 'bg-[#f27d26] text-black shadow-lg' 
                  : 'hover:bg-white/5 text-white/60 hover:text-white'
              }`}
            >
              <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'animate-pulse' : 'group-hover:rotate-12 transition-transform'}`} />
              <span className="hidden md:block font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6 border-t border-white/10">
          <div className="flex items-center gap-3 text-white/40 text-xs uppercase tracking-widest font-mono">
            <Anchor className="w-4 h-4" />
            <span className="hidden md:block">Anchored in Cloud Run</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pl-20 md:pl-64 min-h-screen relative">
        <header className="p-8 md:p-12 border-b border-white/10 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-[#f27d26] mb-2">
              <Wind className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.3em] font-mono">Captain's Log: 25th March</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic uppercase leading-none">
              Welcome Aboard, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27d26] to-[#ff4e00]">Captain Brandt</span>
            </h1>
          </div>
          <div className="hidden lg:flex gap-8 text-right">
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Current Speed</p>
              <p className="text-2xl font-mono">14 KNOTS</p>
            </div>
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Depth</p>
              <p className="text-2xl font-mono">42 FATHOMS</p>
            </div>
          </div>
        </header>

        <section className="p-8 md:p-12">
          <AnimatePresence mode="wait">
            {activeTab === 'map' && (
              <motion.div
                key="map"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                <div className="lg:col-span-2 aspect-video bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/1200/800?blur=2')] bg-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -top-12 -left-12 w-24 h-24 border border-[#f27d26]/30 rounded-full animate-ping" />
                      <div className="w-4 h-4 bg-[#f27d26] rounded-full shadow-[0_0_20px_#f27d26]" />
                      <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md p-3 rounded-lg border border-white/10 text-xs">
                        <p className="font-bold text-[#f27d26]">X MARKS THE SPOT</p>
                        <p className="text-white/60">Cloud Run Region: us-east1</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    <span className="px-3 py-1 bg-black/60 rounded-full text-[10px] border border-white/10">LAT: 37.7749</span>
                    <span className="px-3 py-1 bg-black/60 rounded-full text-[10px] border border-white/10">LONG: -122.4194</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                    <h3 className="text-lg font-bold uppercase italic mb-4 flex items-center gap-2">
                      <Waves className="w-5 h-5 text-[#f27d26]" />
                      Sea Conditions
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white/40 text-sm">Wind Direction</span>
                        <span className="font-mono">NNW</span>
                      </div>
                      <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="bg-[#f27d26] h-full w-[65%]" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/40 text-sm">Wave Height</span>
                        <span className="font-mono">2.4m</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-[#f27d26] rounded-3xl text-black relative overflow-hidden group cursor-pointer">
                    <div className="absolute top-[-20px] right-[-20px] opacity-10 group-hover:rotate-12 transition-transform">
                      <Ship className="w-32 h-32" />
                    </div>
                    <h3 className="text-xl font-black uppercase italic mb-2">Set Sail</h3>
                    <p className="text-sm font-medium opacity-80 mb-6">Deploy new treasures to the production fleet.</p>
                    <button className="w-full py-3 bg-black text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                      Initiate Deployment
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'loot' && (
              <motion.div
                key="loot"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  { label: 'Gold Doubloons', value: '12,450', icon: Coins },
                  { label: 'Silver Pieces', value: '45,200', icon: Sword },
                  { label: 'Rum Barrels', value: '84', icon: Waves },
                  { label: 'Captured Ships', value: '12', icon: Ship },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#f27d26]/50 transition-colors group">
                    <item.icon className="w-8 h-8 text-[#f27d26] mb-6 group-hover:scale-110 transition-transform" />
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-3xl font-bold font-mono">{item.value}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Footer Marquee */}
        <footer className="fixed bottom-0 left-20 md:left-64 right-0 h-12 bg-[#f27d26] text-black flex items-center overflow-hidden whitespace-nowrap z-40">
          <div className="flex animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8 font-black uppercase italic tracking-tighter text-sm">
                Dead men tell no tales • Dead men tell no tales • Dead men tell no tales •
              </span>
            ))}
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
