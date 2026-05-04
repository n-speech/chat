importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDjqI-fCpmUAc4S-kBDgYBCq-ezCzmsabU",
  authDomain: "chat-8bb2b.firebaseapp.com",
  databaseURL: "https://chat-8bb2b-default-rtdb.firebaseio.com/",
  projectId: "chat-8bb2b",
  storageBucket: "chat-8bb2b.firebasestorage.app",
  messagingSenderId: "248692438123",
  appId: "1:248692438123:web:acf2acf528f4a2e3186d2e"
});

const messaging = firebase.messaging();

// Уведомление когда вкладка закрыта
messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'
  });
});
