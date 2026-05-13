const menu = document.querySelector('#menu');
const list = document.querySelector('#list');

menu.addEventListener('click', () => {
  list.classList.toggle('hidden');
  list.classList.toggle('flex');
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const text = `Halo, saya ingin menghubungi anda.
Nama: ${name}
Email: ${email}
Pesan: ${message}`;

  const phoneNumber = '6281260244154';
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    text
  )}`;

  window.open(whatsappURL, '_blank');
});
