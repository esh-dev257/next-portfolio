import React, { useEffect } from 'react';

interface RetroToastProps {
  message: string;
  onClose: () => void;
}

const RetroToast: React.FC<RetroToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 sm:right-10 z-50 animate-bounce-in">
      <div className="relative bg-retro-bg border-4 border-retro-yellow p-4 shadow-pixel flex items-center gap-4">
        
        {/* Animated Coins */}
        <div className="absolute -top-6 -left-6 pointer-events-none">
           {[1, 2, 3].map((i) => (
             <div 
                key={i}
                className="absolute text-retro-yellow text-2xl font-bold animate-float-up"
                style={{ 
                    animationDelay: `${i * 100}ms`,
                    left: `${i * 10}px`
                }}
             >
                $
             </div>
           ))}
        </div>

        {/* Icon */}
        <div className="bg-retro-yellow text-black p-2 font-pixel text-xl">
            !
        </div>

        {/* Text */}
        <div>
            <h4 className="font-pixel text-xs text-retro-yellow mb-1">ACHIEVEMENT UNLOCKED!</h4>
            <p className="font-retro text-lg text-white">{message}</p>
        </div>

        {/* Close Button (Visual) */}
        <button 
            onClick={onClose}
            className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 flex items-center justify-center font-pixel text-[10px] border-2 border-black hover:bg-red-600"
        >
            X
        </button>
      </div>

      <style>{`
        @keyframes float-up {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            20% { opacity: 1; }
            100% { transform: translateY(-40px) scale(1.2); opacity: 0; }
        }
        .animate-float-up {
            animation: float-up 1s ease-out forwards;
        }
        .animate-bounce-in {
            animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes bounce-in {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default RetroToast;