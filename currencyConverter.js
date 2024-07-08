
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const  JPY = (amount) => {
    return amount * oneEuroIs.JPY;
}

const  USD = (amount) => {
    return amount * oneEuroIs.USD;
}

const  GBP = (amount) => {
    return amount * oneEuroIs.GBP;
}

module.exports = {JPY,USD,GBP}