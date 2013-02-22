// Paul Holmes
// SDI 1302
// February 21, 2013
// SDI-Project3









var tempFahren = "The temperature is",
theTemp = 72,
celsiusTemp = ((theTemp - 32) * (5 / 9)),
dewPoint = 68,
dewTempFahrenheit = ((dewPoint - 32) * (5 / 9)),
satVapPres = ((7.5 * celsiusTemp) / (237.7 + celsiusTemp)),
actualVapor = ((7.5 * dewTempFahrenheit) / (237.7 + dewTempFahrenheit)),
satVapPresB = Math.pow(6.11,satVapPres),
actualVaporB = Math.pow(6.11,actualVapor);
brandWax = "Now I must determine what brand of waxes would be best utilized in this weather."
relativeHum = (actualVaporB * satVapPresB);


var say = function(message) {console.log(message);};
var celsiusToFah = function(fahrenheit) {
	return ((fahrenheit - 32) * (5 / 9))
};
say("72 F = " + celsiusToFah(72) + " C");




// var arr = [true, false, "", [], function(){}, 101];<<<<<------  IGNORE THIS, just a reminder.

var student = {
	id: "00000111",
	name: "Mike",
	interests: [
		"JavaScript",
		"HTML",
		"CSS",
		"Flash"
	],
	age: 503423,
	sayHi: function () {
		console.log("Hi!");
		},
/*	sayFah: function() {
		console.log("Fahrenheit");
},
	celsiusToFah: function(fahrenheit) {
		return ((fahrenheit - 32) * (5 / 9));
		},*/
};

var key = "name";

student.name = "Bob";

// var key = "sayFah";

//<<<<<------  IGNORE THIS, just a example for during the construction phase.

console.log(student[key]);
// or
console.log(student.sayHi);
//or
console.log(student["sayHi"]);










//<<<<<------  IGNORE THIS, just a example for during the construction phase.
student.sayHi();

student.sayHi = function () {
	console.log("Get lost.");	
};

student["sayHi"]();

// Will replace 'var key = "name";'
for (var key in student) {
	// will log data from each in the variable student.
	console.log("key: " + key + ", value: ", student[key]);
};
//<<<<<------  IGNORE THIS, just a example for during the construction phase.
student.sayHi();

student.sayHi = function () {
	console.log("Get lost.");	
};

student["sayHi"]();

// Will replace 'var key = "name";'
for (var key in student) {
	// will log data from each in the variable student.
	console.log("key: " + key + ", value: " + student[key]);
};






/*
student.sayFah();

console.log(student.sayFah);
*/

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



console.log("The relative humidity is " + relativeHum + ".");


if (theTemp >= 68 && theTemp <= 80) {
	console.log(tempFahren + " between 68 degrees Fahrenheit and 80 degrees Fahrenheit.");
	console.log(tempFahren + " " + theTemp + ".");
	console.log(tempFahren + " good for cleaning vehicles!");
	console.log(brandWax);

if (theTemp <= 68 && theTemp >= 80) {
	console.log("The temperature is either too hot or too cold.");
}
};

if (this === true) {

		// output
		console.log("Something");

		if (myString === "this") {
			console.log("More text");

		}

} else {

		console.log("Something else");

}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// JSON

var handleData = function (json) {
	for (var i = 0; i < json.waxes.length; i++){
		var wax = json.waxes[i];
			console.log("Company's name: " + wax.company + ", Name of wax: " + wax.name + ", Type of: " + wax.type);	
	};
};

handleData(json2);


var jsonstring = JSON.stringify(json);
	console.log(jsonstring);

var recievedjson = JSON.parse(jsonstring);
	console.log(recievedjson);


// Boolean Function/comparison

var myTruck = "my 4Runner",
chooseAutoCarWash = "I choose to go to the automatic carwash",
driveToCarWash = false,
autoCarWash = "I will drive to the automatic car wash",
stayHome = "I will stay home"
washCarMyself = "I will wash",
paySomeone = "I will pay someone to wash"
truckClean = true,
iStayHome = true,
mySelf = "my self.",
payMoney = 10,
moneyHour = 2,
m = 30
washTruckSelf = "wash my truck"


if (truckClean === true)
	console.log("My truck needs to be cleaned!");
	else
		console.log("My truck does not need to be cleaned!");

if (driveToCarWash === true) {
	console.log(chooseAutoCarWash + " in " + myTruck + ".");
	console.log(autoCarWash + " in " + myTruck + ".");
}
else
	console.log(stayHome + ".");

if (iStayHome === false) {
	console.log(stayHome + " and " + paySomeone + " " + myTruck + ".");
	console.log(paySomeone + " " + myTruck + " for $" + (payMoney * moneyHour) + " an hour.");
}
else
	console.log(stayHome + " and " + washTruckSelf + " by " + mySelf);

if (m > 20) {
	console.log("More than " + (payMoney * moneyHour) + " dollars an hour is too much money to pay someone else to wash my truck.");
	console.log(washCarMyself + " " + myTruck + " myself.");  
}
else
	console.log("I will go ahead and pay someone to wash " + myTruck + ".");

// while-loop

var soapBubbles = 45;
	while /*iterator, counter*/(soapBubbles > 0) {
		console.log("Sometimes I will think to myself, " + soapBubbles + " soap bubbles left on my truck, as I clean it.");
		soapBubbles--;
};

console.log("Finally I'm finished washing off the soap bubbles!");

// String function #4

// For String Concatenation

var str1 = "Now ";
var str2 = "to ";
var str3 = "start the waxing process!";
var n = str1.concat(str2,str3);

console.log(n)

// Array function #5

// For loop function

var threeStepWax = [ "Cleaner", "Polisher", "Wax" ],
	minutesPerWaxStep = [90, 60, 45];
	for (var waxStepNumber = 0; waxStepNumber < threeStepWax.length; waxStepNumber++) {
var waxName = threeStepWax[waxStepNumber];
	minutesThisWaxStep = minutesPerWaxStep[waxStepNumber];
		console.log("I start to wax my truck using the step requiring the " + waxName + " for " + minutesThisWaxStep + " minutes");
	for (var minutes = 0; minutes < minutesThisWaxStep; minutes += 15) {
var minutesRemain = minutesThisWaxStep - minutes;
	console.log(minutes + " minutes have passed thus far, about " + minutesRemain + " minutes till I'm done!");
}
console.log("I'm pretty much done with the " + waxName + "!");

}	// for waxStepNumber
