# Performance de ARES Digital

## Auditoría inicial

- Las dos capturas del hero transferían aproximadamente 143,4 KB en PNG.
- Las capturas no declaraban dimensiones intrínsecas, con riesgo de CLS.
- Las imágenes bajo el primer viewport ya usaban `loading="lazy"`.
- Google Fonts carga Inter (400, 500, 600) y Manrope (500, 600, 700, 800); son los pesos utilizados por la interfaz y se mantienen con `display=swap`.
- GA4 carga de forma asíncrona. No se encontraron scripts de terceros duplicados.
- Cloudflare Pages entrega el HTML comprimido con gzip y `Cache-Control: max-age=600`.

## Cambios

- Capturas WebP responsive de 640 y 960 px, conservando PNG como fallback.
- `srcset` y `sizes` para no enviar capturas de escritorio a pantallas pequeñas.
- Dimensiones `width`/`height` en capturas y prioridad alta sólo para la captura principal del hero.
- Decodificación asíncrona y lazy loading para capturas bajo el fold.
- Inicializador local de GA4 con `defer`.

Las capturas visibles inicialmente pasan de unos 143,4 KB a 46 KB en desktop o 28,7 KB en mobile, una reducción aproximada del 68% y 80% respectivamente.

## Presupuesto recomendado

- Mantener cada imagen nueva por debajo de 500 KB salvo justificación visual.
- Crear variantes responsive para capturas de más de 960 px.
- Evitar nuevas dependencias y scripts bloqueantes.
- Revisar LCP, INP y CLS con PageSpeed Insights después del despliegue y con datos de campo suficientes.

