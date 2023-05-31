// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	//str = str.trim();
	let i = 0;
	let last = str.length-1;
	while(i<last){
		if(str.charAt(i)!==str.charAt(last)){
			return false;
		}
		i++;
		last--;
	}
	return true;
}
module.exports = palindrome