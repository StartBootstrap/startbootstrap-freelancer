

function getRootsData(){
	var resultText = document.getElementById("rootsResultText");
	
	$.get("getwait.php", {"r": "roots"}, function(data) {
		resultText.innerHTML = data;
	});
}

function getChicfilaData(){
	var resultText = document.getElementById("chicfilaResultText");
	
	$.get("getwait.php", {"r": "chicfila"}, function(data) {
		resultText.innerHTML = data;
	});
}

function getChipotleData(){
	var resultText = document.getElementById("chipotleResultText");
	
	$.get("getwait.php", {"r": "chipotle"}, function(data) {
		resultText.innerHTML = data;
	});
}

function getHelloBistroData(){
	var resultText = document.getElementById("helloBistroResultText");
	
	$.get("getwait.php", {"r": "hellobistro"}, function(data) {
		resultText.innerHTML = data;
	});
}

function getMcDonaldsData(){
	var resultText = document.getElementById("mcdonaldsResultText");
	
	$.get("getwait.php", {"r": "mcdonalds"}, function(data) {
		resultText.innerHTML = data;
	});
}

function getPiadaData(){
	var resultText = document.getElementById("piadaResultText");
	
	$.get("getwait.php", {"r": "piada"}, function(data) {
		resultText.innerHTML = data;
	});
}