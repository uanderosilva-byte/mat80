// MAT80 v3.2 — desativa o cache da versão antiga para atualização no iPhone.
self.addEventListener('install',event=>{event.waitUntil(self.skipWaiting());});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('mat80-')).map(k=>caches.delete(k)));await self.registration.unregister();await self.clients.claim();})());});
// Sem interceptação de fetch: HTML sempre solicitado à rede.
