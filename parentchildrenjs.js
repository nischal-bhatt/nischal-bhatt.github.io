alert('hi parent chilren');

const article = document.querySelector('article');

console.log(article.children);

console.log(Array.from(article.children));

const arr = Array.from(article.children);

arr.forEach(child => {
	child.classList.add('article-element');
});


const titl = document.querySelector('h2');

console.log(titl.parentElement);
console.log(titl.parentElement.parentElement);
console.log(titl.nextElementSibling);