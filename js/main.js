/* Wildflower Gem Co. — main script. Edit WA / MAIL at the top of the config line below. */
const IM = {
  h1: "images/hero-1-emerald-model.webp",
  h2: "images/hero-2-short-hair-model.webp",
  h3: "images/hero-3-curly-hair-model.webp",
  coll: "images/collections-earrings-model.webp",
  p_ring: "images/product-royal-emerald-ring.webp",
  p_neck: "images/product-celestial-diamond-necklace.webp",
  p_ear: "images/product-serene-drop-earrings.webp",
  p_br: "images/product-golden-harmony-bracelet.webp",
  n_sig: "images/product-emerald-signet-ring.webp",
  n_chain: "images/product-aurelia-layered-chain.webp",
  n_clm: "images/product-pearl-ear-climbers.webp",
  n_brooch: "images/product-diamond-bloom-brooch.webp",
  c_cuff: "images/product-emerald-cuff-bracelet.webp",
  c_hoop: "images/product-modern-gold-hoops.webp",
  c_choke: "images/product-emerald-choker.webp",
  c_tiara: "images/product-modern-emerald-tiara.webp",
  c_bang: "images/product-sculptural-bangle.webp",
  c_dring: "images/product-sculptural-diamond-ring.webp",
  feat: "images/featured-emerald-legacy-pendant.webp",
  why: "images/crafted-with-purpose.webp",
  story: "images/heritage-story-model.webp",
  craft: "images/heritage-necklace-closeup.webp",
  avatar: "images/testimonial-avatar.webp",
  box: "images/testimonial-jewellery-box.webp",
};
const WA = "923215459190",
  MAIL = "waleedaw778@gmail.com",
  EP = "https://formsubmit.co/ajax/" + MAIL,
  $ = (s) => document.querySelector(s),
  $$ = (s, r = document) => [...r.querySelectorAll(s)];
// id,name,keywords,price,img,reviews
const P = [
  ["ring", "Royal Emerald Ring", "ring emerald", 450, "p_ring", 42],
  ["neck", "Celestial Diamond Necklace", "necklace diamond", 700, "p_neck", 36],
  ["ear", "Serene Drop Earrings", "earring emerald drop", 260, "p_ear", 28],
  ["br", "Golden Harmony Bracelet", "bracelet gold", 235, "p_br", 19],
  ["sig", "Emerald Signet Ring", "ring emerald gold", 350, "n_sig", 12, 1],
  [
    "chain",
    "Aurelia Layered Chain",
    "necklace gold chain",
    195,
    "n_chain",
    9,
    1,
  ],
  ["clm", "Pearl Ear Climbers", "earring pearl emerald", 175, "n_clm", 14, 1],
  [
    "bro",
    "Diamond Bloom Brooch",
    "brooch special diamond",
    315,
    "n_brooch",
    7,
    1,
  ],
  ["cuff", "Emerald Cuff Bracelet", "bracelet cuff emerald", 275, "c_cuff", 11],
  ["hoop", "Modern Gold Hoops", "earring hoops gold", 140, "c_hoop", 23],
  ["choke", "Emerald Choker", "necklace choker emerald", 530, "c_choke", 16],
  [
    "tiara",
    "Modern Emerald Tiara",
    "tiara special bridal emerald",
    950,
    "c_tiara",
    5,
  ],
  ["bang", "Sculptural Bangle", "bangle gold emerald", 210, "c_bang", 18],
  ["dring", "Sculptural Diamond Ring", "ring diamond gold", 400, "c_dring", 21],
  [
    "legacy",
    "The Emerald Legacy Pendant",
    "necklace pendant emerald",
    875,
    "feat",
    31,
  ],
];
const K = [
  ["Rings", "ring", "c_dring"],
  ["Earrings", "earring", "c_hoop"],
  ["Necklaces", "necklace", "c_choke"],
  ["Bracelets", "bracelet", "c_cuff"],
  ["Bangles", "bangle", "c_bang"],
  ["Brooches & Tiaras", "special", "c_tiara"],
];
const T = [
  [
    "Wildflower jewellery is simply breathtaking. The quality, craftsmanship and attention to detail are beyond words.",
    "Ayesha Khan",
    "Lahore, Pakistan",
  ],
  [
    "My engagement ring arrived beautifully wrapped, and the advisor helped me choose the perfect stone size.",
    "Sana Malik",
    "Islamabad, Pakistan",
  ],
  [
    "The emerald earrings photograph exactly as they look in person. Fast delivery and a lovely gift box.",
    "Hira Noor",
    "Karachi, Pakistan",
  ],
  [
    "They customised a pendant from my grandmother's stone. I cry every time I wear it.",
    "Mariam Shah",
    "Abbottabad, Pakistan",
  ],
];
const f = (n) => "$" + n.toLocaleString("en-US"),
  icn = (n, c = "i") => `<svg class="${c}"><use href="#${n}"/></svg>`;
const card = (p) =>
  `<article class="pc" id="p-${p[0]}"><div class="pi"><img data-i="${p[4]}" alt="${p[1]}">${p[6] ? '<span class="tag">New</span>' : ""}<button class="wl" data-wl aria-label="Save ${p[1]}">${icn("ht")}</button><button class="ab" data-add="${p[0]}" aria-label="Add ${p[1]} to bag">${icn("b")}<span>Add to bag</span></button></div><div class="pm"><div><h3>${p[1]}</h3><span class="st">★★★★★<em>(${p[5]})</em></span></div><b>${f(p[3])}</b></div></article>`;
const imgs = (r) =>
  $$("[data-i]", r).forEach((e) => e.src || (e.src = IM[e.dataset.i]));
$("#g1").innerHTML = P.slice(0, 4).map(card).join("");
$("#g2").innerHTML = P.slice(4, 8).map(card).join("");
$("#kg").innerHTML = K.map(
  (k) =>
    `<a class="kt" href="#shop" data-q="${k[1]}"><img data-i="${k[2]}" alt="${k[0]}"><div><span><h3>${k[0]}</h3><small>${P.filter((p) => p[2].includes(k[1])).length} pieces</small></span><span class="rb">${icn("a")}</span></div></a>`,
).join("");
imgs(document);
const tt = (m) => {
  const t = $("#tt");
  t.textContent = m;
  t.classList.add("o");
  clearTimeout(tt.t);
  tt.t = setTimeout(() => t.classList.remove("o"), 3200);
};
const st = {
  get: (k) => {
    try {
      return JSON.parse(localStorage.getItem(k));
    } catch (e) {
      return null;
    }
  },
  set: (k, v) => {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  },
};
// overlays
let open = null;
const ov = $("#ov");
function show(el) {
  hide();
  open = el;
  el.classList.add("o");
  document.body.style.overflow = "hidden";
  if (el.id !== "sr") ov.classList.add("o");
}
function hide() {
  [$("#dr"), $("#sr"), $("#md"), $("#ln"), ov].forEach((e) =>
    e.classList.remove("o"),
  );
  document.body.style.overflow = "";
  open = null;
}
ov.onclick = hide;
addEventListener("keydown", (e) => e.key === "Escape" && hide());
// cart
let C = st.get("wg_cart") || {};
function drawCart() {
  const ids = Object.keys(C),
    n = ids.reduce((a, i) => a + C[i], 0),
    cn = $("#cn");
  cn.textContent = n;
  cn.classList.add("b");
  setTimeout(() => cn.classList.remove("b"), 250);
  $("#db").innerHTML = ids.length
    ? ids
        .map((i) => {
          const p = P.find((x) => x[0] === i);
          return `<div class="ci"><div class="im"><img src="${IM[p[4]]}" alt=""></div><div><b style="font-weight:500">${p[1]}</b><br><span style="opacity:.7">${f(p[3])}</span><br><span class="q"><button data-q2="${i}:-1" aria-label="Less">−</button><span>${C[i]}</span><button data-q2="${i}:1" aria-label="More">+</button></span></div><button class="rm" data-q2="${i}:0">Remove</button></div>`;
        })
        .join("")
    : `<div class="emp"><p>Your bag is empty.</p><a class="btn" href="#best" data-x>Shop best sellers</a></div>`;
  const tot = ids.reduce((a, i) => a + C[i] * P.find((x) => x[0] === i)[3], 0);
  $("#df").innerHTML = ids.length
    ? `<div class="tot"><span>Subtotal</span><b>${f(tot)}</b></div><a class="btn f" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent("Hi Wildflower Gem Co., I'd like to order:\n" + ids.map((i) => C[i] + " × " + P.find((x) => x[0] === i)[1]).join("\n") + "\nTotal: " + f(tot))}">Order via WhatsApp</a><button class="btn" data-m="Need help choosing? Talk to an advisor">Talk to an advisor</button>`
    : "";
  st.set("wg_cart", C);
}
drawCart();
// search
function search(q = "") {
  show($("#sr"));
  const i = $("#si");
  i.value = q;
  filt();
  setTimeout(() => i.focus(), 100);
}
function filt() {
  const q = $("#si").value.trim().toLowerCase(),
    r = q
      ? P.filter((p) => (p[1] + " " + p[2]).toLowerCase().includes(q))
      : P.slice(0, 8);
  $("#sl").innerHTML = r.length
    ? (q
        ? ""
        : '<p class="sh">Popular pieces — type to search all ' +
          P.length +
          "</p>") + r.map(card).join("")
    : `<p style="grid-column:1/-1">Nothing matches "${q}" yet. <a class="tl" href="#lead" data-x>Request a custom design</a></p>`;
  imgs($("#sl"));
}
$("#si").oninput = filt;
// modal
function modal(t, s) {
  $("#mt").textContent = t;
  $("#ms").textContent =
    s || "Leave your details and an advisor will contact you within 24 hours.";
  $("#lf2").hidden = false;
  show($("#md"));
}
function lead(d) {
  const L = st.get("wg_leads") || [];
  L.push({ ...d, at: new Date().toISOString() });
  st.set("wg_leads", L);
  const p = {
    ...d,
    _subject: "New Wildflower lead: " + d.source,
    _captcha: "false",
    _template: "table",
  };
  fetch(EP, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(p),
  }).catch(() => {
    let fr = $("#hf");
    if (!fr) {
      fr = document.createElement("iframe");
      fr.name = "hf";
      fr.id = "hf";
      fr.hidden = true;
      document.body.appendChild(fr);
    }
    const fm = document.createElement("form");
    fm.method = "POST";
    fm.action = "https://formsubmit.co/" + MAIL;
    fm.target = "hf";
    fm.hidden = true;
    Object.entries(p).forEach(([k, v]) => {
      const i = document.createElement("input");
      i.name = k;
      i.value = v;
      fm.appendChild(i);
    });
    document.body.appendChild(fm);
    fm.submit();
    fm.remove();
  });
}
let reg = false;
function lmode(r) {
  reg = r;
  $("#nm").hidden = !r;
  $("#nm input").required = r;
  $("#lt").textContent = r ? "Create your account" : "Welcome back";
  $("#ls").textContent = r
    ? "Join for early access, a saved wishlist and a welcome gift."
    : "Sign in to view your saved pieces and orders.";
  $("#lb").textContent = r ? "Create account" : "Sign in";
  $("#sq").textContent = r ? "Already a member?" : "New here?";
  $("#tg").textContent = r ? "Sign in" : "Create an account";
}
function lopen() {
  const u = st.get("wg_user");
  $("#lgf").hidden = !!u;
  $("#sw").hidden = !!u;
  $("#so").hidden = !u;
  if (u) {
    $("#lt").textContent = "Hello, " + u.name.split(" ")[0];
    $("#ls").textContent = "You're signed in as " + u.email + ".";
  } else lmode(false);
  show($("#ln"));
}
$("#tg").onclick = () => lmode(!reg);
$("#so").onclick = () => {
  st.set("wg_user", null);
  hide();
  tt("You've been signed out");
};
$("#lgf").onsubmit = (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target)),
    a = st.get("wg_acct") || {},
    u = {
      name: reg
        ? d.name
        : (a.email === d.email && a.name) || d.email.split("@")[0],
      email: d.email,
    };
  st.set("wg_user", u);
  if (reg) {
    st.set("wg_acct", u);
    lead({ name: d.name, email: d.email, source: "Account sign-up" });
  }
  e.target.reset();
  hide();
  tt((reg ? "Welcome, " : "Welcome back, ") + u.name.split(" ")[0] + "!");
};
document.querySelectorAll(".md").forEach((m) =>
  m.addEventListener("mousedown", (e) => {
    if (e.target === m) hide();
  }),
);
$("#lf2").onsubmit = (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  d.source = $("#mt").textContent;
  lead(d);
  e.target.reset();
  hide();
  tt(
    "Thank you, " +
      d.name.split(" ")[0] +
      " — an advisor will reach out within 24 hours.",
  );
};
$("#nf").onsubmit = (e) => {
  e.preventDefault();
  lead({ email: e.target[0].value, source: "newsletter" });
  e.target.outerHTML =
    '<p class="ok2">You\'re in. Use code <b>WILD10</b> for 10% off your first order.</p>';
};
// clicks
document.addEventListener("click", (e) => {
  const t = e.target.closest(
    "[data-add],[data-wl],[data-login],[data-s],[data-m],[data-q],[data-cart],[data-x],[data-q2],#bg,#nv a",
  );
  if (!t) return;
  const d = t.dataset;
  if (d.wl !== undefined) {
    t.classList.toggle("on");
    tt(
      t.classList.contains("on")
        ? "Saved to your wishlist"
        : "Removed from wishlist",
    );
  } else if (d.add) {
    C[d.add] = (C[d.add] || 0) + 1;
    drawCart();
    if (t.classList.contains("ab")) {
      const o = t.innerHTML;
      t.classList.add("ok");
      t.innerHTML = "Added ✓";
      setTimeout(() => {
        t.classList.remove("ok");
        t.innerHTML = o;
      }, 900);
    }
    setTimeout(() => show($("#dr")), t.classList.contains("ab") ? 450 : 0);
  } else if (d.q2) {
    const [i, n] = d.q2.split(":");
    C[i] = n === "0" ? 0 : C[i] + +n;
    if (C[i] <= 0) delete C[i];
    drawCart();
  } else if (d.cart !== undefined) show($("#dr"));
  else if (d.login !== undefined) lopen();
  else if (d.m !== undefined) {
    e.preventDefault();
    modal(d.m);
  } else if (d.q) {
    e.preventDefault();
    search(d.q);
  } else if (d.s !== undefined) {
    e.preventDefault();
    search();
  } else if (d.x !== undefined) hide();
  if (t.id === "bg") {
    t.classList.toggle("o");
    $("#nv").classList.toggle("o");
    document.body.style.overflow = t.classList.contains("o") ? "hidden" : "";
  }
  if (t.matches("#nv a")) {
    $("#bg").classList.remove("o");
    $("#nv").classList.remove("o");
    document.body.style.overflow = "";
  }
});
$$("[data-wa]").forEach(
  (a) =>
    (a.href =
      "https://wa.me/" +
      WA +
      "?text=" +
      encodeURIComponent(
        "Hi Wildflower Gem Co., I'd like help choosing a piece.",
      )),
);
// header + active nav
const hd = $("#hd");
addEventListener("scroll", () => hd.classList.toggle("sc", scrollY > 30), {
  passive: 1,
});
const map = {
  home: 0,
  best: 1,
  new: 1,
  shop: 1,
  collections: 2,
  story: 3,
  news: 4,
};
const io = new IntersectionObserver(
  (es) =>
    es.forEach((x) => {
      if (x.isIntersecting && x.target.id in map) {
        $$("#nv a").forEach((a, i) =>
          a.classList.toggle("on", i === map[x.target.id]),
        );
      }
    }),
  { threshold: 0.4 },
);
["home", "best", "new", "shop", "collections", "story", "news"].forEach((i) =>
  io.observe($("#" + i)),
);
// hero slides
const H = ["your story", "your grace", "your legacy"],
  hi = $$("#hi button"),
  hm = $$(".hs img"),
  hr = $$("#hi i");
let hn = 0,
  ht;
function slide(n) {
  hn = n;
  hm.forEach((m, i) => m.classList.toggle("on", i === n));
  hi.forEach((b, i) => b.classList.toggle("on", i === n));
  hr.forEach((r, i) => {
    r.classList.remove("on");
    void r.offsetWidth;
    r.classList.toggle("on", i === n || (n === 2 && i === 1));
  });
  const s = $("#hl");
  s.style.opacity = 0;
  setTimeout(() => {
    s.textContent = H[n];
    s.style.opacity = 1;
  }, 400);
  clearTimeout(ht);
  ht = setTimeout(() => slide((n + 1) % 3), 6000);
}
hi.forEach((b, i) => (b.onclick = () => slide(i)));
ht = setTimeout(() => slide(1), 6000);
// testimonials
let ti = 0;
function tst(n) {
  ti = (n + 4) % 4;
  const p = $(".tc p");
  p.style.opacity = 0;
  setTimeout(() => {
    p.textContent = "“" + T[ti][0] + "”";
    $("#tn").textContent = T[ti][1];
    $("#tp").textContent = T[ti][2];
    $("#tx").textContent = "0" + (ti + 1) + " / 04";
    p.style.opacity = 1;
  }, 300);
}
$("#tv").onclick = () => tst(ti - 1);
$("#tnx").onclick = () => tst(ti + 1);
tst(0);
setInterval(() => tst(ti + 1), 9000);
// welcome offer (once)
if (!st.get("wg_seen"))
  setTimeout(() => {
    if (!open) {
      st.set("wg_seen", 1);
      modal(
        "Get 10% off your first piece",
        "Share your details and we'll send your welcome code plus a curated shortlist.",
      );
    }
  }, 18000);
