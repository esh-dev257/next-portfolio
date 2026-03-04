import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import "./CRTTransition.css";

interface CRTTransitionProps {
  src: string | StaticImageData;
  alt: string;
}

const CRTTransition: React.FC<CRTTransitionProps> = ({ src, alt }) => {
  const [displaySrc, setDisplaySrc] = useState(src);
  const [nextSrc, setNextSrc] = useState<string | StaticImageData | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (src === displaySrc && !nextSrc) return;
    if (src === nextSrc) return;

    // Start transition
    setNextSrc(src);
    setIsTransitioning(true);

    // Clear any pending timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // After transition, swap the images
    timeoutRef.current = setTimeout(() => {
      setDisplaySrc(src);
      setNextSrc(null);
      setIsTransitioning(false);
    }, 600);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [src]);

  return (
    <div className={`crt-frame ${isTransitioning ? "channel-changing" : ""}`}>
      {/* Current Image Layer */}
      <div className="crt-content crt-img-layer">
        <Image
          src={displaySrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      {/* Incoming Image Layer (crossfade) */}
      {nextSrc && (
        <div className="crt-content crt-img-incoming">
          <Image
            src={nextSrc}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      )}

      {/* CRT Transition Overlays (always mounted, opacity controlled via CSS) */}
      <div className="crt-transition-overlays">
        <div className="crt-static-noise"></div>
        <div className="crt-scanline-pulse"></div>
        <div className="crt-rgb-glitch"></div>
      </div>

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
