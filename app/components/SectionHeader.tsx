import React from 'react';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-4 mb-8 sm:mb-12">
      <div className="text-retro-yellow animate-bounce">
        {icon}
      </div>
      <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl text-retro-cyan border-b-4 border-retro-cyan pb-2 inline-block shadow-pixel bg-retro-bg">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;