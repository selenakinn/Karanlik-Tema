function karanlikTemayiAcKapa() {
  const body = document.body;
  body.classList.toggle('dark');
  const button = document.getElementById('acKapa');
  if (body.classList.contains('dark')) {
    button.textContent = 'Karanlık temayı kapat';
  } else {
    button.textContent = 'Karanlık temayı aç';
  }
}
const button = document.createElement('button');
button.id = 'acKapa'; // Butonun id'si
button.textContent = 'Karanlık temayı aç'; // Başlangıç metni
button.onclick = karanlikTemayiAcKapa;
const descriptionDiv = document.querySelector('.description');

// Butonu description div'inin son child'ı olarak ekle
descriptionDiv.appendChild(button);
