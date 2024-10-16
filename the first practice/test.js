let language = String(prompt(`put your language`));
let country = "tchad";

let population = Number(prompt(`put your population`));
let populationAdd =
  population > 33
    ? "Portugal's population is above average"
    : "portugal's population is below average";
console.log(populationAdd);

if (population > 33) {
  console.log("Portugal's population is above) average");
} else {
  console.log("portugal's population is below average");
}

if (country === "tchad") {
  isIsLand = true;
}
population++;
console.log(population);
console.log(population >= 6);
console.log(population < 33);
let discription =
  country + " is " + " and there are " + population + "milion person in it";
let towDiscriptionTow = `${country} is and there are ${population}milion person in it `;
console.log(discription);
console.log(towDiscriptionTow);

if (population < 33) {
  console.log(`${country}'s popuplation is above the averge ${population + 7}`);
} else {
  console.log(`${country}'s popuplation is bellw the averge`);
}

if (language === "English" && population < 50 && !isIsLand) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

switch (language) {
  case "chinese":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too");
}

console.log(typeof country);
console.log(typeof continet);
console.log(typeof population);
console.log(typeof isIsLand);
console.log(typeof language);

//the switch statment

let day = "tus";

switch (day) {
  case "sat":
    console.log("the sport's day");
    break;
  case "mon":
    console.log("the footbal's day");
    break;
  case "san":
    console.log("the gym's day");
    break;
  case "tus":
    console.log("the playstion's day");
    break;
  case "fry":
    console.log("the rest day");
    break;
  default:
    console.log("there are not result");
}

const dayTow = "tus";

if (dayTow === "sat") {
  console.log("the sport's day");
} else if (dayTow === "san") {
  console.log("the gym's day");
} else if (dayTow === "mon") {
  console.log("the footbal's day");
} else if (dayTow === "tus") {
  console.log("the playstion's day");
} else if (dayTow === "fry") {
  console.log("the rest day");
} else {
  console.log("there are not result");
}

// the condition (ternary) poerator

let age = 18;
let ageTow = age >= 14 ? "you can play" : "you can't play ";

console.log(ageTow);
let ageTree;

if (age >= 14) {
  ageTree = "you can play";
} else ageTree = "you can't play ";
console.log(ageTree);

let numNeighours = Number(
  prompt(`How many neighbour countries does your country 
have?'); 
2. If the`)
);
console.log(numNeighours);

if (numNeighours === 1) {
  console.log("only 1 border");
} else if (numNeighours > 1) {
  console.log("More than 1 border in case");
} else {
  console.log("no border");
}

function describeCountry(country, poplution, capitalCity) {
  let theDescribeCountry = `${country} has ${poplution} million people and the
    capital city is ${capitalCity} `;
  return theDescribeCountry;
}
// describeCountry(Finland, 6, Helsinki)
let addTheDescribeCountry1 = describeCountry("Finland", 6, "Helsinki");
let addTheDescribeCountry2 = describeCountry("tchad", 9, "angamina");
let addTheDescribeCountry3 = describeCountry("saudya", 20, "jedah");
// console.log(addTheDescribeCountry1);
// console.log(addTheDescribeCountry2);
// console.log(addTheDescribeCountry3);

function percentageOfWorld1(population) {
  let percentage = ((population / 7900) * 100).toFixed(2);
  let thePercentage = `the country has ${population} million people, so it's about ${percentage}% of the world population `;

  return thePercentage;
}

let addThePercentage1 = percentageOfWorld1(2476);
let addThePercentage2 = percentageOfWorld1(1543);
let addThePercentage3 = percentageOfWorld1(900);
// console.log(addThePercentage1);
// console.log(addThePercentage2);
// console.log(addThePercentage3);

let percentageOfWorld2 = function (population) {
  let percentage = ((population / 7900) * 100).toFixed(2);
  let thePercentage = `the country has ${population} million people, so it's about ${percentage}% of the world population `;
  return thePercentage;
};
let addThePercentage11 = percentageOfWorld2(2476);
let addThePercentage22 = percentageOfWorld2(1543);
let addThePercentage33 = percentageOfWorld2(900);
// console.log(addThePercentage11);
// console.log(addThePercentage22);
// console.log(addThePercentage33);
