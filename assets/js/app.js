fetch("https://api-football-v1.p.rapidapi.com/leagues/league/2790", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "cd9e713103mshfc454d2de6c9196p1b64c3jsn12e73827eb98",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response.json());
})
.catch(err => {
	console.error(err);
});