import React from 'react';
import SectionHeader from './SectionHeader';
import { Trophy, Zap, Users, Code, Award } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Speed Demon",
      desc: "Reduced page-load time by 40% for 10k+ users.",
      icon: <Zap size={32} className="text-retro-yellow" />,
      rarity: "Legendary",
      color: "border-retro-yellow"
    },
    {
      title: "Team Captain",
      desc: "Lead Developer at HACKX-2.0 International Hackathon.",
      icon: <Users size={32} className="text-retro-green" />,
      rarity: "Epic",
      color: "border-retro-green"
    },
    {
      title: "Migration Master",
      desc: "Successfully migrated 2 large systems to React stack.",
      icon: <Code size={32} className="text-retro-cyan" />,
      rarity: "Rare",
      color: "border-retro-cyan"
    },
    {
      title: "Algorithm Knight",
      desc: "Solved 300+ LeetCode problems (Easy/Med/Hard).",
      icon: <Award size={32} className="text-retro-pink" />,
      rarity: "Rare",
      color: "border-retro-pink"
    }
  ];

  return (
    <section id="achievements" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionHeader title="Trophies & Achievements" icon={<Trophy size={32} />} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, idx) => (
          <div key={idx} className={`bg-slate-900 border-4 ${item.color} p-4 flex flex-col items-center text-center shadow-pixel hover:-translate-y-2 transition-transform group relative overflow-hidden`}>
            
            {/* Shine Effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

            <div className="bg-slate-800 p-4 rounded-full border-2 border-white mb-4 shadow-inner group-hover:scale-110 transition-transform">
                {item.icon}
            </div>
            
            <h3 className="font-pixel text-sm text-white mb-2">{item.title}</h3>
            <p className="font-retro text-lg text-gray-400 mb-4 leading-tight">{item.desc}</p>
            
            <div className={`mt-auto font-pixel text-[10px] px-2 py-1 rounded bg-black/50 ${
                item.rarity === 'Legendary' ? 'text-retro-yellow' : 
                item.rarity === 'Epic' ? 'text-retro-purple' : 'text-retro-cyan'
            }`}>
                {item.rarity}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;