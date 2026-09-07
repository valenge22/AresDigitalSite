# Motion de ARES Digital

- Hero: entrada escalonada de eyebrow, título, descripción y CTAs entre 0 y 220 ms.
- Paneles del hero: entrada existente preservada y flotado ambiental de hasta 6 px con ritmos distintos.
- Capturas fuera del hero: reveal de una sola ejecución con `translateY(24px)` y `scale(.98)` mediante el observer existente.
- Servicios y botones: elevación, sombra, flechas y estado activo sutiles.
- Mobile: se elimina el movimiento flotante continuo.
- Reduced motion: contenido visible directamente, sin translate, scale ni animaciones ambientales.

La implementación usa exclusivamente CSS y el `IntersectionObserver` existente; no agrega dependencias ni listeners de scroll.

