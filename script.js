    const categories = ["2000s", "Outfits", "Streetwear", "90s", "Killa", "80s", "Women's", "Korean", "Vintage", "Minimalist", "Y2K", "Summer fits", "Formal wear"];
    const photos = [
      { title: "Sunday in the city", creator: "Maya Laurent", category: "Streetwear", photo: "./pictures/sunday in the city.avif", avatar: "./pictures/a little bit retro.avif", description: "Easy layers, good denim, and nowhere in particular to be. The best outfits always leave a little room for the day to surprise you.", tags: ["relaxed denim", "city uniform", "layering"] },
      { title: "Soft structure", creator: "Studio Sora", category: "Minimalist", photo: "./pictures/soft structure.avif", avatar: "./pictures/after dark.avif", description: "Clean lines with a softer point of view. A quiet palette lets the silhouette do the talking.", tags: ["minimal", "tailoring", "neutral"] },
      { title: "A little bit retro", creator: "Inez Ward", category: "Vintage", photo: "./pictures/a little bit retro.avif", avatar: "./pictures/air max era.avif", description: "Found-feeling pieces and a lived-in palette make this one feel collected, not constructed.", tags: ["vintage", "secondhand", "90s"] },
      { title: "Heatwave uniform", creator: "Lola James", category: "Summer fits", photo: "./pictures/heatwave uniform.avif", avatar: "./pictures/back graphic.avif", description: "The kind of outfit that belongs to a long, bright afternoon. Simple pieces, worn your own way.", tags: ["summer", "linen", "weekend"] },
      { title: "Off-duty, on point", creator: "Kai Morgan", category: "Streetwear", photo: "./pictures/off duty on point.avif", avatar: "./pictures/berry full skirt.avif", description: "An oversized layer and a sharp accessory make an everyday fit feel considered.", tags: ["street style", "oversized", "everyday"] },
      { title: "After dark", creator: "Nadia Vale", category: "Formal wear", photo: "./pictures/after dark.avif", avatar: "./pictures/bomber season.avif", description: "A little drama, a lot of confidence. Modern evening dressing with nothing extra to prove.", tags: ["evening", "occasion", "statement"] },
      { title: "Y2K, revisited", creator: "Zoe Park", category: "Y2K", photo: "./pictures/y2k revisted.avif", avatar: "./pictures/borrowed from him.avif", description: "Nostalgia without the costume. A playful nod to the era, styled for right now.", tags: ["y2k", "playful", "going out"] },
      { title: "Quiet weekend", creator: "Elise Nør", category: "Minimalist", photo: "./pictures/quiet weekend.avif", avatar: "./pictures/boutique hours.avif", description: "A thoughtful edit of everyday essentials in tactile fabrics and easy proportions.", tags: ["capsule", "everyday", "soft tailoring"] },
      { title: "The good jacket", creator: "Theo Wells", category: "Vintage", photo: "./pictures/the good jacket.avif", avatar: "./pictures/bow at work.avif", description: "One forever layer, worn until it feels like yours. Start with the jacket and build slowly.", tags: ["vintage find", "outerwear", "classic"] },
      { title: "Sunday market stroll", creator: "June Atelier", category: "Summer fits", photo: "./pictures/sunday market stroll.avif", avatar: "./pictures/camel commute.avif", description: "Lightweight, lived-in and ready for an unplanned detour. This is summer at its easiest.", tags: ["market day", "summer", "easy layers"] },
      { title: "New romantics", creator: "Mina Ellis", category: "Formal wear", photo: "./pictures/new romantics.avif", avatar: "./pictures/canadian tux.avif", description: "A softer take on occasion dressing, with delicate details against a grounded silhouette.", tags: ["occasion", "romantic", "modern classic"] },
      { title: "Color outside", creator: "Rae Kim", category: "Y2K", photo: "./pictures/color outside.avif", avatar: "./pictures/chambray classic.avif", description: "A fearless color story balanced by familiar, wearable shapes. Start with one piece you love.", tags: ["color", "y2k", "street style"] },
      { title: "Borrowed from him", creator: "Alex Rios", category: "Streetwear", photo: "./pictures/borrowed from him.avif", avatar: "./pictures/charms on.avif", description: "Loose, borrowed proportions with a few intentional details to bring the whole thing together.", tags: ["androgynous", "oversized", "streetwear"] },
      { title: "Sunday best, undone", creator: "Sofia Lane", category: "Vintage", photo: "./pictures/sunday best undone.avif", avatar: "./pictures/coffee run.avif", description: "Classic pieces feel more personal when you let them be a little imperfect.", tags: ["vintage", "classic", "personal style"] },
      { title: "The linen hour", creator: "Maya Laurent", category: "Summer fits", photo: "./pictures/the linen hour.avif", avatar: "./pictures/cold day formula.avif", description: "Linen, sun, and the freedom to keep the rest simple. An easy outfit worth repeating.", tags: ["linen", "summer", "slow mornings"] },
      { title: "Golden hour muse", creator: "Ava Chen", category: "Summer fits", photo: "./pictures/golden hour muse.avif", avatar: "./pictures/color outside.avif", description: "Sunglasses on, worries off. Sun-washed color that works from boardwalk to rooftop.", tags: ["summer", "golden hour", "muse"] },
      { title: "Denim days", creator: "Jonah Reed", category: "90s", photo: "./pictures/denim days.avif", avatar: "./pictures/cozy layers.avif", description: "Head-to-toe denim, worn in all the right places. A 90s uniform that still hits.", tags: ["denim", "90s", "casual"] },
      { title: "Rack edit", creator: "Studio Nord", category: "Minimalist", photo: "./pictures/rack edit.avif", avatar: "./pictures/crosswalk energy.avif", description: "A tight rack of neutrals and washed denim. Fewer, better pieces on repeat.", tags: ["rack", "capsule", "neutral"] },
      { title: "Store run", creator: "Remy Cole", category: "Streetwear", photo: "./pictures/boutique hours.avif", avatar: "./pictures/denim days.avif", description: "Workwear jackets, cargos and sneakers. Streetwear staples stacked wall to wall.", tags: ["store", "streetwear", "essentials"] },
      { title: "Street muse", creator: "Lena Park", category: "Korean", photo: "./pictures/street muse.avif", avatar: "./pictures/denim on denim.avif", description: "Seoul street style: clean sneakers, pleated skirt and an easy oversized blazer.", tags: ["korean", "street style", "preppy"] },
      { title: "Soft glam", creator: "Nina Rose", category: "Women's", photo: "./pictures/soft glam.avif", avatar: "./pictures/desk side denim.avif", description: "Glowy skin, brushed brows and a slick pony. Beauty that lets the outfit breathe.", tags: ["beauty", "glam", "soft"] },
      { title: "White tee ritual", creator: "Sam Baker", category: "Outfits", photo: "./pictures/white tee ritual.avif", avatar: "./pictures/double vision.avif", description: "The perfect white tee, jeans and nothing to prove. The everyday outfit formula.", tags: ["basics", "white tee", "outfits"] },
      { title: "Portrait in style", creator: "Noah Kim", category: "Outfits", photo: "./pictures/portrait in style.avif", avatar: "./pictures/editorial beige.avif", description: "Sharp tailoring, soft attitude. Menswear that balances classic and casual.", tags: ["menswear", "portrait", "tailoring"] },
      { title: "Field jacket season", creator: "Alex Ford", category: "Vintage", photo: "./pictures/field jacket season.avif", avatar: "./pictures/everything bag.avif", description: "A rugged field jacket over washed denim. Vintage workwear that ages well.", tags: ["jacket", "vintage", "menswear"] },
      { title: "Denim on denim", creator: "Chloe Kim", category: "Korean", photo: "./pictures/denim on denim.avif", avatar: "./pictures/field jacket season.avif", description: "Double denim with a cropped jacket. K-style casual with clean sneakers.", tags: ["denim", "korean", "casual"] },
      { title: "Editorial beige", creator: "Ivy Studio", category: "Women's", photo: "./pictures/editorial beige.avif", avatar: "./pictures/flanner hours.avif", description: "Beige trench, gold hoops, slick bun. Quiet luxury for running the city.", tags: ["editorial", "beige", "trench"] },
      { title: "Linen and light", creator: "Ella Moss", category: "Summer fits", photo: "./pictures/linen and light.avif", avatar: "./pictures/flatlay friday.avif", description: "Barefoot in linen on a bright day. Summer dressing at its softest.", tags: ["linen", "summer", "dress"] },
      { title: "Night out set", creator: "Zoe Park", category: "Y2K", photo: "./pictures/night out set.avif", avatar: "./pictures/gingham fields.avif", description: "Wind-tossed hair and a black top. The night, captured in monochrome.", tags: ["y2k", "night out", "denim"] },
      { title: "Cozy layers", creator: "Elise Nor", category: "Minimalist", photo: "./pictures/cozy layers.avif", avatar: "./pictures/golden hour muse.avif", description: "Knit on knit, in soft grays. A cozy capsule you will live in all week.", tags: ["knit", "cozy", "capsule"] },
      { title: "Air Max era", creator: "Kai Morgan", category: "2000s", photo: "./pictures/air max era.avif", avatar: "./pictures/grey drape.avif", description: "Chunky runners and a low stance. The 2000s sneaker that never really left.", tags: ["2000s", "sneakers", "air max"] },
      { title: "Wheat-season runners", creator: "Theo Wells", category: "2000s", photo: "./pictures/air max era.avif", avatar: "./pictures/heatwave uniform.avif", description: "Tonal suede high-tops on golden fabric. Basketball energy, street polish.", tags: ["2000s", "sneakers", "suede"] },
      { title: "Low-rise rules", creator: "Rae Kim", category: "2000s", photo: "./pictures/low rise rules.avif", avatar: "./pictures/hood under denim.avif", description: "Distressed denim and a carefree pose. The 2000s silhouette, worn loud.", tags: ["2000s", "denim", "low rise"] },
      { title: "Bomber season", creator: "Alex Rios", category: "2000s", photo: "./pictures/bomber season.avif", avatar: "./pictures/hood up.avif", description: "Red hoodie under a flight bomber and dark shades. Subtlety was optional.", tags: ["2000s", "bomber", "street"] },
      { title: "Primary colors", creator: "Studio Nord", category: "2000s", photo: "./pictures/primary colirs.avif", avatar: "./pictures/linen and light.avif", description: "Reds, yellows and blues racked to the ceiling. Maximal wardrobes, zero restraint.", tags: ["2000s", "color", "rack"] },
      { title: "The denim wall", creator: "Remy Cole", category: "2000s", photo: "./pictures/the denim wall.avif", avatar: "./pictures/low rise rules.avif", description: "Every wash from pale to raw, stacked floor to ceiling. Denim shopping as a sport.", tags: ["2000s", "denim", "shopping"] },
      { title: "Main character", creator: "Kai Morgan", category: "Killa", photo: "./pictures/main character.avif", avatar: "./pictures/main character.avif", description: "Cognac leather, black shades and all the confidence in the room.", tags: ["killa", "leather", "statement"] },
      { title: "Sequin sisters", creator: "Zoe Park", category: "Killa", photo: "./pictures/sequin sisters.avif", avatar: "./pictures/midnight suit.avif", description: "Matching red sequins for the night that needed remembering.", tags: ["killa", "sequin", "night out"] },
      { title: "Hood up", creator: "Lena Park", category: "Killa", photo: "./pictures/hood up.avif", avatar: "./pictures/new romantics.avif", description: "Grey hoodie, hard striped lines, zero apologies.", tags: ["killa", "hoodie", "street"] },
      { title: "Peace out", creator: "Alex Rios", category: "Killa", photo: "./pictures/peace out.avif", avatar: "./pictures/night out set.avif", description: "Black tee, graphic front, instant attitude.", tags: ["killa", "graphic tee", "street"] },
      { title: "Crosswalk energy", creator: "Lena Park", category: "Killa", photo: "./pictures/crosswalk energy.avif", avatar: "./pictures/off duty on point.avif", description: "Printed coat, rust trousers and red shoes mid-stride. The street is the runway.", tags: ["killa", "street style", "outerwear"] },
      { title: "Back graphic", creator: "Remy Cole", category: "Killa", photo: "./pictures/back graphic.avif", avatar: "./pictures/orchid gown.avif", description: "The print says it best from behind. Cap on, headphones in.", tags: ["killa", "graphic tee", "summer"] },
      { title: "Power blouse", creator: "Inez Ward", category: "80s", photo: "./pictures/power blouse.avif", avatar: "./pictures/peace out.avif", description: "White ruffles, high-waist buttons and oversized shades. Boardroom boss energy.", tags: ["80s", "blouse", "power dressing"] },
      { title: "Bow at work", creator: "Sofia Lane", category: "80s", photo: "./pictures/bow at work.avif", avatar: "./pictures/plum hour.avif", description: "A black bow over white poplin. Prep school meets the corner office.", tags: ["80s", "preppy", "shirt"] },
      { title: "Berry full skirt", creator: "Ella Moss", category: "80s", photo: "./pictures/berry full skirt.avif", avatar: "./pictures/portrait in style.avif", description: "Deep berry buttons and a skirt with volume. Ladylike, with shoulders back.", tags: ["80s", "midi", "color"] },
      { title: "Gingham fields", creator: "Lola James", category: "80s", photo: "./pictures/gingham fields.avif", avatar: "./pictures/power blouse.avif", description: "Red gingham catching wind in tall grass. Picnic glamour, amplified.", tags: ["80s", "gingham", "summer"] },
      { title: "Plum hour", creator: "Nadia Vale", category: "80s", photo: "./pictures/plum hour.avif", avatar: "./pictures/primary colirs.avif", description: "Plum lace with strategic cut-outs. Evening dressing with nerve.", tags: ["80s", "lace", "evening"] },
      { title: "Red sweep", creator: "Mina Ellis", category: "80s", photo: "./pictures/red sweep.avif", avatar: "./pictures/quiet rail.avif", description: "A crimson skirt moving like water. Drama, cut on the bias.", tags: ["80s", "gown", "statement"] },
      { title: "Hood under denim", creator: "Lena Park", category: "90s", photo: "./pictures/hood under denim.avif", avatar: "./pictures/quiet weekend.avif", description: "Grey hoodie under light-wash denim, blue wall optional. Recess never ended.", tags: ["90s", "denim", "layering"] },
      { title: "Chambray classic", creator: "Jonah Reed", category: "90s", photo: "./pictures/chambray classic.avif", avatar: "./pictures/rack edit.avif", description: "One soft chambray shirt on a wooden hanger. Wardrobe staple, no notes.", tags: ["90s", "chambray", "essentials"] },
      { title: "Trucker jacket", creator: "Theo Wells", category: "90s", photo: "./pictures/trucker jacket.avif", avatar: "./pictures/red sweep.avif", description: "Cord-collar denim against black. The 90s trucker, still undefeated.", tags: ["90s", "denim", "jacket"] },
      { title: "Canadian tux", creator: "Noah Kim", category: "90s", photo: "./pictures/canadian tux.avif", avatar: "./pictures/rose garden.avif", description: "Denim jacket over denim, hand in pocket. When in doubt, double it up.", tags: ["90s", "denim", "menswear"] },
      { title: "Flannel hours", creator: "Jonah Reed", category: "90s", photo: "./pictures/flanner hours.avif", avatar: "./pictures/scarf season.avif", description: "Plaid flannel and thick frames over coffee. Grunge grew up politely.", tags: ["90s", "flannel", "grunge"] },
      { title: "Midnight suit", creator: "Noah Kim", category: "Formal wear", photo: "./pictures/midnight suit.avif", avatar: "./pictures/sequin sisters.avif", description: "All-black tailoring with a slim tie. Quiet formality, done right.", tags: ["formal", "suit", "evening"] },
      { title: "Stripe play", creator: "Marcus Hale", category: "Formal wear", photo: "./pictures/stripe play.avif", avatar: "./pictures/soft glam.avif", description: "Navy worsted, striped tie, adjusting the cuff. Boardroom ready.", tags: ["formal", "suit", "menswear"] },
      { title: "Orchid gown", creator: "Mina Ellis", category: "Formal wear", photo: "./pictures/orchid gown.avif", avatar: "./pictures/soft structure.avif", description: "Off-shoulder plum satin on a violet backdrop. Red-carpet posture.", tags: ["formal", "gown", "occasion"] },
      { title: "Windowpane check", creator: "Theo Wells", category: "Formal wear", photo: "./pictures/stripe play.avif", avatar: "./pictures/stairway to summer.avif", description: "A blue plaid three-piece, hands on the lapels. Old-school tailoring, modern fit.", tags: ["formal", "suit", "tailoring"] },
      { title: "Flatlay Friday", creator: "Sam Baker", category: "Outfits", photo: "./pictures/flatlay friday.avif", avatar: "./pictures/street muse.avif", description: "Boots, belt and grey trousers laid flat. The outfit before the outfit.", tags: ["outfits", "flatlay", "menswear"] },
      { title: "Wardrobe reset", creator: "Elise Nør", category: "Outfits", photo: "./pictures/wardrobe reset.avif", avatar: "./pictures/stripe play.avif", description: "Knit, denim and tulips on white linen. A soft start to the week.", tags: ["outfits", "flatlay", "neutral"] },
      { title: "Desk-side denim", creator: "Ivy Studio", category: "Outfits", photo: "./pictures/desk side denim.avif", avatar: "./pictures/sunday best undone.avif", description: "White rib tank, light jeans and heels. The lunch-break outfit formula.", tags: ["outfits", "denim", "basics"] },
      { title: "Cold-day formula", creator: "June Atelier", category: "Outfits", photo: "./pictures/cold day formula.avif", avatar: "./pictures/sunday in the city.avif", description: "Cream knit, blue jeans and suede booties, folded and ready.", tags: ["outfits", "flatlay", "knit"] },
      { title: "Double vision", creator: "Ivy Studio", category: "Women's", photo: "./pictures/double vision.avif", avatar: "./pictures/sunday market stroll.avif", description: "Tonal layers on repeat, photographed from above. Dress like a duo.", tags: ["women's", "editorial", "tonal"] },
      { title: "Rose garden", creator: "Ella Moss", category: "Women's", photo: "./pictures/rose garden.avif", avatar: "./pictures/teal door.avif", description: "A red wrap top among the blooms. Romance, worn casually.", tags: ["women's", "floral", "day"] },
      { title: "Terracotta glow", creator: "Nina Rose", category: "Women's", photo: "./pictures/terracotta glow.avif", avatar: "./pictures/ten white shirts.avif", description: "Burnt-orange knit and loose waves. Warm tones for cooler days.", tags: ["women's", "color", "portrait"] },
      { title: "Grey drape", creator: "Studio Sora", category: "Women's", photo: "./pictures/grey drape.avif", avatar: "./pictures/terracotta glow.avif", description: "One sculptural shoulder in dove grey. Minimal drama, maximum line.", tags: ["women's", "drape", "minimal"] },
      { title: "Camel commute", creator: "Chloe Kim", category: "Korean", photo: "./pictures/camel commute.avif", avatar: "./pictures/the denim wall.avif", description: "Belted camel coat on stone steps. Seoul layers, softly structured.", tags: ["korean", "coat", "street style"] },
      { title: "Coffee run", creator: "Lena Park", category: "Korean", photo: "./pictures/coffee run.avif", avatar: "./pictures/the good jacket.avif", description: "Straight-leg jeans and a fitted top, nothing loud. Off-duty, on point.", tags: ["korean", "denim", "everyday"] },
      { title: "Teal door", creator: "Rae Kim", category: "Korean", photo: "./pictures/teal door.avif", avatar: "./pictures/the linen hour.avif", description: "Grey mini dress against a teal door. Playful proportions, clean palette.", tags: ["korean", "dress", "street"] },
      { title: "Scarf season", creator: "Chloe Kim", category: "Korean", photo: "./pictures/scarf season.avif", avatar: "./pictures/trail tee.avif", description: "Camel overcoat, checked scarf, leather strap bag. Refined layering.", tags: ["korean", "outerwear", "classic"] },
      { title: "Bubblegum runners", creator: "Zoe Park", category: "Y2K", photo: "./pictures/air max era.avif", avatar: "./pictures/treasure hunting.avif", description: "Pastel sneakers on pastel plinths. Sweet, loud, unmistakably Y2K.", tags: ["y2k", "sneakers", "pastel"] },
      { title: "Everything bag", creator: "Zoe Park", category: "Y2K", photo: "./pictures/everything bag.avif", avatar: "./pictures/trucker jacket.avif", description: "Quilted bag, gold hoops and gloss laid flat. Night-out essentials.", tags: ["y2k", "accessories", "going out"] },
      { title: "Charms on", creator: "Rae Kim", category: "Y2K", photo: "./pictures/charms on.avif", avatar: "./pictures/wardrobe reset.avif", description: "A white backpack with shiny bits and charms. School-run nostalgia.", tags: ["y2k", "accessories", "bag"] },
      { title: "Ten white shirts", creator: "Studio Nord", category: "Minimalist", photo: "./pictures/ten white shirts.avif", avatar: "./pictures/white tee ritual.avif", description: "A rail of white shirts, all slightly different. Choose your own uniform.", tags: ["minimalist", "shirts", "capsule"] },
      { title: "Quiet rail", creator: "Studio Nord", category: "Minimalist", photo: "./pictures/quiet rail.avif", avatar: "./pictures/y2k revisted.avif", description: "Oatmeal, bone and sand hanging with pampas. Neutrals all the way down.", tags: ["minimalist", "neutral", "rack"] },
      { title: "Treasure hunting", creator: "June Atelier", category: "Vintage", photo: "./pictures/treasure hunting.avif", avatar: "./pictures/a little bit retro.avif", description: "Hands rifling a rack of prints and knits. The joy is in the dig.", tags: ["vintage", "thrifting", "rack"] },
      { title: "Boutique hours", creator: "Studio Nord", category: "Vintage", photo: "./pictures/boutique hours.avif", avatar: "./pictures/after dark.avif", description: "Warm light, hanging rails and slow browsing. Small-shop charm.", tags: ["vintage", "boutique", "shopping"] },
      { title: "Laydown basics", creator: "Sam Baker", category: "Streetwear", photo: "./pictures/flatlay friday.avif", avatar: "./pictures/air max era.avif", description: "Grey denim, black tee and white sneakers, flat on dark. The starter pack.", tags: ["streetwear", "flatlay", "essentials"] },
      { title: "Trail tee", creator: "Kai Morgan", category: "Streetwear", photo: "./pictures/trail tee.avif", avatar: "./pictures/back graphic.avif", description: "White tee and cap against big sky. Breezy and unbothered.", tags: ["streetwear", "tee", "outdoor"] },
      { title: "Stairway to summer", creator: "Sofia Lane", category: "Summer fits", photo: "./pictures/stairway to summer.avif", avatar: "./pictures/berry full skirt.avif", description: "A white eyelet dress on painted steps. Sunshine, but make it lace.", tags: ["summer", "dress", "white"] }
    ];
    const categoryList = document.getElementById("categories");
    const grid = document.getElementById("masonry");
    const search = document.getElementById("search");
    const suggestions = document.getElementById("suggestions");
    let activeCategory = "All";
    let activeView = "home";
    let activePhoto = null;
    let activePhotoKey = null;
    let toastTimer;
    let authMode = "login";
    let pendingPhotoKey = null;
    const store = {
      users() { try { return JSON.parse(localStorage.getItem("modeboard_users") || "[]"); } catch { return []; } },
      saveUsers(u) { localStorage.setItem("modeboard_users", JSON.stringify(u)); },
      session() { return JSON.parse(localStorage.getItem("modeboard_session") || "null"); },
      saveSession(s) { s ? localStorage.setItem("modeboard_session", JSON.stringify(s)) : localStorage.removeItem("modeboard_session"); },
      saved() { try { return JSON.parse(localStorage.getItem("modeboard_saved") || "{}"); } catch { return {}; } },
      saveSaved(s) { localStorage.setItem("modeboard_saved", JSON.stringify(s)); },
      posts() { try { return JSON.parse(localStorage.getItem("modeboard_posts") || "[]"); } catch { return []; } },
      savePosts(p) { try { localStorage.setItem("modeboard_posts", JSON.stringify(p)); return true; } catch { showToast("That photo is too large to keep in this browser."); return false; } }
    };
    const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    const avatarFor = (name) => {
      const initial = (String(name || "M").trim().charAt(0) || "M").toUpperCase();
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="32" fill="#1a7a33"/><text x="32" y="42" font-family="Georgia,serif" font-size="30" font-weight="bold" fill="#ffffff" text-anchor="middle">${initial}</text></svg>`;
      return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
    };
    const feedPosts = () => store.posts().slice().sort((a, b) => (a.created || 0) - (b.created || 0)).map((p) => ({
      id: p.id, mine: true, title: p.title || "Untitled look", creator: p.ownerName || "Moodboard member",
      category: p.category || "Outfits", photo: p.photo, avatar: avatarFor(p.ownerName),
      description: p.description || "", tags: Array.isArray(p.tags) ? p.tags : []
    }));
    window.Moodboard = { photos };
    const allPhotos = () => photos.concat(feedPosts());
    const photoKey = (photo, idx) => (photo && photo.mine ? "mine:" + photo.id : String(idx));
    function findPhoto(key) {
      const k = String(key);
      if (k.startsWith("mine:")) { const id = k.slice(5); return allPhotos().find((p) => p.mine && String(p.id) === id) || null; }
      const i = Number(k);
      if (!Number.isFinite(i) || i < 0 || i >= photos.length) return null;
      return photos[i];
    }
    const currentUser = () => store.session();
    const hash = (s) => btoa(unescape(encodeURIComponent("salt:" + s))).slice(0, 32);
    const catThumb = (c) => { const p = photos.find((x) => x.category.toLowerCase() === String(c).toLowerCase()) || photos[c.length % photos.length]; return p.photo; };

    function renderCategories() {
      categoryList.innerHTML = categories.map((category) => `<button class="category${category === activeCategory ? " active" : ""}" data-category="${category}" aria-pressed="${category === activeCategory}"><img class="cat-thumb" src="${catThumb(category)}" alt="" loading="lazy" draggable="false"><span class="cat-label">${category}</span></button>`).join("");
      updateCatArrows();
    }

    const META_KEY = "modeboard_saved_meta";
    const readSavedMeta = () => { try { return JSON.parse(localStorage.getItem(META_KEY) || "{}"); } catch { return {}; } };
    const writeSavedMeta = (m) => { try { localStorage.setItem(META_KEY, JSON.stringify(m)); } catch { /* quota: thumbs still render from posts */ } };
    function isSaved(key) { const u = currentUser(); if (!u) return false; return (store.saved()[u.email] || []).map(String).includes(String(key)); }
    function toggleSave(key) {
      key = String(key);
      const u = currentUser();
      if (!u) { openAuth("register"); showToast("Sign up to save this look"); return false; }
      const all = store.saved(); const list = new Set((all[u.email] || []).map(String));
      const meta = readSavedMeta();
      if (list.has(key)) { list.delete(key); delete meta[key]; }
      else { list.add(key); const snap = findPhoto(key); if (snap) meta[key] = { title: snap.title, photo: snap.photo, category: snap.category }; }
      all[u.email] = [...list]; store.saveSaved(all); writeSavedMeta(meta); renderPins(); syncDetailSave();
      showToast(list.has(key) ? "Saved to your board" : "Removed from your board");
      return list.has(key);
    }

    function getSavedIds() { const u = currentUser(); if (!u) return []; return (store.saved()[u.email] || []).map(String); }

    function showSaved() {
      const u = currentUser();
      if (!u) { openAuth("login"); showToast("Log in to see your saved looks"); return; }
      activeView = "saved";
      document.getElementById("user-menu").hidden = true;
      renderPins();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function goHome() {
      activeView = "home";
      activeCategory = "All"; search.value = "";
      renderCategories(); renderPins();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function renderAuthArea() {
      const u = currentUser(); const box = document.getElementById("auth-area");
      document.body.classList.toggle("logged-in", !!u);
      if (!u) { box.innerHTML = `<button class="btn-login" data-action="login">Log in</button><button class="btn-signup" data-action="signup">Sign up</button>`; return; }
      const initial = (u.name || u.email || "M").trim().charAt(0).toUpperCase();
      box.innerHTML = `<button class="avatar-btn" data-action="menu" aria-label="Account"><span class="avatar-fallback">${initial}</span><span>▾</span></button>
      <div class="user-menu" id="user-menu" hidden><div class="user-head"><span class="avatar-fallback">${initial}</span><div><b>${u.name || "Moodboard member"}</b><small>${u.email}</small></div></div>
      <button data-action="profile">View profile</button><button data-action="logout">Log out</button></div>`;
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
      const savedIds = new Set(getSavedIds());
      const inSavedView = activeView === "saved";
      document.getElementById("saved-header").hidden = !inSavedView;
      document.querySelector(".filter-row").style.display = inSavedView ? "none" : "";
      let list = allPhotos().map((photo, idx) => ({ photo, key: photoKey(photo, idx) }));
      if (inSavedView) list = list.filter(({ key }) => savedIds.has(key));
      else list = list.filter(({ photo }) => inScope(photo));
      const filtered = list.filter(({ photo }) => (!query || query === "fashion" || `${photo.title} ${photo.creator} ${photo.category} ${photo.tags.join(" ")}`.toLowerCase().includes(query)));
      const countEl = document.getElementById("saved-count");
      if (countEl) countEl.textContent = `${savedIds.size} saved look${savedIds.size === 1 ? "" : "s"}`;
      const emptyTitle = document.querySelector("#empty-state strong");
      const emptyText = document.getElementById("empty-text");
      if (inSavedView) {
        if (emptyTitle) emptyTitle.textContent = query ? "No saved looks match that search." : "No saved looks yet.";
        if (emptyText) emptyText.textContent = query ? "Try a different search, or explore more looks to save." : "Tap Save on anything you love and it will live here.";
      } else {
        if (emptyTitle) emptyTitle.textContent = "No looks found just yet.";
        if (emptyText) emptyText.textContent = "Try another search or category.";
      }
      grid.innerHTML = filtered.map(({ photo, key: originalKey }, index) => {
        const saved = isSaved(originalKey);
        const safeTitle = esc(photo.title); const safeCreator = esc(photo.creator);
        return `<article class="pin" style="animation-delay:${Math.min(index * 35, 350)}ms">
          <div class="pin-image-wrap" data-open="${esc(originalKey)}" tabindex="0" role="button" aria-label="View ${safeTitle}">
            <img class="pin-image" src="${esc(photo.photo)}" alt="${safeTitle}" loading="lazy">
            <button class="save-button${saved ? " saved" : ""}" data-save="${esc(originalKey)}">${saved ? "Saved" : "Save"}</button>
            <div class="pin-actions"><button class="icon-button" data-like="${esc(originalKey)}" aria-label="Like ${safeTitle}"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"></path></svg></button><button class="icon-button" data-more="${esc(originalKey)}" aria-label="More options for ${safeTitle}"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.7"></circle><circle cx="12" cy="12" r="1.7"></circle><circle cx="19" cy="12" r="1.7"></circle></svg></button></div>
          </div>
          <div class="pin-caption"><img class="creator-avatar" src="${esc(photo.avatar)}" alt=""><div class="caption-copy"><p class="pin-title">${safeTitle}</p><p class="creator">${safeCreator}</p></div><button class="pin-more" data-more="${esc(originalKey)}" aria-label="More options">•••</button></div>
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
      const saved = activePhotoKey != null && isSaved(activePhotoKey);
      b.classList.toggle("saved", saved);
      b.textContent = saved ? "Saved" : "Save";
      b.style.cssText = saved ? "opacity:1;transform:none;background:#111d13;color:#fff;border-radius:999px;padding:12px 18px;font-size:14px;" : "opacity:1;transform:none;border-radius:999px;padding:12px 18px;font-size:14px;";
    }

    function openDetails(key) {
      activePhoto = findPhoto(key); activePhotoKey = activePhoto ? String(key) : null;
      if (!activePhoto) return;
      document.getElementById("detail-image").src = activePhoto.photo;
      document.getElementById("detail-image").alt = activePhoto.title;
      document.getElementById("detail-title").textContent = activePhoto.title;
      document.getElementById("detail-description").textContent = activePhoto.description;
      document.getElementById("detail-avatar").src = activePhoto.avatar;
      document.getElementById("detail-creator").textContent = activePhoto.creator;
      document.getElementById("detail-tags").innerHTML = activePhoto.tags.map((tag) => `<span class="tag">#${esc(tag)}</span>`).join("");
      const related = allPhotos().filter((photo) => photo !== activePhoto && photo.category === activePhoto.category).slice(0, 4);
      document.getElementById("related-row").innerHTML = related.map((photo) => `<img src="${photo.photo}" alt="${photo.title}">`).join("");
      syncDetailSave();
      document.getElementById("modal").classList.add("open");
      document.body.classList.add("modal-open");
      document.getElementById("close-modal").focus();
    }

    function setAuthMode(mode, options = {}) {
      authMode = mode;
      const login = mode === "login";
      document.getElementById("tab-login").classList.toggle("on", login);
      document.getElementById("tab-register").classList.toggle("on", !login);
      document.getElementById("name-field").style.display = login ? "none" : "grid";
      document.getElementById("auth-title").textContent = login ? "Welcome back" : "Welcome to Moodboard";
      document.getElementById("auth-sub").textContent = options.message || (login ? "Log in to save looks and join the community." : "Sign up to save looks, comment and build boards.");
      document.getElementById("auth-submit").textContent = login ? "Log in" : "Sign up";
      document.getElementById("auth-switch-text").textContent = login ? "Not on Moodboard yet?" : "Already a member?";
      document.getElementById("auth-switch").textContent = login ? "Sign up" : "Log in";
      document.getElementById("auth-error").hidden = true;
    }
    const GATE_MESSAGE = "Log in or create an account to view the full details and main picture.";
    function openAuth(mode = "login", options = {}) { setAuthMode(mode, options); document.getElementById("auth-modal").classList.add("open"); document.body.classList.add("modal-open"); setTimeout(() => document.getElementById("auth-email").focus(), 60); }
    function closeAuth(manual = true) { document.getElementById("auth-modal").classList.remove("open"); if (!document.getElementById("modal").classList.contains("open")) document.body.classList.remove("modal-open"); if (manual) pendingPhotoKey = null; }
    function handleAuthSuccess(message) {
      closeAuth(false); renderAuthArea(); renderPins();
      showToast(message);
      document.getElementById("auth-form").reset();
      if (pendingPhotoKey != null && findPhoto(pendingPhotoKey)) {
        const next = pendingPhotoKey;
        pendingPhotoKey = null;
        openDetails(next);
      } else {
        pendingPhotoKey = null;
      }
    }

    function requestPhotoAccess(key) {
      const photo = findPhoto(key);
      if (!photo) return false;
      if (currentUser()) { pendingPhotoKey = null; openDetails(String(key)); return true; }
      pendingPhotoKey = String(key);
      openAuth("register", { message: GATE_MESSAGE });
      showToast("Log in or sign up to view this look");
      return false;
    }

    renderCategories();
    renderPins();
    renderAuthArea();

    /* Horizontal category scroller: arrow buttons + drag-to-scroll */
    function updateCatArrows() {
      const prev = document.getElementById("cat-prev");
      const next = document.getElementById("cat-next");
      if (!prev || !next || !categoryList) return;
      const max = categoryList.scrollWidth - categoryList.clientWidth;
      const atStart = categoryList.scrollLeft <= 2;
      const atEnd = categoryList.scrollLeft >= max - 2;
      prev.disabled = atStart; next.disabled = atEnd;
      prev.style.visibility = atStart && max > 0 ? "hidden" : "visible";
      next.style.visibility = atEnd ? "hidden" : "visible";
    }
    function scrollCats(dir) { categoryList.scrollBy({ left: dir * Math.max(categoryList.clientWidth * 0.7, 220), behavior: "smooth" }); }
    document.getElementById("cat-prev").addEventListener("click", () => scrollCats(-1));
    document.getElementById("cat-next").addEventListener("click", () => scrollCats(1));
    categoryList.addEventListener("scroll", updateCatArrows, { passive: true });
    window.addEventListener("resize", updateCatArrows);
    (function enableCatDrag() {
      let down = false, startX = 0, startLeft = 0, moved = false;
      categoryList.addEventListener("pointerdown", (e) => { down = true; moved = false; startX = e.clientX; startLeft = categoryList.scrollLeft; });
      categoryList.addEventListener("pointermove", (e) => {
        if (!down) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 6) { moved = true; categoryList.scrollLeft = startLeft - dx; }
      });
      ["pointerup", "pointercancel", "pointerleave"].forEach((ev) => categoryList.addEventListener(ev, () => { down = false; }));
      categoryList.addEventListener("click", (e) => { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
    })();
    window.addEventListener("storage", (e) => { if (e.key === "modeboard_posts") renderPins(); });

    document.getElementById("auth-area").addEventListener("click", (event) => {
      const button = event.target.closest('[data-action="login"], [data-action="signup"]');
      if (!button) return;
      event.stopPropagation();
      pendingPhotoKey = null;
      openAuth(button.dataset.action === "signup" ? "register" : "login");
    });

    categoryList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      activeView = "home";
      activeCategory = button.dataset.category;
      renderCategories();
      renderPins();
    });

    document.getElementById("back-home").addEventListener("click", goHome);
    document.getElementById("exit-saved").addEventListener("click", goHome);

    grid.addEventListener("click", (event) => {
      const save = event.target.closest("[data-save]");
      const like = event.target.closest("[data-like]");
      const more = event.target.closest("[data-more]");
      const pin = event.target.closest("[data-open]");
      if (save) { event.stopPropagation(); toggleSave(save.dataset.save); }
      else if (like) { event.stopPropagation(); if (!currentUser()) { openAuth("register"); showToast("Sign up to like looks"); } else { like.style.color = "var(--accent)"; showToast("Added to your likes"); } }
      else if (more) { event.stopPropagation(); showToast("More options coming soon"); }
      else if (pin && !event.target.closest('header, .topbar, button, a, input, select, textarea, [contenteditable="true"], [role="link"], [role="button"]:not([data-open])')) requestPhotoAccess(pin.dataset.open);
    });

    grid.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open]")) {
        event.preventDefault();
        requestPhotoAccess(event.target.dataset.open);
      }
    });

    search.addEventListener("input", () => { renderPins(); });
    document.getElementById("clear-search").addEventListener("click", () => { search.value = ""; search.focus(); renderPins(); });
    document.getElementById("filter-btn").addEventListener("click", (e) => { e.currentTarget.classList.toggle("on"); showToast("Filters: newest, saved and liked coming soon"); });

    function closeModal() {
      document.getElementById("modal").classList.remove("open");
      document.body.classList.remove("modal-open");
    }
    document.getElementById("close-modal").addEventListener("click", closeModal);
    document.getElementById("modal").addEventListener("click", (event) => { if (event.target.id === "modal") closeModal(); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
    document.getElementById("detail-save").addEventListener("click", () => { if (activePhotoKey != null) toggleSave(activePhotoKey); });
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
    document.getElementById("auth-close").addEventListener("click", () => closeAuth());
    document.getElementById("auth-modal").addEventListener("click", (e) => { if (e.target.id === "auth-modal") closeAuth(); });
    document.getElementById("tab-login").addEventListener("click", () => setAuthMode("login", pendingPhotoKey != null ? { message: GATE_MESSAGE } : {}));
    document.getElementById("tab-register").addEventListener("click", () => setAuthMode("register", pendingPhotoKey != null ? { message: GATE_MESSAGE } : {}));
    document.getElementById("auth-switch").addEventListener("click", () => setAuthMode(authMode === "login" ? "register" : "login", pendingPhotoKey != null ? { message: GATE_MESSAGE } : {}));
    document.getElementById("auth-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("auth-email").value.trim().toLowerCase();
      const pass = document.getElementById("auth-password").value;
      const name = document.getElementById("auth-name").value.trim();
      const err = document.getElementById("auth-error");
      const fail = (m) => { err.textContent = m; err.hidden = false; };
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return fail("Enter a valid email address.");
      if (pass.length < 8 || pass.length > 12) return fail("Password must be between 8 and 12 characters.");
      const users = store.users();
      if (authMode === "register") {
        if (!name) return fail("Tell us your name so friends can find you.");
        if (users.some((u) => u.email === email)) return fail("That email already has an account. Try logging in.");
        const user = { name, email, pass: hash(pass), created: Date.now() };
        users.push(user); store.saveUsers(users); store.saveSession({ name, email });
        handleAuthSuccess(`Welcome to Moodboard, ${name.split(" ")[0]}!`);
      } else {
        const found = users.find((u) => u.email === email);
        if (!found || found.pass !== hash(pass)) return fail("Email or password didn't match. Try again or sign up.");
        store.saveSession({ name: found.name, email });
        handleAuthSuccess(`Welcome back, ${(found.name || "friend").split(" ")[0]}!`);
      }
    });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeModal(); closeAuth(); } });
    document.body.addEventListener("click", (event) => {
      const el = event.target.closest("[data-action]");
      const action = el?.dataset.action;
      const um = document.getElementById("user-menu");
      if (!event.target.closest(".auth-area") && um) um.hidden = true;
      if (action === "login") { pendingPhotoKey = null; openAuth("login"); }
      else if (action === "signup") { pendingPhotoKey = null; openAuth("register"); }
      else if (action === "menu") { const m = document.getElementById("user-menu"); if (m) m.hidden = !m.hidden; }
      else if (action === "logout") { activeView = "home"; activeCategory = "All"; const sv = document.getElementById("search"); if (sv) sv.value = ""; store.saveSession(null); renderAuthArea(); renderCategories(); renderPins(); showToast("Logged out. See you soon!"); }
      else if (action === "profile" || action === "saved") {
        const u = currentUser();
        if (action === "saved") showSaved();
        else if (u) window.location.href = "profile.html";
        else { openAuth("login"); showToast("Log in to see your profile"); }
      }
      else if (action === "create") { if (!currentUser()) { openAuth("register"); showToast("Sign up to create your first board"); } else window.location.href = "profile.html#post"; }
      else if (action === "home") { activeView = "home"; activeCategory = "All"; search.value = ""; renderCategories(); renderPins(); window.scrollTo({ top: 0, behavior: "smooth" }); }
      else if (action === "settings") showToast("Settings live here soon");
      else if (action === "visual-search" || action === "voice") showToast("Try typing — smart image + voice search is coming soon");
      else if (action === "shop") { event.preventDefault(); showToast("Shop links are coming soon"); }
    });
