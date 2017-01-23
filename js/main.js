"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
	_friends: ["Guilherme", "Camila", "Murilo"],
	printFriends: function printFriends() {
		var _this = this;

		this._friends.forEach(function (f) {
			return console.log(_this._name + " knows " + f);
		});
	}
};

bob.printFriends();

console.log("");
console.log("---------------DEFININDO CLASS------------------------");
console.log("");

var Color = function () {
	function Color(codeColor, nameColor) {
		_classCallCheck(this, Color);

		this.codeColor = codeColor;
		this.nameColor = nameColor;
	}

	_createClass(Color, [{
		key: "getColor",
		value: function getColor() {
			return { codeColor: this.codeColor, nameColor: this.nameColor };
		}
	}]);

	return Color;
}();

var red = new Color("#FF0000", "red");
console.log(red.getColor());

console.log("");
console.log("----------------STRING TEMPLATE-------------------------");
console.log("");

var name = "William";
var age = 31;
//let text = "name: " + name + " age: " + age;
var text = "\n\tname: " + name + " \n\tage: " + age + "\n";
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

function test(valueA) {
	var valueB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

	return valueA + valueB;
}
console.log(test(2));

console.log("");
console.log("----------------FOR OF-------------------------------");
console.log("");

var list = ["test", 34, { name: "William" }];

/*
for(var i in list){
	//console.log(i);
	console.log(list[i]);
}
*/

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var i = _step.value;

		console.log(i);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

console.log("");
console.log("----------------HERANÇA-------------------------------");
console.log("");

var People = function () {
	function People(name, email, phone) {
		_classCallCheck(this, People);

		this.name = name;
		this.email = email;
		this.phone = phone;
	}

	_createClass(People, [{
		key: "toString",
		value: function toString() {
			return "Name: " + this.name + "\n\t\t\tEmail: " + this.email + "\n\t\t\tPhone: " + this.phone;
		}
	}]);

	return People;
}();

var Client = function (_People) {
	_inherits(Client, _People);

	function Client(id, name, email, phone) {
		_classCallCheck(this, Client);

		var _this2 = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, name, email, phone));

		_this2.id = id;
		return _this2;
	}

	_createClass(Client, [{
		key: "toString",
		value: function toString() {
			return "\n\t\t\tId: " + this.id + "\n\t\t\t" + _get(Client.prototype.__proto__ || Object.getPrototypeOf(Client.prototype), "toString", this).call(this);
		}
	}]);

	return Client;
}(People);

var test = new Client(1, "William", "will@mail.com", "99999999");
console.log(test.toString());

console.log("");
console.log("----------------SET DATA STRUCTURE------------------------");
console.log("");

var color = new Set();
color.add("red").add("green").add("red");

if (color.size === 2 && color.has("red")) {
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = color.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var key = _step2.value;

			console.log(key);
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
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

var USD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
var BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

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

console.log("hello".startsWith("ello", 1));
console.log("hello".endsWith("o", 5));
console.log("hello".includes("ell", 1));
console.log("hello".includes("o", 2));
