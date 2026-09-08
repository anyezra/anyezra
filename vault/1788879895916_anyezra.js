const MASTER_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Ezra Bancin21</title>
<link rel="icon" type="image/png" href="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786710977435-favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786710995233-favicon.svg" />
<link rel="shortcut icon" href="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786711948543-favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786710962728-apple-touch-icon.png" />
<link rel="manifest" href="https://raw.githubusercontent.com/anyezra/anyezra/main/vault/1786712272969_site.webmanifest" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<script src="https://accounts.google.com/gsi/client" async defer></script>
<style>
  :root {
    --chakra-color: #ff0000;
    --dark-bg: #050505;
    --glass: rgba(0,0,0,0.85);
    --border-glow: 0 0 10px rgba(255,0,0,0.5);
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  html, body {
    background: #000;
    color: #fff;
    font-family: 'Courier New', Courier, monospace;
    overflow: hidden;
    height: 100%;
    height: 100dvh;
    width: 100vw;
    position: fixed;
  }

  /* CONTAINER 3 REALM DIMENS LAYAR PENUH */
  #omniverse-viewport {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100%;
    height: 100dvh;
    overflow: hidden;
  }

  .dimension-screen {
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100%;
    height: 100dvh;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: scale(0.96);
    transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.77, 0, 0.175, 1), visibility 0.5s;
    z-index: 1;
  }

  .dimension-screen.active-dimension {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: scale(1);
    z-index: 10;
  }

  #realm-past {
    background-color: #030305;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  #realm-past .overlay {
    background: rgba(10,10,20,0.85);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(0,255,255,0.2);
    border-radius: 15px;
    box-shadow: 0 0 30px rgba(0,168,255,0.2);
    padding: 30px;
    max-width: 500px;
    width: 90%;
    text-align: center;
    z-index: 10;
  }
  #realm-past #display-title {
    color: #00a8ff; margin-bottom: 15px; letter-spacing: 2px; text-transform: uppercase; font-size: 1.8rem; text-shadow: 0 0 10px rgba(0,168,255,0.5);
  }
  #realm-past .floating-question { font-size: 1.1em; font-weight: bold; color: #00ffcc; margin-bottom: 20px; text-shadow: 0 0 10px rgba(0,255,204,0.5); }
  #realm-past .radio-group { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; text-align: left; background: rgba(0,0,0,0.4); padding: 12px; border-radius: 8px; border: 1px solid rgba(0,255,255,0.1); }
  #realm-past .radio-label { display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.95em; color: #e0fbfc; transition: 0.2s; }
  #realm-past .radio-label:hover { color: #00ffcc; }
  #realm-past .options { display: flex; justify-content: center; gap: 15px; }
  #realm-past button { background: transparent; color: #00a8ff; border: 2px solid #00a8ff; padding: 10px 25px; font-size: 1em; font-family: inherit; cursor: pointer; border-radius: 8px; font-weight: bold; transition: all 0.3s ease; }
  #realm-past button:hover { background: #00a8ff; color: #000; box-shadow: 0 0 20px rgba(0,168,255,0.6); transform: scale(1.05); }
  #realm-past #btn-no { color: #ff3366; border-color: #ff3366; }
  #realm-past #btn-no:hover { background: #ff3366; color: #000; box-shadow: 0 0 20px rgba(255,51,102,0.6); }
  #edit-btn { position: absolute; top: 20px; left: 20px; background: #00a8ff; color: #000; width: 38px; height: 38px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 16px; cursor: grab; z-index: 9999; box-shadow: 0 0 10px rgba(0,168,255,0.5); border: none; }
  .editor-panel { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.9); width: 90%; max-width: 340px; background: rgba(10,10,20,0.98); border: 1px solid #00a8ff; border-radius: 12px; padding: 20px; box-shadow: 0 0 30px rgba(0,168,255,0.5); opacity: 0; pointer-events: none; transition: all 0.3s ease; z-index: 10000; }
  .editor-panel.open { opacity: 1; pointer-events: auto; transform: translate(-50%, -50%) scale(1); }
  .form-group { margin-bottom: 12px; display: flex; flex-direction: column; }
  .form-group label { color: #00ffcc; font-size: 11px; margin-bottom: 4px; font-weight: bold; }
  .form-group input { background: #000; color: #fff; border: 1px solid #333; padding: 6px; font-family: inherit; border-radius: 4px; outline: none; }
  .form-group input:focus { border-color: #00a8ff; }
  .btn-save { width: 100%; background: #00a8ff; color: #000; border: none; padding: 8px; font-weight: bold; cursor: pointer; font-family: inherit; border-radius: 4px; }
  #close-edit { position: absolute; top: 5px; right: 10px; color: #ff3366; cursor: pointer; font-weight: bold; }

  #realm-center {
    background: var(--dark-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--chakra-color);
  }
  #realm-center::after {
    content: " "; display: block; position: absolute; inset: 0;
    background: linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06));
    z-index: 999; background-size: 100% 2px, 3px 100%; pointer-events: none;
  }
  #bg-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; opacity: 0.3; filter: grayscale(100%) contrast(1.2); }
  .grid-container { display: grid; grid-template-columns: repeat(3,1fr); grid-template-rows: repeat(3,1fr); width: 100%; height: 100%; max-height: 100dvh; padding: 8px; gap: 6px; position: relative; z-index: 10; box-sizing: border-box; }
  .grid-item { border: 1px solid rgba(255,0,0,0.3); display: flex; flex-direction: column; justify-content: center; align-items: center; background: var(--glass); backdrop-filter: blur(5px); text-align: center; position: relative; overflow: hidden; }
  .sys-label { position: absolute; top: 5px; left: 5px; font-size: 0.6rem; opacity: 0.6; pointer-events: none; }
  .center-panel { border: 2px solid var(--chakra-color); box-shadow: var(--border-glow); z-index: 50; cursor: pointer; }
  .center-panel.expanded { position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 95vw; height: 88vh; max-height: 88vh; max-width: 600px; border-radius: 20px; background: black; border: 3px solid var(--chakra-color); box-shadow: 0 0 60px var(--chakra-color); z-index: 1000; display: flex; flex-direction: column; align-items: center; padding: 15px 15px 65px 15px; overflow: hidden; }
  #circle-content { display: none; width: 100%; height: 100%; overflow-y: auto; padding-bottom: 40px; scrollbar-width: thin; }
  .view-section { display: none; width: 100%; }
  .section-title { border-bottom: 1px dashed red; padding-bottom: 5px; margin: 20px 0 10px 0; font-size: 1rem; color: gold; text-transform: uppercase; letter-spacing: 2px; }
  .chat-box { height: 200px; overflow-y: auto; border: 1px solid #333; padding: 10px; margin-bottom: 10px; font-size: 0.8rem; background: #0a0a0a; display: flex; flex-direction: column; gap: 8px; }
  .chat-msg { background: rgba(255,255,255,0.05); padding: 8px; border-radius: 4px; border-left: 2px solid var(--chakra-color); display: flex; justify-content: space-between; align-items: flex-start; }
  .chat-content { flex: 1; text-align: left; }
  .chat-actions { display: none; gap: 5px; margin-left: 10px; }
  .chat-btn { cursor: pointer; font-size: 0.7rem; padding: 2px 5px; border: 1px solid #555; background: black; color: white; }
  .gallery-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 10px; margin-top: 10px; }
  .gallery-item { position: relative; border: 1px solid #333; background: #111; padding: 5px; }
  .gallery-media { height: 120px; width: 100%; overflow: hidden; display: flex; align-items: center; justify-content: center; background: black; }
  .gallery-media img, .gallery-media video { width: 100%; height: 100%; object-fit: cover; }
  .gallery-info { padding: 5px; text-align: left; }
  .gallery-title { font-weight: bold; color: white; font-size: 0.8rem; display: block; }
  .gallery-del { position: absolute; top: 0; right: 0; background: red; color: white; padding: 2px 6px; font-size: 0.7rem; cursor: pointer; display: none; }
  .input-group { display: flex; flex-direction: column; gap: 5px; margin-bottom: 10px; }
  input, textarea { background: #111; border: 1px solid #333; color: white; padding: 8px; font-family: inherit; }
  button.action-btn { background: var(--chakra-color); color: black; border: none; padding: 10px; font-weight: bold; cursor: pointer; margin-top: 5px; }
  
  body.is-admin { --chakra-color: #00ffea; }
  body.is-admin .chat-actions, body.is-admin .gallery-del { display: flex !important; }
  body.is-admin .grid-item { border-radius: 50%/30%; border: none; box-shadow: inset 0 0 20px rgba(0,0,0,1); }
  body.is-admin .grid-item::before { content:''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: conic-gradient(transparent, red, yellow, cyan, magenta, red); animation: rotate-border 4s linear infinite; z-index: -2; }
  body.is-admin .grid-item::after { content:''; position: absolute; inset: 3px; background: black; border-radius: inherit; z-index: -1; }
  @keyframes rotate-border { 100% { transform: rotate(360deg); } }
  .sharingan-mode { background-image: url('https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786176364285-sharingan.png'); background-size: cover; width: 60px; height: 60px; display: inline-block; border-radius: 50%; animation: spin 4s infinite linear; box-shadow: 0 0 20px red; }
  @keyframes spin { 100% { transform: rotate(360deg); } }
  .ninja-btn { background: none; border: none; color: inherit; font-size: 2rem; cursor: pointer; width: 100%; height: 100%; }
  .close-circle { position: absolute; bottom: 20px; background: var(--chakra-color); color: black; border: none; padding: 10px 30px; border-radius: 20px; font-weight: bold; display: none; cursor: pointer; z-index: 1001; }
  .center-panel.expanded .close-circle { display: block; }
  #login-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 2000; display: none; justify-content: center; align-items: center; flex-direction: column; }
  .login-option { margin: 10px; text-align: center; }
  .social-vertical { display: flex; flex-direction: column; gap: 10px; width: 100%; padding: 10px; }
  .social-btn { background: rgba(255,255,255,0.1); border: 1px solid var(--chakra-color); padding: 15px; color: white; text-decoration: none; display: flex; justify-content: space-between; align-items: center; font-size: 1rem; transition: 0.3s; }
  .social-btn:hover { background: var(--chakra-color); color: black; transform: translateX(5px); }
  #sys-info { font-size: 0.6rem; color: #ff0000; margin-bottom: 5px; font-family: 'Courier New', monospace; opacity: 0.8; }
  body.is-admin #sys-info { display: none !important; }
  body.is-admin .center-panel { background: url('https://raw.githubusercontent.com/anyezra/anyezra/main/vault/1788274407744_Screenshot_20260730-225654_1.png') no-repeat center !important; background-size: cover !important; position: relative; }
  body.is-admin .center-panel::before, body.is-admin .center-panel::after { content: ''; position: absolute; inset: 0; background: inherit; animation: glitch-anim 2s infinite linear alternate-reverse; pointer-events: none; z-index: -1; opacity: 0.4; }
  body.is-admin .center-panel::after { clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%); filter: hue-rotate(-50deg); transform: translate(5px); }
  @keyframes glitch-anim { 0% { clip-path: inset(10% 0 30% 0); } 100% { clip-path: inset(50% 0 20% 0); } }
  
  /* Proteksi Konten Panel agar selalu di atas background glitch */
  .center-panel.expanded { z-index: 1000 !important; background: #000 !important; }
  .center-panel.expanded::before, .center-panel.expanded::after { display: none !important; }
  #circle-content { position: relative; z-index: 10; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); border-radius: 12px; padding: 10px; }
  #admin-toast { position: fixed; top: 20px; right: 20px; background: rgba(0,0,0,0.9); border: 1px solid var(--chakra-color); padding: 15px; z-index: 9999; color: white; font-family: 'Courier New', monospace; border-radius: 5px; display: none; }
  .toast-bar { height: 2px; background: var(--chakra-color); margin-top: 10px; animation: shrinkBar 3s linear forwards; }
  @keyframes shrinkBar { from { width: 100%; } to { width: 0%; } }
  #geo-toast { position: fixed; top: 30px; right: -500px; background: rgba(0,0,0,0.95); border: 1px solid var(--chakra-color); padding: 15px; color: var(--chakra-color); font-family: 'Courier New', monospace; font-size: 0.7rem; z-index: 9999; display: flex; align-items: center; gap: 10px; box-shadow: 0 0 20px var(--chakra-color); transition: right 0.5s cubic-bezier(0.175,0.885,0.32,1.275); }
  #geo-toast.show { right: 30px; }

  /* NAVIGATE*/
  .nav-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.7); color: var(--chakra-color); border: 1px solid var(--chakra-color); padding: 12px 10px; font-size: 1.2rem; z-index: 1500; cursor: pointer; border-radius: 8px; transition: 0.3s; }
  .nav-arrow:hover { background: var(--chakra-color); color: #000; }
  .nav-arrow.left { left: 10px; }
  .nav-arrow.right { right: 10px; }

  #warning-overlay { position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); color: red; font-size: 3rem; font-weight: bold; text-shadow: 0 0 20px red, 0 0 40px darkred; z-index: 9999; display: none; animation: blink-warning 0.2s infinite; pointer-events: none; }
  @keyframes blink-warning { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  .floating-rainbow { position: fixed; top: 60%; left: 50%; transform: translate(-50%,-50%); font-size: 2rem; font-weight: bold; background: linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3); -webkit-background-clip: text; color: transparent; z-index: 10000; display: none; white-space: nowrap; }

  #realm-future {
    background-color: #000;
    color: #0f0;
    padding: 15px;
    font-size: 13px;
    user-select: none;
    overflow-y: auto;
    height: 100%;
    height: 100dvh;
    max-height: 100dvh;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #0f0 #000;
  }
  #realm-future button, #realm-future input, #realm-future textarea, #realm-future select { background-color: #000; color: #0f0; border: 1px solid #0f0; padding: 5px; font-family: inherit; outline: none; }
  #realm-future button:hover { background-color: #0f0; color: #000; cursor: pointer; }
  #realm-future hr { border: none; border-top: 1px dashed #0f0; margin: 15px 0; }
  #realm-future a { color: #0ff; text-decoration: none; cursor: pointer; }
  #realm-future a:hover { background-color: #0f0; color: #000; }
  .zera-nav-bar { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 10px; }
  .zera-nav-item { border: 1px solid #0f0; padding: 5px 10px; }
  .zera-section { display: none; margin-bottom: 20px; border: 1px solid #333; padding: 15px; }
  .zera-section.active { display: block; }
  .module-title { color: #fff; font-weight: bold; margin-bottom: 10px; text-transform: uppercase; border-bottom: 1px solid #333; display: inline-block; }
  .dashboard-grid { display: grid; grid-template-columns: 1fr 300px; gap: 15px; }
  @media (max-width: 768px) { .dashboard-grid { grid-template-columns: 1fr; } }
  .news-panel { border: 1px solid #333; padding: 10px; height: 500px; }
  .social-panel { border: 1px solid #333; padding: 10px; }
  .ws-card { border: 1px solid #333; padding: 10px; margin-bottom: 10px; overflow-wrap: break-word; position: relative; }
  .ws-time { font-size: 10px; color: #888; }
  .ws-media { max-width: 100%; max-height: 350px; border: 1px solid #0f0; margin-top: 5px; display: block; }
  .ws-actions { position: absolute; top: 5px; right: 5px; display: flex; gap: 5px; }
  .avatar { width: 30px; height: 30px; border-radius: 50%; border: 1px solid #0f0; object-fit: cover; }
  .avatar-lg { width: 80px; height: 80px; border-radius: 50%; border: 2px solid #0f0; object-fit: cover; cursor: pointer; }
  .search-user-item { border-bottom: 1px dashed #333; padding: 5px; display: flex; justify-content: space-between; align-items: center; }
  .search-user-info { display: flex; align-items: center; gap: 10px; }
  .floating-contact, .ai-floating-btn { position: fixed; background: #0f0; color: #000; width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center; text-decoration: none; font-size: 16px; font-weight: bold; z-index: 9999; box-shadow: 0 0 15px rgba(0,255,0,0.5); cursor: grab; border: none; }
  .floating-contact { bottom: 50px; left: 50px; font-size: 20px; }
  .ai-floating-btn { bottom: 120px; left: 50px; background: #0ff; color: #000; box-shadow: 0 0 15px rgba(0,255,255,0.5); }
  .sns-card { border: 1px solid #0f0; padding: 15px; margin-top: 10px; background: rgba(0,255,0,0.05); }
  .sns-profile-header { display: flex; gap: 15px; align-items: center; margin-bottom: 10px; }
  #chat-modal, #ai-modal, #inbox-modal { display: none; position: fixed; bottom: 30px; right: 15px; width: 320px; max-width: calc(100vw - 30px); height: 380px; max-height: 75vh; background: #000; border: 2px solid #0f0; flex-direction: column; z-index: 10005; box-shadow: 0 0 20px rgba(0,255,0,0.5); }
  .modal-header { background: #0f0; color: #000; font-weight: bold; padding: 5px 10px; display: flex; justify-content: space-between; align-items: center; }
  .modal-history { flex: 1; padding: 10px; overflow-y: auto; display: flex; flex-direction: column; gap: 5px; font-size: 12px; }
  .chat-bubble { padding: 6px 8px; border-radius: 5px; border: 1px solid #333; max-width: 85%; word-break: break-word; }
  .chat-me { align-self: flex-end; border-color: #0f0; background: rgba(0,255,0,0.1); }
  .chat-them { align-self: flex-start; border-color: #0ff; background: rgba(0,255,255,0.1); }
  .modal-input-area { display: flex; padding: 5px; border-top: 1px solid #0f0; background: #000; }
  .badge-count { background: red; color: #fff; padding: 2px 6px; border-radius: 50%; font-size: 10px; font-weight: bold; }
  #zera-auth-modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 2000; justify-content: center; align-items: center; }
  .auth-box { border: 1px solid #0f0; padding: 20px; background: #000; width: 300px; text-align: center; }
  .auth-input { width: 100%; margin-bottom: 10px; text-align: center; }
  .auth-btn { width: 100%; margin-bottom: 10px; background: #0f0; color: #000; font-weight: bold; }

  /* Input Password dengan Tombol Eye Toggle */
  .pass-wrapper { position: relative; width: 100%; display: flex; align-items: center; }
  .pass-wrapper input { width: 100%; padding-right: 32px !important; }
  .toggle-eye-btn { position: absolute; right: 6px; background: transparent !important; border: none !important; color: #aaa; cursor: pointer; padding: 4px; font-size: 13px; z-index: 5; }
  .toggle-eye-btn:hover { color: #fff; }

  /* SIMULASI HACKER & SYSTEM MELTDOWN */
  #hacker-breach-overlay { position: fixed; inset: 0; background: rgba(20,0,0,0.95); z-index: 99999; display: none; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: #ff0033; font-family: 'Courier New', monospace; padding: 20px; pointer-events: all; }
  .hacker-glitch-text { font-size: 1.8rem; font-weight: bold; text-shadow: 0 0 10px red, 0 0 20px red; animation: hacker-flash 0.1s infinite alternate; }
  @keyframes hacker-flash { 0% { opacity: 1; transform: translate(2px, -2px); } 100% { opacity: 0.7; transform: translate(-2px, 2px); } }
  
  /* Efek Website Melebur / Rusak Permanen */
  .system-meltdown-active {
    filter: invert(1) contrast(200%) hue-rotate(180deg) blur(2px) !important;
    animation: melt-shake 0.1s infinite !important;
    pointer-events: none !important;
    user-select: none !important;
  }
  @keyframes melt-shake {
    0% { transform: translate(3px, 1px) rotate(0.5deg); }
    50% { transform: translate(-3px, -2px) rotate(-0.5deg); }
    100% { transform: translate(1px, 3px) rotate(0deg); }
  }
</style>
</head>
<body>

<!-- VIEWPORT DIMENSI GESER BEBAS RELOAD -->
<div id="omniverse-viewport">

  <div id="realm-past" class="dimension-screen">
    <div class="nav-arrow right" onclick="switchDimension('center')" title="Ke Dimensi Pusat (Anyezra)">&#10095;</div>
    
    <video id="gateway-bg-video" autoplay loop muted playsinline style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:none; z-index:0;"></video>
    <div class="overlay">
      <h1 id="display-title">Gateway</h1>
      <div class="floating-question">Pilih Website</div>
      <div class="radio-group">
        <label class="radio-label"><input type="radio" name="dest" value="https://universalezra.netlify.app">Universal Ezra</label>
        <label class="radio-label"><input type="radio" name="dest" value="https://uchihaezra.netlify.app">Uchiha Ezra</label>
        <label class="radio-label"><input type="radio" name="dest" value="https://eownerf.netlify.app">Eownerf Ezra</label>
        <label class="radio-label"><input type="radio" name="dest" value="https://v.anyezra.workers.dev?mode=agent">AI Agent</label>
        <label class="radio-label"><input type="radio" name="dest" value="https://v.anyezra.workers.dev">Lapor</label>
      </div>
      <div class="options">
        <button id="btn-yes" onclick="goUniversalSelected()">Go</button>
        <button id="btn-no" onclick="window.location.href='https://subulussalam.pages.dev'">Back</button>
      </div>
    </div>
  </div>
  <div id="realm-center" class="dimension-screen active-dimension">
    <div class="nav-arrow left" onclick="switchDimension('past')" title="Ke Dimensi Masa Lalu (Universalezra)">&#10094;</div>
    <div class="nav-arrow right" onclick="switchDimension('future')" title="Ke Dimensi Masa Depan (Zeralivecorp)">&#10095;</div>

    <video id="bg-video" autoplay loop muted playsinline><source src="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786176161422-bg.mp4" type="video/mp4"></video>
    
    <div id="login-modal">
      <h2 style="color:cyan; text-shadow:0 0 10px cyan;">OVERRIDE</h2>
      <div class="login-option" id="bio-section">
        <i class="fas fa-fingerprint" style="font-size:4rem; color:red; cursor:pointer;" onclick="triggerBio()"></i>
        <p style="font-size:0.7rem; color:white; margin-top:5px;">BIOMETRIC LOGIN / PASSWORD OVERRIDE</p>
      </div>
      <div class="login-option" style="display:flex; flex-direction:column; align-items:center; width:200px;">
        <div class="pass-wrapper" style="width:200px; margin-bottom:5px;">
          <input type="password" id="admin-pass" placeholder="PASSCODE" style="text-align:center; width:100%; background:#111; color:cyan; border:1px solid cyan; padding:5px;">
          <button type="button" class="toggle-eye-btn" onclick="togglePassView('admin-pass', this)"><i class="fas fa-eye" style="color:cyan;"></i></button>
        </div>
        <button onclick="attemptLogin()" class="action-btn" style="background:cyan; width:200px; color:black;">ACCESS</button>
      </div>
      <button onclick="document.getElementById('login-modal').style.display='none'" style="background:none; border:none; color:gray; margin-top:10px; cursor:pointer;">CANCEL</button>
    </div>

    <div class="grid-container">
      <div class="grid-item"><span class="sys-label">SYS.01</span><button class="ninja-btn" onclick="execIndodax(this)"><i class="fas fa-robot"></i></button></div>
      <div class="grid-item" id="sys-01"><span class="sys-label">SYS.02</span><small>MARKET</small></div>
      <div class="grid-item"><span class="sys-label">SYS.03</span><button class="ninja-btn" onclick="execSosmed(this)"><i class="fas fa-database"></i></button></div>
      <div class="grid-item" id="sys-04"><span class="sys-label">SYS.04</span><small>VISUAL</small></div>
      
      <div class="grid-item center-panel" id="center-panel" onclick="expandHub('default')">
        <div id="sys-info">Initializing</div>
        <div id="website-age" style="font-size:0.7rem; margin-top:5px;"></div>
        <div id="admin-toast">
          <div class="toast-content"><i class="fas fa-user-shield"></i> <span>V ALPHA ONLINE</span></div>
          <div class="toast-bar"></div>
        </div>
        <h2 id="main-title" style="margin:0; text-shadow: 0 0 10px red;">EZRA BANCIN</h2>
        <p id="main-status" style="font-size: 0.7rem; color: #aaa; margin-top:5px;">UCHIHA<br>@Ezra21</p>

        <div id="circle-content" onclick="event.stopPropagation()">
          <div id="view-default" class="view-section">
            <div style="text-align:center; margin-bottom:20px;"><h1 style="color:var(--chakra-color);">MEWUJUDKAN V ALPHA</h1><p style="font-size:0.8rem;">SECURE CONNECTION</p></div>
            
            <div class="section-title">💬 ENCRYPTED MESSAGES</div>
            <div id="chat-display" class="chat-box">Connecting...</div>
            <div class="input-group">
              <input type="text" id="chat-msg" placeholder="Ketik pesan...">
              <button onclick="sendChat()" class="action-btn">SEND</button>
            </div>

            <div class="section-title">📸 EZRA21 GALLERY</div>
            <div id="admin-upload-box" style="background:rgba(255,255,255,0.05); padding:10px; border:1px dashed #444; display:none;">
              <input type="text" id="vault-title" placeholder="Title" style="width:100%; margin-bottom:5px;">
              <textarea id="vault-desc" placeholder="Description" rows="2" style="width:100%; margin-bottom:5px;"></textarea>
              <input type="file" id="vault-file" style="width:100%;">
              <button onclick="uploadVault()" class="action-btn" id="btn-upload">UPLOAD</button>
              <small id="upload-status" style="color:cyan; display:block; margin-top:5px;"></small>
            </div>
            <div id="gallery-display" class="gallery-grid">Loading</div>

            <div id="view-ezra-memory" style="display:none; margin-top:30px;">
              <div class="section-title" style="color: cyan; border-color: cyan;">SECRET VAULT</div>
              <div style="background:rgba(0,255,255,0.03); padding:10px; border:1px dashed cyan; margin-bottom:15px;">
                <input type="text" id="memory-title" placeholder="Title" style="width:100%; margin-bottom:5px; border-color:cyan;">
                <textarea id="memory-desc" placeholder="Note" rows="3" style="width:100%; margin-bottom:5px; border-color:cyan;"></textarea>
                <input type="file" id="memory-file" style="width:100%; margin-bottom:5px;">
                <button onclick="uploadEzraMemory()" class="action-btn" id="btn-upload-memory" style="background:cyan; color:black; width:100%;">SAVE</button>
                <small id="memory-upload-status" style="color:cyan; display:block; margin-top:5px;"></small>
              </div>
              <div id="ezra-memory-display" class="gallery-grid"></div>
            </div>
          </div>

          <div id="view-trading" class="view-section">
            <div style="text-align:center; color:cyan;"><h2>TRADING BITCOIN</h2><p style="font-size:0.7rem;">MY INDODAX</p><div id="trading-loader"><i class="fas fa-circle-notch fa-spin"></i></div></div>
            <div id="trading-interface" style="display:none; margin-top:10px;">
              <div style="border:1px solid cyan; padding:10px; background:rgba(0,255,255,0.05);">
                <div style="display:flex; justify-content:space-between;"><span>IDR: <b id="wallet-idr">0</b></span><span>BTC: <b id="wallet-btc">0</b></span></div>
                <div style="margin-top:5px; font-size:1.2rem; font-weight:bold; text-align:center;">1 BTC = <span id="market-price" style="color:lime;">loading</span></div>
              </div>
              <div style="display:flex; gap:10px; margin-top:10px;">
                <button onclick="tradeAction('buy')" style="flex:1; background:green; color:white; border:none; padding:10px; cursor:pointer;">BUY</button>
                <button onclick="tradeAction('sell')" style="flex:1; background:red; color:white; border:none; padding:10px; cursor:pointer;">SELL</button>
              </div>
              <h4 class="section-title">TRADE LOGS</h4>
              <div id="trade-history" style="font-size:0.7rem; color:#aaa; max-height:150px; overflow-y:auto;"></div>
            </div>
          </div>

          <div id="view-social" class="view-section">
            <h2 class="section-title">SOCIALS</h2>
            <div class="social-vertical">
              <a href="https://wa.me/628381000265" class="social-btn" target="_blank"><i class="fab fa-whatsapp"></i> <span>WHATSAPP</span></a>
              <a href="https://www.instagram.com/thinklab.ide" class="social-btn" target="_blank"><i class="fab fa-instagram"></i> <span>INSTAGRAM</span></a>
              <a href="https://www.facebook.com/thinklab.ide" class="social-btn" target="_blank"><i class="fab fa-facebook"></i> <span>FACEBOOK</span></a>
              <a href="https://www.tiktok.com/@thinklab.ide" class="social-btn" target="_blank"><i class="fab fa-tiktok"></i> <span>TIKTOK</span></a>
              <a href="https://share.google/ElUOLZPxafGWca1Hz" class="social-btn" target="_blank"><i class="fab fa-google"></i> <span>PROFIL BUSINESS</span></a>
            </div>
          </div>

          <div id="view-visual" class="view-section"><h2 class="section-title">VISUAL</h2><div id="visual-container" style="width:100%; border:1px solid var(--chakra-color);"></div></div>
          
          <div id="view-visitor" class="view-section">
            <h2 class="section-title">MONITOR LOGS</h2>
            <div id="visitor-stats" style="margin-bottom:10px;"></div>
            <div id="visitor-list" style="font-size:0.7rem; text-align:left; background:#0a0a0a; padding:10px; border:1px solid #333; height:300px; overflow-y:auto;"></div>
          </div>
        </div>

        <button class="close-circle" onclick="closeHub(event)">EXIT</button>
      </div>

      <div class="grid-item" id="sys-06"><span class="sys-label">SYS.06</span><small>SOCIAL</small></div>
      <div class="grid-item"><span class="sys-label">SYS.07</span><button class="ninja-btn" onclick="execMusic(this)"><i class="fas fa-video"></i></button></div>
      <div class="grid-item" id="sys-08" onclick="execVisitor()" style="cursor:pointer;"><span class="sys-label">SYS.08</span><small>LOGS</small><div id="mini-log" style="font-size:0.5rem; opacity:0.5;"></div></div>
      <div class="grid-item"><span class="sys-label">SYS.09</span><div id="auth-trigger" onclick="document.getElementById('login-modal').style.display='flex'" style="cursor:pointer;"><i class="fas fa-fingerprint" style="font-size:2rem;"></i></div></div>
    </div>

    <div id="geo-toast"><i class="fas fa-globe-asia fa-spin" style="font-size: 1.2rem;"></i><div><b style="display:block; margin-bottom:2px;">DETECTED</b><span id="geo-text">Scanning Loc</span></div></div>
  </div>

  <div id="realm-future" class="dimension-screen">
    <div class="nav-arrow left" onclick="switchDimension('center')" title="Ke Dimensi Pusat (Anyezra)">&#10094;</div>
    
    <a id="floating-btn" href="https://wa.me/628381000265" class="floating-contact" target="_blank" title="Contact Me">💌</a>
    <button id="ai-btn" class="ai-floating-btn" title="AI Assistant">AI</button>

    <div id="terminal" style="max-width:1200px; margin:0 auto;">
      <div class="header">
        <div>WEBSITE NAME : ZERALIVECORP - BUSINESS</div>
        <div id="clock">TIME : </div>
        <div>ACTIVE USERS : <span id="online-counter" style="color: #ff0;"> - </span></div>        
        <div>STATUS : <span style="color: #0ff;">ONLINE</span></div>
        <hr>
        <div id="user-status">
          <span>GUEST MODE</span> | <a onclick="document.getElementById('zera-auth-modal').style.display='flex'">SIGN UP or SIGN IN
           </a>
        </div>
      </div>

      <div class="zera-nav-bar">
        <a class="zera-nav-item" onclick="openZeraSection('sec-dashboard')">DASHBOARD</a>
        <a class="zera-nav-item" onclick="openZeraSection('sec-location')">LOCATION</a>
        <a class="zera-nav-item" onclick="openZeraSection('sec-sns')">SOCMED VIEWER</a>
        <a class="zera-nav-item" id="zera-admin-nav" onclick="openZeraSection('sec-admin')" style="color: yellow; border-color: yellow; display: none;">ADMINISTRATOR</a>
        <a class="zera-nav-item auth-required" onclick="openZeraSection('sec-workspace')"><span style="color:red;font-size:10px;">PROFILE LOCKED</span></a>
      </div>

      <div id="sec-dashboard" class="zera-section active">
        <div class="module-title">ZERALIVE DASHBOARD</div>        
        <div class="dashboard-grid">
          <div class="news-panel" style="height: 550px; display: flex; flex-direction: column;">
            <p style="color: #0ff; border-bottom: 1px dashed #333; margin-bottom: 5px;">LIVE ( WINDY )</p>
            <div style="flex: 1; width: 100%;">
              <iframe width="100%" height="100%" src="https://embed.windy.com/embed2.html?lat=-0.789&lon=113.921&zoom=4&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <div class="social-panel">
              <p style="color: #ff0; border-bottom: 1px dashed #333; margin-bottom: 10px;">ZERALIVE NETWORK</p>
              <input type="text" id="search-user" placeholder="Cari user" style="width: 100%; margin-bottom: 10px;">
              <button onclick="searchUsers()" style="width: 100%; margin-bottom: 10px;">SEARCH</button>
              <div id="search-results" style="font-size: 12px; max-height: 150px; overflow-y: auto;">Cari rekan kerja.</div>
            </div>
            <div class="social-panel" style="flex: 1; display: flex; flex-direction: column;">
              <p style="color: #0f0; border-bottom: 1px dashed #333; margin-bottom: 10px;">ANNOUNCEMENT</p>
              <div id="internal-news-feed" style="font-size: 12px; overflow-y: auto; max-height: 220px; flex: 1;"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="sec-location" class="zera-section">
        <div class="module-title">ZERALIVE LIVE LOCATION</div>
        <div style="margin-bottom: 10px; border: 1px dashed #0f0; padding: 5px;">
          <div>LATITUDE: <span id="lat-data" style="color: #0ff;"> - </span></div>
          <div>LONGITUDE: <span id="lng-data" style="color: #0ff;"> - </span></div>
          <div>UPDATED: <span id="loc-time" style="color: #0ff;">-</span></div>
        </div>
        <iframe id="map-iframe" src="" width="100%" height="400" style="border:1px solid #0f0; margin-top: 10px;" loading="lazy"></iframe>
      </div>

      <div id="sec-sns" class="zera-section">
        <div class="module-title">SOCMED VIEWER</div>
        <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px; max-width: 500px;">
          <input type="text" id="sns-url" placeholder="Username target" style="width:100%;">
          <button onclick="fetchSNS()" style="width:100%;">DOWNLOAD ACCOUNT</button>
        </div>
        <div id="sns-result" style="margin-top:20px; display:none;"></div>
      </div>

      <div id="sec-workspace" class="zera-section">
        <div class="module-title">YOUR WORKSPACE</div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom:10px; border-bottom: 1px dashed #333; padding-bottom:10px;">
          <div style="display: flex; gap: 15px; align-items: center;">
            <div>
              <img id="user-avatar-display" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24' fill='lime'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/></svg>" alt="PP" class="avatar-lg" onclick="document.getElementById('avatar-upload').click()" title="Foto profile">
              <input type="file" id="avatar-upload" accept="image/*" style="display: none;" onchange="updateProfilePicture(this)">
            </div>
            <div>
              <p>Identity : <b id="user-name-display" style="color:#0ff;"></b></p>
              <p>Folder ID: <span id="user-folder-display"></span></p>
              <small style="color: #aaa;">Klik foto untuk mengedit</small>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 5px; align-items: flex-end;">
            <button onclick="zeraLogout()" style="color:red; border-color:red; width:auto; padding:5px 15px;">>LOGOUT<</button>
            <button onclick="openInbox()" style="color:#0ff; border-color:#0ff; width:auto; padding:5px 15px; display: flex; align-items: center; gap: 8px;">
              MESSAGE <span id="inbox-total-badge" class="badge-count" style="display: none;">0</span>
            </button>
          </div>
        </div>
        <div style="margin-bottom:15px; max-width: 600px;">
          <textarea id="ws-status" rows="2" style="width:100%; margin-bottom:5px;" placeholder="Tulis status baru..."></textarea>
          <button onclick="postStatus()">POST STATUS</button>
        </div>
        <div style="margin-bottom:15px; border:1px dashed #0f0; padding:10px; max-width: 600px;">
          <input type="text" id="ws-file-title" placeholder="Nama File / Media" style="margin-bottom:5px; width:100%;">
          <textarea id="ws-file-desc" rows="2" placeholder="Deskripsi" style="margin-bottom:5px; width:100%;"></textarea>
          <input type="file" id="ws-file" style="width:100%; margin-bottom:5px;">
          <button onclick="postFile()">CREATE POST</button>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
          <div class="module-title" style="margin-bottom: 0;">USER DATA</div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <label style="font-size: 11px; color: #0ff;">SORT:</label>
            <select id="ws-sort-select" onchange="changeWsSort(this.value)" style="font-size: 11px; padding: 3px 6px;">
              <option value="default">Default</option>
              <option value="modified">Latest Modified</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        <!-- 3 BILAH KATEGORI FILE UPLOAD WORKSPACE -->
        <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 15px; border-bottom: 1px dashed #333; padding-bottom: 10px;">
          <button type="button" class="ws-blade-btn" id="blade-all" onclick="switchWsBlade('all')" style="border:1px solid #0f0; background:#0f0; color:#000; padding:4px 10px; font-size:11px; font-weight:bold; cursor:pointer;">🔥 SEMUA (<span id="count-blade-all">0</span>)</button>
          <button type="button" class="ws-blade-btn" id="blade-photo" onclick="switchWsBlade('photo')" style="border:1px solid #0f0; background:#000; color:#0f0; padding:4px 10px; font-size:11px; font-weight:bold; cursor:pointer;">🖼️ FOTO (<span id="count-blade-photo">0</span>)</button>
          <button type="button" class="ws-blade-btn" id="blade-video" onclick="switchWsBlade('video')" style="border:1px solid #0f0; background:#000; color:#0f0; padding:4px 10px; font-size:11px; font-weight:bold; cursor:pointer;">🎬 VIDEO (<span id="count-blade-video">0</span>)</button>
          <button type="button" class="ws-blade-btn" id="blade-doc" onclick="switchWsBlade('doc')" style="border:1px solid #0f0; background:#000; color:#0f0; padding:4px 10px; font-size:11px; font-weight:bold; cursor:pointer;">📁 DOKUMEN (<span id="count-blade-doc">0</span>)</button>
          <button type="button" class="ws-blade-btn" id="blade-status" onclick="switchWsBlade('status')" style="border:1px solid #0f0; background:#000; color:#0f0; padding:4px 10px; font-size:11px; font-weight:bold; cursor:pointer;">💬 STATUS (<span id="count-blade-status">0</span>)</button>
        </div>

        <div id="ws-feed" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 15px;">Loading...</div>
      </div>

      <div id="sec-admin" class="zera-section">
        <div class="module-title" style="color: #00ffea; border-color: #00ffea;">🔥 SADA KATA & OMNIVERSE MASTER COMMAND CONSOLE 🔥</div>
        <p id="master-lock-notice" style="color:#ff3366; font-size:11px; margin-bottom:10px;">[DOUBLE-LOCK ACTIVE] Silakan login Google (anyezra@gmail.com) DAN aktifkan Genjutsu Mode di Dimensi 2.</p>
        
        <div id="master-console-body" style="display:none;">
          <!-- 6 Tab Switcher Master Console -->
          <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:15px; border-bottom:1px solid #00ffea; padding-bottom:8px;">
            <button type="button" onclick="switchMasterTab('mtab-gateway')" style="color:#00a8ff; border-color:#00a8ff;">1. Gateway D1</button>
            <button type="button" onclick="switchMasterTab('mtab-subulussalam')" style="color:#0f0; border-color:#0f0;">2. CMS Subulussalam</button>
            <button type="button" onclick="switchMasterTab('mtab-system')" style="color:gold; border-color:gold;">3. System & Secrets</button>
            <button type="button" onclick="switchMasterTab('mtab-users')" style="color:#ff00ea; border-color:#ff00ea;">4. User Spy/Killer</button>
            <button type="button" onclick="switchMasterTab('mtab-logs')" style="color:#ff3366; border-color:#ff3366;">5. Visitor Telemetry</button>
            <button type="button" onclick="switchMasterTab('mtab-ads')" style="color:#ff9900; border-color:#ff9900;">6. Ads Center Manager</button>
          </div>

          <!-- TAB 1: GATEWAY DIMENSI 1 -->
          <div id="mtab-gateway" class="master-subtab" style="display:block;">
            <h4 style="color:#00a8ff; margin-bottom:10px;">KONFIGURASI GATEWAY DIMENSI 1</h4>
            <div class="form-group"><label>Upload Media Background (Foto/Video)</label><input type="file" id="cfg-d1-file" accept="image/*,video/*"></div>
            <div class="form-group"><label>Atau URL Background</label><input type="text" id="cfg-d1-url" placeholder="https://..."></div>
            <div class="form-group"><label>Judul Gateway</label><input type="text" id="cfg-d1-title" placeholder="UNIVERSALEZRA"></div>
            <button type="button" onclick="saveGatewayD1Config()" class="action-btn" style="background:#00a8ff; color:#000; width:100%;">SIMPAN GATEWAY D1</button>
          </div>

          <!-- TAB 2: CMS KOTA SUBULUSSALAM & BRITA -->
          <div id="mtab-subulussalam" class="master-subtab" style="display:none;">
            <h4 style="color:#0f0; margin-bottom:10px;">PUBLIKASI KONTEN SUBULUSSALAM & BRITA</h4>
            <div class="form-group">
              <label>Pilih Jalur Publikasi:</label>
              <select id="cms-route-select" onchange="switchCmsForm(this.value)" style="width:100%; margin-bottom:10px;">
                <option value="cms-news">📰 Berita Baru (Brita News)</option>
                <option value="cms-announcement">📢 Pengumuman Resmi Pemko</option>
                <option value="cms-tourism">🌴 Destinasi Wisata</option>
                <option value="cms-facility">📍 Fasilitas Publik (Indomaret/SPBU/dll)</option>
              </select>
            </div>

            <!-- Form Berita -->
            <div id="cms-news" class="cms-form-block">
              <input type="text" id="cms-news-title" placeholder="Judul Berita" style="width:100%; margin-bottom:6px;">
              <select id="cms-news-cat" style="width:100%; margin-bottom:6px;"><option value="Teknologi">Teknologi</option><option value="Bisnis">Bisnis</option><option value="Nasional">Nasional</option></select>
              <textarea id="cms-news-excerpt" placeholder="Ringkasan (Excerpt)" rows="2" style="width:100%; margin-bottom:6px;"></textarea>
              <textarea id="cms-news-content" placeholder="Isi Berita Lengkap" rows="4" style="width:100%; margin-bottom:6px;"></textarea>
              <input type="file" id="cms-news-file" style="width:100%; margin-bottom:6px;">
              <label style="display:flex; align-items:center; gap:6px; font-size:11px; margin-bottom:8px;"><input type="checkbox" id="cms-news-hero"> Jadikan Berita Utama (Hero Banner)</label>
              <button type="button" onclick="publishSubulussalamContent('news')" class="action-btn" style="width:100%;">TERBITKAN BERITA</button>
            </div>

            <!-- Form Pengumuman -->
            <div id="cms-announcement" class="cms-form-block" style="display:none;">
              <input type="text" id="cms-anc-title" placeholder="Judul Pengumuman" style="width:100%; margin-bottom:6px;">
              <input type="text" id="cms-anc-issuer" placeholder="Instansi Penerbit (misal: Diskominfo)" style="width:100%; margin-bottom:6px;">
              <textarea id="cms-anc-summary" placeholder="Ringkasan Singkat" rows="2" style="width:100%; margin-bottom:6px;"></textarea>
              <textarea id="cms-anc-content" placeholder="Rincian Lengkap" rows="4" style="width:100%; margin-bottom:6px;"></textarea>
              <button type="button" onclick="publishSubulussalamContent('announcement')" class="action-btn" style="width:100%;">TERBITKAN PENGUMUMAN</button>
            </div>

            <!-- Form Wisata -->
            <div id="cms-tourism" class="cms-form-block" style="display:none;">
              <input type="text" id="cms-tour-name" placeholder="Nama Tempat Wisata" style="width:100%; margin-bottom:6px;">
              <input type="text" id="cms-tour-loc" placeholder="Lokasi / Kecamatan" style="width:100%; margin-bottom:6px;">
              <textarea id="cms-tour-desc" placeholder="Deskripsi Daya Tarik Wisata" rows="3" style="width:100%; margin-bottom:6px;"></textarea>
              <input type="file" id="cms-tour-file" style="width:100%; margin-bottom:6px;">
              <button type="button" onclick="publishSubulussalamContent('tourism')" class="action-btn" style="width:100%;">SIMPAN WISATA</button>
            </div>

            <!-- Form Fasilitas -->
            <div id="cms-facility" class="cms-form-block" style="display:none;">
              <input type="text" id="cms-fac-name" placeholder="Nama Fasilitas (misal: SPBU Simpang Kiri)" style="width:100%; margin-bottom:6px;">
              <select id="cms-fac-cat" style="width:100%; margin-bottom:6px;"><option value="Indomaret">Indomaret</option><option value="SPBU">SPBU</option><option value="Kantor Pos">Kantor Pos</option><option value="Hotel">Hotel</option><option value="Ibadah">Ibadah</option></select>
              <input type="text" id="cms-fac-addr" placeholder="Alamat Lengkap" style="width:100%; margin-bottom:6px;">
              <input type="text" id="cms-fac-hours" placeholder="Jam Layanan (misal: Buka 24 Jam)" style="width:100%; margin-bottom:6px;">
              <button type="button" onclick="publishSubulussalamContent('facility')" class="action-btn" style="width:100%;">SIMPAN FASILITAS</button>
            </div>

            <!-- Bilah Daftar Konten Terbitan CMS (Edit & Delete) -->
            <div style="margin-top:16px; border-top:1px dashed #00ffea; padding-top:10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <h5 style="color:#00ffea; font-size:11px; font-weight:bold; margin:0;">📋 KELOLA KONTEN TERBITAN (EDIT & HAPUS)</h5>
                <button type="button" onclick="loadCmsContentList()" style="padding:2px 8px; font-size:10px; background:#00a8ff; color:#000; border:none; border-radius:3px; font-weight:bold; cursor:pointer;">REFRESH</button>
              </div>
              <div id="cms-items-list" style="max-height:220px; overflow-y:auto; font-size:10px; border:1px solid #333; padding:6px; background:#0a0a0a;">Memuat data terbitan...</div>
            </div>
          </div>

          <!-- TAB 3: SYSTEM API, SECRETS & GLOBAL BACKGROUND -->
          <div id="mtab-system" class="master-subtab" style="display:none;">
            <h4 style="color:gold; margin-bottom:10px;">PENGATURAN API, SECRETS & WALLPAPER GLOBAL</h4>
            <div class="form-group" style="border:1px dashed gold; padding:10px; border-radius:8px; margin-bottom:12px; background:rgba(255,215,0,0.03);">
              <label style="color:#00ffea; font-weight:bold; margin-bottom:6px; display:block;">Wallpaper Website Subulussalam City:</label>
              <div style="display:flex; gap:8px; margin-bottom:8px;">
                <select id="cfg-sub-bg-mode" onchange="toggleBgModeForm(this.value)" style="flex:1; padding:6px; background:#000; color:#fff; border:1px solid gold; border-radius:4px;">
                  <option value="default">🌟 Default Pure CSS (Ringan, Mulus & 0 Lag)</option>
                  <option value="upload">📁 Upload File Foto / Video (GitHub CDN)</option>
                  <option value="url">🔗 Input Direct URL Media</option>
                </select>
              </div>
              <div id="cfg-bg-upload-box" style="display:none; margin-bottom:8px;">
                <input type="file" id="cfg-sub-bg-file" accept="image/*,video/*" style="font-size:11px;">
              </div>
              <div id="cfg-bg-url-box" style="display:none; margin-bottom:8px;">
                <input type="text" id="cfg-sub-bg-url" placeholder="https://..." style="width:100%; font-size:11px;">
              </div>
            </div>
            <div class="form-group"><label>GitHub Personal Access Token (PAT)</label><input type="password" id="cfg-gh-token" placeholder="Tersimpan aman di Cloudflare Secrets"></div>
            <div class="form-group"><label>GitHub Owner / Repository</label><div style="display:flex; gap:6px;"><input type="text" id="cfg-gh-owner" placeholder="Owner" style="flex:1;"><input type="text" id="cfg-gh-repo" placeholder="Repo" style="flex:1;"></div></div>
            <div class="form-group"><label>Groq / xAI API Key</label><input type="password" id="cfg-groq-key" placeholder="gsk_..."></div>
            <div class="form-group"><label>RapidAPI Key & Host</label><div style="display:flex; gap:6px;"><input type="password" id="cfg-rapid-key" placeholder="Key" style="flex:1;"><input type="text" id="cfg-rapid-host" placeholder="Host Scraper" style="flex:1;"></div></div>
            <button type="button" onclick="saveMasterSystemConfig()" class="action-btn" style="background:gold; color:#000; width:100%;">SIMPAN PENGATURAN MASTER</button>
          </div>

          <!-- TAB 4: USER SPY & ACCOUNT KILLER -->
          <div id="mtab-users" class="master-subtab" style="display:none;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <h4 style="color:#ff00ea;">MODERASI PENGGUNA TERDAFTAR</h4>
              <button type="button" onclick="fetchAdminUsers()" style="padding:4px 10px;">REFRESH</button>
            </div>
            <div id="admin-user-list">Memuat daftar user...</div>
            <hr>
            <div id="admin-spy-area" style="border: 1px dashed #ff00ea; padding: 10px; font-size: 11px; min-height: 80px; margin-top:10px;">Pilih user untuk mengintip data.</div>
          </div>

          <!-- TAB 5: VISITOR TELEMETRY RADAR -->
          <div id="mtab-logs" class="master-subtab" style="display:none;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:6px;">
              <h4 style="color:#ff3366; margin:0;">100 LOG PENGUNJUNG TERAKHIR</h4>
              <div style="display:flex; gap:6px;">
                <button type="button" onclick="clearVisitorLogs()" style="padding:4px 10px; background:red; color:#fff; border:none; font-weight:bold; cursor:pointer; border-radius:4px; font-size:10px;">BERSIHKAN SEMUA LOG</button>
                <button type="button" onclick="loadDetailedLogs()" style="padding:4px 10px; font-size:10px;">REFRESH LOGS</button>
              </div>
            </div>
            <div id="master-visitor-stats" style="color:cyan; font-weight:bold; margin-bottom:8px;">TOTAL KUNJUNGAN: 0</div>
            <div id="master-visitor-list" style="font-size:10px; text-align:left; background:#0a0a0a; padding:10px; border:1px solid #333; height:280px; overflow-y:auto;"></div>
          </div>

          <!-- TAB 6: ADS & AFFILIATE MODERATION CENTER -->
          <div id="mtab-ads" class="master-subtab" style="display:none;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
              <h4 style="color:#ff9900;">MODERASI IKLAN AFFILIATE & VERIFIKASI DANA</h4>
              <button type="button" onclick="loadAdminAds()" style="padding:4px 10px; background:#ff9900; color:#000; font-weight:bold; border:none; border-radius:4px; cursor:pointer;">REFRESH ADS</button>
            </div>

            <!-- Kartu Metrik Ringkas -->
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin-bottom:12px; font-size:11px;">
              <div style="background:rgba(255,153,0,0.1); border:1px solid #ff9900; padding:8px; border-radius:6px; text-align:center;">
                <span style="color:#aaa; display:block;">Total Iklan:</span>
                <b id="ad-stat-total" style="color:#ff9900; font-size:14px;">0</b>
              </div>
              <div style="background:rgba(255,0,51,0.15); border:1px solid #ff3366; padding:8px; border-radius:6px; text-align:center;">
                <span style="color:#aaa; display:block;">Menunggu DANA:</span>
                <b id="ad-stat-pending" style="color:#ff3366; font-size:14px;">0</b>
              </div>
              <div style="background:rgba(0,255,0,0.1); border:1px solid lime; padding:8px; border-radius:6px; text-align:center;">
                <span style="color:#aaa; display:block;">Aktif Tayang:</span>
                <b id="ad-stat-active" style="color:lime; font-size:14px;">0</b>
              </div>
            </div>

            <!-- Filter Status Tab -->
            <div style="display:flex; gap:6px; margin-bottom:12px; flex-wrap:wrap;">
              <button type="button" onclick="filterAdminAds('all')" style="font-size:10px; padding:3px 8px; border:1px solid #aaa;">Semua</button>
              <button type="button" onclick="filterAdminAds('pending_review')" style="font-size:10px; padding:3px 8px; border:1px solid #ff3366; color:#ff3366;">Menunggu Review (DANA)</button>
              <button type="button" onclick="filterAdminAds('active')" style="font-size:10px; padding:3px 8px; border:1px solid lime; color:lime;">Tayang Aktif</button>
              <button type="button" onclick="filterAdminAds('rejected')" style="font-size:10px; padding:3px 8px; border:1px solid #888; color:#888;">Ditolak</button>
            </div>

            <div id="admin-ads-list" style="font-size:11px; max-height:360px; overflow-y:auto;">Memuat daftar iklan...</div>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal Bukti Transfer DANA -->
      <div id="admin-ad-proof-modal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.92); z-index:99999; justify-content:center; align-items:center; flex-direction:column; padding:15px;">
        <div style="max-width:90vw; max-height:85vh; text-align:center; position:relative;">
          <img id="admin-ad-proof-img" src="" style="max-width:100%; max-height:75vh; border:2px solid #ff9900; border-radius:8px; object-fit:contain;">
          <div style="margin-top:10px; display:flex; justify-content:center; gap:10px;">
            <a id="admin-ad-proof-open-tab" href="#" target="_blank" style="background:#ff9900; color:#000; padding:6px 15px; border-radius:4px; font-size:11px; font-weight:bold; text-decoration:none;">Buka Gambar Asli</a>
            <button type="button" onclick="closeAdProofModal()" style="background:#333; color:#fff; border:none; padding:6px 15px; border-radius:4px; font-size:11px; font-weight:bold; cursor:pointer;">TUTUP</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals Zeralive -->
    <div id="chat-modal">
      <div class="modal-header"><span id="chat-target-name">Chat</span><button onclick="closeChat()" style="width:auto; padding:2px 5px; background:red; color:#fff; border:none; cursor:pointer;">X</button></div>
      <div id="chat-history" class="modal-history"></div>
      <div class="modal-input-area"><input type="text" id="chat-input" placeholder="Ketik pesan..." style="border:none; flex:1;"><button onclick="sendDM()" style="width:auto; padding:5px 10px; cursor:pointer;">Send</button></div>
    </div>

    <div id="ai-modal">
      <div class="modal-header" style="background: #0ff; color: #000;"><span>ZERALIVE AI ASSISTANT</span><button onclick="closeAiModal()" style="width:auto; padding:2px 5px; background:red; color:#fff; border:none; cursor:pointer;">X</button></div>
      <div id="ai-history" class="modal-history"></div>
      <div class="modal-input-area"><input type="text" id="ai-input" placeholder="Ask..." style="border:none; flex:1;" onkeypress="if(event.key==='Enter') sendAiMessage()"><button onclick="sendAiMessage()" style="width:auto; padding:5px 10px; cursor:pointer; color:#0ff;">Send</button></div>
    </div>

    <div id="inbox-modal">
      <div class="modal-header" style="background: yellow; color: #000;"><span>PESAN MASUK</span><button onclick="closeInbox()" style="width:auto; padding:2px 5px; background:red; color:#fff; border:none; cursor:pointer;">X</button></div>
      <div id="inbox-list" class="modal-history"></div>
    </div>

    <div id="zera-auth-modal">
      <div class="auth-box">
        <h3 style="color:#0ff; margin-bottom:15px;">AUTHORIZATION</h3>
        <input type="text" id="auth-email" class="auth-input" placeholder="Username / Email">
        <div class="pass-wrapper" style="margin-bottom:10px;">
          <input type="password" id="auth-pass" class="auth-input" placeholder="Password" style="margin-bottom:0;">
          <button type="button" class="toggle-eye-btn" onclick="togglePassView('auth-pass', this)"><i class="fas fa-eye" style="color:#0f0;"></i></button>
        </div>
        <button class="auth-btn" onclick="handleLocalAuth('login')">SIGN IN</button>
        <button class="auth-btn" style="background:#000; color:#0f0;" onclick="handleLocalAuth('signup')">SIGN UP</button>
        <hr>
        <p style="font-size:11px; margin-bottom:10px; color:#aaa;">OR SIGN IN WITH GOOGLE</p>
        <div id="g_id_onload" data-client_id="453054518491-vmfuc4la05309vbbcntc0pulti9ul3ed.apps.googleusercontent.com" data-context="signin" data-ux_mode="popup" data-callback="handleCredentialResponse" data-auto_prompt="false"></div>
        <div class="g_id_signin" data-type="standard" data-theme="filled_black" data-text="signin_with" data-shape="rectangular" data-logo_alignment="left"></div>
        <button style="margin-top:15px; border:none; background:none; color:gray; cursor:pointer;" onclick="document.getElementById('zera-auth-modal').style.display='none'">CANCEL</button>
      </div>
    </div>
  </div>

</div>

<!-- OVERLAY SIMULASI PERETASAN / HACKER OVERRIDE KETIKA SALAH PASSWORD -->
<div id="hacker-breach-overlay">
  <div class="hacker-glitch-text">🚨 SECURITY BREACH DETECTED 🚨</div>
  <p style="color:#fff; font-size:12px; margin-top:10px; letter-spacing:2px;">[WARNING: HEARTBEAT FAILING - OVERRIDING SYSTEM KERNEL]</p>
  <div id="hacker-terminal-logs" style="font-size:10px; color:#00ffea; margin-top:15px; text-align:left; background:#000; border:1px dashed red; padding:10px; width:90%; max-width:400px; height:120px; overflow:hidden;"></div>
</div>

<!-- OVERLAY PERINGATAN DIMENSI -->
<div id="warning-overlay"> EZRA BANCIN</div>
<div id="floating-text-past" class="floating-rainbow">MASA LALU</div>
<div id="floating-text-future" class="floating-rainbow">MASA DEPAN</div>

<script>
const bridgeSecret = 'UchihaGodMode';
function togglePassView(inputId, btn) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  const isPass = inp.type === 'password';
  inp.type = isPass ? 'text' : 'password';
  const icon = btn.querySelector('i');
  if (icon) {
    icon.className = isPass ? 'fas fa-eye-slash' : 'fas fa-eye';
  }
}
async function uploadToGithub(file) {
  if (!file) return null;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async function(e) {
      try {
        const res = await fetch('/api/upload/github', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            base64Data: e.target.result,
            fileName: file.name,
            fileType: file.type
          })
        });
        const data = await res.json();
        if (res.ok && data.url) {
          resolve(data.url);
        } else {
          alert("UPLOAD GAGAL: " + (data.error || "Gagal mengunggah file."));
          reject(new Error(data.error || "Upload failed"));
        }
      } catch(err) {
        alert("UPLOAD ERROR: Koneksi ke server bermasalah.");
        reject(err);
      }
    };
    reader.readAsDataURL(file);
  });
}

// Helper: Suara Sirene & Heartbeat Audio Sintesis untuk Efek Hacker
function playBreachAlarmSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    // 1. Alarm Sound
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(300, ctx.currentTime + 0.3);
    osc.frequency.linearRampToValueAtTime(900, ctx.currentTime + 0.6);
    osc.frequency.linearRampToValueAtTime(200, ctx.currentTime + 1.2);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2.0);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + 2.0);

    // 2. Heartbeat Bass Pulse
    const beat = ctx.createOscillator();
    const beatGain = ctx.createGain();
    beat.type = 'sine';
    beat.frequency.setValueAtTime(60, ctx.currentTime);
    beat.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.5);
    beatGain.gain.setValueAtTime(0.8, ctx.currentTime);
    beatGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.8);
    beat.connect(beatGain); beatGain.connect(ctx.destination);
    beat.start(); beat.stop(ctx.currentTime + 1.8);
  } catch(e) {}
}

function triggerHackerMeltdown() {
  document.getElementById("login-modal").style.display = "none";
  const overlay = document.getElementById("hacker-breach-overlay");
  const termLogs = document.getElementById("hacker-terminal-logs");
  if (overlay) overlay.style.display = "flex";
  
  playBreachAlarmSound();

  // Log simulasi terminal bergerak cepat
  let step = 0;
  const messages = [
    "[*] INTRUSION DETECTED ON PORT 8080...",
    "[!] INJECTING MALICIOUS PAYLOAD: buffer_overflow.bin",
    "[!] BYPASSING KERNEL INTEGRITY CHECK...",
    "[!] CORRUPTING LOCAL REGISTRIES & MEMORY...",
    "[!] SIMULATING RANDOM INJECTION CLICKS...",
    "[FATAL] KERNEL PANIC: SYSTEM MELTING DOWN..."
  ];

  const logInterval = setInterval(() => {
    if (termLogs && step < messages.length) {
      termLogs.innerHTML += "<div>" + messages[step] + "</div>";
      step++;
    }
  }, 300);

  // Efek getar dan simulasi tombol tertekan otomatis
  const jitterInterval = setInterval(() => {
    document.body.style.transform = "translate(" + (Math.random()*10 - 5) + "px, " + (Math.random()*10 - 5) + "px)";
  }, 50);

  // Setelah 2 detik, website benar-benar MELEBUR & MATI PERMANEN sampai di-refresh
  setTimeout(() => {
    clearInterval(logInterval);
    clearInterval(jitterInterval);
    document.body.classList.add("system-meltdown-active");
    if (overlay) {
      overlay.innerHTML = "<h1 style='color:red; font-size:2.5rem; text-shadow:0 0 20px red; margin-bottom:15px;'>[FATAL EXCEPTION: SYSTEM DESTROYED]</h1>"
        + "<p style='color:#00ffea; font-size:14px; margin-bottom:20px;'>SISTEM TELAH MELEBUR DAN DIHANCURKAN UNTUK MENCEGAH PEMBOBOLAN.</p>"
        + "<p style='color:#fff; font-size:12px; background:#330000; padding:10px; border:1px solid red;'>Silakan REFRESH browser Anda untuk memuat ulang sistem.</p>";
    }
  }, 2000);
}

// ============================================================================
// 1. ENGINE PERPINDAHAN DIMENSI TANPA RELOAD / ALIH DIREKTORI
// ============================================================================
function playZingSound() {
  try {
    const e = new (window.AudioContext || window.webkitAudioContext), t = e.createOscillator(), n = e.createGain();
    t.frequency.setValueAtTime(150, e.currentTime);
    t.frequency.exponentialRampToValueAtTime(1500, e.currentTime + 0.1);
    n.gain.exponentialRampToValueAtTime(0.01, e.currentTime + 0.3);
    t.connect(n); n.connect(e.destination);
    t.start(); t.stop(e.currentTime + 0.3);
  } catch(e) {}
}

function switchDimension(realm) {
  const warning = document.getElementById('warning-overlay');
  const txtPast = document.getElementById('floating-text-past');
  const txtFuture = document.getElementById('floating-text-future');

  const screens = {
    past: document.getElementById('realm-past'),
    center: document.getElementById('realm-center'),
    future: document.getElementById('realm-future')
  };

  playZingSound();
  if (warning) {
    warning.style.display = 'block';
    setTimeout(() => warning.style.display = 'none', 500);
  }

  // Kunci dan tampilkan HANYA dimensi yang dituju
  Object.keys(screens).forEach(key => {
    if (key === realm) {
      screens[key].classList.add('active-dimension');
    } else {
      screens[key].classList.remove('active-dimension');
    }
  });

  if (realm === 'past') {
    if (txtPast) { txtPast.style.display = 'block'; setTimeout(() => txtPast.style.display = 'none', 1000); }
    loadGatewayConfig();
  } else if (realm === 'future') {
    if (txtFuture) { txtFuture.style.display = 'block'; setTimeout(() => txtFuture.style.display = 'none', 1000); }
    loadInternalNews();
    loadWorkspaceData();
  }
}

// ============================================================================
// 2. SCRIPTS DIMENSI 1: UNIVERSALEZRA GATEWAY
// ============================================================================
function toggleEditor() {
  const panel = document.getElementById('editor-panel');
  if (panel) panel.classList.toggle('open');
}
function goUniversalSelected() {
  const sel = document.querySelector('input[name="dest"]:checked');
  if (sel) window.open(sel.value, '_self');
  else switchDimension('center');
}
async function loadGatewayConfig() {
  try {
    const res = await fetch('/api/site-config');
    const data = await res.json();
    if (res.ok && data) {
      const pastRealm = document.getElementById('realm-past');
      const bgVid = document.getElementById('gateway-bg-video');
      const dispTitle = document.getElementById('display-title');
      
      if (dispTitle && data.title) dispTitle.innerText = data.title;
      
      if (data.bgUrl) {
        const isVideo = data.bgType === 'video' || data.bgUrl.startsWith('data:video') || /\.(mp4|webm|mov|ogg)$/i.test(data.bgUrl);
        if (isVideo) {
          if (bgVid) {
            bgVid.src = data.bgUrl;
            bgVid.style.display = 'block';
          }
          if (pastRealm) pastRealm.style.backgroundImage = 'none';
        } else {
          if (bgVid) bgVid.style.display = 'none';
          if (pastRealm) {
            pastRealm.style.backgroundImage = "url('" + data.bgUrl + "')";
            pastRealm.style.backgroundSize = "cover";
            pastRealm.style.backgroundPosition = "center";
          }
        }
      }
      
      // Sinkronkan ke input form di Tab 1 Master Console jika ada
      const cfgTitle = document.getElementById('cfg-d1-title');
      const cfgUrl = document.getElementById('cfg-d1-url');
      if (cfgTitle && data.title) cfgTitle.value = data.title;
      if (cfgUrl && data.bgUrl) cfgUrl.value = data.bgUrl;
    }
  } catch(err) {
    console.warn('[Gateway Config Error]', err);
  }
}

async function saveConfiguration() {
  const fileIn = document.getElementById('input-bg-file');
  let bgUrl = document.getElementById('input-bg').value;
  const title = document.getElementById('input-title').value;
  const pass = document.getElementById('input-pass').value;
  if (!pass) return alert("Masukkan Master Password!");

  async function executeSave(urlPayload, mediaType) {
    if (!isAdmin) return alert("Akses Ditolak: Hanya Admin Uchiha yang dapat mengubah konfigurasi!");
    try {
      const res = await fetch('/api/site-config', {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": bridgeSecret
        },
        body: JSON.stringify({ bgUrl: urlPayload, bgType: mediaType, title, pass })
      });
      const data = await res.json();
      if (res.ok) {
        alert("SUCCESS: Konfigurasi berhasil disimpan.");
        document.getElementById('input-pass').value = '';
        fileIn.value = '';
        toggleEditor();
        loadGatewayConfig();
      } else alert(data.error || "Gagal simpan.");
    } catch(e) { alert("Server error."); }
  }

  if (fileIn.files && fileIn.files[0]) {
    const file = fileIn.files[0];
    const ghUrl = await uploadToGithub(file);
    const mediaType = file.type.startsWith('video/') ? 'video' : 'image';
    executeSave(ghUrl || bgUrl, mediaType);
  } else {
    executeSave(bgUrl, bgUrl.match(/\.(mp4|webm|mov)$/i) ? 'video' : 'image');
  }
}

// ============================================================================
// 3. SCRIPTS DIMENSI 2: ANYEZRA UCHIHA PORTAL
// ============================================================================
let isAdmin = false, marketInterval;

let genjutsuCooldownUntil = 0;

function startButtonCooldown(btn, defaultText, seconds) {
  if (!btn) return;
  btn.disabled = true;
  btn.style.opacity = '0.5';
  btn.style.cursor = 'not-allowed';
  let remain = seconds;
  btn.innerText = 'WAIT (' + remain + 's)...';

  const timer = setInterval(function() {
    remain -= 1;
    if (remain > 0) {
      btn.innerText = 'WAIT (' + remain + 's)...';
    } else {
      clearInterval(timer);
      btn.disabled = false;
      btn.style.opacity = '1';
      btn.style.cursor = 'pointer';
      btn.innerText = defaultText;
    }
  }, 1000);
}

async function attemptLogin() {
  const now = Date.now();
  if (now < genjutsuCooldownUntil) {
    const s = Math.ceil((genjutsuCooldownUntil - now) / 1000);
    return;
  }

  showSharingan();
  const passInp = document.getElementById('admin-pass');
  const pass = passInp ? passInp.value : '';
  const btn = document.querySelector('#login-modal button.action-btn');

  if (!pass) return alert('Passcode wajib diisi!');

  try {
    const res = await fetch('/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'VERIFY_PASS', pass: pass })
    });
    const data = await res.json();

    if (data.success) {
      if (data.token) {
        localStorage.setItem('anyezra_admin_jwt', data.token);
      }
      setAdminSession();
      if (passInp) passInp.value = '';
    } else {
      const wait = data.cooldown || 5;
      genjutsuCooldownUntil = Date.now() + (wait * 1000);
      startButtonCooldown(btn, 'ACCESS', wait);
      if (typeof triggerHackerMeltdown === 'function') {
        triggerHackerMeltdown();
      } else {
        alert('PASSCODE SALAH! Coba lagi dalam ' + wait + ' detik.');
      }
    }
  } catch(e) {
    genjutsuCooldownUntil = Date.now() + 5000;
    startButtonCooldown(btn, 'ACCESS', 5);
    alert('Koneksi gagal');
  }
}

async function triggerBio() {
  const now = Date.now();
  if (now < genjutsuCooldownUntil) {
    const s = Math.ceil((genjutsuCooldownUntil - now) / 1000);
    alert('BIOMETRIK LOCKED, Coba lagi dalam' + s + ' detik.');
    return;
  }

  try {
    let t = prompt('BIOMATCHED\\nMasukkan Nama Anda:');
    if (!t) return;
    let n = prompt('Halo, ' + t + '.\\nSECURITY CHECK:\\nSebutkan passcode/kunci rahasia pemilik website ini?');
    if (!n) return;

    const res = await fetch('/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'VERIFY_BIO', name: t, answer: n })
    });
    const a = await res.json();

    if (a.success) {
      alert('WELCOME ' + t + '. ACCESS GRANTED.');
      setAdminSession();
    } else {
      const wait = a.cooldown || 5;
      genjutsuCooldownUntil = Date.now() + (wait * 1000);
      alert('IDENTITY MISMATCH, Coba lagi dalam ' + wait + ' detik.');
    }
  } catch(e) {
    alert('Gagal memverifikasi data biometrik.');
  }
}

function getAdminAuth() {
  const token = localStorage.getItem('anyezra_admin_jwt');
  return token ? ('Bearer ' + token) : 'UchihaGodMode';
}
function setAdminSession() {
  document.cookie = "uchihaccess=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  activateAdmin();
  document.getElementById("login-modal").style.display = "none";
}
function checkSession() {
  isAdmin = false;
  localStorage.removeItem('anyezra_admin_jwt');
  document.body.classList.remove("is-admin");
  const editBtn = document.getElementById("edit-btn");
  if (editBtn) editBtn.style.display = "none";
  const zeraAdminNav = document.getElementById("zera-admin-nav");
  if (zeraAdminNav) zeraAdminNav.style.display = "none";
}

function zeraLogout() {
  localStorage.removeItem('business_token');
  localStorage.removeItem('business_user_data');
  localStorage.removeItem('anyezra_admin_jwt');
  sysToken = null;
  location.reload();
}
function activateAdmin() {
  isAdmin = true;
  document.body.classList.add("is-admin");
  playZingSound();

  // Buka Panel Rahasia di Dimensi 2
  const upBox = document.getElementById("admin-upload-box");
  if (upBox) upBox.style.display = "block";
  const ezMem = document.getElementById("view-ezra-memory");
  if (ezMem) ezMem.style.display = "block";
  loadEzraMemory();
  
  const toast = document.getElementById("admin-toast");
  if (toast) { toast.style.display = "block"; setTimeout(() => toast.style.display = "none", 5000); }
  const t = document.getElementById("main-title");
  if (t) { t.innerText = "GENJUTSU MODE"; t.style.color = "cyan"; }

  // Evaluasi Keamanan Double-Lock
  checkDoubleLockAccess();
}

function checkDoubleLockAccess() {
  const isGoogleSuper = sysEmail && sysEmail.toLowerCase() === "anyezra@gmail.com";
  const isUnlocked = isGoogleSuper && isAdmin;
  
  const zeraAdminNav = document.getElementById("zera-admin-nav");
  const lockNotice = document.getElementById("master-lock-notice");
  const consoleBody = document.getElementById("master-console-body");

  if (zeraAdminNav) zeraAdminNav.style.display = isUnlocked ? "inline-block" : "none";
  if (lockNotice) lockNotice.style.display = isUnlocked ? "none" : "block";
  if (consoleBody) consoleBody.style.display = isUnlocked ? "block" : "none";

  if (isUnlocked) {
    loadMasterSystemConfig();
    fetchAdminUsers();
    loadDetailedLogs();
    loadAdminAds();
  }
}

function switchMasterTab(tabId) {
  document.querySelectorAll(".master-subtab").forEach(el => el.style.display = "none");
  const target = document.getElementById(tabId);
  if (target) target.style.display = "block";
  if (tabId === "mtab-subulussalam") loadCmsContentList();
  if (tabId === "mtab-logs") loadDetailedLogs();
}

function switchCmsForm(formId) {
  document.querySelectorAll(".cms-form-block").forEach(el => el.style.display = "none");
  const target = document.getElementById(formId);
  if (target) target.style.display = "block";
  loadCmsContentList();
}

function getCmsTypeFromForm() {
  const sel = document.getElementById("cms-route-select");
  const val = sel ? sel.value : "cms-news";
  if (val === "cms-announcement") return "announcement";
  if (val === "cms-tourism") return "tourism";
  if (val === "cms-facility") return "facility";
  return "news";
}

async function loadCmsContentList() {
  const type = getCmsTypeFromForm();
  const listEl = document.getElementById("cms-items-list");
  if (!listEl) return;
  listEl.innerHTML = '<span style="color:#aaa;">Mengambil data ' + type + '...</span>';

  let endpoint = (type === "news") ? "/api/news" : ("/api/subulussalam/" + (type === "announcement" ? "announcements" : (type === "tourism" ? "tourism" : "facilities")));

  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    const items = (data && Array.isArray(data.data)) ? data.data : (Array.isArray(data) ? data : []);

    if (items.length === 0) {
      listEl.innerHTML = '<span style="color:#666;">Belum ada konten terbitan untuk ' + type + '.</span>';
      return;
    }

    let html = '';
    items.forEach(item => {
      const id = item.id || '';
      const title = item.title || item.name || 'Tanpa Judul';
      const sub = item.category || item.issuer || item.location || item.address || '-';

      html += '<div style="border-bottom:1px solid #222; padding:5px 0; display:flex; justify-content:space-between; align-items:center; gap:6px;">' +
        '<div style="overflow:hidden; flex:1;">' +
          '<b style="color:gold;">' + escapeHtml(title) + '</b> <small style="color:#888;">(' + escapeHtml(sub) + ')</small>' +
        '</div>' +
        '<div style="display:flex; gap:4px; shrink-0;">' +
          '<button type="button" onclick="editCmsItem(&quot;' + type + '&quot;, &quot;' + id + '&quot;)" style="background:#00a8ff; color:#000; border:none; padding:2px 6px; font-size:9px; font-weight:bold; cursor:pointer; border-radius:3px;">EDIT</button>' +
          '<button type="button" onclick="deleteCmsItem(&quot;' + type + '&quot;, &quot;' + id + '&quot;)" style="background:red; color:#fff; border:none; padding:2px 6px; font-size:9px; font-weight:bold; cursor:pointer; border-radius:3px;">KILL</button>' +
        '</div>' +
      '</div>';
    });

    listEl.innerHTML = html;
  } catch(e) {
    listEl.innerHTML = '<span style="color:red;">Gagal memuat daftar ' + type + '.</span>';
  }
}

async function editCmsItem(type, id) {
  if (!isAdmin) return alert("Perlu Hak Akses Admin!");
  const newTitle = prompt("Edit Judul / Nama Baru:");
  if (newTitle === null || !newTitle.trim()) return;
  const newDesc = prompt("Edit Deskripsi / Isi / Alamat Singkat:");
  if (newDesc === null) return;

  let endpoint = (type === "news") ? "/api/news" : ("/api/subulussalam/" + (type === "announcement" ? "announcements" : (type === "tourism" ? "tourism" : "facilities")));
  const payload = { id: id, title: newTitle.trim(), content: newDesc, desc: newDesc, address: newDesc, name: newTitle.trim() };

  await fetch(endpoint, {
    method: "PUT",
    headers: { "Content-Type": "application/json", "Authorization": bridgeSecret },
    body: JSON.stringify(payload)
  });

  alert("Konten berhasil diperbarui!");
  loadCmsContentList();
}

async function deleteCmsItem(type, id) {
  if (!isAdmin) return alert("Perlu Hak Akses Admin!");
  if (!confirm("Hapus permanen konten ID: " + id + "?")) return;

  let endpoint = (type === "news") ? "/api/news" : ("/api/subulussalam/" + (type === "announcement" ? "announcements" : (type === "tourism" ? "tourism" : "facilities")));

  await fetch(endpoint, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", "Authorization": bridgeSecret },
    body: JSON.stringify({ id: id })
  });

  alert("Konten berhasil dihapus!");
  loadCmsContentList();
}

async function clearVisitorLogs() {
  if (!isAdmin) return alert("Perlu Hak Akses Admin!");
  if (!confirm("Apakah Anda yakin ingin MENGHAPUS SEMUA LOG PENGUNJUNG?\\nTindakan ini akan mengosongkan riwayat visitor untuk menghemat beban KV.")) return;

  // 1. Bersihkan di anyezra
  await fetch("/api/visitors", {
    method: "DELETE",
    headers: { "Authorization": bridgeSecret }
  });

  // 2. Bersihkan di corp worker
  try {
    await fetch("https://corp.anyezra.workers.dev/api/visitors", {
      method: "DELETE",
      headers: { "Authorization": bridgeSecret, "User-Agent": "Nexus-Enterprise-Worker" }
    });
  } catch(e) {}

  alert("Semua log kunjungan berhasil dibersihkan!");
  loadDetailedLogs();
}

async function saveGatewayD1Config() {
  if (!isAdmin) return alert("Perlu Hak Akses Admin Uchiha!");
  const fileIn = document.getElementById("cfg-d1-file");
  let bgUrl = document.getElementById("cfg-d1-url") ? document.getElementById("cfg-d1-url").value.trim() : "";
  const title = document.getElementById("cfg-d1-title") ? document.getElementById("cfg-d1-title").value.trim() : "UNIVERSALEZRA";

  if (fileIn && fileIn.files && fileIn.files[0]) {
    const uploaded = await uploadToGithub(fileIn.files[0]);
    if (uploaded) bgUrl = uploaded;
  }

  if (!bgUrl) return alert("Pilih file foto/video atau masukkan URL background!");

  const mediaType = (bgUrl && bgUrl.match(/\.(mp4|webm|mov|ogg)$/i)) ? "video" : "image";

  const res = await fetch("/api/site-config", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": bridgeSecret },
    body: JSON.stringify({ bgUrl: bgUrl, bgType: mediaType, title: title || "UNIVERSALEZRA", pass: "" })
  });
  
  if (res.ok) {
    alert("SUKSES: Wallpaper Gateway berhasil disimpan!");
    loadGatewayConfig();
  } else {
    alert("Gagal menyimpan.");
  }
}

async function publishSubulussalamContent(type) {
  let endpoint = "/api/subulussalam/" + type;
  let payload = {};

  if (type === "news") {
    endpoint = "/api/news";
    const fileIn = document.getElementById("cms-news-file");
    let imgUrl = "";
    if (fileIn && fileIn.files[0]) imgUrl = await uploadToGithub(fileIn.files[0]);
    payload = {
      title: document.getElementById("cms-news-title").value,
      category: document.getElementById("cms-news-cat").value,
      excerpt: document.getElementById("cms-news-excerpt").value,
      content: document.getElementById("cms-news-content").value,
      author: "Redaksi Utama",
      authorAvatar: "R",
      image: imgUrl,
      isHero: document.getElementById("cms-news-hero").checked
    };
  } else if (type === "announcement") {
    endpoint = "/api/subulussalam/announcements";
    payload = {
      title: document.getElementById("cms-anc-title").value,
      issuer: document.getElementById("cms-anc-issuer").value || "Pemerintah Kota Subulussalam",
      summary: document.getElementById("cms-anc-summary").value,
      content: document.getElementById("cms-anc-content").value,
      priority: "Penting",
      category: "Layanan Publik"
    };
  } else if (type === "tourism") {
    endpoint = "/api/subulussalam/tourism";
    const fileIn = document.getElementById("cms-tour-file");
    let imgUrl = "";
    if (fileIn && fileIn.files[0]) imgUrl = await uploadToGithub(fileIn.files[0]);
    payload = {
      name: document.getElementById("cms-tour-name").value,
      location: document.getElementById("cms-tour-loc").value,
      desc: document.getElementById("cms-tour-desc").value,
      image: imgUrl,
      category: "Wisata Alam",
      rating: 5.0
    };
  } else if (type === "facility") {
    endpoint = "/api/subulussalam/facilities";
    payload = {
      name: document.getElementById("cms-fac-name").value,
      category: document.getElementById("cms-fac-cat").value,
      address: document.getElementById("cms-fac-addr").value,
      hours: document.getElementById("cms-fac-hours").value || "Buka 24 Jam",
      status: "Buka Sekarang"
    };
  }

  // Simpan 1 kali ke database KV bersama (menghindari duplikasi)
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": bridgeSecret },
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    alert("SUKSES: Konten " + type + " berhasil diterbitkan ke sistem Subulussalam!");
    loadCmsContentList();
  } else {
    alert("Gagal mempublikasikan konten.");
  }
}

async function loadMasterSystemConfig() {
  try {
    const res = await fetch("/api/admin/config", { headers: { "Authorization": bridgeSecret } });
    const d = await res.json();
    if (d.success && d.data) {
      const cfg = d.data;
      if (document.getElementById("cfg-gh-owner")) document.getElementById("cfg-gh-owner").value = cfg.githubOwner || "";
      if (document.getElementById("cfg-gh-repo")) document.getElementById("cfg-gh-repo").value = cfg.githubRepo || "";
      if (document.getElementById("cfg-rapid-host")) document.getElementById("cfg-rapid-host").value = cfg.rapidApiHost || "";
    }
  } catch(e) {}
}

function toggleBgModeForm(val) {
  var upBox = document.getElementById("cfg-bg-upload-box");
  var urlBox = document.getElementById("cfg-bg-url-box");
  if (upBox) upBox.style.display = (val === "upload") ? "block" : "none";
  if (urlBox) urlBox.style.display = (val === "url") ? "block" : "none";
}

async function saveMasterSystemConfig() {
  if (!isAdmin) return alert("Perlu Hak Akses Admin Uchiha!");
  var bgMode = document.getElementById("cfg-sub-bg-mode") ? document.getElementById("cfg-sub-bg-mode").value : "default";
  var subBgUrl = "";

  if (bgMode === "upload") {
    var bgFile = document.getElementById("cfg-sub-bg-file");
    if (bgFile && bgFile.files[0]) {
      subBgUrl = await uploadToGithub(bgFile.files[0]);
    }
  } else if (bgMode === "url") {
    var urlIn = document.getElementById("cfg-sub-bg-url");
    if (urlIn) subBgUrl = urlIn.value.trim();
  }

  var ghTokenVal = document.getElementById("cfg-gh-token") ? document.getElementById("cfg-gh-token").value.trim() : "";
  var payload = {
    githubOwner: document.getElementById("cfg-gh-owner") ? document.getElementById("cfg-gh-owner").value.trim() : "anyezra",
    githubRepo: document.getElementById("cfg-gh-repo") ? document.getElementById("cfg-gh-repo").value.trim() : "anyezra",
    grokApiKey: document.getElementById("cfg-groq-key") ? document.getElementById("cfg-groq-key").value.trim() : "",
    rapidApiKey: document.getElementById("cfg-rapid-key") ? document.getElementById("cfg-rapid-key").value.trim() : "",
    rapidApiHost: document.getElementById("cfg-rapid-host") ? document.getElementById("cfg-rapid-host").value.trim() : "instagram-looter2.p.rapidapi.com",
    subulussalamBgMode: bgMode,
    subulussalamBg: subBgUrl
  };
  // Hanya kirim token jika admin mengisinya di form agar tidak menimpa Secret yang sudah ada
  if (ghTokenVal !== "") {
    payload.githubToken = ghTokenVal;
  }

  // 1. Simpan ke database KV Worker Anyezra
  var res = await fetch("/api/admin/config", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": bridgeSecret },
    body: JSON.stringify(payload)
  });

  // 2. Sinkronkan otomatis ke Backend Subulussalam City (corp.anyezra.workers.dev)
  try {
    await fetch("https://corp.anyezra.workers.dev/api/admin/config", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": bridgeSecret },
      body: JSON.stringify(payload)
    });
  } catch(e) {
    console.warn("[Sync to Corp Worker]", e);
  }

  if (res.ok) alert("SUKSES: Pengaturan Master System & AI tersimpan ke seluruh sistem!");
  else alert("Gagal menyimpan konfigurasi.");
}
function escapeHtml(e) { return e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : ""; }
function renderPreviewTag(url, type, name) {
  const fType = type || '';
  if (fType.startsWith('image/')) {
    return \`<img src="\${url}" style="width:100%; height:100%; object-fit:cover;">\`;
  } else if (fType.startsWith('video/')) {
    return \`<video src="\${url}" controls style="width:100%; height:100%; object-fit:cover;"></video>\`;
  } else if (fType.startsWith('audio/')) {
    return \`<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; padding:5px;"><i class="fas fa-music" style="font-size:2rem; color:var(--chakra-color); margin-bottom:5px;"></i><audio src="\${url}" controls style="width:100%; height:30px;"></audio></div>\`;
  } else {
    return \`<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; padding:5px; text-align:center;"><i class="fas fa-file-alt" style="font-size:2rem; color:#00ffea; margin-bottom:5px;"></i><small style="font-size:10px; color:#fff; word-break:break-all;">\${escapeHtml(name || 'Document')}</small><a href="\${url}" download="\${name || 'file'}" style="color:yellow; font-size:10px; margin-top:5px; border:1px solid yellow; padding:2px 5px; text-decoration:none;">DOWNLOAD</a></div>\`;
  }
}

// Helper Kalkulator Umur Upload (Time Ago)
function calculateTimeAgo(timestamp, dateStr) {
  let timeMs = timestamp;
  if (!timeMs && dateStr) {
    const parsed = Date.parse(dateStr);
    if (!isNaN(parsed)) timeMs = parsed;
  }
  if (!timeMs) return "Baru saja";
  
  const diffSec = Math.floor((Date.now() - timeMs) / 1000);
  if (diffSec < 60) return "Baru saja";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return diffMin + " mnt lalu";
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return diffHour + " jam lalu";
  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 30) return diffDay + " hari lalu";
  const diffMonth = Math.floor(diffDay / 30);
  if (diffMonth < 12) return diffMonth + " bln lalu";
  const diffYear = Math.floor(diffDay / 365);
  return diffYear + " thn lalu";
}

async function loadVault() {
  try {
    const res = await fetch('/api/vault'), t = await res.json();
    document.getElementById("gallery-display").innerHTML = t.map(e => {
      let mediaHtml = renderPreviewTag(e.fileUrl, e.fileType, e.filename || e.title);
      let timeAgo = calculateTimeAgo(e.timestamp, e.date);
      let exactTime = escapeHtml(e.date || "-");
      return \`<div class="gallery-item">
        <div class="gallery-media">\${mediaHtml}</div>
        <div class="gallery-info">
          <span class="gallery-title">\${escapeHtml(e.title)}</span>
          <div style="font-size:9px; color:#00ffea; margin:3px 0;">
            <i class="fas fa-clock"></i> \${exactTime} <b style="color:yellow; margin-left:4px;">(\${timeAgo})</b>
          </div>
          <span class="gallery-desc">\${escapeHtml(e.description || '')}</span>
        </div>
        <div class="gallery-del" style="display:\${isAdmin ? 'flex' : 'none'}!important; gap:4px;">
          <button onclick="editVault('\${e.id}', '\${encodeURIComponent(e.title || '')}', '\${encodeURIComponent(e.description || '')}')" style="background:#00a8ff; color:#000; border:none; padding:2px 6px; font-size:10px; cursor:pointer; font-weight:bold;">E</button>
          <button onclick="deleteVault('\${e.id}')" style="background:red; color:#fff; border:none; padding:2px 6px; font-size:10px; cursor:pointer; font-weight:bold;">X</button>
        </div>
      </div>\`;
    }).join("");
  } catch(e) {}
}

async function editVault(id, oldTitle, oldDesc) {
  if (!isAdmin) return alert("Perlu login Admin!");
  const newTitle = prompt("Edit Title:", decodeURIComponent(oldTitle));
  if (newTitle === null) return;
  const newDesc = prompt("Edit Description:", decodeURIComponent(oldDesc));
  await fetch('/api/vault', {
    method: "PUT",
    headers: { "Content-Type": "application/json", "Authorization": bridgeSecret },
    body: JSON.stringify({ id, title: newTitle, description: newDesc || "" })
  });
  loadVault();
}

async function uploadVault() {
  if (!isAdmin) return alert("Perlu login Admin!");
  const title = document.getElementById("vault-title").value, desc = document.getElementById("vault-desc").value, fileIn = document.getElementById("vault-file");
  if (!title || !fileIn.files[0]) return alert("Judul & File wajib diisi!");
  const file = fileIn.files[0];
  const statusEl = document.getElementById("upload-status");
  if (statusEl) statusEl.innerText = "Mengunggah";
  const fileUrl = await uploadToGithub(file);
  await fetch('/api/vault', {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": bridgeSecret },
    body: JSON.stringify({ title, description: desc, filename: file.name, type: file.type, content: fileUrl })
  });
  document.getElementById("vault-title").value = ""; fileIn.value = "";
  if (statusEl) statusEl.innerText = "Berhasil disimpan!";
  loadVault();
}

async function deleteVault(id) {
  if (!isAdmin) return;
  if (confirm("Hapus file ini?")) {
    await fetch('/api/vault', { method: "DELETE", headers: { "Content-Type": "application/json", "Authorization": bridgeSecret }, body: JSON.stringify({ id }) });
    loadVault();
  }
}

async function loadEzraMemory() {
  if (!isAdmin) return;
  try {
    const res = await fetch('/api/ezra-memory', { headers: { "Authorization": getAdminAuth() } });
    const data = await res.json();
    document.getElementById("ezra-memory-display").innerHTML = data.map(item => {
      let mediaHtml = renderPreviewTag(item.fileUrl, item.fileType, item.filename || item.title);
      let timeAgo = calculateTimeAgo(item.timestamp, item.date);
      let exactTime = escapeHtml(item.date || "-");
      return \`<div class="gallery-item" style="border-color:cyan;">
        <div class="gallery-media">\${mediaHtml}</div>
        <div class="gallery-info">
          <span class="gallery-title" style="color:cyan;">\${escapeHtml(item.title)}</span>
          <div style="font-size:9px; color:cyan; margin:3px 0;">
            <i class="fas fa-clock"></i> \${exactTime} <b style="color:yellow; margin-left:4px;">(\${timeAgo})</b>
          </div>
          <span class="gallery-desc">\${escapeHtml(item.description || '')}</span>
        </div>
        <div class="gallery-del" style="display:flex!important; gap:4px;">
          <button onclick="editEzraMemory('\${item.id}', '\${encodeURIComponent(item.title || '')}', '\${encodeURIComponent(item.description || '')}')" style="background:cyan; color:#000; border:none; padding:2px 6px; font-size:10px; cursor:pointer; font-weight:bold;">E</button>
          <button onclick="deleteEzraMemory('\${item.id}')" style="background:red; color:#fff; border:none; padding:2px 6px; font-size:10px; cursor:pointer; font-weight:bold;">X</button>
        </div>
      </div>\`;
    }).join("");
  } catch(e) {}
}

async function editEzraMemory(id, oldTitle, oldDesc) {
  if (!isAdmin) return;
  const newTitle = prompt("Edit Secret Title:", decodeURIComponent(oldTitle));
  if (newTitle === null) return;
  const newDesc = prompt("Edit Note:", decodeURIComponent(oldDesc));
  await fetch('/api/ezra-memory', {
    method: "PUT",
    headers: { "Content-Type": "application/json", "Authorization": bridgeSecret },
    body: JSON.stringify({ id, title: newTitle, description: newDesc || "" })
  });
  loadEzraMemory();
}

async function uploadEzraMemory() {
  if (!isAdmin) return;
  const title = document.getElementById("memory-title").value, desc = document.getElementById("memory-desc").value, fileIn = document.getElementById("memory-file");
  if (!title || !fileIn.files[0]) return alert("Lengkapi data!");
  const file = fileIn.files[0];
  const statusEl = document.getElementById("memory-upload-status");
  if (statusEl) statusEl.innerText = "Menyimpan";
  const fileUrl = await uploadToGithub(file);
  await fetch('/api/ezra-memory', { 
    method: "POST", 
    headers: { "Content-Type": "application/json", "Authorization": bridgeSecret }, 
    body: JSON.stringify({ title, description: desc, filename: file.name, type: file.type, content: fileUrl }) 
  });
  fileIn.value = "";
  if (statusEl) statusEl.innerText = "Tersimpan di Secret Vault!";
  loadEzraMemory();
}

async function deleteEzraMemory(id) {
  if (!isAdmin) return;
  if (confirm("DELETE?")) {
    await fetch('/api/ezra-memory', { 
      method: "DELETE", 
      headers: { "Content-Type": "application/json", "Authorization": bridgeSecret }, 
      body: JSON.stringify({ id }) 
    }); 
    loadEzraMemory();
  }
}

let uchihaChatInterval = null;

async function loadChat() {
  try {
    const res = await fetch('/api/chat'), t = await res.json();
    const chatDisplay = document.getElementById("chat-display");
    if (!chatDisplay) return;
    const isBottom = chatDisplay.scrollHeight - chatDisplay.clientHeight <= chatDisplay.scrollTop + 30;
    chatDisplay.innerHTML = t.map(e => \`<div class="chat-msg">
      <div class="chat-content"><small style="color:#555;">[\${e.date}]</small><br><span>\${escapeHtml(e.text)}</span></div>
      \${isAdmin ? \`<div style="display:flex; gap:4px;">
        <button class="chat-btn" style="color:cyan;" onclick="editChat('\${e.id}', '\${encodeURIComponent(e.text)}')">E</button>
        <button class="chat-btn" style="color:red;" onclick="deleteChat('\${e.id}')">X</button>
      </div>\` : ''}
    </div>\`).join("");
    if (isBottom) chatDisplay.scrollTop = chatDisplay.scrollHeight;
  } catch(e) {}
}

async function editChat(id, oldText) {
  if (!isAdmin) return alert("Perlu Hak Akses Admin!");
  const newText = prompt("Edit Pesan Chat:", decodeURIComponent(oldText));
  if (newText === null || !newText.trim()) return;
  await fetch('/api/chat', {
    method: "PUT",
    headers: { "Content-Type": "application/json", "Authorization": bridgeSecret },
    body: JSON.stringify({ id, text: newText })
  });
  loadChat();
}

async function sendChat() {
  const inp = document.getElementById("chat-msg");
  const val = inp.value.trim();
  if (val) {
    inp.value = "";
    await fetch('/api/chat', { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: val, admin: isAdmin }) });
    loadChat();
  }
}

async function deleteChat(id) {
  if (!isAdmin) return;
  if (confirm("Hapus pesan chat ini?")) {
    await fetch('/api/chat', { method: "DELETE", headers: { "Content-Type": "application/json", "Authorization": bridgeSecret }, body: JSON.stringify({ id }) });
    loadChat();
  }
}

function expandHub(viewId = "default") {
  const t = document.getElementById("center-panel"), n = document.getElementById("circle-content");
  document.querySelectorAll(".view-section").forEach(e => e.style.display = "none");
  clearInterval(marketInterval);
  clearInterval(uchihaChatInterval);
  t.classList.add("expanded");
  n.style.display = "block";
  document.getElementById("main-title").style.display = "none";
  const o = document.getElementById("view-" + viewId);
  if (o) o.style.display = "block";
  if (viewId === "default") {
    loadChat();
    loadVault();
    uchihaChatInterval = setInterval(loadChat, 3000);
  }
  if (viewId === "trading") { marketInterval = setInterval(loadTradingData, 5000); loadTradingData(); }
  if (viewId === "visitor") loadDetailedLogs();
}

function closeHub(e) {
  e.stopPropagation();
  document.getElementById("center-panel").classList.remove("expanded");
  document.getElementById("circle-content").style.display = "none";
  document.getElementById("main-title").style.display = "block";
  clearInterval(marketInterval);
  clearInterval(uchihaChatInterval);
}
function showSharingan() {
  const e = document.getElementById("auth-trigger");
  if (e) { e.innerHTML = '<div class="sharingan-mode" style="width:50px;height:50px;"></div>'; e.onclick = null; }
}
async function execIndodax(e) { expandHub("trading"); }
async function execSosmed(e) { expandHub("social"); }
async function execMusic(e) {
  document.getElementById("visual-container").innerHTML = '<video src="https://raw.githubusercontent.com/universalezra/universalezra/main/moments/1786176161422-bg.mp4" autoplay loop muted style="width:100%;"></video>';
  expandHub("visual");
}
async function execVisitor() { expandHub("visitor"); }
async function loadTradingData() {
  try {
    const res = await fetch('/api/trading'), t = await res.json();
    document.getElementById("trading-loader").style.display = "none";
    document.getElementById("trading-interface").style.display = "block";
    document.getElementById("wallet-idr").innerText = parseInt(t.idr).toLocaleString("id-ID");
    document.getElementById("wallet-btc").innerText = t.btc.toFixed(4);
    document.getElementById("market-price").innerText = parseInt(t.currentPrice).toLocaleString("id-ID");
    document.getElementById("trade-history").innerHTML = (t.history || []).map(e => \`<div style="display:flex; justify-content:space-between; padding:3px;"><span style="color:\${e.type==='BUY'?'lime':'red'}">\${e.type}</span><span>\${e.amount} BTC</span><small>\${e.time}</small></div>\`).join("");
  } catch(e) {}
}
async function tradeAction(action) {
  if (!isAdmin) return alert("Perlu Hak Akses Admin!");
  await fetch('/api/trading', { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action, amount: 0.01 }) });
  loadTradingData();
}
async function trackVisitor(accLoc = null) {
  let dev = /Android|iPhone/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
  await fetch('/api/visitors', { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ device: dev, accurateLocation: accLoc }) });
}
async function loadDetailedLogs() {
  var vStats = document.getElementById('visitor-stats');
  var vList = document.getElementById('visitor-list');
  var mVStats = document.getElementById('master-visitor-stats');
  var mVList = document.getElementById('master-visitor-list');

  // Proteksi Genjutsu Mode: Kunci tampilan jika belum login
  if (!isAdmin) {
    var deniedStats = 'STATUS: <b style="color:red;">ACCESS DENIED</b>';
    var deniedList = '<div style="color:red; font-weight:bold; text-align:center; padding:50px 15px; border:1px dashed red; margin-top:10px; border-radius:8px; background:rgba(255,0,0,0.06);">' +
      '<i class="fas fa-lock" style="font-size:2.8rem; margin-bottom:14px; display:block; color:red;"></i>' +
      '<span style="font-size:1.1rem; letter-spacing:2px; display:block;">ACCESS DENIED</span>' +
      '<span style="font-size:0.75rem; color:#aaa; font-weight:normal; margin-top:8px; display:block;">Log telemetri dienkripsi. Silakan login Genjutsu Mode di SYS.09.</span>' +
      '</div>';

    if (vStats) vStats.innerHTML = deniedStats;
    if (vList) vList.innerHTML = deniedList;
    if (mVStats) mVStats.innerHTML = deniedStats;
    if (mVList) mVList.innerHTML = deniedList;
    return;
  }

  try {
    const res = await fetch('/api/visitors', {
      headers: { 'Authorization': getAdminAuth() }
    });
    const t = await res.json();
    const totalCount = t.count || 0;
    const logsList = t.logs || [];

    const statsHtml = 'TOTAL KUNJUNGAN: <b style="color:cyan;">' + totalCount + '</b>';
    const itemsHtml = logsList.length > 0 ? logsList.map(function(x) {
      var ipText = x.ip || 'Unknown IP';
      var timeText = x.time || '-';
      var locText = x.location || '-';
      var ispText = x.isp || '-';
      var devText = x.device || x.referrer || 'Desktop';
      return '<div style="border-bottom:1px solid #333; padding:6px; margin-bottom:4px; line-height:1.4;">' +
        '<b style="color:#ff3366;">' + ipText + '</b> | <span style="color:#aaa; font-size:10px;">' + timeText + '</span><br>' +
        '<span style="color:lime;">Loc:</span> ' + locText + ' | ' +
        '<span style="color:cyan;">ISP:</span> ' + ispText + ' | ' +
        '<span style="color:gold;">Perangkat:</span> ' + devText +
        '</div>';
    }).join('') : '<div style="color:#888; padding:10px; text-align:center;">Belum ada data kunjungan.</div>';

    if (vStats) vStats.innerHTML = statsHtml;
    if (vList) vList.innerHTML = itemsHtml;
    if (mVStats) mVStats.innerHTML = statsHtml;
    if (mVList) mVList.innerHTML = itemsHtml;
  } catch(e) {
    var errHtml = '<div style="color:red; padding:10px;">Gagal memuat log telemetri.</div>';
    if (vList) vList.innerHTML = errHtml;
    if (mVList) mVList.innerHTML = errHtml;
  }
}

// ============================================================================
// MODUL PENGENDALI IKLAN & AFFILIATE (ADS CENTER MASTER CONTROLLER)
// ============================================================================
let adminAdsCache = [];
let currentAdsFilter = 'all';

async function loadAdminAds() {
  if (!isAdmin) return;
  const list = document.getElementById('admin-ads-list');
  if (list) list.innerHTML = '<div style="color:#ff9900; padding:10px;">Mengambil data antrean iklan...</div>';
  try {
    const res = await fetch('/api/admin/ads', {
      headers: { 'Authorization': getAdminAuth() }
    });
    const d = await res.json();
    if (d.success && Array.isArray(d.data)) {
      adminAdsCache = d.data;
      renderAdminAdsList();
    } else {
      if (list) list.innerHTML = '<div style="color:red; padding:10px;">Gagal memuat antrean iklan.</div>';
    }
  } catch(e) {
    if (list) list.innerHTML = '<div style="color:red; padding:10px;">Koneksi ke database iklan gagal.</div>';
  }
}

function filterAdminAds(status) {
  currentAdsFilter = status;
  renderAdminAdsList();
}

function renderAdminAdsList() {
  const list = document.getElementById('admin-ads-list');
  const statTotal = document.getElementById('ad-stat-total');
  const statPending = document.getElementById('ad-stat-pending');
  const statActive = document.getElementById('ad-stat-active');
  if (!list) return;

  const total = adminAdsCache.length;
  const pending = adminAdsCache.filter(function(a) { return a.status === 'pending_review'; }).length;
  const active = adminAdsCache.filter(function(a) { return a.status === 'active'; }).length;

  if (statTotal) statTotal.innerText = total;
  if (statPending) statPending.innerText = pending;
  if (statActive) statActive.innerText = active;

  let filtered = adminAdsCache;
  if (currentAdsFilter !== 'all') {
    filtered = adminAdsCache.filter(function(a) { return a.status === currentAdsFilter; });
  }

  if (filtered.length === 0) {
    list.innerHTML = '<div style="color:#888; text-align:center; padding:15px; border:1px dashed #333;">Tidak ada iklan pada kategori ini.</div>';
    return;
  }

  let html = '';
  filtered.forEach(function(ad) {
    const isPending = ad.status === 'pending_review';
    const isActive = ad.status === 'active';
    let statusBadge = '<span style="background:#555; color:#fff; font-size:9px; font-weight:bold; padding:2px 6px; border-radius:4px;">DITOLAK</span>';
    if (isPending) {
      statusBadge = '<span style="background:red; color:#fff; font-size:9px; font-weight:bold; padding:2px 6px; border-radius:4px; animation:blink-warning 0.5s infinite alternate;">PENDING DANA</span>';
    } else if (isActive) {
      statusBadge = '<span style="background:lime; color:#000; font-size:9px; font-weight:bold; padding:2px 6px; border-radius:4px;">AKTIF TAYANG</span>';
    }

    let mediaPreview = '';
    if (ad.mediaUrl) {
      const isVideo = ad.mediaType === 'video' || ad.mediaUrl.match(/\.(mp4|webm|mov|ogg)$/i);
      if (isVideo) {
        mediaPreview = '<div style="margin-top:6px;"><video src="' + ad.mediaUrl + '" controls style="max-width:140px; max-height:90px; border:1px solid #444; border-radius:4px;"></video></div>';
      } else {
        mediaPreview = '<div style="margin-top:6px;"><img src="' + ad.mediaUrl + '" style="max-width:140px; max-height:90px; object-fit:cover; border:1px solid #444; border-radius:4px; cursor:pointer;" onclick="showAdProofModal(&quot;' + ad.mediaUrl + '&quot;)" title="Klik untuk memperbesar media"></div>';
      }
    }

    let proofSection = '';
    if (ad.paymentProof) {
      proofSection = '<div style="margin-top:8px; border:1px dashed #ff9900; padding:8px; background:rgba(255,153,0,0.06); border-radius:6px;">' +
        '<span style="color:#ff9900; font-size:10px; font-weight:bold; display:block; margin-bottom:4px;">BUKTI TRANSFER DANA (RP 50.000):</span>' +
        '<img src="' + ad.paymentProof + '" style="max-width:100px; max-height:80px; object-fit:cover; border:1px solid #ff9900; border-radius:4px; cursor:pointer;" onclick="showAdProofModal(&quot;' + ad.paymentProof + '&quot;)" title="Klik untuk memperbesar bukti transfer">' +
        '<span style="font-size:9px; color:#aaa; display:block; margin-top:2px;">(Klik gambar untuk melihat struk ukuran penuh)</span>' +
      '</div>';
    }

    const cleanWa = (ad.authorWhatsapp || '628381000265').replace(/[^0-9]/g, '');
    const waLink = 'https://wa.me/' + cleanWa + '?text=Halo%20' + encodeURIComponent(ad.authorName || 'Pemasang Iklan') + ',%20mengenai%20iklan%20Anda:%20' + encodeURIComponent(ad.title || '');

    html += '<div style="border:1px solid #333; padding:12px; margin-bottom:12px; background:rgba(15,15,15,0.9); border-radius:8px; text-align:left;">' +
      '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:6px; margin-bottom:4px;">' +
        '<b style="color:#ff9900; font-size:13px; word-break:break-word;">' + escapeHtml(ad.title || 'Tanpa Judul') + '</b>' +
        '<div style="shrink-0;">' + statusBadge + '</div>' +
      '</div>' +
      '<div style="font-size:10px; color:#888; margin-bottom:6px;">ID: <b style="color:cyan;">' + escapeHtml(ad.id || '-') + '</b> | Pembayaran: <b style="color:gold;">' + escapeHtml((ad.paymentMethod || 'dana').toUpperCase()) + '</b> | Waktu: ' + escapeHtml(calculateTimeAgo(null, ad.createdAt)) + '</div>' +
      '<p style="font-size:11px; color:#eee; margin:6px 0; word-break:break-word; line-height:1.4;">' + escapeHtml(ad.description || '') + '</p>' +
      mediaPreview +
      proofSection +
      '<div style="font-size:10px; color:#aaa; margin-top:8px; border-top:1px solid #252525; padding-top:6px;">' +
        'Pengiklan: <b style="color:#00ffea;">' + escapeHtml(ad.authorName || '-') + '</b> (' + escapeHtml(ad.userEmail || '-') + ') | ' +
        '<a href="' + waLink + '" target="_blank" style="color:lime; font-weight:bold; text-decoration:none;">Chat WhatsApp</a>' +
      '</div>' +
      '<div style="margin-top:10px; display:flex; gap:6px; flex-wrap:wrap;">' +
        '<button type="button" onclick="setAdStatus(&quot;' + ad.id + '&quot;, &quot;active&quot;)" style="background:lime; color:#000; border:none; padding:5px 12px; font-size:10px; font-weight:bold; cursor:pointer; border-radius:4px;">APPROVE (TAYANGKAN)</button>' +
        '<button type="button" onclick="setAdStatus(&quot;' + ad.id + '&quot;, &quot;rejected&quot;)" style="background:orange; color:#000; border:none; padding:5px 12px; font-size:10px; font-weight:bold; cursor:pointer; border-radius:4px;">TOLAK (REJECT)</button>' +
        '<button type="button" onclick="deleteAdminAdItem(&quot;' + ad.id + '&quot;)" style="background:red; color:#fff; border:none; padding:5px 12px; font-size:10px; font-weight:bold; cursor:pointer; border-radius:4px;">HAPUS (KILL)</button>' +
      '</div>' +
    '</div>';
  });

  list.innerHTML = html;
}

async function setAdStatus(adId, newStatus) {
  if (!isAdmin) return alert("Perlu Hak Akses Admin Uchiha!");
  const actionName = newStatus === 'active' ? 'menyetujui & menayangkan' : 'menolak';
  if (!confirm("Apakah Anda yakin ingin " + actionName + " iklan ID: " + adId + "?")) return;
  try {
    const res = await fetch('/api/admin/ads/status', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'UchihaGodMode' },
      body: JSON.stringify({ id: adId, status: newStatus })
    });
    const d = await res.json();
    if (d.success) {
      alert("SUKSES: Iklan berhasil diperbarui menjadi " + newStatus.toUpperCase());
      loadAdminAds();
    } else {
      alert("Gagal: " + (d.error || "Server error"));
    }
  } catch(e) {
    alert("Koneksi ke worker terputus.");
  }
}

async function deleteAdminAdItem(adId) {
  if (!isAdmin) return alert("Perlu Hak Akses Admin Uchiha!");
  if (!confirm("Peringatan Eksekusi: Hapus permanen iklan ID: " + adId + "?")) return;
  try {
    const res = await fetch('/api/admin/ads', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'UchihaGodMode' },
      body: JSON.stringify({ id: adId })
    });
    const d = await res.json();
    if (d.success) {
      alert("SUKSES: Iklan dihapus dari sistem.");
      loadAdminAds();
    } else {
      alert("Gagal menghapus: " + (d.error || "Server error"));
    }
  } catch(e) {
    alert("Koneksi gagal.");
  }
}

function showAdProofModal(url) {
  const modal = document.getElementById('admin-ad-proof-modal');
  const img = document.getElementById('admin-ad-proof-img');
  const openTab = document.getElementById('admin-ad-proof-open-tab');
  if (modal && img) {
    img.src = url;
    if (openTab) openTab.href = url;
    modal.style.display = 'flex';
  }
}

function closeAdProofModal() {
  const modal = document.getElementById('admin-ad-proof-modal');
  if (modal) modal.style.display = 'none';
}

// ============================================================================
// 4. SCRIPTS DIMENSI 3: ZERALIVECORP (FULL INTEGRATED FEATURES)
// ============================================================================
let sysToken = localStorage.getItem('business_token');
let savedUserData = JSON.parse(localStorage.getItem('business_user_data') || '{}');
let sysEmail = savedUserData.email || null;
let currentChatTarget = null;
let chatInterval, inboxInterval, locInterval;
let adminToken = null;
let browserId = localStorage.getItem("zera_browser_id") || ("BID-" + Math.random().toString(36).substr(2, 9).toUpperCase());
localStorage.setItem("zera_browser_id", browserId);

function initDraggable(elemId) {
  const btn = document.getElementById(elemId);
  if (!btn) return;
  let isDragging = false, startX, startY, initialX, initialY;
  btn.addEventListener('mousedown', dragStart);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', dragEnd);
  btn.addEventListener('touchstart', dragStart, {passive: true});
  document.addEventListener('touchmove', drag, {passive: false});
  document.addEventListener('touchend', dragEnd);
  function dragStart(e) {
    isDragging = true;
    startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    initialX = btn.offsetLeft; initialY = btn.offsetTop;
    btn.style.cursor = 'grabbing';
  }
  function drag(e) {
    if (!isDragging) return;
    if (e.type === 'touchmove') e.preventDefault();
    const curX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const curY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    btn.style.left = \`\${initialX + (curX - startX)}px\`;
    btn.style.top = \`\${initialY + (curY - startY)}px\`;
    btn.style.bottom = 'auto'; btn.style.right = 'auto';
  }
  function dragEnd() { isDragging = false; btn.style.cursor = 'grab'; }
}

async function sendHeartbeat() {
  try {
    const res = await fetch('/api/heartbeat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: browserId }) });
    const data = await res.json();
    if (data.onlineCount !== undefined) document.getElementById('online-counter').innerText = data.onlineCount;
  } catch(e) {}
}

async function fetchLocation() {
  try {
    const res = await fetch('/api/liveloc');
    const data = await res.json();
    document.getElementById('lat-data').innerText = data.lat || "N/A";
    document.getElementById('lng-data').innerText = data.lng || "N/A";
    document.getElementById('loc-time').innerText = data.time || "OFFLINE";
    if (data.lat && data.lng) {
      document.getElementById('map-iframe').src = \`https://maps.google.com/maps?q=\${data.lat},\${data.lng}&t=k&z=17&output=embed\`;
    }
  } catch(e) {}
}

async function updateProfilePicture(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    try {
      const statusDisp = document.getElementById('user-folder-display');
      const prevText = statusDisp ? statusDisp.innerText : '';
      if (statusDisp) statusDisp.innerText = "Mengunggah";
      
      const githubUrl = await uploadToGithub(file);
      if (!githubUrl) return;

      document.getElementById('user-avatar-display').src = githubUrl;
      const res = await fetch('/api/users/profile', {
        method: 'POST',
        headers: { 
          "Content-Type": "application/json", 
          "Authorization": "Bearer " + sysToken 
        },
        body: JSON.stringify({ avatarUrl: githubUrl })
      });
      const data = await res.json();
      if (res.ok) {
        const ud = JSON.parse(localStorage.getItem('business_user_data') || '{}');
        ud.avatar = githubUrl;
        localStorage.setItem('business_user_data', JSON.stringify(ud));
        if (statusDisp) statusDisp.innerText = prevText;
        alert("Foto profil berhasil disimpan");
      }
    } catch(e) {
      alert("Gagal memperbarui foto profil.");
    }
  }
}

async function handleCredentialResponse(response) {
  try {
    const res = await fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ credential: response.credential })
    });
    const data = await res.json();
    if (data.error) return alert("ERR: " + data.error);
    if (data.needsPassword) {
      let newPass = prompt(\`Welcome \${data.user.email}. Silakan buat password login lokal:\`);
      if (newPass) await fetch('/api/auth/set-password', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: data.user.email, token: data.token, newPass }) });
    }
    localStorage.setItem('business_token', data.token);
    localStorage.setItem('business_user_data', JSON.stringify(data.user));
    sysToken = data.token; sysEmail = data.user.email;
    document.getElementById('user-status').innerHTML = \`<span style="color:#0ff;">\${sysEmail}</span>\`;
    document.querySelectorAll('.auth-required span').forEach(el => { el.innerText = 'PROFILE UNLOCKED'; el.style.color = '#0f0'; });
    document.getElementById('zera-auth-modal').style.display = 'none';
    checkDoubleLockAccess();
    openZeraSection('sec-workspace');
  } catch(e) { alert("Google Auth Offline"); }
}

async function startInboxPolling() {
  fetchInboxThreads();
  if (inboxInterval) clearInterval(inboxInterval);
  inboxInterval = setInterval(fetchInboxThreads, 5000);
}

async function fetchInboxThreads() {
  if (!sysToken) return;
  try {
    const res = await fetch('/api/dm/threads', { headers: { 'Authorization': \`Bearer \${sysToken}\` } });
    const data = await res.json();
    let totalUnread = 0, html = '';
    (data.threads || []).forEach(t => {
      totalUnread += t.unreadCount || 0;
      html += \`<div class="inbox-thread-item" style="padding:6px; border-bottom:1px dashed #333; cursor:pointer;" onclick="openChatFromInbox('\${t.partner}')"><b style="color:#0ff;">\${t.partner}</b>: \${t.lastMessage}</div>\`;
    });
    document.getElementById('inbox-list').innerHTML = html || "<div style='padding:10px; color:#888;'>Belum ada pesan.</div>";
    const badge = document.getElementById('inbox-total-badge');
    if (badge) { badge.style.display = totalUnread > 0 ? 'inline-block' : 'none'; badge.innerText = totalUnread; }
  } catch(e) {}
}
function openInbox() { if (!sysToken) return alert("Silakan Login!"); document.getElementById('inbox-modal').style.display = 'flex'; fetchInboxThreads(); }
function closeInbox() { document.getElementById('inbox-modal').style.display = 'none'; }
function openChatFromInbox(partner) { closeInbox(); openChat(partner); }

async function editItem(type, id, oldText, oldTitle, oldDesc) {
  let payload = { itemType: type, id };
  if (type === 'post') {
    let newText = prompt("Edit Status:", decodeURIComponent(oldText || ''));
    if (newText === null || !newText.trim()) return;
    payload.text = newText;
  } else {
    let newTitle = prompt("Edit Judul:", decodeURIComponent(oldTitle || ''));
    let newDesc = prompt("Edit Deskripsi:", decodeURIComponent(oldDesc || ''));
    if (newTitle === null) return;
    payload.title = newTitle; payload.description = newDesc || "";
  }
  await fetch('/api/workspace/item', { method: 'PUT', headers: { "Content-Type": "application/json", "Authorization": \`Bearer \${sysToken}\` }, body: JSON.stringify(payload) });
  loadWorkspaceData();
}

async function deleteItem(type, id) {
  if (!confirm("Hapus item ini?")) return;
  await fetch('/api/workspace/item', { method: 'DELETE', headers: { "Content-Type": "application/json", "Authorization": \`Bearer \${sysToken}\` }, body: JSON.stringify({ itemType: type, id }) });
  loadWorkspaceData();
}



async function fetchAdminUsers() {
  if (!isAdmin) return;
  try {
    const res = await fetch('/api/admin/users', { headers: { 'Authorization': getAdminAuth() } });
    const users = await res.json();
    let html = '';
    
    if (Array.isArray(users) && users.length > 0) {
      users.forEach(function(u) {
        var srcBadge = u.source === 'Subulussalam City' 
          ? '<span style="background:#0f0; color:#000; font-size:9px; font-weight:bold; padding:2px 6px; border-radius:4px; margin-left:6px;">SUBULUSSALAM</span>'
          : '<span style="background:cyan; color:#000; font-size:9px; font-weight:bold; padding:2px 6px; border-radius:4px; margin-left:6px;">ZERALIVE</span>';
        
        html += '<div style="border: 1px solid #ff00ea; padding: 10px; margin-bottom: 8px; background: rgba(0,0,0,0.5); border-radius: 6px;">' +
          '<div style="display:flex; justify-content:space-between; align-items:center;">' +
            '<div><b style="color:#00ffea;">' + escapeHtml(u.name || u.username) + '</b> (' + escapeHtml(u.email) + ')' + srcBadge + '</div>' +
          '</div>' +
          '<div style="font-size:10px; color:#aaa; margin-top:3px;">Username: ' + escapeHtml(u.username) + ' | Folder: ' + escapeHtml(u.folderId || '-') + '</div>' +
          '<div style="margin-top: 8px; display: flex; gap: 8px;">' +
            '<button type="button" onclick="adminSpy(\\'' + encodeURIComponent(u.folderId || '') + '\\', \\'' + encodeURIComponent(u.email || '') + '\\', \\'' + encodeURIComponent(u.username || '') + '\\', \\'' + encodeURIComponent(u.source || '') + '\\')" style="background:#00ffea; color:#000; border:none; padding:4px 12px; font-size:11px; font-weight:bold; cursor:pointer; border-radius:4px;">👁️ SPY</button>' +
            '<button type="button" onclick="adminDelete(\\'' + encodeURIComponent(u.email || '') + '\\', \\'' + encodeURIComponent(u.username || '') + '\\', \\'' + encodeURIComponent(u.folderId || '') + '\\', \\'' + encodeURIComponent(u.source || '') + '\\')" style="background:red; color:#fff; border:none; padding:4px 12px; font-size:11px; font-weight:bold; cursor:pointer; border-radius:4px;">☠️ KILL</button>' +
          '</div>' +
        '</div>';
      });
    } else {
      html = '<div style="color:#888; padding:10px; text-align:center;">Belum ada user terdaftar.</div>';
    }

    const listEl = document.getElementById('admin-user-list');
    if (listEl) listEl.innerHTML = html;
  } catch(e) {
    const listEl = document.getElementById('admin-user-list');
    if (listEl) listEl.innerHTML = '<div style="color:red;">Gagal mengambil data user.</div>';
  }
}

async function adminSpy(folderId, email, username, source) {
  if (!isAdmin) return alert("Perlu Hak Akses Admin Uchiha!");
  const decFolder = decodeURIComponent(folderId || '');
  const decEmail = decodeURIComponent(email || '');
  const decUser = decodeURIComponent(username || '');
  const decSource = decodeURIComponent(source || '');
  
  const area = document.getElementById('admin-spy-area');
  if (area) area.innerHTML = "Mengunduh data akun " + escapeHtml(decUser || decEmail) + "...";
  
  try {
    const res = await fetch('/api/admin/spy', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json', 'Authorization': getAdminAuth() }, 
      body: JSON.stringify({ folderId: decFolder, email: decEmail, username: decUser, source: decSource }) 
    });
    const data = await res.json();
    
    var html = '<b>HASIL SPY: ' + escapeHtml(decUser || decEmail) + ' [' + escapeHtml(decSource) + ']</b><hr style="margin:8px 0; border-color:#333;">';
    html += '<p style="color:cyan; font-weight:bold; margin-bottom:4px;">STATUS / POSTINGAN:</p>';
    
    if (data.posts && data.posts.length > 0) {
      data.posts.forEach(function(p) {
        html += '<div style="background:#111; padding:4px 8px; margin-bottom:3px; border-left:2px solid cyan;">[' + escapeHtml(p.time || '-') + '] ' + escapeHtml(p.text || '-') + '</div>';
      });
    } else {
      html += '<div style="color:#666; font-size:10px;">Tidak ada postingan teks.</div>';
    }
    
    html += '<p style="color:gold; font-weight:bold; margin:8px 0 4px 0;">BERKAS & MEDIA:</p>';
    if (data.files && data.files.length > 0) {
      data.files.forEach(function(f) {
        if (f.type && f.type.startsWith('image/')) {
          html += '<img src="' + f.data + '" style="max-width:90px; max-height:90px; border:1px solid #fff; margin:2px; object-fit:cover;">';
        } else {
          html += '<div style="background:#111; padding:3px 6px; font-size:10px; margin-bottom:2px;">📄 [FILE] ' + escapeHtml(f.name || f.title || 'Berkas') + '</div>';
        }
      });
    } else {
      html += '<div style="color:#666; font-size:10px;">Tidak ada berkas/media yang diunggah.</div>';
    }
    
    if (area) area.innerHTML = html;
  } catch(e) {
    if (area) area.innerHTML = '<div style="color:red;">Gagal mengintip data user.</div>';
  }
}

async function adminDelete(email, username, folderId, source) {
  if (!isAdmin) return alert("Perlu Hak Akses Admin Uchiha!");
  const decEmail = decodeURIComponent(email || '');
  const decUser = decodeURIComponent(username || '');
  const decFolder = decodeURIComponent(folderId || '');
  const decSource = decodeURIComponent(source || '');
  
  if (!confirm("KONFIRMASI EKSEKUSI (KILL):\\nApakah Anda yakin ingin memusnahkan akun " + (decUser || decEmail) + " dari " + decSource + "?")) return;
  
  try {
    const res = await fetch('/api/admin/delete', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json', 'Authorization': getAdminAuth() }, 
      body: JSON.stringify({ email: decEmail, username: decUser, folderId: decFolder, source: decSource }) 
    });
    const d = await res.json();
    if (d.success) {
      alert("SUKSES: Akun " + (decUser || decEmail) + " berhasil dimusnahkan!");
      fetchAdminUsers();
      const area = document.getElementById('admin-spy-area');
      if (area) area.innerHTML = "Akun telah dimusnahkan dari sistem.";
    } else {
      alert("Gagal menghapus akun: " + (d.error || "Server error"));
    }
  } catch(e) {
    alert("Koneksi gagal saat menghapus akun.");
  }
}

function openZeraSection(id) {
  if (id === 'sec-workspace' && !sysToken) { document.getElementById('zera-auth-modal').style.display = 'flex'; return; }
  if (id === 'sec-admin' && !isAdmin) { alert("Akses Ditolak: Perlu Login Uchiha"); return; }
  document.querySelectorAll('.zera-section').forEach(function(el) { el.classList.remove('active'); });
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  clearInterval(locInterval);
  if (id === 'sec-workspace') loadWorkspaceData();
  if (id === 'sec-location') { fetchLocation(); locInterval = setInterval(fetchLocation, 15000); }
  if (id === 'sec-admin') fetchAdminUsers();
}





async function loadInternalNews() {
  try {
    const defAvatar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' fill='%2300ff00'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/></svg>";
    const res = await fetch('/api/public/announcements');
    const posts = await res.json();
    document.getElementById('internal-news-feed').innerHTML = (posts || []).map(p => \`
      <div style="border-bottom:1px dashed #333; padding:8px 0; display:flex; gap:10px; align-items:flex-start;">
        <img src="\${p.authorAvatar || defAvatar}" class="avatar" style="width:28px; height:28px; border-radius:50%; border:1px solid #0f0; flex-shrink:0; object-fit:cover;">
        <div style="flex:1; overflow:hidden;">
          <small style="color:#888; font-size:10px;">\${p.time} — <b style="color:#0ff;">\${escapeHtml(p.author || 'Admin')}</b></small>
          <div style="color:#fff; margin-top:2px; font-size:12px; word-break:break-word;">⚡ \${escapeHtml(p.text)}</div>
        </div>
      </div>\`).join("");
  } catch(e) {}
}

let zeraAuthCooldownUntil = 0;

async function handleLocalAuth(action) {
  const now = Date.now();
  if (action === 'login' && now < zeraAuthCooldownUntil) {
    const s = Math.ceil((zeraAuthCooldownUntil - now) / 1000);
    return;
  }

  const emailInp = document.getElementById('auth-email');
  const passInp = document.getElementById('auth-pass');
  const email = emailInp ? emailInp.value.trim().toLowerCase() : '';
  const pass = passInp ? passInp.value : '';
  const loginBtn = document.querySelector('.auth-btn');

  if (!email || !pass) return alert('Lengkapi data email dan password!');

  try {
    const res = await fetch('/api/auth/local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: action, email: email, pass: pass })
    });
    const data = await res.json();

    if (data.error) {
      if (action === 'login') {
        const wait = data.cooldown || 5;
        zeraAuthCooldownUntil = Date.now() + (wait * 1000);
        startButtonCooldown(loginBtn, 'SIGN IN', wait);
      }
      return alert(data.error);
    }

    localStorage.setItem('business_token', data.token);
    localStorage.setItem('business_user_data', JSON.stringify(data.user));
    sysToken = data.token;
    sysEmail = data.user.email;
    document.getElementById('user-status').innerHTML = '<span style="color:#0ff;">' + escapeHtml(sysEmail) + '</span>';
    document.querySelectorAll('.auth-required span').forEach(function(el) {
      el.innerText = 'PROFILE UNLOCKED';
      el.style.color = '#0f0';
    });
    document.getElementById('zera-auth-modal').style.display = 'none';
    checkDoubleLockAccess();
    openZeraSection('sec-workspace');
  } catch(e) {
    alert('Gagal menghubungi server autentikasi.');
  }
}

// zeraLogout telah dideklarasikan secara komprehensif pada core session controller

let currentWsSort = 'default';
let currentWsBlade = 'all';

function changeWsSort(mode) {
  currentWsSort = mode;
  loadWorkspaceData();
}

function switchWsBlade(blade) {
  currentWsBlade = blade;
  var btns = document.querySelectorAll('.ws-blade-btn');
  btns.forEach(function(b) {
    b.style.background = '#000';
    b.style.color = '#0f0';
  });
  var activeBtn = document.getElementById('blade-' + blade);
  if (activeBtn) {
    activeBtn.style.background = '#0f0';
    activeBtn.style.color = '#000';
  }
  loadWorkspaceData();
}

function sortWsItems(items) {
  return [...items].sort(function(a, b) {
    if (currentWsSort === 'modified') {
      var timeA = a.updatedAt || a.timestamp || a.id || 0;
      var timeB = b.updatedAt || b.timestamp || b.id || 0;
      return timeB - timeA;
    } else if (currentWsSort === 'oldest') {
      var timeA = a.timestamp || a.id || 0;
      var timeB = b.timestamp || b.id || 0;
      return timeA - timeB;
    } else {
      var timeA = a.timestamp || a.id || 0;
      var timeB = b.timestamp || b.id || 0;
      return timeB - timeA;
    }
  });
}

function renderWsPostCard(p) {
  var pAgo = calculateTimeAgo(p.timestamp, p.time);
  var pTime = escapeHtml(p.time || '-');
  var editedBadge = p.updatedAt ? '<span style="color:orange; font-size:9px; margin-left:4px;">[Diedit: ' + calculateTimeAgo(p.updatedAt, p.editedTime) + ']</span>' : '';
  return '<div class="ws-card">' +
    '<div class="ws-actions">' +
      '<button type="button" onclick="editItem(&quot;post&quot;, &quot;' + p.id + '&quot;, &quot;' + encodeURIComponent(p.text || '') + '&quot;)">E</button>' +
      '<button type="button" onclick="deleteItem(&quot;post&quot;, &quot;' + p.id + '&quot;)" style="color:red;">X</button>' +
    '</div>' +
    '<div class="ws-time" style="color:#00ffea;">' +
      '<i class="fas fa-clock"></i> ' + pTime + ' <b style="color:yellow; margin-left:4px;">(' + pAgo + ')</b>' + editedBadge +
    '</div>' +
    '<div style="margin-top:10px; font-size:14px; word-break:break-word;">' + escapeHtml(p.text || '') + '</div>' +
  '</div>';
}

function renderWsFileCard(f) {
  var fType = f.type || '';
  var fAgo = calculateTimeAgo(f.timestamp, f.time);
  var fTime = escapeHtml(f.time || '-');
  var editedBadge = f.updatedAt ? '<span style="color:orange; font-size:9px; margin-left:4px;">[Diedit: ' + calculateTimeAgo(f.updatedAt, f.editedTime) + ']</span>' : '';
  
  var mediaHtml = '';
  if (fType.startsWith('image/')) {
    mediaHtml = '<img src="' + f.data + '" class="ws-media">';
  } else if (fType.startsWith('video/')) {
    mediaHtml = '<video src="' + f.data + '" controls class="ws-media"></video>';
  } else if (fType.startsWith('audio/')) {
    mediaHtml = '<audio src="' + f.data + '" controls class="ws-media" style="height:40px; margin-top:10px; width:100%;"></audio>';
  } else {
    mediaHtml = '<a href="' + f.data + '" download="' + escapeHtml(f.name || 'download') + '" style="background:#0f0; color:#000; padding:5px 10px; display:inline-block; margin-top:5px; font-weight:bold; font-size:11px; text-decoration:none;">DOWNLOAD</a>';
  }

  return '<div class="ws-card">' +
    '<div class="ws-actions">' +
      '<button type="button" onclick="editItem(&quot;file&quot;, &quot;' + f.id + '&quot;, &quot;&quot;, &quot;' + encodeURIComponent(f.title || '') + '&quot;, &quot;' + encodeURIComponent(f.description || '') + '&quot;)">E</button>' +
      '<button type="button" onclick="deleteItem(&quot;file&quot;, &quot;' + f.id + '&quot;)" style="color:red;">X</button>' +
    '</div>' +
    '<div class="ws-time" style="color:#00ffea;">' +
      '<i class="fas fa-clock"></i> ' + fTime + ' | ' + escapeHtml(f.name || 'File') + ' <b style="color:yellow; margin-left:4px;">(' + fAgo + ')</b>' + editedBadge +
    '</div>' +
    '<b style="color:#0ff; display:block; margin-top:5px;">' + escapeHtml(f.title || '') + '</b>' +
    '<p style="font-size:11px; margin-bottom:10px; word-break:break-word;">' + escapeHtml(f.description || '') + '</p>' +
    mediaHtml +
  '</div>';
}

async function loadWorkspaceData() {
  if (!sysToken) return;
  try {
    var ud = JSON.parse(localStorage.getItem('business_user_data') || '{}');
    if (document.getElementById('user-name-display')) document.getElementById('user-name-display').innerText = ud.email || '';
    if (document.getElementById('user-folder-display')) document.getElementById('user-folder-display').innerText = ud.folderId || '';
    if (ud.avatar && document.getElementById('user-avatar-display')) document.getElementById('user-avatar-display').src = ud.avatar;
    
    var res = await fetch('/api/workspace/data', { headers: { 'Authorization': 'Bearer ' + sysToken } });
    var data = await res.json();
    if (data.avatar) {
      ud.avatar = data.avatar;
      localStorage.setItem('business_user_data', JSON.stringify(ud));
      if (document.getElementById('user-avatar-display')) document.getElementById('user-avatar-display').src = data.avatar;
    }
    if (data.error) throw new Error(data.error);

    var rawPosts = data.posts || [];
    var rawFiles = data.files || [];

    // Pisahkan file ke 3 kategori bilah
    var photoFiles = rawFiles.filter(function(f) { return (f.type || '').startsWith('image/'); });
    var videoFiles = rawFiles.filter(function(f) { return (f.type || '').startsWith('video/'); });
    var docFiles = rawFiles.filter(function(f) { return !(f.type || '').startsWith('image/') && !(f.type || '').startsWith('video/'); });

    // Update angka badge pada masing-masing tombol bilah
    var cAll = document.getElementById('count-blade-all');
    var cPhoto = document.getElementById('count-blade-photo');
    var cVideo = document.getElementById('count-blade-video');
    var cDoc = document.getElementById('count-blade-doc');
    var cStatus = document.getElementById('count-blade-status');

    if (cAll) cAll.innerText = rawPosts.length + rawFiles.length;
    if (cPhoto) cPhoto.innerText = photoFiles.length;
    if (cVideo) cVideo.innerText = videoFiles.length;
    if (cDoc) cDoc.innerText = docFiles.length;
    if (cStatus) cStatus.innerText = rawPosts.length;

    var html = '';

    // Render sesuai bilah aktif dengan sort yang tetap berlaku
    if (currentWsBlade === 'all') {
      var sortedPosts = sortWsItems(rawPosts);
      var sortedFiles = sortWsItems(rawFiles);
      sortedPosts.forEach(function(p) { html += renderWsPostCard(p); });
      sortedFiles.forEach(function(f) { html += renderWsFileCard(f); });
    } else if (currentWsBlade === 'photo') {
      var sortedPhotos = sortWsItems(photoFiles);
      sortedPhotos.forEach(function(f) { html += renderWsFileCard(f); });
    } else if (currentWsBlade === 'video') {
      var sortedVideos = sortWsItems(videoFiles);
      sortedVideos.forEach(function(f) { html += renderWsFileCard(f); });
    } else if (currentWsBlade === 'doc') {
      var sortedDocs = sortWsItems(docFiles);
      sortedDocs.forEach(function(f) { html += renderWsFileCard(f); });
    } else if (currentWsBlade === 'status') {
      var sortedStatuses = sortWsItems(rawPosts);
      sortedStatuses.forEach(function(p) { html += renderWsPostCard(p); });
    }

    document.getElementById('ws-feed').innerHTML = html || '<div style="color:#888; padding:20px; text-align:center; grid-column:1/-1;">Tidak ada file pada bilah ini.</div>';
  } catch(e) {
    document.getElementById('ws-feed').innerHTML = '<div style="color:red; padding:20px; text-align:center; grid-column:1/-1;">OFFLINE / Gagal memuat data workspace.</div>';
  }
}

async function postStatus() {
  const text = document.getElementById('ws-status').value;
  if (!text) return;
  document.getElementById('ws-status').value = '';
  await fetch('/api/workspace/status', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${sysToken}\` }, body: JSON.stringify({ text }) });
  loadWorkspaceData();
}

async function postFile() {
  const fileInput = document.getElementById('ws-file');
  const titleInput = document.getElementById('ws-file-title');
  const descInput = document.getElementById('ws-file-desc');
  const file = fileInput.files[0];
  const title = titleInput.value.trim();
  const desc = descInput.value.trim();
  if (!file) return alert("Pilih file terlebih dahulu!");
  
  try {
    const fileUrl = await uploadToGithub(file);
    if (!fileUrl) return;
    
    fileInput.value = ''; titleInput.value = ''; descInput.value = '';
    await fetch('/api/workspace/file', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': "Bearer " + sysToken 
      },
      body: JSON.stringify({ fileUrl: fileUrl, fileType: file.type, fileName: file.name, title: title || file.name, description: desc })
    });
    loadWorkspaceData();
  } catch(e) {}
}
async function searchUsers() {
  const q = document.getElementById('search-user').value;
  const defAvatar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' fill='%2300ff00'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/></svg>";
  const res = await fetch(\`/api/users/search?q=\${encodeURIComponent(q)}\`, { headers: { 'Authorization': \`Bearer \${sysToken}\` } });
  const users = await res.json();
  document.getElementById('search-results').innerHTML = (users || []).map(u => \`
    <div class="search-user-item" style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px dashed #333;">
      <div class="search-user-info" style="display:flex; align-items:center; gap:8px; overflow:hidden;">
        <img src="\${u.avatar || defAvatar}" class="avatar" style="width:24px; height:24px; border-radius:50%; border:1px solid #0f0; flex-shrink:0; object-fit:cover;">
        <span style="font-size:11px; color:#fff; word-break:break-all;">\${escapeHtml(u.email)}</span>
      </div>
      <button onclick="openChat('\${u.email}')" style="padding:2px 8px; font-size:11px; flex-shrink:0;">MESSAGE</button>
    </div>\`).join("");
}


function openChat(target) {
  currentChatTarget = target;
  document.getElementById('chat-target-name').innerText = target;
  document.getElementById('chat-modal').style.display = 'flex';
  fetchDMs();
  clearInterval(chatInterval);
  chatInterval = setInterval(fetchDMs, 3000);
}
function closeChat() { document.getElementById('chat-modal').style.display = 'none'; clearInterval(chatInterval); }

async function fetchDMs() {
  if (!currentChatTarget || !sysToken) return;
  const res = await fetch(\`/api/dm?target=\${currentChatTarget}\`, { headers: { 'Authorization': \`Bearer \${sysToken}\` } });
  const chat = await res.json();
  document.getElementById('chat-history').innerHTML = (chat || []).map(m => \`<div class="chat-bubble \${m.from===sysEmail?'chat-me':'chat-them'}"><div>\${m.text}</div></div>\`).join("");
}

async function sendDM() {
  const text = document.getElementById('chat-input').value;
  if (!text || !currentChatTarget) return;
  document.getElementById('chat-input').value = '';
  await fetch('/api/dm', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': \`Bearer \${sysToken}\` }, body: JSON.stringify({ target: currentChatTarget, text }) });
  fetchDMs();
}

// AI Assistant Engine (Integrasi Sempurna Subulussalam City)
var zeraAiChatHistory = [];
var isAiResponding = false;

document.getElementById('ai-btn').onclick = function() { document.getElementById('ai-modal').style.display = 'flex'; };
function closeAiModal() { document.getElementById('ai-modal').style.display = 'none'; }

async function sendAiMessage() {
  if (isAiResponding) return;
  var inp = document.getElementById('ai-input');
  var txt = inp ? inp.value.trim() : '';
  if (!txt) return;
  inp.value = '';

  var hist = document.getElementById('ai-history');
  if (!hist) return;

  isAiResponding = true;
  hist.innerHTML += '<div class="chat-bubble chat-me">' + escapeHtml(txt) + '</div>';
  hist.scrollTop = hist.scrollHeight;

  var tempId = 'ai-load-' + Date.now();
  hist.innerHTML += '<div class="chat-bubble chat-them" id="' + tempId + '" style="color:#00ffea; font-style:italic;">Memproses jawaban...</div>';
  hist.scrollTop = hist.scrollHeight;

  try {
    var res = await fetch('/api/ai-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: txt, history: zeraAiChatHistory })
    });
    var data = await res.json();
    var loadingEl = document.getElementById(tempId);
    if (loadingEl) loadingEl.remove();

    var replyText = data.reply || 'Halo! AI siap membantu Anda.';
    zeraAiChatHistory.push({ role: 'user', content: txt });
    zeraAiChatHistory.push({ role: 'assistant', content: replyText });
    if (zeraAiChatHistory.length > 8) zeraAiChatHistory.splice(0, 2);

    hist.innerHTML += '<div class="chat-bubble chat-them">' + escapeHtml(replyText) + '</div>';
  } catch(e) {
    var loadEl = document.getElementById(tempId);
    if (loadEl) loadEl.remove();
    hist.innerHTML += '<div class="chat-bubble chat-them" style="color:#ff3366;">Layanan AI sedang sibuk. Silakan coba lagi.</div>';
  }
  isAiResponding = false;
  hist.scrollTop = hist.scrollHeight;
}

// Sosmed Scraper Viewer (Instagram HD Profile & Media Downloader)
async function fetchSNS() {
  const target = document.getElementById('sns-url').value.trim();
  const resDiv = document.getElementById('sns-result');
  if (!target) return alert("Masukkan username Instagram!");
  resDiv.style.display = 'block';
  resDiv.innerHTML = "Memproses data profil Instagram...";
  try {
    const res = await fetch('/api/sns-pro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ target, mode: "profile" })
    });
    const jsonRes = await res.json();
    if (!jsonRes.success) throw new Error(jsonRes.error || "Data profil offline");
    const d = jsonRes.data;
    let profile = d.data || d.user || d;
    let username = profile.username || target;
    let fullName = profile.full_name || profile.name || "Unknown";
    let followers = profile.follower_count || profile.edge_followed_by?.count || profile.followers || "N/A";
    let following = profile.following_count || profile.edge_follow?.count || profile.following || "N/A";
    let bio = profile.biography || profile.bio || "-";
    let avatar = profile.profile_pic_url_hd || profile.profile_pic_url || profile.avatar_url || "";
    let isPrivate = profile.is_private !== undefined ? (profile.is_private ? "🔒 Diprivat" : "🔓 Publik") : "";
    
    let html = \`
      <div class="sns-card">
        <div class="sns-profile-header" style="display:flex; gap:12px; align-items:center;">
          \${avatar ? \`<img src="\${avatar}" style="width:65px; height:65px; border-radius:50%; border:1px solid #0f0; object-fit:cover;">\` : ''}
          <div>
            <b style="color:#0ff; font-size:15px;">@\${escapeHtml(username)}</b> (\${escapeHtml(fullName)}) <span style="font-size:10px; color:yellow;">\${isPrivate}</span>
            <div style="font-size:11px; color:#aaa; margin-top:3px;">
              <b>Followers:</b> \${followers} | <b>Following:</b> \${following}
            </div>
          </div>
        </div>
        <p style="font-size:11px; margin:10px 0; background:#000; padding:8px; border:1px solid #222;"><b>Bio:</b> \${escapeHtml(bio)}</p>
    \`;
    let posts = profile.edge_owner_to_timeline_media?.edges || profile.posts || profile.items || [];
    if (posts.length > 0) {
      html += \`<p style="color:#0ff; margin-top:10px; margin-bottom:5px; font-size:12px;"><b>Recent Media / Posts:</b></p><div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap:8px;">\`;
      posts.forEach(p => {
        let node = p.node || p;
        let imgUrl = node.display_url || node.thumbnail_src || node.image_url || "";
        let videoUrl = node.video_url || "";
        if (imgUrl) {
          html += \`<div style="border:1px solid #333; padding:4px; background:#000;">
            <img src="\${imgUrl}" style="width:100%; height:90px; object-fit:cover; display:block; margin-bottom:4px;">
            <a href="\${videoUrl || imgUrl}" target="_blank" download style="font-size:9px; background:#0f0; color:#000; display:block; text-align:center; padding:2px; font-weight:bold; text-decoration:none;">DOWNLOAD</a>
          </div>\`;
        }
      });
      html += \`</div>\`;
    } else {
      html += \`<div style="font-size:11px; color:gray; margin-top:5px;">Data profil berhasil dimuat</div>\`;
    }
    html += \`</div>\`;
    resDiv.innerHTML = html;
  } catch(e) {
    resDiv.innerHTML = \`<span style="color:red">Error: \${e.message}</span>\`;
  }
}

// Admin Zeralive
async function adminLogin() {
  const pass = document.getElementById('admin-pass-input').value;
  const res = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ pass }) });
  const data = await res.json();
  if (data.token) {
    adminToken = data.token;
    document.getElementById('admin-login-area').style.display = 'none';
    document.getElementById('admin-dashboard-area').style.display = 'block';
    fetchAdminUsers();
  } else alert("Password salah!");
}

// ============================================================================
// SYSTEM HARDWARE & IP INSPECTOR ENGINE
// ============================================================================
async function getSystemInfo() {
  let e = "";
  try { if (navigator.getBattery) { const t = await navigator.getBattery(), n = Math.round(100 * t.level), o = t.charging ? "⚡" : "BAT", r = n > 20 ? "lime" : "red"; e += \`<div>[\${o}] <span style="color:\${r}">\${n}%</span></div>\`; } } catch (e) {}
  try { const t = navigator.connection || navigator.mozConnection || navigator.webkitConnection; if (t) { const n = t.effectiveType ? t.effectiveType.toUpperCase() : "NET", o = t.downlink ? t.downlink : "?"; e += \`<div>[NET] <span style="color:cyan">\${n} (\${o}Mb)</span></div>\`; } } catch (e) {}
  try { const t = document.createElement("canvas"), n = t.getContext("webgl") || t.getContext("experimental-webgl"), o = n.getExtension("WEBGL_debug_renderer_info"); if (o) { let t = n.getParameter(o.UNMASKED_RENDERER_WEBGL); t = t.replace(/Angle \\(|\\)|Direct3D11 vs_5_0 ps_5_0/gi, "").split(",")[0]; e += \`<div>[GPU] <span style="color:orange; font-size:0.5rem;">\${t}</span></div>\`; } } catch (e) {}
  return e;
}

async function initVisuals() {
  const e = document.getElementById("sys-info"), t = /Android|iPhone|iPad/i.test(navigator.userAgent) ? "MOBILE" : "DESKTOP";
  if (!e) return;
  e.innerHTML = \`\${t}<br><span style="animation:pulse 1s infinite">SCANNING</span>\`;
  try {
    let ip = "HIDDEN IP";
    try { const res = await fetch("https://api.ipify.org?format=json"); const d = await res.json(); ip = d.ip; } catch(err) {}
    const sysHardware = await getSystemInfo();
    e.innerHTML = \`<b style="border-bottom:1px solid red; color:white;">\${t}</b><br><span style="color:#00ffea; text-shadow:0 0 8px #00ffea;">\${ip}</span><div style="margin-top:5px; font-size:0.6rem; text-align:left; border-left:2px solid #333; padding-left:8px;">\${sysHardware}</div>\`;
  } catch(err) { e.innerHTML = "ONLINE"; }
}

async function showUserLocation() {
  const e = document.getElementById("geo-toast"), t = document.getElementById("geo-text");
  if (!e || !t) return;
  const onGps = async pos => {
    try {
      const lat = pos.coords.latitude, lon = pos.coords.longitude;
      const res = await fetch(\`https://nominatim.openstreetmap.org/reverse?format=json&lat=\${lat}&lon=\${lon}\`);
      const data = await res.json();
      const city = data.address.city || data.address.town || data.address.county || "DETECTED";
      const state = data.address.state || "";
      const finalGPSLoc = \`\${city.toUpperCase()}, \${state.toUpperCase()}\`;
      t.innerHTML = \`LOKASI: <span style="color:lime;">\${finalGPSLoc}</span>\`;
      playZingSound();
      trackVisitor(finalGPSLoc);
    } catch(err) { t.innerHTML = "GPS READY"; trackVisitor(null); }
  };
  const onIpFallback = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const d = await res.json();
      t.innerHTML = \`DETECTED: <span style="color:white;">\${d.city ? d.city.toUpperCase() : 'ONLINE'}</span>\`;
    } catch(err) {}
    trackVisitor(null);
  };
  if (navigator.geolocation) {
    t.innerHTML = "SATELLITING...";
    e.classList.add("show");
    navigator.geolocation.getCurrentPosition(onGps, onIpFallback, { timeout: 8000 });
  } else { e.classList.add("show"); onIpFallback(); }
  setTimeout(() => e.classList.remove("show"), 5000);
}

// ============================================================================
// 5. BOOTSTRAP INITIALIZATION (FULL ACTIVATION)
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    const clock = document.getElementById('clock');
    if (clock) clock.innerText = 'TIME : ' + new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }) + ' WIB';
  }, 1000);

  // Auto Age & Track
  const birth = new Date(2006, 7, 7);
  setInterval(() => {
    const el = document.getElementById("website-age");
    if (el) el.innerText = \`AGE: \${Math.floor((new Date() - birth) / 31557600000)} YEARS\`;
  }, 1000);

  // Aktifkan Deteksi Hardware, IP & Muat Wallpaper Dimensi 1
  loadGatewayConfig();
  initVisuals();
  showUserLocation();

  // Inisialisasi Fitur Zeralive
  sendHeartbeat();
  setInterval(sendHeartbeat, 10000);
  initDraggable('floating-btn');
  initDraggable('ai-btn');

  if (sysToken && sysEmail) {
    const statusEl = document.getElementById('user-status');
    if (statusEl) statusEl.innerHTML = \`<span style="color:#0ff;">\${sysEmail}</span>\`;
    document.querySelectorAll('.auth-required span').forEach(el => { el.innerText = 'PROFILE UNLOCKED'; el.style.color = '#0f0'; });
    startInboxPolling();
  }

  checkSession();
  trackVisitor();
});

</script>
</body>
</html>`;

// ============================================================================
// 2. UNIFIED BACKEND WORKER ROUTER (API + MASTER SPA DELIVERY)
// ============================================================================
const ipRequestCache = new Map();
const failedAuthCooldownMap = new Map(); // Pelacak brute force IP untuk login cooldown

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const m = request.method;
    const clientIp = request.headers.get("cf-connecting-ip") || "unknown";

    // ----------------------------------------------------------------------
    // 🛡️ SECURITY SHIELD & ANTI-HACKER PROTECTION
    // ----------------------------------------------------------------------
    // 1. Rate Limiting Protection (Maks 120 req / 10 detik per IP)
    const now = Date.now();
    if (ipRequestCache.size > 500) ipRequestCache.clear(); // Bersihkan memori berkala
    const ipData = ipRequestCache.get(clientIp) || { count: 0, time: now };
    if (now - ipData.time > 10000) {
      ipData.count = 1;
      ipData.time = now;
    } else {
      ipData.count++;
      if (ipData.count > 120) {
        return new Response(JSON.stringify({ error: "SHIELD ACTIVATED: Rate limit exceeded." }), {
          status: 429,
          headers: { "Content-Type": "application/json", "Retry-After": "10" }
        });
      }
    }
    ipRequestCache.set(clientIp, ipData);

    // 2. WAF & Malicious URL / Query Scanner
    const rawUrl = request.url.toLowerCase();
    const maliciousPatterns = [
      "../", "/etc/passwd", "eval(", "base64_decode", "<script", "onload=",
      "union+select", "union%20select", "concat(", ".env", "wp-config", ".git"
    ];
    if (maliciousPatterns.some(pat => rawUrl.includes(pat))) {
      return new Response(JSON.stringify({ error: "BLOCKED BY FIREWALL: Malicious query rejected." }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Routing 3 KV Namespaces Terpisah dengan Prioritas Binding Langsung (CORE, DATA, LOGS)
    const fallbackKv = env.NEXUS_KV || env.KV || env.DB || env.DATABASE || null;
    const kvCore = env.KV_CORE || env.CORE || fallbackKv;
    const kvData = env.KV_DATA || env.DATA || fallbackKv;
    const kvLogs = env.KV_LOGS || env.LOGS || fallbackKv;
    const origin = request.headers.get("Origin") || "*";

    const headers = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    };

    if (m === "OPTIONS") return new Response(null, { headers });

    const json = (data, status = 200) => new Response(JSON.stringify(data), {
      status,
      headers: { ...headers, "Content-Type": "application/json; charset=utf-8" }
    });

    const authHeaderRaw = request.headers.get("Authorization");
    const bridgeSecret = env.INTERNAL_BRIDGE_SECRET;
    const activeAdminToken = kvCore ? await kvCore.get("active_admin_session") : null;
    const isUchihaAdmin = authHeaderRaw === bridgeSecret || 
                          (activeAdminToken && authHeaderRaw === ("Bearer " + activeAdminToken));

    try {
    // ----------------------------------------------------------------------
      // 🚀 GITHUB STORAGE FILE UPLOADER ENGINE (AUTO-CLEAN QUOTES & BRANCH DETECT)
      // ----------------------------------------------------------------------
      if (url.pathname === "/api/upload/github" && m === "POST") {
        try {
          const body = await request.json();
          const { base64Data, fileName } = body;
          if (!base64Data || !fileName) return json({ error: "Data file wajib disertakan." }, 400);

          // Fungsi pembersih tanda kutip liar dan escape karakter dari KV
          const cleanVal = (val, def = "") => {
            if (!val) return def;
            return String(val).replace(/^["'\\/\s]+|["'\\/\s]+$/g, "").trim() || def;
          };

          const savedToken = await kvCore?.get("config_github_token");
          const rawToken = env.GITHUB_TOKEN;
          const token = cleanVal(rawToken).replace(/^Bearer\s+/i, "").replace(/^token\s+/i, "").trim();

          if (!token) {
            return json({ error: "Kunci GITHUB_TOKEN belum diatur! Pasang Secret GITHUB_TOKEN di Cloudflare Dashboard atau masukkan di Tab 3 Console Admin." }, 400);
          }

          const savedOwner = await kvCore?.get("config_github_owner");
          const savedRepo = await kvCore?.get("config_github_repo");

          // Otomatis memurnikan 'anyezra' dari kutip ganda ""\"anyezra\"""
          const owner = cleanVal(env.GITHUB_OWNER || savedOwner, "anyezra");
          const repo = cleanVal(env.GITHUB_REPO || savedRepo, "anyezra");
          const initialBranch = cleanVal(env.GITHUB_BRANCH, "main");
          const folder = cleanVal(env.GITHUB_FOLDER, "vault");

          const cleanBase64 = base64Data.replace(/^data:.*?;base64,/, "");
          const cleanFileName = `${Date.now()}_${fileName.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
          const filePath = `${folder}/${cleanFileName}`;

          // Percobaan 1: Mengunggah ke branch utama ('main')
          let ghRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
            method: "PUT",
            headers: {
              "Authorization": `Bearer ${token}`,
              "User-Agent": "Nexus-Enterprise-Worker",
              "Content-Type": "application/json",
              "Accept": "application/vnd.github.v3+json"
            },
            body: JSON.stringify({
              message: `Upload file via Anyezra: ${cleanFileName}`,
              content: cleanBase64,
              branch: initialBranch
            })
          });

          let usedBranch = initialBranch;

          // Percobaan 2: Jika 'main' return 404 (Not Found), coba branch 'master'
          if (!ghRes.ok && ghRes.status === 404 && initialBranch === "main") {
            const fallbackMaster = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
              method: "PUT",
              headers: {
                "Authorization": `Bearer ${token}`,
                "User-Agent": "Nexus-Enterprise-Worker",
                "Content-Type": "application/json",
                "Accept": "application/vnd.github.v3+json"
              },
              body: JSON.stringify({
                message: `Upload file via Anyezra: ${cleanFileName}`,
                content: cleanBase64,
                branch: "master"
              })
            });
            if (fallbackMaster.ok) {
              ghRes = fallbackMaster;
              usedBranch = "master";
            }
          }

          if (!ghRes.ok) {
            const errObj = await ghRes.json().catch(() => ({}));
            const ghMsg = errObj.message || "Gagal upload";
            if (ghRes.status === 404) {
              return json({ 
                error: `GitHub 404 Not Found: Repositori "${owner}/${repo}" tidak ditemukan atau Token GitHub tidak memiliki izin 'repo' / 'contents:write'. Pastikan repo tersebut ada di akun GitHub Anda.` 
              }, 404);
            }
            return json({ error: `GitHub API Error (${ghRes.status}): ${ghMsg}` }, ghRes.status);
          }

          const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${usedBranch}/${filePath}`;
          return json({ success: true, url: rawUrl, branch: usedBranch }, 201);
        } catch(err) {
          return json({ error: "Upload Exception: " + err.message }, 500);
        }
      }


      // ----------------------------------------------------------------------
      // A. API UNIVERSALEZRA (GATEWAY & SITE CONFIG -> KV_CORE & KV_DATA)
      // ----------------------------------------------------------------------
      if (url.pathname === "/api/site-config") {
        if (m === "GET") {
          let config = (kvCore ? await kvCore.get("dynamic_site_config", { type: "json" }) : null) || 
                       (kvData ? await kvData.get("dynamic_site_config", { type: "json" }) : null) || {
            bgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
            bgType: "image",
            title: "UNIVERSALEZRA"
          };
          return json(config);
        }
        if (m === "POST") {
          if (!isUchihaAdmin) return json({ error: "Unauthorized: Perlu Login Uchiha!" }, 401);
          const body = await request.json();
          const newConfig = { 
            bgUrl: body.bgUrl || "", 
            bgType: body.bgType || (body.bgUrl && body.bgUrl.match(/\.(mp4|webm|mov|ogg)$/i) ? "video" : "image"),
            title: body.title || "UNIVERSALEZRA" 
          };
          if (kvCore) await kvCore.put("dynamic_site_config", JSON.stringify(newConfig));
          if (kvData) await kvData.put("dynamic_site_config", JSON.stringify(newConfig));
          return json({ success: true, config: newConfig });
        }
      }

      // ----------------------------------------------------------------------
      // B. API ANYEZRA UCHIHA (VAULT & MEMORY -> KV_DATA | CHAT, LOGS -> KV_LOGS)
      // ----------------------------------------------------------------------
      if (url.pathname === "/auth" && m === "POST") {
        const now = Date.now();
        const lockRecord = failedAuthCooldownMap.get(clientIp);

        // Periksa apakah IP sedang dalam masa penalti cooldown 5 detik
        if (lockRecord && now < lockRecord.lockedUntil) {
          const waitSec = Math.ceil((lockRecord.lockedUntil - now) / 1000);
          return json({ success: false, error: "Tunggu " + waitSec + " detik.", cooldown: waitSec }, 429);
        }

        const b = await request.json().catch(() => ({}));
        const masterPass = env.MASTER_PASSCODE;
        const ok = b.pass === masterPass || b.answer === masterPass;

        if (ok) {
          failedAuthCooldownMap.delete(clientIp); // Reset jika berhasil login
          const adminSessionToken = "UCHIHA-" + crypto.randomUUID();
          if (kvCore) await kvCore.put("active_admin_session", adminSessionToken, { expirationTtl: 86400 });
          return json({ success: true, token: adminSessionToken });
        } else {
          // Penalti kegagalan: Kunci IP selama 5 detik (atau 60 detik jika sudah > 5x salah)
          const currentFails = (lockRecord ? lockRecord.count : 0) + 1;
          const penaltyMs = currentFails >= 5 ? 60000 : 5000;
          failedAuthCooldownMap.set(clientIp, { count: currentFails, lockedUntil: now + penaltyMs });
          return json({ success: false, error: "Kredensial salah! tunggu" + (penaltyMs / 1000) + " detik.", cooldown: penaltyMs / 1000 }, 401);
        }
      }

      if (url.pathname === "/api/chat") {
        let chats = (kvLogs ? await kvLogs.get("chats", { type: "json" }) : null) || [];
        if (m === "GET") return json(chats);
        if (m === "POST") {
          const b = await request.json();
          const timeJakarta = new Date().toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta" });
          const n = { id: crypto.randomUUID(), text: b.text, date: timeJakarta, admin: b.admin || false };
          chats.push(n);
          if (chats.length > 50) chats.shift();
          if (kvLogs) await kvLogs.put("chats", JSON.stringify(chats));
          return json(n);
        }
        if (m === "PUT") {
          if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);
          const b = await request.json();
          const idx = chats.findIndex(x => x.id === b.id);
          if (idx !== -1) {
            chats[idx].text = b.text;
            if (kvLogs) await kvLogs.put("chats", JSON.stringify(chats));
          }
          return json({ success: true });
        }
        if (m === "DELETE") {
          if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);
          const b = await request.json();
          chats = chats.filter(x => x.id !== b.id);
          if (kvLogs) await kvLogs.put("chats", JSON.stringify(chats));
          return json({ success: true });
        }
      }

      if (url.pathname === "/api/vault") {
        let v = (kvData ? await kvData.get("vault_items", { type: "json" }) : null) || [];
        if (m === "GET") return json(v);
        if (m === "POST") {
          if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);
          const b = await request.json();
          const newItem = {
            id: crypto.randomUUID(),
            title: b.title,
            description: b.description || "",
            filename: b.filename || b.title,
            fileUrl: b.content,
            fileType: b.type || "",
            timestamp: Date.now(),
            date: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }) + " WIB"
          };
          v.unshift(newItem);
          if (v.length > 25) v.pop();
          if (kvData) await kvData.put("vault_items", JSON.stringify(v));
          return json(newItem);
        }
        if (m === "PUT") {
          if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);
          const b = await request.json();
          const idx = v.findIndex(x => x.id === b.id);
          if (idx !== -1) {
            v[idx].title = b.title;
            v[idx].description = b.description;
            if (kvData) await kvData.put("vault_items", JSON.stringify(v));
          }
          return json({ success: true });
        }
        if (m === "DELETE") {
          if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);
          const b = await request.json();
          v = v.filter(x => x.id !== b.id);
          if (kvData) await kvData.put("vault_items", JSON.stringify(v));
          return json({ success: true });
        }
      }

      if (url.pathname === "/api/ezra-memory") {
        let mem = (kvData ? await kvData.get("ezra_memory_items", { type: "json" }) : null) || [];
        if (m === "GET") {
          if (!isUchihaAdmin) return json([]);
          return json(mem);
        }
        if (m === "POST") {
          if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);
          const b = await request.json();
          const newItem = { 
            id: crypto.randomUUID(), 
            title: b.title, 
            description: b.description || "",
            filename: b.filename || b.title,
            fileUrl: b.content, 
            fileType: b.type || "",
            timestamp: Date.now(),
            date: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }) + " WIB"
          };
          mem.unshift(newItem);
          if (mem.length > 25) mem.pop();
          if (kvData) await kvData.put("ezra_memory_items", JSON.stringify(mem));
          return json(newItem);
        }
        if (m === "PUT") {
          if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);
          const b = await request.json();
          const idx = mem.findIndex(x => x.id === b.id);
          if (idx !== -1) {
            mem[idx].title = b.title;
            mem[idx].description = b.description;
            if (kvData) await kvData.put("ezra_memory_items", JSON.stringify(mem));
          }
          return json({ success: true });
        }
        if (m === "DELETE") {
          if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);
          const b = await request.json();
          mem = mem.filter(x => x.id !== b.id);
          if (kvData) await kvData.put("ezra_memory_items", JSON.stringify(mem));
          return json({ success: true });
        }
      }

      if (url.pathname === "/api/trading") {
        let w = (kvLogs ? await kvLogs.get("trading_wallet", { type: "json" }) : null) || { idr: 100000000, btc: 0.5, history: [] };
        let cur = 1580000000;
        try {
          const p = await (await fetch("https://indodax.com/api/summaries", { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } })).json();
          cur = parseInt(p.tickers?.btc_idr?.last || cur);
        } catch(e) {}

        if (m === "GET") return json({ ...w, currentPrice: cur });
        if (m === "POST") {
          const b = await request.json();
          const tot = b.amount * cur;
          if (b.action === "buy" && w.idr >= tot) {
            w.idr -= tot; w.btc += b.amount;
            w.history.unshift({ type: "BUY", amount: b.amount, time: new Date().toLocaleTimeString("id-ID") });
          } else if (b.action === "sell" && w.btc >= b.amount) {
            w.idr += tot; w.btc -= b.amount;
            w.history.unshift({ type: "SELL", amount: b.amount, time: new Date().toLocaleTimeString("id-ID") });
          }
          if (w.history.length > 20) w.history.pop();
          if (kvLogs) await kvLogs.put("trading_wallet", JSON.stringify(w));
          return json(w);
        }
      }

      if (url.pathname === "/api/visitors") {
        let vData = (kvLogs ? await kvLogs.get("visitor_data", { type: "json" }) : null) || { count: 0, logs: [] };
        if (m === "POST") {
          const b = await request.json().catch(() => ({}));
          const clientIp = request.headers.get("cf-connecting-ip") || "Unknown IP";
          const cf = request.cf || {};
          vData.count += 1;
          vData.logs.unshift({
            ip: clientIp,
            time: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }),
            location: b.accurateLocation || (cf.city ? `${cf.city}, ${cf.region || cf.country}` : "Indonesia"),
            isp: cf.asOrganization || b.isp || "Telekomunikasi Seluler",
            device: b.device || "Desktop PC"
          });
          vData.logs = vData.logs.slice(0, 100);
          if (kvLogs) await kvLogs.put("visitor_data", JSON.stringify(vData));
          return json({ success: true });
        }
        if (m === "GET") {
          if (!isUchihaAdmin) return json({ error: "ACCESS DENIED", count: 0, logs: [] }, 403);
          let currentData = vData;
          try {
            const resCorp = await fetch("https://corp.anyezra.workers.dev/api/visitors", {
              headers: { "Authorization": bridgeSecret, "User-Agent": "Nexus-Enterprise-Worker" }
            });
            if (resCorp.ok) {
              const dCorp = await resCorp.json();
              if (dCorp && Array.isArray(dCorp.logs) && dCorp.logs.length > 0) {
                currentData = dCorp;
              }
            }
          } catch(e) {}
          return json(currentData);
        }
        if (m === "DELETE") {
          if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);
          const emptyLogs = { count: 0, logs: [] };
          const allLogKvs = [kvLogs, env.LOGS, env.KV_LOGS].filter(Boolean);
          for (const kv of allLogKvs) {
            try {
              await kv.put("visitor_data", JSON.stringify(emptyLogs));
            } catch(e) {}
          }
          return json({ success: true, message: "Semua log visitor berhasil direset." });
        }
      }

      // ----------------------------------------------------------------------
      // C. API ZERALIVECORP (GOOGLE OAUTH, TERMUX GPS, WORKSPACE, DM)
      // ----------------------------------------------------------------------
      // 1. ONLINE HEARTBEAT COUNTER (-> KV_LOGS)
      if (url.pathname === "/api/heartbeat" && m === "POST") {
        const body = await request.json().catch(() => ({}));
        const bId = body.id || "Unknown";
        const now = Date.now();
        let onlineData = (kvLogs ? await kvLogs.get("sys_online_users", { type: "json" }) : null) || {};
        onlineData[bId] = now;
        let activeCount = 0;
        for (let key in onlineData) {
          if (now - onlineData[key] > 30000) delete onlineData[key];
          else activeCount++;
        }
        if (kvLogs) await kvLogs.put("sys_online_users", JSON.stringify(onlineData));
        return json({ onlineCount: activeCount });
      }

      // 2. LIVE LOCATION TRACKING (-> KV_LOGS)
      if (url.pathname === "/api/liveloc") {
        if (m === "POST") {
          const { lat, lng } = await request.json();
          const locPayload = {
            lat: String(lat),
            lng: String(lng),
            time: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })
          };
          if (kvLogs) await kvLogs.put("admin_live_loc_termux", JSON.stringify(locPayload));
          return json({ success: true, message: "GPS Location Updated via Termux" });
        }
        if (m === "GET") {
          const loc = (kvLogs ? await kvLogs.get("admin_live_loc_termux", { type: "json" }) : null) || { lat: null, lng: null, time: "Offline" };
          return json(loc);
        }
      }

      // 3. GOOGLE OAUTH AUTHENTICATION (-> KV_CORE)
      if (url.pathname === "/api/auth/google" && m === "POST") {
        const { credential } = await request.json();
        const googleRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`);
        if (!googleRes.ok) return json({ error: "Token Google tidak valid." }, 401);
        const googleData = await googleRes.json();
        const email = googleData.email;
        let users = (kvCore ? await kvCore.get("business_users", { type: "json" }) : null) || {};
        if (!users[email]) {
          const token = crypto.randomUUID();
          const folderId = "FLD-" + Math.random().toString(36).substr(2, 8).toUpperCase();
          users[email] = { token, folderId, type: "google", pass: null, avatar: googleData.picture || "" };
          if (kvCore) await kvCore.put("business_users", JSON.stringify(users));
          if (kvData) await kvData.put(`workspace_${folderId}`, JSON.stringify({ posts: [], files: [] }));
        }
        const user = users[email];
        return json({
          success: true,
          token: user.token,
          user: { email, folderId: user.folderId, avatar: user.avatar || "" },
          needsPassword: user.pass === null
        });
      }

      // 4. SET PASSWORD & UPDATE PROFILE AVATAR (-> KV_CORE - HANYA SIMPAN URL GITHUB)
      if (url.pathname === "/api/auth/set-password" && m === "POST") {
        const { email, token, newPass } = await request.json();
        let users = (kvCore ? await kvCore.get("business_users", { type: "json" }) : null) || {};
        if (!users[email] || users[email].token !== token) return json({ error: "Unauthorized" }, 401);
        users[email].pass = newPass;
        if (kvCore) await kvCore.put("business_users", JSON.stringify(users));
        return json({ success: true });
      }

      if (url.pathname === "/api/users/profile" && m === "POST") {
        const token = (request.headers.get("Authorization") || "").replace("Bearer ", "");
        let users = (kvCore ? await kvCore.get("business_users", { type: "json" }) : null) || {};
        let userEntry = Object.entries(users).find(([_, u]) => u.token === token);
        if (!userEntry) return json({ error: "Unauthorized" }, 401);
        const { avatarUrl } = await request.json();
        users[userEntry[0]].avatar = avatarUrl;
        if (kvCore) await kvCore.put("business_users", JSON.stringify(users));
        return json({ success: true, avatar: avatarUrl });
      }

      // 5. INDODAX TICKER
      if (url.pathname === "/api/indodax" && m === "GET") {
        try {
          const d = await (await fetch("https://indodax.com/api/summaries")).json();
          return json({ btc_idr: d.tickers?.btc_idr?.last || "1580000000" });
        } catch(e) {
          return json({ btc_idr: "1580000000" });
        }
      }

      // 6. INBOX DM THREADS (-> KV_DATA)
      if (url.pathname === "/api/dm/threads" && m === "GET") {
        const token = (request.headers.get("Authorization") || "").replace("Bearer ", "");
        let users = (kvCore ? await kvCore.get("business_users", { type: "json" }) : null) || {};
        let userEntry = Object.entries(users).find(([_, u]) => u.token === token);
        if (!userEntry) return json({ error: "Unauthorized" }, 401);
        let inboxState = (kvData ? await kvData.get(`inbox_${userEntry[0]}`, { type: "json" }) : null) || {};
        let threads = Object.keys(inboxState).map(partner => ({
          partner,
          lastMessage: inboxState[partner].lastMessage,
          time: inboxState[partner].time,
          unreadCount: inboxState[partner].unread || 0
        }));
        return json({ threads });
      }

      // 7. PUBLIC ANNOUNCEMENTS FEED (-> KV_CORE & KV_DATA)
      if (url.pathname === "/api/public/announcements") {
        let users = (kvCore ? await kvCore.get("business_users", { type: "json" }) : null) || {};
        let posts = [];
        for (let email in users) {
          let ws = (kvData ? await kvData.get(`workspace_${users[email].folderId}`, { type: "json" }) : null) || { posts: [] };
          (ws.posts || []).forEach(p => posts.push({ 
            ...p, 
            author: email, 
            authorAvatar: users[email].avatar || "" 
          }));
        }
        posts.sort((a, b) => (b.id || 0) - (a.id || 0));
        return json(posts.slice(0, 10));
      }

      // 8. LOCAL AUTHENTICATION (-> KV_CORE) DENGAN HASHING SHA-256
      if (url.pathname === "/api/auth/local" && m === "POST") {
        const { action, email, pass } = await request.json();
        const hashPassLocal = async (p) => {
          const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(p + "anyezra-salt-2026"));
          return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
        };

        let users = (kvCore ? await kvCore.get("business_users", { type: "json" }) : null) || {};
        if (action === "signup") {
          if (users[email]) return json({ error: "Akun sudah terdaftar." }, 400);
          const token = crypto.randomUUID();
          const folderId = "FLD-" + Math.random().toString(36).substr(2, 6).toUpperCase();
          const securePassHash = await hashPassLocal(pass);
          users[email] = { passHash: securePassHash, token, folderId, avatar: "" };
          if (kvCore) await kvCore.put("business_users", JSON.stringify(users));
          if (kvData) await kvData.put(`workspace_${folderId}`, JSON.stringify({ posts: [], files: [] }));
          return json({ success: true, token, user: { email, folderId, avatar: "" } });
        }
        if (action === "login") {
          const now = Date.now();
          const cleanEmail = (email || '').toLowerCase().trim();
          const authKey = clientIp + ":" + cleanEmail;
          const lockRecord = failedAuthCooldownMap.get(authKey);

          // Periksa apakah akun/IP sedang dalam masa jeda penalti
          if (lockRecord && now < lockRecord.lockedUntil) {
            const waitSec = Math.ceil((lockRecord.lockedUntil - now) / 1000);
            return json({ error: "Terlalu banyak percobaan gagal. Tunggu " + waitSec + " detik.", cooldown: waitSec }, 429);
          }

          const u = users[cleanEmail] || users[email];
          const inputHash = await hashPassLocal(pass);
          const isValidPass = u && (u.passHash ? u.passHash === inputHash : u.pass === pass);

          if (!u || !isValidPass) {
            const currentFails = (lockRecord ? lockRecord.count : 0) + 1;
            const penaltyMs = currentFails >= 5 ? 60000 : 5000;
            failedAuthCooldownMap.set(authKey, { count: currentFails, lockedUntil: now + penaltyMs });
            return json({ error: "Kredensial salah! Tunggu" + (penaltyMs / 1000) + " detik.", cooldown: penaltyMs / 1000 }, 401);
          }

          // Otomatis upgrade akun lama ke format terenkripsi jika sebelumnya masih plaintext
          if (!u.passHash && u.pass) {
            u.passHash = inputHash;
            delete u.pass;
            if (kvCore) await kvCore.put("business_users", JSON.stringify(users));
          }

          failedAuthCooldownMap.delete(authKey); // Bersihkan riwayat gagal jika berhasil login
          return json({ success: true, token: u.token, user: { email: cleanEmail, folderId: u.folderId, avatar: u.avatar || "" } });
        }
      }

      // 9. WORKSPACE DATA, POST, FILE, EDIT & DELETE (-> KV_DATA - HANYA SIMPAN URL GITHUB)
      if (url.pathname.includes("/api/workspace/")) {
        const token = (request.headers.get("Authorization") || "").replace("Bearer ", "");
        let users = (kvCore ? await kvCore.get("business_users", { type: "json" }) : null) || {};
        let user = Object.values(users).find(u => u.token === token);
        if (!user) return json({ error: "Unauthorized" }, 401);

        let ws = (kvData ? await kvData.get(`workspace_${user.folderId}`, { type: "json" }) : null) || { posts: [], files: [] };
        const timeNow = new Date().toLocaleTimeString("id-ID");

        const exactFullTime = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }) + " WIB";

        if (m === "GET") return json({ ...ws, avatar: user.avatar || "" });
        if (m === "POST" && url.pathname.includes("/status")) {
          const { text } = await request.json();
          ws.posts.unshift({ 
            id: Date.now(), 
            text, 
            timestamp: Date.now(),
            time: exactFullTime 
          });
          if (kvData) await kvData.put(`workspace_${user.folderId}`, JSON.stringify(ws));
          return json(ws);
        }
        if (m === "POST" && url.pathname.includes("/file")) {
          const { fileUrl, fileType, fileName, title, description } = await request.json();
          ws.files.unshift({ 
            id: Date.now(), 
            data: fileUrl, 
            type: fileType, 
            name: fileName, 
            title: title || fileName, 
            description: description || "", 
            timestamp: Date.now(),
            time: exactFullTime 
          });
          if (ws.files.length > 20) ws.files.pop();
          if (kvData) await kvData.put(`workspace_${user.folderId}`, JSON.stringify(ws));
          return json({ success: true, data: ws });
        }
        if ((m === "PUT" || m === "DELETE") && url.pathname.includes("/item")) {
          const { itemType, id, text, title, description } = await request.json();
          const targetId = Number(id);
          const editTime = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }) + " WIB";
          const editTimestamp = Date.now();

          if (m === "DELETE") {
            if (itemType === "post") ws.posts = ws.posts.filter(p => p.id !== targetId);
            if (itemType === "file") ws.files = ws.files.filter(f => f.id !== targetId);
          }
          if (m === "PUT") {
            if (itemType === "post") {
              let idx = ws.posts.findIndex(p => p.id === targetId);
              if (idx !== -1) {
                ws.posts[idx].text = text;
                ws.posts[idx].updatedAt = editTimestamp;
                ws.posts[idx].editedTime = editTime;
              }
            }
            if (itemType === "file") {
              let idx = ws.files.findIndex(f => f.id === targetId);
              if (idx !== -1) {
                ws.files[idx].title = title;
                ws.files[idx].description = description;
                ws.files[idx].updatedAt = editTimestamp;
                ws.files[idx].editedTime = editTime;
              }
            }
          }
          if (kvData) await kvData.put(`workspace_${user.folderId}`, JSON.stringify(ws));
          return json({ success: true, data: ws });
        }
      }

      if (url.pathname === "/api/users/search") {
        const q = (url.searchParams.get("q") || "").toLowerCase();
        let users = (kvCore ? await kvCore.get("business_users", { type: "json" }) : null) || {};
        let res = Object.keys(users)
          .filter(e => e.toLowerCase().includes(q))
          .map(email => ({
            email,
            avatar: users[email].avatar || ""
          }));
        return json(res);
      }

      if (url.pathname === "/api/dm") {
        const token = (request.headers.get("Authorization") || "").replace("Bearer ", "");
        let users = (kvCore ? await kvCore.get("business_users", { type: "json" }) : null) || {};
        let userEntry = Object.entries(users).find(([_, u]) => u.token === token);
        if (!userEntry) return json({ error: "Unauthorized" }, 401);
        const myEmail = userEntry[0];

        if (m === "POST") {
          const { target, text } = await request.json();
          const timeNow = new Date().toLocaleTimeString("id-ID");
          const pair = [myEmail, target].sort().join("_");
          let chat = (kvData ? await kvData.get(`dm_${pair}`, { type: "json" }) : null) || [];
          chat.push({ from: myEmail, text, time: timeNow });
          if (kvData) {
            await kvData.put(`dm_${pair}`, JSON.stringify(chat));
            
            // Update Inbox Penerima
            let targetInbox = (await kvData.get(`inbox_${target}`, { type: "json" })) || {};
            targetInbox[myEmail] = {
              lastMessage: text,
              time: timeNow,
              unread: (targetInbox[myEmail]?.unread || 0) + 1
            };
            await kvData.put(`inbox_${target}`, JSON.stringify(targetInbox));

            // Update Inbox Pengirim
            let myInbox = (await kvData.get(`inbox_${myEmail}`, { type: "json" })) || {};
            myInbox[target] = { lastMessage: text, time: timeNow, unread: 0 };
            await kvData.put(`inbox_${myEmail}`, JSON.stringify(myInbox));
          }
          return json(chat);
        }
        if (m === "GET") {
          const target = url.searchParams.get("target");
          const pair = [myEmail, target].sort().join("_");
          let chat = (kvData ? await kvData.get(`dm_${pair}`, { type: "json" }) : null) || [];
          
          if (kvData && target) {
            let myInbox = (await kvData.get(`inbox_${myEmail}`, { type: "json" })) || {};
            if (myInbox[target]) {
              myInbox[target].unread = 0;
              await kvData.put(`inbox_${myEmail}`, JSON.stringify(myInbox));
            }
          }
          return json(chat);
        }
      }

      // ROUTE AI ASSISTANT (IDENTIK DENGAN BACKEND SUBULUSSALAM CITY + DUAL FAILOVER)
      // ROUTE AI ASSISTANT ZERALIVE CORP (CASCADE MODELS + SINKRON CORP)
      if ((url.pathname === "/api/ai-chat" || url.pathname === "/api/ai/chat") && m === "POST") {
        try {
          const body = await request.json().catch(() => ({}));
          const userMessage = body.message;

          if (!userMessage || !userMessage.trim()) {
            return json({ success: false, reply: "Pesan teks tidak boleh kosong." }, 400);
          }

          const cleanVal = (val, def = "") => {
            if (!val) return def;
            return String(val).replace(/^["'\\/\s]+|["'\\/\s]+$/g, "").trim() || def;
          };

          const savedAiKey = await kvCore?.get("config_grok_api_key");
          const activeKey = cleanVal(env.GROQ_API_KEY || env.GROK_API_KEY);

          let apiUrl = "https://api.groq.com/openai/v1/chat/completions";
          let candidateModels = [
            "llama-3.3-70b-versatile",
            "llama-3.1-8b-instant",
            "openai/gpt-oss-120b",
            "openai/gpt-oss-20b"
          ];

          if (activeKey.startsWith("xai-")) {
            apiUrl = "https://api.x.ai/v1/chat/completions";
            candidateModels = ["grok-2-latest", "grok-beta"];
          } else if (activeKey.startsWith("sk-")) {
            apiUrl = "https://api.openai.com/v1/chat/completions";
            candidateModels = ["gpt-4o-mini", "gpt-3.5-turbo"];
          }

          const messagesPayload = [
            { role: "system", content: "Anda adalah Asisten AI resmi Zeralive Corp dan Kota Subulussalam. Jawab dengan ramah, cerdas, dan ringkas dalam Bahasa Indonesia." }
          ];

          if (Array.isArray(body.history)) {
            body.history.slice(-6).forEach(h => {
              if (h.role && h.content) messagesPayload.push({ role: h.role, content: h.content });
            });
          }
          messagesPayload.push({ role: "user", content: userMessage.trim() });

          let lastErrorDetails = "";

          // Percobaan loop model
          for (const modelId of candidateModels) {
            try {
              const aiRes = await fetch(apiUrl, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${activeKey}`
                },
                body: JSON.stringify({
                  model: modelId,
                  messages: messagesPayload,
                  temperature: 0.7,
                  max_tokens: 1024
                })
              });

              if (aiRes.ok) {
                const aiData = await aiRes.json();
                const replyText = aiData.choices?.[0]?.message?.content;
                if (replyText) return json({ success: true, reply: replyText, model: modelId }, 200);
              } else {
                const errBody = await aiRes.text();
                lastErrorDetails = `HTTP ${aiRes.status}: ${errBody.slice(0, 150)}`;
              }
            } catch (errReq) {
              lastErrorDetails = errReq.message;
            }
          }

          // Jika local gagal, teruskan ke endpoint live Subulussalam City
          try {
            const corpRes = await fetch("https://corp.anyezra.workers.dev/api/ai/chat", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ message: userMessage.trim(), history: body.history || [] })
            });
            if (corpRes.ok) {
              const corpData = await corpRes.json();
              if (corpData.reply) return json({ success: true, reply: corpData.reply }, 200);
            }
          } catch(errCorp) {}

          return json({ success: true, reply: `[AI Service Alert] ${lastErrorDetails}. Periksa API Key Groq Anda di Menu Admin Tab 3.` }, 200);
        } catch (err) {
          return json({ success: true, reply: "Gangguan koneksi AI: " + err.message }, 200);
        }
      }


      if (url.pathname.includes("/api/sns-pro") && m === "POST") {
        const { target, mode } = await request.json();
        const savedRapidKey = await kvCore?.get("config_rapidapi_key");
        const savedRapidHost = await kvCore?.get("config_rapidapi_host");
        const RAPIDAPI_KEY = env.RAPIDAPI_KEY;
        const RAPIDAPI_HOST = env.RAPIDAPI_HOST;
        let API_ENDPOINT_URL = `https://${RAPIDAPI_HOST}/profile?username=${encodeURIComponent(target)}`;
        if (mode === "search") {
          API_ENDPOINT_URL = `https://${RAPIDAPI_HOST}/search?query=${encodeURIComponent(target)}`;
        }
        try {
          const fetchRes = await fetch(API_ENDPOINT_URL, { 
            headers: { 
              "x-rapidapi-key": RAPIDAPI_KEY, 
              "x-rapidapi-host": RAPIDAPI_HOST,
              "Content-Type": "application/json"
            } 
          });
          if (!fetchRes.ok) {
            const fallbackRes = await fetch(`https://${RAPIDAPI_HOST}/search?query=${encodeURIComponent(target)}`, { 
              headers: { "x-rapidapi-key": RAPIDAPI_KEY, "x-rapidapi-host": RAPIDAPI_HOST, "Content-Type": "application/json" } 
            });
            const apiData = await fallbackRes.json();
            return json({ success: true, data: apiData });
          }
          const apiData = await fetchRes.json();
          return json({ success: true, data: apiData });
        } catch(e) {
          return json({ success: false, error: "OFFLINE: " + e.message }, 500);
        }
      }

      if (url.pathname === "/api/admin/login" && m === "POST") {
        const { pass } = await request.json();
        const consoleSecret = env.ADMIN_CONSOLE_PASS;
        if (pass === consoleSecret) return json({ token: "MASTER-" + crypto.randomUUID() });
        return json({ error: "Password Salah" }, 401);
      }

      if (url.pathname === "/api/admin/users") {
        if (!isUchihaAdmin) return json({ error: "Unauthorized Admin" }, 401);
        let zeraUsers = (kvCore ? await kvCore.get("business_users", { type: "json" }) : null) || {};
        let subUsers = [];

        // Tarik data pengguna riil yang terdaftar di Subulussalam City
        try {
          const corpRes = await fetch("https://corp.anyezra.workers.dev/api/sosmed/users", {
            headers: {
              "Authorization": bridgeSecret,
              "User-Agent": "Nexus-Enterprise-Worker"
            }
          });
          if (corpRes.ok) {
            const corpData = await corpRes.json();
            if (corpData.success && Array.isArray(corpData.data)) {
              subUsers = corpData.data;
            }
          }
        } catch(e) {}

        if (subUsers.length === 0) {
          subUsers = (kvCore ? await kvCore.get("users_registry", { type: "json" }) : null) || (kvData ? await kvData.get("users_registry", { type: "json" }) : null) || [];
        }
        
        let combined = [];
        
        // 1. Masukkan User Zeralivecorp
        for (let email in zeraUsers) {
          combined.push({
            source: "Zeralivecorp",
            email: email,
            username: email.split("@")[0],
            name: email,
            folderId: zeraUsers[email].folderId || "-",
            avatar: zeraUsers[email].avatar || "",
            role: "Zeralive User"
          });
        }
        
        // 2. Masukkan User Subulussalam City
        if (Array.isArray(subUsers)) {
          subUsers.forEach(u => {
            if (!combined.some(x => x.email === u.email || x.username === u.username)) {
              combined.push({
                source: "Subulussalam City",
                email: u.email || (u.username + "@subulussalam.id"),
                username: u.username || u.name,
                name: u.name || u.username,
                folderId: null,
                avatar: u.avatar || "",
                role: u.role || "Citizen / Member"
              });
            }
          });
        }
        
        return json(combined);
      }

      // Endpoint Config Master (Default Backend Built-in)
      if (url.pathname === "/api/admin/config") {
        if (!isUchihaAdmin) return json({ error: "Unauthorized Admin" }, 401);
        if (m === "GET") {
          return json({
            success: true,
            data: {
              githubOwner: (await kvCore?.get("config_github_owner")) || env.GITHUB_OWNER || "anyezra",
              githubRepo: (await kvCore?.get("config_github_repo")) || env.GITHUB_REPO || "anyezra",
              rapidApiHost: (await kvCore?.get("config_rapidapi_host")) || env.RAPIDAPI_HOST || "instagram-looter2.p.rapidapi.com"
            }
          });
        }
        if (m === "POST") {
          const b = await request.json();
          const cleanVal = (val, def = "") => {
            if (!val) return def;
            return String(val).replace(/^["'\\/\s]+|["'\\/\s]+$/g, "").trim() || def;
          };

          if (b.githubToken && b.githubToken.trim() !== "" && kvCore) {
            await kvCore.put("config_github_token", cleanVal(b.githubToken));
          }
          if (b.githubOwner && kvCore) await kvCore.put("config_github_owner", cleanVal(b.githubOwner, "anyezra"));
          if (b.githubRepo && kvCore) await kvCore.put("config_github_repo", cleanVal(b.githubRepo, "anyezra"));
          if (b.grokApiKey && kvCore) await kvCore.put("config_grok_api_key", cleanVal(b.grokApiKey));
          if (b.rapidApiKey && kvCore) await kvCore.put("config_rapidapi_key", cleanVal(b.rapidApiKey));
          if (b.rapidApiHost && kvCore) await kvCore.put("config_rapidapi_host", cleanVal(b.rapidApiHost));
          const bgPayload = JSON.stringify({
            type: b.subulussalamBgMode === "default" ? "default" : ((b.subulussalamBg && b.subulussalamBg.match(/\.(mp4|webm|mov|ogg)$/i)) ? "video" : "image"),
            url: b.subulussalamBgMode === "default" ? "" : (b.subulussalamBg || "")
          });
          const allBgKvs = [kvCore, kvData, env.CORE, env.DATA, env.KV_CORE, env.KV_DATA].filter(Boolean);
          for (const kv of allBgKvs) {
            try { await kv.put("config_global_background", bgPayload); } catch(e) {}
          }
          return json({ success: true, message: "Konfigurasi Master tersimpan di KV." });
        }
      }

      // Endpoint CMS Subulussalam dari Anyezra (GET, POST, PUT, DELETE)
      if (url.pathname === "/api/news") {
        let news = (kvData ? await kvData.get("news_articles", { type: "json" }) : null) || [];
        if (m === "GET") {
          if (news.length === 0) {
            try {
              const resCorp = await fetch("https://corp.anyezra.workers.dev/api/news");
              if (resCorp.ok) {
                const d = await resCorp.json();
                if (d.success && Array.isArray(d.data)) news = d.data;
              }
            } catch(e) {}
          }
          return json(news);
        }
        if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);

        if (m === "POST") {
          const b = await request.json();
          const authorName = b.author || "Redaksi Utama";
          const item = {
            id: "NEWS-" + Date.now().toString().slice(-4),
            title: b.title,
            category: b.category || "Teknologi",
            excerpt: b.excerpt,
            content: b.content,
            author: authorName,
            authorAvatar: authorName.charAt(0).toUpperCase(),
            image: b.image || "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
            date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
            readTime: b.readTime || "3 Menit Baca",
            views: "1.2K",
            isHero: b.isHero || false,
            tags: b.tags || ["#Subulussalam", "#Berita"]
          };
          if (item.isHero) news = news.map(n => ({ ...n, isHero: false }));
          news.unshift(item);
          if (kvData) await kvData.put("news_articles", JSON.stringify(news));
          return json({ success: true, data: item });
        }
        if (m === "PUT") {
          const b = await request.json();
          const idx = news.findIndex(n => n.id === b.id);
          if (idx !== -1) {
            news[idx] = { ...news[idx], ...b };
            if (kvData) await kvData.put("news_articles", JSON.stringify(news));
          }
          return json({ success: true });
        }
        if (m === "DELETE") {
          const b = await request.json();
          news = news.filter(n => n.id !== b.id);
          if (kvData) await kvData.put("news_articles", JSON.stringify(news));
          return json({ success: true });
        }
      }

      if (url.pathname === "/api/subulussalam/announcements") {
        let ancs = (kvData ? await kvData.get("city_announcements", { type: "json" }) : null) || [];
        if (m === "GET") {
          if (ancs.length === 0) {
            try {
              const resCorp = await fetch("https://corp.anyezra.workers.dev/api/subulussalam/announcements");
              if (resCorp.ok) {
                const d = await resCorp.json();
                if (d.success && Array.isArray(d.data)) ancs = d.data;
              }
            } catch(e) {}
          }
          return json(ancs);
        }
        if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);

        if (m === "POST") {
          const b = await request.json();
          const item = {
            id: "ANC-" + Date.now().toString().slice(-4),
            title: b.title,
            issuer: b.issuer || "Pemerintah Kota Subulussalam",
            summary: b.summary,
            content: b.content,
            date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
          };
          ancs.unshift(item);
          if (kvData) await kvData.put("city_announcements", JSON.stringify(ancs));
          return json({ success: true, data: item });
        }
        if (m === "PUT") {
          const b = await request.json();
          const idx = ancs.findIndex(a => a.id === b.id);
          if (idx !== -1) {
            ancs[idx] = { ...ancs[idx], ...b };
            if (kvData) await kvData.put("city_announcements", JSON.stringify(ancs));
          }
          return json({ success: true });
        }
        if (m === "DELETE") {
          const b = await request.json();
          ancs = ancs.filter(a => a.id !== b.id);
          if (kvData) await kvData.put("city_announcements", JSON.stringify(ancs));
          return json({ success: true });
        }
      }

      if (url.pathname === "/api/subulussalam/tourism") {
        let tours = (kvData ? await kvData.get("city_tourism", { type: "json" }) : null) || [];
        if (m === "GET") {
          if (tours.length === 0) {
            try {
              const resCorp = await fetch("https://corp.anyezra.workers.dev/api/subulussalam/tourism");
              if (resCorp.ok) {
                const d = await resCorp.json();
                if (d.success && Array.isArray(d.data)) tours = d.data;
              }
            } catch(e) {}
          }
          return json(tours);
        }
        if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);

        if (m === "POST") {
          const b = await request.json();
          const item = {
            id: "TOURS-" + Date.now().toString().slice(-4),
            name: b.name,
            location: b.location || "Kota Subulussalam",
            desc: b.desc,
            image: b.image || "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600",
            rating: 5.0
          };
          tours.unshift(item);
          if (kvData) await kvData.put("city_tourism", JSON.stringify(tours));
          return json({ success: true, data: item });
        }
        if (m === "PUT") {
          const b = await request.json();
          const idx = tours.findIndex(t => t.id === b.id);
          if (idx !== -1) {
            tours[idx] = { ...tours[idx], ...b };
            if (kvData) await kvData.put("city_tourism", JSON.stringify(tours));
          }
          return json({ success: true });
        }
        if (m === "DELETE") {
          const b = await request.json();
          tours = tours.filter(t => t.id !== b.id);
          if (kvData) await kvData.put("city_tourism", JSON.stringify(tours));
          return json({ success: true });
        }
      }

      if (url.pathname === "/api/subulussalam/facilities") {
        let facs = (kvData ? await kvData.get("city_facilities", { type: "json" }) : null) || [];
        if (m === "GET") {
          if (facs.length === 0) {
            try {
              const resCorp = await fetch("https://corp.anyezra.workers.dev/api/subulussalam/facilities");
              if (resCorp.ok) {
                const d = await resCorp.json();
                if (d.success && Array.isArray(d.data)) facs = d.data;
              }
            } catch(e) {}
          }
          return json(facs);
        }
        if (!isUchihaAdmin) return json({ error: "Unauthorized" }, 401);

        if (m === "POST") {
          const b = await request.json();
          const item = {
            id: "FAC-" + Date.now().toString().slice(-4),
            name: b.name,
            category: b.category || "Indomaret",
            address: b.address,
            hours: b.hours || "Buka 24 Jam",
            status: "Buka Sekarang"
          };
          facs.unshift(item);
          if (kvData) await kvData.put("city_facilities", JSON.stringify(facs));
          return json({ success: true, data: item });
        }
        if (m === "PUT") {
          const b = await request.json();
          const idx = facs.findIndex(f => f.id === b.id);
          if (idx !== -1) {
            facs[idx] = { ...facs[idx], ...b };
            if (kvData) await kvData.put("city_facilities", JSON.stringify(facs));
          }
          return json({ success: true });
        }
        if (m === "DELETE") {
          const b = await request.json();
          facs = facs.filter(f => f.id !== b.id);
          if (kvData) await kvData.put("city_facilities", JSON.stringify(facs));
          return json({ success: true });
        }
      }

      if (url.pathname === "/api/admin/spy" && m === "POST") {
        if (!isUchihaAdmin) return json({ error: "Unauthorized Admin" }, 401);
        const body = await request.json();
        const { folderId, email, username, source } = body;

        // Jika User Zeralivecorp (memiliki folder workspace)
        if (folderId && folderId !== "-" && folderId !== "null") {
          const wsData = (kvData ? await kvData.get("workspace_" + folderId, { type: "json" }) : null) || { posts: [], files: [] };
          return json(wsData);
        }

        // Jika User Subulussalam City: Tarik profil detail dari key user:<username> di KV
        const cleanEmail = (email || "").toLowerCase().trim();
        const targetUser = (username || (cleanEmail ? cleanEmail.split("@")[0] : "")).toLowerCase().trim();
        const sanitized = targetUser.replace(/[^a-zA-Z0-9_]/g, "_");

        let userProfile = null;
        const allCoreKvs = [kvCore, env.CORE, env.KV_CORE].filter(Boolean);
        for (const kv of allCoreKvs) {
          userProfile = (await kv.get("user:" + sanitized, { type: "json" })) ||
                            (await kv.get("user:" + targetUser, { type: "json" })) ||
                            (await kv.get("user:" + cleanEmail, { type: "json" }));
          if (userProfile) break;
        }

        let allPosts = [];
        try {
          const feedRes = await fetch("https://corp.anyezra.workers.dev/api/sosmed/feed", {
            headers: { "Authorization": bridgeSecret, "User-Agent": "Nexus-Enterprise-Worker" }
          });
          if (feedRes.ok) {
            const feedData = await feedRes.json();
            if (feedData.success && Array.isArray(feedData.data)) allPosts = feedData.data;
          }
        } catch(e) {}

        if (allPosts.length === 0) {
          const allDataKvs = [kvData, env.DATA, env.KV_DATA].filter(Boolean);
          for (const kv of allDataKvs) {
            const localPosts = await kv.get("sosmed_posts", { type: "json" });
            if (Array.isArray(localPosts) && localPosts.length > 0) {
              allPosts = localPosts;
              break;
            }
          }
        }

        const userPosts = allPosts.filter(p => {
          const aName = (p.authorUsername || "").toLowerCase();
          return aName === targetUser || aName === sanitized;
        });

        const profileInfo = userProfile ? [
          { time: userProfile.createdAt || "Terdaftar", text: `[INFO AKUN] Nama: ${userProfile.name || '-'} | Role: ${userProfile.role || 'Member'} | Auth: ${userProfile.authProvider || 'Email'} | WA: ${userProfile.whatsapp || '-'}` }
        ] : [];

        return json({
          posts: profileInfo.concat(userPosts.map(p => ({ time: p.timestamp || p.createdAt || "Baru saja", text: p.caption || "-" }))),
          files: userPosts.filter(p => p.image || p.mediaUrl).map(p => ({ name: p.caption || "Media", data: p.image || p.mediaUrl, type: p.mediaType || "image/jpeg" }))
        });
      }
      if (url.pathname === "/api/admin/delete" && m === "POST") {
        if (!isUchihaAdmin) return json({ error: "Unauthorized Admin" }, 401);
        const body = await request.json();
        const { email, username, folderId, source } = body;

        const cleanEmail = (email || "").toLowerCase().trim();
        const rawUser = (username || (cleanEmail ? cleanEmail.split("@")[0] : "")).toLowerCase().trim();
        const sanitizedUser = rawUser.replace(/[^a-zA-Z0-9_]/g, "_");
        const emailPrefix = cleanEmail ? cleanEmail.split("@")[0].replace(/[^a-zA-Z0-9_]/g, "_") : "";

        // Daftar key kredensial yang wajib dimusnahkan
        const targetKeys = Array.from(new Set([
          rawUser,
          sanitizedUser,
          emailPrefix,
          cleanEmail
        ])).filter(Boolean);

        // Kumpulkan seluruh binding KV yang terhubung
        const allKvInstances = Array.from(new Set([
          env.CORE, env.DATA, env.LOGS,
          env.KV_CORE, env.KV_DATA, env.KV_LOGS,
          kvCore, kvData, fallbackKv
        ])).filter(Boolean);

        // 1. Musnahkan kredensial akun dari Zeralivecorp
        for (const kv of allKvInstances) {
          try {
            let zeraUsers = await kv.get("business_users", { type: "json" });
            if (zeraUsers && typeof zeraUsers === "object") {
              let changed = false;
              targetKeys.forEach(k => {
                if (zeraUsers[k]) { delete zeraUsers[k]; changed = true; }
              });
              if (cleanEmail && zeraUsers[cleanEmail]) { delete zeraUsers[cleanEmail]; changed = true; }
              if (changed) await kv.put("business_users", JSON.stringify(zeraUsers));
            }
          } catch(e) {}
        }

        if (folderId && folderId !== "-" && folderId !== "null" && kvData) {
          try { await kvData.delete("workspace_" + folderId); } catch(e) {}
        }

        // Musnahkan riwayat pesan inbox pengguna secara menyeluruh
        for (const kv of allKvInstances) {
          try { await kv.delete("inbox_" + cleanEmail); } catch(e) {}
          try { await kv.delete("inbox_" + rawUser); } catch(e) {}
          try { await kv.delete("inbox_" + sanitizedUser); } catch(e) {}
        }

        // 2. MUSNAHKAN KUNCI UTAMA KREDENSIAL SUBULUSSALAM CITY (user:<username>)
        for (const kv of allKvInstances) {
          for (const k of targetKeys) {
            try { await kv.delete("user:" + k); } catch(e) {}
          }
          // Hapus dari registry global pengguna
          try {
            let subUsers = await kv.get("users_registry", { type: "json" });
            if (Array.isArray(subUsers)) {
              subUsers = subUsers.filter(u => {
                const uEmail = (u.email || "").toLowerCase();
                const uName = (u.username || "").toLowerCase();
                return uEmail !== cleanEmail && !targetKeys.includes(uName);
              });
              await kv.put("users_registry", JSON.stringify(subUsers));
            }
          } catch(e) {}
          // Bersihkan postingan & produk toko milik user
          try {
            let posts = await kv.get("sosmed_posts", { type: "json" });
            if (Array.isArray(posts)) {
              posts = posts.filter(p => !targetKeys.includes((p.authorUsername || "").toLowerCase()));
              await kv.put("sosmed_posts", JSON.stringify(posts));
            }
          } catch(e) {}
          try {
            let prods = await kv.get("products_catalog", { type: "json" });
            if (Array.isArray(prods)) {
              prods = prods.filter(p => (p.sellerEmail || "").toLowerCase() !== cleanEmail && !targetKeys.includes((p.sellerEmail || "").toLowerCase()));
              await kv.put("products_catalog", JSON.stringify(prods));
            }
          } catch(e) {}
        }

        // 3. Panggil Worker Subulussalam City Live dengan header resmi & fallback ganda
        try {
          await fetch("https://corp.anyezra.workers.dev/api/admin/users/" + encodeURIComponent(sanitizedUser), {
            method: "DELETE",
            headers: {
              "Authorization": bridgeSecret,
              "User-Agent": "Nexus-Enterprise-Worker",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: cleanEmail, username: sanitizedUser })
          });
        } catch(e) {}

        return json({ success: true, message: "Akun " + (sanitizedUser || cleanEmail) + " berhasil dimusnahkan secara permanen dari seluruh database!" });
      }

      // ----------------------------------------------------------------------
      // ENDPOINT MODERASI AFFILIATE & ADS CENTER (SUBULUSSALAM LINK)
      // ----------------------------------------------------------------------
      if (url.pathname === "/api/admin/ads") {
        if (!isUchihaAdmin) return json({ error: "Unauthorized Admin" }, 401);
        if (m === "GET") {
          // Ambil antrean iklan langsung dari database Subulussalam City
          try {
            const resCorp = await fetch("https://corp.anyezra.workers.dev/api/admin/ads", {
              headers: { "Authorization": bridgeSecret, "User-Agent": "Nexus-Enterprise-Worker" }
            });
            if (resCorp.ok) {
              const d = await resCorp.json();
              if (d.success && Array.isArray(d.data)) return json({ success: true, data: d.data });
            }
          } catch(e) {}

          const ads = (kvData ? await kvData.get("affiliate_ads_registry", { type: "json" }) : null) || [];
          return json({ success: true, data: ads });
        }
        if (m === "DELETE") {
          const b = await request.json();
          try {
          await fetch("https://corp.anyezra.workers.dev/api/admin/ads", {
            method: "DELETE",
            headers: { "Content-Type": "application/json", "Authorization": bridgeSecret, "User-Agent": "Nexus-Enterprise-Worker" },
            body: JSON.stringify(b)
          });
        } catch(e) {}

          let ads = (kvData ? await kvData.get("affiliate_ads_registry", { type: "json" }) : null) || [];
          ads = ads.filter(a => a.id !== b.id);
          if (kvData) await kvData.put("affiliate_ads_registry", JSON.stringify(ads));
          return json({ success: true, message: "Iklan berhasil dihapus." });
        }
      }

      if (url.pathname === "/api/admin/ads/status" && m === "PUT") {
        if (!isUchihaAdmin) return json({ error: "Unauthorized Admin" }, 401);
        const b = await request.json();
        let remoteUpdated = false;
        try {
          const resCorp = await fetch("https://corp.anyezra.workers.dev/api/admin/ads/status", {
            method: "PUT",
            headers: { "Content-Type": "application/json", "Authorization": bridgeSecret, "User-Agent": "Nexus-Enterprise-Worker" },
            body: JSON.stringify(b)
          });
          if (resCorp.ok) remoteUpdated = true;
        } catch(e) {}
        const allDataKvs = [kvData, env.DATA, env.KV_DATA].filter(Boolean);
        let localUpdated = false;

        for (const kv of allDataKvs) {
          let ads = await kv.get("affiliate_ads_registry", { type: "json" });
          if (Array.isArray(ads)) {
            const idx = ads.findIndex(a => a.id === b.id);
            if (idx !== -1) {
              ads[idx].status = b.status;
              ads[idx].reviewedAt = new Date().toISOString();
              await kv.put("affiliate_ads_registry", JSON.stringify(ads));
              localUpdated = true;
            }
          }
        }
        if (localUpdated || remoteUpdated) {
          return json({ success: true, message: "Status iklan berhasil diperbarui di seluruh sistem." });
        }
        return json({ error: "Iklan ID tidak ditemukan di database." }, 404);
      }
      // ----------------------------------------------------------------------
      // D. MASTER SPA DELIVERY
      // ----------------------------------------------------------------------
      return new Response(MASTER_HTML, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=UTF-8",
          "Cache-Control": "public, max-age=3600",
          "X-Frame-Options": "DENY",
          "X-Content-Type-Options": "nosniff"
        }
      });
    } catch (err) {
      return json({ error: "Internal Server Error: " + err.message }, 500);
}}};    