alert('loops tutorial');

for (let u = 0; u< 5; u++)
{
	console.log(u);
}


const names = ['a','b','c'];

for (let i = 0; i<names.length; i++)
{
	console.log(names[i]);
	let html = `<div>${names[i]}</div>`;
	console.log(html);
}

let uu = 0;
console.log('in while loop');
while (uu < names.length)
{
	console.log(names[uu]);
	uu++;
}


uu = 0;
console.log('startuing do while');
do {
	
	console.log(names[uu]);
	uu++;
}while (uu < names.length)

console.log('starting if else');


const password = 'pass';

if (password.length>= 8)
{
	console.log('that password is proper');
}else
{
	console.log('that password is too short');
}

const age = 9;

if (age >= 15)
{
	console.log('you are abit old');
}else if (age >= 10)
{
	console.log('you are not old');
}else
{
	console.log('you are young');
}



if ((age == 9) && (true))
{
	console.log('we\'re in here');
}

if ((age ==10) || true)
{
	console.log('in here ageain');
}


let answer = false;

if (!answer)
{
	console.log('still stuck in purgatory');
}


for (let i = 0; i< 10; i++)
{
	console.log(i);
	if (i == 6)
	{
		break;
	}
}

for (let i = 0; i< 10; i++)
{
	
	if (i == 6)
	{
		continue;
	}
	console.log(i);
}


console.log('starting scope');


let scopeVar = 22;

if (true)
{
	let scopeVar = 26;
	let name123 = 'shaun';
	console.log(scopeVar);
	console.log(name123);
	var omg = 'omg';
}


console.log(omg);
console.log(scopeVar);
//console.log(name123);




greet();
greet();
greet();

function greet()
{
	console.log('first function');
	
}



const speak = function ()
{
	console.log('speaking function');
};

speak();
speak();


const speakeasy = function(name123='orange')
{
	console.log(`good day ${name123}`);
}

speakeasy ('ni');


const calculator = function (radius)
{
	let area = 3.14 * radius**2;
    return area;
};

let returnVal = calculator(10);
console.log(returnVal);


const calc = (radius) => {
	return 3.14 * radius**2;
}; 


console.log(calc(10));


const ArrowFun = () => 'hello';

console.log(ArrowFun());
