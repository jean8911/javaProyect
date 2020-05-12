const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  }
  if(p.textContent.includes('succes')){
    p.classList.add('succes');
  }
});