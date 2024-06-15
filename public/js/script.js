import { NeatConfig, NeatGradient } from "@firecms/neat";

// Define your config
export const config: NeatConfig = {
        "colors": [
            {
                "color": "#080808",
                "enabled": true
            },
            {
                "color": "#13D9F7",
                "enabled": true
            },
            {
                "color": "#000000",
                "enabled": true
            },
            {
                "color": "#13D9F7",
                "enabled": true
            },
            {
                "color": "#000000",
                "enabled": true
            }
        ],
        "speed": 5,
        "horizontalPressure": 4,
        "verticalPressure": 5,
        "waveFrequencyX": 1,
        "waveFrequencyY": 2,
        "waveAmplitude": 7,
        "shadows": 4,
        "highlights": 5,
        "colorBrightness": 1,
        "colorSaturation": 2,
        "wireframe": false,
        "colorBlending": 7,
        "backgroundColor": "#000000",
        "backgroundAlpha": 1,
        "resolution": 1
    };


// define an element with id="gradient" in your html
const neat = new NeatGradient({
    ref: document.getElementById("gradient"),
    ...config
});

// you can change the config at any time
neat.speed = 6;

// you can also destroy the gradient for cleanup
// e.g. returning from a useEffect hook in React
neat.destroy();