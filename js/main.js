// Mobil menü aç/kapa
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Basit iletişim formu (demo — sunucu yok, WhatsApp'a yönlendirir)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ad = (form.querySelector('[name="ad"]') || {}).value || '';
      var tel = (form.querySelector('[name="telefon"]') || {}).value || '';
      var mesaj = (form.querySelector('[name="mesaj"]') || {}).value || '';
      var text = 'Merhaba, ben ' + ad + '. Tel: ' + tel + '. ' + mesaj;
      window.open('https://wa.me/905005005050?text=' + encodeURIComponent(text), '_blank');
    });
  }
});
