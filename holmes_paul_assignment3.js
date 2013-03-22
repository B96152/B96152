// Paul Holmes
// SDI 1303
// March 21, 2013
// SDI-Project3
// Deliverable 3


// Start

// Global Variables

var useLongBoard = "my long board";
var useShortBoard = "my short board";




// Declarations

// Surf board (is the object)

var board = {
	
	
	"name": "LongBoard",
	"length": 10,
	"width" : 2.5,
	"height": .25,
	"area"  : function(){  // Method: Accessor(Getter)
		var totalArea = this.height * this.width * this.length;
		return totalArea;
	}, // end area method
	"setLength": function(newLength){  //  Method Mutator(Setter)
		this.length = newLength;
	}
	
	
	
};  // end Surf board code










// main code
console.log("I will use " + useLongBoard + ".");

console.log("The area of " + useLongBoard + " is an average of: " + board.area() + " cubic feet.");

console.log("I could use " + useShortBoard + ".");

var newBoard = board;  // New copy of board, above

board.setLength(6);

console.log("The area of " + useShortBoard + " is an average of: " + newBoard.area() + " cubic feet.");

































// Finish