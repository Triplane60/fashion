(function () {
  "use strict";
  const CATS = ["2000s", "Outfits", "Streetwear", "90s", "Killa", "80s", "Women's", "Korean", "Vintage", "Minimalist", "Y2K", "Summer fits", "Formal wear"];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const session = () => { try { return JSON.parse(localStorage.getItem("modeboard_session") || "null"); } catch { return null; } };
  const readPosts = () => { try { return JSON.parse(localStorage.getItem("modeboard_posts") || "[]"); } catch { return []; } };
  const writePosts = (p) => { try { localStorage.setItem("modeboard_posts", JSON.stringify(p)); return true; } catch { return false; } };
  const readUsers = () => { try { return JSON.parse(localStorage.getItem("modeboard_users") || "[]"); } catch { return []; } };
  const writeUsers = (u) => { try { localStorage.setItem("modeboard_users", JSON.stringify(u)); } catch { /* ignore */ } };
  const readMeta = () => { try { return JSON.parse(localStorage.getItem("modeboard_saved_meta") || "{}"); } catch { return {}; } };
  const toast = (m) => { const t = document.getElementById("toast"); t.textContent = m; t.classList.add("show"); clearTimeout(t._x); t._x = setTimeout(() => t.classList.remove("show"), 1900); };
  const uid = () => (Date.now().toString(36) + Math.random().toString(36).slice(2, 8));

  let user = session();
  const gate = document.getElementById("profile-gate");
  const content = document.getElementById("profile-content");
  if (!user) { gate.hidden = false; content.hidden = true; return; }
  content.hidden = false;

  /* --- Header --- */
  const profileOf = () => {
    const users = readUsers();
    let rec = users.find((u) => u.email === user.email);
    if (!rec) { rec = { name: user.name || "", email: user.email, pass: "", created: Date.now() }; users.push(rec); writeUsers(users); }
    return rec;
  };
  const myPosts = () => readPosts().filter((p) => p.owner === user.email).sort((a, b) => (b.created || 0) - (a.created || 0));
  const savedKeys = () => (readSaved()[user.email] || []).map(String);

  function renderHead() {
    const rec = profileOf();
    const name = rec.name || user.name || "Moodboard member";
    const uname = rec.username ? "@" + rec.username : "@" + (user.email || "member").split("@")[0].replace(/[^a-z0-9_]/gi, "").toLowerCase();
    document.getElementById("profile-name").textContent = name;
    document.getElementById("profile-username").textContent = uname;
    document.getElementById("profile-bio").textContent = rec.bio || "Curating outfits and everyday inspiration.";
    const initial = (name || "M").trim().charAt(0).toUpperCase();
    const img = document.getElementById("profile-avatar-img");
    const txt = document.getElementById("profile-avatar-initial");
    if (rec.avatar) { img.src = rec.avatar; img.hidden = false; txt.style.visibility = "hidden"; }
    else { img.hidden = true; txt.style.visibility = "visible"; txt.textContent = initial; }
    document.getElementById("stat-posts").textContent = myPosts().length;
    document.getElementById("stat-saved").textContent = savedKeys().length;
    const cat = document.getElementById("post-category");
    if (!cat.options.length) cat.innerHTML = CATS.map((c) => `<option>${esc(c)}</option>`).join("");
  }

  /* --- Tabs --- */
  function setTab(mine) {
    const tm = document.getElementById("tab-mine"), ts = document.getElementById("tab-saved");
    tm.classList.toggle("on", mine); tm.setAttribute("aria-selected", mine);
    ts.classList.toggle("on", !mine); ts.setAttribute("aria-selected", !mine);
    document.getElementById("pane-mine").hidden = !mine;
    document.getElementById("pane-saved").hidden = mine;
    if (!mine) renderSaved();
  }
  document.getElementById("tab-mine").addEventListener("click", () => setTab(true));
  const readSaved = () => { try { return JSON.parse(localStorage.getItem("modeboard_saved") || "{}"); } catch { return {}; } };
  const writeSaved = (s) => { try { localStorage.setItem("modeboard_saved", JSON.stringify(s)); } catch { /* ignore */ } };

  /* --- Galleries: same masonry cards as index --- */
  function cardHTML(p, mid, menu) {
    return `<article class="pin">
      <div class="pin-image-wrap"><img class="pin-image" src="${esc(p.photo)}" alt="${esc(p.title)}" loading="lazy"></div>
      <div class="pin-caption">
        <div class="caption-copy"><p class="pin-title">${esc(p.title)}</p><p class="creator">${esc(p.category)}</p></div>
        <div class="card-menu-wrap">
          <button class="pin-more" data-menu="${esc(mid)}" aria-label="Options">•••</button>
          <div class="card-menu" data-menubox="${esc(mid)}" hidden>${menu}</div>
        </div>
      </div>
    </article>`;
  }
  function renderGrid() {
    const list = myPosts();
    document.getElementById("my-empty").style.display = list.length ? "none" : "block";
    document.getElementById("my-grid").innerHTML = list.map((p) =>
      cardHTML(p, "mine:" + p.id, `<button data-edit="${esc(p.id)}">Edit</button><button class="danger" data-del="${esc(p.id)}">Delete</button>`)).join("");
    renderHead();
  }
  function renderSaved() {
    const meta = readMeta();
    const photos = (window.Moodboard && window.Moodboard.photos) || [];
    const list = savedKeys().map((k) => {
      if (k.startsWith("mine:")) {
        const post = readPosts().find((p) => "mine:" + p.id === k);
        return post ? { title: post.title, photo: post.photo, category: post.category, unsave: k } : null;
      }
      const i = Number(k);
      if (Number.isFinite(i) && photos[i]) return { title: photos[i].title, photo: photos[i].photo, category: photos[i].category, unsave: k };
      const m = meta[k];
      return m && m.photo ? { title: m.title || "Saved look", photo: m.photo, category: m.category || "", unsave: k } : null;
    }).filter(Boolean);
    document.getElementById("saved-empty").style.display = list.length ? "none" : "block";
    document.getElementById("saved-grid").innerHTML = list.map((s, n) =>
      `<article class="pin">
        <div class="pin-image-wrap"><img class="pin-image" src="${esc(s.photo)}" alt="${esc(s.title)}" loading="lazy">
        <button class="save-button saved" data-unsave="${esc(s.unsave)}">Saved</button></div>
        <div class="pin-caption"><div class="caption-copy"><p class="pin-title">${esc(s.title)}</p><p class="creator">${esc(s.category)}</p></div>
        <div class="card-menu-wrap"><button class="pin-more" data-menu="sv${n}" aria-label="Options">•••</button>
        <div class="card-menu" data-menubox="sv${n}" hidden><button data-unsave="${esc(s.unsave)}">Remove</button></div></div></div>
      </article>`).join("");
    renderHead();
  }
  document.getElementById("tab-saved").addEventListener("click", () => setTab(false));
  /* --- Card menus: edit / delete / unsave --- */
  function galleryClick(e) {
    const menuBtn = e.target.closest("[data-menu]");
    if (menuBtn) {
      e.stopPropagation();
      const box = document.querySelector(`[data-menubox="${menuBtn.dataset.menu}"]`);
      const wasHidden = box.hidden;
      document.querySelectorAll(".card-menu").forEach((m) => { m.hidden = true; });
      box.hidden = !wasHidden;
      return;
    }
    const ed = e.target.closest("[data-edit]");
    if (ed) { openPostModal(ed.dataset.edit); return; }
    const del = e.target.closest("[data-del]");
    if (del) {
      if (!confirm("Delete this post? It will also leave the home feed.")) return;
      writePosts(readPosts().filter((p) => String(p.id) !== String(del.dataset.del)));
      renderGrid(); toast("Post deleted"); return;
    }
    const un = e.target.closest("[data-unsave]");
    if (un) {
      const k = String(un.dataset.unsave);
      const all = readSaved(); const list = new Set((all[user.email] || []).map(String));
      list.delete(k); all[user.email] = [...list]; writeSaved(all);
      renderSaved(); toast("Removed from saved");
    }
  }
  document.getElementById("pane-mine").addEventListener("click", galleryClick);
  document.getElementById("pane-saved").addEventListener("click", galleryClick);
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".card-menu-wrap")) document.querySelectorAll(".card-menu").forEach((m) => { m.hidden = true; });
  });

  /* --- Post modal: create + edit, drag-and-drop upload --- */
  let draftPhoto = "", editingId = null;
  function showPreview(src) {
    const img = document.getElementById("photo-preview");
    const ph = document.getElementById("photo-placeholder");
    if (src) { img.src = src; img.hidden = false; ph.hidden = true; }
    else { img.removeAttribute("src"); img.hidden = true; ph.hidden = false; }
  }
  function downscale(file, done) {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const max = 900;
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.round(img.width * scale); c.height = Math.round(img.height * scale);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        done(c.toDataURL("image/jpeg", 0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
  const takeFile = (file) => {
    if (!file || !file.type.startsWith("image/")) { toast("Please choose an image file"); return; }
    downscale(file, (url) => { draftPhoto = url; showPreview(url); });
  };
  function openPostModal(id) {
    editingId = id || null;
    const err = document.getElementById("post-error"); err.hidden = true;
    if (id) {
      const p = readPosts().find((x) => String(x.id) === String(id));
      if (!p) return;
      document.getElementById("post-modal-title").textContent = "Edit post";
      document.getElementById("post-publish").textContent = "Save changes";
      document.getElementById("post-title").value = p.title || "";
      document.getElementById("post-category").value = p.category || CATS[0];
      document.getElementById("post-desc").value = p.description || "";
      document.getElementById("post-tags").value = (p.tags || []).join(", ");
      draftPhoto = p.photo || ""; showPreview(draftPhoto);
    } else {
      document.getElementById("post-modal-title").textContent = "Create a post";
      document.getElementById("post-publish").textContent = "Publish";
      document.getElementById("post-form").reset();
      draftPhoto = ""; showPreview("");
    }
    document.getElementById("post-modal").classList.add("open");
    document.body.classList.add("modal-open");
  }
  function closePostModal() {
    document.getElementById("post-modal").classList.remove("open");
    document.body.classList.remove("modal-open");
    editingId = null;
  }
  document.getElementById("create-post-btn").addEventListener("click", () => openPostModal(null));
  document.getElementById("post-close").addEventListener("click", closePostModal);
  document.getElementById("post-cancel").addEventListener("click", closePostModal);
  document.getElementById("post-modal").addEventListener("click", (e) => { if (e.target.id === "post-modal") closePostModal(); });
  const drop = document.getElementById("photo-drop");
  const picker = document.getElementById("post-file");
  drop.addEventListener("click", () => picker.click());
  picker.addEventListener("change", () => { if (picker.files[0]) takeFile(picker.files[0]); picker.value = ""; });
  ["dragenter", "dragover"].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add("dragover"); }));
  ["dragleave", "drop"].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove("dragover"); }));
  drop.addEventListener("drop", (e) => { const f = e.dataTransfer.files && e.dataTransfer.files[0]; if (f) takeFile(f); });
  document.getElementById("post-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const err = document.getElementById("post-error");
    const fail = (m) => { err.textContent = m; err.hidden = false; };
    const title = document.getElementById("post-title").value.trim();
    if (!title) return fail("Give your look a title.");
    if (!draftPhoto) return fail("Add a photo — drag one in or click to browse.");
    const data = {
      title, photo: draftPhoto,
      category: document.getElementById("post-category").value || CATS[0],
      description: document.getElementById("post-desc").value.trim(),
      tags: document.getElementById("post-tags").value.split(",").map((t) => t.trim()).filter(Boolean).slice(0, 8)
    };
    const posts = readPosts();
    if (editingId) {
      const p = posts.find((x) => String(x.id) === String(editingId));
      if (!p) return fail("That post no longer exists.");
      Object.assign(p, data);
      toast("Post updated");
    } else {
      posts.unshift({ id: uid(), owner: user.email, ownerName: profileOf().name || user.name, created: Date.now(), ...data });
      toast("Published — it is live on the home feed too");
    }
    if (!writePosts(posts)) return fail("That photo is too large to keep in this browser. Try a smaller one.");
    closePostModal(); renderGrid();
  });

  /* --- Edit profile --- */
  function openEditModal() {
    const rec = profileOf();
    document.getElementById("edit-name").value = rec.name || user.name || "";
    document.getElementById("edit-username").value = rec.username || "";
    document.getElementById("edit-bio").value = rec.bio || "";
    document.getElementById("edit-error").hidden = true;
    document.getElementById("edit-modal").classList.add("open");
    document.body.classList.add("modal-open");
  }
  function closeEditModal() {
    document.getElementById("edit-modal").classList.remove("open");
    if (!document.getElementById("post-modal").classList.contains("open")) document.body.classList.remove("modal-open");
  }
  document.getElementById("edit-profile-btn").addEventListener("click", openEditModal);
  document.getElementById("edit-close").addEventListener("click", closeEditModal);
  document.getElementById("edit-cancel").addEventListener("click", closeEditModal);
  document.getElementById("edit-modal").addEventListener("click", (e) => { if (e.target.id === "edit-modal") closeEditModal(); });
  document.getElementById("edit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const err = document.getElementById("edit-error");
    const fail = (m) => { err.textContent = m; err.hidden = false; };
    const name = document.getElementById("edit-name").value.trim();
    const username = document.getElementById("edit-username").value.trim().replace(/^@/, "");
    if (!name) return fail("Please enter a display name.");
    if (username && !/^[a-zA-Z0-9_]{3,24}$/.test(username)) return fail("Usernames use 3–24 letters, numbers or _.");
    const users = readUsers();
    let rec = users.find((u) => u.email === user.email);
    if (!rec) { rec = { email: user.email }; users.push(rec); }
    rec.name = name; rec.username = username || "";
    rec.bio = document.getElementById("edit-bio").value.trim();
    writeUsers(users);
    user = { ...user, name }; localStorage.setItem("modeboard_session", JSON.stringify(user));
    closeEditModal(); renderHead(); toast("Profile updated");
  });

  /* --- Avatar upload (downscaled, stored on the user record) --- */
  document.getElementById("profile-avatar-file").addEventListener("change", (e) => {
    const file = e.target.files[0]; e.target.value = "";
    if (!file || !file.type.startsWith("image/")) { toast("Please choose an image file"); return; }
    downscale(file, (url) => {
      const users = readUsers();
      let rec = users.find((u) => u.email === user.email);
      if (!rec) { rec = { email: user.email }; users.push(rec); }
      rec.avatar = url; writeUsers(users); renderHead(); toast("Profile picture updated");
    });
  });

  /* --- Keep tabs fresh across pages --- */
  window.addEventListener("storage", (e) => {
    if (e.key === "modeboard_saved") { renderHead(); if (!document.getElementById("pane-saved").hidden) renderSaved(); }
    if (e.key === "modeboard_posts") renderGrid();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closePostModal(); closeEditModal(); } });

  renderHead();
  renderGrid();
  if (location.hash === "#post") openPostModal(null);
})();
