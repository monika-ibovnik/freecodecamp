/**
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
rot13("SERR YBIR?") should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
*/

function rot13(str) { // LBH QVQ VG!
    var answer = '';
    for(var i = 0; i < str.length; i++){
        //65-90
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i)<=90){
            var shiftedChar = str[i].charCodeAt()+13;
            if(shiftedChar > 90){
                shiftedChar = shiftedChar - 90 + 64;
            }
            answer += String.fromCharCode(shiftedChar);
            //answer += String.fromCharCode(str[i].charCodeAt + 13);
        }else{
            answer += str[i];
        }
    }
    return answer;
}
console.log(rot13("SERR PBQR PNZC."));
