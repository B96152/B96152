// Paul Holmes
// SDI 1302
// February 21, 2013
// SDI-Project3












/*
var tempFahren = "The temperature is",
theTemp = 35,
celsiusTemp = ((theTemp - 32) * (5 / 9)),
dewPoint = 68,
dewTempFahrenheit = ((dewPoint - 32) * (5 / 9)),
satVapPres = ((7.5 * celsiusTemp) / (237.7 + celsiusTemp)),
actualVapor = ((7.5 * dewTempFahrenheit) / (237.7 + dewTempFahrenheit)),
satVapPresB = Math.pow(6.11,satVapPres),
actualVaporB = Math.pow(6.11,actualVapor),
brandWax = "Now I must determine what brand of waxes would be best utilized in this weather.",
relativeHum = (actualVaporB * satVapPresB);
*/











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















				
/*				
var say = function(message) {console.log(message);};
var celsiusVap = function(celsiusTemperature) {	
	return ((celsiusTemperature * 7.5) / (celsiusToFah(72)))
};
*/



	


/*
var temperature = {
	fahrenheit: 72,
	dewPoint: 68,
	humidity: function temp (fahrenheit){
			var say = function(message) {console.log(message);};
			var celsiusToFah = function(fahrenheit) {
			var demoVar = ((fahrenheit - 32) * (5 / 9))
				return demoVar;
		};
		console.log("72 F = " + celsiusToFah(72) + " C");
		
},
/*
	saturatedVapor: function humid (humidity){
			var say = function(message) {console.log(message);};
			var satVapor = function(celsiusTemperature) {
				return ((celsiusTemperature * 7.5) / (237.7 + 72));
				celsiusTemperature: celsiusToFah(72),
	// 22.22222222222222,
		};
		console.log("Saturated Vapor: " + temperature.saturatedVapor);
},


};

temperature.humidity();

temperature.saturatedVapor();


*/




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
