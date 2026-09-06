# Analítica de ARES Digital

## Estado encontrado

- No hay GA4, Google Tag Manager, Meta Pixel ni Cloudflare Web Analytics activos en el sitio.
- No se agregó un identificador ficticio ni un segundo proveedor.
- `analytics.js` deja una capa de eventos compatible con `gtag` y `dataLayer`.

## Eventos

| Evento | Disparador | Parámetros principales | Conversión recomendada |
| --- | --- | --- | --- |
| `cta_click` | CTA de contacto, productos o navbar | `site`, `location`, `cta_name` | No |
| `product_visit` | Enlace a Stock ARES o ARES Control | `site`, `product`, `destination` | No |
| `cross_site_navigation` | Navegación hacia Control o Stock | `source_site`, `destination_site`, `location` | No |
| `instagram_click` | Enlace a Instagram | `site`, `location`, `cta_name` | No |
| `form_submit` | Llegada a `gracias.html` después de un envío iniciado y aceptado | `site`, `form_name` | Sí |

No se envían nombres, emails, teléfonos, mensajes ni ningún dato ingresado en el formulario.

## Configuración pendiente de GA4

Hace falta crear o elegir una propiedad y un flujo web en GA4. Con el ID real `G-XXXXXXXXXX`, agregar el Google tag oficial en el `<head>` de `index.html` y `gracias.html`, y habilitar en la CSP `https://www.googletagmanager.com` para scripts y `https://www.google-analytics.com` para conexiones. No usar el valor de ejemplo.

Los parámetros personalizados que se quieran consultar en informes deben registrarse como dimensiones personalizadas en GA4. Marcar `form_submit` como evento clave.

Para conservar una misma sesión entre dominios, configurar la medición multidominio de GA4 incluyendo `aresdigital.site` y `controlares.com`. Los eventos `cross_site_navigation` funcionan independientemente y permiten auditar esos saltos aun antes de completar esa configuración.

## UTM recomendado

`?utm_source=instagram&utm_medium=social&utm_campaign=stock_ares_launch&utm_content=creative_name`

La navegación actual no reescribe ni elimina los parámetros UTM de la página visitada. Para depuración local, usar `?analytics_debug=1` y revisar mensajes `[ARES analytics]` en la consola.
