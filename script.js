function palindrome(str){

	//1- Total length of str 
    const len = string.length;  
  
    //2- Checking 
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (string[i] !== string[len - 1 - i]) {  
            return false;  
        }  
    }  
    return true;
}  
  
// // accept the string or number from the prompt  
// const string = prompt('Enter a string or number: ');  
  
// const value = validatePalin(string);  
  
// console.log(value);  
module.exports = palindrome
