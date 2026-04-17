const webpush = require('web-push');
const { createClient } = require('@supabase/supabase-js');

// Klucze VAPID (z Secrets w GitHub)
const vapidKeys = {
  publicKey: process.env.VAPID_PUBLIC_KEY,
  privateKey: process.env.VAPID_PRIVATE_KEY
};

webpush.setVapidDetails(
  'mailto:twoj@email.com', // wpisz swój email
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function sendNotifications() {
  // Pobierz wszystkie subskrypcje z bazy
  const { data: subs, error } = await supabase.from('push_subscriptions').select('subscription');
  
  if (error) {
    console.error("Błąd pobierania subskrypcji:", error);
    return;
  }

  const payload = JSON.stringify({
    title: 'PC Monitor',
    body: 'Mamy 1. dzień miesiąca! Czas na nowy odczyt pompy ciepła.'
  });

  subs.forEach(s => {
    webpush.sendNotification(s.subscription, payload)
      .then(() => console.log("Powiadomienie wysłane"))
      .catch(err => console.error("Błąd wysyłki:", err));
  });
}

sendNotifications();
