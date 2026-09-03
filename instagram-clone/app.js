/* ═══════════════════════════════════════════════════════════
   INSTAGRAM CLONE — app.js
   Vanilla JS. Data persists in localStorage.
   ═══════════════════════════════════════════════════════════ */
'use strict';

/* ─────────────────────────── ICONS ─────────────────────── */
const ICONS = {
  home: `<svg viewBox="0 0 24 24"><path d="M3 10.2 12 3l9 7.2V21a1 1 0 0 1-1 1h-5.5v-6.5h-5V22H4a1 1 0 0 1-1-1v-10.8z"/></svg>`,
  search: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/></svg>`,
  explore: `<svg viewBox="0 0 24 24"><path d="m15.5 8.5-2 5-5 2 2-5 5-2z"/><circle cx="12" cy="12" r="9"/></svg>`,
  reels: `<svg viewBox="0 0 24 24"><path d="M3.5 8.5h17M8 3.5 12 8.5m4-5-4 5M5.5 3.5h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2z"/></svg>`,
  messenger: `<svg viewBox="0 0 24 24"><path d="M12 2.5c-5.5 0-9.7 4.1-9.7 9.2 0 2.9 1.4 5.5 3.6 7.2V22l3.4-1.8c.9.2 1.8.4 2.7.4 5.5 0 9.7-4.1 9.7-9.2S17.5 2.5 12 2.5z"/><path d="M6.5 14.5 10.3 10l2.3 2.5 3-2 4.2 4.5-3.8 4.4-2.3-2.4"/></svg>`,
  heart: `<svg viewBox="0 0 24 24"><path d="M12 20.5C7 16.5 3.5 13.3 3.5 9.6 3.5 7 5.6 5 8.1 5c1.6 0 3.1.8 3.9 2.2C12.8 5.8 14.3 5 15.9 5c2.5 0 4.6 2 4.6 4.6 0 3.7-3.5 6.9-8.5 10.9z"/></svg>`,
  heartFilled: `<svg viewBox="0 0 24 24" class="fill-ic"><path d="M12 20.5C7 16.5 3.5 13.3 3.5 9.6 3.5 7 5.6 5 8.1 5c1.6 0 3.1.8 3.9 2.2C12.8 5.8 14.3 5 15.9 5c2.5 0 4.6 2 4.6 4.6 0 3.7-3.5 6.9-8.5 10.9z"/></svg>`,
  comment: `<svg viewBox="0 0 24 24"><path d="M12 3.5c-4.9 0-8.7 3.6-8.7 8.1 0 2.3 1 4.3 2.7 5.8-.3 1.1-.9 2.2-1.9 3.1 1.9-.3 3.1-.8 4.5-1.6 1 .3 2.1.5 3.3.5 4.9 0 8.8-3.6 8.8-8s-3.8-7.9-8.7-7.9z"/></svg>`,
  share: `<svg viewBox="0 0 24 24"><path d="M20 12.5 8 19.5l3-7.5-3-7.5 12 7.5z"/><path d="M11 12h9.5"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24"><path d="M6.5 3.5h11a1 1 0 0 1 1 1v16l-6.5-4.2-6.5 4.2v-16a1 1 0 0 1 1-1z"/></svg>`,
  plusSquare: `<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8.5v7M8.5 12h7"/></svg>`,
  hamburger: `<svg viewBox="0 0 24 24"><path d="M3.5 7h17M3.5 12h17M3.5 17h17"/></svg>`,
  close: `<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
  back: `<svg viewBox="0 0 24 24"><path d="M19 12H5m6-7-7 7 7 7"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24"><path d="M5 12h14m-6-7 7 7-7 7"/></svg>`,
  newMessage: `<svg viewBox="0 0 24 24"><path d="M12 20.5C7 16.5 3.5 13.3 3.5 9.6 3.5 7 5.6 5 8.1 5c1.6 0 3.1.8 3.9 2.2C12.8 5.8 14.3 5 15.9 5c2.5 0 4.6 2 4.6 4.6 0 3.7-3.5 6.9-8.5 10.9z"/><path d="M15 12.5h6M18 9.5v6"/></svg>`,
  verified: `<svg viewBox="0 0 24 24" fill="#0095f6" stroke="none"><path d="M12 1.8 14.7 4l3.5-.3 1 3.4 3 1.8-1.4 3.1 1.4 3.1-3 1.8-1 3.4-3.5-.3L12 22.2 9.3 20l-3.5.3-1-3.4-3-1.8 1.4-3.1L1.8 8.9l3-1.8 1-3.4L9.3 4 12 1.8zm-1.2 12.8-2.3-2.3-1.3 1.3 3.6 3.6 6-6-1.3-1.3-4.7 4.7z"/></svg>`,
  closeUp: `<svg viewBox="0 0 24 24"><path d="M3.5 4.5h3M17.5 4.5h3M3.5 19.5h3M17.5 19.5h3M5 8.5h14v7H5z"/></svg>`,
  music: `<svg viewBox="0 0 24 24"><path d="M9 18.5V6.8l10-2.3v11.6"/><circle cx="6.5" cy="18.5" r="2.6"/><circle cx="16.5" cy="16.1" r="2.6"/></svg>`,
  theme: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v2.5m0 14v2.5M2.5 12H5m14 0h2.5M4.9 4.9l1.8 1.8m10.6 10.6 1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>`,
  settings: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.65 9.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9c.27.66.86 1.08 1.55 1.13H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51.87z"/></svg>`,
  logout: `<svg viewBox="0 0 24 24"><path d="M14 4h-8a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8M10 12h10m-4-4 4 4-4 4"/></svg>`,
  dots: `<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.6" class="fill-ic"/><circle cx="12" cy="12" r="1.6" class="fill-ic"/><circle cx="19" cy="12" r="1.6" class="fill-ic"/></svg>`,
  carousel: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="#fff" stroke-width="2"/><circle cx="9" cy="9" r="1.7" fill="#fff" stroke="none"/><path d="m4.5 17.5 4.3-4.3 2.8 2.8 3.4-3.4 4.5 4.5" fill="none" stroke="#fff" stroke-width="2"/></svg>`,
  smile: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8M9 9.5h.01M15 9.5h.01"/></svg>`,
  camera: `<svg viewBox="0 0 24 24"><path d="M4.5 7.5h2.3l1.5-2.2h7.4l1.5 2.2h2.3a1.5 1.5 0 0 1 1.5 1.5v9.2a1.5 1.5 0 0 1-1.5 1.5H4.5a1.5 1.5 0 0 1-1.5-1.5V9a1.5 1.5 0 0 1 1.5-1.5z"/><circle cx="12" cy="13" r="3.6"/></svg>`
};
function icon(name) { return ICONS[name] || ICONS.home; }
function el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
function esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }
function uid(p) { return p + '_' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4); }
function timeAgo(ts) {
  const s = Math.max(1, Math.floor((Date.now() - ts) / 1000));
  if (s < 60) return 'Just now';
  const m = Math.floor(s / 60); if (m < 60) return m + 'm';
  const h = Math.floor(m / 60); if (h < 24) return h + 'h';
  const d = Math.floor(h / 24); if (d < 7) return d + 'd';
  return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
function fmt(n) { return n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M' : n >= 1e3 ? (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K' : String(n); }

/* ─────────────────────────── SEED DATA ───────────────────── */
const NOW = Date.now();
const H = 3600e3, D = 24 * H;

function seedState() {
  const users = [
    { id: 'anish', username: 'anish.cp', name: 'Anish C.P', bio: 'AI & Data Science engineer\nBuilding smart things ⚡', website: 'github.com/Anishcp2006', avatar: 'assets/avatars/anish.jpg', verified: true, followers: 1284, following: 813 },
    { id: 'priya', username: 'priya.sharma', name: 'Priya Sharma', bio: 'Food blogger ☕ | Chennai', website: 'priyaeats.in', avatar: 'P', verified: true, followers: 45200, following: 321 },
    { id: 'arjun', username: 'arjun.travel', name: 'Arjun T', bio: 'Wandering the Himalayas 🏔️', website: 'arjunsjourney.com', avatar: 'A', verified: false, followers: 8921, following: 640 },
    { id: 'sara', username: 'sara.designs', name: 'Sara D', bio: 'Design & dogs 🐶', website: '', avatar: 'S', verified: false, followers: 3200, following: 510 },
    { id: 'lena', username: 'lena.travels', name: 'Lena M', bio: 'Chasing sunsets 🌅', website: '', avatar: 'L', verified: false, followers: 15200, following: 210 },
    { id: 'vikram', username: 'vikram.io', name: 'Vikram R', bio: 'Dev setup enthusiast 💻', website: 'vikram.dev', avatar: 'V', verified: true, followers: 7800, following: 399 },
    { id: 'meera', username: 'meera.art', name: 'Meera K', bio: 'Streetwear & sketchbooks 🎨', website: '', avatar: 'M', verified: false, followers: 24300, following: 122 },
    { id: 'rahul', username: 'rahul.codes', name: 'Rahul N', bio: 'Full-stack dev. Pasta lover 🍝', website: 'github.com/rahuln', avatar: 'R', verified: false, followers: 5400, following: 302 },
    { id: 'maddy', username: 'maddy.fitness', name: 'Madhav P', bio: 'Skateboard coach 🛹', website: '', avatar: 'M', verified: false, followers: 6800, following: 88 },
    { id: 'zara', username: 'zara.music', name: 'Zara A', bio: 'DJ / Producer 🎧', website: 'soundcloud.com/zara', avatar: 'Z', verified: true, followers: 41200, following: 145 }
  ];
  const posts = [
    { id: 'p1', userId: 'anish', media: [{ src: 'assets/posts/city-night.jpg' }], caption: 'Late night debug sessions hit different in the city 🌃', location: 'Chennai', ts: NOW - 2 * H, views: 1820, likesSeed: 74 },
    { id: 'p2', userId: 'priya', media: [{ src: 'assets/posts/brunch.jpg' }], caption: 'Matcha mornings ☕✨', location: 'T Nagar', ts: NOW - 3 * H, views: 12400, likesSeed: 842 },
    { id: 'p3', userId: 'arjun', media: [{ src: 'assets/posts/mountains.jpg' }, { src: 'assets/posts/beach-sunset.jpg' }], caption: 'Same week, 900km apart. Still breathtaking 🏔️🌊', location: 'Manali', ts: NOW - 5 * H, views: 9800, likesSeed: 1290 },
    { id: 'p4', userId: 'sara', media: [{ src: 'assets/posts/dog.jpg' }], caption: 'Autumn adventures with Leo 🍂🐕', location: 'Ooty', ts: NOW - 8 * H, views: 6100, likesSeed: 415 },
    { id: 'p5', userId: 'lena', media: [{ src: 'assets/posts/beach-sunset.jpg' }], caption: 'Sunsets never get old 💜', location: 'Pondicherry', ts: NOW - 12 * H, views: 20200, likesSeed: 1730 },
    { id: 'p6', userId: 'vikram', media: [{ src: 'assets/posts/desk.jpg' }], caption: 'New minimal desk setup. My motivation level: 📈', location: 'Bengaluru', ts: NOW - 18 * H, views: 5400, likesSeed: 620 },
    { id: 'p7', userId: 'meera', media: [{ src: 'assets/posts/fashion.jpg' }], caption: 'Golden hour fits only 🔥', location: 'Mumbai', ts: NOW - 26 * H, views: 15800, likesSeed: 2210 },
    { id: 'p8', userId: 'rahul', media: [{ src: 'assets/posts/cooking.jpg' }], caption: 'Cooked for 2 hours, ate in 4 minutes. Worth it 🍝', location: 'Home', ts: NOW - 34 * H, views: 3400, likesSeed: 388 }
  ];
  const reels = [
    { id: 'r1', userId: 'maddy', src: 'assets/reels/skate.jpg', caption: 'Kickflip after 47 tries 🛹', audio: 'Original audio — Maddy P', viewsSeed: 45200, likesSeed: 3120, commentsSeed: ['That was clean! 🔥', 'Try it on a bigger ramp next!'], ts: NOW - 4 * H },
    { id: 'r2', userId: 'priya', src: 'assets/reels/cooking.jpg', caption: 'POV: carbonara in 60 seconds 🍝', audio: 'Lo-fi beats — Priya', viewsSeed: 183000, likesSeed: 15400, commentsSeed: ['Recipe please!!', 'Hungry now 😂', 'The steam shot 😍'], ts: NOW - 10 * H },
    { id: 'r3', userId: 'zara', src: 'assets/reels/dj.jpg', caption: 'Drop at 1:23 AM 🎧 #festival', audio: 'Neon Nights — Zara', viewsSeed: 98000, likesSeed: 8900, commentsSeed: ['Take me back 🙌'], ts: NOW - 22 * H },
    { id: 'r4', userId: 'anish', src: 'assets/posts/city-night.jpg', caption: 'Neon nights in the city 🌆', audio: 'Synthwave mix', viewsSeed: 540, likesSeed: 12, commentsSeed: [], ts: NOW - 30 * H }
  ];
  const comments = [
    { id: 'c1', postId: 'p1', userId: 'vikram', text: 'The vibe of this shot 🔥', ts: NOW - 1.9 * H },
    { id: 'c2', postId: 'p1', userId: 'zara', text: 'City lights forever', ts: NOW - 1.5 * H },
    { id: 'c3', postId: 'p2', userId: 'anish', text: 'Need this recipe!', ts: NOW - 2.8 * H },
    { id: 'c4', postId: 'p3', userId: 'lena', text: 'Okay this is unreal 😍', ts: NOW - 4.6 * H },
    { id: 'c5', postId: 'p5', userId: 'meera', text: 'That palette!', ts: NOW - 11 * H },
    { id: 'c6', postId: 'p7', userId: 'rahul', text: 'FIRE', ts: NOW - 25 * H }
  ];
  const dms = {
    priya: { messages: [{ from: 'priya', text: 'Hey! Loved your neon city shot 🌃', ts: NOW - 26 * H }, { from: 'anish', text: 'Thanks Priya! Yours too, the matcha pic is so clean', ts: NOW - 25.8 * H }, { from: 'priya', text: 'Come try the new café on T Nagar sometime', ts: NOW - 25.5 * H }, { from: 'priya', text: 'They have an amazing croissant', ts: NOW - 25.4 * H }], unread: 2 },
    vikram: { messages: [{ from: 'vikram', text: 'Sending you the setup links', ts: NOW - 20 * H }, { from: 'anish', text: 'Legend 🙌', ts: NOW - 19.8 * H }], unread: 0 },
    arjun: { messages: [{ from: 'anish', text: 'How was Manali?', ts: NOW - 6 * H }, { from: 'arjun', text: 'Unreal. You have to go once 🙏', ts: NOW - 5.5 * H }], unread: 0 }
  };
  const notifications = [
    { id: 'n1', type: 'like', userId: 'priya', postId: 'p1', text: 'liked your post.', ts: NOW - 1.5 * H, read: false },
    { id: 'n2', type: 'follow', userId: 'zara', text: 'started following you.', ts: NOW - 4 * H, read: false },
    { id: 'n3', type: 'comment', userId: 'vikram', postId: 'p1', text: 'commented: "The vibe of this shot 🔥"', ts: NOW - 1.7 * H, read: false },
    { id: 'n4', type: 'like', userId: 'meera', postId: 'p1', text: 'liked your post.', ts: NOW - 20 * H, read: true }
  ];
  return {
    theme: 'dark',
    currentUser: null,
    users, posts, reels, comments, dms, notifications,
    follows: ['priya', 'arjun', 'sara', 'lena', 'vikram', 'meera', 'rahul', 'maddy', 'zara'],
    likes: ['p2', 'p3', 'p8'],
    saves: ['p5'],
    storiesSeen: [],
    recents: [],
    createStep: null
  };
}

let state = loadState();
function loadState() {
  try {
    const raw = localStorage.getItem('igclone:v1');
    if (raw) return Object.assign(seedState(), JSON.parse(raw));
  } catch (e) { /* corrupted storage → reseed */ }
  return seedState();
}
function saveState() {
  try { localStorage.setItem('igclone:v1', JSON.stringify(state)); }
  catch (e) { toast('Storage full — old data cleared'); localStorage.removeItem('igclone:v1'); }
}

/* ─────────────────────────── HELPERS ─────────────────────── */
function getUser(id) { return state.users.find(u => u.id === id); }
function me() { return state.currentUser ? getUser(state.currentUser) : null; }
function postLikes(post) { return state.likes.includes(post.id) ? Number(post.likesSeed) + 1 : Number(post.likesSeed); }
function commentsFor(postId) { return state.comments.filter(c => c.postId === postId).sort((a, b) => a.ts - b.ts); }
function userPosts(userId) { return state.posts.filter(p => p.userId === userId).sort((a, b) => b.ts - a.ts); }
function userReels(userId) { return state.reels.filter(r => r.userId === userId); }
function isFollowing(id) { return state.follows.includes(id); }
function avatarHtml(user, size = 'avatar-md') {
  if (user.avatar && user.avatar.startsWith('data:')) return `<span class="avatar ${size} avatar-img"><img src="${user.avatar}" alt="${esc(user.name)}"/></span>`;
  if (user.avatar && !user.avatar.startsWith('assets/avatars')) return `<span class="avatar ${size} avatar-img"><img src="${user.avatar}" alt="${esc(user.name)}"/></span>`;
  if (user.avatar && user.avatar.startsWith('assets/avatars/')) return `<span class="avatar ${size} avatar-img"><img src="${user.avatar}" alt="${esc(user.name)}"/></span>`;
  const grad = 'avatar-grad-' + ((user.id.charCodeAt(0) + user.id.length) % 5);
  return `<span class="avatar ${size} ${grad}" style="font-size:${size.includes('xl') ? 42 : size.includes('lg') ? 30 : 16}px">${esc(user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase())}</span>`;
}
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.add('hidden'), 2200);
}

/* ─────────────────────────── AUTH ────────────────────────── */
function enterApp(userId) {
  state.currentUser = userId;
  saveState();
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('appShell').classList.remove('hidden');
  applyAppIdentity();
  routeTo('home');
}
function applyAppIdentity() {
  const u = me(); if (!u) return;
  document.getElementById('continueAsName').textContent = u.username;
  document.getElementById('continueAsAvatar').innerHTML = avatarHtml(u, 'avatar-sm').replace('avatar-sm', 'avatar-sm avatar-img');
  document.getElementById('sideUserLabel').textContent = u.username;
  // rail + mobile profile icons show the real avatar (keep the span wrapper intact)
  const mini = avatarHtml(u, 'avatar-sm').replace('class="avatar avatar-sm', 'class="avatar avatar-sm side-avatar');
  document.getElementById('railUserIcon').innerHTML = mini;
  document.querySelectorAll('[data-user-profile] span.side-icon').forEach(s => { s.innerHTML = mini; });
  // story ring for self
  renderStories();
  renderRightPanel();
}
function signOut() {
  state.currentUser = null;
  saveState();
  closeModals();
  hidePopovers();
  document.getElementById('appShell').classList.add('hidden');
  document.getElementById('authScreen').classList.remove('hidden');
  const lf = document.getElementById('loginForm');
  lf.reset();
  document.getElementById('loginBtn').disabled = true;
}

/* ─────────────────────────── ROUTING ─────────────────────── */
function routeTo(view, sub) {
  if (!me()) { showAuth(); return; }
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const map = { home: 'homeView', explore: 'exploreView', reels: 'reelsView', messages: 'messagesView', profile: 'profileView' };
  const target = document.getElementById(map[view]);
  if (target) target.classList.add('active');
  if (view === 'home') renderFeed();
  if (view === 'explore') renderExplore();
  if (view === 'reels') renderReels();
  if (view === 'messages') { renderDmInbox(); if (sub) openThread(sub, true); }
  if (view === 'profile') { state.viewProfile = sub || (state.viewProfile || me().id); renderProfile(state.viewProfile); }
  setActiveNav(view);
  window.scrollTo(0, 0);
}
function setActiveNav(view) {
  document.querySelectorAll('.side-link[data-nav], .rail-link[data-nav], .bn-link[data-nav]').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === view);
  });
}
function showAuth() {
  document.getElementById('appShell').classList.add('hidden');
  document.getElementById('authScreen').classList.remove('hidden');
}

/* ─────────────────────────── STORIES ─────────────────────── */
function renderStories() {
  const row = document.getElementById('storiesRow');
  if (!row) return;
  const users = [me(), ...state.users.filter(u => u.id !== me().id)];
  row.innerHTML = users.map(u => {
    const seen = state.storiesSeen.includes(u.id);
    const isSelf = u.id === me().id;
    return `
      <button type="button" class="story-card" data-action="open-story" data-user="${u.id}">
        <span class="story-ring-wrap">
          <span class="story-ring ${seen ? '' : 'unseen'}">
            ${avatarHtml(u, '')}
          </span>
          ${isSelf ? '<span class="story-add">+</span>' : ''}
        </span>
        <span class="story-name">${esc(isSelf ? 'Your story' : u.username)}</span>
      </button>`;
  }).join('');
}

/* ─────────────────────────── POSTS ───────────────────────── */
function postHtml(post) {
  const u = getUser(post.userId);
  const liked = state.likes.includes(post.id);
  const saved = state.saves.includes(post.id);
  const comments = commentsFor(post.id);
  const multi = post.media.length > 1;
  const media = post.media.map(m => `<img src="${m.src}" alt="post" loading="lazy" draggable="false">`).join('');
  return `
  <article class="post-card" data-post="${post.id}">
    <div class="post-head" data-action="open-post" data-post="${post.id}">
      <span data-action="open-profile" data-user="${u.id}" style="display:inline-flex">${avatarHtml(u, 'avatar-md')}</span>
      <span class="post-head-meta" data-action="open-profile" data-user="${u.id}">
        <span class="post-user-row"><b class="post-user">${esc(u.username)}</b>${u.verified ? `<span class="verified-badge" title="Verified">${icon('verified')}</span>` : ''}</span>
        ${post.location ? `<span class="post-location">${esc(post.location)}</span>` : ''}
      </span>
      <button type="button" class="icon-btn post-more-btn" data-action="post-more" data-post="${post.id}" aria-label="More options">${icon('dots')}</button>
    </div>
    <div class="post-media ${multi ? 'post-carousel' : ''}" data-action="double-like" data-post="${post.id}">
      ${multi ? `<button type="button" class="carousel-nav prev" data-action="carousel" data-post="${post.id}" data-dir="-1" aria-label="Previous">${icon('arrowRight').replace('<path', '<path transform="rotate(180 12 12)"')}</button>` : ''}
      <div class="media-track" data-track="${post.id}">${media}</div>
      ${multi ? `<button type="button" class="carousel-nav next" data-action="carousel" data-post="${post.id}" data-dir="1" aria-label="Next">${icon('arrowRight')}</button>
      <div class="carousel-dots">${post.media.map((_, i) => `<span class="${i === 0 ? 'on' : ''}"></span>`).join('')}</div>` : ''}
      <span class="double-tap-heart" data-heart="${post.id}">${icon('heartFilled')}</span>
    </div>
    <div class="post-actions">
      <button type="button" class="action-btn ${liked ? 'liked' : ''}" data-action="like-post" data-post="${post.id}" aria-label="Like">${liked ? icon('heartFilled') : icon('heart')}</button>
      <button type="button" class="action-btn" data-action="open-post" data-post="${post.id}" aria-label="Comment">${icon('comment')}</button>
      <button type="button" class="action-btn" data-action="share-post" data-post="${post.id}" aria-label="Share">${icon('share')}</button>
      <button type="button" class="action-btn post-save-btn ${saved ? 'saved' : ''}" data-action="save-post" data-post="${post.id}" aria-label="Save">${icon('bookmark')}</button>
    </div>
    <div class="post-likes" data-action="open-post" data-post="${post.id}">${fmt(postLikes(post))} likes</div>
    <div class="post-caption">
      <b class="post-user" data-action="open-profile" data-user="${u.id}">${esc(u.username)}</b>
      <span>${esc(post.caption)}</span>
    </div>
    ${comments.length > 1 ? `<div class="post-comments-preview"><button type="button" class="comment-view-all" data-action="open-post" data-post="${post.id}">View all ${comments.length} comments</button></div>` : ''}
    ${comments.length ? `<div class="post-comments-preview">${commentLineHtml(comments[comments.length - 1])}</div>` : ''}
    <div class="post-views">${fmt(post.views)} views</div>
    <div class="post-time" title="${new Date(post.ts).toLocaleString()}">${timeAgo(post.ts)}</div>
    <form class="post-add-comment" data-action="comment-form" data-post="${post.id}">
      <span class="side-icon">${icon('smile')}</span>
      <input type="text" placeholder="Add a comment..." data-comment-input="${post.id}" autocomplete="off">
      <button type="submit" disabled>Post</button>
    </form>
    ${comments.length ? `<div class="comments-panel hidden" data-comments="${post.id}">${comments.map(commentLineHtml).join('')}</div>` : ''}
  </article>`;
}
function commentLineHtml(c) {
  const u = getUser(c.userId); if (!u) return '';
  return `
  <div class="comment-line" data-comment="${c.id}">
    <b class="post-user" data-action="open-profile" data-user="${u.id}">${esc(u.username)}</b>
    <span class="comment-line-user" data-action="open-post" data-any-post="${c.postId}">${esc(c.text)}</span>
    <button type="button" class="comment-like" data-action="comment-like" data-comment="${c.id}" aria-label="Like comment">${icon('heart')}</button>
  </div>`;
}
function renderFeed() {
  const list = document.getElementById('feedList');
  const posts = [...state.posts].sort((a, b) => b.ts - a.ts);
  document.querySelectorAll('[data-track]').forEach(t => { t.style.display = 'block'; });
  const html = posts.map(postHtml).join('');
  list.innerHTML = html +
    `<div class="all-caught-up"><span class="side-icon">${icon('closeUp')}</span> You're all caught up</div>
     <p class="section-note">You're all caught up — check back later for new posts from people you follow.</p>`;
}

/* ─────────────────────────── RIGHT PANEL ─────────────────── */
function renderRightPanel() {
  const p = document.getElementById('rightPanel'); if (!p) return;
  const u = me();
  const sug = state.users.filter(x => x.id !== u.id && !isFollowing(x.id));
  const ppl = sug.length ? sug : state.users.filter(x => x.id !== u.id).slice(0, 4);
  p.innerHTML = `
    <div class="rp-account">
      <span data-action="open-profile" data-user="${u.id}" style="display:inline-flex">${avatarHtml(u, 'avatar-md')}</span>
      <div class="rp-account-meta">
        <b>${esc(u.username)}</b><span>${esc(u.name)}</span>
      </div>
      <button type="button" class="rp-switch" data-action="switch-account">Switch</button>
    </div>
    <div class="rp-title"><strong>Suggested for you</strong><button type="button" class="rp-seeall" data-action="explore">See All</button></div>
    ${ppl.map(s => `
      <div class="suggestion-row">
        <span data-action="open-profile" data-user="${s.id}" style="display:inline-flex">${avatarHtml(s, 'avatar-md')}</span>
        <div class="suggestion-meta" data-action="open-profile" data-user="${s.id}">
          <b>${esc(s.username)}</b><span>${fmt(s.followers)} followers</span>
        </div>
        <button type="button" class="follow-btn" data-action="follow" data-user="${s.id}">${isFollowing(s.id) ? 'Following' : 'Follow'}</button>
      </div>`).join('')}
    <div class="rp-footer">
      <span>About</span> · <span>Help</span> · <span>Press</span> · <span>API</span> · <span>Jobs</span> · <span>Privacy</span> · <span>Terms</span> · <span>Locations</span> · <span>Language</span><br>
      © 2026 INSTAGRAM CLONE FROM ANISH
    </div>`;
  document.querySelectorAll('.follow-btn').forEach(b => b.classList.toggle('following-btn', isFollowing(b.dataset.user)));
}

/* ─────────────────────────── EXPLORE ─────────────────────── */
function renderExplore() {
  const grid = document.getElementById('exploreGrid');
  const items = [
    ...state.posts.map(p => ({ kind: 'post', id: p.id, src: p.media[0].src, likes: postLikes(p), comments: commentsFor(p.id).length, ts: p.ts })),
    ...state.reels.map(r => ({ kind: 'reel', id: r.id, src: r.src, likes: r.likesSeed, comments: (r.commentsSeed || []).length, ts: r.ts }))
  ].sort((a, b) => b.ts - a.ts);
  grid.innerHTML = items.map(it => `
    <div class="explore-cell" data-action="open-explore-item" data-kind="${it.kind}" data-id="${it.id}">
      <img src="${it.src}" alt="explore" loading="lazy">
      <div class="explore-cell-overlay">
        <span class="overlay-stat">${icon('heartFilled')} ${fmt(it.likes)}</span>
        <span class="overlay-stat">${icon('comment')} ${fmt(it.comments)}</span>
      </div>
    </div>`).join('');
}

/* ─────────────────────────── REELS ───────────────────────── */
let reelObserver = null;
function renderReels() {
  const list = document.getElementById('reelsList');
  list.innerHTML = state.reels.map(r => {
    const u = getUser(r.userId);
    return `
    <article class="reel" data-reel="${r.id}">
      <div class="reel-media"><img src="${r.src}" alt="reel" loading="lazy"></div>
      <div class="reel-shade"></div>
      <div class="reel-pagination">
        <span class="viewed"><i></i></span><span class="active"><i></i></span><span><i></i></span>
      </div>
      <div class="reel-top">
        <span data-action="open-profile" data-user="${u.id}" style="display:inline-flex">${avatarHtml(u, 'avatar-md')}</span>
        <div class="reel-user"><b>${esc(u.username)}</b><span>${fmt(r.viewsSeed)} views</span></div>
        ${u.id !== me().id ? `<button type="button" class="reel-follow-btn" data-action="follow" data-user="${u.id}">${isFollowing(u.id) ? 'Following' : 'Follow'}</button>` : ''}
        <button type="button" class="icon-btn reel-mute-btn" data-action="reel-mute" aria-label="Mute"><span class="side-icon" data-icon="closeUp"></span></button>
      </div>
      <div class="reel-actions">
        <button type="button" class="reel-action ${state.likes.includes(r.id) ? 'liked' : ''}" data-action="like-reel" data-reel="${r.id}">
          <span class="bubble">${state.likes.includes(r.id) ? icon('heartFilled') : icon('heart')}</span><span data-count>${fmt(r.likesSeed + (state.likes.includes(r.id) ? 1 : 0))}</span>
        </button>
        <button type="button" class="reel-action" data-action="reel-comments" data-reel="${r.id}">
          <span class="bubble">${icon('comment')}</span><span>${fmt((r.commentsSeed || []).length)}</span>
        </button>
        <button type="button" class="reel-action" data-action="share-post" data-post="${r.id}" data-kind="reel">
          <span class="bubble">${icon('share')}</span><span>Share</span>
        </button>
      </div>
      <div class="reel-bottom">
        <div class="reel-audio">${icon('music')}<span>${esc(r.audio)}</span></div>
        <p class="reel-caption"><span>${esc(u.username)}</span>${esc(r.caption)}</p>
      </div>
    </article>`;
  }).join('');
  if (reelObserver) reelObserver.disconnect();
  reelObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const img = e.target.querySelector('.reel-media img');
      if (e.isIntersecting) { img.closest('.reel-media').classList.add('playing'); e.target.style.setProperty('--reel-dur', '10s'); restartReelProgress(e.target); }
      else img.closest('.reel-media').classList.remove('playing');
    });
  }, { threshold: 0.6 });
  list.querySelectorAll('.reel').forEach(r => reelObserver.observe(r));
}
function restartReelProgress(reel) {
  reel.querySelectorAll('.reel-pagination span').forEach((s, i) => { s.classList.remove('active', 'viewed'); s.classList.add(i === 0 ? 'active' : ''); const b = s.querySelector('i'); if (b) b.style.animation = 'none'; void b.offsetWidth; if (s.classList.contains('active')) b.style.animation = ''; });
}

/* ─────────────────────────── MESSAGES ────────────────────── */
function renderDmInbox() {
  const list = document.getElementById('dmList');
  const meId = me().id;
  const convs = Object.keys(state.dms).map(id => ({ ...state.dms[id], id })).filter(c => c.messages.length || c.id);
  convs.sort((a, b) => {
    const la = a.messages.length ? a.messages[a.messages.length - 1].ts : 0;
    const lb = b.messages.length ? b.messages[b.messages.length - 1].ts : 0;
    return lb - la;
  });
  if (!convs.length) { list.innerHTML = '<div class="dm-empty">No conversations yet.<br>Start messaging someone!</div>'; return; }
  list.innerHTML = convs.map(c => {
    const u = getUser(c.id); const last = c.messages[c.messages.length - 1];
    return `
    <div class="dm-row ${state.dmOpen === c.id ? 'active' : ''}" data-action="open-thread" data-user="${c.id}">
      ${avatarHtml(u, 'avatar-md')}
      <div class="dm-row-meta"><b>${esc(u.username)}</b><span>${last ? (last.from === meId ? 'You: ' : '') + esc(last.text) : ''}</span></div>
      <span class="dm-row-time">${last ? timeAgo(last.ts) : ''}</span>
    </div>`;
  }).join('');
  updateDmBadges();
}
function updateDmBadges() {
  const unread = Object.values(state.dms).reduce((n, c) => n + (c.unread || 0), 0);
  [['dmSideBadge'], ['dmRailBadge']].forEach(([id]) => {
    const b = document.getElementById(id); if (b) { b.textContent = unread > 9 ? '9+' : String(unread); b.classList.toggle('hidden', !unread); }
  });
}
function openThread(userId, force) {
  const c = state.dms[userId] || (state.dms[userId] = { messages: [], unread: 0 });
  state.dmOpen = userId;
  c.unread = 0;
  saveState();
  const u = getUser(userId);
  document.getElementById('dmInbox').style.display = 'none';
  const t = document.getElementById('dmThread');
  t.hidden = false;
  document.getElementById('dmThreadAvatar').innerHTML = avatarHtml(u, 'avatar-md');
  document.getElementById('dmThreadName').textContent = u.username;
  document.getElementById('dmThreadStatus').textContent = 'Active now';
  renderThread(userId);
  updateDmBadges();
}
function renderThread(userId) {
  const box = document.getElementById('dmMessages');
  const c = state.dms[userId];
  const meId = me().id;
  box.innerHTML = c.messages.map(m => `
    <div class="dm-msg ${m.from === meId ? 'me' : 'them'}">${esc(m.text)}</div>
    <div class="dm-time ${m.from === meId ? 'me' : ''}">${new Date(m.ts).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</div>`).join('');
  box.scrollTop = box.scrollHeight;
}
function closeThread() {
  state.dmOpen = null; saveState();
  document.getElementById('dmThread').hidden = true;
  document.getElementById('dmInbox').style.display = '';
}

/* ─────────────────────────── PROFILE ─────────────────────── */
function renderProfile(userId) {
  const u = getUser(userId); if (!u) return;
  const box = document.getElementById('profileContent');
  const self = u.id === me().id;
  const posts = userPosts(u.id);
  const gridItems = [
    ...posts.map(p => ({ kind: 'post', id: p.id, src: p.media[0].src, multi: p.media.length > 1 })),
    ...userReels(u.id).map(r => ({ kind: 'reel', id: r.id, src: r.src, reel: true }))
  ];
  box.innerHTML = `
    <div class="profile-hero">
      <span>${avatarHtml(u, 'avatar-xl')}</span>
      <div style="flex:1;min-width:240px">
        <div class="profile-stats" style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">
          <h1 style="font-size:20px;font-weight:400">${esc(u.username)}</h1>
          ${u.verified ? `<span class="verified-badge" title="Verified">${icon('verified')}</span>` : ''}
          ${self
            ? `<div class="profile-actions"><button type="button" class="btn-ghost" data-action="edit-profile">Edit profile</button><button type="button" class="btn-ghost" data-action="create-post">Create post</button></div>`
            : `<div class="profile-actions"><button type="button" class="${isFollowing(u.id) ? 'btn-ghost' : 'btn-primary'}" data-action="follow" data-user="${u.id}">${isFollowing(u.id) ? 'Following' : 'Follow'}</button><button type="button" class="btn-ghost" data-action="message-user" data-user="${u.id}">Message</button></div>`}
        </div>
        <div class="profile-stats">
          <span class="stat"><b>${fmt(posts.length)}</b> posts</span>
          <span class="stat"><b>${fmt(u.followers + (isFollowing(u.id) && !self ? 1 : 0))}</b> followers</span>
          <span class="stat"><b>${fmt(u.following)}</b> following</span>
        </div>
        <div class="profile-name">${esc(u.name)}</div>
        <div class="profile-bio">${esc(u.bio)}</div>
        ${u.website ? `<a class="profile-link" href="https://${esc(u.website)}" target="_blank" rel="noopener">${esc(u.website)}</a>` : ''}
      </div>
    </div>
    <div class="profile-tabs">
      <button type="button" class="profile-tab active">${icon('closeUp')} POSTS</button>
      <button type="button" class="profile-tab" data-action="reels-from-profile" data-user="${u.id}">${icon('reels')} REELS</button>
    </div>
    ${gridItems.length ? `<div class="profile-grid">${gridItems.map(g => `
      <div class="pg-cell ${g.multi ? 'pg-multi' : ''}" data-action="${g.kind === 'post' ? 'open-post' : 'open-reel'}" data-${g.kind}="${g.id}">
        <img src="${g.src}" alt="post" loading="lazy">
        ${g.reel ? `<span class="pg-icon">${icon('reels')}</span>` : ''}
      </div>`).join('')}</div>`
      : `<div class="profile-empty"><h4>No Posts Yet</h4><p>When ${esc(self ? 'you' : u.username)} posts, they'll show up here.</p></div>`}`;
}

/* ═══════════════════════════════════════════════════════════
   INTERACTIONS
   ═══════════════════════════════════════════════════════════ */
function toggleLike(id) {
  if (state.likes.includes(id)) state.likes = state.likes.filter(x => x !== id);
  else state.likes.push(id);
  saveState();
  // refresh UI in place for feed, explore, reels, modal
  refreshLikeUI(id);
}
function updateLikeButton(id) {
  const post = state.posts.find(p => p.id === id);
  if (!post) return;
  const liked = state.likes.includes(id);
  document.querySelectorAll(`.post-card[data-post="${id}"] [data-action="like-post"]`).forEach(btn => {
    btn.innerHTML = liked ? icon('heartFilled') : icon('heart');
    btn.classList.toggle('liked', liked);
  });
  document.querySelectorAll(`.post-card[data-post="${id}"] .post-likes`).forEach(l => { l.textContent = `${fmt(postLikes(post))} likes`; });
  document.querySelectorAll(`.post-modal [data-action="like-post"][data-post="${id}"]`).forEach(btn => {
    btn.innerHTML = liked ? icon('heartFilled') : icon('heart');
    btn.classList.toggle('liked', liked);
  });
}
function refreshLikeUI(id) {
  const post = state.posts.find(p => p.id === id);
  if (post) {
    updateLikeButton(id);
    const card = document.querySelector(`.post-card[data-post="${id}"]`);
    if (card) card.querySelector('.double-tap-heart')?.replaceChildren();
    const modal = document.getElementById('postModal');
    if (!modal.classList.contains('hidden')) openPostModal(id);
  } else {
    const card = document.querySelector(`.reel[data-reel="${id}"]`);
    if (card) {
      const liked = state.likes.includes(id);
      const btn = card.querySelector('[data-action="like-reel"]');
      btn.innerHTML = `<span class="bubble">${liked ? icon('heartFilled') : icon('heart')}</span><span data-count>${fmt(reelLikes(id))}</span>`;
      btn.classList.toggle('liked', liked);
    }
  }
}
function reelLikes(id) { const r = state.reels.find(x => x.id === id); return r.likesSeed + (state.likes.includes(id) ? 1 : 0); }
function toggleSave(id) {
  if (state.saves.includes(id)) state.saves = state.saves.filter(x => x !== id);
  else state.saves.push(id);
  saveState();
  document.querySelectorAll(`[data-action="save-post"][data-post="${id}"]`).forEach(b => {
    const saved = state.saves.includes(id);
    b.innerHTML = icon('bookmark'); b.classList.toggle('saved', saved);
  });
}
function addComment(postId, text) {
  text = text.trim(); if (!text) return;
  const c = { id: uid('c'), postId, userId: me().id, text, ts: Date.now() };
  state.comments.push(c); saveState();
  const card = document.querySelector(`.post-card[data-post="${postId}"]`);
  if (card) {
    const panel = card.querySelector(`[data-comments="${postId}"]`);
    const preview = card.querySelector('.post-comments-preview');
    if (panel) { panel.classList.remove('hidden'); panel.insertAdjacentHTML('beforeend', commentLineHtml(c)); }
    const np = 2;
    const previews = card.querySelectorAll('.post-comments-preview');
    const n = commentsFor(postId).length;
    let hasVA = false;
    if (n > 1 && previews.length && !previews[0].textContent.includes('View all')) {
      previews[0].insertAdjacentHTML('afterbegin', `<button type="button" class="comment-view-all" data-action="open-post" data-post="${postId}">View all ${n} comments</button>`);
      hasVA = true;
    }
    const commentsBox = card.querySelector('.comments-panel');
    const last = commentsFor(postId).slice(-1)[0];
    const previewsAll = card.querySelectorAll('.post-comments-preview');
    // replace last preview with newest comment
    if (previewsAll.length) previewsAll[previewsAll.length - 1].outerHTML = commentLineHtml(last);
  }
  if (!document.getElementById('postModal').classList.contains('hidden')) openPostModal(postId);
}
function addReelComment(id, text) {
  text = text.trim(); if (!text) return;
  const r = state.reels.find(x => x.id === id);
  if (!r) return;
  r.commentsSeed = r.commentsSeed || [];
  r.commentsSeed.push(text);
  saveState();
  renderReelCommentsSheet(id);
  renderReels();
}
function pushNotif(n) {
  state.notifications.unshift({ id: uid('n'), ts: Date.now(), read: false, ...n });
  state.notifications = state.notifications.slice(0, 30);
  renderNotifs();
}
function toggleFollow(id) {
  if (isFollowing(id)) state.follows = state.follows.filter(x => x !== id);
  else state.follows.push(id);
  saveState();
  renderRightPanel();
  if (state.viewProfile) renderProfile(state.viewProfile);
  document.querySelectorAll(`[data-action="follow"][data-user="${id}"]`).forEach(b => {
    const f = isFollowing(id);
    b.textContent = f ? 'Following' : 'Follow';
    b.classList.toggle('following-btn', f);
  });
  if (!document.getElementById('reelsView').classList.contains('hidden') || true) renderReels();
}
function openProfile(userId) { routeTo('profile', userId); }

/* ─────────────────────────── STORY VIEWER ────────────────── */
let storyTimer = null, storyIdx = 0, storyList = [];
function openStory(userId) {
  const users = [me(), ...state.users.filter(u => u.id !== me().id)];
  storyList = users.map(u => ({ ...u, img: u.id === 'anish' ? 'assets/posts/city-night.jpg' : (u.id === 'priya' ? 'assets/posts/brunch.jpg' : u.id === 'arjun' ? 'assets/posts/mountains.jpg' : u.id === 'sara' ? 'assets/posts/dog.jpg' : u.id === 'lena' ? 'assets/posts/beach-sunset.jpg' : u.id === 'vikram' ? 'assets/posts/desk.jpg' : u.id === 'meera' ? 'assets/posts/fashion.jpg' : u.id === 'rahul' ? 'assets/posts/cooking.jpg' : u.id === 'maddy' ? 'assets/reels/skate.jpg' : 'assets/reels/dj.jpg'), time: NOW - (users.findIndex(x => x.id === userId) + 1) * 1.5 * H }));
  storyIdx = Math.max(0, storyList.findIndex(s => s.id === userId));
  document.getElementById('storyViewer').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  renderStorySlide();
  autoNextStory();
}
function renderStorySlide() {
  const s = storyList[storyIdx];
  const liked = state.likes.includes('st_' + s.id);
  const canvas = document.getElementById('storyCanvas');
  canvas.innerHTML = `
    <div class="story-slide"><img src="${s.img}" alt="story"></div>
    <div class="story-progress">
      ${storyList.map((_, i) => `<span class="${i < storyIdx ? 'done' : i === storyIdx ? 'on' : ''}"><i></i></span>`).join('')}
    </div>
    <div class="story-head">
      <span data-action="open-profile" data-user="${s.id}" style="display:inline-flex">${avatarHtml(s, 'avatar-md')}</span>
      <div class="story-head-meta"><b>${esc(s.username)}</b><span>${timeAgo(s.time)}</span></div>
      <button type="button" class="icon-btn story-more" data-action="story-more">${icon('dots')}</button>
    </div>
    <div class="story-nav-zone prev" data-action="story-nav" data-dir="-1"></div>
    <div class="story-nav-zone next" data-action="story-nav" data-dir="1"></div>
    <form class="story-reply" data-action="story-reply-form">
      <input type="text" placeholder="Reply to ${esc(s.username)}..." autocomplete="off">
    </form>
    <div class="story-actions">
      <button type="button" class="${liked ? 'liked' : ''}" data-action="story-like" data-user="${s.id}" aria-label="Like story">${liked ? icon('heartFilled') : icon('heart')}</button>
      <button type="button" class="hidden" aria-hidden="true"></button>
    </div>`;
  if (!state.storiesSeen.includes(s.id)) { state.storiesSeen.push(s.id); saveState(); renderStories(); renderRightPanel(); }
}
function autoNextStory() {
  clearTimeout(storyTimer);
  storyTimer = setTimeout(() => nextStory(1), 4500);
}
function nextStory(dir) {
  clearTimeout(storyTimer);
  storyIdx += dir;
  if (storyIdx < 0) storyIdx = 0;
  if (storyIdx >= storyList.length) { closeStory(); return; }
  renderStorySlide();
  autoNextStory();
}
function closeStory() {
  clearTimeout(storyTimer);
  document.getElementById('storyViewer').classList.add('hidden');
  document.body.style.overflow = '';
}

/* ─────────────────────────── POST MODAL ──────────────────── */
function openPostModal(postId) {
  const post = state.posts.find(p => p.id === postId); if (!post) return;
  const u = getUser(post.userId);
  const liked = state.likes.includes(post.id);
  const saved = state.saves.includes(post.id);
  const box = document.getElementById('postModalBox');
  box.innerHTML = `
    <div class="post-modal-media"><img src="${post.media[0].src}" alt="post"></div>
    <div class="post-modal-side">
      <div class="post-modal-head">
        <span data-action="open-profile" data-user="${u.id}" style="display:inline-flex">${avatarHtml(u, 'avatar-md')}</span>
        <div class="post-modal-head-meta" data-action="open-profile" data-user="${u.id}">
          <b>${esc(u.username)}</b><span>${post.location ? esc(post.location) : 'Instagram'}</span>
        </div>
        ${u.id !== me().id ? `<button type="button" class="${isFollowing(u.id) ? 'btn-ghost' : 'btn-primary'}" style="font-size:13px;padding:5px 12px" data-action="follow" data-user="${u.id}">${isFollowing(u.id) ? 'Following' : 'Follow'}</button>` : ''}
        <button type="button" class="icon-btn" data-action="close-modal" data-modal="postModal">${icon('close')}</button>
      </div>
      <div class="post-modal-comments">
        <div class="comment-line">
          <b class="post-user" data-action="open-profile" data-user="${u.id}">${esc(u.username)}</b>
          <span class="comment-line-user">${esc(post.caption)}</span>
        </div>
        ${commentsFor(post.id).map(commentLineHtml).join('')}
      </div>
      <div class="post-modal-actions">
        <div class="post-actions" style="padding:0">
          <button type="button" class="action-btn ${liked ? 'liked' : ''}" data-action="like-post" data-post="${post.id}">${liked ? icon('heartFilled') : icon('heart')}</button>
          <button type="button" class="action-btn" data-action="comment-focus" data-post="${post.id}">${icon('comment')}</button>
          <button type="button" class="action-btn" data-action="share-post" data-post="${post.id}">${icon('share')}</button>
          <button type="button" class="action-btn post-save-btn ${saved ? 'saved' : ''}" data-action="save-post" data-post="${post.id}">${icon('bookmark')}</button>
        </div>
        <div class="post-modal-caption"><b data-action="open-profile" data-user="${u.id}">${fmt(postLikes(post))}</b> likes · <span>${fmt(post.views)} views</span></div>
      </div>
      <form class="post-modal-composer" data-action="modal-comment-form" data-post="${post.id}">
        <span class="side-icon">${icon('smile')}</span>
        <input type="text" id="modalCommentInput" placeholder="Add a comment..." autocomplete="off">
        <button type="submit" disabled>Post</button>
      </form>
    </div>`;
  document.getElementById('postModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hidden'));
  document.getElementById('storyViewer').classList.add('hidden');
  document.body.style.overflow = '';
}

/* ─────────────────────────── CREATE POST ─────────────────── */
let createMedia = null;
function openCreateModal() {
  state.createStep = null; createMedia = null;
  document.getElementById('createModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.getElementById('createBack').style.visibility = 'hidden';
  document.getElementById('createShare').classList.add('hidden');
  document.getElementById('createClose2').classList.remove('hidden');
  renderCreateStep('select');
}
function renderCreateStep(step) {
  const body = document.getElementById('createBody');
  const back = document.getElementById('createBack');
  const share = document.getElementById('createShare');
  if (step === 'select') {
    body.innerHTML = `
      <div class="create-drop">
        <span class="side-icon" style="width:72px;height:72px">${icon('closeUp')}</span>
        <h3>Drag photos and videos here</h3>
        <p>Share photos and videos on your profile</p>
        <button type="button" class="btn-primary" data-action="pick-media">Select from computer</button>
      </div>`;
    document.getElementById('createFileInput')?.remove();
    const fi = document.createElement('input');
    fi.type = 'file'; fi.accept = 'image/*'; fi.id = 'createFileInput'; fi.hidden = true;
    body.appendChild(fi);
    fi.addEventListener('change', e => { if (e.target.files && e.target.files[0]) { handleMediaFile(e.target.files[0]); } });
  } else if (step === 'details') {
    back.style.visibility = 'visible';
    share.classList.remove('hidden');
    document.getElementById('createClose2').classList.add('hidden');
    const u = me();
    body.innerHTML = `
      <div class="create-preview">
        <img src="${createMedia}" alt="preview">
        <button type="button" class="icon-btn remove-media" data-action="remove-media" style="color:#fff">${icon('close')}</button>
      </div>
      <div class="create-fields">
        <div class="create-field">
          ${avatarHtml(u, 'avatar-md')}
          <div class="create-field-box">
            <textarea id="createCaption" placeholder="Write a caption..." rows="3"></textarea>
          </div>
        </div>
        <div class="create-row"><span class="side-icon" style="width:20px;height:20px">${icon('heart')}</span><span class="muted">Add a location <span style="float:right;color:var(--text)"></span></span><input type="text" id="createLocation" placeholder="Location" style="margin-left:auto;background:transparent;border:none;outline:none;color:var(--text);text-align:right;font-size:14px;max-width:150px"></div>
        <div class="create-row"><span class="side-icon" style="width:20px;height:20px">${icon('comment')}</span><span class="muted">People can comment</span></div>
        <div class="create-row"><span class="side-icon" style="width:20px;height:20px">${icon('settings')}</span><span class="muted">Advanced settings</span></div>
      </div>`;
  }
}
function handleMediaFile(file) {
  if (!file.type.startsWith('image/')) { toast('Please choose an image file'); return; }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const max = 1080;
      let w = img.width, h = img.height;
      if (w > max) { h = Math.round(h * max / w); w = max; }
      const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
      cv.getContext('2d').drawImage(img, 0, 0, w, h);
      createMedia = cv.toDataURL('image/jpeg', 0.82);
      renderCreateStep('details');
    };
    img.onerror = () => toast('Could not read image');
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}
function publishPost() {
  if (!createMedia) { toast('Choose a photo first'); return; }
  const caption = (document.getElementById('createCaption')?.value || '').trim();
  const location = (document.getElementById('createLocation')?.value || '').trim();
  state.posts.unshift({ id: uid('p'), userId: me().id, media: [{ src: createMedia }], caption: caption || 'New post', location, ts: Date.now(), views: 1, likesSeed: 0 });
  saveState();
  closeCreateModal();
  renderFeed(); renderExplore();
  if (state.viewProfile === me().id) renderProfile(me().id);
  toast('Shared to your profile');
}
function closeCreateModal() { document.getElementById('createModal').classList.add('hidden'); document.body.style.overflow = ''; }

/* ─────────────────────────── EDIT PROFILE ────────────────── */
function openEditProfile() {
  const u = me();
  document.getElementById('editUsername').value = u.username;
  document.getElementById('editName').value = u.name;
  document.getElementById('editWebsite').value = u.website || '';
  document.getElementById('editBio').value = u.bio || '';
  document.getElementById('editAvatarPrev').innerHTML = avatarHtml(u, 'avatar-lg');
  document.getElementById('editError').classList.add('hidden');
  document.getElementById('editProfileModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function saveEditProfile() {
  const u = me();
  const uname = document.getElementById('editUsername').value.trim();
  const other = state.users.find(x => x.id !== u.id && x.username.toLowerCase() === uname.toLowerCase());
  if (!uname || other) { document.getElementById('editError').classList.remove('hidden'); return; }
  u.username = uname;
  u.name = document.getElementById('editName').value.trim() || u.name;
  u.website = document.getElementById('editWebsite').value.trim();
  u.bio = document.getElementById('editBio').value.trim();
  saveState();
  closeModals();
  applyAppIdentity();
  renderProfile(u.id);
  toast('Profile updated');
}

/* ─────────────────────────── COMMENTS SHEET (REELS) ───────── */
function openReelComments(id) {
  const r = state.reels.find(x => x.id === id); if (!r) return;
  if (document.getElementById('reelSheet')) document.getElementById('reelSheet').remove();
  const sheet = el(`<div class="reel-comments-sheet" id="reelSheet">
    <div class="sheet-head"><strong>Comments</strong><button type="button" class="icon-btn sheet-close" data-action="close-sheet">${icon('close')}</button></div>
    <div class="sheet-list" id="reelSheetList"></div>
    <form class="sheet-composer" data-action="reel-comment-form" data-reel="${id}">
      <input type="text" placeholder="Add a comment..." autocomplete="off">
      <button type="submit" disabled>Post</button>
    </form>
  </div>`);
  document.body.appendChild(sheet);
  renderReelCommentsSheet(id);
}
function renderReelCommentsSheet(id) {
  const list = document.getElementById('reelSheetList'); if (!list) return;
  const r = state.reels.find(x => x.id === id); if (!r) return;
  const comments = (r.commentsSeed || []).map((t, i) => ({ userId: ['maddy', 'priya', 'zara', 'anish', 'rahul', 'meera'][i % 6], text: t, ts: r.ts + i * 60e3 }));
  list.innerHTML = comments.length ? comments.map(c => commentLineHtml({ ...c, id: 'rc_' + c.text.slice(0, 8) })).join('') : '<div class="dm-empty">No comments yet. Be the first!</div>';
}

/* ═══════════════════════════════════════════════════════════
   SEARCH / NOTIFS / MORE
   ═══════════════════════════════════════════════════════════ */
function openSearch() {
  document.getElementById('searchOverlay').classList.remove('hidden');
  document.getElementById('searchInput').value = '';
  renderSearch('');
  setTimeout(() => document.getElementById('searchInput').focus(), 60);
}
function renderSearch(q) {
  const box = document.getElementById('searchResults');
  const recents = state.recents || [];
  if (!q.trim()) {
    box.innerHTML = recents.length
      ? recents.map(u => { const usr = getUser(u); return usr ? searchRow(usr) : ''; }).join('')
      : '<p class="search-empty">Search for people, pages and hashtags</p>';
    return;
  }
  const ql = q.trim().toLowerCase();
  const matches = state.users.filter(u => u.username.toLowerCase().includes(ql) || u.name.toLowerCase().includes(ql));
  box.innerHTML = matches.length ? matches.slice(0, 8).map(searchRow).join('') : '<p class="search-empty">No results found for "' + esc(q) + '"</p>';
}
function searchRow(u) {
  return `<div class="search-user" data-action="open-profile" data-user="${u.id}">
    ${avatarHtml(u, 'avatar-md')}
    <div class="search-user-meta"><b>${esc(u.username)}</b><span>${esc(u.name)}</span></div>
  </div>`;
}
function renderNotifs() {
  const box = document.getElementById('notifList');
  box.innerHTML = state.notifications.map(n => {
    const u = getUser(n.userId);
    return `<div class="notif-row ${n.read ? '' : 'unread'}" data-action="notif-click" data-notif="${n.id}" data-user="${n.userId}" data-post="${n.postId || ''}">
      ${u ? avatarHtml(u, 'avatar-md') : avatarHtml(me(), 'avatar-md')}
      <span class="notif-text"><b>${u ? esc(u.username) : 'Someone'}</b> ${esc(n.text)}</span>
      <span class="notif-time">${timeAgo(n.ts)}</span>
    </div>`;
  }).join('') || '<p class="search-empty">No notifications yet</p>';
  const unread = state.notifications.filter(n => !n.read).length;
  [['notifSideBadge'], ['notifRailBadge']].forEach(([id]) => { const b = document.getElementById(id); if (b) { b.textContent = unread > 9 ? '9+' : unread; b.classList.toggle('hidden', !unread); } });
  return unread;
}
function toggleNotifPopover() {
  const p = document.getElementById('notifPopover');
  const btn = document.getElementById('sideNotifBtn');
  if (!p.classList.contains('hidden')) { p.classList.add('hidden'); return; }
  hidePopovers();
  p.classList.remove('hidden');
  const r = btn.getBoundingClientRect();
  p.style.top = Math.max(8, Math.min(r.top, window.innerHeight - 420)) + 'px';
  if (btn.id === 'mNotifBtn') {
    // mobile top bar button → anchor to screen edge
    p.style.left = 'auto'; p.style.right = '12px'; p.style.width = 'min(320px, calc(100vw - 24px))';
  } else {
    p.style.right = 'auto'; p.style.width = '';
    p.style.left = (r.right + 10) + 'px';
  }
  renderNotifs();
}
function toggleMorePopover() {
  const p = document.getElementById('morePopover');
  const btn = document.getElementById('sideMoreBtn');
  if (!p.classList.contains('hidden')) { p.classList.add('hidden'); return; }
  hidePopovers();
  p.classList.remove('hidden');
  const r = btn.getBoundingClientRect();
  p.style.top = Math.max(8, Math.min(r.top - 240, window.innerHeight - 300)) + 'px';
  p.style.left = (r.right + 10) + 'px';
}
function hidePopovers() { document.querySelectorAll('.popover').forEach(p => p.classList.add('hidden')); }

/* ─────────────────────────── THEME ───────────────────────── */
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  state.theme = t; saveState();
}

/* ═══════════════════════════════════════════════════════════
   EVENT DELEGATION
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('click', e => {
  const act = e.target.closest('[data-action]');
  if (act) {
    const a = act.dataset.action;
    const id = act.dataset.post || act.dataset.reel || act.dataset.id;
    const userId = act.dataset.user || '';
    switch (a) {
      case 'open-story': openStory(act.dataset.user); return;
      case 'story-nav': e.stopPropagation(); clearTimeout(storyTimer); nextStory(Number(act.dataset.dir)); return;
      case 'story-like': {
        const s = storyList[storyIdx];
        if (state.likes.includes('st_' + s.id)) state.likes = state.likes.filter(x => x !== 'st_' + s.id);
        else state.likes.push('st_' + s.id);
        saveState(); renderStorySlide(); autoNextStory(); return;
      }
      case 'story-more': toast('Report story'); return;
      case 'story-reply-form': { e.preventDefault(); return; }
      case 'story-close': closeStory(); return;
      case 'like-post': toggleLike(act.dataset.post); return;
      case 'double-like': {
        const pId = act.dataset.post;
        const heart = act.querySelector('.double-tap-heart');
        heart.innerHTML = icon('heartFilled');
        heart.classList.remove('pop'); void heart.offsetWidth; heart.classList.add('pop');
        if (!state.likes.includes(pId)) { state.likes.push(pId); saveState(); }
        updateLikeButton(pId);
        setTimeout(() => { heart.textContent = ''; heart.classList.remove('pop'); }, 700);
        return;
      }
      case 'save-post': toggleSave(act.dataset.post); return;
      case 'share-post': toast('Link copied to clipboard 📋'); return;
      case 'post-more': toast(('Post options (demo)')); return;
      case 'open-post': openPostModal(act.dataset.post); return;
      case 'open-profile': closeModals(); hidePopovers(); openProfile(act.dataset.user); return;
      case 'follow': toggleFollow(act.dataset.user); return;
      case 'message-user': setTimeout(() => routeTo('messages', act.dataset.user), 50); return;
      case 'switch-account': toast('Account switching is disabled in this demo'); return;
      case 'explore': routeTo('explore'); return;
      case 'carousel': {
        const card = act.closest('.post-card');
        const track = card.querySelector('[data-track]');
        const imgs = track.querySelectorAll('img');
        let idx = (Number(card.dataset.slide) || 0) + Number(act.dataset.dir);
        const n = imgs.length;
        if (idx < 0) idx = n - 1; if (idx >= n) idx = 0;
        card.dataset.slide = idx;
        imgs.forEach((im, i) => im.style.display = i === idx ? 'block' : 'none');
        card.querySelectorAll('.carousel-dots span').forEach((d, i) => d.classList.toggle('on', i === idx));
        return;
      }
      case 'comment-form': e.preventDefault(); addComment(act.dataset.post, act.querySelector('input').value); act.querySelector('input').value = ''; act.querySelector('button').disabled = true; return;
      case 'comment-focus': document.getElementById('modalCommentInput')?.focus(); return;
      case 'modal-comment-form': e.preventDefault(); addComment(act.dataset.post, document.getElementById('modalCommentInput').value); document.getElementById('modalCommentInput').value = ''; act.querySelector('button').disabled = true; return;
      case 'comment-like': toast('Liked comment'); return;
      case 'like-reel': toggleLike(act.dataset.reel); return;
      case 'reel-mute': act.classList.toggle('mute'); toast('Sound ' + (act.classList.contains('mute') ? 'muted' : 'on')); return;
      case 'reel-comments': openReelComments(act.dataset.reel); return;
      case 'close-sheet': act.closest('.reel-comments-sheet').remove(); return;
      case 'reel-comment-form': e.preventDefault(); addReelComment(act.dataset.reel, act.querySelector('input').value); act.querySelector('input').value = ''; act.querySelector('button').disabled = true; return;
      case 'reels-from-profile': routeTo('reels'); return;
      case 'open-reel': routeTo('reels'); return;
      case 'open-explore-item': act.dataset.kind === 'post' ? openPostModal(act.dataset.id) : routeTo('reels'); return;
      case 'open-thread': openThread(act.dataset.user); return;
      case 'edit-profile': openEditProfile(); return;
      case 'create-post': openCreateModal(); return;
      case 'pick-media': document.getElementById('createFileInput')?.click(); return;
      case 'remove-media': createMedia = null; renderCreateStep('select'); return;
      case 'notif-click': {
        const n = state.notifications.find(x => x.id === act.dataset.notif);
        if (n) n.read = true;
        saveState(); hidePopovers(); renderNotifs();
        if (act.dataset.post) openPostModal(act.dataset.post);
        else if (act.dataset.user) openProfile(act.dataset.user);
        return;
      }
      case 'close-modal': closeModals(); return;
      case 'close-sheet2': break;
      case 'create-back': renderCreateStep('select'); break;
      case 'create-close': closeCreateModal(); break;
    }
  }
  // close popovers on outside click
  if (!e.target.closest('.popover') && !e.target.closest('#sideNotifBtn') && !e.target.closest('#sideMoreBtn')) hidePopovers();
  // modal backdrop close
  if (e.target.classList.contains('modal-backdrop')) closeModals();
  // close search
  if (e.target.id === 'searchOverlay') closeSearchOverlay();
});

/* submit handlers (forms can't be handled via the click delegate) */
document.addEventListener('submit', e => {
  const form = e.target.closest('form');
  if (!form) return;
  const act = form.closest('[data-action]');
  if (!act) return;
  const a = act.dataset.action;
  if (a === 'comment-form' || a === 'modal-comment-form' || a === 'reel-comment-form' || a === 'story-reply-form') {
    e.preventDefault();
    if (a === 'comment-form') {
      const input = act.querySelector('input');
      addComment(act.dataset.post, input.value);
      input.value = '';
      const b = act.querySelector('button'); b.disabled = true; b.classList.remove('ready');
    } else if (a === 'modal-comment-form') {
      const input = document.getElementById('modalCommentInput');
      addComment(act.dataset.post, input.value);
      input.value = '';
      const b = act.querySelector('button'); b.disabled = true; b.classList.remove('ready');
    } else if (a === 'reel-comment-form') {
      const input = act.querySelector('input');
      addReelComment(act.dataset.reel, input.value);
      input.value = '';
      const b = act.querySelector('button'); b.disabled = true; b.classList.remove('ready');
    } else {
      toast('Reply sent (demo)');
      form.reset();
    }
  }
});

/* input handlers */
document.addEventListener('input', e => {
  if (e.target.matches('[data-comment-input]')) {
    const b = e.target.closest('form').querySelector('button');
    b.disabled = !e.target.value.trim();
    b.classList.toggle('ready', !!e.target.value.trim());
  }
  if (e.target.id === 'modalCommentInput') {
    const b = e.target.closest('form').querySelector('button');
    b.disabled = !e.target.value.trim(); b.classList.toggle('ready', !!e.target.value.trim());
  }
  if (e.target.closest('.sheet-composer')) {
    const b = e.target.closest('form').querySelector('button');
    b.disabled = !e.target.value.trim(); b.classList.toggle('ready', !!e.target.value.trim());
  }
  if (e.target.id === 'searchInput') renderSearch(e.target.value);
  if (e.target.id === 'newDmSearch') renderNewDm(e.target.value);
});

/* keyboard */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!document.getElementById('storyViewer').classList.contains('hidden')) { closeStory(); return; }
    closeModals(); closeSearchOverlay(); closeThreadIfDesktop();
  }
  if (!document.getElementById('storyViewer').classList.contains('hidden') && e.key === 'ArrowRight') nextStory(1);
  if (!document.getElementById('storyViewer').classList.contains('hidden') && e.key === 'ArrowLeft') nextStory(-1);
});

function closeSearchOverlay() { document.getElementById('searchOverlay').classList.add('hidden'); document.getElementById('searchResults').innerHTML = ''; }
function closeThreadIfDesktop() {
  if (window.innerWidth <= 767) closeThread();
}

/* ─────────────────────────── NEW DM ──────────────────────── */
function openNewDm() {
  document.getElementById('newDmModal').classList.remove('hidden');
  document.getElementById('newDmSearch').value = '';
  renderNewDm('');
}
function renderNewDm(q) {
  const box = document.getElementById('newDmResults');
  const ql = q.trim().toLowerCase();
  const users = state.users.filter(u => u.id !== me().id && (!ql || u.username.toLowerCase().includes(ql) || u.name.toLowerCase().includes(ql))).slice(0, 10);
  box.innerHTML = users.map(u => `<div class="search-user" data-action="newdm-pick" data-user="${u.id}">
    ${avatarHtml(u, 'avatar-md')}
    <div class="search-user-meta"><b>${esc(u.username)}</b><span>${esc(u.name)}</span></div>
  </div>`).join('') || '<p class="search-empty">No users found</p>';
}

/* ═══════════════════════════════════════════════════════════
   BOOTSTRAP
   ═══════════════════════════════════════════════════════════ */
function init() {
  applyTheme(state.theme || 'dark');

  // fill icon slots
  document.querySelectorAll('[data-icon]').forEach(s => { s.innerHTML = icon(s.dataset.icon); });
  document.getElementById('railUserIcon').innerHTML = avatarHtml(me() || getUser('anish'), 'avatar-sm').replace('class="avatar avatar-sm', 'class="avatar avatar-sm side-avatar');

  // auth wiring
  const form = document.getElementById('loginForm');
  const userI = document.getElementById('loginUser');
  const passI = document.getElementById('loginPass');
  const loginBtn = document.getElementById('loginBtn');
  const isSignup = { v: false };
  function updateLoginBtn() { loginBtn.disabled = !userI.value.trim() || !passI.value.trim(); }
  userI.addEventListener('input', updateLoginBtn);
  passI.addEventListener('input', updateLoginBtn);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const uname = userI.value.trim().replace(/\s+/g, '.').toLowerCase();
    if (!uname) return;
    let u = state.users.find(x => x.username.toLowerCase() === uname);
    if (!u) {
      u = { id: uid('u'), username: uname, name: userI.value.trim().split(/[.\s]+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' '), bio: 'New to Instagram', website: '', avatar: '', verified: false, followers: 0, following: 12 };
      state.users.push(u);
    }
    enterApp(u.id);
  });
  document.getElementById('fbLoginBtn').addEventListener('click', () => toast('Facebook login is disabled in this demo'));
  document.getElementById('forgotLink').addEventListener('click', e => { e.preventDefault(); toast('Password reset is not available in this demo'); });
  document.getElementById('authSwitchBtn').addEventListener('click', () => {
    isSignup.v = !isSignup.v;
    document.getElementById('authSub').textContent = isSignup.v ? 'Sign up to see photos and videos from your friends.' : 'Log in to see photos and videos from your friends.';
    document.getElementById('authSwitchText').textContent = isSignup.v ? 'Have an account?' : "Don't have an account?";
    document.getElementById('authSwitchBtn').textContent = isSignup.v ? 'Log in' : 'Sign up';
    document.getElementById('loginBtn').textContent = isSignup.v ? 'Sign up' : 'Log in';
    document.getElementById('loginPass').placeholder = 'Password (any password works)';
  });
  document.getElementById('continueAsBtn').addEventListener('click', () => enterApp('anish'));
  applyAppIdentity();

  // sidebar nav
  document.querySelectorAll('[data-nav]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    hidePopovers();
    const nav = a.dataset.nav;
    if (a.hasAttribute('data-user-profile') && nav === 'profile') { state.viewProfile = me().id; renderProfile(me().id); }
    routeTo(nav);
  }));
  document.getElementById('sideSearchBtn').addEventListener('click', openSearch);
  document.getElementById('railSearchBtn').addEventListener('click', openSearch);
  document.getElementById('bnSearchBtn').addEventListener('click', openSearch);
  document.getElementById('searchClose').addEventListener('click', closeSearchOverlay);
  document.getElementById('sideNotifBtn').addEventListener('click', toggleNotifPopover);
  document.getElementById('railNotifBtn').addEventListener('click', toggleNotifPopover);
  document.getElementById('mNotifBtn').addEventListener('click', toggleNotifPopover);
  document.getElementById('sideMoreBtn').addEventListener('click', toggleMorePopover);
  document.getElementById('railMoreBtn').addEventListener('click', toggleMorePopover);
  document.getElementById('themeToggle').addEventListener('click', () => { applyTheme(state.theme === 'dark' ? 'light' : 'dark'); hidePopovers(); toast('Appearance updated'); });
  document.getElementById('settingsBtn').addEventListener('click', () => { hidePopovers(); toast('Settings are not available in this demo'); });
  document.getElementById('logoutBtn').addEventListener('click', signOut);
  document.getElementById('sideCreateBtn').addEventListener('click', openCreateModal);
  document.getElementById('railCreateBtn').addEventListener('click', openCreateModal);
  document.getElementById('bnCreateBtn').addEventListener('click', openCreateModal);
  document.getElementById('createClose2').addEventListener('click', closeCreateModal);
  document.getElementById('createBack').addEventListener('click', () => { createMedia = null; renderCreateStep('select'); document.getElementById('createBack').style.visibility = 'hidden'; document.getElementById('createShare').classList.add('hidden'); document.getElementById('createClose2').classList.remove('hidden'); });
  document.getElementById('createShare').addEventListener('click', publishPost);

  // story viewer close
  document.getElementById('storyClose').addEventListener('click', closeStory);
  document.getElementById('storyViewer').addEventListener('click', e => { if (e.target === document.getElementById('storyViewer')) closeStory(); });

  // post modal
  document.getElementById('postModal').addEventListener('click', e => { if (e.target === document.getElementById('postModal')) closeModals(); });

  // create modal backdrop
  document.getElementById('createModal').addEventListener('click', e => { if (e.target === document.getElementById('createModal')) closeCreateModal(); });

  // edit profile
  document.getElementById('editClose').addEventListener('click', closeModals);
  document.getElementById('editCancel').addEventListener('click', closeModals);
  document.getElementById('editSave').addEventListener('click', saveEditProfile);
  document.getElementById('editAvatarBtn').addEventListener('click', () => document.getElementById('editAvatarFile').click());
  document.getElementById('editAvatarFile').addEventListener('change', e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      const img = new Image();
      img.onload = () => {
        const cv = document.createElement('canvas'); cv.width = 300; cv.height = 300;
        const ctx = cv.getContext('2d');
        const s = Math.min(img.width, img.height);
        ctx.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, 300, 300);
        me().avatar = cv.toDataURL('image/jpeg', 0.85);
        saveState();
        document.getElementById('editAvatarPrev').innerHTML = avatarHtml(me(), 'avatar-lg');
        applyAppIdentity();
        toast('Photo updated');
      };
      img.src = r.result;
    };
    r.readAsDataURL(f);
  });

  // new dm
  document.getElementById('newDmBtn').addEventListener('click', openNewDm);
  document.getElementById('newDmClose').addEventListener('click', () => document.getElementById('newDmModal').classList.add('hidden'));
  document.addEventListener('click', e => {
    const pick = e.target.closest('[data-action="newdm-pick"]');
    if (pick) {
      document.getElementById('newDmModal').classList.add('hidden');
      if (!state.dms[pick.dataset.user]) state.dms[pick.dataset.user] = { messages: [], unread: 0 };
      saveState();
      renderDmInbox();
      openThread(pick.dataset.user);
    }
  });
  document.getElementById('dmBackBtn').addEventListener('click', closeThread);
  document.getElementById('dmComposer').addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('dmInput');
    const txt = input.value.trim(); if (!txt || !state.dmOpen) return;
    const c = state.dms[state.dmOpen];
    c.messages.push({ from: me().id, text: txt, ts: Date.now() });
    saveState();
    input.value = '';
    renderThread(state.dmOpen);
    renderDmInbox();
    // fake reply for liveliness
    setTimeout(() => {
      const replies = ['Nice! 😄', 'Haha, love that', 'For real!!', 'Sounds good 🙂', 'Okay okay, noted 🙌', 'Same here tbh'];
      const r = replies[Math.floor(Math.random() * replies.length)];
      c.messages.push({ from: state.dmOpen, text: r, ts: Date.now() });
      c.unread = 0;
      saveState();
      if (state.dmOpen) renderThread(state.dmOpen);
      renderDmInbox();
    }, 1400 + Math.random() * 1800);
  });

  // notifications
  renderNotifs();

  if (state.currentUser) {
    document.getElementById('authScreen').classList.add('hidden');
    document.getElementById('appShell').classList.remove('hidden');
    applyAppIdentity();
    routeTo('home');
  } else {
    showAuth();
    // fill continue-as avatar
    document.getElementById('continueAsAvatar').innerHTML = avatarHtml(getUser('anish'), 'avatar-sm');
  }
}
document.addEventListener('DOMContentLoaded', init);
