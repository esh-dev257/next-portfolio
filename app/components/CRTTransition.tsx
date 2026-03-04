import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import "./CRTTransition.css";

interface CRTTransitionProps {
  src: string | StaticImageData;
  alt: string;
}

/**
 * CRTTransition Component
 * Simulates a CRT monitor channel change effect when the source image changes.
 */
const CRTTransition: React.FC<CRTTransitionProps> = ({ src, alt }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (src === currentSrc) return;

    setIsTransitioning(true);

    // Delay the actual source swap slightly for the "glitch" to build up
    const swapTimer = setTimeout(() => {
      setCurrentSrc(src);
    }, 150);

    const endTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => {
      clearTimeout(swapTimer);
      clearTimeout(endTimer);
    };
  }, [src]);

  return (
    <div className={`crt-frame ${isTransitioning ? "channel-changing" : ""}`}>
      {/* Main Image Layer */}
      <div className="crt-content">
        <Image
          src={currentSrc}
          alt={alt}
          fill
          className="object-cover transition-all duration-300"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      {/* Dynamic CRT Transition Layers */}
      {isTransitioning && (
        <div className="crt-transition-overlays">
          <div className="crt-static-noise"></div>
          <div className="crt-scanline-pulse"></div>
          <div className="crt-rgb-glitch"></div>
        </div>
      )}

      {/* Persistent CRT Aesthetic Layers */}
      <div className="crt-base-effects">
        <div className="crt-scanlines"></div>
        <div className="crt-vignette"></div>
        <div className="crt-flare"></div>
      </div>
    </div>
  );
};

export default CRTTransition;
