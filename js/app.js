/* Lógica de interacción del prototipo InterGeneracional */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  const fmtFecha = iso => { const [y, m, d] = iso.split("-"); return `${d}/${m}/${y}`; };
  const fmtNum = n => n.toString().replace(".", ",");
  const stars = v => "★".repeat(Math.round(v)) + "☆".repeat(5 - Math.round(v));
  const getTall = id => TALLERISTAS.find(t => t.id === id);
  const telTaller = t => `(0342) 456-${String(1000 + t.id * 111).slice(-4)}`;
  const initials = n => n.split(" ").map(p => p[0]).join("").slice(0, 2);
  const AV_COLORS = ["#7d9b84", "#c97b5d", "#b8956a", "#6f8f9b", "#a07a9b", "#8fae9a"];

  /* ---------- Menú móvil ---------- */
  const nav = $("#nav"), toggle = $("#menuToggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$("#nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  // Resaltar sección activa
  const sections = $$("main section[id]");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) $$("#nav a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => obs.observe(s));

  /* ---------- Tabs Cómo funciona ---------- */
  $$(".tab").forEach(btn => btn.addEventListener("click", () => {
    $$(".tab").forEach(b => b.classList.remove("active"));
    $$(".tab-panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    $("#tab-" + btn.dataset.tab).classList.add("active");
  }));

  /* ---------- Tarjetas de talleres ---------- */
  function cardTaller(t) {
    const c = CATEGORIAS[t.cat], tal = getTall(t.tallerista);
    return `<article class="card taller-card" tabindex="0" data-taller="${t.id}">
      <div class="card-img" style="--c:${c.color}"><span class="ph">${c.icon}</span><img src="${t.img}" alt="${t.nombre}: ${t.desc}" loading="lazy" width="800" height="600" onerror="this.remove()"><em class="chip">${c.icon} ${c.nombre}</em></div>
      <div class="card-body">
        <h3>${t.nombre}</h3>
        <p class="desc">${t.desc}</p>
        <ul class="meta">
          <li>📍 ${t.inst} · <strong>${t.barrio}</strong></li>
          <li>📅 ${fmtFecha(t.inicio)} al ${fmtFecha(t.fin)}</li>
          <li>🕒 ${t.horario}</li>
          <li>🏠 Presencial · ${t.vacantes} vacantes</li>
          <li>🧑‍🏫 ${tal.nombre} <span class="rating">★ ${fmtNum(tal.valoracion)}/5</span></li>
          <li>📞 ${telTaller(t)} <small>(demo)</small></li>
        </ul>
        <button class="btn btn-small btn-primary">Ver detalle</button>
      </div>
    </article>`;
  }

  $("#featured").innerHTML = [1, 10, 2].map(id => TALLERES.find(t => t.id === id)).map(cardTaller).join("");

  /* ---------- Catálogo con filtros ---------- */
  const fCat = $("#fCat"), fBarrio = $("#fBarrio"), fSearch = $("#fSearch"), fMod = $("#fMod"), fProx = $("#fProx");
  Object.entries(CATEGORIAS).forEach(([k, c]) => fCat.insertAdjacentHTML("beforeend", `<option value="${k}">${c.nombre}</option>`));
  [...new Set(TALLERES.map(t => t.barrio))].sort().forEach(b => fBarrio.insertAdjacentHTML("beforeend", `<option>${b}</option>`));

  function render() {
    const q = fSearch.value.trim().toLowerCase();
    const hoy = new Date(FECHA_DEMO + "T00:00");
    const limite = new Date(hoy); limite.setDate(limite.getDate() + 14);
    const list = TALLERES.filter(t => {
      const ini = new Date(t.inicio + "T00:00");
      return (!q || t.nombre.toLowerCase().includes(q))
        && (!fCat.value || t.cat === fCat.value)
        && (!fBarrio.value || t.barrio === fBarrio.value)
        && (!fMod.value || fMod.value === "Presencial")
        && (!fProx.checked || (ini >= hoy && ini <= limite));
    }).sort((a, b) => a.inicio.localeCompare(b.inicio));
    $("#results").textContent = `${list.length} taller${list.length === 1 ? "" : "es"} encontrado${list.length === 1 ? "" : "s"}`;
    $("#catalog").innerHTML = list.length ? list.map(cardTaller).join("")
      : `<div class="empty">No encontramos talleres con esos filtros. <button class="btn btn-small btn-ghost" id="emptyReset">Limpiar filtros</button></div>`;
    const er = $("#emptyReset"); if (er) er.onclick = reset;
  }
  function reset() { fSearch.value = ""; fCat.value = ""; fBarrio.value = ""; fMod.value = ""; fProx.checked = false; render(); }
  [fCat, fBarrio, fMod, fProx].forEach(el => el.addEventListener("change", render));
  fSearch.addEventListener("input", render);
  $("#fReset").addEventListener("click", reset);
  render();

  /* ---------- Instituciones ---------- */
  $("#instList").innerHTML = INSTITUCIONES.map(i =>
    `<div class="inst-item"><strong>🏛️ ${i.nombre}</strong><span>${i.tipo} · ${i.barrio}</span></div>`).join("");

  /* ---------- Talleristas ---------- */
  $("#tallerList").innerHTML = TALLERISTAS.map((t, i) => `
    <article class="card tall-card" tabindex="0" data-tallerista="${t.id}">
      <div class="avatar" style="background:${AV_COLORS[i % AV_COLORS.length]}"><img src="${t.foto}" alt="Retrato de ${t.nombre}" loading="lazy" width="180" height="180" onerror="this.remove()"><span>${initials(t.nombre)}</span></div>
      <h3>${t.nombre}</h3>
      <p class="esp">${t.especialidad}</p>
      <p class="desc">${t.presentacion}</p>
      <p class="small">🎓 ${t.experiencia}</p>
      <div class="tall-stats"><span><b>${t.talleres}</b> talleres</span><span class="rating">★ ${fmtNum(t.valoracion)}/5</span></div>
      <span class="verif ${t.verificado ? "ok" : "pend"}">${t.verificado ? "✔ Perfil verificado" : "⏳ Verificación en curso"}</span>
      <button class="btn btn-small btn-outline">Ver perfil</button>
    </article>`).join("");

  /* ---------- Espacios ---------- */
  $("#spaceList").innerHTML = ESPACIOS.map(e => `
    <div class="space"><h3>${e.nombre} — ${e.inst}</h3>
      <ul><li>📍 Barrio ${e.barrio}</li><li>👥 Capacidad: ${e.capacidad} personas</li><li>✨ ${e.caract}</li><li>🗓️ ${e.disp}</li></ul>
      <button class="btn btn-small btn-ghost" data-space="${e.inst}">Consultar disponibilidad</button></div>`).join("");

  /* ---------- Modal ---------- */
  const modal = $("#modal"), body = $("#modalBody");
  let lastFocus = null;
  function openModal(html) {
    lastFocus = document.activeElement;
    body.innerHTML = html;
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".modal-box").scrollTop = 0;
    $("#modalClose").focus();
    bindForms(body);
  }
  function closeModal() {
    modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  $("#modalClose").onclick = closeModal;
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

  function detalleTaller(id) {
    const t = TALLERES.find(x => x.id === id), c = CATEGORIAS[t.cat], tal = getTall(t.tallerista);
    openModal(`
      <div class="card-img big" style="--c:${c.color}"><span class="ph">${c.icon}</span><img src="${t.img}" alt="${t.nombre}" width="800" height="600" onerror="this.remove()"><em class="chip">${c.icon} ${c.nombre}</em></div>
      <h2>${t.nombre}</h2>
      <p class="lead">${t.desc}</p>
      <div class="detail-grid">
        <div><b>Institución</b>${t.inst}</div>
        <div><b>Barrio</b>${t.barrio}, Santa Fe</div>
        <div><b>Inicio</b>${fmtFecha(t.inicio)}</div>
        <div><b>Finalización</b>${fmtFecha(t.fin)}</div>
        <div><b>Días y horarios</b>${t.horario}</div>
        <div><b>Modalidad</b>Presencial</div>
        <div><b>Vacantes</b>${t.vacantes} lugares</div>
        <div><b>Contacto</b>${telTaller(t)} <small>(teléfono demostrativo)</small></div>
      </div>
      <div class="tall-mini">
        <div><b>Tallerista:</b> ${tal.nombre} <span class="rating">${stars(tal.valoracion)} ${fmtNum(tal.valoracion)}/5</span>
        ${tal.verificado ? '<span class="verif ok">✔ Verificado</span>' : ""}</div>
        <button class="btn btn-small btn-ghost" data-goto-tall="${tal.id}">Ver perfil del tallerista</button>
      </div>
      <h3>Consultar al organizador</h3>
      <form class="form" data-form="Consulta">
        <div class="form-2"><label>Tu nombre<input required></label><label>Teléfono o correo<input required></label></div>
        <label>Consulta<textarea rows="3" required>Hola, quisiera más información sobre el taller "${t.nombre}".</textarea></label>
        <button class="btn btn-primary" type="submit">Enviar consulta</button>
      </form>
      <p class="demo-note">Prototipo: no se realizan inscripciones ni pagos reales.</p>`);
  }

  function perfilTallerista(id) {
    const t = getTall(id), i = TALLERISTAS.indexOf(t);
    const dicta = TALLERES.filter(x => x.tallerista === id);
    openModal(`
      <div class="profile-head">
        <div class="avatar big" style="background:${AV_COLORS[i % AV_COLORS.length]}"><img src="${t.foto}" alt="Retrato de ${t.nombre}" width="220" height="220" onerror="this.remove()"><span>${initials(t.nombre)}</span></div>
        <div><h2>${t.nombre}</h2><p class="esp">${t.especialidad}</p>
          <span class="rating">${stars(t.valoracion)} ${fmtNum(t.valoracion)}/5</span> · <b>${t.talleres}</b> talleres realizados<br>
          <span class="verif ${t.verificado ? "ok" : "pend"}">${t.verificado ? "✔ Perfil verificado por InterGeneracional" : "⏳ Verificación en curso"}</span></div>
      </div>
      <h3>Biografía</h3><p>${t.bio}</p>
      <h3>Experiencia</h3><p>${t.experiencia}</p>
      <h3>Especialidades</h3><div class="tags">${t.especialidades.map(e => `<span class="tag">${e}</span>`).join("")}</div>
      <h3>Talleres que dicta</h3>
      <ul class="link-list">${dicta.map(d => `<li><button class="linkish" data-goto-taller="${d.id}">${d.nombre}</button> — ${d.inst} (desde ${fmtFecha(d.inicio)})</li>`).join("") || "<li>Sin talleres activos.</li>"}</ul>
      <h3>Historial de actividades</h3><ul class="history">${t.historial.map(h => `<li>${h}</li>`).join("")}</ul>
      <h3>Valoraciones de participantes</h3>
      ${t.comentarios.map(([who, txt]) => `<blockquote class="mini">“${txt}”<cite>— ${who} (comentario ficticio)</cite></blockquote>`).join("")}`);
  }

  /* ---------- Delegación de clics ---------- */
  document.addEventListener("click", e => {
    const g1 = e.target.closest("[data-goto-tall]"); if (g1) return perfilTallerista(g1.dataset.gotoTall);
    const g2 = e.target.closest("[data-goto-taller]"); if (g2) return detalleTaller(+g2.dataset.gotoTaller);
    const op = e.target.closest("[data-open]"); if (op) return openModal($("#" + op.dataset.open).innerHTML);
    const sp = e.target.closest("[data-space]");
    if (sp) return openModal(`<h2>Consultar disponibilidad</h2><p class="sub">${sp.dataset.space}</p>
      <form class="form" data-form="Espacio-consulta"><label>Tu nombre<input required></label><label>Correo<input type="email" required></label>
      <label>¿Para qué actividad lo necesitás?<textarea rows="3" required></textarea></label><button class="btn btn-primary">Enviar consulta</button></form>`);
    const tc = e.target.closest("[data-taller]"); if (tc) return detalleTaller(+tc.dataset.taller);
    const tl = e.target.closest("[data-tallerista]"); if (tl) return perfilTallerista(tl.dataset.tallerista);
  });
  document.addEventListener("keydown", e => {
    if (e.key !== "Enter") return;
    const el = document.activeElement;
    if (el.dataset.taller) detalleTaller(+el.dataset.taller);
    else if (el.dataset.tallerista) perfilTallerista(el.dataset.tallerista);
  });

  /* ---------- Formularios simulados ---------- */
  function bindForms(root) {
    $$("form[data-form]", root).forEach(f => {
      if (f.dataset.bound) return; f.dataset.bound = "1";
      f.addEventListener("submit", ev => {
        ev.preventDefault();
        const btn = f.querySelector("[type=submit], button");
        btn.disabled = true; btn.textContent = "Enviando…";
        setTimeout(() => {
          f.outerHTML = `<div class="success"><div class="icon">✅</div><h3>¡Gracias! Recibimos tu ${labelFor(f.dataset.form)}.</h3>
            <p>Un integrante del equipo de InterGeneracional se comunicará con vos a la brevedad.</p>
            <p class="demo-note">Simulación: en este prototipo no se envió ninguna información.</p></div>`;
        }, 700);
      });
    });
  }
  const labelFor = k => ({ "Institución": "solicitud", "Tallerista": "postulación", "Espacio": "oferta de espacio", "Consulta": "consulta", "Espacio-consulta": "consulta", "Contacto": "mensaje" })[k] || "mensaje";
  bindForms(document);
})();

