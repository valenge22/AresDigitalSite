# CRO de ARES Digital

## Objetivo y CTA

- Objetivo: visita a contacto enviado.
- CTA primario: `Contanos tu proyecto` hacia `#contacto`.
- Secundario: `Ver productos` hacia las soluciones propias.

## Ajustes implementados

- El texto del hero ahora nombra de forma directa sitios web, software a medida y soluciones digitales.
- Se conserva un único CTA visualmente primario en hero y cierre.
- El formulario mantiene sus campos existentes: nombre, email, WhatsApp opcional, necesidad y mensaje. Se reforzó el microcopy sobre el propósito de la respuesta y privacidad.
- Se mide el CTA final y el CTA desde Servicios con el evento existente `cta_click`; el éxito confirmado sigue siendo `form_submit` en la página de gracias.

## Fricciones y decisiones

- No se eliminó WhatsApp ni se agregaron campos: es opcional y la integración actual conserva el flujo de contacto.
- Instagram continúa como contacto secundario, fuera del momento principal de envío del formulario.
- No se agregaron testimonios, métricas, popups ni widgets externos.

## Hipótesis futuras

1. Comparar `Contanos tu proyecto` con `Hablemos de tu proyecto` en hero.
2. Comparar el CTA secundario hacia Productos frente a Servicios.
3. Evaluar si ubicar una breve señal de productos propios antes del formulario mejora consultas calificadas.
