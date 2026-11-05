// Elton Freitas, personal site.
// 1. Fill Google Scholar numbers from data/metrics.json (updated weekly by a GitHub Action).
//    The HTML already carries the last known values, so nothing breaks if this fails.
// 2. Draw the hand-drawn yellow strokes once, when they come into view.
// 3. Keep the section anchor when switching language.
// 4. Mark the section in view in the header.

(function () {
  var lang = document.documentElement.lang.indexOf("pt") === 0 ? "pt-BR" : "en-GB";

  // ---- Scholar metrics ----
  fetch("../data/metrics.json", { cache: "no-cache" })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (m) {
      if (!m) return;
      var fmt = new Intl.NumberFormat(lang);
      document.querySelectorAll("[data-metric]").forEach(function (el) {
        var v = m[el.getAttribute("data-metric")];
        if (typeof v === "number") el.textContent = fmt.format(v);
      });
      document.querySelectorAll("[data-cites]").forEach(function (el) {
        var v = m.papers && m.papers[el.getAttribute("data-cites")];
        var n = el.querySelector(".n");
        if (typeof v === "number" && n) {
          n.textContent = fmt.format(v);
          el.hidden = v === 0;
        }
      });
      var upd = document.querySelector("[data-metric-date]");
      if (upd && m.updated) {
        var d = new Date(m.updated + "T12:00:00Z");
        upd.textContent = d.toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" });
        upd.setAttribute("datetime", m.updated);
      }
    })
    .catch(function () { /* keep the values written in the page */ });

  // ---- Hand-drawn strokes ----
  var strokes = document.querySelectorAll(".hand-under, .hand-circle");
  if ("IntersectionObserver" in window) {
    var drawIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("drawn"); drawIO.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    strokes.forEach(function (s) { drawIO.observe(s); });
  } else {
    strokes.forEach(function (s) { s.classList.add("drawn"); });
  }

  // ---- Language switch keeps the current section ----
  document.querySelectorAll("a[data-lang-switch]").forEach(function (sw) {
    sw.addEventListener("click", function () {
      try { localStorage.setItem("lang", sw.getAttribute("hreflang").slice(0, 2)); } catch (e) {}
      if (location.hash) sw.href = sw.getAttribute("href").split("#")[0] + location.hash;
    });
  });

  // ---- Current section in the header ----
  var links = Array.prototype.slice.call(document.querySelectorAll(".masthead nav a"));
  if (!("IntersectionObserver" in window) || !links.length) return;
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
  var navIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.removeAttribute("aria-current"); });
      var a = byId[e.target.id];   // the opening has no header link, so it clears the mark
      if (a) a.setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-25% 0px -65% 0px" });
  Object.keys(byId).concat("top").forEach(function (id) {
    var s = document.getElementById(id);
    if (s) navIO.observe(s);
  });
})();
