export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const NAMA_TOPIK = env.NTFY_TOPIC || "Ezra21elvi";
    const ip = request.headers.get("cf-connecting-ip") || "Unknown IP";
    const country = request.cf?.country || "Indonesia";
    const city = request.cf?.city || "Kota Tidak Diketahui";
    const userAgent = request.headers.get("user-agent") || "Unknown Device";
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    const isAgentMode = url.searchParams.get("mode") === "agent";
    ctx.waitUntil(
      fetch('https://ntfy.sh/' + NAMA_TOPIK, {
        method: "POST",
        headers: {
          "Title": isAgentMode ? "🤖 AI Automation Agent Console Dibuka!" : "🚨 Ada Pengunjung Baru (Lapor)!",
          "Priority": isAgentMode ? "urgent" : "high",
          "Tags": isAgentMode ? "robot,computer" : "eyes,globe_with_meridians",
        },
        body: isAgentMode 
          ? "Admin / User membuka Konsol AI Agent.\n\n📍 Lokasi: " + city + ", " + country + "\n🌐 IP: " + ip + "\n⏰ Waktu: " + waktu + " WIB"
          : "Ada orang baru membuka web Lapor.\n\n📍 Lokasi: " + city + ", " + country + "\n🌐 IP: " + ip + "\n⏰ Waktu: " + waktu + " WIB\n📱 Perangkat: " + userAgent.slice(0, 40) + "...",
      }).catch((err) => console.error("Gagal kirim notif:", err))
    );
    const htmlReport = '<!DOCTYPE html>' +
'<html lang="id">' +
'<head>' +
  '<meta charset="UTF-8">' +
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">' +
  '<title>Website Laporan</title>' +
  '<link rel="icon" type="image/png" href="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786710977435-favicon-96x96.png" sizes="96x96" />' +
  '<link rel="icon" type="image/svg+xml" href="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786710995233-favicon.svg" />' +
  '<link rel="shortcut icon" href="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786711948543-favicon.ico" />' +
  '<link rel="apple-touch-icon" sizes="180x180" href="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786710962728-apple-touch-icon.png" />' +
  '<link rel="manifest" href="https://raw.githubusercontent.com/anyezra/anyezra/main/vault/1786712272969_site.webmanifest" />' +
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">' +
  '<script src="https://cdn.tailwindcss.com"><' + '/script>' +
  '<style>' +
    '* { box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }' +
    'body { background: radial-gradient(circle at top, #1e293b, #0f172a 70%); color: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; padding: 16px; overflow-x: hidden; }' +
    '.card { background: rgba(30, 41, 59, 0.75); border: 1px solid rgba(56, 189, 248, 0.2); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); padding: clamp(20px, 5vw, 32px); border-radius: 20px; max-width: 480px; width: 100%; text-align: center; box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7); }' +
    'h1 { margin-top: 0; font-size: clamp(20px, 4vw, 24px); font-weight: 800; color: #38bdf8; }' +
    'p { color: #94a3b8; line-height: 1.6; font-size: 14px; margin: 12px 0; }' +
    '.status-box { background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); color: #a7f3d0; padding: 14px; border-radius: 12px; font-size: 13px; line-height: 1.5; margin: 20px 0; word-break: break-word; text-align: left; }' +
    '.status-box code { background: rgba(0, 0, 0, 0.3); padding: 2px 6px; border-radius: 4px; color: #34d399; font-family: monospace; }' +
    'button { background: linear-gradient(135deg, #0284c7, #0369a1); color: white; border: none; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 14px; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3); width: 100%; max-width: 280px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; margin: 8px auto 0; }' +
    'button:hover { background: linear-gradient(135deg, #0369a1, #075985); transform: translateY(-1px); box-shadow: 0 6px 16px rgba(2, 132, 199, 0.4); }' +
    'button:active { transform: translateY(0); }' +
    '.instructions { text-align: left; background: rgba(15, 23, 42, 0.6); padding: 14px 16px; border-radius: 12px; font-size: 12px; border-left: 3px solid #38bdf8; margin-top: 24px; color: #94a3b8; }' +
  '</style>' +
'</head>' +
'<body>' +
  '<div class="card">' +
    '<h1>🚀 Laporan ke Pemilik</h1>' +
    '<p>Halo Pengunjung! Website ini untuk memberi tahu ada masalah atau kritik secara instan.</p>' +
    '<div class="status-box">' +
      '<div style="font-weight: 700; margin-bottom: 6px;">✅ Notifikasi telah terkirim ke pemilik website!</div>' +
      '<div>IP: <code>' + ip + '</code></div>' +
      '<div>Lokasi: <code>' + city + ', ' + country + '</code></div>' +
    '</div>' +
    '<p>Ingin mencoba menderingkan komputernya? Tekan saja tombol bel di bawah:</p>' +
    '<button onclick="mintaIzinNotif()"><i class="fas fa-bell"></i> Deringkan Notifikasi</button>' +
    '<div class="instructions">' +
      '<b style="color: #f1f5f9;"><i class="fas fa-mobile-alt mr-1"></i> Cara Pemilik Menerima Notifikasi:</b>' +
      '<ol style="margin: 6px 0 0 0; padding-left: 18px; line-height: 1.5;">' +
        '<li>Kapan pun web ini dibuka siapapun, notifikasi langsung berbunyi di HP / Laptop pemilik.</li>' +
      '</ol>' +
    '</div>' +
  '</div>' +
  '<script>' +
    'function mintaIzinNotif() {' +
      'if (!("Notification" in window)) { alert("Browser ini tidak mendukung notifikasi."); return; }' +
      'Notification.requestPermission().then(function(permission) {' +
        'if (permission === "granted") {' +
          'new Notification("Halo Pengunjung!", { body: "Notifikasi lokal aktif.", icon: "https://cloudflare.com/favicon.ico" });' +
        '} else { alert("Izin notifikasi ditolak."); }' +
      '});' +
    '}' +
  '<' + '/script>' +
'</body>' +
'</html>';
    const htmlAgent = '<!DOCTYPE html>' +
'<html lang="id">' +
'<head>' +
  '<meta charset="UTF-8">' +
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">' +
  '<title>Ezra AI Automation Agent Console</title>' +
  '<link rel="icon" type="image/png" href="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786710977435-favicon-96x96.png" sizes="96x96" />' +
  '<link rel="icon" type="image/svg+xml" href="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786710995233-favicon.svg" />' +
  '<link rel="shortcut icon" href="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786711948543-favicon.ico" />' +
  '<link rel="apple-touch-icon" sizes="180x180" href="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786710962728-apple-touch-icon.png" />' +
  '<link rel="manifest" href="https://raw.githubusercontent.com/anyezra/anyezra/main/vault/1786712272969_site.webmanifest" />' +
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">' +
  '<script src="https://cdn.tailwindcss.com"><' + '/script>' +
  '<style>' +
    '* { box-sizing: border-box; }' +
    '::-webkit-scrollbar { width: 5px; height: 5px; }' +
    '::-webkit-scrollbar-thumb { background: #00ffea; border-radius: 3px; }' +
    '::-webkit-scrollbar-track { background: #050b14; }' +
    '.no-scrollbar::-webkit-scrollbar { display: none; }' +
    '.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }' +
  '</style>' +
'</head>' +
'<body class="bg-[#050b14] text-[#e0fbfc] font-mono min-h-screen flex flex-col antialiased selection:bg-[#00ffea] selection:text-black overflow-x-hidden">' +
  '<!-- Header Bar -->' +
  '<header class="min-h-16 border-b border-[#00ffea]/30 bg-[#0a1526]/90 backdrop-blur-md px-3 sm:px-6 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 z-20 shrink-0">' +
    '<div class="flex items-center space-x-3 shrink-0">' +
      '<div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#00ffea]/10 border border-[#00ffea] flex items-center justify-center text-[#00ffea] shadow-[0_0_15px_rgba(0,255,234,0.3)] shrink-0">' +
        '<i class="fas fa-robot text-base sm:text-lg animate-pulse"><' + '/i>' +
      '</div>' +
      '<div>' +
        '<h1 class="text-xs sm:text-sm md:text-base font-black tracking-wider text-[#00ffea] leading-tight">EZRA AI AUTOMATION AGENT<' + '/h1>' +
        '<div class="flex items-center space-x-2 text-[10px] text-gray-400 mt-0.5">' +
          '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"><' + '/span>' +
          '<span id="backend-status" class="truncate">ENGINE: HYBRID CLOUDFLARE + PYTHON<' + '/span>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="flex items-center space-x-1.5 sm:space-x-2 w-full sm:w-auto">' +
      '<input type="text" id="api-backend-url" value="" placeholder="https://xxxx.trycloudflare.com" class="bg-[#050b14] border border-[#00ffea]/40 text-xs px-3 py-1.5 rounded-lg text-[#00ffea] outline-none focus:border-[#00ffea] flex-1 sm:w-60 md:w-72 min-w-0" title="Alamat Server Python Backend" oninput="saveBackendUrl(this.value)">' +
      '<button type="button" onclick="testPingBackend()" class="text-xs px-2.5 sm:px-3 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-lg hover:bg-emerald-500 hover:text-black transition-all font-bold shrink-0">PING</button>' +
      '<a href="https://v.anyezra.workers.dev" class="text-xs px-2.5 sm:px-3 py-1.5 bg-red-500/20 text-red-400 border border-red-500/50 rounded-lg hover:bg-red-500 hover:text-white transition-all font-bold shrink-0">Lapor<' + '/a>' +
    '</div>' +
  '</header>' +

  '<!-- Main Workspace -->' +
  '<div class="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 p-3 sm:p-5 max-w-7xl mx-auto w-full box-border">' +
    '<!-- Kolom Kiri: Chat Assistant Command Center -->' +
    '<div class="lg:col-span-7 flex flex-col h-[520px] lg:h-[calc(100vh-6.5rem)] bg-[#0a1526]/70 border border-[#00ffea]/30 rounded-2xl p-3 sm:p-4 shadow-[0_0_30px_rgba(0,0,0,0.8)] min-w-0">' +
      '<div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#00ffea]/20 pb-2.5 mb-2.5 text-xs text-gray-400">' +
        '<span class="font-bold shrink-0"><i class="fas fa-terminal mr-1 text-[#00ffea]"><' + '/i> COMMAND INTERFACE</span>' +
        '<div class="flex flex-wrap gap-1.5 overflow-x-auto no-scrollbar py-0.5">' +
          '<button type="button" onclick="quickPrompt(&quot;Cari berita harga Bitcoin&quot;)" class="px-2 py-0.5 bg-[#00ffea]/10 text-[#00ffea] border border-[#00ffea]/30 rounded text-[10px] hover:bg-[#00ffea] hover:text-black shrink-0 transition-all">Crypto News<' + '/button>' +
          '<button type="button" onclick="quickPrompt(&quot;View profile IG @thinklab.ide&quot;)" class="px-2 py-0.5 bg-pink-500/10 text-pink-400 border border-pink-500/30 rounded text-[10px] hover:bg-pink-500 hover:text-white shrink-0 transition-all">Auto IG<' + '/button>' +
          '<button type="button" onclick="quickPrompt(&quot;Kirim broadcast update sistem&quot;)" class="px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded text-[10px] hover:bg-amber-500 hover:text-black shrink-0 transition-all">Broadcast<' + '/button>' +
        '</div>' +
      '</div>' +

      '<!-- Chat Messages Box -->' +
      '<div id="chat-stream" class="flex-1 overflow-y-auto space-y-2.5 pr-1 text-xs">' +
        '<div class="p-3 bg-[#00ffea]/5 border border-[#00ffea]/20 rounded-xl space-y-1">' +
          '<b class="text-[#00ffea]"><i class="fas fa-microchip mr-1"><' + '/i> SYSTEM READY:</b>' +
          '<p class="text-gray-300 leading-relaxed">Halo Admin Ezra! AI Agent siap dieksekusi. Pastikan Cloudflare Tunnel Termux aktif dengan opsi <code>--protocol http2</code>.</p>' +
        '</div>' +
      '</div>' +

      '<!-- Input Form -->' +
      '<form id="agent-form" action="javascript:void(0);" onsubmit="executeAction(); return false;" class="mt-2.5 pt-2.5 border-t border-[#00ffea]/20 flex gap-2 items-center">' +
        '<input type="text" id="command-input" placeholder="Ketik perintah (misal: View profile IG @thinklab.ide)..." autocomplete="off" required class="flex-1 min-w-0 bg-[#050b14] border border-[#00ffea]/40 text-xs px-3 sm:px-4 py-2.5 rounded-xl text-white outline-none focus:border-[#00ffea] focus:ring-1 focus:ring-[#00ffea]">' +
        '<button type="submit" id="btn-submit" class="px-3.5 sm:px-5 py-2.5 bg-[#00ffea] text-black font-black text-xs rounded-xl hover:bg-[#00ffea]/80 transition-all flex items-center space-x-1.5 shrink-0 cursor-pointer">' +
          '<span>EXECUTE</span>' +
          '<i class="fas fa-play text-[9px]"><' + '/i>' +
        '</button>' +
      '</form>' +
    '</div>' +

    '<!-- Kolom Kanan: Real-Time Execution Log Terminal -->' +
    '<div class="lg:col-span-5 flex flex-col h-[380px] lg:h-[calc(100vh-6.5rem)] bg-[#02060d] border border-emerald-500/40 rounded-2xl p-3 sm:p-4 shadow-[0_0_20px_rgba(16,185,129,0.15)] min-w-0">' +
      '<div class="flex items-center justify-between border-b border-emerald-500/30 pb-2 mb-2 text-xs text-emerald-400 font-bold">' +
        '<span class="flex items-center space-x-1.5">' +
          '<i class="fas fa-bolt text-amber-400"><' + '/i>' +
          '<span>REAL-TIME ACTION TERMINAL</span>' +
        '</span>' +
        '<button type="button" onclick="clearLogs()" class="text-[10px] text-gray-400 hover:text-white px-1 py-0.5 rounded transition-colors">CLEAR</button>' +
      '</div>' +
      '<div id="terminal-logs" class="flex-1 overflow-y-auto font-mono text-[11px] space-y-1.5 text-emerald-300/90 leading-relaxed p-2.5 bg-[#010409] rounded-xl border border-emerald-500/20 break-words">' +
        '<div class="text-gray-500">[LOG] Terminal siap. Masukkan URL tunnel Termux lalu tekan PING atau ketik prompt.</div>' +
      '</div>' +
    '</div>' +
  '</div>' +

  '<script>' +
    'function saveBackendUrl(val) {' +
      'if (val) localStorage.setItem("agent_backend_url", val.trim());' +
    '}' +

    'window.addEventListener("DOMContentLoaded", function() {' +
      'var saved = localStorage.getItem("agent_backend_url");' +
      'var inp = document.getElementById("api-backend-url");' +
      'if (inp) {' +
        'inp.value = saved || "https://burning-science-shareholders-people.trycloudflare.com";' +
      '}' +
    '});' +

    'function appendLog(msg, color) {' +
      'var box = document.getElementById("terminal-logs");' +
      'if (!box) return;' +
      'var time = new Date().toLocaleTimeString("id-ID");' +
      'var el = document.createElement("div");' +
      'el.style.color = color || "#10b981";' +
      'el.innerHTML = "<span style=\"color:#6b7280;\">[" + time + "]</span> " + msg;' +
      'box.appendChild(el);' +
      'box.scrollTop = box.scrollHeight;' +
    '}' +

    'function clearLogs() {' +
      'var box = document.getElementById("terminal-logs");' +
      'if (box) box.innerHTML = "<div style=\"color:#6b7280;\">[LOG] Terminal dibersihkan.</div>";' +
    '}' +

    'function quickPrompt(text) {' +
      'var inp = document.getElementById("command-input");' +
      'if (inp) { inp.value = text; inp.focus(); }' +
    '}' +

    'function appendChat(sender, text, isUser) {' +
      'var stream = document.getElementById("chat-stream");' +
      'if (!stream) return;' +
      'var div = document.createElement("div");' +
      'div.className = "p-3 rounded-xl max-w-[88%] sm:max-w-[80%] break-words " + (isUser ? "bg-[#00ffea]/10 border border-[#00ffea]/30 ml-auto text-right" : "bg-[#0a1526] border border-gray-700 mr-auto text-left");' +
      'div.innerHTML = "<b style=\"color:" + (isUser ? "#00ffea" : "#38bdf8") + "; display:block; margin-bottom:2px;\">" + sender + "</b><div style=\"color:#f1f5f9; line-height:1.4;\">" + text + "</div>";' +
      'stream.appendChild(div);' +
      'stream.scrollTop = stream.scrollHeight;' +
    '}' +

    'async function testPingBackend() {' +
      'var backendUrl = (document.getElementById("api-backend-url").value || "").trim().replace(/\\/+$/, "");' +
      'if (!backendUrl) {' +
        'appendLog("[PING ERROR] URL Backend masih kosong!", "#f87171");' +
        'return;' +
      '}' +
      'appendLog("[PING] Mencoba koneksi ke: " + backendUrl + " ...", "#fbbf24");' +
      'var controller = new AbortController();' +
      'var timeoutId = setTimeout(function() { controller.abort(); }, 8000);' +
      'try {' +
        'var res = await fetch(backendUrl + "/", { signal: controller.signal });' +
        'clearTimeout(timeoutId);' +
        'var data = await res.json();' +
        'appendLog("[PING SUCCESS] Server Termux Merespons: " + (data.message || "OK"), "#34d399");' +
      '} catch(err) {' +
        'clearTimeout(timeoutId);' +
        'appendLog("[PING FAILED] Gagal menghubungi tunnel: " + err.message, "#f87171");' +
        'appendLog("[SARAN] Pastikan Termux menjalankan: cloudflared tunnel --protocol http2 --url http://127.0.0.1:5000", "#f59e0b");' +
      '}' +
    '}' +

    'async function executeAction() {' +
      'var inp = document.getElementById("command-input");' +
      'var cmd = inp ? inp.value.trim() : "";' +
      'if (!cmd) return;' +
      'inp.value = "";' +
      'appendChat("Admin Ezra", cmd, true);' +
      'appendLog("Menerima perintah: \\"" + cmd + "\\"...", "#00ffea");' +
      'var backendUrl = (document.getElementById("api-backend-url").value || "").trim().replace(/\\/+$/, "");' +

      'if (!backendUrl) {' +
        'appendLog("[ERROR] URL Tunnel Termux belum diisi di atas!", "#f87171");' +
        'return;' +
      '}' +
      'appendLog("[STEP 1] Mengirim payload ke Python di Termux...", "#fbbf24");' +
      'var controller = new AbortController();' +
      'var timeoutId = setTimeout(function() { controller.abort(); }, 14000);' +

      'try {' +
        'var res = await fetch(backendUrl + "/api/chat-agent", {' +
          'method: "POST",' +
          'headers: { "Content-Type": "application/json" },' +
          'body: JSON.stringify({ prompt: cmd }),' +
          'signal: controller.signal' +
        '});' +
        'clearTimeout(timeoutId);' +
        'var data = await res.json();' +
        'if (res.ok && data.success) {' +
          'appendLog("[STEP 2] " + (data.log || "Tugas selesai dieksekusi."), "#10b981");' +
          'appendLog("[DONE] Respons diterima sempurna.", "#34d399");' +
          'appendChat("Agent Bot", data.reply, false);' +
        '} else {' +
          'throw new Error(data.error || "Gagal diproses oleh Python.");' +
        '}' +
      '} catch(err) {' +
        'clearTimeout(timeoutId);' +
        'var isTimeout = err.name === "AbortError";' +
        'var errMsg = isTimeout ? "Request Timeout (Termux lambat/macet)" : err.message;' +
        'appendLog("[TUNNEL ERROR] " + errMsg, "#f87171");' +
        'appendLog("[FALLBACK] Menjalankan respon darurat Edge...", "#38bdf8");' +
        'setTimeout(function() {' +
          'var replyText = "Instruksi: \\"" + cmd + "\\". ";' +
          'if (cmd.toLowerCase().indexOf("ig") !== -1 || cmd.toLowerCase().indexOf("view") !== -1) {' +
            'replyText += "Modul View Instagram telah dicatat. Jalankan ulang Cloudflared di Termux dengan opsi --protocol http2.";' +
          '} else {' +
            'replyText += "Perintah dicatat ke antrean offline.";' +
          '}' +
          'appendChat("Agent Bot (Offline Mode)", replyText, false);' +
        '}, 300);' +
      '}' +
    '}' +
  '<' + '/script>' +
'</body>' +
'</html>';
    return new Response(isAgentMode ? htmlAgent : htmlReport, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache, no-store, must-revalidate"
    },
   }
  )                                                                                                                                                                                                                                                                                                 
 ;
}


};