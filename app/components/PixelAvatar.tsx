import React, { useState } from "react";

const messages = [
  "Hi, I'm Eshita!",
  "I build cool web apps!",
  "Full Stack Developer",
  "Check out my stats",
  "Pixel art is awesome XD",
  "Let's code something!!",
];
const PixelAvatar: React.FC = () => {
  const [msgIndex, setMsgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setMsgIndex((prev) => (prev + 1) % messages.length);
  };

  // Handle mouse leave - hide bubble
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative group cursor-pointer inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-gentle-bounce {
          animation: gentle-bounce 2s infinite;
        }
      `}</style>

      {/* Chat Bubble */}
      <div
        className={`absolute -top-20 left-1/2 -translate-x-1/2 w-48 transition-opacity duration-200 z-20 ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <div className="bg-white border-4 border-black p-2 relative shadow-pixel">
          <p className="font-pixel text-[10px] text-black text-center leading-tight">
            {messages[msgIndex]}
          </p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-black"></div>
        </div>
      </div>

      {isHovered ? (
        /* Blushing Avatar SVG */
        <svg
          version="1.1"
          viewBox="0 0 120 180"
          className="h-32 sm:h-48 w-auto animate-gentle-bounce drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="crispEdges"
        >
          <rect x="50" y="10" width="40" height="15" fill="#000000" />
          <rect x="40" y="15" width="10" height="15" fill="#000000" />
          <rect x="30" y="20" width="10" height="15" fill="#000000" />
          <rect x="90" y="20" width="5" height="15" fill="#000000" />
          <rect x="50" y="25" width="5" height="5" fill="#000000" />
          <rect x="55" y="25" width="15" height="10" fill="#EEC39A" />
          <rect x="70" y="25" width="10" height="5" fill="#EEBC8C" />
          <rect x="80" y="25" width="10" height="5" fill="#000000" />
          <rect x="40" y="30" width="5" height="10" fill="#000000" />
          <rect x="45" y="30" width="10" height="5" fill="#EEC39A" />
          <rect x="70" y="30" width="5" height="5" fill="#F1C295" />
          <rect x="75" y="30" width="10" height="5" fill="#EABA8D" />
          <rect x="85" y="30" width="5" height="5" fill="#000000" />
          <rect x="25" y="35" width="5" height="20" fill="#1C0200" />
          <rect x="30" y="35" width="5" height="5" fill="#000000" />
          <rect x="35" y="35" width="5" height="25" fill="#1C0200" />
          <rect x="45" y="35" width="5" height="10" fill="#EEC39A" />
          <rect x="50" y="35" width="5" height="5" fill="#FFFFFF" />
          <rect x="55" y="35" width="5" height="10" fill="#000000" />
          <rect x="60" y="35" width="10" height="10" fill="#EEC39A" />
          <rect x="70" y="35" width="5" height="5" fill="#FFFFFF" />
          <rect x="75" y="35" width="5" height="10" fill="#000000" />
          <rect x="80" y="35" width="5" height="10" fill="#EABA8D" />
          <rect x="85" y="35" width="10" height="30" fill="#1C0200" />
          <rect x="30" y="40" width="5" height="20" fill="#1C0200" />
          <rect x="40" y="40" width="5" height="20" fill="#1C0200" />
          <rect x="50" y="40" width="5" height="5" fill="#000000" />
          <rect x="70" y="40" width="5" height="5" fill="#000000" />
          <rect x="45" y="45" width="10" height="5" fill="#EA8A93" />
          <rect x="55" y="45" width="10" height="5" fill="#EEC39A" />
          <rect x="65" y="45" width="10" height="5" fill="#F1C295" />
          <rect x="75" y="45" width="10" height="5" fill="#EA8A93" />
          <rect x="95" y="45" width="10" height="20" fill="#1C0200" />
          <rect x="20" y="50" width="5" height="5" fill="#2A0400" />
          <rect x="45" y="50" width="10" height="15" fill="#EEC39A" />
          <rect x="55" y="50" width="5" height="5" fill="#A80707" />
          <rect x="60" y="50" width="5" height="5" fill="#EEC39A" />
          <rect x="65" y="50" width="5" height="5" fill="#F1C295" />
          <rect x="70" y="50" width="5" height="5" fill="#A80707" />
          <rect x="75" y="50" width="5" height="5" fill="#F1C295" />
          <rect x="80" y="50" width="5" height="10" fill="#EABA8D" />
          <rect x="20" y="55" width="5" height="5" fill="#1C0200" />
          <rect x="25" y="55" width="5" height="10" fill="#2A0400" />
          <rect x="55" y="55" width="5" height="5" fill="#EEC39A" />
          <rect x="60" y="55" width="10" height="5" fill="#A80707" />
          <rect x="70" y="55" width="10" height="5" fill="#EEBC8C" />
          <rect x="20" y="60" width="5" height="5" fill="#420701" />
          <rect x="30" y="60" width="15" height="10" fill="#2A0400" />
          <rect x="55" y="60" width="10" height="5" fill="#F1C295" />
          <rect x="65" y="60" width="10" height="5" fill="#EEBC8C" />
          <rect x="75" y="60" width="5" height="5" fill="#EABA8D" />
          <rect x="80" y="60" width="5" height="10" fill="#2A0400" />
          <rect x="105" y="60" width="5" height="10" fill="#2A0400" />
          <rect x="25" y="65" width="5" height="20" fill="#420701" />
          <rect x="45" y="65" width="10" height="5" fill="#420701" />
          <rect x="55" y="65" width="5" height="5" fill="#F1C295" />
          <rect x="60" y="65" width="5" height="5" fill="#EEBC8C" />
          <rect x="65" y="65" width="10" height="5" fill="#EABA8D" />
          <rect x="75" y="65" width="5" height="5" fill="#2A0400" />
          <rect x="85" y="65" width="20" height="5" fill="#2A0400" />
          <rect x="20" y="70" width="5" height="5" fill="#420701" />
          <rect x="30" y="70" width="20" height="5" fill="#420701" />
          <rect x="50" y="70" width="30" height="10" fill="#D5AFC9" />
          <rect x="80" y="70" width="10" height="5" fill="#420701" />
          <rect x="90" y="70" width="10" height="5" fill="#2A0400" />
          <rect x="100" y="70" width="10" height="15" fill="#420701" />
          <rect x="110" y="70" width="5" height="5" fill="#2A0400" />
          <rect x="15" y="75" width="5" height="5" fill="#D95763" />
          <rect x="20" y="75" width="5" height="5" fill="#AC3232" />
          <rect x="30" y="75" width="5" height="25" fill="#EEC39A" />
          <rect x="35" y="75" width="5" height="35" fill="#EEBC8C" />
          <rect x="40" y="75" width="10" height="25" fill="#B57EDC" />
          <rect x="80" y="75" width="10" height="25" fill="#B57EDC" />
          <rect x="90" y="75" width="5" height="35" fill="#EEC39A" />
          <rect x="95" y="75" width="5" height="35" fill="#EEBC8C" />
          <rect x="10" y="80" width="5" height="5" fill="#D95763" />
          <rect x="15" y="80" width="5" height="5" fill="#AC3232" />
          <rect x="20" y="80" width="5" height="10" fill="#D95763" />
          <rect x="50" y="80" width="30" height="20" fill="#B57EDC" />
          <rect x="10" y="85" width="5" height="5" fill="#AC3232" />
          <rect x="15" y="85" width="5" height="5" fill="#D95763" />
          <rect x="100" y="85" width="5" height="5" fill="#420701" />
          <rect x="15" y="90" width="10" height="5" fill="#4B692F" />
          <rect x="20" y="95" width="5" height="5" fill="#323C39" />
          <rect x="20" y="100" width="5" height="5" fill="#4B692F" />
          <rect x="30" y="100" width="5" height="5" fill="#4B692F" />
          <rect x="40" y="100" width="10" height="15" fill="#B278DC" />
          <rect x="50" y="100" width="25" height="5" fill="#B57EDC" />
          <rect x="75" y="100" width="10" height="5" fill="#B278DC" />
          <rect x="85" y="100" width="5" height="5" fill="#B57EDC" />
          <rect x="25" y="105" width="5" height="5" fill="#4B692F" />
          <rect x="30" y="105" width="5" height="5" fill="#EEC39A" />
          <rect x="50" y="105" width="10" height="10" fill="#B278DC" />
          <rect x="60" y="105" width="5" height="5" fill="#B57EDC" />
          <rect x="65" y="105" width="10" height="15" fill="#B278DC" />
          <rect x="75" y="105" width="5" height="25" fill="#AD6FD9" />
          <rect x="80" y="105" width="10" height="5" fill="#B278DC" />
          <rect x="60" y="110" width="5" height="5" fill="#B278DC" />
          <rect x="80" y="110" width="10" height="15" fill="#AD6FD9" />
          <rect x="40" y="115" width="10" height="25" fill="#AD6FD9" />
          <rect x="50" y="115" width="5" height="5" fill="#B278DC" />
          <rect x="55" y="115" width="10" height="20" fill="#AD6FD9" />
          <rect x="50" y="120" width="5" height="15" fill="#AD6FD9" />
          <rect x="65" y="120" width="10" height="10" fill="#AD6FD9" />
          <rect x="35" y="125" width="5" height="10" fill="#AD6FD9" />
          <rect x="80" y="125" width="5" height="20" fill="#A463D2" />
          <rect x="85" y="125" width="10" height="10" fill="#AD6FD9" />
          <rect x="65" y="130" width="5" height="5" fill="#AD6FD9" />
          <rect x="70" y="130" width="10" height="15" fill="#A463D2" />
          <rect x="30" y="135" width="10" height="10" fill="#A463D2" />
          <rect x="50" y="135" width="20" height="10" fill="#A463D2" />
          <rect x="85" y="135" width="15" height="10" fill="#A463D2" />
          <rect x="25" y="140" width="5" height="5" fill="#A463D2" />
          <rect x="40" y="140" width="10" height="5" fill="#A463D2" />
          <rect x="100" y="140" width="5" height="5" fill="#A463D2" />
          <rect x="50" y="145" width="5" height="25" fill="#EEC39A" />
          <rect x="55" y="145" width="5" height="25" fill="#EEBC8C" />
          <rect x="70" y="145" width="5" height="25" fill="#EEC39A" />
          <rect x="75" y="145" width="5" height="25" fill="#EEBC8C" />
          <rect x="50" y="170" width="10" height="5" fill="#222034" />
          <rect x="70" y="170" width="10" height="5" fill="#222034" />
          <rect x="45" y="175" width="10" height="5" fill="#000000" />
          <rect x="55" y="175" width="5" height="5" fill="#545454" />
          <rect x="65" y="175" width="10" height="5" fill="#000000" />
          <rect x="75" y="175" width="5" height="5" fill="#545454" />
        </svg>
      ) : (
        /* Normal Avatar SVG */
        <svg
          version="1.1"
          viewBox="0 0 120 180"
          className="h-32 sm:h-48 w-auto animate-gentle-bounce drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="crispEdges"
        >
          <rect x="50" y="10" width="40" height="15" fill="#000000" />
          <rect x="40" y="15" width="10" height="15" fill="#000000" />
          <rect x="30" y="20" width="10" height="15" fill="#000000" />
          <rect x="90" y="20" width="5" height="15" fill="#000000" />
          <rect x="50" y="25" width="5" height="5" fill="#000000" />
          <rect x="55" y="25" width="15" height="10" fill="#EEC39A" />
          <rect x="70" y="25" width="10" height="5" fill="#EEBC8C" />
          <rect x="80" y="25" width="10" height="5" fill="#000000" />
          <rect x="40" y="30" width="5" height="10" fill="#000000" />
          <rect x="45" y="30" width="10" height="5" fill="#EEC39A" />
          <rect x="70" y="30" width="5" height="5" fill="#F1C295" />
          <rect x="75" y="30" width="10" height="5" fill="#EABA8D" />
          <rect x="85" y="30" width="5" height="5" fill="#000000" />
          <rect x="25" y="35" width="5" height="20" fill="#1C0200" />
          <rect x="30" y="35" width="5" height="5" fill="#000000" />
          <rect x="35" y="35" width="5" height="25" fill="#1C0200" />
          <rect x="45" y="35" width="5" height="30" fill="#EEC39A" />
          <rect x="50" y="35" width="5" height="5" fill="#FFFFFF" />
          <rect x="55" y="35" width="5" height="10" fill="#000000" />
          <rect x="60" y="35" width="10" height="10" fill="#EEC39A" />
          <rect x="70" y="35" width="5" height="5" fill="#FFFFFF" />
          <rect x="75" y="35" width="5" height="10" fill="#000000" />
          <rect x="80" y="35" width="5" height="25" fill="#EABA8D" />
          <rect x="85" y="35" width="10" height="30" fill="#1C0200" />
          <rect x="30" y="40" width="5" height="20" fill="#1C0200" />
          <rect x="40" y="40" width="5" height="20" fill="#1C0200" />
          <rect x="50" y="40" width="5" height="5" fill="#000000" />
          <rect x="70" y="40" width="5" height="5" fill="#000000" />
          <rect x="50" y="45" width="15" height="5" fill="#EEC39A" />
          <rect x="65" y="45" width="10" height="5" fill="#F1C295" />
          <rect x="75" y="45" width="5" height="5" fill="#EEBC8C" />
          <rect x="95" y="45" width="10" height="20" fill="#1C0200" />
          <rect x="20" y="50" width="5" height="5" fill="#2A0400" />
          <rect x="50" y="50" width="5" height="15" fill="#EEC39A" />
          <rect x="55" y="50" width="5" height="5" fill="#D95763" />
          <rect x="60" y="50" width="5" height="5" fill="#EEC39A" />
          <rect x="65" y="50" width="5" height="5" fill="#F1C295" />
          <rect x="70" y="50" width="5" height="5" fill="#D95763" />
          <rect x="75" y="50" width="5" height="5" fill="#F1C295" />
          <rect x="20" y="55" width="5" height="5" fill="#1C0200" />
          <rect x="25" y="55" width="5" height="10" fill="#2A0400" />
          <rect x="55" y="55" width="5" height="5" fill="#EEC39A" />
          <rect x="60" y="55" width="10" height="5" fill="#AC3232" />
          <rect x="70" y="55" width="10" height="5" fill="#EEBC8C" />
          <rect x="20" y="60" width="5" height="5" fill="#420701" />
          <rect x="30" y="60" width="15" height="10" fill="#2A0400" />
          <rect x="55" y="60" width="10" height="5" fill="#F1C295" />
          <rect x="65" y="60" width="10" height="5" fill="#EEBC8C" />
          <rect x="75" y="60" width="5" height="5" fill="#EABA8D" />
          <rect x="80" y="60" width="5" height="10" fill="#2A0400" />
          <rect x="105" y="60" width="5" height="10" fill="#2A0400" />
          <rect x="25" y="65" width="5" height="20" fill="#420701" />
          <rect x="45" y="65" width="10" height="5" fill="#420701" />
          <rect x="55" y="65" width="5" height="5" fill="#F1C295" />
          <rect x="60" y="65" width="5" height="5" fill="#EEBC8C" />
          <rect x="65" y="65" width="10" height="5" fill="#EABA8D" />
          <rect x="75" y="65" width="5" height="5" fill="#2A0400" />
          <rect x="85" y="65" width="20" height="5" fill="#2A0400" />
          <rect x="20" y="70" width="5" height="5" fill="#420701" />
          <rect x="30" y="70" width="20" height="5" fill="#420701" />
          <rect x="50" y="70" width="30" height="10" fill="#D5AFC9" />
          <rect x="80" y="70" width="10" height="5" fill="#420701" />
          <rect x="90" y="70" width="10" height="5" fill="#2A0400" />
          <rect x="100" y="70" width="10" height="15" fill="#420701" />
          <rect x="110" y="70" width="5" height="5" fill="#2A0400" />
          <rect x="15" y="75" width="5" height="5" fill="#D95763" />
          <rect x="20" y="75" width="5" height="5" fill="#AC3232" />
          <rect x="30" y="75" width="5" height="25" fill="#EEC39A" />
          <rect x="35" y="75" width="5" height="35" fill="#EEBC8C" />
          <rect x="40" y="75" width="10" height="25" fill="#B57EDC" />
          <rect x="80" y="75" width="10" height="25" fill="#B57EDC" />
          <rect x="90" y="75" width="5" height="35" fill="#EEC39A" />
          <rect x="95" y="75" width="5" height="35" fill="#EEBC8C" />
          <rect x="10" y="80" width="5" height="5" fill="#D95763" />
          <rect x="15" y="80" width="5" height="5" fill="#AC3232" />
          <rect x="20" y="80" width="5" height="10" fill="#D95763" />
          <rect x="50" y="80" width="30" height="20" fill="#B57EDC" />
          <rect x="10" y="85" width="5" height="5" fill="#AC3232" />
          <rect x="15" y="85" width="5" height="5" fill="#D95763" />
          <rect x="100" y="85" width="5" height="5" fill="#420701" />
          <rect x="15" y="90" width="10" height="5" fill="#4B692F" />
          <rect x="20" y="95" width="5" height="5" fill="#323C39" />
          <rect x="20" y="100" width="5" height="5" fill="#4B692F" />
          <rect x="30" y="100" width="5" height="5" fill="#4B692F" />
          <rect x="40" y="100" width="10" height="15" fill="#B278DC" />
          <rect x="50" y="100" width="25" height="5" fill="#B57EDC" />
          <rect x="75" y="100" width="10" height="5" fill="#B278DC" />
          <rect x="85" y="100" width="5" height="5" fill="#B57EDC" />
          <rect x="25" y="105" width="5" height="5" fill="#4B692F" />
          <rect x="30" y="105" width="5" height="5" fill="#EEC39A" />
          <rect x="50" y="105" width="10" height="10" fill="#B278DC" />
          <rect x="60" y="105" width="5" height="5" fill="#B57EDC" />
          <rect x="65" y="105" width="10" height="15" fill="#B278DC" />
          <rect x="75" y="105" width="5" height="25" fill="#AD6FD9" />
          <rect x="80" y="105" width="10" height="5" fill="#B278DC" />
          <rect x="60" y="110" width="5" height="5" fill="#B278DC" />
          <rect x="80" y="110" width="10" height="15" fill="#AD6FD9" />
          <rect x="40" y="115" width="10" height="25" fill="#AD6FD9" />
          <rect x="50" y="115" width="5" height="5" fill="#B278DC" />
          <rect x="55" y="115" width="10" height="20" fill="#AD6FD9" />
          <rect x="50" y="120" width="5" height="15" fill="#AD6FD9" />
          <rect x="65" y="120" width="10" height="10" fill="#AD6FD9" />
          <rect x="35" y="125" width="5" height="10" fill="#AD6FD9" />
          <rect x="80" y="125" width="5" height="20" fill="#A463D2" />
          <rect x="85" y="125" width="10" height="10" fill="#AD6FD9" />
          <rect x="65" y="130" width="5" height="5" fill="#AD6FD9" />
          <rect x="70" y="130" width="10" height="15" fill="#A463D2" />
          <rect x="30" y="135" width="10" height="10" fill="#A463D2" />
          <rect x="50" y="135" width="20" height="10" fill="#A463D2" />
          <rect x="85" y="135" width="15" height="10" fill="#A463D2" />
          <rect x="25" y="140" width="5" height="5" fill="#A463D2" />
          <rect x="40" y="140" width="10" height="5" fill="#A463D2" />
          <rect x="100" y="140" width="5" height="5" fill="#A463D2" />
          <rect x="50" y="145" width="5" height="25" fill="#EEC39A" />
          <rect x="55" y="145" width="5" height="25" fill="#EEBC8C" />
          <rect x="70" y="145" width="5" height="25" fill="#EEC39A" />
          <rect x="75" y="145" width="5" height="25" fill="#EEBC8C" />
          <rect x="50" y="170" width="10" height="5" fill="#222034" />
          <rect x="70" y="170" width="10" height="5" fill="#222034" />
          <rect x="45" y="175" width="10" height="5" fill="#000000" />
          <rect x="55" y="175" width="5" height="5" fill="#545454" />
          <rect x="65" y="175" width="10" height="5" fill="#000000" />
          <rect x="75" y="175" width="5" height="5" fill="#545454" />
        </svg>
      )}
    </div>
  );
};

export default PixelAvatar;
