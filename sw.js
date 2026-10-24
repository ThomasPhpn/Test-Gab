const CACHE_NAME = "kine-v1.4";

// Chemins relatifs : fonctionne aussi sur https://pseudo.github.io/nom-du-depot/
const FILES = [
  "./",
  "index.html",
  "config.html",
  "timer.html",
  "fin.html",
  "historique.html",
  "folder.html",
  "mes_programmes.html",
  "pathologies.html",
  "liste_pathologies.html",
  "style.css",
  "home.css",
  "logo.png",
  "respir/index.html"
];

/* INSTALL : un fichier manquant ne bloque plus l’installation */
self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.allSettled(FILES.map(f => cache.add(f)))
    )
  );
});

/* ACTIVATE : supprime les anciens caches */
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

/* FETCH */
self.addEventListener("fetch", e => {

  if(e.request.method !== "GET") return;

  // Pages HTML : réseau d’abord, cache en secours
  if(e.request.destination === "document"){
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Autres fichiers : cache d’abord
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );

});
