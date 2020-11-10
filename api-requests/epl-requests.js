const unirest = require('unirest');

function eplStandings() {
    const leagueTableURL = "https://api-football-v1.p.rapidapi.com/leagueTable/2790";
    const leagueTableRequest = unirest("GET", leagueTableURL);
    let standingsHTML = `
    <div class="table-heading">
                        <h3 class="entry table-rank">#</h3>
                        <h3 class="entry table-club">Club</h3>
                        <h3 class="entry table-played">P</h3>
                        <h3 class="entry table-won">W</h3>
                        <h3 class="entry table-draw">D</h3>
                        <h3 class="entry table-lost">L</h3>
                        <h3 class="entry table-for">GF</h3>
                        <h3 class="entry table-against">GA</h3>
                        <h3 class="entry table-diff">GD</h3>
                        <h3 class="entry table-pts">Pts</h3>
                    </div>
    `;
    leagueTableRequest.headers({
        "x-rapidapi-key": "cd9e713103mshfc454d2de6c9196p1b64c3jsn12e73827eb98",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "useQueryString": true
    });


    leagueTableRequest.end(function (result) {
        if (result.error) throw new Error(result.error);
        let standingsArray = result.body.api.standings;
        let i = 0;
        standingsArray.forEach((entry) => {
            entry.forEach((team) => {
                let html = `
                <div class="teams">
                        <h3 class="entry table-rank">${team.rank}</h3>
                        <h3 class="entry table-club">${team.teamName}</h3>
                        <h3 class="entry table-played">${team.matchesPlayed}</h3>
                        <h3 class="entry table-won">${team.win}</h3>
                        <h3 class="entry table-draw">${team.draw}</h3>
                        <h3 class="entry table-lost">${team.lose}</h3>
                        <h3 class="entry table-for">${team.goalsFor}</h3>
                        <h3 class="entry table-against">${team.goalsAgainst}</h3>
                        <h3 class="entry table-diff">${team.goalsDiff}</h3>
                        <h3 class="entry table-pts">${team.points}</h3>
                    </div>
                `;
                standingsHTML += html;
            })
        });
    });

}

module.exports = eplStandings;