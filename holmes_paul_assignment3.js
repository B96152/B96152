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

var say2 = function(message2) {console.log(message2);};
var satVapor = function(vapor) {
	return ((22.22222222222222 * 7.5) / (237.7 + celsiusToFah(72)));
	
};

var say3 = function(message3) {console.log(message3);};
var satVapor2 = function(vapor2) {
	return (Math.pow(6.11,satVapor()));
	
};

var say4 = function(message4) {console.log(message4);};
var actualVapor = function(vapor3) {
	return ((72 * 7.5) / (237.7 + ((68 - 32) * (5 / 9))));	
};

var say5 = function(message5) {console.log(message5);};
var actualVapor2 = function(vapor4) {
	return (Math.pow(6.11,actualVapor()));
};

var say6 = function(message6) {console.log(message6);};
var relativeHumidity = function(humidity) {
	return (satVapor2() * actualVapor2());
};


say("72 F = " + (Math.round(celsiusToFah(72) *1000) /1000) + " C");
say2((Math.round(((celsiusToFah(72) * 1000) / 1000))) + " C = " + (Math.round(satVapor() * 1000) / 1000) + " % vapor.");
say3((Math.round(satVapor() * 1000) / 1000)  + " % vapor = " + (Math.round(satVapor2() * 1000) / 1000) + " % saturated vapor.");
say4((Math.round(actualVapor() * 1000) / 1000) + " F = " + (Math.round(actualVapor() * 1000) / 1000) + " % vapor.");
say5((Math.round(actualVapor2() * 1000) / 1000) + " % vapor = " + (Math.round(actualVapor2() * 1000) / 10000) + " % actual vapor.");
say6((Math.round(relativeHumidity() * 1000) / 1000) + " % humidity.");

celsiusToFah();
satVapor();
satVapor2();
actualVapor();
actualVapor2();
relativeHumidity();


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
