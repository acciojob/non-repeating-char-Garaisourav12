function firstNonRepeatedChar(str) {
 // Write your code here
	let counter = {};
	for(int i = 0; i<str.length; i++){
		if(str[i] in counter){
			counter.str[i]++;
		}
		else{
			counter.str[i] = 1;
		}
	}
	for (let i = 0; i < str.length; i++) {
		if(counter.str[i] == 1){
			return str[i];
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

