// Randoms to choose from

const dwelling = ['mansion', 'apartment', 'shack', 'house', 'homeless'];
const city = ['Atlanta, GA', 'Miami, FL', 'Jackson, MS', 'Kansas City, MO', 'Dallas, TX', 'New York City, NY', 'Owensboro, KY', 'Lexington, TN'];
const kids = Math.floor((Math.random() * 21));

// Choosing Values to Output

const chooseDwelling = () => {
    let d = Math.floor((Math.random() * 5));
    console.log(`You will live in a ${dwelling[d]}.`);
};

const chooseCity = () => {
    let c = Math.floor((Math.random() * 8));
    console.log(`Pack your bags baby, you'll be living in ${city[c]}!`);
};

const isMarried = () => {
    let m = Math.floor((Math.random() * 305));
    if (m % 2 === 0) {
        console.log('Congrats looks like you will get married!!');
    } else {
        console.log('You may have a companion, but it won\'t be human...');
    }
};

// Play the game
const mash = () => {
    console.log(`I heard you wanted a glance of your future. Well.... here it is : `)
    chooseDwelling();
    chooseCity();
    if (kids === 0) {
        console.log(`Might as well party til you're purple! ${kids} kids.`);
    } else if (kids <= 4) {
        console.log(`Not many kids running around. Looks like you'll have ${kids} kids.`)
    } else if (kids <= 9 && kids > 4) {
        console.log(`Whew! Get some sleep now because it'll be impossible with ${kids} kids running around the house!`)
    } else {
        console.log(`Congratulations!!! You're gonna be able to start a sports team... Comprised of your ${kids} kids. Good luck!`);
    };
    isMarried();
};



// Auto Play Game On Start

mash();