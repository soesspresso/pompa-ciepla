const webpush = require('web-push');
const { createClient } = require('@supabase/supabase-js');

// Klucze VAPID (pobierane bezpiecznie z Secrets)
const vapidKeys = {
  publicKey: process.env.VAPID_PUBLIC_KEY,
  privateKey: process.env.VAPID_PRIVATE_KEY
};

// Skonfiguruj web-push z Twoim adresem e-mail i kluczami
webpush.setVapidDetails(
  'mailto:rafal.chylinski@gmail.com', // Twój adres email
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Inicjalizacja Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function sendNotifications() {
  console.log("Rozpoczynam wysyłanie powiadomień...");
  
  // Pobierz wszystkie subskrypcje z tabeli push_subscriptions
  const { data: subs, error } = await supabase.from('push_subscriptions').select('subscription');
  
  if (error) {
    console.error("Błąd pobierania subskrypcji:", error.message);
    return;
  }
  
  if (!subs || subs.length === 0) {
    console.log("Brak zarejestrowanych urządzeń.");
    return;
  }

  // Treść powiadomienia
  const payload = JSON.stringify({
    title: 'PC Monitor',
    body: 'Mamy 1. dzień miesiąca! Czas na wpisanie nowego odczytu pompy ciepła.'
  });

  // Wysłanie powiadomienia do każdego urządzenia
  for (const s of subs) {
    try {
      await webpush.sendNotification(s.subscription, payload);
      console.log("Powiadomienie pomyślnie wysłane do urządzenia.");
    } catch (err) {
      console.error("Błąd wysyłki powiadomienia do urządzenia:", err.message);
    }
  }
}

// Uruchomienie funkcji
sendNotifications();
