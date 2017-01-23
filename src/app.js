/*
var bob = {
	_name: "Bob",
	_friends: ["Guilherme","Camila","Murilo"],
	printFriends: function printFriends(){
		var self = this;
		this._friends.forEach(function(f){
			return console.log(self._name + " knows "+ f);
		});
	}
};

bob.printFriends();

*/
console.log("");
console.log("--------------ARROW FUNCTIONS-------------------------");
console.log("");

var bob = {
	_name: "Bob",
	_friends: ["Guilherme","Camila","Murilo"],
	printFriends: function printFriends(){
		this._friends.forEach(f => 
			console.log(this._name + " knows " + f));
	}
};

bob.printFriends();

console.log("");
console.log("---------------DEFININDO CLASS------------------------");
console.log("");

class Color{
	constructor(codeColor, nameColor){
		this.codeColor = codeColor;
		this.nameColor = nameColor;
	};
	getColor(){
		return {codeColor: this.codeColor, nameColor: this.nameColor};
	};	
}

let red = new Color("#FF0000","red");
console.log(red.getColor());

console.log("");
console.log("----------------STRING TEMPLATE-------------------------");
console.log("");

let name = "William";
let age = 31;
//let text = "name: " + name + " age: " + age;
let text = `
	name: ${name} 
	age: ${age}
`;
console.log(text);

console.log("");
console.log("----------------DEFAULT VALUES-------------------------");
console.log("");

/*
function test(valueA){
	var valueB = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];
	return valueA + valueB;
}
*/

function test (valueA, valueB = 4){
	return valueA + valueB;
}
console.log(test(2));

console.log("");
console.log("----------------FOR OF-------------------------------");
console.log("");

var list = ["test",34,{name:"William"}];

/*
for(var i in list){
	//console.log(i);
	console.log(list[i]);
}
*/

for (let i of list){
	console.log(i);
}

console.log("");
console.log("----------------HERANÇA-------------------------------");
console.log("");

class People{
	constructor(name,email,phone){
		this.name = name;
		this.email = email;
		this.phone = phone;
	}
	toString(){
		return `Name: ${this.name}
			Email: ${this.email}
			Phone: ${this.phone}`;
	}
}

class Client extends People{
	constructor(id,name,email,phone){
		super(name,email,phone)
		this.id = id;
	}
	toString(){
		return `
			Id: ${this.id}
			${super.toString()}`; 
	}
}

var test = new Client(1,"William","will@mail.com","99999999");
console.log(test.toString());

console.log("");
console.log("----------------SET DATA STRUCTURE------------------------");
console.log("");

let color = new Set();
color.add("red").add("green").add("red");

if(color.size === 2 && color.has("red")){
	for(let key of color.values()){
		console.log(key);
	}
}

console.log("");
console.log("----------------NUMBERS FORMAT------------------------");
console.log("");

var number = 123456.78;
var En = new Intl.NumberFormat('en-US').format(number);
var De = new Intl.NumberFormat('de-DE').format(number);

console.log(En);
console.log(De);

console.log("");
console.log("----------------CURRENCY FORMAT-----------------------");
console.log("");

var USD = new Intl.NumberFormat("en-US", {style:"currency",currency:"USD"});
var BRL = new Intl.NumberFormat("pt-BR", {style:"currency",currency:"BRL"});

console.log(USD.format(123456789.12));
console.log(BRL.format(123456789.12));

console.log("");
console.log("----------------DATE FORMAT---------------------------");
console.log("");

var US = new Intl.DateTimeFormat("en-US");
var BR = new Intl.DateTimeFormat("pt-BR");
var DE = new Intl.DateTimeFormat("de-DE");

console.log(US.format(new Date("2017-01-24")));
console.log(BR.format(new Date("2017-01-24")));
console.log(DE.format(new Date("2017-01-24")));

console.log("");
console.log("----------------STRING SEARCH---------------------------");
console.log("");


console.log("hello".indexOf("ello") === 1);

console.log("hello".startsWith("ello",1));
console.log("hello".endsWith("o",5));
console.log("hello".includes("ell",1));
console.log("hello".includes("o",2));