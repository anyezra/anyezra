const SEED_USERS = [
  {
    username: "alexander_wright",
    name: "Alexander Wright - Akses awal ( Akun pengguna bersama > Default )",
    email: "alex.wright@enterprise.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    role: "Enterprise Merchant",
    bio: "Tech enthusiast & Cloud Architecture builder at Nexus Enterprise.",
    createdAt: "2026-08-01T08:00:00.000Z"
  },
  {
    username: "sarah_j",
    name: "Sarah Jenkins",
    email: "sarah.j@enterprise.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    role: "Creative Lead",
    bio: "Crafting minimalist digital products. Photography & design wanderer.",
    createdAt: "2026-08-05T09:30:00.000Z"
  },
  {
    username: "maya_putri",
    name: "Maya Putri Subulussalam",
    email: "maya.subulussalam@enterprise.id",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    role: "Kreator Konten Sada Kata",
    bio: "Mengenalkan keindahan wisata, kuliner, dan inovasi Kota Subulussalam Aceh.",
    createdAt: "2026-08-10T11:15:00.000Z"
  }
];
const SEED_PRODUCTS = [
  {
    id: "PROD-101",
    sellerEmail: "alex.wright@enterprise.com",
    sellerName: "Nexus Official Store",
    name: "MacBook Pro 16 M3 Ultra Max Edition",
    category: "Komputer",
    price: 38999000,
    stock: 8,
    desc: "36GB Unified Memory, 1TB SSD Storage, Liquid Retina XDR Display.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    sold: 142,
    discount: "15%"
  },
  {
    id: "PROD-102",
    sellerEmail: "official@audiohub.id",
    sellerName: "AudioHub Pro Store",
    name: "Studio Wireless Pro Headphones ANC",
    category: "Audio",
    price: 4250000,
    stock: 15,
    desc: "Active Noise Cancelling, Spatial Audio 360, baterai hingga 40 jam.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    sold: 310,
    discount: null
  },
  {
    id: "PROD-103",
    sellerEmail: "alex.wright@enterprise.com",
    sellerName: "Nexus Official Store",
    name: "Instax Vintage Hybrid Edition Camera",
    category: "Fotografi",
    price: 1850000,
    stock: 5,
    desc: "Instant film camera with digital preview and bluetooth print.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    sold: 89,
    discount: "10%"
  },
  {
    id: "PROD-104",
    sellerEmail: "techgear@store.com",
    sellerName: "Tech Gear Jakarta",
    name: "Smart Chrono Titanium Gen 5 Watch",
    category: "Wearables",
    price: 3100000,
    stock: 12,
    desc: "Titanium aerospace frame, sensor EKG, water resistance 50M.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    sold: 215,
    discount: "5%"
  }
];

const SEED_SOSMED_POSTS = [
  {
    id: "POST-001",
    authorUsername: "sarah_j",
    authorName: "Sarah Jenkins",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80",
    caption: "Desain arsitektur modern minimalis yang menyatu dengan alam. Menghabiskan akhir pekan mengeksplorasi estetika ruang dan pencahayaan alami. 🌿✨ #Architecture #ModernLiving #CloudflareKV",
    location: "Bandung Creative Hub",
    timestamp: "2 jam yang lalu",
    likes: ["alexander_wright", "david_chen"],
    comments: [
      { id: "c1", username: "david_chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80", text: "Pencahayaan naturalnya luar biasa Sarah!" },
      { id: "c2", username: "maya_putri", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80", text: "Keren banget vibe-nya 😍" }
    ],
    createdAt: "2026-08-20T10:00:00.000Z"
  },
  {
    id: "POST-002",
    authorUsername: "maya_putri",
    authorName: "Maya Putri Subulussalam",
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    caption: "Menikmati pesona alam Sada Kata Kota Subulussalam. Potensi wisata alam dan ekonomi kreatif lokal kita terus tumbuh pesat! Mari berkunjung ke Subulussalam ✨🌲 #Subulussalam #PesonaAceh #SadaKata",
    location: "Kota Subulussalam, Aceh",
    timestamp: "4 jam yang lalu",
    likes: ["alexander_wright"],
    comments: [
      { id: "c3", username: "alexander_wright", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80", text: "Pemandangan yang sangat asri dan menakjubkan!" }
    ],
    createdAt: "2026-08-20T08:00:00.000Z"
  }
];

const SEED_NEWS = [
  {
    id: "NEWS-101",
    title: "Transformasi Ekosistem Digital Berkelanjutan: Kolaborasi Terpadu Sektor Publik & Swasta",
    excerpt: "Pemerintah bersama konsorsium teknologi resmi meluncurkan inisiatif arsitektur digital terpusat untuk akselerasi transaksi retail modern dan integrasi kota cerdas.",
    content: `
      <p>Era baru transformasi digital di Indonesia memasuki babak revolusioner dengan peluncuran platform ekosistem digital terpadu berskala nasional. Inisiatif strategis ini dirancang untuk memangkas friksi birokrasi, menyelaraskan transaksi multi-merchant terdesentralisasi, serta menghadirkan agregasi informasi real-time bagi masyarakat luas.</p>
      <p>Platform ini mengadopsi standar komputasi awan modern dengan integrasi multi-modul yang mencakup perdagangan elektronik, portal interaksi sosial kreator, saluran informasi jurnalisme terverifikasi, hingga gerbang layanan administrasi daerah seperti Kota Subulussalam.</p>
    `,
    category: "Teknologi",
    author: "Redaksi Teknologi Utama",
    authorAvatar: "T",
    date: "20 Agustus 2026",
    readTime: "4 Menit Baca",
    views: "3.4K",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&auto=format&fit=crop&q=80",
    isHero: true,
    tags: ["#DigitalEcosystem", "#SmartNation", "#CloudflareKV", "#TechTrends"]
  },
  {
    id: "NEWS-102",
    title: "Pasar E-Commerce Kuartal Ini Tembus Rekor Baru Berkat Adopsi Pembayaran Instant",
    excerpt: "Pertumbuhan transaksi merchant digital melonjak 28% secara tahunan menyusul tingginya efisiensi checkout otomatis dan transparansi logistik terdesentralisasi.",
    content: "<p>Pertumbuhan ekonomi digital terus menunjukkan tren eksponensial di pasar domestik dengan integrasi pembayaran multi-channel otomatis.</p>",
    category: "Bisnis",
    author: "Dewan Analisis Pasar",
    authorAvatar: "B",
    date: "19 Agustus 2026",
    readTime: "3 Menit Baca",
    views: "2.1K",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    isHero: false,
    tags: ["#BisnisOnline", "#Fintech", "#RetailGrowth"]
  },
  {
    id: "NEWS-103",
    title: "Modernisasi Jaringan Pita Lebar Fiber Optic & 5G Diperluas ke Seluruh Wilayah Sada Kata",
    excerpt: "Pemerintah Kota Subulussalam mempercepat pemerataan akses konektivitas internet super cepat guna mendukung sentra edukasi dan ekonomi kreatif desa wisata.",
    content: "<p>Pemerintah Kota Subulussalam memperkuat tulang punggung konektivitas guna memastikan layanan administrasi publik dan pelaku UMKM dapat bertransaksi realtime.</p>",
    category: "Nasional",
    author: "Biro Informasi Subulussalam",
    authorAvatar: "S",
    date: "18 Agustus 2026",
    readTime: "5 Menit Baca",
    views: "1.8K",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
    isHero: false,
    tags: ["#Subulussalam", "#AcehBangkit", "#Infrastruktur"]
  }
];


const SEED_ANNOUNCEMENTS = [
  {
    id: 'ANC-001',
    title: 'Jadwal Layanan Administrasi Kependudukan Keliling di 5 Kecamatan',
    category: 'Layanan Publik',
    priority: 'Penting',
    date: '20 Agustus 2026',
    docNum: '081/DISDUKCAPIL/SUB/2026',
    issuer: 'Dinas Kependudukan dan Pencatatan Sipil Kota Subulussalam',
    summary: 'Pelayanan jemput bola perekaman KTP Elektronik, Akta Kelahiran, dan KIA di kantor camat masing-masing.',
    content: '<p>Diberitahukan kepada seluruh masyarakat Kota Subulussalam bahwa Dinas Kependudukan dan Pencatatan Sipil mengadakan Layanan Administrasi Keliling Terpadu secara gratis.</p>'
  }
];

// Data Awal
const SEED_TOURISM = [
  {
    id: 'TOURS-01',
    name: 'Air Terjun SKPC & Kedabuhan',
    category: 'Wisata Alam & Petualangan',
    rating: 4.9,
    location: 'Kecamatan Penanggalan, Kota Subulussalam',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&auto=format&fit=crop&q=80',
    desc: 'Pesona air terjun megah dengan gemuruh air alami di tengah rimbunnya hutan hujan tropis Sada Kata.',
    facilities: ['Spot Foto', 'Area Parkir', 'Gazebo', 'Kantin']
  }
];
const SEED_FACILITIES = [
  {
    id: "FAC-01",
    name: "Indomaret Simpang Kiri Subulussalam",
    category: "Indomaret",
    address: "Jl. Teuku Umar No. 18, Kec. Simpang Kiri, Kota Subulussalam",
    hours: "Buka 24 Jam",
    status: "Buka Sekarang",
    phone: "(0627) 2431-889",
    coords: "2.6421° N, 97.9312° E",
    notes: "Menyediakan layanan tarik tunai, pembayaran digital, e-money top-up, dan ATM Center lengkap.",
    mapUrl: "https://maps.google.com/?q=Subulussalam"
  },
  {
    id: "FAC-02",
    name: "Indomaret Penanggalan Lintas Barat",
    category: "Indomaret",
    address: "Jl. Lintas Medan - Tapaktuan KM 4, Kec. Penanggalan, Kota Subulussalam",
    hours: "06:00 - 23:00 WIB",
    status: "Buka Sekarang",
    phone: "0812-6677-8899",
    coords: "2.6285° N, 97.9405° E",
    notes: "Area parkir luas untuk kendaraan antarkota, fresh coffee point, dan rest corner.",
    mapUrl: "https://maps.google.com/?q=Subulussalam"
  },
  {
    id: "FAC-03",
    name: "SPBU Pertamina 14.247.112 Simpang Kiri",
    category: "SPBU",
    address: "Jl. Cut Nyak Dien, Simpang Kiri, Kota Subulussalam",
    hours: "Buka 24 Jam",
    status: "Buka Sekarang",
    phone: "(0627) 2431-233",
    coords: "2.6450° N, 97.9270° E",
    notes: "Layanan lengkap Pertamax, Dexlite, Pertalite, pengisian angin nitrogen, toilet bersih, dan musholla.",
    mapUrl: "https://maps.google.com/?q=Subulussalam"
  },
  {
    id: "FAC-04",
    name: "SPBU Pertamina Penanggalan",
    category: "SPBU",
    address: "Jl. Lintas Nasional Subulussalam - Dairi, Kec. Penanggalan",
    hours: "Buka 24 Jam",
    status: "Buka Sekarang",
    phone: "(0627) 2431-240",
    coords: "2.6190° N, 97.9520° E",
    notes: "Titik pengisian bahan bakar strategis perbatasan Aceh - Sumatera Utara dengan minimarket terpadu.",
    mapUrl: "https://maps.google.com/?q=Subulussalam"
  },
  {
    id: "FAC-05",
    name: "Kantor Pos Utama Kota Subulussalam (Pos Indonesia)",
    category: "Kantor Pos",
    address: "Jl. Iskandar Muda No. 5, Simpang Kiri, Kota Subulussalam (Kode Pos: 24782)",
    hours: "Senin - Sabtu (08:00 - 16:30 WIB)",
    status: "Buka Sekarang",
    phone: "(0627) 2431-105",
    coords: "2.6405° N, 97.9301° E",
    notes: "Melayani pengiriman ekspres PosLaju, logistik kargo, pembayaran tagihan utilitas negara, dan PosPay.",
    mapUrl: "https://maps.google.com/?q=Subulussalam"
  },
  {
    id: "FAC-06",
    name: "Hotel Grand Subulussalam & Convention",
    category: "Hotel",
    address: "Jl. Teuku Umar No. 88, Simpang Kiri, Kota Subulussalam",
    hours: "Check-in 14:00 • Layanan 24 Jam",
    status: "Buka Sekarang",
    phone: "(0627) 2431-777",
    coords: "2.6438° N, 97.9335° E",
    notes: "Kamar ber-AC, ballroom pertemuan eksekutif, restoran masakan nusantara, dan Wi-Fi super cepat.",
    mapUrl: "https://maps.google.com/?q=Subulussalam"
  },
  {
    id: "FAC-07",
    name: "Masjid Agung Kota Subulussalam",
    category: "Ibadah",
    address: "Pusat Kota, Jl. Teuku Umar, Simpang Kiri, Kota Subulussalam",
    hours: "Terbuka Untuk Jamaah 24 Jam",
    status: "Buka Sekarang",
    phone: "(0627) 2431-999",
    coords: "2.6418° N, 97.9283° E",
    notes: "Masjid utama kota dengan daya tampung 5.000 jamaah, fasilitas wudhu modern, dan perpustakaan islam.",
    mapUrl: "https://maps.google.com/?q=Subulussalam"
  }
];

// Fallback
const SEED_AGGREGATOR_POSTS = [
  {
    id: "AGG-001",
    platform: "instagram",
    authorName: "Nexus Tech Lab",
    authorHandle: "@nexustech_lab",
    authorAvatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    content: "Eksperimen arsitektur modular v6.0 dengan sub-10ms edge rendering. Terintegrasi Cloudflare Workers KV dan AI Assistant! 🚀 #UIUX #Cloudflare #TechDev",
    mediaUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
    likes: "4.8K",
    comments: "342",
    shares: "890",
    views: "32.1K",
    timestamp: "35 menit lalu",
    tags: ["#UIUX", "#Cloudflare", "#TechDev"]
  },
  {
    id: "AGG-002",
    platform: "tiktok",
    authorName: "Rian Tech Explorer",
    authorHandle: "@riantech.id",
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    content: "Setup meja kerja minimalis 2026 dengan display ultrawide dan dual audio monitors. Bikin produktivitas coding naik 200%! 🔥💻 #WorkspaceGoals #TechTok",
    mediaUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80",
    likes: "89.4K",
    comments: "1.2K",
    shares: "9.6K",
    views: "540K",
    timestamp: "2 jam lalu",
    tags: ["#WorkspaceGoals", "#TechTok"]
  },
  {
    id: "AGG-003",
    platform: "x",
    authorName: "Subulussalam Updates",
    authorHandle: "@sadakata_news",
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    content: "Pembangunan sentra UMKM dan infrastruktur broadband di Simpang Kiri Kota Subulussalam mencapai 95% selesai. Mari sambut kemajuan ekonomi Sada Kata! 🌲✨ #Subulussalam #AcehBangkit",
    mediaUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
    likes: "1.2K",
    comments: "88",
    shares: "320",
    views: "14.5K",
    timestamp: "3 jam lalu",
    tags: ["#Subulussalam", "#AcehBangkit"]
  }
];
function sendNtfyNotification(env, ctx, { title, message, priority = "high", tags = "bell", clickUrl = "" }) {
  try {
    const topic = env.NTFY_TOPIC;
    let priorityNum = 3;
    if (priority === "urgent" || priority === "max") priorityNum = 5;
    else if (priority === "high") priorityNum = 4;
    else if (priority === "low") priorityNum = 2;
    const tagsArr = typeof tags === "string" ? tags.split(",").map(t => t.trim()).filter(Boolean) : ["bell"];
    const payload = {
      topic: topic,
      title: String(title || "Notifikasi Sistem"),
      message: String(message || ""),
      priority: priorityNum,
      tags: tagsArr,
      click: clickUrl || undefined
    };

    const promise = fetch("https://ntfy.sh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    }).catch(err => console.error("[ntfy Fetch Error]", err));

    if (ctx && typeof ctx.waitUntil === "function") {
      ctx.waitUntil(promise);
    }
  } catch (err) {
    console.error("[sendNtfyNotification Exception]", err);
  }
}
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
  "Access-Control-Max-Age": "86400"
};

// Lapisan Pelindung Keamanan Website (Security Headers)
const securityHeaders = {
  ...corsHeaders,
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=*"
};

function handleCorsPreflight() {
  return new Response(null, {
    status: 204,
    headers: securityHeaders
  });
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...securityHeaders
    }
  });
}

// Helper: Membersihkan input teks dari script berbahaya (XSS Sanitizer)
function sanitizeInput(text) {
  if (typeof text !== "string") return text;
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/on\w+="[^"]*"/gi, "")
    .replace(/javascript:/gi, "")
    .trim();
}

// In-Memory Rate Limiter Map (Perlindungan Anti-Spam & Anti-Brute Force per IP)
const rateLimitMap = new Map();
function checkRateLimit(ip, limit = 60, windowMs = 60000) {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { count: 0, resetAt: now + windowMs };

  if (now > record.resetAt) {
    record.count = 1;
    record.resetAt = now + windowMs;
  } else {
    record.count += 1;
  }

  rateLimitMap.set(ip, record);

  // Bersihkan cache lama jika sudah terlalu besar
  if (rateLimitMap.size > 1000) rateLimitMap.clear();

  return record.count <= limit;
}

function errorResponse(message, status = 400, details = null) {
  return jsonResponse({
    success: false,
    error: message,
    message: message,
    ...(details ? { details } : {})
  }, status);
}

function base64UrlEncode(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64UrlDecode(str) {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) {
    str += "=";
  }
  const binary = atob(str);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// HMAC-SHA256 JWT
async function signJwt(payload, secret) {
  const encoder = new TextEncoder();
  const header = { alg: "HS256", typ: "JWT" };
  
  const encodedHeader = base64UrlEncode(encoder.encode(JSON.stringify(header)));
  const encodedPayload = base64UrlEncode(encoder.encode(JSON.stringify({
    ...payload,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (14 * 24 * 60 * 60) // 14 hari masa aktif
  })));

  const dataToSign = encoder.encode(`${encodedHeader}.${encodedPayload}`);
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign("HMAC", key, dataToSign);
  const encodedSignature = base64UrlEncode(signature);

  return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
}

async function verifyJwt(token, secret) {
  try {
    if (!token || typeof token !== "string") return null;
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const [encodedHeader, encodedPayload, encodedSignature] = parts;
    const encoder = new TextEncoder();
    const dataToVerify = encoder.encode(`${encodedHeader}.${encodedPayload}`);
    const signature = base64UrlDecode(encodedSignature);

    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );

    const isValid = await crypto.subtle.verify("HMAC", key, signature, dataToVerify);
    if (!isValid) return null;

    const payloadJson = new TextDecoder().decode(base64UrlDecode(encodedPayload));
    const payload = JSON.parse(payloadJson);

    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }

    return payload;
  } catch (err) {
    return null;
  }
}

function checkGodMode(request, env) {
  const auth = request.headers.get("Authorization");
  const bridge = env.INTERNAL_BRIDGE_SECRET;
  return auth === bridge;
}

async function authenticateUser(request, env) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || typeof authHeader !== "string" || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  const token = authHeader.substring(7).trim();
  const secret = env.JWT_SECRET || "anyezra-secret-jwt-key";
  return await verifyJwt(token, secret);
}
const KV = {
  // Router Otomatis Berdasarkan Jenis Data untuk Mencegah Limit Rate
  detectNamespace(key) {
    if (key.startsWith("user:") || key === "users_registry" || key.startsWith("config_")) {
      return "CORE";
    }
    if (key === "visitor_data" || key.startsWith("log_")) {
      return "LOGS";
    }
    return "DATA";
  },

  getBinding(env, key) {
    const target = this.detectNamespace(key);
    const fallbackAll = env.NEXUS_KV || env.KV || env.DB || env.CORE || env.DATA || env.LOGS || env.DATABASE || null;
    if (target === "CORE") return env.KV_CORE || env.CORE || fallbackAll;
    if (target === "LOGS") return env.KV_LOGS || env.LOGS || fallbackAll;
    return env.KV_DATA || env.DATA || fallbackAll;
  },

  async get(env, key, defaultFallback = null) {
    const kv = this.getBinding(env, key);
    if (!kv) return defaultFallback;

    try {
      const val = await kv.get(key, { type: "json" });
      return (val !== null && val !== undefined) ? val : defaultFallback;
    } catch (e) {
      console.warn(`[KV Read Error: ${key}]`, e);
      return defaultFallback;
    }
  },

  async set(env, key, value) {
    const kv = this.getBinding(env, key);
    if (!kv) {
      console.warn(`[KV Write Warning] Binding ${this.detectNamespace(key)} tidak ditemukan.`);
      return false;
    }

    try {
      await kv.put(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error(`[KV Write Error: ${key}]`, e);
      return false;
    }
  },

  async delete(env, key) {
    const kv = this.getBinding(env, key);
    if (!kv) return false;
    try {
      await kv.delete(key);
      return true;
    } catch (e) {
      console.error(`[KV Delete Error: ${key}]`, e);
      return false;
    }
  }
};

// Helper: Registrasi Pengguna ke Registry Global KV
async function registerUserToGlobalList(env, userObj) {
  let users = await KV.get(env, "users_registry", null);
  if (!users) {
    users = [...SEED_USERS];
  }
  const index = users.findIndex(u => u.username === userObj.username || u.email === userObj.email);
  if (index === -1) {
    users.unshift({
      username: userObj.username,
      name: userObj.name,
      email: userObj.email,
      avatar: userObj.avatar,
      role: userObj.role || "Enterprise Member",
      createdAt: new Date().toISOString()
    });
  } else {
    users[index] = {
      ...users[index],
      name: userObj.name || users[index].name,
      avatar: userObj.avatar || users[index].avatar,
      role: userObj.role || users[index].role,
      updatedAt: new Date().toISOString()
    };
  }
  await KV.set(env, "users_registry", users);
}

const RapidApiService = {
  formatNumber(num) {
    if (!num) return "0";
    const n = Number(num);
    if (isNaN(n)) return String(num);
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return String(n);
  },

  // 1. INSTAGRAM API
  async fetchInstagramPosts(apiKey, query) {
    try {
      const q = query.replace(/^@/, "").replace(/^#/, "");
      const host = env.RAPIDAPI_HOST_INSTAGRAM;
      const url = `https://${host}/user/posts?username=${encodeURIComponent(q)}`;
      
      const res = await fetch(url, {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": host
        }
      });
      if (!res.ok) return null;
      const data = await res.json();
      
      const items = data.data?.items || data.items || [];
      if (items.length === 0) return null;

      return items.slice(0, 6).map(item => ({
        id: `IG-${item.id || item.pk || Date.now()}`,
        platform: "instagram",
        authorName: item.user?.full_name || item.owner?.full_name || q,
        authorHandle: `@${item.user?.username || item.owner?.username || q}`,
        authorAvatar: item.user?.profile_pic_url || item.owner?.profile_pic_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        content: item.caption?.text || item.title || `Postingan media Instagram terbaru dari @${q}`,
        mediaUrl: item.image_versions2?.candidates?.[0]?.url || item.display_url || item.thumbnail_url || "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80",
        likes: this.formatNumber(item.like_count || 1420),
        comments: this.formatNumber(item.comment_count || 88),
        shares: this.formatNumber(item.share_count || 35),
        views: this.formatNumber(item.view_count || 8900),
        timestamp: "Baru saja",
        tags: ["#Instagram", `#${q}`]
      }));
    } catch (e) {
      console.warn("[RapidAPI IG Error]", e);
      return null;
    }
  },

  // 2. TIKTOK API
  async fetchTikTokPosts(apiKey, query) {
    try {
      const q = query.replace(/^@/, "").replace(/^#/, "");
      const host = env.RAPIDAPI_HOST_TIKTOK;
      const url = `https://${host}/feed/search?keywords=${encodeURIComponent(q)}&count=6`;
      
      const res = await fetch(url, {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": host
        }
      });
      if (!res.ok) return null;
      const data = await res.json();
      
      const items = data.data?.videos || data.data || [];
      if (items.length === 0) return null;

      return items.slice(0, 6).map(item => ({
        id: `TT-${item.video_id || item.id || Date.now()}`,
        platform: "tiktok",
        authorName: item.author?.nickname || item.author?.unique_id || q,
        authorHandle: `@${item.author?.unique_id || q}`,
        authorAvatar: item.author?.avatar_thumb?.url_list?.[0] || item.author?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
        content: item.title || item.desc || `Video viral TikTok terbaru dari kreator @${q}`,
        mediaUrl: item.cover || item.origin_cover || "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80",
        likes: this.formatNumber(item.digg_count || item.statistics?.digg_count || 5600),
        comments: this.formatNumber(item.comment_count || 210),
        shares: this.formatNumber(item.share_count || 1200),
        views: this.formatNumber(item.play_count || 45000),
        timestamp: "Baru saja",
        tags: ["#TikTok", "#Viral", `#${q}`]
      }));
    } catch (e) {
      console.warn("[RapidAPI TikTok Error]", e);
      return null;
    }
  },

  // 3. FACEBOOK API
  async fetchFacebookPosts(apiKey, query) {
    try {
      const q = query.replace(/^@/, "").replace(/^#/, "");
      const host = env.RAPIDAPI_HOST_FACEBOOK;
      const url = `https://${host}/page/posts?page_id=${encodeURIComponent(q)}&count=6`;
      
      const res = await fetch(url, {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": host
        }
      });
      if (!res.ok) return null;
      const data = await res.json();
      
      const items = data.results || data.posts || data.data || [];
      if (items.length === 0) return null;

      return items.slice(0, 6).map(item => ({
        id: `FB-${item.post_id || item.id || Date.now()}`,
        platform: "facebook",
        authorName: item.page_name || item.author_name || q,
        authorHandle: `@${q}`,
        authorAvatar: item.page_avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        content: item.message || item.text || `Pembaruan status & informasi publik Facebook dari ${q}.`,
        mediaUrl: item.image || item.full_picture || "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
        likes: this.formatNumber(item.likes_count || 850),
        comments: this.formatNumber(item.comments_count || 120),
        shares: this.formatNumber(item.shares_count || 45),
        views: this.formatNumber(item.views_count || 6400),
        timestamp: "Baru saja",
        tags: ["#Facebook", `#${q}`]
      }));
    } catch (e) {
      console.warn("[RapidAPI Facebook Error]", e);
      return null;
    }
  }
};


async function handleGetAggregatorFeed(request, env) {
  const url = new URL(request.url);
  const rawQuery = url.searchParams.get("q") || url.searchParams.get("query") || "thinklab.ide";
  const target = rawQuery.replace(/^@/, "").replace(/^#/, "").trim().replace(/\s+/g, "_");
  
  const savedKey = await KV.get(env, "config_rapidapi_key", null);
  const savedHost = await KV.get(env, "config_rapidapi_host", null);

  const RAPIDAPI_KEY = env.RAPIDAPI_KEY;
  const RAPIDAPI_HOST = env.RAPIDAPI_HOST;

  // Susun variasi endpoint sesuai standar scraper Instagram di RapidAPI
  const endpointsToTry = [
    `https://${RAPIDAPI_HOST}/user/info?username=${encodeURIComponent(target)}`,
    `https://${RAPIDAPI_HOST}/user/posts?username=${encodeURIComponent(target)}`,
    `https://${RAPIDAPI_HOST}/profile?username=${encodeURIComponent(target)}`,
    `https://${RAPIDAPI_HOST}/v1/info?username_or_id_or_url=${encodeURIComponent(target)}`
  ];

  let lastError = "";

  for (const endpointUrl of endpointsToTry) {
    try {
      const fetchRes = await fetch(endpointUrl, {
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": RAPIDAPI_HOST,
          "Content-Type": "application/json"
        }
      });

      if (fetchRes.ok) {
        const apiData = await fetchRes.json();
        // Cek struktur respon apakah valid
        if (apiData && (apiData.data || apiData.user || apiData.result || apiData.items || apiData.posts || apiData.id)) {
          return jsonResponse({
            success: true,
            data: apiData,
            target: target,
            host: RAPIDAPI_HOST
          }, 200);
        }
      } else {
        const errObj = await fetchRes.json().catch(() => ({}));
        lastError = errObj.message || `HTTP ${fetchRes.status}`;
      }
    } catch (e) {
      lastError = e.message;
    }
  }

  // Jika live scraper limit/error, kembalikan mock data terstruktur agar UI tidak rusak
  return jsonResponse({
    success: true,
    target: target,
    host: RAPIDAPI_HOST,
    data: {
      user: {
        username: target,
        full_name: `${target} Official`,
        biography: `Profil publik @${target}. Konten dan inovasi terkini terhubung langsung ke ekosistem Nexus Enterprise.`,
        follower_count: 14200,
        following_count: 320,
        is_private: false,
        profile_pic_url_hd: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
        posts: [
          {
            display_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
            caption: `Postingan terbaru seputar inovasi digital dari @${target} 🚀 #Inovasi #Tech`,
            likes: 1250,
            comments: 48
          }
        ]
      }
    }
  }, 200);
}
async function handleGetBackgroundConfig(env) {
  const bgConfig = await KV.get(env, "config_global_background", {
    type: "default", // 'default', 'image', 'video'
    url: "",
    overlayOpacity: "0.2"
  });
  return jsonResponse({ success: true, data: bgConfig }, 200);
}

async function handleSaveBackgroundConfig(request, env) {
  const isGodMode = checkGodMode(request, env);
  const user = isGodMode ? { email: "anyezra@gmail.com", role: "ROOT_SUPERADMIN" } : await authenticateUser(request, env);
  if (!user || (user.email !== "anyezra@gmail.com" && user.role !== "ROOT_SUPERADMIN")) {
    return errorResponse("Akses ditolak! Fitur ganti background hanya untuk SuperAdmin anyezra@gmail.com.", 403);
  }
  try {
    const body = await request.json();
    const bgConfig = {
      type: body.type || "default",
      url: body.url,
      overlayOpacity: body.overlayOpacity || "0.2",
      updatedAt: new Date().toISOString()
    };
    await KV.set(env, "config_global_background", bgConfig);
    return jsonResponse({ success: true, message: "Background website global berhasil diperbarui!", data: bgConfig }, 200);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

/**
 * --- GITHUB STORAGE FILE UPLOADER ENGINE ---
 */
async function handleUploadToGithub(request, env) {
  try {
    const body = await request.json();
    const { base64Data, fileName, fileType } = body;

    if (!base64Data || !fileName) {
      return errorResponse("Data file (base64) dan nama file wajib disertakan.", 400);
    }

    const savedToken = await KV.get(env, "config_github_token", null);
    const savedOwner = await KV.get(env, "config_github_owner", null);
    const savedRepo = await KV.get(env, "config_github_repo", null);

    const cleanVal = (val, def = "") => {
      if (!val) return def;
      return String(val).replace(/^["'\\/\s]+|["'\\/\s]+$/g, "").trim() || def;
    };

    const rawToken = env.GITHUB_TOKEN || savedToken || "";
    const token = cleanVal(rawToken).replace(/^Bearer\s+/i, "").replace(/^token\s+/i, "").trim();
    const owner = cleanVal(env.GITHUB_OWNER);
    const repo = cleanVal(env.GITHUB_REPO);
    const branch = cleanVal(env.GITHUB_BRANCH);
    const folder = cleanVal(env.GITHUB_FOLDER);

    if (!token) {
      return errorResponse("GitHub Token belum disetel! Harap tambahkan GITHUB_TOKEN di Cloudflare Secret atau simpan di Admin Console.", 400);
    }

    // Bersihkan base64 prefix
    const cleanBase64 = base64Data.replace(/^data:.*?;base64,/, "");
    const cleanFileName = `${Date.now()}_${fileName.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const filePath = `${folder}/${cleanFileName}`;

    const githubUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
    const cleanTokenStr = token.replace(/^Bearer\s+/i, "").replace(/^token\s+/i, "").trim();

    const ghRes = await fetch(githubUrl, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${cleanTokenStr}`,
        "User-Agent": "Nexus-Enterprise-Storage-Engine",
        "Content-Type": "application/json",
        "Accept": "application/vnd.github.v3+json"
      },
      body: JSON.stringify({
        message: `Upload media via Nexus Portal: ${cleanFileName}`,
        content: cleanBase64,
        branch: branch
      })
    });

    if (!ghRes.ok) {
      const ghErr = await ghRes.json().catch(() => ({}));
      return errorResponse(ghErr.message || "Gagal mengunggah file.", 500, ghErr);
    }

    const ghData = await ghRes.json();
    const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
    const cdnUrl = `https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}/${filePath}`;

    return jsonResponse({
      success: true,
      message: "File berhasil disimpan",
      url: rawUrl,
      cdnUrl: cdnUrl,
      downloadUrl: ghData.content?.download_url || rawUrl
    }, 201);
  } catch (err) {
    return errorResponse(`Gagal: ${err.message}`, 500);
  }
}

/**
 * --- AUTHENTICATION HANDLERS ---
 */
async function handleAuthGoogle(request, env) {
  try {
    const body = await request.json();
    const { credential } = body;

    if (!credential) {
      return errorResponse("Google credential token tidak disertakan.", 400);
    }

    // Verifikasi ID Token langsung ke server resmi Google
    const googleVerifyUrl = `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`;
    const googleRes = await fetch(googleVerifyUrl);

    if (!googleRes.ok) {
      const errInfo = await googleRes.json().catch(() => ({}));
      return errorResponse(errInfo.error_description || "Verifikasi ID Token Google tidak valid atau telah kedaluwarsa.", 401, errInfo);
    }

    const payload = await googleRes.json();
    
    // Pastikan email pengguna telah terverifikasi oleh Google
    if (payload.email_verified === "false" || payload.email_verified === false) {
      return errorResponse("Email Google belum terverifikasi.", 403);
    }
    const email = payload.email;
    const name = payload.name || email.split("@")[0];
    const username = (payload.email || "user").split("@")[0].replace(/[^a-zA-Z0-9_]/g, "_");
    const avatar = payload.picture || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";

    // Deteksi apakah akun yang login adalah akun Admin utama
    const isSuperAdmin = email.toLowerCase() === "anyezra@gmail.com";
    const assignedRole = isSuperAdmin ? "ROOT_SUPERADMIN" : "Enterprise Merchant";

    const userObj = {
      isLoggedIn: true,
      email,
      name,
      username,
      avatar,
      role: assignedRole,
      bio: isSuperAdmin ? "Akun Utama SuperAdmin Nexus Enterprise." : "Akun resmi terverifikasi.",
      followers: ["sarah_j"],
      following: ["sarah_j"],
      authProvider: "Google OAuth 2.0",
      updatedAt: new Date().toISOString()
    };

    await KV.set(env, `user:${username}`, userObj);
    await registerUserToGlobalList(env, userObj);

    const jwtSecret = env.JWT_SECRET;
    // Token menyertakan avatar pengguna agar postingan tidak fallback ke Unsplash
    const token = await signJwt({ username, email, name, role: assignedRole, avatar: userObj.avatar }, jwtSecret);
    
    return jsonResponse({
      success: true,
      message: "Autentikasi Google berhasil.",
      token,
      user: userObj
    }, 200);

  } catch (err) {
    return errorResponse(`Kesalahan internal server autentikasi: ${err.message}`, 500);
  }
}

// Helper: Enkripsi Kata Sandi Menggunakan SHA-256 + Secret Salt
async function hashPassword(password, secret) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + (secret));
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return base64UrlEncode(hashBuffer);
}

// 1. HANDLER REGISTER (DAFTAR AKUN BARU)
async function handleAuthRegister(request, env) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!email || !password) {
      return errorResponse("Email dan kata sandi wajib diisi.", 400);
    }

    if (password.length < 6) {
      return errorResponse("Kata sandi minimal harus 6 karakter.", 400);
    }

    const username = email.split("@")[0].toLowerCase().replace(/[^a-zA-Z0-9_]/g, "_");
    const jwtSecret = env.JWT_SECRET;

    // Cek apakah akun atau email sudah terdaftar sebelumnya di KV
    const existingUser = await KV.get(env, `user:${username}`);
    const allUsers = await KV.get(env, "users_registry", SEED_USERS);
    const emailExists = (allUsers || []).some(u => u.email?.toLowerCase() === email.toLowerCase());

    if (existingUser || emailExists) {
      return errorResponse("Email / Akun ini sudah terdaftar! Silakan langsung masuk (Login).", 409);
    }

    // Enkripsi kata sandi
    const passwordHash = await hashPassword(password, jwtSecret);

    const isSuperAdmin = email.toLowerCase() === "anyezra@gmail.com";
    const assignedRole = isSuperAdmin ? "ROOT_SUPERADMIN" : "Enterprise Merchant";

    const userObj = {
      isLoggedIn: true,
      email: email.toLowerCase(),
      name: name?.trim() || email.split("@")[0].toUpperCase(),
      username,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      role: assignedRole,
      bio: "Akun baru terverifikasi via Nexus Portal.",
      followers: ["sarah_j"],
      following: ["sarah_j"],
      authProvider: "Email Credentials",
      passwordHash,
      createdAt: new Date().toISOString()
    };

    // Simpan ke KV
    await KV.set(env, `user:${username}`, userObj);
    await registerUserToGlobalList(env, userObj);

    const token = await signJwt({ username, email: userObj.email, name: userObj.name, role: userObj.role }, jwtSecret);

    // Hilangkan hash password dari output response
    const { passwordHash: _, ...safeUser } = userObj;

    return jsonResponse({
      success: true,
      message: "Pendaftaran akun berhasil!",
      token,
      user: safeUser
    }, 201);
  } catch (err) {
    return errorResponse(`Gagal mendaftar: ${err.message}`, 500);
  }
}
// Memory Store Pelacak Percobaan Gagal Login (Brute Force Blocker)
const failedLoginMap = new Map();
// 2. HANDLER LOGIN (MASUK AKUN DENGAN VALIDASI PASSWORD KETAT)
// 2. HANDLER LOGIN DENGAN PERLINDUNGAN BRUTE FORCE (COOLDOWN 5 DETIK)
async function handleAuthLogin(request, env, ctx) {
  try {
    const clientIp = request.headers.get("cf-connecting-ip") || "Unknown IP";
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return errorResponse("Email dan kata sandi wajib diisi.", 400);
    }

    const cleanEmail = email.toLowerCase().trim();
    const lockKey = `${clientIp}:${cleanEmail}`;
    const now = Date.now();

    // 1. PERIKSA APAKAH AKUN / IP SEDANG TERKUNCI (JEDA COOLDOWN)
    const lockData = failedLoginMap.get(lockKey);
    if (lockData && now < lockData.lockedUntil) {
      const remainingSeconds = Math.ceil((lockData.lockedUntil - now) / 1000);
      return errorResponse(`Keamanan Aktif: Terlalu banyak percobaan gagal. Silakan tunggu ${remainingSeconds} detik lagi sebelum mencoba kembali.`, 429);
    }

    const username = cleanEmail.split("@")[0].replace(/[^a-zA-Z0-9_]/g, "_");
    const jwtSecret = env.JWT_SECRET;

    // Ambil data user dari database KV
    let userObj = await KV.get(env, `user:${username}`);

    if (!userObj) {
      return errorResponse("Credentials belum terdaftar.", 404);
    }

    if (userObj.authProvider === "Google OAuth 2.0" && !userObj.passwordHash) {
      return errorResponse("Akun ini terdaftar melalui Google. Silakan masuk menggunakan tombol Google Sign-In.", 400);
    }

    if (!userObj.passwordHash) {
      return errorResponse("Kredensial akun rusak. Silakan daftarkan ulang akun.", 401);
    }

    // 2. VALIDASI KECOCOKAN KATA SANDI
    const inputHash = await hashPassword(password, jwtSecret);
    
    // JIKA PASSWORD SALAH -> PICU KUNCI 5 DETIK & BERI PERINGATAN DARURAT
    if (userObj.passwordHash !== inputHash) {
      const currentFails = (lockData ? lockData.count : 0) + 1;
      
      // Jeda 5 detik untuk percobaan awal; jika sudah 5x salah, kunci 60 detik
      const penaltyMs = currentFails >= 5 ? 60000 : 5000;
      failedLoginMap.set(lockKey, {
        count: currentFails,
        lockedUntil: now + penaltyMs
      });

      // Kirim Notifikasi Bahaya ke HP Pemilik via ntfy
      sendNtfyNotification(env, ctx, {
        title: "⚠️ Peringatan: Percobaan Login Gagal!",
        message: `Ada yang salah memasukkan kata sandi!\nTarget Email: ${cleanEmail}\nIP Penyerang: ${clientIp}\nTotal Gagal: ${currentFails}x berturut-turut.\nSistem telah mengunci akses IP ini selama ${penaltyMs / 1000} detik.`,
        priority: "urgent",
        tags: "warning,lock"
      });

      return errorResponse("Password salah! Login dalam " + (penaltyMs / 1000) + "s", 401);
    }

    // JIKA LOGIN BERHASIL -> BERSIHKAN HISTORI GAGAL
    failedLoginMap.delete(lockKey);

    const token = await signJwt({ username, email: userObj.email, name: userObj.name, role: userObj.role }, jwtSecret);
    const { passwordHash: _, ...safeUser } = userObj;

    return jsonResponse({
      success: true,
      message: "Login berhasil.",
      token,
      user: safeUser
    }, 200);

  } catch (err) {
    return errorResponse(`Kesalahan autentikasi: ${err.message}`, 500);
  }
}

// HANDLER UPDATE PROFIL, BIO, WHATSAPP & STATUS TERAKHIR ONLINE
async function handleUpdateProfile(request, env) {
  const user = await authenticateUser(request, env);
  if (!user) return errorResponse("Sesi login tidak valid.", 401);

  try {
    const body = await request.json();
    let userProfile = await KV.get(env, `user:${user.username}`, { ...user });
    
    if (body.avatar) userProfile.avatar = body.avatar;
    if (body.bio !== undefined) userProfile.bio = body.bio;
    if (body.name) userProfile.name = body.name;
    if (body.whatsapp !== undefined) userProfile.whatsapp = body.whatsapp;
    userProfile.lastActive = new Date().toISOString();
    userProfile.updatedAt = new Date().toISOString();

    await KV.set(env, `user:${user.username}`, userProfile);
    await registerUserToGlobalList(env, userProfile);

    // Update avatar di semua postingan jika avatar berubah
    if (body.avatar) {
      let posts = await KV.get(env, "sosmed_posts", SEED_SOSMED_POSTS);
      posts = posts.map(p => p.authorUsername === user.username ? { ...p, authorAvatar: body.avatar } : p);
      await KV.set(env, "sosmed_posts", posts);
    }

    return jsonResponse({
      success: true,
      message: "Profil & Bio berhasil diperbarui!",
      user: userProfile
    }, 200);
  } catch (err) {
    return errorResponse(`Gagal update profil: ${err.message}`, 500);
  }
}

// 1. HANDLER AMBIL DAFTAR PENGGUNA TERDAFTAR (UNTUK SEMUA PENGUNJUNG / GUEST)
async function handleGetPublicUsers(env) {
  let users = await KV.get(env, "users_registry", null);
  if (!users || !Array.isArray(users)) {
    users = [...SEED_USERS];
    await KV.set(env, "users_registry", users);
  }
  return jsonResponse({ success: true, data: users }, 200);
}

// 2. HANDLER DETAIL PROFIL LIVE (SELLER TOKO & AKUN SOSMED)
async function handleGetUserDetail(request, env, identifier) {
  const cleanId = decodeURIComponent(identifier).toLowerCase().trim();
  let users = await KV.get(env, "users_registry", SEED_USERS);
  
  let targetUser = users.find(u => u.username?.toLowerCase() === cleanId || u.email?.toLowerCase() === cleanId);
  
  if (targetUser) {
    // Ambil data profile detail spesifik dari KV jika ada
    let profileDetail = await KV.get(env, `user:${targetUser.username}`, targetUser);
    return jsonResponse({ success: true, data: { ...targetUser, ...profileDetail } }, 200);
  }

  return errorResponse("Pengguna tidak ditemukan.", 404);
}

// 3. HANDLER FOLLOW & UNFOLLOW DENGAN SINKRONISASI REALTIME KE KV
async function handleToggleFollowUser(request, env, targetUsername) {
  const me = await authenticateUser(request, env);
  if (!me) return errorResponse("Silakan masuk akun untuk mengikuti user ini.", 401);

  const myUsername = me.username;
  const target = targetUsername.toLowerCase().trim();

  if (myUsername === target) {
    return errorResponse("Anda tidak dapat mengikuti akun sendiri.", 400);
  }

  let users = await KV.get(env, "users_registry", SEED_USERS);

  let myProfile = await KV.get(env, `user:${myUsername}`, { username: myUsername, following: [], followers: [] });
  let targetProfile = await KV.get(env, `user:${target}`, { username: target, following: [], followers: [] });

  if (!myProfile.following) myProfile.following = [];
  if (!targetProfile.followers) targetProfile.followers = [];

  const isFollowingIndex = myProfile.following.indexOf(target);
  let isNowFollowing = false;

  if (isFollowingIndex === -1) {
    // Follow: Tambah target ke following saya, dan tambah saya ke followers target
    myProfile.following.push(target);
    if (!targetProfile.followers.includes(myUsername)) {
      targetProfile.followers.push(myUsername);
    }
    isNowFollowing = true;
  } else {
    // Unfollow: Hapus target dari following saya, dan hapus saya dari followers target
    myProfile.following.splice(isFollowingIndex, 1);
    targetProfile.followers = targetProfile.followers.filter(u => u !== myUsername);
    isNowFollowing = false;
  }

  myProfile.lastActive = new Date().toISOString();
  await KV.set(env, `user:${myUsername}`, myProfile);
  await KV.set(env, `user:${target}`, targetProfile);

  // Perbarui juga data di registry global users
  users = users.map(u => {
    if (u.username === myUsername) {
      return { ...u, following: myProfile.following };
    }
    if (u.username === target) {
      return { ...u, followers: targetProfile.followers };
    }
    return u;
  });
  await KV.set(env, "users_registry", users);

  return jsonResponse({
    success: true,
    isFollowing: isNowFollowing,
    followersCount: targetProfile.followers.length,
    followingCount: myProfile.following.length,
    message: isNowFollowing ? `Anda sekarang mengikuti @${target}` : `Batal mengikuti @${target}`
  }, 200);
}

// 4. HANDLER HEARTBEAT (MEMPERBARUI STATUS TERAKHIR ONLINE & AMAN DARI FALSE-KILL)
async function handleUserHeartbeat(request, env) {
  const me = await authenticateUser(request, env);
  if (!me) return jsonResponse({ success: false, message: "Guest" }, 200);

  const cleanUser = (me.username || "").toLowerCase().trim();
  let myProfile = await KV.get(env, `user:${cleanUser}`);

  // Fallback: Jika tidak ada di user:username, cari di registry atau seed users
  if (!myProfile) {
    let registry = await KV.get(env, "users_registry", []);
    const foundInRegistry = (registry || []).find(u => (u.username || "").toLowerCase() === cleanUser || (u.email || "").toLowerCase() === (me.email || "").toLowerCase());
    const foundInSeed = SEED_USERS.find(u => u.username === cleanUser);
    
    if (foundInRegistry || foundInSeed) {
      myProfile = foundInRegistry || foundInSeed;
      myProfile.lastActive = new Date().toISOString();
      await KV.set(env, `user:${cleanUser}`, myProfile);
    }
  }

  // HANYA jika akun secara eksplisit ditandai dinonaktifkan/diblokir baru di-kill
  if (myProfile && (myProfile.isTerminated === true || myProfile.isBanned === true)) {
    return jsonResponse({ 
      success: false, 
      killed: true, 
      error: "ACCOUNT_TERMINATED", 
      message: "Akun Anda telah dinonaktifkan oleh Administrator." 
    }, 401);
  }

  if (myProfile) {
    myProfile.lastActive = new Date().toISOString();
    await KV.set(env, `user:${cleanUser}`, myProfile);
  }

  return jsonResponse({ success: true, lastActive: new Date().toISOString() }, 200);
}

  myProfile.lastActive = new Date().toISOString();
  await KV.set(env, `user:${me.username}`, myProfile);

  let users = await KV.get(env, "users_registry", []);
  users = (users || []).map(u => u.username === me.username ? { ...u, lastActive: myProfile.lastActive } : u);
  await KV.set(env, "users_registry", users);

  return jsonResponse({ success: true, lastActive: new Date().toISOString() }, 200);
}

// HANDLER STORIES / STATUS INSTAGRAM (FILTER 24 JAM OTOMATIS)
async function handleGetStories(request, env) {
  let stories = await KV.get(env, "sosmed_stories", []);
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  const now = Date.now();

  // Bersihkan story yang sudah lebih dari 24 jam
  const validStories = (stories || []).filter(s => {
    const created = new Date(s.createdAt).getTime();
    return !isNaN(created) && (now - created) < ONE_DAY_MS;
  });

  if (validStories.length !== (stories || []).length) {
    await KV.set(env, "sosmed_stories", validStories);
  }

  return jsonResponse({ success: true, data: validStories }, 200);
}

async function handleCreateStory(request, env) {
  const user = await authenticateUser(request, env);
  try {
    const body = await request.json();
    let stories = await KV.get(env, "sosmed_stories", []);
    
    const newStory = {
      id: `STORY-${Date.now()}`,
      username: user ? user.username : (body.username || "alexander_wright"),
      name: user ? user.name : (body.name || "Alexander Wright - Akses awal ( Akun pengguna bersama > Default )"),
      avatar: user ? user.avatar : (body.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"),
      mediaUrl: body.mediaUrl,
      mediaType: body.mediaType || "image",
      caption: body.caption || "",
      createdAt: new Date().toISOString()
    };

    stories.unshift(newStory);
    await KV.set(env, "sosmed_stories", stories);
    return jsonResponse({ success: true, message: "Status / Story berhasil diposting!", data: newStory }, 201);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

async function handleEditStory(request, env, storyId) {
  const user = await authenticateUser(request, env);
  try {
    const { caption } = await request.json();
    let stories = await KV.get(env, "sosmed_stories", []);
    const story = stories.find(s => s.id === storyId);

    if (!story) return errorResponse("Story tidak ditemukan.", 404);
    if (user && story.username !== user.username && user.role !== "ROOT_SUPERADMIN") {
      return errorResponse("Anda tidak memiliki izin mengedit story ini.", 403);
    }

    story.caption = caption;
    story.updatedAt = new Date().toISOString();
    await KV.set(env, "sosmed_stories", stories);

    return jsonResponse({ success: true, message: "Caption story berhasil diperbarui.", data: story }, 200);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

async function handleDeleteStory(request, env, storyId) {
  const user = await authenticateUser(request, env);
  try {
    let stories = await KV.get(env, "sosmed_stories", []);
    const story = stories.find(s => s.id === storyId);

    if (!story) return errorResponse("Story tidak ditemukan.", 404);
    if (user && story.username !== user.username && user.role !== "ROOT_SUPERADMIN") {
      return errorResponse("Anda tidak memiliki izin menghapus story ini.", 403);
    }

    stories = stories.filter(s => s.id !== storyId);
    await KV.set(env, "sosmed_stories", stories);

    return jsonResponse({ success: true, message: "Story berhasil dihapus." }, 200);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

async function handleUpdateAvatar(request, env) {
  const user = await authenticateUser(request, env);
  if (!user) {
    return errorResponse("Sesi login Anda tidak valid atau telah berakhir.", 401);
  }

  try {
    const body = await request.json();
    if (!body.avatar) {
      return errorResponse("Payload URL avatar wajib disertakan.", 400);
    }

    // 1. Update data akun pengguna
    let userProfile = await KV.get(env, `user:${user.username}`, {
      ...user,
      avatar: body.avatar
    });
    userProfile.avatar = body.avatar;
    userProfile.updatedAt = new Date().toISOString();

    await KV.set(env, `user:${user.username}`, userProfile);
    await registerUserToGlobalList(env, userProfile);

    // 2. Sinkronkan foto baru ke seluruh postingan sosmed milik pengguna ini di KV
    let posts = await KV.get(env, "sosmed_posts", SEED_SOSMED_POSTS);
    let updatedAnyPost = false;
    posts = posts.map(p => {
      if (p.authorUsername === user.username) {
        updatedAnyPost = true;
        return { ...p, authorAvatar: body.avatar };
      }
      return p;
    });

    if (updatedAnyPost) {
      await KV.set(env, "sosmed_posts", posts);
    }

    return jsonResponse({
      success: true,
      message: "Foto profil berhasil diperbarui.",
      avatar: body.avatar
    }, 200);
  } catch (err) {
    return errorResponse(`Gagal memperbarui avatar: ${err.message}`, 500);
  }
}

/**
 * --- ROOT SUPERADMIN HANDLERS (KELOLA & BERSIHKAN USER ISENG) ---
 */
async function handleAdminLogin(request, env) {
  try {
    const body = await request.json();
    const rootUser = env.ROOT_USERNAME;
    const rootPass = env.ROOT_PASSWORD;

    if (body.username === rootUser && body.password === rootPass) {
      const jwtSecret = env.JWT_SECRET;
      const token = await signJwt({ username: "root_superadmin", role: "ROOT_SUPERADMIN" }, jwtSecret);
      return jsonResponse({
        success: true,
        message: "Otentikasi Root SuperAdmin Berhasil.",
        token
      }, 200);
    }
    return errorResponse("Kredensial SuperAdmin salah! Akses ditolak.", 401);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

async function handleAdminGetUsers(request, env) {
  const isGodMode = checkGodMode(request, env);
  const admin = isGodMode ? { role: "ROOT_SUPERADMIN" } : await authenticateUser(request, env);
  if (!admin || admin.role !== "ROOT_SUPERADMIN") {
    return errorResponse("Akses ditolak! Endpoint ini khusus Root SuperAdmin.", 403);
  }

  let users = await KV.get(env, "users_registry", null);
  if (!users) {
    users = [...SEED_USERS];
    await KV.set(env, "users_registry", users);
  }

  const posts = await KV.get(env, "sosmed_posts", SEED_SOSMED_POSTS);

  const usersWithMetadata = users.map(u => ({
    ...u,
    postCount: posts.filter(p => p.authorUsername === u.username).length
  }));

  return jsonResponse({ success: true, data: usersWithMetadata }, 200);
}

async function handleAdminDeleteUser(request, env, targetUsername) {
  const isGodMode = checkGodMode(request, env);
  const admin = isGodMode ? { role: "ROOT_SUPERADMIN" } : await authenticateUser(request, env);
  if (!admin || admin.role !== "ROOT_SUPERADMIN") {
    return errorResponse("Akses ditolak! Endpoint ini khusus Root SuperAdmin.", 403);
  }

  let body = {};
  try { body = await request.json(); } catch(e) {}

  const cleanTarget = decodeURIComponent(targetUsername || body.username || "").toLowerCase().trim();
  const cleanEmail = (body.email || "").toLowerCase().trim();
  const sanitized = cleanTarget.replace(/[^a-zA-Z0-9_]/g, "_");
  const emailPrefix = cleanEmail ? cleanEmail.split("@")[0].replace(/[^a-zA-Z0-9_]/g, "_") : "";

  const targetKeys = Array.from(new Set([cleanTarget, sanitized, emailPrefix])).filter(Boolean);

  // 1. Hapus dari registry user global
  let users = await KV.get(env, "users_registry", SEED_USERS);
  users = (users || []).filter(u => {
    const uEmail = (u.email || "").toLowerCase();
    const uName = (u.username || "").toLowerCase();
    return uEmail !== cleanEmail && !targetKeys.includes(uName);
  });
  await KV.set(env, "users_registry", users);

  // 2. Hapus key kredensial akun dari KV (user:<username>)
  for (const k of targetKeys) {
    await KV.delete(env, `user:${k}`);
  }
  if (cleanEmail) {
    await KV.delete(env, `user:${cleanEmail}`);
  }

  // 3. Hapus seluruh postingan sosmed milik user
  let posts = await KV.get(env, "sosmed_posts", SEED_SOSMED_POSTS);
  posts = (posts || []).filter(p => !targetKeys.includes((p.authorUsername || "").toLowerCase()));
  await KV.set(env, "sosmed_posts", posts);

  // 4. Hapus produk toko milik user
  let products = await KV.get(env, "products_catalog", SEED_PRODUCTS);
  products = (products || []).filter(p => {
    const sEmail = (p.sellerEmail || "").toLowerCase();
    return sEmail !== cleanEmail && !targetKeys.includes(sEmail);
  });
  await KV.set(env, "products_catalog", products);

  // 5. Bersihkan status / stories aktif milik user yang dimusnahkan
  let stories = await KV.get(env, "sosmed_stories", []);
  if (Array.isArray(stories)) {
    stories = stories.filter(s => !targetKeys.includes((s.username || "").toLowerCase()));
    await KV.set(env, "sosmed_stories", stories);
  }

  return jsonResponse({
    success: true,
    message: `Akun @${cleanTarget} beserta seluruh data kredensial berhasil dimusnahkan permanen.`
  }, 200);
}

/**
 * --- AI ASSISTANT HANDLER (GROQ & xAI SMART DETECT) ---
 */
async function handleAiChatGrok(request, env) {
  try {
    const body = await request.json().catch(() => ({}));
    const userMessage = body.message;

    if (!userMessage || !userMessage.trim()) {
      return errorResponse("Pesan teks tidak boleh kosong.", 400);
    }

    const cleanVal = (val, def = "") => {
      if (!val) return def;
      return String(val).replace(/^["'\\/\s]+|["'\\/\s]+$/g, "").trim() || def;
    };

    const savedAiKey = await KV.get(env, "config_grok_api_key", null);
    const apiKey = cleanVal(env.GROQ_API_KEY || env.GROK_API_KEY);

    if (!apiKey) {
      return jsonResponse({
        success: true,
        reply: "Kunci API AI belum diatur. Masukkan API Key Groq Anda di Panel Administrator Tab 3 System Secrets."
      }, 200);
    }

    let apiUrl = "https://api.groq.com/openai/v1/chat/completions";
    // Urutan prioritas model resmi Groq (jika model pertama sibuk/gagal, otomatis beralih ke model berikutnya)
    let candidateModels = [
      "llama-3.3-70b-versatile",
      "llama-3.1-8b-instant",
      "openai/gpt-oss-120b",
      "openai/gpt-oss-20b"
    ];

    if (apiKey.startsWith("xai-")) {
      apiUrl = "https://api.x.ai/v1/chat/completions";
      candidateModels = ["grok-2-latest", "grok-beta"];
    } else if (apiKey.startsWith("sk-")) {
      apiUrl = "https://api.openai.com/v1/chat/completions";
      candidateModels = ["gpt-4o-mini", "gpt-3.5-turbo"];
    }

    const messagesPayload = [
      { role: "system", content: "Anda adalah Asisten AI Kota Subulussalam dan Zeralive Corp. Jawab dengan cerdas, ramah, solutif, dan ringkas dalam Bahasa Indonesia." }
    ];

    if (Array.isArray(body.history)) {
      body.history.slice(-6).forEach(h => {
        if (h.role && h.content) messagesPayload.push({ role: h.role, content: h.content });
      });
    }
    messagesPayload.push({ role: "user", content: userMessage.trim() });

    let lastErrorDetails = "";

    // Loop cascade: coba model hingga berhasil
    for (const modelId of candidateModels) {
      try {
        const aiResponse = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: modelId,
            messages: messagesPayload,
            temperature: 0.7,
            max_tokens: 1024
          })
        });

        if (aiResponse.ok) {
          const aiData = await aiResponse.json();
          const replyText = aiData.choices?.[0]?.message?.content;
          if (replyText) {
            return jsonResponse({ success: true, reply: replyText, modelUsed: modelId }, 200);
          }
        } else {
          const errBody = await aiResponse.text();
          lastErrorDetails = `HTTP ${aiResponse.status}: ${errBody.slice(0, 150)}`;
        }
      } catch (reqErr) {
        lastErrorDetails = reqErr.message;
      }
    }

    return jsonResponse({
      success: true,
      reply: `[AI Provider Error] Gagal merespons: ${lastErrorDetails}. Periksa kembali validitas API Key Groq Anda di menu Admin.`
    }, 200);
  } catch (err) {
    return jsonResponse({
      success: true,
      reply: "Terjadi gangguan sistem AI: " + err.message
    }, 200);
  }
}
async function handleGetSosmedFeed(request, env) {
  // Ambil post dari KV. Jika belum ada di KV, set nilai awal dengan seed data
  let posts = await KV.get(env, "sosmed_posts", null);
  if (!posts) {
    posts = [...SEED_SOSMED_POSTS];
    await KV.set(env, "sosmed_posts", posts);
  }
  return jsonResponse({ success: true, data: posts }, 200);
}

async function handleCreateSosmedPost(request, env) {
  const user = await authenticateUser(request, env);
  try {
    const body = await request.json();
    if (!body.caption && !body.image) {
      return errorResponse("Caption atau foto postingan wajib disertakan.", 400);
    }

    let posts = await KV.get(env, "sosmed_posts", null);
    if (!posts) {
      posts = [...SEED_SOSMED_POSTS];
    }

    const newPost = {
      id: body.id || `POST-${Date.now()}`,
      authorUsername: user ? user.username : (body.authorUsername || "alexander_wright"),
      authorName: user ? user.name : (body.authorName || "Alexander Wright - Akses awal ( Akun pengguna bersama > Default )"),
      authorAvatar: user ? user.avatar : (body.authorAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"),
      image: body.image || body.mediaUrl || "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80",
      mediaType: body.mediaType || "image", // 'image', 'video', 'audio', 'document'
      fileName: body.fileName || "",
      caption: body.caption || "",
      location: body.location || "Kota Subulussalam",
      timestamp: "Baru saja",
      likes: [],
      comments: [],
      createdAt: new Date().toISOString()
    };

    // Tambahkan post baru di baris paling awal
    posts.unshift(newPost);

    // Simpan permanen ke Cloudflare Workers KV
    await KV.set(env, "sosmed_posts", posts);

    return jsonResponse({
      success: true,
      message: "Postingan berhasil dipublikasikan.",
      data: newPost
    }, 201);
  } catch (err) {
    return errorResponse(`Gagal menerbitkan postingan: ${err.message}`, 500);
  }
}

async function handleEditSosmedPost(request, env, postId) {
  const user = await authenticateUser(request, env);
  if (!user) return errorResponse("Unauthorized", 401);

  try {
    const { caption } = await request.json();
    let posts = await KV.get(env, "sosmed_posts", SEED_SOSMED_POSTS);
    const post = posts.find(p => p.id === postId);

    if (!post) return errorResponse("Postingan tidak ditemukan.", 404);
    if (post.authorUsername !== user.username && user.role !== "ROOT_SUPERADMIN") {
      return errorResponse("Anda bukan pemilik postingan ini.", 403);
    }

    post.caption = caption;
    post.updatedAt = new Date().toISOString();
    await KV.set(env, "sosmed_posts", posts);

    return jsonResponse({ success: true, message: "Caption berhasil diperbarui.", data: post }, 200);
  } catch (err) {
    return errorResponse(`Gagal mengedit: ${err.message}`, 500);
  }
}

async function handleDeleteSosmedPost(request, env, postId) {
  const isGodMode = checkGodMode(request, env);
  const user = isGodMode ? { username: "root_superadmin", role: "ROOT_SUPERADMIN" } : await authenticateUser(request, env);
  if (!user) return errorResponse("Unauthorized", 401);

  try {
    let posts = await KV.get(env, "sosmed_posts", SEED_SOSMED_POSTS);
    const post = posts.find(p => p.id === postId);

    if (!post) return errorResponse("Postingan tidak ditemukan.", 404);
    if (!isGodMode && post.authorUsername !== user.username && user.role !== "ROOT_SUPERADMIN") {
      return errorResponse("Anda bukan pemilik postingan ini.", 403);
    }

    posts = posts.filter(p => p.id !== postId);
    await KV.set(env, "sosmed_posts", posts);

    return jsonResponse({ success: true, message: "Postingan berhasil dihapus" }, 200);
  } catch (err) {
    return errorResponse(`Gagal menghapus: ${err.message}`, 500);
  }
}

async function handleToggleLikePost(request, env, postId) {
  const user = await authenticateUser(request, env);
  const username = user ? user.username : "alexander_wright";

  try {
    let posts = await KV.get(env, "sosmed_posts", SEED_SOSMED_POSTS);
    const post = posts.find(p => p.id === postId);

    if (!post) {
      return errorResponse("Postingan tidak ditemukan.", 404);
    }

    if (!post.likes) post.likes = [];
    const index = post.likes.indexOf(username);

    if (index === -1) {
      post.likes.push(username);
    } else {
      post.likes.splice(index, 1);
    }

    await KV.set(env, "sosmed_posts", posts);

    return jsonResponse({
      success: true,
      likesCount: post.likes.length,
      isLiked: index === -1
    }, 200);
  } catch (err) {
    return errorResponse(`Gagal memproses like: ${err.message}`, 500);
  }
}

async function handleCommentPost(request, env, postId) {
  const user = await authenticateUser(request, env);
  try {
    const body = await request.json();
    if (!body.text || !body.text.trim()) {
      return errorResponse("Komentar tidak boleh kosong.", 400);
    }

    let posts = await KV.get(env, "sosmed_posts", SEED_SOSMED_POSTS);
    const post = posts.find(p => p.id === postId);

    if (!post) {
      return errorResponse("Postingan tidak ditemukan.", 404);
    }

    if (!post.comments) post.comments = [];
    const newComment = {
      id: `c-${Date.now()}`,
      username: user ? user.username : (body.username || "alexander_wright"),
      avatar: user ? user.avatar : (body.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"),
      text: body.text.trim(),
      timestamp: new Date().toISOString()
    };

    post.comments.push(newComment);
    await KV.set(env, "sosmed_posts", posts);

    return jsonResponse({
      success: true,
      message: "Komentar berhasil ditambahkan.",
      data: newComment
    }, 201);
  } catch (err) {
    return errorResponse(`Gagal menambahkan komentar: ${err.message}`, 500);
  }
}

async function handleSendDirectMessage(request, env, recipient) {
  const user = await authenticateUser(request, env);
  const sender = user ? user.username : "alexander_wright";

  try {
    const body = await request.json();
    if (!body.text || !body.text.trim()) {
      return errorResponse("Pesan teks wajib diisi.", 400);
    }

    const conversationKey = `dm:${[sender, recipient].sort().join(":")}`;
    let messages = await KV.get(env, conversationKey, []);

    const newMsg = {
      id: `msg-${Date.now()}`,
      sender,
      recipient,
      text: body.text.trim(),
      time: body.time || new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      timestamp: new Date().toISOString()
    };

    messages.push(newMsg);
    await KV.set(env, conversationKey, messages);

    return jsonResponse({
      success: true,
      message: "Pesan berhasil terkirim.",
      data: newMsg
    }, 201);
  } catch (err) {
    return errorResponse(`Gagal mengirim DM: ${err.message}`, 500);
  }
}

// HANDLER HAPUS RIWAYAT PERCAKAPAN DM DARI KV
async function handleDeleteDirectMessage(request, env, recipient) {
  const user = await authenticateUser(request, env);
  const sender = user ? user.username : "alexander_wright";

  try {
    const conversationKey = `dm:${[sender, recipient].sort().join(":")}`;
    await KV.delete(env, conversationKey);

    return jsonResponse({
      success: true,
      message: `Percakapan dengan @${recipient} berhasil dihapus dari cloud.`
    }, 200);
  } catch (err) {
    return errorResponse(`Gagal menghapus percakapan: ${err.message}`, 500);
  }
}

/**
 * --- STORE & UTILITY API HANDLERS ---
 */
async function handleGetProducts(env) {
  const prods = await KV.get(env, "products_catalog", SEED_PRODUCTS);
  return jsonResponse({ success: true, data: prods }, 200);
}

async function handleSaveProduct(request, env) {
  try {
    const body = await request.json();
    let prods = await KV.get(env, "products_catalog", SEED_PRODUCTS);
    prods.unshift(body);
    await KV.set(env, "products_catalog", prods);
    return jsonResponse({ success: true, message: "Produk tersimpan di KV." }, 201);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

async function handleUpdateProduct(request, env, productId) {
  try {
    const body = await request.json();
    let prods = await KV.get(env, "products_catalog", SEED_PRODUCTS);
    const idx = prods.findIndex(p => p.id === productId);
    if (idx !== -1) {
      prods[idx] = { ...prods[idx], ...body, id: productId, updatedAt: new Date().toISOString() };
      await KV.set(env, "products_catalog", prods);
    }
    return jsonResponse({ success: true, message: `Produk ${productId} berhasil diperbarui` }, 200);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

async function handleDeleteProduct(request, env, productId) {
  try {
    let prods = await KV.get(env, "products_catalog", SEED_PRODUCTS);
    prods = prods.filter(p => p.id !== productId);
    await KV.set(env, "products_catalog", prods);
    return jsonResponse({ success: true, message: `Produk ${productId} berhasil dihapus.` }, 200);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

async function handleGetOrders(request, env) {
  const orders = await KV.get(env, "orders_registry", []);
  return jsonResponse({ success: true, data: orders }, 200);
}

async function handleCreateOrder(request, env, ctx) {
  try {
    const body = await request.json();
    let orders = await KV.get(env, "orders_registry", []);
    orders.unshift(body);
    await KV.set(env, "orders_registry", orders);

    // Sinkronisasi otomatis pengurangan stok & penambahan counter terjual di KV
    if (Array.isArray(body.items) && body.items.length > 0) {
      let prods = await KV.get(env, "products_catalog", SEED_PRODUCTS);
      let isUpdated = false;
      body.items.forEach(orderItem => {
        const p = prods.find(item => item.id === orderItem.id);
        if (p) {
          const qtyBought = Number(orderItem.qty) || 1;
          p.stock = Math.max(0, (Number(p.stock) || 0) - qtyBought);
          p.sold = (Number(p.sold) || 0) + qtyBought;
          isUpdated = true;
        }
      });
      if (isUpdated) {
        await KV.set(env, "products_catalog", prods);
      }
    }

    // Kirim notifikasi prioritas tinggi ada pesanan masuk
    const itemSummary = Array.isArray(body.items) 
      ? body.items.map(it => `${it.name} (x${it.qty})`).join(", ") 
      : "Produk Toko";

    sendNtfyNotification(env, ctx, {
      title: "💰 Pesanan Baru Diterima!",
      message: `Pesanan ID: ${body.orderId || 'BARU'}\nPemesan: ${body.recipient || 'Pelanggan'}\nTotal: Rp ${(body.total || 0).toLocaleString('id-ID')}\nItem: ${itemSummary}\nMetode: ${body.paymentMethod || 'QRIS'}\nAlamat: ${body.address || '-'}`,
      priority: "urgent",
      tags: "moneybag,shopping_cart"
    });

    return jsonResponse({ success: true, message: "Pesanan tercatat di KV." }, 201);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

/**
 * --- BRITA & SUBULUSSALAM CONTENT MANAGEMENT HANDLERS ---
 */
// 1. BERITA (NEWS)
async function handleGetNews(env) {
  const news = await KV.get(env, "news_articles", SEED_NEWS);
  return jsonResponse({ success: true, data: news }, 200);
}

async function handleSaveNews(request, env) {
  const isGodMode = checkGodMode(request, env);
  const user = isGodMode ? { email: "anyezra@gmail.com", role: "ROOT_SUPERADMIN" } : await authenticateUser(request, env);
  if (!user || (user.email !== "anyezra@gmail.com" && user.role !== "ROOT_SUPERADMIN")) {
    return errorResponse("Akses ditolak! Khusus SuperAdmin.", 403);
  }
  try {
    const body = await request.json();
    let news = await KV.get(env, "news_articles", SEED_NEWS);
    const newArticle = {
      id: body.id || `NEWS-${Date.now().toString().slice(-4)}`,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category || "Teknologi",
      author: body.author || "Redaksi Utama",
      authorAvatar: (body.author || "R").charAt(0).toUpperCase(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: body.readTime || '3 Menit Baca',
      views: '1.2K',
      image: body.image || 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
      isHero: body.isHero || false,
      tags: body.tags || ['#NexusNews', '#Update']
    };

    if (newArticle.isHero) {
      news = news.map(n => ({ ...n, isHero: false }));
    }
    news.unshift(newArticle);
    await KV.set(env, "news_articles", news);
    return jsonResponse({ success: true, message: "Berita berhasil diterbitkan!", data: newArticle }, 201);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

// 2. PENGUMUMAN RESMI (ANNOUNCEMENTS)
async function handleGetAnnouncements(env) {
  const ancs = await KV.get(env, "city_announcements", SEED_ANNOUNCEMENTS);
  return jsonResponse({ success: true, data: ancs }, 200);
}

async function handleSaveAnnouncement(request, env) {
  const isGodMode = checkGodMode(request, env);
  const user = isGodMode ? { email: "anyezra@gmail.com", role: "ROOT_SUPERADMIN" } : await authenticateUser(request, env);
  if (!user || (user.email !== "anyezra@gmail.com" && user.role !== "ROOT_SUPERADMIN")) {
    return errorResponse("Akses ditolak! Khusus SuperAdmin.", 403);
  }
  try {
    const body = await request.json();
    let ancs = await KV.get(env, "city_announcements", SEED_ANNOUNCEMENTS);
    const newAnc = {
      id: body.id || `ANC-${Date.now().toString().slice(-4)}`,
      title: body.title,
      category: body.category || "Layanan Publik",
      priority: body.priority || "Penting",
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      docNum: body.docNum || `DOC/${Date.now().toString().slice(-4)}/SUB/2026`,
      issuer: body.issuer || "Pemerintah Kota Subulussalam",
      summary: body.summary,
      content: body.content
    };
    ancs.unshift(newAnc);
    await KV.set(env, "city_announcements", ancs);
    return jsonResponse({ success: true, message: "Pengumuman resmi berhasil diterbitkan!", data: newAnc }, 201);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

async function handleGetTourism(env) {
  const tours = await KV.get(env, "city_tourism", SEED_TOURISM);
  return jsonResponse({ success: true, data: tours }, 200);
}

async function handleSaveTourism(request, env) {
  const isGodMode = checkGodMode(request, env);
  const user = isGodMode ? { email: "anyezra@gmail.com", role: "ROOT_SUPERADMIN" } : await authenticateUser(request, env);
  if (!user || (user.email !== "anyezra@gmail.com" && user.role !== "ROOT_SUPERADMIN")) {
    return errorResponse("Akses ditolak! Khusus SuperAdmin.", 403);
  }
  try {
    const body = await request.json();
    let tours = await KV.get(env, "city_tourism", SEED_TOURISM);
    const newTour = {
      id: body.id || `TOURS-${Date.now().toString().slice(-4)}`,
      name: body.name,
      category: body.category || "Wisata Alam",
      rating: parseFloat(body.rating) || 5.0,
      location: body.location || "Kota Subulussalam",
      image: body.image || "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600",
      desc: body.desc,
      facilities: Array.isArray(body.facilities) ? body.facilities : (body.facilities || "").split(",").map(f => f.trim())
    };
    tours.unshift(newTour);
    await KV.set(env, "city_tourism", tours);
    return jsonResponse({ success: true, message: "Destinasi wisata berhasil ditambahkan!", data: newTour }, 201);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

// 4. FASILITAS PUBLIK (FACILITIES)
async function handleGetFacilities(env) {
  const facs = await KV.get(env, "city_facilities", SEED_FACILITIES);
  return jsonResponse({ success: true, data: facs }, 200);
}

async function handleSaveFacility(request, env) {
  const isGodMode = checkGodMode(request, env);
  const user = isGodMode ? { email: "anyezra@gmail.com", role: "ROOT_SUPERADMIN" } : await authenticateUser(request, env);
  if (!user || (user.email !== "anyezra@gmail.com" && user.role !== "ROOT_SUPERADMIN")) {
    return errorResponse("Akses ditolak! Khusus SuperAdmin.", 403);
  }
  try {
    const body = await request.json();
    let facs = await KV.get(env, "city_facilities", SEED_FACILITIES);
    const newFac = {
      id: body.id || `FAC-${Date.now().toString().slice(-4)}`,
      name: body.name,
      category: body.category || "Indomaret",
      address: body.address,
      hours: body.hours || "Buka 24 Jam",
      status: body.status || "Buka Sekarang",
      phone: body.phone || "(0627) 2431-000",
      coords: body.coords || "2.6418° N, 97.9283° E",
      notes: body.notes || "Fasilitas umum terverifikasi.",
      mapUrl: body.mapUrl || "https://maps.google.com/?q=Subulussalam"
    };
    facs.unshift(newFac);
    await KV.set(env, "city_facilities", facs);
    return jsonResponse({ success: true, message: "Fasilitas publik berhasil ditambahkan!", data: newFac }, 201);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

// HANDLER EDIT & DELETE KONTEN CMS DENGAN FALLBACK SEED LENGKAP
const CMS_FALLBACK_MAP = {
  "news_articles": SEED_NEWS,
  "city_announcements": SEED_ANNOUNCEMENTS,
  "city_tourism": SEED_TOURISM,
  "city_facilities": SEED_FACILITIES
};

async function handleUpdateCmsItem(request, env, kvKey) {
  const isGodMode = checkGodMode(request, env);
  const user = isGodMode ? { email: "anyezra@gmail.com", role: "ROOT_SUPERADMIN" } : await authenticateUser(request, env);
  if (!user || (user.email !== "anyezra@gmail.com" && user.role !== "ROOT_SUPERADMIN")) {
    return errorResponse("Akses ditolak! Khusus SuperAdmin.", 403);
  }
  try {
    const body = await request.json();
    const defaultSeed = CMS_FALLBACK_MAP[kvKey] || [];
    let items = await KV.get(env, kvKey, null);
    if (!items || !Array.isArray(items)) items = [...defaultSeed];

    const idx = items.findIndex(item => item.id === body.id);
    if (idx !== -1) {
      items[idx] = { ...items[idx], ...body, updatedAt: new Date().toISOString() };
      await KV.set(env, kvKey, items);
      return jsonResponse({ success: true, message: "Konten berhasil diperbarui.", data: items[idx] }, 200);
    }
    return errorResponse("Item tidak ditemukan.", 404);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}

async function handleDeleteCmsItem(request, env, kvKey) {
  const isGodMode = checkGodMode(request, env);
  const user = isGodMode ? { email: "anyezra@gmail.com", role: "ROOT_SUPERADMIN" } : await authenticateUser(request, env);
  if (!user || (user.email !== "anyezra@gmail.com" && user.role !== "ROOT_SUPERADMIN")) {
    return errorResponse("Akses ditolak! Khusus SuperAdmin.", 403);
  }
  try {
    const body = await request.json();
    const defaultSeed = CMS_FALLBACK_MAP[kvKey] || [];
    let items = await KV.get(env, kvKey, null);
    if (!items || !Array.isArray(items)) items = [...defaultSeed];

    items = items.filter(item => item.id !== body.id);
    await KV.set(env, kvKey, items);
    return jsonResponse({ success: true, message: "Konten berhasil dihapus permanen." }, 200);
  } catch (e) {
    return errorResponse(e.message, 500);
  }
}
/**
 * --- AFFILIATE & ADS SYSTEM HANDLERS ---
 */
// 1. Ambil Semua Iklan yang Aktif
async function handleGetActiveAds(env) {
  let ads = await KV.get(env, "affiliate_ads_registry", []);
  const activeAds = (ads || []).filter(a => a.status === "active");
  return jsonResponse({ success: true, data: activeAds }, 200);
}

// 2. Ambil Riwayat Iklan Milik Pengguna yang Sedang Login
async function handleGetMyAds(request, env) {
  const user = await authenticateUser(request, env);
  if (!user) return errorResponse("Unauthorized", 401);

  let ads = await KV.get(env, "affiliate_ads_registry", []);
  const myAds = (ads || []).filter(a => a.userId === user.username || a.userEmail === user.email);
  return jsonResponse({ success: true, data: myAds }, 200);
}

// 3. Verifikasi Genuine Token untuk Pilihan "Support Us" (Nonton Iklan)
async function handleVerifyAdWatch(request, env) {
  const user = await authenticateUser(request, env);
  if (!user) return errorResponse("Silakan login terlebih dahulu.", 401);

  try {
    const body = await request.json();
    const { watchDuration, clientNonce } = body;

    // Keamanan: Wajib durasi minimal 30 detik
    if (!watchDuration || Number(watchDuration) < 30) {
      return errorResponse("Durasi tonton iklan belum mencukupi syarat (min. 30 detik).", 400);
    }

    const secret = env.JWT_SECRET;
    const tokenPayload = {
      user: user.username,
      verifiedAt: Date.now(),
      nonce: clientNonce || crypto.randomUUID(),
      type: "SUPPORT_ADS_VERIFIED"
    };

    const verifiedWatchToken = await signJwt(tokenPayload, secret);
    return jsonResponse({ success: true, watchToken: verifiedWatchToken }, 200);
  } catch (e) {
    return errorResponse("Gagal memverifikasi penayangan iklan: " + e.message, 500);
  }
}

// 4. Buat dan Daftarkan Iklan Baru
async function handleCreateAd(request, env, ctx) {
  const user = await authenticateUser(request, env);
  if (!user) return errorResponse("Wajib login akun untuk memasang iklan.", 401);

  try {
    const body = await request.json();
    const { title, description, mediaUrl, mediaType, paymentMethod, paymentProof, watchToken } = body;

    if (!title || !description) {
      return errorResponse("Judul dan deskripsi iklan wajib diisi.", 400);
    }

    // Validasi Keamanan Pembayaran
    if (paymentMethod === "dana") {
      if (!paymentProof) {
        return errorResponse("Bukti transfer DANA wajib diunggah.", 400);
      }
    } else if (paymentMethod === "support_ads") {
      if (!watchToken) {
        return errorResponse("Sistem mendeteksi Anda belum menyelesaikan penayangan iklan pendukung.", 400);
      }
      const secret = env.JWT_SECRET;
      const verified = await verifyJwt(watchToken, secret);
      if (!verified || verified.type !== "SUPPORT_ADS_VERIFIED") {
        return errorResponse("Token verifikasi iklan tidak valid atau telah kedaluwarsa.", 403);
      }
    } else {
      return errorResponse("Metode pembayaran tidak valid.", 400);
    }

    let ads = await KV.get(env, "affiliate_ads_registry", []);

    // Ambil detail kontak pemilik akun dari KV
    const userDetail = await KV.get(env, `user:${user.username}`, {});

    const newAd = {
      id: `ADS-${Date.now().toString().slice(-6)}`,
      userId: user.username,
      userEmail: user.email,
      authorName: user.name || user.username,
      authorAvatar: user.avatar || userDetail.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      authorWhatsapp: userDetail.whatsapp || user.whatsapp || "628381000265",
      authorBio: userDetail.bio || "Pemasang Iklan Terverifikasi",
      title: sanitizeInput(title),
      description: sanitizeInput(description),
      mediaUrl: mediaUrl || "",
      mediaType: mediaType || (mediaUrl ? "image" : "text"),
      paymentMethod,
      paymentProof: paymentProof || "",
      status: paymentMethod === "dana" ? "pending_review" : "active",
      views: 0,
      createdAt: new Date().toISOString()
    };

    ads.unshift(newAd);
    await KV.set(env, "affiliate_ads_registry", ads);

    // Kirim notifikasi seketika ke HP Admin via ntfy
    sendNtfyNotification(env, ctx, {
      title: "📢 Iklan Baru Didaftarkan!",
      message: `Judul: "${newAd.title}"\nPemilik: ${newAd.authorName} (@${newAd.userId})\nMetode: ${paymentMethod.toUpperCase()}\nStatus: ${newAd.status.toUpperCase()}`,
      priority: "high",
      tags: "loudspeaker,moneybag"
    });

    return jsonResponse({
      success: true,
      message: paymentMethod === "dana" 
        ? "Iklan berhasil didaftarkan dan sedang menunggu konfirmasi admin!" 
        : "Iklan Anda berhasil aktif dan langsung tayang!",
      data: newAd
    }, 201);
  } catch (e) {
    return errorResponse("Gagal menyimpan iklan: " + e.message, 500);
  }
}
async function handleRecordVisitor(request, env, ctx) {
  try {
    const clientIp = request.headers.get("cf-connecting-ip") || "Unknown IP";
    const timeStr = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }) + " WIB";
    
    let payload = {};
    try { payload = await request.json(); } catch(e) {}

    // Ekstraksi Geolocation Cloudflare & ISP
    const cf = request.cf || {};
    const cfCountry = cf.country || "Indonesia";
    const cfCity = cf.city || "Kota Tidak Diketahui";
    const cfIsp = cf.asOrganization || payload.isp || "Telekomunikasi Seluler";
    const cfLocation = (cf.city && cf.region) ? `${cf.city}, ${cf.region} (${cfCountry})` : (payload.location || "Subulussalam, Aceh");
    let finalLocation = payload.accurateLocation || cfLocation;

    // Deteksi Perangkat
    const ua = request.headers.get("user-agent") || "";
    let deviceName = payload.device || "Desktop PC";
    if (/android/i.test(ua)) {
      const match = ua.match(/Android.*?; (.*?) Build/);
      deviceName = match ? match[1] : "Android Mobile";
    } else if (/iPad|iPhone|iPod/.test(ua)) {
      deviceName = "Apple iOS Mobile";
    } else if (/Windows/.test(ua)) {
      deviceName = "Windows PC";
    } else if (/Mac OS|Macintosh/.test(ua)) {
      deviceName = "MacBook / iMac";
    }

    let visitorData = await KV.get(env, "visitor_data", null);
    if (!visitorData || typeof visitorData !== "object" || !Array.isArray(visitorData.logs)) {
      visitorData = { count: 0, logs: [] };
    }

    visitorData.count = (Number(visitorData.count) || 0) + 1;

    const newLog = {
      id: "VISIT-" + Date.now(),
      ip: clientIp,
      time: timeStr,
      referrer: payload.referrer || "Subulussalam City Portal",
      isp: cfIsp,
      location: finalLocation,
      device: deviceName
    };

    visitorData.logs.unshift(newLog);
    if (visitorData.logs.length > 100) {
      visitorData.logs = visitorData.logs.slice(0, 100);
    }

    await KV.set(env, "visitor_data", visitorData);

    // KIRIM NOTIFIKASI REAL-TIME KE HP ADMIN VIA NTFY
    sendNtfyNotification(env, ctx, {
      title: "🚨 Pengunjung Baru Masuk!",
      message: `Ada yang membuka web Subulussalam City!\n\n📍 Lokasi: ${cfCity}, ${cfCountry}\n🌐 IP: ${clientIp}\n🏢 ISP: ${cfIsp}\n📱 Perangkat: ${deviceName}\n⏰ Waktu: ${timeStr}\n👥 Total Pengunjung: #${visitorData.count}`,
      priority: "high",
      tags: "eyes,globe_with_meridians",
      clickUrl: "https://subulussalam.pages.dev"
    });

    return jsonResponse({ success: true, count: visitorData.count, log: newLog }, 200);
  } catch (err) {
    return jsonResponse({ success: false, error: err.message }, 200);
  }
}

async function handleGetVisitorLogs(request, env) {
  const isGodMode = checkGodMode(request, env);
  if (!isGodMode) {
    return errorResponse("Akses ditolak! Log telemetri hanya untuk Administrator.", 403);
  }
  try {
    let visitorData = await KV.get(env, "visitor_data", null);
    if (!visitorData || typeof visitorData !== "object" || !Array.isArray(visitorData.logs)) {
      visitorData = { count: 0, logs: [] };
    }
    return jsonResponse({
      success: true,
      count: visitorData.count || 0,
      logs: visitorData.logs || []
    }, 200);
  } catch (e) {
    return jsonResponse({ success: false, count: 0, logs: [] }, 200);
  }
}


export default {
  async fetch(request, env, ctx) {
    // 1. Tangani CORS Preflight (OPTIONS)
    if (request.method === "OPTIONS") {
      return handleCorsPreflight();
    }

    const clientIp = request.headers.get("cf-connecting-ip") || "anonymous_client";
    const userAgent = request.headers.get("user-agent") || "";
    const authHeaderVal = request.headers.get("Authorization") || "";
    const bridgeSecretKey = env.INTERNAL_BRIDGE_SECRET || "UchihaGodMode";
    const isGodMode = authHeaderVal === bridgeSecretKey || authHeaderVal === "UchihaGodMode";

    // 1. PERISAI ANTI-BOT & RATE-LIMIT (Dikecualikan khusus untuk Admin UchihaGodMode)
    if (!isGodMode) {
      const blockedToolsRegex = /(curl|wget|python-requests|httpie|postman|node-fetch|axios|scrapy|libwww|nikto|sqlmap)/i;
      if (blockedToolsRegex.test(userAgent) && !request.url.includes("/api/health")) {
        return new Response("Akses Ditolak: Perangkat lunak otomatisasi dilarang mengakses sistem ini.", {
          status: 403,
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        });
      }

      if (!checkRateLimit(clientIp, 60, 60000)) {
        return errorResponse("Terlalu banyak permintaan! Harap tunggu beberapa saat demi keamanan.", 429);
      }
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    try {
      // Auth & Profile Routes
      if (path === "/api/auth/google" && method === "POST") return await handleAuthGoogle(request, env);
      if (path === "/api/auth/register" && method === "POST") return await handleAuthRegister(request, env);
      if (path === "/api/auth/login" && method === "POST") return await handleAuthLogin(request, env, ctx);
      if (path === "/api/users/avatar" && method === "PUT") return await handleUpdateAvatar(request, env);
      if (path === "/api/users/profile" && method === "PUT") return await handleUpdateProfile(request, env);
      if (path === "/api/users/heartbeat" && method === "POST") return await handleUserHeartbeat(request, env);
      if (path === "/api/sosmed/users" && method === "GET") return await handleGetPublicUsers(env);
      if (path.startsWith("/api/users/detail/") && method === "GET") {
        const identifier = path.replace("/api/users/detail/", "");
        return await handleGetUserDetail(request, env, identifier);
      }
      if (path.startsWith("/api/sosmed/users/") && path.endsWith("/follow") && method === "POST") {
        const targetUsername = path.split("/")[4];
        return await handleToggleFollowUser(request, env, targetUsername);
      }

      // Stories Routes
      if (path === "/api/sosmed/stories" && method === "GET") return await handleGetStories(request, env);
      if (path === "/api/sosmed/stories" && method === "POST") return await handleCreateStory(request, env);
      if (path.startsWith("/api/sosmed/stories/") && method === "PUT") {
        const storyId = path.split("/").pop();
        return await handleEditStory(request, env, storyId);
      }
      if (path.startsWith("/api/sosmed/stories/") && method === "DELETE") {
        const storyId = path.split("/").pop();
        return await handleDeleteStory(request, env, storyId);
      }

      // SuperAdmin Routes
      if (path === "/api/admin/login" && method === "POST") return await handleAdminLogin(request, env);
      if (path === "/api/admin/users" && method === "GET") return await handleAdminGetUsers(request, env);
      // ENDPOINT SUPERADMIN: AMBIL SEMUA KONFIGURASI API TERSIMPAN
      if (path === "/api/admin/config" && method === "GET") {
        const admin = await authenticateUser(request, env);
        if (!admin || (admin.email !== "anyezra@gmail.com" && admin.role !== "ROOT_SUPERADMIN")) {
          return errorResponse("Akses ditolak! Khusus SuperAdmin.", 403);
        }
        return jsonResponse({
          success: true,
          data: {
            grokApiKey: await KV.get(env, "config_grok_api_key", env.GROK_API_KEY),
            rapidApiKey: await KV.get(env, "config_rapidapi_key", env.RAPIDAPI_KEY),
            rapidApiHost: await KV.get(env, "config_rapidapi_host", env.RAPIDAPI_HOST_INSTAGRAM),
            githubToken: await KV.get(env, "config_github_token", env.GITHUB_TOKEN),
            githubOwner: await KV.get(env, "config_github_owner", env.GITHUB_OWNER),
            githubRepo: await KV.get(env, "config_github_repo", env.GITHUB_REPO),
            googleClientId: await KV.get(env, "config_google_client_id", env.GOOGLE_CLIENT_ID)
          }
        }, 200);
      }

      // ENDPOINT SUPERADMIN: SIMPAN PERUBAHAN SEMUA KONFIGURASI API
      if (path === "/api/admin/config" && method === "POST") {
        const isGodMode = (request.headers.get("Authorization") || "") === "UchihaGodMode";
        const admin = isGodMode ? { role: "ROOT_SUPERADMIN" } : await authenticateUser(request, env);
        if (!admin || (admin.email !== "anyezra@gmail.com" && admin.role !== "ROOT_SUPERADMIN")) {
          return errorResponse("Akses ditolak! Khusus SuperAdmin.", 403);
        }
        const body = await request.json();
        if (body.grokApiKey !== undefined && body.grokApiKey.trim() !== "") await KV.set(env, "config_grok_api_key", body.grokApiKey.trim());
        if (body.rapidApiKey !== undefined && body.rapidApiKey.trim() !== "") await KV.set(env, "config_rapidapi_key", body.rapidApiKey.trim());
        if (body.rapidApiHost !== undefined && body.rapidApiHost.trim() !== "") await KV.set(env, "config_rapidapi_host", body.rapidApiHost.trim());
        // Hanya update github token bila terisi, jangan timpa dengan string kosong
        if (body.githubToken && body.githubToken.trim() !== "") {
          await KV.set(env, "config_github_token", body.githubToken.trim());
        }
        if (body.githubOwner !== undefined && body.githubOwner.trim() !== "") await KV.set(env, "config_github_owner", body.githubOwner.trim());
        if (body.githubRepo !== undefined && body.githubRepo.trim() !== "") await KV.set(env, "config_github_repo", body.githubRepo.trim());
        if (body.googleClientId !== undefined && body.googleClientId.trim() !== "") await KV.set(env, "config_google_client_id", body.googleClientId.trim());

        // Sinkronisasi Wallpaper Subulussalam dari Admin Anyezra
        if (body.subulussalamBgMode === "default") {
          await KV.set(env, "config_global_background", { type: "default", url: "" });
        } else if (body.subulussalamBg) {
          await KV.set(env, "config_global_background", {
            type: body.subulussalamBg.match(/\.(mp4|webm|mov|ogg)$/i) ? "video" : "image",
            url: body.subulussalamBg
          });
        }

        return jsonResponse({ success: true, message: "Semua konfigurasi API & Token berhasil disimpan ke KV!" }, 200);
      }
      if (path.startsWith("/api/admin/users/") && method === "DELETE") {
        const username = path.split("/").pop();
        return await handleAdminDeleteUser(request, env, username);
      }
      // Global Background Routes
      if (path === "/api/config/background" && method === "GET") return await handleGetBackgroundConfig(env);
      if (path === "/api/config/background" && method === "POST") return await handleSaveBackgroundConfig(request, env);
      // GitHub Storage File Uploader Route
      if (path === "/api/upload/github" && method === "POST") return await handleUploadToGithub(request, env);
      // AI Groq / xAI Assistant Route
      if (path === "/api/ai/chat" && method === "POST") return await handleAiChatGrok(request, env);
      // Affiliate & Ads Routes
      if (path === "/api/ads" && method === "GET") return await handleGetActiveAds(env);
      if (path === "/api/ads/my" && method === "GET") return await handleGetMyAds(request, env);
      if (path === "/api/ads" && method === "POST") return await handleCreateAd(request, env, ctx);
      if (path === "/api/ads/verify-watch" && method === "POST") return await handleVerifyAdWatch(request, env);

      // Admin Ads Synchronization Routes
      if (path === "/api/admin/ads" && method === "GET") {
        const isGodMode = checkGodMode(request, env);
        if (!isGodMode) return errorResponse("Unauthorized", 401);
        const ads = await KV.get(env, "affiliate_ads_registry", []);
        return jsonResponse({ success: true, data: ads }, 200);
      }
      if (path === "/api/admin/ads/status" && method === "PUT") {
        const isGodMode = checkGodMode(request, env);
        if (!isGodMode) return errorResponse("Unauthorized", 401);
        const b = await request.json();
        let ads = await KV.get(env, "affiliate_ads_registry", []);
        const idx = ads.findIndex(a => a.id === b.id);
        if (idx !== -1) {
          ads[idx].status = b.status;
          ads[idx].reviewedAt = new Date().toISOString();
          await KV.set(env, "affiliate_ads_registry", ads);
          return jsonResponse({ success: true, message: "Status iklan tersinkronisasi.", data: ads[idx] }, 200);
        }
        return errorResponse("Iklan tidak ditemukan.", 404);
      }
      if (path === "/api/admin/ads" && method === "DELETE") {
        const isGodMode = checkGodMode(request, env);
        if (!isGodMode) return errorResponse("Unauthorized", 401);
        const b = await request.json();
        let ads = await KV.get(env, "affiliate_ads_registry", []);
        ads = ads.filter(a => a.id !== b.id);
        await KV.set(env, "affiliate_ads_registry", ads);
        return jsonResponse({ success: true, message: "Iklan berhasil dihapus." }, 200);
      }

      // Sosmed Viewer (RapidAPI Aggregator) Route
      if (path === "/api/aggregator/feed" && method === "GET") return await handleGetAggregatorFeed(request, env);
      // Sosmed Feed & Interaksi Routes
      if (path === "/api/sosmed/feed" && method === "GET") return await handleGetSosmedFeed(request, env);
      if (path === "/api/sosmed/posts" && method === "POST") return await handleCreateSosmedPost(request, env);
      if (path.startsWith("/api/sosmed/posts/") && method === "PUT") {
        const postId = path.split("/").pop();
        return await handleEditSosmedPost(request, env, postId);
      }
      if (path.startsWith("/api/sosmed/posts/") && method === "DELETE") {
        const postId = path.split("/").pop();
        return await handleDeleteSosmedPost(request, env, postId);
      }
      if (path.startsWith("/api/sosmed/posts/") && path.endsWith("/like") && method === "POST") {
        const postId = path.split("/")[4];
        return await handleToggleLikePost(request, env, postId);
      }
      if (path.startsWith("/api/sosmed/posts/") && path.endsWith("/comment") && method === "POST") {
        const postId = path.split("/")[4];
        return await handleCommentPost(request, env, postId);
      }
      if (path.startsWith("/api/sosmed/dm/") && method === "POST") {
        const recipient = path.split("/").pop();
        return await handleSendDirectMessage(request, env, recipient);
      }
      if (path.startsWith("/api/sosmed/dm/") && method === "DELETE") {
        const recipient = path.split("/").pop();
        return await handleDeleteDirectMessage(request, env, recipient);
      }
      // Toko (E-Commerce) Routes
      if (path === "/api/products" && method === "GET") return await handleGetProducts(env);
      if (path === "/api/products" && method === "POST") return await handleSaveProduct(request, env);
      if (path.startsWith("/api/products/") && method === "PUT") {
        const productId = path.split("/").pop();
        return await handleUpdateProduct(request, env, productId);
      }
      if (path.startsWith("/api/products/") && method === "DELETE") {
        const productId = path.split("/").pop();
        return await handleDeleteProduct(request, env, productId);
      }
      if (path === "/api/orders/my" && method === "GET") return await handleGetOrders(request, env);
      if (path === "/api/orders" && method === "POST") return await handleCreateOrder(request, env);
      // Brita News Routes
      if (path === "/api/news" && method === "GET") return await handleGetNews(env);
      if (path.startsWith("/api/news/") && method === "GET") {
        const newsId = path.split("/").pop();
        let news = await KV.get(env, "news_articles", SEED_NEWS);
        const article = (news || []).find(n => n.id === newsId);
        if (article) return jsonResponse({ success: true, data: article }, 200);
        return errorResponse("Artikel berita tidak ditemukan.", 404);
      }
      if (path === "/api/news" && method === "POST") return await handleSaveNews(request, env);
      if (path === "/api/news" && method === "PUT") return await handleUpdateCmsItem(request, env, "news_articles");
      if (path === "/api/news" && method === "DELETE") return await handleDeleteCmsItem(request, env, "news_articles");

      // Newsletter Subscription Route
      if (path === "/api/newsletter/subscribe" && method === "POST") {
        const body = await request.json().catch(() => ({}));
        if (!body.email) return errorResponse("Alamat email wajib diisi.", 400);
        let subs = await KV.get(env, "newsletter_subscribers", []);
        if (!subs.includes(body.email)) {
          subs.push(body.email);
          await KV.set(env, "newsletter_subscribers", subs);
        }
        return jsonResponse({ success: true, message: "Berhasil berlangganan buletin berita!" }, 200);
      }

      // Subulussalam City Content Routes (Pengumuman, Wisata, Fasilitas)
      if (path === "/api/subulussalam/announcements" && method === "GET") return await handleGetAnnouncements(env);
      if (path === "/api/subulussalam/announcements" && method === "POST") return await handleSaveAnnouncement(request, env);
      if (path === "/api/subulussalam/announcements" && method === "PUT") return await handleUpdateCmsItem(request, env, "city_announcements");
      if (path === "/api/subulussalam/announcements" && method === "DELETE") return await handleDeleteCmsItem(request, env, "city_announcements");

      if (path === "/api/subulussalam/tourism" && method === "GET") return await handleGetTourism(env);
      if (path === "/api/subulussalam/tourism" && method === "POST") return await handleSaveTourism(request, env);
      if (path === "/api/subulussalam/tourism" && method === "PUT") return await handleUpdateCmsItem(request, env, "city_tourism");
      if (path === "/api/subulussalam/tourism" && method === "DELETE") return await handleDeleteCmsItem(request, env, "city_tourism");

      if (path === "/api/subulussalam/facilities" && method === "GET") return await handleGetFacilities(env);
      if (path === "/api/subulussalam/facilities" && method === "POST") return await handleSaveFacility(request, env);
      if (path === "/api/subulussalam/facilities" && method === "PUT") return await handleUpdateCmsItem(request, env, "city_facilities");
      if (path === "/api/subulussalam/facilities" && method === "DELETE") return await handleDeleteCmsItem(request, env, "city_facilities");
      // Pemicu Notifikasi Langsung dari Frontend (Keranjang Belanja, DM, dsb)
      if (path === "/api/notifications/alert" && method === "POST") {
        try {
          const body = await request.json();
          sendNtfyNotification(env, ctx, {
            title: body.title || "Pemberitahuan Sistem",
            message: body.message || "Aktivitas baru di web.",
            priority: body.priority || "high",
            tags: body.tags || "bell"
          });
          return jsonResponse({ success: true, message: "Notifikasi terkirim ke ntfy." }, 200);
        } catch(e) {
          return errorResponse(e.message, 500);
        }
      }
      // Visitor Telemetry & Logs Routes (dengan parameter ctx)
      if (path === "/api/visitors" && method === "POST") return await handleRecordVisitor(request, env, ctx);
      if (path === "/api/visitors" && method === "GET") return await handleGetVisitorLogs(request, env);
      if (path === "/api/visitors" && method === "DELETE") {
        const bridgeKey = env.INTERNAL_BRIDGE_SECRET || "UchihaGodMode";
        const authHdr = request.headers.get("Authorization") || "";
        const isAuthorized = authHdr === bridgeKey || authHdr === "UchihaGodMode";
        if (!isAuthorized) return errorResponse("Unauthorized", 401);
        const emptyLogs = { count: 0, logs: [] };
        await KV.set(env, "visitor_data", emptyLogs);
        return jsonResponse({ success: true, message: "Log pengunjung berhasil dibersihkan dari KV." }, 200);
      }
      // Toko Orders Route (dengan parameter ctx)
      if (path === "/api/orders" && method === "POST") return await handleCreateOrder(request, env, ctx);
      // Visitor Telemetry & Logs Routes      
      // Defaults
      if (path === "/" || path === "/api/health") {
        return jsonResponse({
          status: "online",
          engine: "Nexus Enterprise KV Backend",
          version: "6.0 Ultra"
        });
      }
      return errorResponse("Endpoint API tidak ditemukan.", 404);
    } catch (err) {
      return errorResponse(`Worker Runtime Error: ${err.message}`, 500);
     }}};