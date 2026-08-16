importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCPIUH_u9ioJqKQVgoPJjcjeHeS6TiSnko",
  authDomain: "test-6415b.firebaseapp.com",
  databaseURL: "https://test-6415b-default-rtdb.firebaseio.com",
  projectId: "test-6415b",
  storageBucket: "test-6415b.firebasestorage.app",
  messagingSenderId: "497782182910",
  appId: "1:497782182910:web:e4067768da80a43639e6af",
  measurementId: "G-EGGK184THC"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.data?.title || "Notification";
  const body = payload.data?.body || "";

  self.registration.showNotification(title, {
    body: body,
    icon: "/icon.png"
  });
});
