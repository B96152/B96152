// Paul Holmes
// SDI 1302
// March 5, 2013
// SDI-Project1
// Deliverable 1


// Start

// My Variables

var surfWaves = true,
	waterTemp = 78,
	airTemp = 80,
	sunShine = true,
	sunScreenOn = "I will apply my sunscreen",
	sunScreenOff = "I will not apply my sunsceen",
	sunBright = "\"Lots of Sunshine!\"",
	numWaves = 0
	var waveLocations = [
	"61st Street Jetty",
	"Flagship Hotel Jetty",
	"Surf Side",
	"Houston Ship Channel"
],
	waveTime = [
	5,
	10,
	15,
	20
]
;



// My Procedure

var waveForm = function(waveHeight) {
// One Argument

	if (waveHeight > 1){
	// True
		console.log("The waves are " + waveHeight + "' high!");
		console.log("Since there are waves I want to go surfing.");
		console.log("I will take my short board.");
		// Output
		
	} else {
	// False
		console.log("Since there are not any waves I will go down to the Gulf of Mexico and wait for waves!");
		console.log("I will take my long board.");
		// Output
		
	};
};

waveForm(3)
// Back







// My Boolean Function

var comfortableTemp = function(waterTemp,airTemp) {
	var aveTemp = ((waterTemp + airTemp) / 2);
	// Two Arguments
	
	if (aveTemp >= 70) {
	// True	
		console.log("The average temperature is " + aveTemp + "F. This is good for surfing!");
		// 1st. 1/2 Output True		
		return true;
		// Return Boolean True
		
	} else {
	// False	
		console.log("The average temperature is " + aveTemp + "F. This is a little chilly to surf. May need to wear my wetsuit!");
		// 1st. 1/2 Output False		
		return false;
		// Return Boolean False
		
	};
};

goodSurfTemp = comfortableTemp(70,75)
// Boolean value (true or false) to be returned to the main code.

console.log("The surf report that claims the surf temperature is good, is " + goodSurfTemp + "!");
// 2nd 1/2 Output (True or False) follows the first true or false Outputs.







// My Number Function

var waves = function(numWaves){
// One Argument

	while (numWaves <= 7){
	// While Loop
		console.log(numWaves + " waves have rolled by!");
		// 1st. 1/2 Ouput
		numWaves = numWaves + 1;
		// Math	
	}
	return numWaves
};

waitForMyWave = waves(0);

console.log(waitForMyWave + " waves have rolled by, I have rested enough to catch the next wave!");
// 2nd 1/2 Output









// My String Function

var whatBrandWax = function(oneWax,twoWax){
// Two Arguments
	var sexWax = (" is really sticky and irritates the skin");
	var beezWax = (" is really hard and can be very slippery");
	// Local Variables
		return oneWax + sexWax + ", and " + twoWax + beezWax + ".";
		// Return String
};

var waxPreference = whatBrandWax("Sex Wax", "Beez Wax");

console.log(waxPreference);
// String Concatenation 1st 1/2 Output

console.log("I used Beez Wax for my base coat, and then I used my Sex Wax for my second coat of wax on my board. So it has been easy to stay on the surf board.");
// 2nd 1/2 Output




// My Array Function


var surfWave = function(){
	var waveLocName = waveLocations[waveLocNum],
	minutesThisLocation = waveTime[waveLocNum];
	// Local Variables
		console.log("Will surf " + waveLocName + " for " + minutesThisLocation + " minutes.");
	
	for (var minutes = 0; minutes <= minutesThisLocation; minutes +=5){
	// For Loop
		var minutesRemian = minutesThisLocation - minutes;
		//  Math
		console.log(minutes + " done, " + minutesRemian + " to go!");
		// 1st 1/2 Output
		};
		console.log("I'm done surfing " + waveLocName + ".");
		// 2nd 1/2 Ouput
};

for (var waveLocNum = 0; waveLocNum < waveLocations.length; waveLocNum++)

surfWave()
// Finish






