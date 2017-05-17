var input = prompt("Type your message:") || "null";
var output;
var key = prompt("Type your key (leave empty for default of 3):") || 3;
var process = [];

if (key > 26) {
	key = 26;
} else if (key < -26) {
	key = -26;
}
for (i = 0; i < input.length; i++) {
	process[i] = input.charCodeAt(i);
}
for (i = 0; i < process.length; i++) {
	if (process[i] >= 65 && process[i] <= 90 && process[i] != 32) {
    	if (process[i] - key < 65) {
        	process[i] = process[i] - key + 26;
        } else if (process[i] - key > 90) {
        	process[i] = process[i] - key - 26
        } else {
    		process[i] = process[i] - key;
    	}
    } else if (process[i] >= 97 && process[i] <= 122 && process[i] != 32) {
    	if (process[i] - key < 97) {
        	process[i] = process[i] - key + 26;
        } else if (process[i] - key > 122) {
        	process[i] = process[i] - key - 26
        } else {
    		process[i] = process[i] - key;
    	}
    } else if (process[i] >= 48 && process[i] <= 57 && process[i] != 32) {
    	if (process[i] - key < 48) {
        	process[i] = process[i] - key + 10;
        } else if (process[i] - key > 57) {
        	process[i] = process[i] - key - 10
        } else {
    		process[i] = process[i] - key;
    	}
    }
}
for (i = 0; i < process.length; i++) {
	if (output != null) {
    	output += String.fromCharCode(process[i]);
    } else {
    	output = String.fromCharCode(process[i]);
    }
}
document.write(output);
alert(output);
