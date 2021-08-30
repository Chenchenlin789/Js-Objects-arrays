//lev1_2
let person = {
  firstName: "Chen lin",
  age: 31,
};

function sagNameAlter() {
  alert(person.firstName + " is " + person.age);
}
console.log(person.firstName);
console.log(person.age);
console.log(sagNameAlter);

//lev1_4
let unsereHaustiere = [
  {
    tiertyp: "Katze",
    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);

unsereHaustiere[1].names = ["Balu", "Tilly", "Ruby"];
console.log(unsereHaustiere[1].names);

//lev1_5
let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

//lev1_6
let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },

  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },

  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },

  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

console.log(myMusic[0].artist);
console.log(`von ${myMusic[1].artist}: "${myMusic[1].medium[3]}"`);
console.log(`von ${myMusic[1].artist}: ${myMusic[1].gold}`);
console.log(`${myMusic[2].release_year} und ${myMusic[3].release_year}`);
console.log(`von ${myMusic[3].artist}: "${myMusic[3].medium[2]}"`);
console.log(myMusic[3].medium[2]);
console.log(myMusic[3].title.slice(17, 21));
console.log(myMusic[2].title.slice(13, 15));
console.log(myMusic[1].artist.slice(5, 10));

//lev1_7
for (let i = 0; i < myMusic.length; i++) {
  let albumInfo = Object.values(myMusic[i]);

  albumInfo.splice(2, 1);
  albumInfo.pop();

  for (let j = 0; j < albumInfo.length; j++) {
    console.log(albumInfo[j]);
    document.body.innerHTML += albumInfo[j] + "<br>";
  }
  document.body.innerHTML += "<br>";
}

//bonus
let old = myMusic.filter((elt) => elt.release_year < 1975);
old.forEach((elt) => {
  document.body.innerHTML += elt.artist + "<br>";
  document.body.innerHTML += elt.title + "<br>";
  document.body.innerHTML += elt.release_year + "<br>";
  document.body.innerHTML += "<br>";
});

//lev1_8
let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];

studentData.forEach((elt) => {
  document.body.innerHTML += elt.name + "<br>";
  document.body.innerHTML += elt.coop + "<br>";
  document.body.innerHTML += elt.address.city + "<br>";
  document.body.innerHTML += elt.emails + "<br>";
  document.body.innerHTML += "<br>";
});
