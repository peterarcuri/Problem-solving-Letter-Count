
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