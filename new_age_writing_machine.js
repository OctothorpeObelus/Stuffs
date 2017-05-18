var replacements = {
	"one": "👆",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "🖐",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "⑨",
    "zero": "👌",
    "fire": "🔥",
    "bomb": "💣",
    "arrow": "↣",
    "water": "💦",
    "ball": "⚽",
    "no": "⛔",
    "gun": "🔫",
    "nibba": "ni🅱🅱a",
    "smoke": "🌪",
    "weed": "🍁",
    "black": "☎",
    "gay": "( ͡° ͜ʖ ͡°)",
    "family": "👪",
    "furry": "Rashaad🦊Thomas",
    "propser": "🖖",
    "peace": "☮",
    "lol": "🍭",
    "the": "teh",
    "in": "on",
    "on": "in"
}
var letters = {
    "a": "🅰",
    "b": "🅱",
    "c": "🅲",
    "d": "🅳",
    "e": "🅴",
    "f": "🅵",
    "g": "🅶",
    "h": "🅷",
    "i": "🅸",
    "j": "🅹",
    "k": "🅺",
    "l": "🅻",
    "m": "🅼",
    "n": "🅽",
    "o": "🅾",
    "p": "🅿",
    "q": "🆀",
    "r": "🆁",
    "s": "🆂",
    "t": "🆃",
    "u": "🆄",
    "v": "🆅",
    "w": "🆆",
    "x": "🆇",
    "y": "🆈",
    "z": "🆉",
}
var input = prompt("Enter some text:") || "null";
//var inputLower = {};
var keys = Object.keys(replacements);
var letterScramble = input.split("");
var letterToReplace = "";
var rand = 0;

input = input.replace(/[^\w\s]|_/g, function ($1) { return ' ' + $1 + ' ';}).replace(/[ ]+/g, ' ').split(' ');

//document.write(input);
for (i = 0; i < input.length; i++) {
	for (j = 0; j < keys.length; j++) {
    	if (input[i].toLowerCase() == keys[j]) {
        	input[i] = replacements[input[i]];
        	//document.write("\nFound one! It is at: i: " + i);
            
        }
    }
    for (j = 0; j < letters.length; j++) {
    	if (Math.random > 0.3) {
        	rand = Math.round(Math.random + 1)*j;
            letterToReplace = input[j].charAt(rand);
            input[j] = input[j].substring(0, rand - 1) + letters[rand] + input[j].substring(rand, input[j].length-1);
        }
    }
}
document.write(input.join(" "));
