$.ajaxSetup({
  headers : {
    'X-Auth-Token' : '569771c37d684195853778124ab853fc'
  }
});

//matches
$.getJSON(
link, 
function(data) { 
	console.log(data); 
	
	function date(utcDate){
		var date = new Date(utcDate);
		var options = {year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric"};
		return date.toLocaleString("fr-FR", options)
	}
	
	function getfeedbacklike(x) {
		// L'URL du fichier dans lequel tu appelles ta fonction
		var url = 'getfeedbacklike.php';
		$.post(url, { id: x }, function(data){
			// Tu affiches le contenu dans ta div
			$('#'+x+"like").html(data);
		});
	};
	
	function getfeedbackdislike(x) {
		// L'URL du fichier dans lequel tu appelles ta fonction
		var url = 'getfeedbackdislike.php';
		$.post(url, { id: x }, function(data){
			// Tu affiches le contenu dans ta div
			$('#'+x+"dislike").html(data);
		});
	};
	
	document.getElementById("app").innerHTML = `
	${data.matches.map(function(matchlist){
		return `
				<div class="search container card success-color mt-4 matches">
					<div class="row ml-1">
						<p class="text-white mt-3 col-5">${date(matchlist.utcDate)}</p>
						<div class="col-5"></div>
						<div class="mt-3 col">
							<i id="${matchlist.id}like" class="text-white">${getfeedbacklike(matchlist.id)}</i><i class="fa fa-thumbs-up ml-2" style="font-size:20px;color:blue;"></i>
							<i id="${matchlist.id}dislike" class="text-white ml-2">${getfeedbackdislike(matchlist.id)}</i><i class="fa fa-thumbs-down ml-2" style="font-size:20px;color:red;"></i>
						</div>
					</div>
					<div class="card-body white mb-2 rounded">
						<img src="images/fire.png" class="mr-2" width="30" alt="Responsive image"/><b><a>${matchlist.homeTeam.name} - ${matchlist.awayTeam.name}</a></b>
						<button id="${matchlist.id}" onClick="sendidmatch(this.id, ${matchlist.odds.awayWin}, ${matchlist.odds.draw}, ${matchlist.odds.homeWin}, '${matchlist.awayTeam.name}', '${matchlist.homeTeam.name}')" type="button" class="btn btn-circle btn-md success-color-dark float-right"><span class="text-white fa fa-caret-right"  style="font-size:30px;"></span></button>
						<br>
						<br>
						<button type="button" class="btn btn-success">${matchlist.odds.homeWin}</button>
						<button type="button" class="btn btn-warning">${matchlist.odds.draw}</button>
						<button type="button" class="btn btn-success">${matchlist.odds.awayWin}</button>
					</div>
				</div>
				`
	}).join("")}
	`
});

//PLteam
$.getJSON(
'http://api.football-data.org/v2/competitions/PL/teams', 
function(PLteam) { 
	console.log(PLteam); 
	
	document.getElementById("PLteam").innerHTML = `
	${PLteam.teams.map(function(PLteamlist){
		return `
				<div class="dropdown-item form-check">
					<input class="form-check-input" type="checkbox" value="${PLteamlist.id}" id="${PLteamlist.id}" name="PLteam" data-content="${PLteamlist.name}">
					<label class="form-check-label" for="${PLteamlist.id}"><span class="col text-center">${PLteamlist.name}</span></label>
				</div>
				`
	}).join("")}
	`
});

//FL1team
$.getJSON(
'http://api.football-data.org/v2/competitions/FL1/teams', 
function(FL1team) { 
	console.log(FL1team); 
	
	document.getElementById("FL1team").innerHTML = `
	${FL1team.teams.map(function(FL1teamlist){
		return `
				<div class="dropdown-item form-check">
					<input class="form-check-input" type="checkbox" value="${FL1teamlist.id}" id="${FL1teamlist.id}" name="FL1team" data-content="${FL1teamlist.name}">
					<label class="form-check-label" for="${FL1teamlist.id}"><span class="col text-center">${FL1teamlist.name}</span></label>
				</div>
				`
	}).join("")}
	`
});

//BL1team
$.getJSON(
'http://api.football-data.org/v2/competitions/BL1/teams', 
function(BL1team) { 
	console.log(BL1team); 
	
	document.getElementById("BL1team").innerHTML = `
	${BL1team.teams.map(function(BL1teamlist){
		return `
				<div class="dropdown-item form-check">
					<input class="form-check-input" type="checkbox" value="${BL1teamlist.id}" id="${BL1teamlist.id}" name="BL1team" data-content="${BL1teamlist.name}">
					<label class="form-check-label" for="${BL1teamlist.id}"><span class="col text-center">${BL1teamlist.name}</span></label>
				</div>
				`
	}).join("")}
	`
});

//SAteam
$.getJSON(
'http://api.football-data.org/v2/competitions/SA/teams', 
function(SAteam) { 
	console.log(SAteam); 
	
	document.getElementById("SAteam").innerHTML = `
	${SAteam.teams.map(function(SAteamlist){
		return `
				<div class="dropdown-item form-check">
					<input class="form-check-input" type="checkbox" value="${SAteamlist.id}" id="${SAteamlist.id}" name="SAteam" data-content="${SAteamlist.name}">
					<label class="form-check-label" for="${SAteamlist.id}"><span class="col text-center">${SAteamlist.name}</span></label>
				</div>
				`
	}).join("")}
	`
});

//PPLteam
$.getJSON(
'http://api.football-data.org/v2/competitions/PPL/teams', 
function(PPLteam) { 
	console.log(PPLteam); 
	
	document.getElementById("PPLteam").innerHTML = `
	${PPLteam.teams.map(function(PPLteamlist){
		return `
				<div class="dropdown-item form-check">
					<input class="form-check-input" type="checkbox" value="${PPLteamlist.id}" id="${PPLteamlist.id}" name="PPLteam" data-content="${PPLteamlist.name}">
					<label class="form-check-label" for="${PPLteamlist.id}"><span class="col text-center">${PPLteamlist.name}</span></label>
				</div>
				`
	}).join("")}
	`
});

//PDteam
$.getJSON(
'http://api.football-data.org/v2/competitions/PD/teams', 
function(PDteam) { 
	console.log(PDteam); 
	
	document.getElementById("PDteam").innerHTML = `
	${PDteam.teams.map(function(PDteamlist){
		return `
				<div class="dropdown-item form-check">
					<input class="form-check-input" type="checkbox" value="${PDteamlist.id}" id="${PDteamlist.id}" name="PDteam" data-content="${PDteamlist.name}">
					<label class="form-check-label" for="${PDteamlist.id}"><span class="col text-center">${PDteamlist.name}</span></label>
				</div>
				`
	}).join("")}
	`
});