    const categories = ["2000s", "Outfits", "Streetwear", "90s", "Killa", "80s", "Women's", "Korean", "Vintage", "Minimalist", "Y2K", "Summer fits", "Formal wear"];
    const photos = [
      { title: "Sunday in the city", creator: "Maya Laurent", category: "Streetwear", photo: "photo-1529139574466-a303027c1d8b", avatar: "photo-1534528741775-53994a69daeb", description: "Easy layers, good denim, and nowhere in particular to be. The best outfits always leave a little room for the day to surprise you.", tags: ["relaxed denim", "city uniform", "layering"] },
      { title: "Soft structure", creator: "Studio Sora", category: "Minimalist", photo: "photo-1539109136881-3be0616acf4b", avatar: "photo-1524504388940-b1c1722653e1", description: "Clean lines with a softer point of view. A quiet palette lets the silhouette do the talking.", tags: ["minimal", "tailoring", "neutral"] },
      { title: "A little bit retro", creator: "Inez Ward", category: "Vintage", photo: "photo-1525507119028-ed4c629a60a3", avatar: "photo-1531123897727-8f129e1688ce", description: "Found-feeling pieces and a lived-in palette make this one feel collected, not constructed.", tags: ["vintage", "secondhand", "90s"] },
      { title: "Heatwave uniform", creator: "Lola James", category: "Summer fits", photo: "photo-1515886657613-9f3515b0c78f", avatar: "photo-1529139574466-a303027c1d8b", description: "The kind of outfit that belongs to a long, bright afternoon. Simple pieces, worn your own way.", tags: ["summer", "linen", "weekend"] },
      { title: "Off-duty, on point", creator: "Kai Morgan", category: "Streetwear", photo: "photo-1523398002811-999ca8dec234", avatar: "photo-1500648767791-00dcc994a43e", description: "An oversized layer and a sharp accessory make an everyday fit feel considered.", tags: ["street style", "oversized", "everyday"] },
      { title: "After dark", creator: "Nadia Vale", category: "Formal wear", photo: "photo-1539008835657-9e8e9680c956", avatar: "photo-1544005313-94ddf0286df2", description: "A little drama, a lot of confidence. Modern evening dressing with nothing extra to prove.", tags: ["evening", "occasion", "statement"] },
      { title: "Y2K, revisited", creator: "Zoe Park", category: "Y2K", photo: "photo-1483985988355-763728e1935b", avatar: "photo-1534528741775-53994a69daeb", description: "Nostalgia without the costume. A playful nod to the era, styled for right now.", tags: ["y2k", "playful", "going out"] },
      { title: "Quiet weekend", creator: "Elise Nør", category: "Minimalist", photo: "photo-1485230895905-ec40ba36b9bc", avatar: "photo-1524504388940-b1c1722653e1", description: "A thoughtful edit of everyday essentials in tactile fabrics and easy proportions.", tags: ["capsule", "everyday", "soft tailoring"] },
      { title: "The good jacket", creator: "Theo Wells", category: "Vintage", photo: "photo-1551232864-3f0890e580d9", avatar: "photo-1500648767791-00dcc994a43e", description: "One forever layer, worn until it feels like yours. Start with the jacket and build slowly.", tags: ["vintage find", "outerwear", "classic"] },
      { title: "Sunday market stroll", creator: "June Atelier", category: "Summer fits", photo: "photo-1509631179647-0177331693ae", avatar: "photo-1531123897727-8f129e1688ce", description: "Lightweight, lived-in and ready for an unplanned detour. This is summer at its easiest.", tags: ["market day", "summer", "easy layers"] },
      { title: "New romantics", creator: "Mina Ellis", category: "Formal wear", photo: "photo-1524504388940-b1c1722653e1", avatar: "photo-1544005313-94ddf0286df2", description: "A softer take on occasion dressing, with delicate details against a grounded silhouette.", tags: ["occasion", "romantic", "modern classic"] },
      { title: "Color outside", creator: "Rae Kim", category: "Y2K", photo: "photo-1496747611176-843222e1e57c", avatar: "photo-1534528741775-53994a69daeb", description: "A fearless color story balanced by familiar, wearable shapes. Start with one piece you love.", tags: ["color", "y2k", "street style"] },
      { title: "Borrowed from him", creator: "Alex Rios", category: "Streetwear", photo: "photo-1503342217505-b0a15ec3261c", avatar: "photo-1500648767791-00dcc994a43e", description: "Loose, borrowed proportions with a few intentional details to bring the whole thing together.", tags: ["androgynous", "oversized", "streetwear"] },
      { title: "Sunday best, undone", creator: "Sofia Lane", category: "Vintage", photo: "photo-1490481651871-ab68de25d43d", avatar: "photo-1544005313-94ddf0286df2", description: "Classic pieces feel more personal when you let them be a little imperfect.", tags: ["vintage", "classic", "personal style"] },
      { title: "The linen hour", creator: "Maya Laurent", category: "Summer fits", photo: "photo-1543076447-215ad9ba6923", avatar: "photo-1534528741775-53994a69daeb", description: "Linen, sun, and the freedom to keep the rest simple. An easy outfit worth repeating.", tags: ["linen", "summer", "slow mornings"] }
    ];
    const imageUrl = (id, width = 640) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
    const categoryList = document.getElementById("categories");
    const grid = document.getElementById("masonry");
    const search = document.getElementById("search");
    const suggestions = document.getElementById("suggestions");
    let activeCategory = "All";
    let activePhoto = null;
    let activePhotoIndex = -1;
    let toastTimer;
    let authMode = "login";
    const store = {
      users() { try { return JSON.parse(localStorage.getItem("modeboard_users") || "[]"); } catch { return []; } },
      saveUsers(u) { localStorage.setItem("modeboard_users", JSON.stringify(u)); },
      session() { return JSON.parse(localStorage.getItem("modeboard_session") || "null"); },
      saveSession(s) { s ? localStorage.setItem("modeboard_session", JSON.stringify(s)) : localStorage.removeItem("modeboard_session"); },
      saved() { try { return JSON.parse(localStorage.getItem("modeboard_saved") || "{}"); } catch { return {}; } },
      saveSaved(s) { localStorage.setItem("modeboard_saved", JSON.stringify(s)); }
    };
    const currentUser = () => store.session();
    const hash = (s) => btoa(unescape(encodeURIComponent("salt:" + s))).slice(0, 32);
    const catThumb = (c) => { const p = photos.find((x) => x.category.toLowerCase() === String(c).toLowerCase()) || photos[c.length % photos.length]; return imageUrl(p.photo, 120); };

    function renderCategories() {
      categoryList.innerHTML = categories.map((category) => `<button class="category${category === activeCategory ? " active" : ""}" data-category="${category}" aria-pressed="${category === activeCategory}"><img class="cat-thumb" src="${catThumb(category)}" alt="" loading="lazy"><span class="cat-label">${category}</span></button>`).join("");
    }

    function isSaved(i) { const u = currentUser(); if (!u) return false; return (store.saved()[u.email] || []).includes(i); }
    function toggleSave(i) {
      const u = currentUser();
      if (!u) { openAuth("register"); showToast("Sign up to save this look"); return false; }
      const all = store.saved(); const list = new Set(all[u.email] || []);
      list.has(i) ? list.delete(i) : list.add(i);
      all[u.email] = [...list]; store.saveSaved(all); renderPins(); syncDetailSave();
      showToast(list.has(i) ? "Saved to your board" : "Removed from your board");
      return list.has(i);
    }

    function renderAuthArea() {
      const u = currentUser(); const box = document.getElementById("auth-area");
      if (!u) { box.innerHTML = `<button class="btn-login" data-action="login">Log in</button><button class="btn-signup" data-action="signup">Sign up</button>`; return; }
      const initial = (u.name || u.email || "M").trim().charAt(0).toUpperCase();
      box.innerHTML = `<button class="avatar-btn" data-action="menu" aria-label="Account"><span class="avatar-fallback">${initial}</span><span>▾</span></button>
      <div class="user-menu" id="user-menu" hidden><div class="user-head"><span class="avatar-fallback">${initial}</span><div><b>${u.name || "Modeboard member"}</b><small>${u.email}</small></div></div>
      <button data-action="profile">View profile</button><button data-action="saved">Saved looks</button><button data-action="logout">Log out</button></div>`;
    }

    function inScope(photo) {
      if (activeCategory === "All") return true;
      const c = activeCategory.toLowerCase();
      const hay = `${photo.title} ${photo.creator} ${photo.category} ${photo.tags.join(" ")}`.toLowerCase();
      if (hay.includes(c)) return true;
      if (c === "2000s" || c === "y2k") return photo.category.toLowerCase() === "y2k";
      if (c === "90s" || c === "80s" || c === "vintage") return photo.category.toLowerCase() === "vintage";
      if (c === "outfits" || c === "women's" || c === "korean" || c === "killa" || c === "streetwear") return ["streetwear", "y2k", "summer fits", "minimalist"].includes(photo.category.toLowerCase());
      return photo.category.toLowerCase() === c;
    }
    function renderPins() {
      const query = search.value.trim().toLowerCase();
      const filtered = photos.filter((photo) => inScope(photo) && (!query || query === "fashion" || `${photo.title} ${photo.creator} ${photo.category} ${photo.tags.join(" ")}`.toLowerCase().includes(query)));
      grid.innerHTML = filtered.map((photo, index) => {
        const originalIndex = photos.indexOf(photo);
        const saved = isSaved(originalIndex);
        return `<article class="pin" style="animation-delay:${Math.min(index * 35, 350)}ms">
          <div class="pin-image-wrap" data-open="${originalIndex}" tabindex="0" role="button" aria-label="View ${photo.title}">
            <img class="pin-image" src="${imageUrl(photo.photo)}" alt="${photo.title}" loading="lazy">
            <button class="save-button${saved ? " saved" : ""}" data-save="${originalIndex}">${saved ? "Saved" : "Save"}</button>
            <div class="pin-actions"><button class="icon-button" data-like="${originalIndex}" aria-label="Like ${photo.title}"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"></path></svg></button><button class="icon-button" data-more="${originalIndex}" aria-label="More options for ${photo.title}"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.7"></circle><circle cx="12" cy="12" r="1.7"></circle><circle cx="19" cy="12" r="1.7"></circle></svg></button></div>
          </div>
          <div class="pin-caption"><img class="creator-avatar" src="${imageUrl(photo.avatar, 96)}" alt=""><div class="caption-copy"><p class="pin-title">${photo.title}</p><p class="creator">${photo.creator}</p></div><button class="pin-more" data-more="${originalIndex}" aria-label="More options">•••</button></div>
        </article>`;
      }).join("");
      const rc = document.getElementById("result-count"); if (rc) rc.remove();
      document.getElementById("empty-state").style.display = filtered.length ? "none" : "block";
      grid.style.display = filtered.length ? "block" : "none";
    }

    function showToast(message) {
      const toast = document.getElementById("toast");
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 1900);
    }

    function syncDetailSave() {
      const b = document.getElementById("detail-save");
      const saved = activePhotoIndex >= 0 && isSaved(activePhotoIndex);
      b.classList.toggle("saved", saved);
      b.textContent = saved ? "Saved" : "Save";
      b.style.cssText = saved ? "opacity:1;transform:none;background:#111;color:#fff;border-radius:999px;padding:12px 18px;font-size:14px;" : "opacity:1;transform:none;border-radius:999px;padding:12px 18px;font-size:14px;";
    }

    function openDetails(index) {
      activePhoto = photos[index]; activePhotoIndex = index;
      document.getElementById("detail-image").src = imageUrl(activePhoto.photo, 1100);
      document.getElementById("detail-image").alt = activePhoto.title;
      document.getElementById("detail-title").textContent = activePhoto.title;
      document.getElementById("detail-description").textContent = activePhoto.description;
      document.getElementById("detail-avatar").src = imageUrl(activePhoto.avatar, 96);
      document.getElementById("detail-creator").textContent = activePhoto.creator;
      document.getElementById("detail-tags").innerHTML = activePhoto.tags.map((tag) => `<span class="tag">#${tag}</span>`).join("");
      const related = photos.filter((photo) => photo !== activePhoto && photo.category === activePhoto.category).slice(0, 4);
      document.getElementById("related-row").innerHTML = related.map((photo) => `<img src="${imageUrl(photo.photo, 160)}" alt="${photo.title}">`).join("");
      syncDetailSave();
      document.getElementById("modal").classList.add("open");
      document.body.classList.add("modal-open");
      document.getElementById("close-modal").focus();
    }

    function setAuthMode(mode) {
      authMode = mode;
      const login = mode === "login";
      document.getElementById("tab-login").classList.toggle("on", login);
      document.getElementById("tab-register").classList.toggle("on", !login);
      document.getElementById("name-field").style.display = login ? "none" : "grid";
      document.getElementById("auth-title").textContent = login ? "Welcome back" : "Welcome to Modeboard";
      document.getElementById("auth-sub").textContent = login ? "Log in to save looks and join the community." : "Sign up to save looks, comment and build boards.";
      document.getElementById("auth-submit").textContent = login ? "Log in" : "Sign up";
      document.getElementById("auth-switch-text").textContent = login ? "Not on Modeboard yet?" : "Already a member?";
      document.getElementById("auth-switch").textContent = login ? "Sign up" : "Log in";
      document.getElementById("auth-error").hidden = true;
    }
    function openAuth(mode = "login") { setAuthMode(mode); document.getElementById("auth-modal").classList.add("open"); document.body.classList.add("modal-open"); setTimeout(() => document.getElementById("auth-email").focus(), 60); }
    function closeAuth() { document.getElementById("auth-modal").classList.remove("open"); if (!document.getElementById("modal").classList.contains("open")) document.body.classList.remove("modal-open"); }

    renderCategories();
    renderPins();
    renderAuthArea();

    categoryList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      activeCategory = button.dataset.category;
      renderCategories();
      renderPins();
    });

    grid.addEventListener("click", (event) => {
      const save = event.target.closest("[data-save]");
      const like = event.target.closest("[data-like]");
      const more = event.target.closest("[data-more]");
      const pin = event.target.closest("[data-open]");
      if (save) { event.stopPropagation(); toggleSave(Number(save.dataset.save)); }
      else if (like) { event.stopPropagation(); if (!currentUser()) { openAuth("register"); showToast("Sign up to like looks"); } else { like.style.color = "var(--accent)"; showToast("Added to your likes"); } }
      else if (more) { event.stopPropagation(); showToast("More options coming soon"); }
      else if (pin) openDetails(Number(pin.dataset.open));
    });

    grid.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open]")) {
        event.preventDefault();
        openDetails(Number(event.target.dataset.open));
      }
    });

    search.addEventListener("input", () => { renderPins(); });
    document.getElementById("clear-search").addEventListener("click", () => { search.value = ""; search.focus(); renderPins(); });
    const scopeBtn = document.getElementById("scope-btn"); const scopeMenu = document.getElementById("scope-menu");
    scopeBtn.addEventListener("click", (e) => { e.stopPropagation(); scopeMenu.hidden = !scopeMenu.hidden; });
    scopeMenu.addEventListener("click", (e) => {
      const b = e.target.closest("[data-scope]"); if (!b) return;
      scopeBtn.innerHTML = `${b.dataset.scope} <span>▾</span>`;
      scopeMenu.querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
      scopeMenu.hidden = true; showToast(`Showing ${b.dataset.scope.toLowerCase()}`);
    });
    document.getElementById("filter-btn").addEventListener("click", (e) => { e.currentTarget.classList.toggle("on"); showToast("Filters: newest, saved and liked coming soon"); });

    function closeModal() {
      document.getElementById("modal").classList.remove("open");
      document.body.classList.remove("modal-open");
    }
    document.getElementById("close-modal").addEventListener("click", closeModal);
    document.getElementById("modal").addEventListener("click", (event) => { if (event.target.id === "modal") closeModal(); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
    document.getElementById("detail-save").addEventListener("click", () => { if (activePhotoIndex >= 0) toggleSave(activePhotoIndex); });
    document.getElementById("detail-like").addEventListener("click", () => { if (!currentUser()) { openAuth("register"); showToast("Sign up to like looks"); } else showToast("Added to your likes"); });
    document.getElementById("comment-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.getElementById("comment-input");
      if (!input.value.trim()) return;
      if (!currentUser()) { openAuth("login"); showToast("Log in to comment"); return; }
      const comment = document.createElement("span");
      comment.textContent = input.value.trim();
      document.getElementById("comment-list").append(comment);
      input.value = "";
      showToast("Note posted");
    });
    document.getElementById("auth-close").addEventListener("click", closeAuth);
    document.getElementById("auth-modal").addEventListener("click", (e) => { if (e.target.id === "auth-modal") closeAuth(); });
    document.getElementById("tab-login").addEventListener("click", () => setAuthMode("login"));
    document.getElementById("tab-register").addEventListener("click", () => setAuthMode("register"));
    document.getElementById("auth-switch").addEventListener("click", () => setAuthMode(authMode === "login" ? "register" : "login"));
    document.getElementById("auth-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("auth-email").value.trim().toLowerCase();
      const pass = document.getElementById("auth-password").value;
      const name = document.getElementById("auth-name").value.trim();
      const err = document.getElementById("auth-error");
      const fail = (m) => { err.textContent = m; err.hidden = false; };
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return fail("Enter a valid email address.");
      if (pass.length < 6) return fail("Password must be at least 6 characters.");
      const users = store.users();
      if (authMode === "register") {
        if (!name) return fail("Tell us your name so friends can find you.");
        if (users.some((u) => u.email === email)) return fail("That email already has an account. Try logging in.");
        const user = { name, email, pass: hash(pass), created: Date.now() };
        users.push(user); store.saveUsers(users); store.saveSession({ name, email });
        closeAuth(); renderAuthArea(); renderPins(); showToast(`Welcome to Modeboard, ${name.split(" ")[0]}!`);
      } else {
        const found = users.find((u) => u.email === email);
        if (!found || found.pass !== hash(pass)) return fail("Email or password didn't match. Try again or sign up.");
        store.saveSession({ name: found.name, email });
        closeAuth(); renderAuthArea(); renderPins(); showToast(`Welcome back, ${(found.name || "friend").split(" ")[0]}!`);
      }
      document.getElementById("auth-form").reset();
    });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeModal(); closeAuth(); const sm = document.getElementById("scope-menu"); if (sm) sm.hidden = true; } });
    document.body.addEventListener("click", (event) => {
      const el = event.target.closest("[data-action]");
      const action = el?.dataset.action;
      const um = document.getElementById("user-menu");
      if (!event.target.closest(".auth-area") && um) um.hidden = true;
      if (!event.target.closest(".search-pill")) document.getElementById("scope-menu").hidden = true;
      if (action === "login") openAuth("login");
      else if (action === "signup") openAuth("register");
      else if (action === "menu") { const m = document.getElementById("user-menu"); if (m) m.hidden = !m.hidden; }
      else if (action === "logout") { store.saveSession(null); renderAuthArea(); renderPins(); showToast("Logged out. See you soon!"); }
      else if (action === "profile" || action === "saved") {
        const u = currentUser();
        if (action === "saved" && u) {
          const ids = store.saved()[u.email] || [];
          showToast(ids.length ? `You have ${ids.length} saved look${ids.length > 1 ? "s" : ""}` : "No saved looks yet — tap Save on anything you love");
        } else showToast(u ? `Hi ${u.name.split(" ")[0]} — profile pages are coming soon` : "Log in to see your profile");
      }
      else if (action === "create") { if (!currentUser()) { openAuth("register"); showToast("Sign up to create your first board"); } else showToast("Your next moodboard starts here"); }
      else if (action === "home" || action === "explore") { document.querySelectorAll(".side-btn").forEach((b) => b.classList.toggle("is-active", b === el)); activeCategory = "All"; search.value = "fashion"; renderCategories(); renderPins(); window.scrollTo({ top: 0, behavior: "smooth" }); }
      else if (action === "messages") showToast(currentUser() ? "No new messages" : "Log in to message stylists");
      else if (action === "settings") showToast("Settings live here soon");
      else if (action === "notifications") showToast(currentUser() ? "You're all caught up" : "Log in to see notifications");
      else if (action === "visual-search" || action === "voice") showToast("Try typing — smart image + voice search is coming soon");
      else if (action === "shop") { event.preventDefault(); showToast("Shop links are coming soon"); }
    });
