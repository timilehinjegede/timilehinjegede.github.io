'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "c27c9d997ec70f3d4ca62153aefa60b9",
"/main.dart.js": "1fa9068245931bc1d5d4cf8c1f09a394",
"/favicon.png": "fbf1dd5deec1c7b9b2e6cf315a292260",
"/icons/Icon-192.png": "7a159241d91d56e74967559200d5779d",
"/icons/Icon-512.png": "9c5e322dcdf979c3db0f1fa5290dc480",
"/manifest.json": "75dfa817f373b2ea4d883a3fc4faa419",
"/.git/config": "ee65f19a4ea824d3c09e0802e6769bbe",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/3b/30178c2a0c8abe53f961d5fc47059a9d4030c1": "dc9e82995b7ee85fe8c33b644e8e3a12",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/51/25e3dad7d0b3e44839373b88fab8a86e1cf99e": "722dba805bd04d8c1303ad7e3d81867d",
"/.git/objects/60/9b2c4b21827cd4099902e028db20ef4a97e74a": "0ebf3ed866f5addae4514308fc0a5486",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/42/2c2d815069f5fab9671038e5b2a4cc52eddcce": "f9c212f88b5d9bc43fa6202b09ae4900",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/26/8e725d14bf8bf72c6e424b6c3ddc1d8e04104f": "d79cabdd3817261dc48012ff299c6eb0",
"/.git/objects/4d/891f69bd69597714decebaac842754b9de3c4b": "145d37741f252b560be8ac9c18e5389e",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/72/a19877359b97522a150a0dec4c7b0961f4cfa2": "0fc7714c6b5b263c590ba116b680b65b",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/9a/27e9346a03a27459a5235256819f1ae460268e": "7d9b9d4544e620bac4da4dd52d457030",
"/.git/objects/36/3b97aeec6443d79a2354ef304c40f6865bb4c2": "85e65ba291231847c2401f3ff20b80d9",
"/.git/objects/99/7b44258f8c90f6f0b460c625b80d9e891e236e": "ee8b95bb3513138c13a6d46006c06392",
"/.git/objects/55/17199f833c969b1aba4e03e893823122fdca60": "b2e690a236435c51586488038b57c0f3",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/c3/651f98342c2ddfd350eb2ab2688d0287ee0a33": "7a8dd4001e43db5ef12f7c4fe27ea27a",
"/.git/objects/ce/ff8e1ef98510d30f870670cbc0c76f6eb8e97b": "53ad85d9ea8e58a51f5b6d39fc0963d8",
"/.git/objects/79/1b6d0612c4874e032265d832b9f3fdb2db8d5a": "9422536ded1a5a72cfbc6c0703bda2ea",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
"/.git/logs/HEAD": "20ac745f492f2dea7cb14f8ff01cc259",
"/.git/logs/refs/heads/master": "20ac745f492f2dea7cb14f8ff01cc259",
"/.git/logs/refs/remotes/origin/master": "c3db5fd0211992eae8f422e57455d0e9",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/refs/heads/master": "87f3a9c4b10e2709dcaf2b39219348e1",
"/.git/refs/remotes/origin/master": "87f3a9c4b10e2709dcaf2b39219348e1",
"/.git/index": "a12a4aa2bc721911381a86cc070a552c",
"/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"/assets/LICENSE": "54e0edfd4c265cad3acce780975afde7",
"/assets/images/soon1.png": "b5dd9eed3963ee8e5434a4ea24acb730",
"/assets/images/github.png": "3e54ed15b9cd877c5223f5ecf64579df",
"/assets/images/gmail.png": "dc70d4782a4c9c522ab90f1d27c76a5e",
"/assets/images/linkeln.png": "aebe52c5836835593474dc349266566c",
"/assets/images/twitter.png": "14228c7a6cea369958dfb2708b4624dc",
"/assets/images/insta.png": "1d056fc2d689382b57ff7eed863274f5",
"/assets/images/soon.png": "fa594c94bba7b9a829858981e5e5079a",
"/assets/AssetManifest.json": "6dda33df1bbfb016c3aafb09865b373e",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
