// script.js

import * as THREE from "/cdn/npm/three@0.136.0/build/three.module.js";
import { NeatConfig, NeatGradient } from "/cdn/npm/@firecms/neat@0.2.2/dist/index.module.js";

document.addEventListener("DOMContentLoaded", () => {
    const config = new NeatConfig({
        colors: [
            {
                color: "#FF5373",
                enabled: true
            },
            {
                color: "#FFC858",
                enabled: true
            },
            {
                color: "#17E7FF",
                enabled: true
            },
            {
                color: "#6D3BFF",
                enabled: true
            },
            {
                color: "#f5e1e5",
                enabled: false
            }
        ],
        speed: 4,
        horizontalPressure: 4,
        verticalPressure: 5,
        waveFrequencyX: 2,
        waveFrequencyY: 3,
        waveAmplitude: 5,
        shadows: 0,
        highlights: 2,
        saturation: 7,
        wireframe: false,
        colorBlending: 6,
        backgroundColor: "#003FFF",
        backgroundAlpha: 1
    });

    const gradientElement = document.getElementById("gradient");
    if (gradientElement) {
        const neat = new NeatGradient({
            ref: gradientElement,
            ...config
        });

        // You can change the config at any time
        neat.speed = 6;

        // You can also destroy the gradient for cleanup
        // e.g. returning from a useEffect hook in React
        // neat.destroy();
    } else {
        console.error('Element with id "gradient" not found.');
    }
});
