import React from 'react';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

const RetroButton: React.FC<RetroButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  let baseStyles = "font-pixel text-xs sm:text-sm px-4 py-3 border-2 transition-all active:translate-y-1 active:shadow-none shadow-pixel uppercase ";
  
  const variants = {
    primary: "bg-retro-green text-black border-white hover:bg-green-400",
    secondary: "bg-retro-purple text-white border-white hover:bg-purple-500",
    danger: "bg-retro-pink text-white border-white hover:bg-pink-500",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default RetroButton;