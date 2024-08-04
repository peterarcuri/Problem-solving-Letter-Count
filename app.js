// (Letter Count Psueudocode)
// create a function called letterOccurrence that takes in an argument(word)
// create variable for alphabetical characters

// write a conditional printing out "ERROR" if argument(word) is not a string (typeof word !== "string"

// Create a dictionary (object) to hold letter count

// create a for loop for each letter in (word) 
// need a variable for each letter to lowercase

// if the dictionary has a letter:

// incremenet by 1 (++)

// else

// set the letterCount to 1

// return letterCount

function letterOccurrence(word) {

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    if (typeof word !== "string") {
        console.log('ERROR!');
        return;
    }

    for (const letter of word) {
        if (!alphabet.includes(letter.toLowerCase())) {
            console.log('ERROR!');
            return;
        }
    }
    let letterCount = {};

    for (let letter of word) {
        let lowerCaseLetter = letter.toLowerCase();

        if (letterCount[lowerCaseLetter] !== undefined) {
            letterCount[lowerCaseLetter]++;
        }
        else {
            letterCount[lowerCaseLetter] = 1;
        }
    }

    return letterCount;

    }


letterOccurrence("Caesar42");
console.log(letterOccurrence("Caesar"));
console.log(letterOccurrence("AAbaBa"));
