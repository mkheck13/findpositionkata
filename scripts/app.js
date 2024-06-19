// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"


// have to write a code that returns the postion of a letter in an index.
// I have done some katas simalier to this one
// having trouble figuring out the method that I want to use, I want it to tell me to the postion in 
// we set the alphabet to an array named alpha
// next we return the message with the index of where its at +1 other wise we would get the letter before it. Arrays start at zero.
function position(letter){
    const alpha = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return 'Position of alphabet: ' + (alpha.indexOf(letter) + 1);
}