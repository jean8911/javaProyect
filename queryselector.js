const paras = document.querySelectorAll('p');

cambio = function(){

  paras.forEach(p => {
    if(p.textContent.includes('error')){
      p.classList.toggle('error');
    }
    if(p.textContent.includes('succes')){
      p.classList.toggle('succes');
    }
  });
};

console.log("hello");