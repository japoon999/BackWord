function cevir(soz) {
    if (soz.length > 1) {
        let backWord = "";
        for (let index = soz.length - 1; index > -1; index--) {
            backWord += soz[index];
        }
        return backWord;
    } else { return "Sozun uzunlugu 1 den chox olmalidir!" }
}
let word = prompt("Sozu tersine cevir:");
console.log(cevir(word))

