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
      { title: "The linen hour", creator: "Maya Laurent", category: "Summer fits", photo: "photo-1543076447-215ad9ba6923", avatar: "photo-1534528741775-53994a69daeb", description: "Linen, sun, and the freedom to keep the rest simple. An easy outfit worth repeating.", tags: ["linen", "summer", "slow mornings"] },
      { title: "Golden hour muse", creator: "Ava Chen", category: "Summer fits", photo: "photo-1469334031218-e382a71b716b", avatar: "photo-1534528741775-53994a69daeb", description: "Sunglasses on, worries off. Sun-washed color that works from boardwalk to rooftop.", tags: ["summer", "golden hour", "muse"] },
      { title: "Denim days", creator: "Jonah Reed", category: "90s", photo: "photo-1542272604-787c3835535d", avatar: "photo-1500648767791-00dcc994a43e", description: "Head-to-toe denim, worn in all the right places. A 90s uniform that still hits.", tags: ["denim", "90s", "casual"] },
      { title: "Rack edit", creator: "Studio Nord", category: "Minimalist", photo: "photo-1445205170230-053b83016050", avatar: "photo-1544005313-94ddf0286df2", description: "A tight rack of neutrals and washed denim. Fewer, better pieces on repeat.", tags: ["rack", "capsule", "neutral"] },
      { title: "Store run", creator: "Remy Cole", category: "Streetwear", photo: "photo-1441986300917-64674bd600d8", avatar: "photo-1506794778202-cad84cf45f1d", description: "Workwear jackets, cargos and sneakers. Streetwear staples stacked wall to wall.", tags: ["store", "streetwear", "essentials"] },
      { title: "Street muse", creator: "Lena Park", category: "Korean", photo: "photo-1495385794356-15371f348c31", avatar: "photo-1531123897727-8f129e1688ce", description: "Seoul street style: clean sneakers, pleated skirt and an easy oversized blazer.", tags: ["korean", "street style", "preppy"] },
      { title: "Soft glam", creator: "Nina Rose", category: "Women's", photo: "photo-1487412720507-e7ab37603c6f", avatar: "photo-1494790108377-be9c29b29330", description: "Glowy skin, brushed brows and a slick pony. Beauty that lets the outfit breathe.", tags: ["beauty", "glam", "soft"] },
      { title: "White tee ritual", creator: "Sam Baker", category: "Outfits", photo: "photo-1521572163474-6864f9cf17ab", avatar: "photo-1500648767791-00dcc994a43e", description: "The perfect white tee, jeans and nothing to prove. The everyday outfit formula.", tags: ["basics", "white tee", "outfits"] },
      { title: "Portrait in style", creator: "Noah Kim", category: "Outfits", photo: "photo-1552374196-c4e7ffc6e126", avatar: "photo-1506794778202-cad84cf45f1d", description: "Sharp tailoring, soft attitude. Menswear that balances classic and casual.", tags: ["menswear", "portrait", "tailoring"] },
      { title: "Field jacket season", creator: "Alex Ford", category: "Vintage", photo: "photo-1591047139829-d91aecb6caea", avatar: "photo-1500648767791-00dcc994a43e", description: "A rugged field jacket over washed denim. Vintage workwear that ages well.", tags: ["jacket", "vintage", "menswear"] },
      { title: "Denim on denim", creator: "Chloe Kim", category: "Korean", photo: "photo-1594633312681-425c7b97ccd1", avatar: "photo-1534528741775-53994a69daeb", description: "Double denim with a cropped jacket. K-style casual with clean sneakers.", tags: ["denim", "korean", "casual"] },
      { title: "Editorial beige", creator: "Ivy Studio", category: "Women's", photo: "photo-1581044777550-4cfa60707c03", avatar: "photo-1544005313-94ddf0286df2", description: "Beige trench, gold hoops, slick bun. Quiet luxury for running the city.", tags: ["editorial", "beige", "trench"] },
      { title: "Linen and light", creator: "Ella Moss", category: "Summer fits", photo: "photo-1572804013309-59a88b7e92f1", avatar: "photo-1524504388940-b1c1722653e1", description: "Barefoot in linen on a bright day. Summer dressing at its softest.", tags: ["linen", "summer", "dress"] },
      { title: "Night out set", creator: "Zoe Park", category: "Y2K", photo: "photo-1574015974293-817f0ebebb74", avatar: "photo-1534528741775-53994a69daeb", description: "Wind-tossed hair and a black top. The night, captured in monochrome.", tags: ["y2k", "night out", "denim"] },
      { title: "Cozy layers", creator: "Elise Nor", category: "Minimalist", photo: "photo-1434389677669-e08b4cac3105", avatar: "photo-1524504388940-b1c1722653e1", description: "Knit on knit, in soft grays. A cozy capsule you will live in all week.", tags: ["knit", "cozy", "capsule"] },
      { title: "Air Max era", creator: "Kai Morgan", category: "2000s", photo: "photo-1600185365483-26d7a4cc7519", avatar: "photo-1500648767791-00dcc994a43e", description: "Chunky runners and a low stance. The 2000s sneaker that never really left.", tags: ["2000s", "sneakers", "air max"] },
      { title: "Wheat-season runners", creator: "Theo Wells", category: "2000s", photo: "photo-1549298916-b41d501d3772", avatar: "photo-1506794778202-cad84cf45f1d", description: "Tonal suede high-tops on golden fabric. Basketball energy, street polish.", tags: ["2000s", "sneakers", "suede"] },
      { title: "Low-rise rules", creator: "Rae Kim", category: "2000s", photo: "photo-1541099649105-f69ad21f3246", avatar: "photo-1534528741775-53994a69daeb", description: "Distressed denim and a carefree pose. The 2000s silhouette, worn loud.", tags: ["2000s", "denim", "low rise"] },
      { title: "Bomber season", creator: "Alex Rios", category: "2000s", photo: "photo-1548126032-079a0fb0099d", avatar: "photo-1500648767791-00dcc994a43e", description: "Red hoodie under a flight bomber and dark shades. Subtlety was optional.", tags: ["2000s", "bomber", "street"] },
      { title: "Primary colors", creator: "Studio Nord", category: "2000s", photo: "photo-1489987707025-afc232f7ea0f", avatar: "photo-1544005313-94ddf0286df2", description: "Reds, yellows and blues racked to the ceiling. Maximal wardrobes, zero restraint.", tags: ["2000s", "color", "rack"] },
      { title: "The denim wall", creator: "Remy Cole", category: "2000s", photo: "photo-1560243563-062bfc001d68", avatar: "photo-1506794778202-cad84cf45f1d", description: "Every wash from pale to raw, stacked floor to ceiling. Denim shopping as a sport.", tags: ["2000s", "denim", "shopping"] },
      { title: "Main character", creator: "Kai Morgan", category: "Killa", photo: "photo-1487222477894-8943e31ef7b2", avatar: "photo-1500648767791-00dcc994a43e", description: "Cognac leather, black shades and all the confidence in the room.", tags: ["killa", "leather", "statement"] },
      { title: "Sequin sisters", creator: "Zoe Park", category: "Killa", photo: "photo-1550614000-4895a10e1bfd", avatar: "photo-1534528741775-53994a69daeb", description: "Matching red sequins for the night that needed remembering.", tags: ["killa", "sequin", "night out"] },
      { title: "Hood up", creator: "Lena Park", category: "Killa", photo: "photo-1508216310976-c518daae0cdc", avatar: "photo-1531123897727-8f129e1688ce", description: "Grey hoodie, hard striped lines, zero apologies.", tags: ["killa", "hoodie", "street"] },
      { title: "Peace out", creator: "Alex Rios", category: "Killa", photo: "photo-1503341504253-dff4815485f1", avatar: "photo-1500648767791-00dcc994a43e", description: "Black tee, graphic front, instant attitude.", tags: ["killa", "graphic tee", "street"] },
      { title: "Crosswalk energy", creator: "Lena Park", category: "Killa", photo: "photo-1578632292335-df3abbb0d586", avatar: "photo-1531123897727-8f129e1688ce", description: "Printed coat, rust trousers and red shoes mid-stride. The street is the runway.", tags: ["killa", "street style", "outerwear"] },
      { title: "Back graphic", creator: "Remy Cole", category: "Killa", photo: "photo-1564859228273-274232fdb516", avatar: "photo-1506794778202-cad84cf45f1d", description: "The print says it best from behind. Cap on, headphones in.", tags: ["killa", "graphic tee", "summer"] },
      { title: "Power blouse", creator: "Inez Ward", category: "80s", photo: "photo-1583846783214-7229a91b20ed", avatar: "photo-1531123897727-8f129e1688ce", description: "White ruffles, high-waist buttons and oversized shades. Boardroom boss energy.", tags: ["80s", "blouse", "power dressing"] },
      { title: "Bow at work", creator: "Sofia Lane", category: "80s", photo: "photo-1608234807905-4466023792f5", avatar: "photo-1544005313-94ddf0286df2", description: "A black bow over white poplin. Prep school meets the corner office.", tags: ["80s", "preppy", "shirt"] },
      { title: "Berry full skirt", creator: "Ella Moss", category: "80s", photo: "photo-1585487000160-6ebcfceb0d03", avatar: "photo-1544005313-94ddf0286df2", description: "Deep berry buttons and a skirt with volume. Ladylike, with shoulders back.", tags: ["80s", "midi", "color"] },
      { title: "Gingham fields", creator: "Lola James", category: "80s", photo: "photo-1502716119720-b23a93e5fe1b", avatar: "photo-1534528741775-53994a69daeb", description: "Red gingham catching wind in tall grass. Picnic glamour, amplified.", tags: ["80s", "gingham", "summer"] },
      { title: "Plum hour", creator: "Nadia Vale", category: "80s", photo: "photo-1551803091-e20673f15770", avatar: "photo-1494790108377-be9c29b29330", description: "Plum lace with strategic cut-outs. Evening dressing with nerve.", tags: ["80s", "lace", "evening"] },
      { title: "Red sweep", creator: "Mina Ellis", category: "80s", photo: "photo-1595777457583-95e059d581b8", avatar: "photo-1544005313-94ddf0286df2", description: "A crimson skirt moving like water. Drama, cut on the bias.", tags: ["80s", "gown", "statement"] },
      { title: "Hood under denim", creator: "Lena Park", category: "90s", photo: "photo-1517841905240-472988babdf9", avatar: "photo-1531123897727-8f129e1688ce", description: "Grey hoodie under light-wash denim, blue wall optional. Recess never ended.", tags: ["90s", "denim", "layering"] },
      { title: "Chambray classic", creator: "Jonah Reed", category: "90s", photo: "photo-1596755094514-f87e34085b2c", avatar: "photo-1500648767791-00dcc994a43e", description: "One soft chambray shirt on a wooden hanger. Wardrobe staple, no notes.", tags: ["90s", "chambray", "essentials"] },
      { title: "Trucker jacket", creator: "Theo Wells", category: "90s", photo: "photo-1611312449408-fcece27cdbb7", avatar: "photo-1506794778202-cad84cf45f1d", description: "Cord-collar denim against black. The 90s trucker, still undefeated.", tags: ["90s", "denim", "jacket"] },
      { title: "Canadian tux", creator: "Noah Kim", category: "90s", photo: "photo-1516257984-b1b4d707412e", avatar: "photo-1506794778202-cad84cf45f1d", description: "Denim jacket over denim, hand in pocket. When in doubt, double it up.", tags: ["90s", "denim", "menswear"] },
      { title: "Flannel hours", creator: "Jonah Reed", category: "90s", photo: "photo-1530268729831-4b0b9e170218", avatar: "photo-1500648767791-00dcc994a43e", description: "Plaid flannel and thick frames over coffee. Grunge grew up politely.", tags: ["90s", "flannel", "grunge"] },
      { title: "Midnight suit", creator: "Noah Kim", category: "Formal wear", photo: "photo-1519085360753-af0119f7cbe7", avatar: "photo-1506794778202-cad84cf45f1d", description: "All-black tailoring with a slim tie. Quiet formality, done right.", tags: ["formal", "suit", "evening"] },
      { title: "Stripe play", creator: "Marcus Hale", category: "Formal wear", photo: "photo-1507679799987-c73779587ccf", avatar: "photo-1500648767791-00dcc994a43e", description: "Navy worsted, striped tie, adjusting the cuff. Boardroom ready.", tags: ["formal", "suit", "menswear"] },
      { title: "Orchid gown", creator: "Mina Ellis", category: "Formal wear", photo: "photo-1566174053879-31528523f8ae", avatar: "photo-1494790108377-be9c29b29330", description: "Off-shoulder plum satin on a violet backdrop. Red-carpet posture.", tags: ["formal", "gown", "occasion"] },
      { title: "Windowpane check", creator: "Theo Wells", category: "Formal wear", photo: "photo-1594938298603-c8148c4dae35", avatar: "photo-1506794778202-cad84cf45f1d", description: "A blue plaid three-piece, hands on the lapels. Old-school tailoring, modern fit.", tags: ["formal", "suit", "tailoring"] },
      { title: "Flatlay Friday", creator: "Sam Baker", category: "Outfits", photo: "photo-1479064555552-3ef4979f8908", avatar: "photo-1500648767791-00dcc994a43e", description: "Boots, belt and grey trousers laid flat. The outfit before the outfit.", tags: ["outfits", "flatlay", "menswear"] },
      { title: "Wardrobe reset", creator: "Elise Nør", category: "Outfits", photo: "photo-1556905055-8f358a7a47b2", avatar: "photo-1524504388940-b1c1722653e1", description: "Knit, denim and tulips on white linen. A soft start to the week.", tags: ["outfits", "flatlay", "neutral"] },
      { title: "Desk-side denim", creator: "Ivy Studio", category: "Outfits", photo: "photo-1598554747436-c9293d6a588f", avatar: "photo-1544005313-94ddf0286df2", description: "White rib tank, light jeans and heels. The lunch-break outfit formula.", tags: ["outfits", "denim", "basics"] },
      { title: "Cold-day formula", creator: "June Atelier", category: "Outfits", photo: "photo-1516762689617-e1cffcef479d", avatar: "photo-1531123897727-8f129e1688ce", description: "Cream knit, blue jeans and suede booties, folded and ready.", tags: ["outfits", "flatlay", "knit"] },
      { title: "Double vision", creator: "Ivy Studio", category: "Women's", photo: "photo-1553544260-f87e671974ee", avatar: "photo-1544005313-94ddf0286df2", description: "Tonal layers on repeat, photographed from above. Dress like a duo.", tags: ["women's", "editorial", "tonal"] },
      { title: "Rose garden", creator: "Ella Moss", category: "Women's", photo: "photo-1481824429379-07aa5e5b0739", avatar: "photo-1494790108377-be9c29b29330", description: "A red wrap top among the blooms. Romance, worn casually.", tags: ["women's", "floral", "day"] },
      { title: "Terracotta glow", creator: "Nina Rose", category: "Women's", photo: "photo-1546877625-cb8c71916608", avatar: "photo-1494790108377-be9c29b29330", description: "Burnt-orange knit and loose waves. Warm tones for cooler days.", tags: ["women's", "color", "portrait"] },
      { title: "Grey drape", creator: "Studio Sora", category: "Women's", photo: "photo-1601762603339-fd61e28b698a", avatar: "photo-1524504388940-b1c1722653e1", description: "One sculptural shoulder in dove grey. Minimal drama, maximum line.", tags: ["women's", "drape", "minimal"] },
      { title: "Camel commute", creator: "Chloe Kim", category: "Korean", photo: "photo-1539533018447-63fcce2678e3", avatar: "photo-1534528741775-53994a69daeb", description: "Belted camel coat on stone steps. Seoul layers, softly structured.", tags: ["korean", "coat", "street style"] },
      { title: "Coffee run", creator: "Lena Park", category: "Korean", photo: "photo-1512310604669-443f26c35f52", avatar: "photo-1531123897727-8f129e1688ce", description: "Straight-leg jeans and a fitted top, nothing loud. Off-duty, on point.", tags: ["korean", "denim", "everyday"] },
      { title: "Teal door", creator: "Rae Kim", category: "Korean", photo: "photo-1496217590455-aa63a8350eea", avatar: "photo-1534528741775-53994a69daeb", description: "Grey mini dress against a teal door. Playful proportions, clean palette.", tags: ["korean", "dress", "street"] },
      { title: "Scarf season", creator: "Chloe Kim", category: "Korean", photo: "photo-1505022610485-0249ba5b3675", avatar: "photo-1506794778202-cad84cf45f1d", description: "Camel overcoat, checked scarf, leather strap bag. Refined layering.", tags: ["korean", "outerwear", "classic"] },
      { title: "Bubblegum runners", creator: "Zoe Park", category: "Y2K", photo: "photo-1595950653106-6c9ebd614d3a", avatar: "photo-1534528741775-53994a69daeb", description: "Pastel sneakers on pastel plinths. Sweet, loud, unmistakably Y2K.", tags: ["y2k", "sneakers", "pastel"] },
      { title: "Everything bag", creator: "Zoe Park", category: "Y2K", photo: "photo-1492707892479-7bc8d5a4ee93", avatar: "photo-1534528741775-53994a69daeb", description: "Quilted bag, gold hoops and gloss laid flat. Night-out essentials.", tags: ["y2k", "accessories", "going out"] },
      { title: "Charms on", creator: "Rae Kim", category: "Y2K", photo: "photo-1559563458-527698bf5295", avatar: "photo-1534528741775-53994a69daeb", description: "A white backpack with shiny bits and charms. School-run nostalgia.", tags: ["y2k", "accessories", "bag"] },
      { title: "Ten white shirts", creator: "Studio Nord", category: "Minimalist", photo: "photo-1603252109303-2751441dd157", avatar: "photo-1524504388940-b1c1722653e1", description: "A rail of white shirts, all slightly different. Choose your own uniform.", tags: ["minimalist", "shirts", "capsule"] },
      { title: "Quiet rail", creator: "Studio Nord", category: "Minimalist", photo: "photo-1558769132-cb1aea458c5e", avatar: "photo-1524504388940-b1c1722653e1", description: "Oatmeal, bone and sand hanging with pampas. Neutrals all the way down.", tags: ["minimalist", "neutral", "rack"] },
      { title: "Treasure hunting", creator: "June Atelier", category: "Vintage", photo: "photo-1520006403909-838d6b92c22e", avatar: "photo-1531123897727-8f129e1688ce", description: "Hands rifling a rack of prints and knits. The joy is in the dig.", tags: ["vintage", "thrifting", "rack"] },
      { title: "Boutique hours", creator: "Studio Nord", category: "Vintage", photo: "photo-1441984904996-e0b6ba687e04", avatar: "photo-1544005313-94ddf0286df2", description: "Warm light, hanging rails and slow browsing. Small-shop charm.", tags: ["vintage", "boutique", "shopping"] },
      { title: "Laydown basics", creator: "Sam Baker", category: "Streetwear", photo: "photo-1544441893-675973e31985", avatar: "photo-1500648767791-00dcc994a43e", description: "Grey denim, black tee and white sneakers, flat on dark. The starter pack.", tags: ["streetwear", "flatlay", "essentials"] },
      { title: "Trail tee", creator: "Kai Morgan", category: "Streetwear", photo: "photo-1571945153237-4929e783af4a", avatar: "photo-1500648767791-00dcc994a43e", description: "White tee and cap against big sky. Breezy and unbothered.", tags: ["streetwear", "tee", "outdoor"] },
      { title: "Stairway to summer", creator: "Sofia Lane", category: "Summer fits", photo: "photo-1515372039744-b8f02a3ae446", avatar: "photo-1524504388940-b1c1722653e1", description: "A white eyelet dress on painted steps. Sunshine, but make it lace.", tags: ["summer", "dress", "white"] }
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
      else if (action === "home" || action === "explore") { document.querySelectorAll(".side-btn").forEach((b) => b.classList.toggle("is-active", b === el)); activeCategory = "All"; search.value = ""; renderCategories(); renderPins(); window.scrollTo({ top: 0, behavior: "smooth" }); }
      else if (action === "messages") showToast(currentUser() ? "No new messages" : "Log in to message stylists");
      else if (action === "settings") showToast("Settings live here soon");
      else if (action === "notifications") showToast(currentUser() ? "You're all caught up" : "Log in to see notifications");
      else if (action === "visual-search" || action === "voice") showToast("Try typing — smart image + voice search is coming soon");
      else if (action === "shop") { event.preventDefault(); showToast("Shop links are coming soon"); }
    });
