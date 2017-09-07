var checkResult = (function(j,e,s,f,c){return function(a){if(e((Buffer.from('WyJNZWdvbHVzIiwiTWVnb2x1cyIsIk1lZ29sdXMiLCJNZWdvbHVzIiwiTWVnb2x1cyIsIlphbmRvcm4iLCJaYW5kb3JuIiwiWmFuZG9ybiIsIlphbmRvcm4iLCJSb2NrIEZhY2UiLCJaaXAiLCJCbG90b24iLCJSb2NrIEZhY2UiLCJSb2NrIEZhY2UiLCJCbG90b24iXQ==','base64').toString('ascii')),j(a))){c(s)}else{c(f)}}})(JSON.stringify, function(a,b){return a===b},"Wooo! Success!", "Oh no! Failure!", console.log);

////////////////////////////////////////////////////////////////////////////////
// This project is about basics. Perform all of the fights in the match list,
// and call the checkResult() function with an array containing the names of the
// winner of each match to see if you've done it right. 
//
// Several of the functions below aren't important to you. When that's
// the case, I say so in a comment. I've also briefly explained what they do in
// each case, you're curious. 
//
// To complete the challenge, you'll need to use the array of fighters (called
// "fighters"), the "copyFighter" function, the "fight" function, and the array
// of "matches".
//
// If you can't run "node" from your command line, you'll need to install node
// from here: https://nodejs.org/en/
//
// Then you can run this file from your command line with "node ./project-1.js"
// (assuming you're in the same directory as this file)
////////////////////////////////////////////////////////////////////////////////
console.log("Right now, pretty much nothing happens.");
console.log("I just pass this imaginary result to 'checkResult' and it fails");
var result = ["Hank", "Hank", "Hank", "Etc."];
checkResult(result);
console.log("See!?");

// Here are the fighters.
var fighters = [{
    name: "Megolus",
    agility: 4,
    damage: 40,
    health: 700
  }, {
    name: "Zandorn",
    agility: 12,
    damage: 30,
    health: 250
  }, {
    name: "Buck",
    agility: 10,
    damage: 10,
    health: 150
  }, {
    name: "Rock Face",
    agility: 7,
    damage: 30,
    health: 400
  }, {
    name: "Zip",
    agility: 40,
    damage: 10,
    health: 100
  }, {
    name: "Bloton",
    agility: 10,
    damage: 5,
    health: 1000
  }
];

// This is the list of matches. You need to pit each pair of fighters against
// each other using the "fight" function. 
var matches = [
  [ 'Megolus', 'Zandorn' ],
  [ 'Megolus', 'Buck' ],
  [ 'Megolus', 'Rock Face' ],
  [ 'Megolus', 'Zip' ],
  [ 'Megolus', 'Bloton' ],
  [ 'Zandorn', 'Buck' ],
  [ 'Zandorn', 'Rock Face' ],
  [ 'Zandorn', 'Zip' ],
  [ 'Zandorn', 'Bloton' ],
  [ 'Buck', 'Rock Face' ],
  [ 'Buck', 'Zip' ],
  [ 'Buck', 'Bloton' ],
  [ 'Rock Face', 'Zip' ],
  [ 'Rock Face', 'Bloton' ],
  [ 'Zip', 'Bloton' ]
];

// Before you put a fighter in a fight, you'll want to make a copy of them with
// this function. When they fight, we change their health to get lower and
// lower. If we don't make a copy first, then the original version of the
// fighter will have it's health reduced, and we won't have a place to look to 
// figure out what that fighter was like when they were at full health. Just use
// the fighters array as a reference to make copies from.
function copyFighter(fighter) {
  return JSON.parse(JSON.stringify(fighter));
};


// This pits two fighters against each other and returns the winner.
function fight(fighterA, fighterB) {
  fightTimer = 0;
  printBanner(fighterA.name.toUpperCase() + " vs " + fighterB.name.toUpperCase()) 
  printBanner("Let the fight begin!")

  while (true) {
    if (canAttack(fighterA, fightTimer)) {
      attack(fighterA, fighterB);
    }
    if (checkForWinner(fighterA, fighterB)) {
      break;
    }
    if (canAttack(fighterB, fightTimer)) {
      attack(fighterB, fighterA);
    }
    if (checkForWinner(fighterA, fighterB)) {
      break;
    }
    fightTimer++;
    waitTwoMillis();
  }

  var winner = checkForWinner(fighterA, fighterB);
  printBanner(winner.name + " wins!!!");
  return winner;
};


/////////////////// You can ignore functions below here. ///////////////////////

// This just prints the text out with a box of asterisks around it. You don't
// need to use this function. 
function printBanner(text) {
  var margin = Array(text.length + 5).join("*");
  console.log(margin);
  console.log("*", text, "*");
  console.log(margin);
};

// This returns the winning fighter if the other is knocked out. You also don't
// need to use this function.
function checkForWinner(fighterA, fighterB) {
  if (fighterA.health <= 0 || fighterB.health <= 0) {
    if (fighterA.health > 0) {
      return fighterA;
    } else {
      return fighterB;
    }
  }
};


// More agile fighters attack more often. Because of the way this is implemented
// agility should always be less than 100. You can ignore this.
function canAttack(fighter, time) {
  var attackFrequency = Math.ceil(100 / fighter.agility)
  return (time % attackFrequency) == 0;
};


// Resolve attack. Not important for you.
function attack(attacker, target) {
  console.log(
    attacker.name,
    " hits ",
    target.name,
    " for ",
    attacker.damage,
    " damage!"
    );
  target.health = target.health - attacker.damage;
  console.log(target.name, " is down to ", target.health, " health.")
};


// Waits two milliseconds. You really don't need this one.
function waitTwoMillis() {
  var start = new Date();
  while (new Date() - start < 2) {
    // do nothing...
  }
}