'use strict';

//Variables
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

//Arrow function
const fifteen = inventors.filter(
  (eachinventor) => eachinventor.year >= 1500 && eachinventor.year < 1600
);
//Classic Function
// const fifteen = inventors.filter(
//   function (eachinventor) {
//     if (eachinventor.year >= 1500 && eachinventor.year < 1600) {
//       return true
//     }
//   }
// );
console.log(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const fullNames = inventors.map(
  (eachInventor) => `${eachInventor.first}, ${eachInventor.last}`
);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const ordered = inventors.sort(
  (inventorOne, inventorTwo) => inventorTwo.year - inventorOne.year
);

// const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

// const ordered = inventors.sort(function(a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
console.log(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

//Final 0 represents the value of the counter "total"
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
const inventorsYearsLived = inventors.map((eachInventor) => {
  const newInventor = {
    name: eachInventor.first + ' ' + eachInventor.last,
    yearsLived: eachInventor.passed - eachInventor.year,
  };
  return newInventor;
});
console.log(inventorsYearsLived);

const inventorsSortedByYearsLivedOldestToYoungest = inventorsYearsLived.sort(
  (inventorOne, inventorTwo) => inventorTwo.yearsLived - inventorOne.yearsLived
);
console.log(inventorsSortedByYearsLivedOldestToYoungest);

const inventorsSortedByYearsLivedYoungestToOldest = inventorsYearsLived.sort(
  (inventorOne, inventorTwo) => inventorOne.yearsLived - inventorTwo.yearsLived
);
console.log(inventorsSortedByYearsLivedYoungestToOldest);

// const oldest = inventors.sort(function (a, b) {
//   const lastInventor = a.passed - a.year;
//   const nextInventor = b.passed - b.year;
//   if (nextInventor > lastInventor) {
//     return -1;
//   } else {
//     return 1;
//   }
//OR
// return lastInventor > nextInventor ? -1 : 1;
// });

// const youngest = inventors.sort(function (a, b) {
//   const lastInventor = a.passed - a.year;
//   const nextInventor = b.passed - b.year;
//   if (lastInventor > nextInventor) {
//     return -1;
//   } else {
//     return 1;
//   }
//OR
// return lastInventor > nextInventor ? -1 : 1;
// });

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// // const links = category.querySelectorAll('a'); //Node List
// // const links = Array.from(category.querySelectorAll('a')); //Turned into Array
// const links = [...category.querySelectorAll('a')]; //Turned into Array

// // const de = links.map((eachLink) => eachLink.textContent);
// // const boulevardsWithDe = de.filter((eachDe) => eachDe.includes('de'));

// const de = links
//   .map((eachLink) => eachLink.textContent)
//   .filter((eachLink) => eachLink.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleSortedAlphabeticallyByLastName = people.sort();
console.log(peopleSortedAlphabeticallyByLastName);

// const alpha = people.sort(function (a, b) {
//   const [aLast, aFirst] = a.split(); //When we split it turns into an array of two elements separating name and surname. Deconstructing it we are giving both elements a name, what's better, rather than leaving there without any name
//   const [bLast, bFirst] = b.split();
//   return aLast > bLast ? -1 : 1; //Alpha order last to first
//   return aLast > bLast ? 1 : -1; //Alpha order first to last (this is what we want)
// });

// 8. Reduce Exercise
// Sum up the instances of each of these. I only want to have one of each, not repeated
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

const transports = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0; //If the property doesn't exist we have to create it to a 0 value
  }
  obj[item]++; //then we add 1, cos we want to add one item to the list, we can't start on 0 itself

  return obj; //I return de counter with its new properties that each time will we completely different
}, {});

console.log(transports);
