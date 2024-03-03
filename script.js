/*let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);


let year;
console.log(year)
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// Declaring Variable //
let age = 30;
age = 31;
console.log(age);


const birthyear = 1991;
console.log(birthyear);

var job = 'programmer';
job = 'teacher'

console.log(job);

lastname = 'Schemdman'
console.log(lastname)



const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.05;

const BMMark = massMark/heightMark **2 ;
const BMIJohn = massJohn/heightJohn **2;

console.log(BMMark, BMIJohn);

const HigherBMI = BMMark > BMIJohn;
console.log(BMMark, BMIJohn, HigherBMI);*/


// String Template literals//
/*const firstName = 'joe';
const jobless = 'programmer'
const birthYear = 1991;
const year = 2028;

const joeNew = `I'm ${firstName} a ${year-birthYear} old ${jobless}`;
console.log(joeNew);*/

// const age = 19;


// if (age >=20) {
//   console.log("You can drive")
// }else {
//   const yearsLeft = 20 - age;
//   console.log(`You cannot drive, Wait another ${yearsLeft} years`);
// }

// const birthYear =2011;
// if (birthYear <=2000) {
//    century=20;
// }else{
//    century = 21;
// }

// console.log(century);

// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.05;

// const BMMark = massMark/heightMark **2 ;
// const BMIJohn = massJohn/heightJohn **2;

// console.log(BMMark, BMIJohn);

// const HigherBMI = BMMark > BMIJohn;
// console.log(BMMark, BMIJohn, HigherBMI);


// if (BMMark > BMIJohn) {
//   console.log(`Marks BMI ${BMMark.toFixed(2)} is higher than John's ${BMIJohn.toFixed(2)}`)
// }else {
//   console.log(`John's BMI  ${BMIJohn.toFixed(2)} is higher than Mark's ${BMMark.toFixed(2)}`)
// };


//Type Conversion an Coercion

//Type Conversion
/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+ 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

//Type Coercion
console.log('I am ' + 23 + ' years old'); 
console.log('23'- '10'- 3);


let n = '1' + 1;
n = n - 1;
console.log(n);
x = '10'-'4'-'3'-'2'+'5'
console.log(typeof x);


// 5 falsey values : 0, "", undefined, Null, NaN


const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log('Way! Height is DEFINED');
} else {
  console.log('Height is UNDEFINED')
}

const age = '18';
if (age === '18') console.log ("You just became an adult :D (strict)");

if (age == '18') console.log ("You just became an adult :D (loose)");

const favorit = Number(prompt("What is your favourite number?"));
console.log(favorit);

if (favorit===23) {
  console.log("Cool!, 23 is an amazing number!");
} else if (favorit===7) {
  console.log("7 is also a cool number")
} else {
  console.log("Number is not 23 or 7")
}


if (favorit!==23) {
  console.log("Why not 23?")
}

// //Logical operarors   */
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B


// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense);


// // if (shouldDrive) {
// //   console.log("Sarah is able to drive")
// // } else {
// //   console.log('Someone else should drive')
// // }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// const scoreDolphins = (97 + 112 + 11) / 3;
// const scoreKoalas = (109 + 95 + 16) / 3;
// console.log(scoreDolphins.toFixed(2), scoreKoalas.toFixed(2));

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if(scoreKoalas > scoreDolphins && scoreKoalas >=100) {
//   console.log("Koalas win the trophy");
// } else  if (scoreDolphins === scoreKoalas && scoreDolphins && scoreKoalas >=100){
//   console.log("Both win the trophy");
// } else {
//   console.log("No one wins the trophy")
// }




// const day = 'saturday';

// switch (day) {
//   case 'monday':
//     console.log("Plan the course structure");
//     console.log("Go to the Gym");
//     break;
  
//   case 'Tuesday':
//     console.log("Prepare theory videos");
//     console.log("Go to coding meetup");
//     break;
//   case 'Wednesday':
//   case 'thursday':
//     console.log("Write code")
//     break;
//   case 'friday':
//     console.lot('Record videos')
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log("Enjoy the Weeekend : D")
//     break;

//   default:
//     console.log("Not a valid day")
//     break;
// }



// The Conditional (Ternary operator)
const age = 25;
age >= 18 ? console.log("I like to drink wine"):
console.log("I like to drind water");

const drink = age >=18 ? 'Wine' : 'Water';
console.log(drink)

let drink2;
if (age>=18) {
  drink2 = 'Wine'
} else {
  drink2 = 'Water'
}

console.log(drink2)


console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);


const bill = 275;
const tip = bill<=300 && bill >=50 ? bill * 0.15 : bill *.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`)