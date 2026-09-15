/* ── CATALOG ────────────────────────────────────────────────────────────────
   Each entry: { id, label, url, cat, emoji, favicon? }
   cat: "game" | "app" | "tool"
   favicon: override URL for the favicon (uses Google S2 by default)
──────────────────────────────────────────────────────────────────────────── */
const CATALOG = [
  // ── GAMES ──────────────────────────────────────────────────────────────
  { id: '1v1-lol',           label: '1v1.LOL',             url: 'https://gingerchews.github.io/python/',                                         cat: 'game', emoji: '🎯' },
  { id: 'adanceoffireandice',label: 'A Dance of Fire & Ice',url: 'https://professorlouie.github.io/gamehub/adanceoffireandice/',                  cat: 'game', emoji: '🔥' },
  { id: 'basket-random',     label: 'Basket Random',        url: 'https://professorlouie.github.io/gamehub/basketrandom/',                        cat: 'game', emoji: '🏀' },
  { id: 'bejeweled',         label: 'Bejeweled',            url: 'https://ultra0.xyz/games/bejeweled/',                                           cat: 'game', emoji: '💎', favicon: 'https://ultra0.xyz' },
  { id: 'bitlife',           label: 'BitLife',              url: 'https://pacific-ocean0.github.io/ser-src/bitlife/',                             cat: 'game', emoji: '🎲' },
  { id: 'bloonstd2',         label: 'Bloons TD 2',          url: 'https://www.kongregate.com/games/MikeRMayer/bloons-tower-defense-2',            cat: 'game', emoji: '🎈' },
  { id: 'bubblewrap',        label: 'Bubble Wrap',          url: 'https://bubble-wrap.party/',                                                    cat: 'game', emoji: '🫧', favicon: 'https://bubble-wrap.party' },
  { id: 'catmario',          label: 'Cat Mario',            url: 'https://www.jezng.com/open-syobon-action.js/',                                  cat: 'game', emoji: '🐱' },
  { id: 'choppyorc',         label: 'Choppy Orc',           url: 'https://www.mat.uc.pt/~mat1617/orc/',                                           cat: 'game', emoji: '🪓' },
  { id: 'cookieclicker',     label: 'Cookie Clicker',       url: 'https://pacific-ocean0.github.io/cookies',                                     cat: 'game', emoji: '🍪' },
  { id: 'crossyroad',        label: 'Crossy Road',          url: 'https://gingerchews.github.io/silicone/',                                      cat: 'game', emoji: '🐔' },
  { id: 'cubefield',         label: 'Cubefield',            url: 'https://christopher-hayes.github.io/cubefield/',                               cat: 'game', emoji: '🟪' },
  { id: 'donkeykong',        label: 'Donkey Kong',          url: 'https://michaelbest01.github.io/gfiles/flash/?swf=donkeykong.swf',              cat: 'game', emoji: '🦍' },
  { id: 'doodlejump',        label: 'Doodle Jump',          url: 'https://pacific-ocean0.github.io/ser-src/doodlejump',                          cat: 'game', emoji: '🕹️' },
  { id: 'flappybird',        label: 'Flappy Bird',          url: 'https://professorlouie.github.io/gamehub/flappybird/',                         cat: 'game', emoji: '🐦' },
  { id: 'footchinko',        label: 'Footchinko',           url: 'https://storage.googleapis.com/bento-53817-games/footchinko2/index.html',      cat: 'game', emoji: '⚽' },
  { id: 'funnyshooter2',     label: 'Funny Shooter 2',      url: 'https://classroomjq.github.io/funny-shooter-2/',                              cat: 'game', emoji: '🔫' },
  { id: 'geometrydash',      label: 'Geometry Dash',        url: 'https://ubg77.github.io/fix/gd/',                                              cat: 'game', emoji: '🔷' },
  { id: 'helixjump',         label: 'Helix Jump',           url: 'https://static.gogy.com/assets/games/helix_jump_gogy_v1/index.html',          cat: 'game', emoji: '🌀' },
  { id: 'knifehit',          label: 'Knife Hit',            url: 'https://ultimateknifesmash.h5games.usercontent.goog/v/22e8fb4e-2964-47f4-ba01-11a477502748/',  cat: 'game', emoji: '🔪' },
  { id: 'minecraft',         label: 'Minecraft',            url: 'https://voxel.fsky.io/e/1-5-2.html',                                          cat: 'game', emoji: '⛏️', favicon: 'https://minecraft.net' },
  { id: 'monkeymart',        label: 'Monkey Mart',          url: 'https://reider71164.github.io/monkey-mart/',                                  cat: 'game', emoji: '🐒' },
  { id: 'osu',               label: 'osu!',                 url: 'https://web-osu.github.io',                                                    cat: 'game', emoji: '⭕', favicon: 'https://osu.ppy.sh' },
  { id: 'osu-mania',         label: 'osu! Mania',           url: 'https://voxel.fsky.io/fp-instance/#220672247',                                cat: 'game', emoji: '🎹', favicon: 'https://osu.ppy.sh' },
  { id: 'ovo',               label: 'OvO',                  url: 'https://professorlouie.github.io/gamehub/ovo.html',                           cat: 'game', emoji: '🥚' },
  { id: 'pinball',           label: 'Pinball',              url: 'https://pinball.flutter.dev',                                                  cat: 'game', emoji: '🎱', favicon: 'https://pinball.flutter.dev' },
  { id: 'pingpong',          label: 'Ping Pong',            url: 'https://ranimania.com/Games/pingpong/ping_pong/',                             cat: 'game', emoji: '🏓' },
  { id: 'projectsekai',      label: 'Project Sekai',        url: 'https://voxel.is-a.dev/fp-instance/#598491618',                              cat: 'game', emoji: '🎵' },
  { id: 'retrobowl',         label: 'Retro Bowl',           url: 'https://pacific-ocean0.github.io/ser-src/retrobowl/',                         cat: 'game', emoji: '🏈' },
  { id: 'run3',              label: 'Run 3',                url: 'https://lekug.github.io/tn6pS9dCf37xAhkJv/',                                  cat: 'game', emoji: '🏃' },
  { id: 'slope',             label: 'Slope',                url: 'https://pbiscul.github.io/Slope-Gameyes/',                                    cat: 'game', emoji: '🎿' },
  { id: 'smashkarts',        label: 'Smash Karts',          url: 'https://gingerchews.github.io/bird',                                          cat: 'game', emoji: '🏎️', favicon: 'https://smashkarts.io' },
  { id: 'space-is-key-hell', label: 'Space is Key Hell',   url: 'https://www.kongregate.com/games/haizedge/space-is-key-hell',                  cat: 'game', emoji: '🚀' },
  { id: 'stickmanhook',      label: 'Stickman Hook',        url: 'https://gingerchews.github.io/cube',                                          cat: 'game', emoji: '🦸' },
  { id: 'supermario64',      label: 'Super Mario 64',       url: 'https://professorlouie.github.io/mario/index.html',                           cat: 'game', emoji: '🍄', favicon: 'https://mario.nintendo.com' },
  { id: 'tetris',            label: 'Tetris',               url: 'https://www.lumpty.com/amusements/Games/Tetris/tetris.html',                  cat: 'game', emoji: '🟦' },
  { id: 'treacheroustrials', label: 'Treacherous Trials',   url: 'https://html-classic.itch.zone/html/6559656/index.html',                      cat: 'game', emoji: '⚔️' },
  { id: 'tunnelrush',        label: 'Tunnel Rush',          url: 'https://tunnelrushonline2.github.io/file/',                                   cat: 'game', emoji: '🌈' },
  { id: 'uno',               label: 'Uno',                  url: 'https://kunjgit.github.io/GameZone/Games/Wildcard_Bonanza/',                  cat: 'game', emoji: '🃏' },
  { id: 'volleyrandom',      label: 'Volley Random',        url: 'https://professorlouie.github.io/gamehub/volleyrandom/',                      cat: 'game', emoji: '🏐' },
  { id: 'worldshardestgame', label: "World's Hardest Game", url: 'https://professorlouie.github.io/gamehub/worldshardestgame/',                 cat: 'game', emoji: '😤' },
  { id: 'worldshardestgame2',label: "World's Hardest Game 2",url:'https://pacific-ocean0.github.io/ser-src/worldshardestgame2',                  cat: 'game', emoji: '🤬' },
  { id: 'xx142-b2-exe',      label: 'XX142-B2.exe',         url: 'https://pacific-ocean0.github.io/ser-src/xx142b2.exe/',                       cat: 'game', emoji: '👾' },
  { id: 'adanceoffireandice',label: 'A Dance of Fire & Ice',url: 'https://professorlouie.github.io/gamehub/adanceoffireandice/',                 cat: 'game', emoji: '🔥' },

  // ── APPS ───────────────────────────────────────────────────────────────
  { id: 'youtube',           label: 'YouTube (Poke)',       url: 'https://poketube.fun',                                                         cat: 'app',  favicon: 'https://youtube.com', emoji: '▶️' },
  { id: 'amazon',            label: 'Amazon',              url: 'https://az.vern.cc/',                                                           cat: 'app',  favicon: 'https://amazon.com', emoji: '📦' },
  { id: 'chatgpt',           label: 'Meta AI',             url: 'https://meta.ai/',                                                              cat: 'app',  favicon: 'https://meta.ai', emoji: '🤖' },
  { id: 'knowyourmeme',      label: 'Know Your Meme',      url: 'https://mm.vern.cc/',                                                           cat: 'app',  favicon: 'https://knowyourmeme.com', emoji: '😂' },
  { id: 'pinterest',         label: 'Pinterest',           url: 'https://bn.vern.cc/',                                                           cat: 'app',  favicon: 'https://pinterest.com', emoji: '📌' },
  { id: 'quora',             label: 'Quora',               url: 'https://q.opnxng.com/',                                                         cat: 'app',  favicon: 'https://quora.com', emoji: '❓' },
  { id: 'reddit',            label: 'Reddit',              url: 'https://reddit.simo.sh',                                                        cat: 'app',  favicon: 'https://reddit.com', emoji: '🤘' },
  { id: 'tv',                label: 'TV / Movies',         url: 'https://lookmovie.foundation',                                                  cat: 'app',  emoji: '🎬' },
  { id: 'urban-dictionary',  label: 'Urban Dictionary',    url: 'https://rd.vern.cc',                                                            cat: 'app',  favicon: 'https://urbandictionary.com', emoji: '📖' },
  { id: 'wikipedia',         label: 'Wikipedia',           url: 'https://wl.vern.cc',                                                            cat: 'app',  favicon: 'https://wikipedia.org', emoji: '📚' },
  { id: 'call',              label: 'Video Call (Jitsi)',  url: 'https://jitsi.tildeverse.org/',                                                  cat: 'app',  favicon: 'https://meet.jit.si', emoji: '📹' },
  { id: 'chat',              label: 'Chat (Element)',      url: 'https://voxel.fsky.io/schildi',                                                  cat: 'app',  emoji: '💬' },
  { id: 'audiovisualizer',   label: 'Audio Visualizer',   url: 'https://butterchurnviz.com',                                                     cat: 'app',  emoji: '🎵' },
  { id: 'audioplayer',       label: 'Audio Player',        url: 'https://29a.ch/timestretch/',                                                   cat: 'app',  emoji: '🎧' },

  // ── TOOLS ──────────────────────────────────────────────────────────────
  { id: 'pr0xy',             label: 'Proxy',               url: 'https://lighttheway.cerredes.cl',                                               cat: 'tool', emoji: '🌐' },
  { id: 'incognito-search',  label: 'Incognito Search',    url: 'https://rightdao.com/',                                                         cat: 'tool', emoji: '🔍', favicon: 'https://rightdao.com' },
  { id: 'docs',              label: 'Docs (Pad)',          url: 'https://pad.sp-codes.de/',                                                      cat: 'tool', emoji: '📝' },
  { id: 'pastebin',          label: 'Pastebin (Rentry)',   url: 'https://rentry.co',                                                             cat: 'tool', emoji: '📋', favicon: 'https://rentry.co' },
  { id: 'file-hosting',      label: 'File Hosting',        url: 'https://0.vern.cc',                                                             cat: 'tool', emoji: '📁' },
  { id: 'password-manager',  label: 'Password Manager',   url: 'https://vw.vern.cc/#/login',                                                    cat: 'tool', emoji: '🔐' },
];

/* de-duplicate by id */
const seen = new Set();
const items = CATALOG.filter(item => {
  if (seen.has(item.id)) return false;
  seen.add(item.id);
  return true;
});

/* ── FAVICON HELPER ─────────────────────────────────────────────────────── */
function faviconUrl(item) {
  const base = item.favicon || item.url;
  try {
    const origin = new URL(base).origin;
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(origin)}&sz=64`;
  } catch {
    return null;
  }
}

/* ── RENDER CARD ────────────────────────────────────────────────────────── */
function renderCard(item) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.cat = item.cat;
  card.dataset.id  = item.id;

  const iconDiv = document.createElement('div');
  iconDiv.className = 'card-icon';

  const fav = faviconUrl(item);
  if (fav) {
    const img = document.createElement('img');
    img.src = fav;
    img.alt = item.label;
    img.onerror = () => {
      img.classList.add('errored');
      iconDiv.textContent = item.emoji || '🎮';
    };
    iconDiv.appendChild(img);
  } else {
    iconDiv.textContent = item.emoji || '🎮';
  }

  const label = document.createElement('span');
  label.className = 'card-label';
  label.textContent = item.label;

  const tag = document.createElement('span');
  tag.className = 'card-tag';
  tag.textContent = item.cat;

  card.append(iconDiv, label, tag);
  card.addEventListener('click', () => openFrame(item));
  return card;
}

/* ── FRAME ──────────────────────────────────────────────────────────────── */
const overlay   = document.getElementById('frame-overlay');
const frame     = document.getElementById('main-frame');
const frameTitle= document.getElementById('frame-title');
const btnClose  = document.getElementById('frame-close');
const btnNewTab = document.getElementById('frame-new-tab');

let currentUrl = '';

function openFrame(item) {
  currentUrl = item.url;
  frameTitle.textContent = item.label;
  frame.src = item.url;
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

btnClose.addEventListener('click', () => {
  overlay.classList.add('hidden');
  frame.src = 'about:blank';
  document.body.style.overflow = '';
});

btnNewTab.addEventListener('click', () => {
  window.open(currentUrl, '_blank', 'noopener,noreferrer');
});

/* ── GRID STATE ─────────────────────────────────────────────────────────── */
const grid      = document.getElementById('card-grid');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('search-input');
const tabBtns   = document.querySelectorAll('.tab-btn');

let activeTab = 'all';
let query     = '';

function render() {
  grid.innerHTML = '';
  const q = query.toLowerCase().trim();

  const filtered = items.filter(item => {
    const catMatch = activeTab === 'all' || item.cat === activeTab.slice(0, -1); // "games"→"game"
    const textMatch = !q || item.label.toLowerCase().includes(q) || item.cat.includes(q);
    return catMatch && textMatch;
  });

  noResults.classList.toggle('hidden', filtered.length > 0);
  filtered.forEach(item => grid.appendChild(renderCard(item)));
}

/* ── TAB LOGIC ──────────────────────────────────────────────────────────── */
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeTab = btn.dataset.tab;
    render();
  });
});

/* ── SEARCH ─────────────────────────────────────────────────────────────── */
searchInput.addEventListener('input', e => {
  query = e.target.value;
  render();
});

/* ── KEYBOARD: Escape closes frame ─────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    btnClose.click();
  }
});

/* ── INIT ────────────────────────────────────────────────────────────────── */
render();
