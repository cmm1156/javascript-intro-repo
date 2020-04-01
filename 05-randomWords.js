
var array = ["Flash", "Martian Manhunter", "Aquaman", "Hawkgirl", "Cyborg", "Green Lantern"];
var randomWordOne = Math.floor(Math.random() * array.length);
var randomWordTwo = Math.floor(Math.random() * array.length);

// if randomWordOne == randomWordTwo {
//   randomWordOne += 1;
// }

console.log("And so,", array[randomWordOne], "and", array[randomWordTwo], "joined the Justice League.");
