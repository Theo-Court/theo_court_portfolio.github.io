import React, { useEffect, useRef } from 'react';
import { NeatGradient } from '@firecms/neat';

const Background = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        { color: '#FF5373', enabled: true },
        { color: '#FFC858', enabled: true },
        { color: '#05d5ef', enabled: true },
        { color: '#6D3BFF', enabled: true },
        { color: '#f5e1e5', enabled: false },
      ],
      speed: 4,
      horizontalPressure: 4,
      verticalPressure: 5,
      waveFrequencyX: 2,
      waveFrequencyY: 3,
      waveAmplitude: 5,
      shadows: 0,
      highlights: 1,
      colorSaturation: 0,
      colorBrightness: 1,
      wireframe: true,
      colorBlending: 6,
      backgroundAlpha: 0,
      resolution: 1 / 2,
    });

    return gradientRef.current.destroy;
  }, []);

  return (
    <canvas
      style={{
        isolation: 'isolate',
        height: '100%',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      ref={canvasRef}
    />
  );
};

export default Background;
