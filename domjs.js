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

const title = document.getElementById('page-title');

console.log(title);

const errors = document.getElementsByClassName('error');

console.log(errors[0]);

const tags = document.getElementsByTagName('p');

console.log(tags);

const parapara = document.querySelector('p');

console.log(parapara.innerText);

parapara.innerText = 'ninjas are awesome';

const paraparapara = document.querySelectorAll('p');

paraparapara.forEach(eachItemLaOi => {
	 console.log(eachItemLaOi.innerText);
	 eachItemLaOi.innerText += 'changed';
});

const contentParam = document.querySelector('.content');

//contentParam.innerHTML = `<marquee> ${contentParam.innerHTML} nisch changed this</marquee>`;


const people = ['mario','luigui','yoshi'];

people.forEach(person => {
	 contentParam.innerHTML += `<p>${person}</p`;
});

const linky = document.querySelector('a');

console.log(linky.getAttribute('href'));

linky.setAttribute('href','https://www.thenetninja.co.uk');
linky.innerText = 'The net ninja website';

const h22 = document.querySelector('h2');
console.log(h22);
h22.setAttribute('class','success');
h22.setAttribute('style', 'color:purple');


const titley = document.querySelector('h3');

//titley.setAttribute('style', 'margin:50px'); // this will overwrite whats currently there

console.log(titley.style.color);

titley.style.margin = '50px';
titley.style.color='crimson';
titley.style.fontSize = '60px';
titley.style.margin = '';

console.log(titley.style);