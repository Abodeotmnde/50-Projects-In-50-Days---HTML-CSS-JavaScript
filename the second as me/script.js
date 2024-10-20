// const jon = {
//     name: 'jon',
//     age: 25,
//     bestFriend: 'tom'
// }
// console.log(jon)

// // const jon = [
// //    'jon',
// //    5,
// //    'tom'
// // ]

// const addJon = `${(jon.name)} has ${jon.age} friends and his beast friend is ${jon.bestFriend}`
// console.log(addJon)

// const jonas = {
//     name: 'omar',
//     bearthYear: 2000,
//     job: 'player',
//     hasDriverLicen: true,

//     getSummary: function() {
//         // console.log(this)
//         const age = 2025 - this.bearthYear
//         console.log(age)

//         const jonasGetSummary = `${this.name} is a ${age} years old ${this.job} and he has ${this.hasDriverLicen ? 'a' : 'no'} driver licne`

//         return jonasGetSummary;
//     }

// }
// console.log(jonas)
// console.log(jonas.getSummary())
// console.log(jonas.getSummary())

// the declartion funcution

// function bearth(bearthNum) {
//     return 2025 - bearthNum

// }
// const age = bearth(2000)
// console.log(age)

// // the expirssion fancution

// const age22 = function (bearthNum2) {

//     return 2025 - bearthNum2
// }
// const age2 = bearth(2000)
// console.log(age2)

// arrow fancution

// const age3 = (bearthNum3) => 2025 - bearthNum3;
// console.log(age3)

// const nothing = [
//     'suariz',
//     30,
//     'player',
// ]

// console.log(nothing[1])
function percentageOfWorld1(population) {
  let percentage = ((population / 7900) * 100).toFixed(2);
  let thePercentage = `the country has ${population} million people, so it's about ${percentage}% of the world population `;

  return thePercentage;
}

// let addThePercentage1 = percentageOfWorld1(2476)
// let addThePercentage2 = percentageOfWorld1(1543)
// let addThePercentage3 = percentageOfWorld1(900)
// // console.log(addThePercentage1)
// // console.log(addThePercentage2)
// // console.log(addThePercentage3)

// let percentageOfWorld2 = function (populationNOth) {
//     let percentage = ((populationNOth / 7900) * 100).toFixed(2);
//     let thePercentage = `the country has ${populationNOth} million people, so it's about ${percentage}% of the world population `
//     return thePercentage;
// }

// let addThePercentage11 = percentageOfWorld2(2476)
// let addThePercentage22 = percentageOfWorld2(1543)
// let addThePercentage33 = percentageOfWorld2(900)
// // console.log(addThePercentage11)
// // console.log(addThePercentage22)
// // console.log(addThePercentage33)

// function describePopulation(country, population) {
//     let percentage = percentageOfWorld2(population)

//     return `${country} has ${population} million people,
// which is about ${percentage}`

// }
// const add1 = describePopulation('masr', 2100)
// const add2 = describePopulation('tchad', 1100)
// const add3 = describePopulation('sudia', 1000)
// // percentageOfWorld2(100)
// // console.log(add1)
// // console.log(add2)
// // console.log(add3)

// const populations = [100, 200, 300, 500,]
// console.log(populations.length == 4 )

// console.log(populations.includes());
// const percentages0 = percentageOfWorld1(populations[0])
// const percentages1 = percentageOfWorld1(populations[1])
// const percentages2 = percentageOfWorld1(populations[2])
// const percentages3 = percentageOfWorld1(populations[3])
// // console.log(percentages0)
// // console.log(percentages1)
// // console.log(percentages2)
// // console.log(percentages3)

// const neighbours = ['sudan', 'camiron', 'libia'];
// console.log(neighbours)
// neighbours.push('Utopia')
// console.log(neighbours)
// neighbours.pop()
// console.log(neighbours)
// if(neighbours.includes( 'Germany')) {
//     console.log('‘Germany in my array' )

// } else {
//     console.log( 'Probably not a central European country')
// }
// console.log(neighbours)
// console.log(neighbours.indexOf('libia'))
// const myCuntry = neighbours.indexOf('libia')
// neighbours[2] = "palstian"
// console.log(neighbours)
// console.log(neighbours[2])

// let island = prompt(`put your island`)
// const myCountry = {
//     country: 'tchad',
//     capital: 'anjamina',
//     language:'arabic',
//     population: percentageOfWorld1(120),
//     neighbours: [],

//     describe: function () {
//         // console.log(this)
//         console.log(this.population)
//     },

//     add1: function() {
//         this.age = 14

//     },
//     }
//     myCountry.checkIsland()

// const island = prompt(`put your island`)
//     console.log(myCountry)
//     // console.log(myCountry.checkIsland())
//     myCountry.describe()

//     let island = "abode"
//     let island1 = island === 'String' ? island === true : island === false;
//     console.log(myCountry.island)
// myCountry.checkIsland()

// console.log (island1)

// myCountry.describe()

// // let inDescribe = myCountry.describe();
// // myCountry.describe()

// // console.log(inDescribe)

// for (let i = 0; i < 50; i++) {
//     console.log(`Voter number ${i} is currently voting`)
// }

// const populations = [100, 200, 300, 500,]

// const percentages2 = []

// for (let i = 0; i < populations.length; i++) {
//     // percentages2.push(percentageOfWorld1(['i']));

//     percentages2.push(percentageOfWorld1(populations[i]))

//     console.log(percentages2[i])

// }

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
//     'Russia'] ]

// for(let i = 0; i < listOfNeighbours.length ; i++) {
//     console.log(`'Neighbour: ${listOfNeighbours[i]}`)

//     for(let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`)

//         // for(let i = 0; i < listOfNeighbours.length; i++) {
//         //     console.log(`Neighbour: ${listOfNeighbours[2]}`)

//         // }
//     }
// }

// console.log(listOfNeighbours[2])

//     for (let i = 0; i < 50; i++) {
//     console.log(`Voter number ${i} is currently voting`)
// }

const populations = [100, 200, 300, 500];

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
  console.log(percentages2[i]);
}

const percentages3 = [];
let j = 0;
while (j < populations.length) {
  percentages3.push(percentageOfWorld1(populations[j]));
  console.log(percentages3[j]);
  j++;
}

for (i = 0; i < bills.length; i++) {
  console.log(bills[i]);

  for (k = 0; k < bills.length; k++) {
    tips.push(calcTip([i]));
    console.log(tips[i]);
  }
  console.log(tottl[i]);

  // for (j = 0; j < bills.length; j++) {
  //   tottl.push(tips + bills[i]);
  // }
}
