// Paul Holmes
// SDI 1302
// February 21, 2013
// SDI-Project3

/*
//Global Variables
var dudeName = "Ben";
var weapons = [ "Rifle", "Shotgun", "Shovel" ];
var rifleBullets = 60,
shotgunShells = 45;
var flaresAndFood = [ "Flare", "Canned Food" ];

//Object with Properties
var zombieHorde = {
    zombies: [
        {
            size: "huge",//String Property
            amount: 10,//Number Property
            fast: false//Boolean Property
        },//Object Property
        {
            size: "medium",//String Property
            amount: 20,//Number Property
            fast: false//Boolean Property
        },//Object Property
        {
            size: "small",//String Property
            amount: 25,//Number Property
            fast: true//Boolean Property
        }//Object Property
    ],//Array Property
    flee: function () {
        console.log("Seeing that the cause of the sound was a horde of zombies devouring a poor woman, the group of friends try to get flee the area. They manage to leave the larger zombies behind momentarily but the smaller ones are still close behind them.")
    }//Procedure Method
};

//Object with Methods
var zombieBattles = {
    fight1: function () {
        console.log("As the first zombie stumbles through the entrance Gina quickly slams her frying pan down on its hand, killing the first of their many undead attackers.");
        for (var z = 0; z < zombieHorde.zombies.length; z++) {
            var zombie = zombieHorde.zombies[z];
                if (zombie.fast === true) {
                    while (zombie.amount >= 0) {
                        console.log("A zombie loses its brain to a brutal melee attack! Only " +
                            zombie.amount +
                            " many more to go!");
                        zombie.amount--;
                    };
                    return zombie.amount,
                        zombie;
                } else {

                }
        }
    },//Function Method
    fight2: function () {
        console.log("As soon as the group of friends thought the fight was over, another zombie stumbles through the entrance warning them of yet another wave of the living dead.");
        for (var z = 0; z < zombieHorde.zombies.length; z++) {
            var zombie = zombieHorde.zombies[z];
            if (zombie.size === "medium") {
                while (zombie.amount >= 0) {
                    console.log("A zombie falls to the ground dead after having its head bashed in! Only " +
                        zombie.amount +
                        " many more to go!");
                    zombie.amount--;
                };
                return zombie.amount,
                    zombie;
            } else {

            }
        }
    },//Function Method
    fight3: function () {
        console.log("Once again, right before leaving their now proven to be very defendable refuge, a huge zombie stumbles in and takes a bunch of hits before finally dieing.");
        for (var z = 0; z < zombieHorde.zombies.length; z++) {
            var zombie = zombieHorde.zombies[z];
            if (zombie.amount < 15) {
                while (zombie.amount >= 0) {
                    console.log("A zombie is put to rest after being decapitated! Only " +
                        zombie.amount +
                        " many more to go!");
                    zombie.amount--;
            };
            return zombie.amount,
                zombie,
                zombieHorde.zombies;
        } else {

        }
        }
    },//Function Method
    noZombies: function () {
        var zombie = zombieHorde.zombies
        zombie.amount = 0
        console.log("There are now " + zombie.amount + " zombies attacking the group.");
        return zombieHorde.zombies,
            zombie.amount,
            zombie;
    },//Mutator Method
    zombieCheck: function () {
        var zombie = zombieHorde.zombies
        console.log("They split into groups of 2 to search in the general area for any signs of the undead. They all return to the building stating that they found " + zombie.amount + " zombies nearby.")
    }//Accessor Method
};

//Functions
var findBreakfast = function(groceryStore, shoppingZombies, food) {
console.log(dudeName +
" sneaks past " +
shoppingZombies +
" zombies to get into " +
groceryStore +
" to search for some breakfast.");
if (food > 0) {
console.log(dudeName +
" finds himself some beans and devours them")
} else {
console.log(dudeName +
" finds no food.")
};
console.log(dudeName +
" sneaks back out of " +
groceryStore +
" past the zombies and starts the rest of his day.");
};//Procedure
var zombieGroup = function(numberOfBullets, numberOfZombies) {
if (numberOfBullets >= numberOfZombies) {
console.log(dudeName +
" pulls out his rifle and proceeds to shoot all " +
numberOfZombies +
" zombies in the head."
)
} else {
console.log(dudename +
"carefully avoids the " +
numberOfZombies +
"zombies."
);
};
return numberOfBullets,
numberOfZombies;
};//Boolean
var zombieRoadBlock = function(numberOfZombies) {
while (numberOfZombies && shotgunShells >= 0) {
console.log(numberOfZombies +
" zombies left and " +
shotgunShells +
" shells left!"
);
numberOfZombies-=10;
shotgunShells-=2;
};
return numberOfZombies;
};//Number
var otherSurvivors = function(survivor1, survivor2) {
console.log("As the two people get closer, " +
dudeName +
" tenses up and prepares to use his " +
weapons[2] +
" in case they try to rob him."
);
console.log("The two survivors notice his tension and put their hands up to show that they mean no harm."
);
console.log("The couple is now close enough that " +
dudeName +
" can tell that one is a man and the other a woman, both similar in appearance and age."
);
console.log("Finally they get to him and introduce themselves as " +
survivor1 +
" and " +
survivor2 +
". They are brother and sister and are looking for rescue."
);
console.log(dudeName +
'asks them if they would like to join him to travel as a group, they reply with a quick but thankful "Yes!"'
);
return survivor1,
           survivor2;
};//String
var getRescued = function() {
var flare = flaresAndFood[0],
food = flaresAndFood[1];
console.log("Launching the first "+
flare +
"!!!"
);
for (var flare = 10, food = 30; flare && food >= 0; flare--, food-=3) {
console.log("Flare up! There are " +
flare +
" flares left and "+
food +
" cans of food left!");
};
console.log("On the last day that they could have stayed on that building the trio heard a loud whirring noise. It was the helicopter coming backsave them!"
);
return flare,
           food;
};//Array
var handleData = function (json) {
    for (var i = 0; i < json.survivors.length; i++){
        var group = json.survivors[i];
        console.log(group.name +
                    ", an " +
                    group.age +
                    " year old " +
                    group.gender +
                    " armed with " +
                    group.weapon +
                    ", and who had " +
                    group.quality);
    };
};//JSON

//Story
console.log("Chapter 1")
console.log(dudeName +
            " is one of the last surviving humans on earth. Every morning when he gets up he tries to find breakfast nearby before going zombie hunting."
);
findBreakfast("Fry's", 10, 1);//Procedure Function
console.log("While wandering around the deserted city of Winter Park, " +
dudeName +
" comes across a group of zombies."
);
zombieGroup(65, 20);//Boolean Function
console.log("He then returns to his aimless trek through the deserted city.");
console.log("Not long after his first zombie encounter, " +
dudeName +
" finds himself stopped by essentially a barricade of unavoidable living dead."
);
console.log("Unable to run anywhere, " +
dudeName +
", pulls out his trusty " +
weapons[1] +
" and starts shooting at the writhing mass of undead"
);
zombieRoadBlock(90);//Number Function
console.log("After the massacring of the zombie blockade, " +
dudeName +
" sees two actual people walking down the street towards him. Cautiously he approaches them."
);
otherSurvivors("Danielle", "Anthony");//String Function
console.log("As the trio moves through the city they hear the sound of a helicopter nearby. They walk carefully but quickly through the city in search for where it could be and manage to catch a glimpse of it as it lifts off from a roof and leaves the area."
);
console.log("Even though it was gone, they all had hope for rescue. They entered a tall building near them so that they could try to flag down the next chopper to fly by. Lucky for them on the way up they found not only food but also flares."
);
console.log("They decide that they should launch one flare a day. They also decide that since there are 10 flares and 30 cans of food, that they should also only eat one can of food each per day."
);
getRescued();//Array Function
console.log("The helicopter picked them up off the top of that building and started to carry them toward the last thought-to-be zombie free place in the world, California."
);
console.log("On the way there though a problem occurred, two other survivors being rescued start to convulse violently and then as suddenly as they started, they stop. Moments later they both launch back to life. " +
            dudeName +
            " immediately manages to kick one of them out the side of the chopper but is unable to get rid of the other before they lunge to the front of the helicopter and massacre the pilot. After getting rid of the other zombie, " +
            dudeName +
            " braces himself and tells everybody else to do the same."
);
console.log("The chopper rapidly falls out of the sky and crashes");
console.log("Chapter 2");
console.log("Meanwhile, in the city of Avondale a small group of teens were traveling from house to house, trying to avoid being spotted by zombies while searching for supplies. There were six of them total, all friends with each other before the zombie epidemic."
);
handleData(json);//JSON Function
console.log("Everything in the world that these teens knew, except for each other, disappeared with the rise of the zombie apocalypse. After the start of it all they managed to find each other amazingly enough and had since become even closer. Their family-like bond though was about to be put to the test"
);
console.log("Suddenly they hear a horrible screeching sound emanating from around the corner");
zombieHorde.flee()//Procedure Method
console.log("After 5 minutes straight of trying to get away from the living the dead, the group feels themselves starting to slow down. There was just no way for them to keep up the same pace as the tireless zombies. Instead of running themselves to death they found a defensible location, one that made it so only 1 zombie could enter at a time but they could still escape from if need be, turned around and prepared themselves for the oncoming onslaught of death."
);
zombieBattles.fight1();//Function Method
zombieBattles.fight2();//Function Method
zombieBattles.fight3();//Function Method
zombieBattles.noZombies();//Mutator Method
console.log("Finally after what seemed like constant fighting for survival the group was able to relax, they didn't understand how they were able to beat down the horde of zombies that had attacked them but did feel a sense of pride out of it. Whatever questions they had about the stability of their were definitely gone now since if only one of them had been not performing at their best, they all would have died. Outside of their building there was complete silence, but to be safe they decide to scout out the region before looking for a new place to take refuge in."
);
zombieBattles.zombieCheck();//Accessor Method
console.log("Despite the apparent lack of zombie presence in the area the group of friends carefully leave their old place of refuge, littered with corpses it was not a safe place to stay in. A few miles away from the building, they find the smoking remains of what appeared to be a helicopter. They searched it for life but all they found were corpses of a few people, burnt to the point of their gender not even being determinable. They moved on from the reck solemnly and found a new building that they could stay in and defend easily."
);
*/