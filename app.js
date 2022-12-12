let pronoun = ['our', 'my', 'his', 'her'];
let adjective = ['blue', 'zesty', 'hot', 'little'];
let noun = ['racoon', 'kitty', 'putin', 'simba'];
let extension = ['com', 'info', 'biz', 'in'];
let domainNamesArray = [];
let checker, extLen;

for (i = 0; i < pronoun.length; i++) {                                                                              // Creating nested arrays
    for (j = 0; j < adjective.length; j++) {
        for (k = 0; k < noun.length; k++) {
            for (l = 0; l < extension.length; l++) {
                extLen = extension[l].length;                                                                       // Finding length of an extension
                checker = noun[k].slice(-1*extLen);                                                                 // Taking out a part of a noun equal to the extension length
                if (checker === extension[l]) {                                                                     // Checking if they are the same
                    domainNamesArray.push(pronoun[i]+adjective[j]+noun[k].slice(0,(-1)*extLen)+'.'+extension[l]);   // If they are the same, we are creating a fancy domain
                    domainNamesArray.push(pronoun[i]+adjective[j]+noun[k]+'.'+extension[l]);                        // And crating a regular domain
                }
                else {
                domainNamesArray.push(pronoun[i]+adjective[j]+noun[k]+'.'+extension[l]);                            // If they are not the same, we create a regular domain only
                }
            }
        }
    }
}

const domainNamesArrayShuffled = domainNamesArray.sort((x, y) => 0.5 - Math.random());          // Shuffling the array just for fun (Found the code here: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj)

document.getElementById("list-of-domains").innerHTML = domainNamesArrayShuffled.join("<br>"); // Sending data to index.html and printing an array line-by-line