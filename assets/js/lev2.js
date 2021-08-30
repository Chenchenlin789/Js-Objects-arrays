//lev2_1
let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];
//name
edelMetallPreise.forEach((elt) => {
  document.getElementById("name").innerHTML += elt.name + "<br>";
});
document.getElementById("name").innerHTML += "<br>";

edelMetallPreise.map((elt) => {
  document.getElementById(
    "name"
  ).innerHTML += `using map method: ${elt.name} <br>`;
});

document.getElementById("name").innerHTML += "<br>";
//preiseGramEuro
edelMetallPreise.forEach((elt) => {
  document.getElementById("name").innerHTML += elt.preiseGramEuro + "<br>";
});
document.getElementById("name").innerHTML += "<br>";

edelMetallPreise.map((elt) => {
  document.getElementById(
    "name"
  ).innerHTML += `using map method: ${elt.preiseGramEuro} <br>`;
});
document.getElementById("name").innerHTML += "<br>";
//veraenderung
edelMetallPreise.forEach((elt) => {
  document.getElementById("name").innerHTML += elt.veraenderung + "<br>";
});
document.getElementById("name").innerHTML += "<br>";

edelMetallPreise.map((elt) => {
  document.getElementById(
    "name"
  ).innerHTML += `using map method: ${elt.veraenderung} <br>`;
});
document.getElementById("name").innerHTML += "<br>";
//filter die teurer als 50 Euro
let teuerAls50 = edelMetallPreise.filter((elt) => elt.preiseGramEuro < 50);
teuerAls50.forEach((elt) => {
  document.getElementById("name").innerHTML += elt.preiseGramEuro + "<br>";
  document.getElementById("name").innerHTML += "<br>";
});

//lev2_2
const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

// singers.sort();
// console.log(singers);

// for (let i = 0; i < singers.length; i++) {
//   let albumInfo = Object.values(singers[i]);
//   console.log(albumInfo);
//   albumInfo.sort();
// }

// sort by value
// singers.sort(function (a, b) {
//     return a.value - b.value;
//   });

// sort by name
singers.sort(function (a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
console.log(singers);
