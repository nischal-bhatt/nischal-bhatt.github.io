alert('hello objects');

let user = {
	name: 'crystal',
	age: 30,
	email: 'crystal@thenetninja.co.uk',
	blogs: ['photos', 'kudos'],

	login: function() {
		console.log('user logged in ');
	},

	logout: function() {
		console.log('user logged out');
	},
	logBlogs: function() {
		for (let aub = 0; aub < this.blogs.length; aub++) {
			console.log(this.blogs[aub]);
		}
	}
};

console.log(user);
console.log(user.name);

user.age = 25;

console.log(user.age);

console.log(user['age']);

console.log(typeof user);

user.login();

const name1 = 'hey';
console.log(name1.toUpperCase());

user.logout();
user.logBlogs();


let arrayOfObjects = [
	{
		title: 'billy goat'
	},
	{
		jumanji: 'hi'
	},
	{
		jurrasic_park: 'heya'
	}
];

console.log(arrayOfObjects);
console.log(Math);

console.log(Math.PI);

console.log(Math.abs(-2.389));
console.log(Math.trunc(-2.389));

const random = Math.random();

console.log(Math.round(random*100));


const aNewObj = {
	key : 'value'
}

//aNewObj is a reference type that is stored on the stack
// the object itself with the key and value is stored on the heap


let userOne = {
	name:'shaun',
	score:100
}

let userTwo = userOne;

userTwo.name = 'nish';

console.log(userOne.name);
