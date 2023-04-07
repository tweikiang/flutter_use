'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_79.part.js": "5a5dc209216abbb73bb1fea03139303f",
"main.dart.js_24.part.js": "791eeecadd275f61cb98fda2f423889f",
"main.dart.js_34.part.js": "3aa2d5f48fb98f56012232455230c74d",
"main.dart.js_46.part.js": "cc695454d25ba69f58cb076570d82a1a",
"main.dart.js_56.part.js": "d6a58ee467a1090131bdef84687ae0f1",
"version.json": "b985c4d1d914ac8c0ed39c4fc9c883e2",
"main.dart.js_7.part.js": "642e3ea4b3d07a055879c3aeb91180f0",
"main.dart.js_60.part.js": "00aef6f73ef63f089285f5d0a529e0c4",
"main.dart.js_12.part.js": "fb14a7ca4b8f59283dbd9295b36fdf6a",
"main.dart.js_84.part.js": "e4c301b3ea216995cb2af72496524b2b",
"main.dart.js_71.part.js": "0e95f69bc3e74905ef36d284681f8f79",
"main.dart.js_61.part.js": "c5b71e0b902a32cb1adfef66d423892f",
"main.dart.js_6.part.js": "f17838d19381df21c42cb62b596bfa49",
"index.html": "f132a9e4b984e857597a8b1c65d9908e",
"/": "f132a9e4b984e857597a8b1c65d9908e",
"main.dart.js_13.part.js": "b79dffca105c4864a9c78613a451ff6b",
"main.dart.js_85.part.js": "2555b8aa7287529e07439c706e48ed7c",
"main.dart.js_68.part.js": "80b3eee239d719d1d2a2cef92fb0347e",
"main.dart.js_78.part.js": "378285c0e1a016b0ff2f33d877869e41",
"main.dart.js_25.part.js": "90a6c34b55c519b4e0b0e155a258eff2",
"main.dart.js_57.part.js": "5a2a31281ba92caf1b25aef078bf374d",
"main.dart.js_47.part.js": "b1269578b1dfb4795f3404803911bbd6",
"main.dart.js_11.part.js": "42228e753fa4dda9c668142e38456801",
"main.dart.js_63.part.js": "f942ec52d5b5bdcad625b04fda0baf94",
"main.dart.js_4.part.js": "1525a2771058119a6bad3757fb6af21d",
"main.dart.js_73.part.js": "ec54cf14bc861fbf2c46ec54c3873e0b",
"main.dart.js": "ba0f717de0056193af718d8dc036e644",
"main.dart.js_87.part.js": "42d453b54e787820bd9ccb4589217190",
"main.dart.js_18.part.js": "f7e589c6e18372e7c822a8830cf906c7",
"main.dart.js_45.part.js": "9e7bab85ad706998701836c409daf2aa",
"main.dart.js_55.part.js": "156a597b9b2579923986255759eb3af4",
"main.dart.js_27.part.js": "11ed593d2a2171ea3aeabbd84519373f",
"main.dart.js_19.part.js": "aeb9fe0466f0ac95ff5705a72f9f3efb",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_44.part.js": "00d4750db9af2edbb6ff94806b8408e3",
"main.dart.js_36.part.js": "b1e87ed517b1793fcdc9d5de4864755d",
"main.dart.js_26.part.js": "90d89183842f6f655036fb3ce68801e0",
"main.dart.js_10.part.js": "58b0a902ee086366cfcd1246ac789fe8",
"main.dart.js_72.part.js": "ddb6de5e1a04161f6f24950e8b90b7ed",
"main.dart.js_5.part.js": "cc741c0c8d9f0d6864cfe4138d3b9e50",
"main.dart.js_86.part.js": "ac7e1e81c9adac773f86c2bea279a29a",
"main.dart.js_83.part.js": "e99b5a1539e8f4fed13666480f538ef3",
"main.dart.js_93.part.js": "0bc7855216c626d78027be9cc4c2780d",
"main.dart.js_58.part.js": "aec6558b6f427b210f2828c060a05869",
"main.dart.js_48.part.js": "c48c98803d95932cfc7ff68bc4abe7f1",
"main.dart.js_67.part.js": "21f61c7ae451fd9c108acc2931de491c",
"main.dart.js_77.part.js": "1c3ab59fcb587be22987c9cc10f6fd15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_33.part.js": "8042317db775aa37a266d96b293047e9",
"main.dart.js_9.part.js": "a2c762070b51620bc73d41b6dcb850bd",
"main.dart.js_32.part.js": "ef348477ba609bac1fb6cb1bc5f8677a",
"main.dart.js_22.part.js": "257e0d398af03a555a618768bcb508b5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22d6902bd5c1b4ab416be7902fd5230c",
"main.dart.js_92.part.js": "432d04dbd29b12c80bd6bd1f6967485e",
"main.dart.js_82.part.js": "9ab62d96207ea43bdff4f6c0bb6c3cf2",
"main.dart.js_49.part.js": "9403148ed290147ce40fb52a924aaf2d",
"main.dart.js_59.part.js": "c735fce588eacb0425b47a591fba0983",
"main.dart.js_14.part.js": "984f9ab6bde0923fbf5156986af9addc",
"main.dart.js_76.part.js": "98d01ff0c21974916291979ced0d8dd0",
"main.dart.js_66.part.js": "789c3113fc4a33bdbc4ef98f0acaf664",
"main.dart.js_1.part.js": "2a1871fdcc1f9587de582b6c383e759d",
"main.dart.js_20.part.js": "ff77b1e5cc31fe1c36000262a8c630cd",
"main.dart.js_30.part.js": "4dd496de50b1da76545e49919f03eb56",
"main.dart.js_89.part.js": "2414a9a397e380a18cf6213a8d0158fe",
"main.dart.js_42.part.js": "d1538331f132fcbad395a1356d9c850e",
"main.dart.js_52.part.js": "c05bfcd3538a878f622c94327bdc90de",
"main.dart.js_29.part.js": "44a236351cf85c8089b2a3cfda119ddd",
"main.dart.js_80.part.js": "e8bc3895a7343b36be9c6b6a15ae1e87",
"main.dart.js_90.part.js": "2228ddd3b80467fb109c0764d8497fe1",
"main.dart.js_3.part.js": "5d65fb8623f8245b04cfdc7f8fbaafc0",
"main.dart.js_74.part.js": "a2e1c837c2f46e52c3342e0c53a66924",
"main.dart.js_16.part.js": "3619f653300b92fb0884f93c92b34b07",
"assets/AssetManifest.json": "fb3497bac92b8657a04fa26e798c1c4c",
"assets/NOTICES": "dc37e480e599eb57293e09bb5587f022",
"assets/FontManifest.json": "4e89f22a52db8ac487995dce3ae4150e",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/lib/widgets/show/custome_dialog_location.dart": "132ef4f0a41f3987a98c7c071c7b1bfb",
"assets/lib/widgets/show/custome_dialog_bind_page.dart": "2c32b7474c093b575c80e365b606fad0",
"assets/lib/widgets/show/custome_dialog_bind_widget.dart": "9eeca82f705293cc0319467993de84cd",
"assets/lib/widgets/show/custome_dialog_permanent.dart": "02503c61ba7cb650cee32e93732089e2",
"assets/lib/widgets/show/custome_dialog_stack.dart": "08041b25c807638151252e2ef5cc3a06",
"assets/lib/widgets/show/custome_dialog_penetrate.dart": "0b1736641b02d55f88af18a3d7cc37e2",
"assets/lib/widgets/show/custome_dialog_single.dart": "7a7ae5b47ddfd1de922050226b879a40",
"assets/lib/widgets/show/custome_dialog_system.dart": "783f63bde11011e973c9cbb2540a9763",
"assets/lib/widgets/show/custome_dialog_animation.dart": "8391096457353bfd335a656a16f84dab",
"assets/lib/widgets/show/custome_dialog_carry_result.dart": "1a17387c1f7a889050abe27147c447f3",
"assets/lib/widgets/show/custome_dialog_easy.dart": "3963e75c271d4b7635bc8de7f1344ebd",
"assets/lib/widgets/other/other_hard_close.dart": "b5753efd7045d011cb7fd51e946f6c26",
"assets/lib/widgets/other/other_trick.dart": "f6a7185f5b3168d29a40734cffa07a42",
"assets/lib/widgets/show_attach/attach_dialog_guide.dart": "7c3cd6353e81390f7033fe20798d2ea7",
"assets/lib/widgets/show_attach/attach_dialog_location.dart": "3722aa1664ed9f32d2fdaf62674121fd",
"assets/lib/widgets/show_attach/attach_dialog_point.dart": "a9de6b259da83e38250ea6f1fe7e538a",
"assets/lib/widgets/show_attach/attach_dialog_business.dart": "0765805573f65fd70a7cc423d9b6cadb",
"assets/lib/widgets/show_attach/attach_dialog_scale_point.dart": "935dac137318992dc6f043c0e94863d2",
"assets/lib/widgets/show_attach/attach_dialog_imitate.dart": "db80aece36ad4fd3fe7b869987c1ed0f",
"assets/lib/widgets/show_attach/attach_dialog_target.dart": "439dea9bbfd5f547e69508ea81b2fd58",
"assets/lib/widgets/show_loading/loading_custom.dart": "4cac707f1c84e32371c7da2910683cba",
"assets/lib/widgets/show_loading/loading_least_time.dart": "ef8e153b2a96555f1d2adf22e0280fc8",
"assets/lib/widgets/show_loading/loading_default.dart": "fb616216e5c7e80aa24404495df6181c",
"assets/lib/widgets/show_loading/loading_param.dart": "a2103a7dbec7d1ff0acd510d49339cba",
"assets/lib/widgets/show_notify/notify_dialog_error.dart": "efd4072e0257b2a25d4af5ba55fd8a58",
"assets/lib/widgets/show_notify/notify_dialog_alter.dart": "d7e65b65403cb080abd7bf1915953051",
"assets/lib/widgets/show_notify/notify_dialog_failure.dart": "f8899c2651312c961c279aac9b82e1a1",
"assets/lib/widgets/show_notify/notify_dialog_success.dart": "29b12a83c5345828c6430fd942501402",
"assets/lib/widgets/show_notify/notify_dialog_waring.dart": "4d5db91f739d15641a03656d82ee0c6c",
"assets/lib/widgets/show_toast/toast_interval_time.dart": "1c4bed3c60f66de50cdee596164c951d",
"assets/lib/widgets/show_toast/toast_default.dart": "c472de6fbe6a91a7d326dd42522764fa",
"assets/lib/widgets/show_toast/toast_smart.dart": "528f3c16f5b1b93a61d7a6865a7b2337",
"assets/lib/widgets/show_toast/toast_type.dart": "e0bf6c99c827d83ce80569df957e0b92",
"assets/lib/widgets/show_toast/toast_custom.dart": "12177f6294673fda693d3aba9e965904",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/fonts/iconfont.ttf": "9f74fe82e2b8eb72ad768b56d7a6abc2",
"main.dart.js_91.part.js": "d36f76f286ca0bfe1872d203b4fcca3e",
"main.dart.js_81.part.js": "8c2b42b70b68c66bb050b46bb231db05",
"main.dart.js_28.part.js": "30d99413197040826d4779c3a650c9ac",
"main.dart.js_2.part.js": "05422f9345a0f685e90c0a8d46671617",
"main.dart.js_65.part.js": "5469b4fb886112040fa13fa9078ad8d3",
"main.dart.js_17.part.js": "df63e4856060fd0c85671c7095ad4120",
"main.dart.js_88.part.js": "1c49bb38d39f6d4b0c1da1d6dd4100af",
"main.dart.js_31.part.js": "e60a7697b0ac4cab6792a88441f85e94",
"main.dart.js_21.part.js": "548ad5e6f5b7fe2ab85ad77deb42bbb9",
"main.dart.js_53.part.js": "53090cf9f30e660692cd41c276f9c169",
"main.dart.js_43.part.js": "b9a461b8b966d446340eb7467826a1c2",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
