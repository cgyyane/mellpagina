(function () {
  var C = window.ESPI || {};
  var WA = C.WHATSAPP || "5491128540896";
  function wa(msg) { return "https://wa.me/" + WA + (msg ? "?text=" + encodeURIComponent(msg) : ""); }
  // Mensaje de WhatsApp según el tipo de producto
  function msg(d) {
    var k = d.kind || "";
    if (/^Ritual/.test(k)) return "Hola! Quiero reservar el ritual " + d.name + " 🕯️ RITUAL";
    if (/^Combo de rituales/.test(k)) return "Hola! Quiero reservar el " + d.name + " 🕯️ RITUAL";
    if (/^Terapia/.test(k)) return "Hola! Quiero reservar " + d.name + " ✨";
    return "Hola! Quiero empezar con " + d.name + " 🎀";
  }
  function hasPay(d) { return !!(C.PAGOS && C.PAGOS[d.name]); }
  function pay(d) {
    return hasPay(d) ? C.PAGOS[d.name] : wa(msg(d) + (d.price ? " (" + d.price + ")" : "") + ". ¿Cómo hago el pago?");
  }
  window.EspiLinks = { wa: wa, msg: msg, pay: pay, hasPay: hasPay };

  document.querySelectorAll("img[data-src]").forEach(function (i) { var p = i.getAttribute("data-src"); i.src = (window.IMGS && window.IMGS[p]) || p; });
  document.documentElement.classList.add("js");
  var y = document.getElementById("anio"); if (y) y.textContent = new Date().getFullYear();

  // Enlace para saltar al contenido
  var main = document.querySelector("main, section");
  if (main && !main.id) main.id = "contenido";
  var sk = document.createElement("a"); sk.className = "skip"; sk.href = "#" + (main ? main.id : "pie"); sk.textContent = "Saltar al contenido";
  document.body.insertBefore(sk, document.body.firstChild);

  // Menú para celular
  var nav = document.querySelector("header nav");
  var links = nav && nav.children[1];
  if (links) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "menu-btn"; b.setAttribute("aria-label", "Abrir menú"); b.setAttribute("aria-expanded", "false");
    b.innerHTML = "<span></span><span></span><span></span>";
    links.classList.add("nav-links"); nav.insertBefore(b, links);
    b.addEventListener("click", function () { var o = nav.classList.toggle("open"); b.setAttribute("aria-expanded", o); });
    links.addEventListener("click", function (e) { if (e.target.closest("a")) nav.classList.remove("open"); });
  }

  // Botones de pago de los planes de coaching
  var page = location.pathname.split("/").pop().replace(".html", "") || "index";
  var PLAN = { "plan-activacion": "Hola! Quiero reservar la Sesión Activación 💫", "plan-expansion": "Hola! Quiero reservar Mujer en Expansión 🌷", "plan-vip": "Hola! Quiero reservar mi cupo en Reina Imperio VIP 👑" };
  document.querySelectorAll('a[data-pago="mercadopago"]').forEach(function (a) {
    var link = C.PLANES && C.PLANES[page];
    if (link) { a.href = link; a.target = "_blank"; a.rel = "noopener"; }
    else if (PLAN[page]) { a.href = wa(PLAN[page]); a.target = "_blank"; a.rel = "noopener"; }
  });

  // Botón flotante de WhatsApp
  var f = document.createElement("a");
  f.className = "wa-float"; f.href = wa("Hola! Quiero hacer una consulta 💗"); f.target = "_blank"; f.rel = "noopener"; f.setAttribute("aria-label", "Escribir por WhatsApp");
  f.innerHTML = '<svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  document.body.appendChild(f);

  // Carrusel de testimonios (solo catálogo, y solo si hay)
  var T = C.TESTIMONIOS || [];
  var foot = document.getElementById("pie");
  if (T.length && page === "catalogo" && foot) {
    var s = document.createElement("section"); s.className = "testi"; s.setAttribute("aria-label", "Testimonios");
    var card = function (t) { var q = document.createElement("blockquote"); q.appendChild(document.createTextNode("“" + t.texto + "”")); var ft = document.createElement("footer"); ft.textContent = t.autora || "Clienta"; q.appendChild(ft); return q; };
    var h = document.createElement("h2"); h.textContent = "lo que cuentan ellas"; s.appendChild(h);
    var tr = document.createElement("div"); tr.className = "testi-track";
    T.concat(T).forEach(function (t) { tr.appendChild(card(t)); });
    s.appendChild(tr); foot.parentNode.insertBefore(s, foot);
  }
})();
