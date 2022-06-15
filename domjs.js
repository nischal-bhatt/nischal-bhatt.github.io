alert(document.location);

const para = document.querySelector('p');

// first p tag is grabbed, the rest are ignored

console.log(para);

const para2 = document.querySelector('.error');

console.log(para2);

const para3 = document.querySelector('div.error');

console.log(para3);

//para3.innerHTML = 'changing';

const paras = document.querySelectorAll('p');

console.log(paras[2]);