const leagueStandings = document.querySelector('.table-container');
const topScorers = document.querySelector('.goals');
const pastSchedule = document.querySelector('.past');
const futureSchedule = document.querySelector('.future');


function getStandings() {
    fetch("https://api-football-v1.p.rapidapi.com/leagueTable/2833", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "cd9e713103mshfc454d2de6c9196p1b64c3jsn12e73827eb98",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
    })
        .then(response => {
            response.json().then((data) => {
                let standings = data.api.standings;
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
                    })
                })
            });
        })
        .catch(err => {
            console.error(err);
        });
}

function getFutureSchedule() {
    fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2833/next/35?timezone=Europe/London", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "cd9e713103mshfc454d2de6c9196p1b64c3jsn12e73827eb98",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
    })
        .then(response => {
            response.json().then((data) => {
                let fixtures = data.api.fixtures;
                console.log(fixtures);
                fixtures.forEach((entry) => {
                    futureSchedule.innerHTML += `
                    <div class="schedule-entry">
                        <h3 class="team-one">${entry.homeTeam.team_name}</h3>
                        <div class="team-logo">
                            <img class="small-logo" src="${entry.homeTeam.logo}" alt="">
                        </div>
                        <h3 class="time">${entry.event_date.slice(5, 10)} / ${entry.event_date.slice(11, 16)}</h3>
                        <div class="team-logo">
                            <img class="small-logo" src="${entry.awayTeam.logo}" alt="">
                        </div>
                        <h3 class="team-two">${entry.awayTeam.team_name}</h3>
                    </div>
                    `;
                })
            });
        })
        .catch(err => {
            console.error(err);
        });
}

function getPastSchedule() {
    fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2833/last/35?timezone=Europe/London", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "cd9e713103mshfc454d2de6c9196p1b64c3jsn12e73827eb98",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
    })
        .then(response => {
            response.json().then((data) => {
                let fixtures = data.api.fixtures;
                console.log(fixtures);
                fixtures.forEach((entry) => {
                    pastSchedule.innerHTML += `
                    <div class="schedule-entry">
                        <h3 class="team-one">${entry.homeTeam.team_name}</h3>
                        <div class="team-logo">
                            <img class="small-logo" src="${entry.homeTeam.logo}" alt="">
                        </div>
                        <h3 class="result">${entry.score.fulltime}</h3>
                        <div class="team-logo">
                            <img class="small-logo" src="${entry.awayTeam.logo}" alt="">
                        </div>
                        <h3 class="team-two">${entry.awayTeam.team_name}</h3>
                    </div>
                    `;
                })
            });
        })
        .catch(err => {
            console.error(err);
        });
}

function getTopScores() {
    fetch("https://api-football-v1.p.rapidapi.com/v2/topscorers/2833", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "cd9e713103mshfc454d2de6c9196p1b64c3jsn12e73827eb98",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
    })
        .then(response => {
            response.json().then((data) => {
                let scorers = data.api.topscorers;
                scorers.forEach((player) => {
                    topScorers.innerHTML += `
                        <div class="stat-entry">
                            <h3 class="top-scorer-name">${player.player_name}</h3>
                            <div class="tags">
                            <h3 class="top-scorer-tags">${player.games.appearences}</h3>
                            <h3 class="top-scorer-tags">${player.games.minutes_played}</h3>
                            <h3 class="top-scorer-tags">${player.goals.total}</h3>
                            </div>
                        </div>
                    `;

                })
            });
        })
        .catch(err => {
            console.error(err);
        });
}


getStandings();
getTopScores();
getFutureSchedule();
getPastSchedule();