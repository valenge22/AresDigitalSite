# FocusPilot — anuncio ARES Digital

Composición de 30 segundos, 16:9, a 30 fps. La narrativa visual va de caos a claridad, foco y progreso, usando el azul noche y cian de la identidad de ARES.

## Uso

1. Instalá Node.js 20+.
2. Desde esta carpeta, ejecutá `npm install`.
3. Abrí el editor con `npm run start`.
4. Exportá MP4 con `npm run render`.

El resultado se escribirá en `out/focuspilot-ares.mp4`.

## Reel vertical ARES

La composición `AresPromoReel` dura 28 segundos, usa formato 1080×1920 a 30 fps y mantiene los textos dentro de la zona segura para Instagram/Facebook Reels.

Render: `npm run render:reel`. El archivo final se escribe en `out/ares-promo-reel.mp4`.

Assets preparados:

- Logo: `public/assets/ares-logo.png`
- Música: `public/audio/music.mp3`
- Voz en off: `public/audio/voiceover.mp3`
- Mockups opcionales: `public/mockups/`

Para habilitar los audios después de copiarlos, cambiá `music` y `voiceover` a `true` en `src/reel-theme.ts`. La música usa volumen 26% y fade de entrada/salida.

## Música

Incluí una pista licenciada como `public/music.mp3` y descomentá el componente `Audio` indicado en `src/video.tsx`. Una pista electrónica minimal / 110–120 BPM, que sume capas de 0–23 s y haga una resolución cálida para el cierre, encaja con las transiciones.
