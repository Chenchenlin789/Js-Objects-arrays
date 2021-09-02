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

const tableContainer = document.getElementById("table-container");
const searchSinger = document.getElementById("search-singer");

function showSingers(singers) {
  tableContainer.innerHTML = "";
  tableContainer.innerHTML += `
        <tr>
            <th onclick="sortSingersBy('name')">Name</th>
            <th onclick="sortSingersBy('country')">Country</th>
            <th>Periode active</th>
            <th onclick="sortSingersBy('genre')">genre</th>
        </tr>`;
  singers.forEach((element) => {
    tableContainer.innerHTML += `
        <tr>
            <td>${element.name}</td>
            <td>${element.country}</td>
            <td>${element.period_active.start} - ${element.period_active.end}</td>
            <td>${element.genre}</td>
        </tr>`;
  });
}
showSingers(singers);

// sortSingersBy('name')
function sortSingersBy(x) {
  let newSingers = singers.sort((a, b) => {
    if (a[x] > b[x]) return 1;
    if (a[x] < b[x]) return -1;
    return 0;
  });
  showSingers(newSingers);
}
