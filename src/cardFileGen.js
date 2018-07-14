const jsonfile = require('jsonfile');
const file = "./cardsOutline.json";
const outfile = "./data/cards.json";
let cards;

jsonfile.readFile(file, function(err, obj) {
    cards = obj.cardList;
    for(let i = 0; i < cards.length; i++) {
        cards[i].id = i;
        console.log(`${i}: ${cards[i].name}`);
    }
    familiars = obj.familiars;
    for(let i = 0; i < familiars.length; i++) {
        familiars[i].id = i;
    }
    jsonfile.writeFile(outfile, obj, function (err) {
        if (err) console.error(err);
        else console.log(`Wrote ${cards.length} cards.`);
    });
});





