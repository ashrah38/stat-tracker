const leagueStandings = document.getElementsByClassName('teams');
console.log(leagueStandings);


function populateTable(data) {
    let numTeams = data.api.results;
    leagueStandings.forEach(entry => {
        entry.innerHTML = `
            <h3 class="entry table-rank">${data}</h3>
            <h3 class="entry table-club">${data}</h3>
            <h3 class="entry table-played">${data}</h3>
            <h3 class="entry table-won">${data}</h3>
            <h3 class="entry table-draw">${data}</h3>
            <h3 class="entry table-lost">${data}</h3>
            <h3 class="entry table-for">${data}</h3>
            <h3 class="entry table-against">${data}</h3>
            <h3 class="entry table-diff">${data}</h3>
            <h3 class="entry table-pts">${data}</h3>
        `
    })
}

function getStandings(){
    fetch("https://api-football-v1.p.rapidapi.com/leagueTable/2790", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "cd9e713103mshfc454d2de6c9196p1b64c3jsn12e73827eb98",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.error(err);
    });
}

getStandings();

function testOne(data){
    console.log(data)
}

testOne(getStandings());