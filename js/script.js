const age = 26;
const firstName = 'Bram';
const totalAmount = 10;

if (age >= 18 && age <= 25) {
    console.log('Je krijgt 50% korting!!');
} else {
    console.log('Helaas, geen korting voor jou!');
}

if (firstName == 'Sarah' || firstName == 'Bram') {
    console.log('Een gratis biertje, komt er aan!')
} else {
    console.log('Leuk dat je er bent, maar het is niet je verjaardag')
}

if (totalAmount >= 100) {
    console.log('Gratis Champagne');
} else if (totalAmount >= 50) {
    console.log('Gratis Nachos');
} else if (totalAmount >= 25) {
    console.log('Gratis Bitterballen');
} else {
    console.log('Je krijgt geen gratis cadeau')
}