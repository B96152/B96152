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
	sunBright = "\"Lots of Sunshine!\""
	
;



// My Procedure

var waveForm = function(waveHeight) {

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






