    const categories = ["All styles", "Streetwear", "Vintage", "Minimalist", "Y2K", "Summer fits", "Formal wear"];
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
    let activeCategory = "All styles";
    let activePhoto = null;
    let toastTimer;

    function renderCategories() {
      categoryList.innerHTML = categories.map((category) => `<button class="category${category === activeCategory ? " active" : ""}" data-category="${category}" aria-pressed="${category === activeCategory}">${category}</button>`).join("");
    }

    function renderPins() {
      const query = search.value.trim().toLowerCase();
      const filtered = photos.filter((photo) => (activeCategory === "All styles" || photo.category.toLowerCase() === activeCategory.toLowerCase()) && (!query || `${photo.title} ${photo.creator} ${photo.category} ${photo.tags.join(" ")}`.toLowerCase().includes(query)));
      grid.innerHTML = filtered.map((photo, index) => {
        const originalIndex = photos.indexOf(photo);
        return `<article class="pin" style="animation-delay:${Math.min(index * 35, 350)}ms">
          <div class="pin-image-wrap" data-open="${originalIndex}" tabindex="0" role="button" aria-label="View ${photo.title}">
            <img class="pin-image" src="${imageUrl(photo.photo)}" alt="${photo.title}" loading="lazy">
            <button class="save-button" data-save="${originalIndex}">Save</button>
            <div class="pin-actions"><button class="icon-button" data-like="${originalIndex}" aria-label="Like ${photo.title}"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"></path></svg></button><button class="icon-button" data-more="${originalIndex}" aria-label="More options for ${photo.title}"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.7"></circle><circle cx="12" cy="12" r="1.7"></circle><circle cx="19" cy="12" r="1.7"></circle></svg></button></div>
          </div>
          <div class="pin-caption"><img class="creator-avatar" src="${imageUrl(photo.avatar, 96)}" alt=""><div class="caption-copy"><p class="pin-title">${photo.title}</p><p class="creator">${photo.creator}</p></div></div>
        </article>`;
      }).join("");
      document.getElementById("result-count").textContent = `${filtered.length} looks`;
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

    function openDetails(index) {
      activePhoto = photos[index];
      document.getElementById("detail-image").src = imageUrl(activePhoto.photo, 1100);
      document.getElementById("detail-image").alt = activePhoto.title;
      document.getElementById("detail-title").textContent = activePhoto.title;
      document.getElementById("detail-description").textContent = activePhoto.description;
      document.getElementById("detail-avatar").src = imageUrl(activePhoto.avatar, 96);
      document.getElementById("detail-creator").textContent = activePhoto.creator;
      document.getElementById("detail-tags").innerHTML = activePhoto.tags.map((tag) => `<span class="tag">#${tag}</span>`).join("");
      const related = photos.filter((photo) => photo !== activePhoto && photo.category === activePhoto.category).slice(0, 4);
      document.getElementById("related-row").innerHTML = related.map((photo) => `<img src="${imageUrl(photo.photo, 160)}" alt="${photo.title}">`).join("");
      document.getElementById("modal").classList.add("open");
      document.body.classList.add("modal-open");
      document.getElementById("close-modal").focus();
    }

    renderCategories();
    renderPins();

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
      if (save) { event.stopPropagation(); save.classList.add("saved"); save.textContent = "Saved"; showToast(`Saved to your board`); }
      else if (like) { event.stopPropagation(); like.style.color = "var(--accent)"; showToast("Added to your likes"); }
      else if (more) { event.stopPropagation(); showToast("More options coming soon"); }
      else if (pin) openDetails(Number(pin.dataset.open));
    });

    grid.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open]")) {
        event.preventDefault();
        openDetails(Number(event.target.dataset.open));
      }
    });

    search.addEventListener("input", () => {
      renderPins();
      const value = search.value.trim();
      suggestions.classList.toggle("open", value.length > 0);
      if (!value) return;
      const matching = categories.filter((category) => category.toLowerCase().includes(value.toLowerCase()) && category !== "All styles").slice(0, 3);
      const prompts = [value, ...matching].slice(0, 4);
      suggestions.innerHTML = `<div class="suggestion-label">Search inspiration</div>${prompts.map((item) => `<button class="suggestion" role="option" data-suggestion="${item}">⌕ &nbsp; ${item}</button>`).join("")}`;
    });
    suggestions.addEventListener("click", (event) => {
      const option = event.target.closest("[data-suggestion]");
      if (!option) return;
      const match = categories.find((category) => category.toLowerCase() === option.dataset.suggestion.toLowerCase());
      if (match) { activeCategory = match; renderCategories(); search.value = ""; }
      suggestions.classList.remove("open");
      renderPins();
    });
    document.addEventListener("click", (event) => { if (!event.target.closest(".search-wrap")) suggestions.classList.remove("open"); });

    function closeModal() {
      document.getElementById("modal").classList.remove("open");
      document.body.classList.remove("modal-open");
    }
    document.getElementById("close-modal").addEventListener("click", closeModal);
    document.getElementById("modal").addEventListener("click", (event) => { if (event.target.id === "modal") closeModal(); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
    document.getElementById("detail-save").addEventListener("click", () => showToast("Saved to your board"));
    document.getElementById("detail-like").addEventListener("click", () => showToast("Added to your likes"));
    document.getElementById("comment-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.getElementById("comment-input");
      if (!input.value.trim()) return;
      const comment = document.createElement("span");
      comment.textContent = input.value.trim();
      document.getElementById("comment-list").append(comment);
      input.value = "";
    });
    document.body.addEventListener("click", (event) => {
      const action = event.target.closest("[data-action]")?.dataset.action;
      if (action === "create") showToast("Your next moodboard starts here");
      if (action === "notifications") showToast("You’re all caught up");
      if (action === "shop") { event.preventDefault(); showToast("Shop links are coming soon"); }
    });
