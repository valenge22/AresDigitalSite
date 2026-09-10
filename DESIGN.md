---
name: ARES Digital
description: Estudio digital argentino de desarrollo web, software y crecimiento digital.
colors:
  navy: "#071426"
  blue: "#2474d8"
  blue-bright: "#71b7ff"
  paper: "#f4f6f8"
  white: "#ffffff"
  text: "#172233"
  muted: "#566477"
  line: "#d5dce5"
  violet: "#7666d8"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.4rem, 4.7vw, 4.8rem)"
    fontWeight: 700
    lineHeight: 0.99
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  control: "6px"
  surface: "10px"
spacing:
  compact: "16px"
  control: "24px"
  section: "clamp(78px, 10vw, 140px)"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "48px"
---

# Design System: ARES Digital

## Overview

**Creative North Star: "Dossier de producto"**

ARES Digital se presenta como un estudio que construye productos reales. La interfaz combina superficies azul marino con pausas claras y capturas auténticas de Stock ARES y ARES Control. La tecnología se expresa con reglas finas, alineación precisa y datos de producto, no con neón, partículas ni decoraciones abstractas.

**Key Characteristics:**

- Jerarquía editorial fuerte, con titulares directos y espacio negativo.
- Capturas de producto como prueba central, no como adornos.
- Azul ARES reservado para acciones, vínculos y cambios de estado.
- Alternancia deliberada entre azul profundo, papel claro y blanco.

## Colors

La paleta prioriza legibilidad y sobriedad: el azul profundo construye confianza y el azul ARES señala acción.

### Primary

- **Azul ARES:** acción, CTA y acentos de navegación.

### Secondary

- **Azul claro de sistema:** información secundaria sobre fondos oscuros y detalles de producto.
- **Violeta ARES:** acento excepcional en estados de servicio; nunca como fondo dominante.

### Neutral

- **Azul marino:** superficies de identidad, hero, servicios, pie y sección Nosotros.
- **Papel técnico:** superficies de lectura y secciones que necesitan aire.
- **Texto carbón y gris azulado:** contenido principal y secundario.

**The Accent Restraint Rule.** El azul de marca tiene un trabajo: guiar una acción o marcar información. No se convierte en brillo ambiental ni en degradado decorativo.

## Typography

**Display Font:** Manrope, sans-serif
**Body Font:** Source Sans 3, sans-serif

**Character:** Manrope aporta una voz clara y sólida para encabezados; Source Sans 3 mantiene las descripciones y formularios legibles, directos y profesionales en todos los tamaños.

### Hierarchy

- **Display:** titulares de hero y sección; reservado para afirmar qué hace ARES.
- **Headline:** títulos de producto y servicio; lectura rápida, sin frases vacías.
- **Body:** explicaciones de hasta 650px de ancho y párrafos respirados.
- **Label:** microinformación mínima, de al menos 12px, sin ser el recurso visual dominante.

**The Direct Copy Rule.** Los encabezados explican una capacidad o un producto concreto; no se usan slogans abstractos como estructura de la página.

## Layout

El contenedor máximo es de 1240px con márgenes laterales fluidos. Las secciones se separan mediante un ritmo amplio y alternan densidad: hero con interfaz real, productos extensos, servicios en filas y un contacto claro.

En escritorio, los productos emplean texto e imagen en dos columnas; en tablet y mobile pasan a una columna. La secuencia de proceso cambia de cuatro columnas a dos y luego a una, sin reducir la zona táctil ni recortar contenido.

## Elevation & Depth

La profundidad es mayormente plana. Los bordes de 1px sostienen pantallas, campos y divisores. Las capturas de producto ganan una sombra neutra y breve solamente al interactuar, para comunicar que se pueden explorar.

**The Proof-First Rule.** Cuando una sección necesita peso visual, se usa una captura auténtica de producto antes que una sombra, un glow o una tarjeta decorativa.

## Shapes

Los controles usan esquinas contenidas: 6px para inputs y botones, 10px para interfaces o superficies de producto. No se usan píldoras como estructura ni radios excesivos. Las líneas técnicas son finas y de bajo contraste.

## Components

### Buttons

- **Shape:** control sobrio de 48px de alto con esquinas de 6px.
- **Primary:** azul ARES con texto blanco; al pasar el cursor oscurece levemente.
- **Secondary:** transparente sobre el hero, con borde claro; en fondo claro conserva borde neutro.
- **Focus:** el foco visible del sitio debe mantenerse alto y contrastado.

### Product Screens

- **Style:** capturas reales con borde sutil y encuadre contenido.
- **State:** fuera de foco se muestran más pequeñas y borrosas en dispositivos con cursor; en hover se amplían y recuperan nitidez. El hero conserva las capturas legibles como prueba inmediata.

### Service Rows

- **Style:** filas con divisores dentro de dos grupos, no tarjetas idénticas.
- **State:** en desktop, una fila activa toma un color ARES sólido y desplaza su contenido unos píxeles. En mobile conserva claridad sin depender del hover.

### Inputs / Fields

- **Style:** fondo blanco, borde gris azulado y radio de 6px.
- **Focus:** cambio de borde y anillo accesible; labels reales arriba de cada campo.

### Navigation

- **Style:** franja azul marino fija, marca a la izquierda y CTA sobrio a la derecha.
- **Mobile:** menú desplegable oscuro con los mismos enlaces y CTA.

## Do's and Don'ts

### Do:

- **Do** usar interfaces reales de Stock ARES y ARES Control como prueba de capacidad.
- **Do** mantener superficies grandes y calmas, con una acción clara por bloque.
- **Do** usar azul ARES como acento funcional y violeta sólo en una interacción puntual.
- **Do** conservar contraste alto en textos, controles y estados.

### Don't:

- **Don't** usar fondos tornasolados, gradientes dominantes, neón, glow o partículas.
- **Don't** reemplazar información de producto con iconos decorativos o tarjetas genéricas repetidas.
- **Don't** introducir slogans abstractos cuando una explicación concreta resulta más útil.
- **Don't** inventar clientes, métricas, integrantes o capturas de sistemas.
