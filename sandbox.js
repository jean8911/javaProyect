const ul = document.querySelector('.ninjas');

const ninjas = ['ryu', 'gaiden', 'runouri', 'banjo'];

let html = '';

ninjas.forEach(ninja => html += `<li>${ninja}</li>`);

console.log(html);
ul.innerHTML = html;