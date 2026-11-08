const CACHE='spanish-study-v3';
const FILES=['./','./index.html','./class-notes.html','./class-data.js','./dele-a2.html','./speaking.html','./manifest.json','./icon.svg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// 네트워크 우선: 새로 올린 노트가 바로 보이고, 오프라인일 때만 저장본 사용
// cache:'no-cache' → 브라우저 HTTP 캐시(GitHub Pages는 10분 보관)를 건너뛰고 서버에 최신본인지 매번 확인
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{if(r&&r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
