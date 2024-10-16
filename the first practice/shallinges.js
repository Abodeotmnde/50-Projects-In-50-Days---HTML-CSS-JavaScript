// //Coding Challenge #1

// //DATA 1
// let d1marksMass = 78;
// let d1marksHeight = 1.69;
// let d1johnsMass = 92;
// let d1johnsHeight = 1.95;
// let d1marksBMI = 27;
// let d1johnsBMI = 24;
//  let d1markHigherBMI = (d1marksBMI > d1johnsBMI)
//  console.log(d1markHigherBMI)

// //DATA 2
// let d2marksMass = 95;
// let d2marksHeight = 1.88;
// let d2johnsMass = 85;
// let d2johnsHeight = 1.76;
// let d2marksBMI = 26;
// let d2johnsBMI = 25;
// // let d2markHigherBMI = Boolean`(marksBMI < johnsBMI)`
// // console.log(d2markHigherBMI)

// console.log(d2marksMass / (d2marksHeight * d2marksHeight))
// console.log(d2johnsMass / (d2johnsHeight * d2marksHeight))

// //Coding Challenge #2

// if(d2marksBMI >  d2johnsBMI) {
//     console.log(`Mark's BMI (${d2marksBMI}) is higher than John's! (${d2johnsBMI})`)
// } else {
//     console.log(`John's BMI (${d2johnsBMI}) is higher than Mark's! (${d2marksBMI})`)
// }

//Coding Challenge #3

// let DolphinsScore1 = (96 + 108 + 89);
// let KoalasScore1 = ( 88 + 91 + 110);
// let DolphinsScore2 = (97 + 112 + 101);
// let KoalasScore2 = ( 109 + 95 + 123);
// let DolphinsScore3 = (97 + 112 + 101);
// let KoalasScore3 = ( 109 + 95 + 106);

// if(DolphinsScore1 > KoalasScore1 ) {
//     console.log("DolphinsScore1 is win")

// } else if(DolphinsScore1 < KoalasScore1) {
//     console.log("KoalasScore1 is win")

// } else if(DolphinsScore1 === KoalasScore1) {
//     console.log("draw means they have the same average score")
// }

// if(DolphinsScore2 < 100 ) {
//     console.log("KoalasScore1 is win")

// } else if( KoalasScore2 < 100) {
//     console.log("DolphinsScore1 is win")

// } else if(DolphinsScore2 < KoalasScore2) {
//     console.log("KoalasScore1 is win")
// } else if(DolphinsScore2 > KoalasScore2 ) {
//     console.log("DolphinsScore1 is win")

// } else if(DolphinsScore2 === KoalasScore2) {
//     console.log("draw means they have the same average score")
// }

// if(DolphinsScore3 > KoalasScore3 && DolphinsScore3 > 100) {
//     console.log("DolphinsScore1 is win")

// } else if(DolphinsScore3 < KoalasScore3 && KoalasScore3 > 100 ) {
//     console.log("KoalasScore1 is win")

// } else if(DolphinsScore3 === KoalasScore3  && DolphinsScore3 > 100 ) {
//     console.log("draw means they have the same average score")

// } else {
//     console.log("there all are lose ")
// }

// console.log(DolphinsScore3)
// console.log(KoalasScore3)

//Coding Challenge #4

// let theBill1 = 275;
// let theBill2 = 40;
// let theBill3 = 430;
// let theBill =  Number(prompt(`put your number`));
// let tip = theBill >= 50 && theBill <= 300 ? (theBill * 0.15) : (theBill * 0.2) ;
// let letter = `the old values was ${theBill} we tip  ${tip} after the tip ${(theBill - tip)}`
// alert(letter)

//let tip = (40 * 100 )
//let tip = (430 * 100 / 20)

// let resotion = DolphinsScore3 > KoalasScore3 ? "DolphinsScore1 is win" : "KoalasScore1 is win"
// console.log(resotion)

// let DolphinsScore1 = 96 + 108 + 89;
// let KoalasScore1 = 88 + 91 + 110;
// let DolphinsScore2 = 97 + 112 + 101;
// let KoalasScore2 = 109 + 95 + 123;
// let DolphinsScore3 = 97 + 112 + 101;
// let KoalasScore3 = 109 + 95 + 106;

//JavaScript Fundamentals – Part 2

//Coding Challenge #1

// const calcAverage = (gem1, gem2, gem3) => gem1 + gem2 + gem3;
// const calcDolf = calcAverage(DolphinsScore1, DolphinsScore2, DolphinsScore3);

// const calcKOala = calcAverage(KoalasScore1, KoalasScore2, KoalasScore3);

// function checkWinner(coalatem, dolftem) {
//   const whoIsTheWiner =
//     coalatem > dolftem
//       ? `Koalas win (${coalatem} vs. ${dolftem}`
//       : `dolfins win (${dolftem} vs. ${coalatem}`;

//   console.log(whoIsTheWiner);
// }

// checkWinner(calcKOala, calcDolf);

//Coding Challenge #2

// let theBill1 = 125;
// let theBill2 = 555;
// let theBill3 = 44;
// // let theBill =  Number(prompt(`put your number`));
// const bills = [125, 555, 44];
// const tips = [];
// const tottl = [];

// function calcTip(Bill) {
//   const seeTheBill = Bill > 50 && Bill < 300 ? Bill * 0.15 : Bill * 0.2;
//   return seeTheBill;
// }

// const addSeeTheBill = calcTip(100);
// // console.log(addSeeTheBill);

// for (i = 0; i < bills.length; i++) {

//   tips.push(calcTip(bills[i]));
//   console.log(tips[i]);

//   tottl.push(bills[i] - tips[i]);
//   console.log(tottl[i]);
// }

// for (f = 0; f < bills.length; ++) {
//   tips.push(calcTip(bills[i]));
//   console.log(tips[i]);

//   for (j = 0; j < bills.length; j++) {
//     tottl.push(bills[i] - tips[i]);
//     console.log(tottl[i]);
//     break;
//   }
// }

//Coding Challenge #3

// let d1marksMass = 78;
// let d1marksHeight = 1.69;
// // console.log(d1marksMass / (d1marksHeight * d1marksHeight));
// let d1johnsMass = 92;
// let d1johnsHeight = 1.95;
// let d1marksBMI = 27;
// let d1johnsBMI = 24;
// // let d1markHigherBMI = d1marksBMI > d1johnsBMI;
// // console.log(d1markHigherBMI);

// const markBMI = {
//   d1marksMass: 78,
//   d1marksHeight: 1.69,
//   calcBMI: function () {
//     const theMarksBMI = d1marksMass / (d1marksHeight * d1marksHeight);
//     return theMarksBMI;
//   },
//   // nowMarkBMI: d1marksMass / (d1marksHeight * d1marksHeight),
// };

// // markBMI.calcBMI();
// console.log(markBMI.calcBMI());

// const johnBMI = {
//   d1johnsMass: 92,
//   d1johnsHeight: 1.95,
//   calcBMI: function () {
//     const theJohnsBMI = d1johnsMass / (d1johnsHeight * d1johnsHeight);
//     return theJohnsBMI;
//   },
//   // nowjohnBMI: d1johnsMass / (d1johnsHeight * d1johnsHeight),
// };
// console.log(johnBMI.calcBMI());

// const BMI = `Mark's BMI (${markBMI.calcBMI()}) is higher than John's (${johnBMI.calcBMI()})!`;

// console.log(BMI);

// Coding Challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const tottl = [];

// function calcTip(Bill) {
//   const seeTheBill = Bill > 50 && Bill < 300 ? Bill * 0.15 : Bill * 0.2;
//   return seeTheBill;
// }

// for (let i = 0; i < bills.length; i++) {
//   // console.log(bills[i]);

//   tips.push(calcTip(bills[i]));
//   // console.log(tips[i]);

//   tottl.push(bills[i] - tips[i]);
//   // console.log(tottl[i]);
// }

// // console.log(bills);
// // console.log(tips);
// // console.log(tottl);

// const arr = [10, 20, 30, 40, 50, 10];

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     // console.log(sum);
//   }
//   return sum;
// }

// const seeTheCalcAverage = calcAverage(arr);
// console.log(seeTheCalcAverage);

// Developer Skills & Editor Setup
// Coding Challenge #1

// const Data1 = "[17, 21, 23]";
// const Data2 = "[12, 5, -5, 0, 4]";

// const arr = [17, 21, 23];
// const days = [1, 2, 3, 4, 5, 6, 7];

// function printForecast() {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i]}ºC in ${days[i]} days`);
//   }
// }

// printForecast();
