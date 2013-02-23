// Paul Holmes
// SDI 1302
// February 21, 2013
// SDI-Project3













var tempFahren = "The temperature is",
theTemp = 35,
celsiusTemp = ((theTemp - 32) * (5 / 9)),
dewPoint = 68,
dewTempFahrenheit = ((dewPoint - 32) * (5 / 9)),
satVapPres = ((7.5 * celsiusTemp) / (237.7 + celsiusTemp)),
actualVapor = ((7.5 * dewTempFahrenheit) / (237.7 + dewTempFahrenheit)),
satVapPresB = Math.pow(6.11,satVapPres),
actualVaporB = Math.pow(6.11,actualVapor);
brandWax = "Now I must determine what brand of waxes would be best utilized in this weather."
relativeHum = (actualVaporB * satVapPresB)











/*
var say = function(message) {console.log(message);};
var celsiusToFah = function(fahrenheit) {
	return ((fahrenheit - 32) * (5 / 9))
};
say("72 F = " + celsiusToFah(72) + " C");
*/



var temperature = {
	fahrenheit: 72,
	dewPoint: 68,
	humidity: function temp (fahrenheit){
			var say = function(message) {console.log(message);};
			var celsiusToFah = function(fahrenheit) {
				return ((fahrenheit - 32) * (5 / 9))
		};
		console.log("72 F = " + celsiusToFah(72) + " C");
		console.log(celsiusToFah(72));
		},
	saturatedVapor: function humid (humidity){
			var say = function(message) {console.log(message);};
			var satVapor = function(celsiusTemperature) {
				return ((celsiusTemperature * 7.5) / (237.7 + temperature.humidity));
		};
		console.log("Saturated Vapor: " + satVapor);
		},




};

temperature.humidity();

temperature.saturatedVapor();







/*
var arr = [true, false, "", [], function(){}, 101];

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
	sayHi: function() {
		console.log("What's up!");
	},
};

var key = "interests";

student.sayHi();

console.log(student[key]);
console.log(student["interests"]);
console.log(student.interests);

var hi = student.sayHi;

var key = "sayHi";












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
*/
