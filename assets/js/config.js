/* ============================================================
   ESPIRITUALITY · CONFIGURACIÓN
   Es el único archivo que hace falta editar para activar los pagos.
   ============================================================ */
window.ESPI = {
  // WhatsApp en formato internacional, sin + ni espacios
  WHATSAPP: "5491128540896",

  // Links de pago de Mercado Pago de cada plan de coaching
  PLANES: {
    "plan-activacion": "",   // ej: "https://mpago.la/XXXXXXX"
    "plan-expansion": "",
    "plan-vip": ""
  },

  // Links de pago por producto (tienda y catálogo).
  // La clave es el nombre EXACTO del producto. Si queda vacío, el botón
  // "Quiero empezar 🎀" abre WhatsApp con el pedido ya escrito.
  PAGOS: {
    // "Curso completo de Tarot": "https://mpago.la/XXXXXXX",
    // "Combo Renacer": "https://mpago.la/XXXXXXX",
  },

  // Testimonios (siempre anónimos). Si queda vacío, la sección no se muestra.
  // Ejemplo: { texto: "Me ayudó muchísimo…", autora: "Clienta, 29 años" }
  TESTIMONIOS: []
};
