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
    "black man": "☎",
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

/*for (var b in input) {
	inputLower[b] = input[b].toLowerCase();
}*/
input = input.replace(/[^\w\s]|_/g, function ($1) { return ' ' + $1 + ' ';}).replace(/[ ]+/g, ' ').split(' ');

//document.write(input);
for (i = 0; i < input.length; i++) {
	for (j = 0; j < keys.length; j++) {
    	if (input[i].toLowerCase() == keys[j] || input[i].toLowerCase() == keys[j]) {
        	input[i] = replacements[input[i]];
        	//document.write("\nFound one! It is at: i: " + i);
            
        }
    }
}
document.write(input.join(" "));
