const leagueStandings = document.querySelector('.table-container');

function getStandings() {
    fetch("https://api-football-v1.p.rapidapi.com/leagueTable/2790", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "cd9e713103mshfc454d2de6c9196p1b64c3jsn12e73827eb98",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
    })
        .then(response => {
            response.json().then((data) => {
                let standings = data.api.standings;
                console.log(data.api.standings);
                standings.forEach((entry) => {
                    entry.forEach((team) => {
                        leagueStandings.innerHTML += `
                        <div class="teams">
                        <h3 class="entry table-rank">${team.rank}</h3>
                        <h3 class="entry table-club">${team.teamName}</h3>
                        <h3 class="entry table-played">${team.matchsPlayed}</h3>
                        <h3 class="entry table-won">${team.win}</h3>
                        <h3 class="entry table-draw">${team.draw}</h3>
                        <h3 class="entry table-lost">${team.lose}</h3>
                        <h3 class="entry table-for">${team.goalsFor}</h3>
                        <h3 class="entry table-against">${team.goalsAgainst}</h3>
                        <h3 class="entry table-diff">${team.goalsDiff}</h3>
                        <h3 class="entry table-pts">${team.points}</h3>
                        </div>
                    `;
                        console.log(leagueStandings.clientHeight);
                    })
                })
            });
        })
        .catch(err => {
            console.error(err);
        });
}


getStandings();