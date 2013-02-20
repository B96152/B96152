// Paul Holmes
// SDI 1302
// February 21, 2013
// SDI-Project3
// json.3.a.js






var json = {
	// Object
	"waxes": {
		//  Keys must be represented as strings.
		"mothers": {			
			"name": "gold",
			"type": "synthetic"
		},
		"meguiars": {
			"name": "gold class",
			"type": "carnauba paste"
		},
		"turtlewax": {
			"name": "super hard shell",
			"type": "paste"
		}
	}
};

// json.waxes[mothers].name      instead use:
// a for/in loop

for (var key in json.waxes) {
	var wax = json.waxes[key];
	
	// friend.age
};

var json2 = {
	"waxes": [
		{
			"company": "mothers",
			"name": "gold",
			"type": "synthetic"
		},
		{
			"company": "meguiars",
			"name": "gold class",
			"type": "carnauba paste"
		},
		{
			"company": "turtlewax",
			"name": "super hard shell",
			"type": "paste"
		}
	]
};

/*
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



