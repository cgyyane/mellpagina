# Espirituality · Sitio web

Sitio estático en **HTML, CSS y JavaScript puro** (sin librerías ni build). Se publica tal cual en GitHub Pages.

## Páginas
| Archivo | Contenido |
|---|---|
| `index.html` | Inicio: libro animado, caminos, enfoque, sobre mí y contacto |
| `coaching.html` | Los 3 planes, comparativa y preguntas frecuentes |
| `plan-activacion.html` · `plan-expansion.html` · `plan-vip.html` | Detalle de cada plan, con el video de Mel |
| `tienda.html` | Kits, cursos en PDF, cursos 1:1, ebooks y guías de regalo |
| `catalogo.html` | Rituales, combos y terapias holísticas |
| `terminos.html` | Términos y condiciones |

## Publicar en GitHub Pages
1. Creá un repositorio nuevo y subí **el contenido** de esta carpeta (que `index.html` quede en la raíz).
2. En el repositorio: **Settings → Pages → Build and deployment → Deploy from a branch**.
3. Elegí la rama `main` y la carpeta `/ (root)` → **Save**.
4. En un minuto la web queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Qué completar (todo en `assets/js/config.js`)
- **Pagos:** pegá el link de Mercado Pago de cada plan en `PLANES` y de cada producto en `PAGOS`
  (clave = nombre exacto del producto). Mientras un link esté vacío, el botón "Quiero empezar 🎀"
  abre WhatsApp con el pedido ya escrito.
- **Testimonios:** agregalos (anónimos) en `TESTIMONIOS`; aparecen como carrusel al final del catálogo.
- **WhatsApp:** `+54 9 11 2854-0896` ya está cargado.

## Estructura
```
assets/css/site.css     estilos compartidos (menú celular, pie, botón de WhatsApp)
assets/js/config.js     datos editables (pagos, testimonios)
assets/js/site.js       menú, links de WhatsApp/pago, carrusel
assets/img/productos/   140 portadas de rituales, combos, terapias, cursos y ebooks
assets/video/           videos de los 3 planes (mp4 + póster)
```
Los textos y precios de tienda y catálogo están en `window.DETALLES`, al final de `tienda.html` y `catalogo.html`.

## Importante
GitHub Pages sirve páginas estáticas: **no puede** registrar compradoras ni enviar el PDF por mail al acreditarse el pago.
Para eso hace falta un servidor o función (por ejemplo Netlify Functions con el webhook de Mercado Pago).
