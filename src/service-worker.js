importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
); // <-- workbox 최신번전 CDN 추가

//워크박스는 캐시를 수행할 때 진행 상황을 콘솔 창에 표시해 줍니다.
//개발하면서 이러한 메시지를 볼 수 있으면 편리한데 디버그 모드일 때만 가능합니다.
//배포를 위해 더는 디버그가 필요없다면 프로덕션 모드로 변경하면 됩니다.
// Workbox를 디버그모드로 설정
// workbox.setConfig({
//   debug: true,
// });

// 배포용 프로덕션 모드
workbox.setConfig({
  debug: false,
});

// Vue-Cli에서 기본으로 제공하는 프리캐시 설정을 Workbox에 적용
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST); // <-- self.__WB_MANIFEST로 변경

// 촬영된 이미지 캐시
workbox.routing.registerRoute(
  new RegExp(
    "https://firebasestorage.googleapis.com/v0/b/pwa-camera.appspot.com/.*"
  ),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "camera-images",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        // <-- ExpirationPlugin로 대문자 'E' 변경
        maxEntries: 60, //이미지를 총 60개만 캐시하도록 지정
        maxAgeSeconds: 365 * 24 * 60 * 60, // 1년 지정
      }),
    ],
  })
);
