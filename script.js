function toCase(text) {
  // write your code here 
	return toLowerCase(text) - toUpperCase(text) 
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
