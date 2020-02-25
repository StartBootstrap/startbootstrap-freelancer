$(document).ready(function() {
	$("#submit").click(function() {
		
		var submitTime = $("#submitTimeField").val();
		var restaurant = $("#restaurantField").val();
		var waitTime = $("#waitTimeField").val();
		var numPeopleFront = $("#frontPeopleField").val();
		var numPeopleBehind = $("#behindPeopleField").val();
		
		if (waitTime <= 90 && numPeopleFront <= 30 && numPeopleBehind <= 30 && waitTime >= 0 && numPeopleFront >= 0 && numPeopleBehind >= 0){
			
			if (submitTime === '' || restaurant === '' || waitTime === '' || numPeopleFront === '' || numPeopleBehind === '') {
				alert("Please fill out every field!");
			} else {
				
				$.post("submitwait.php", { submitTime: submitTime, restaurant: restaurant, waitTime: waitTime, numPeopleFront: numPeopleFront,  numPeopleBehind: numPeopleBehind}, function(data) {
					
					//alert(data);
					$('#form')[0].reset();
						
					document.getElementById("submitResultDisplay").innerHTML = data;
					document.getElementById("form").style = "display: none";
				});
			}
		} else{
			document.getElementById("submitResultDisplay").innerHTML = "Error: Your wait time must be between 0 and 90 minutes. The number of people in front and behind you of you must be between 0 and 30.";
		}
	});
});

function setFormTimeField(){
	
	var unix = Math.round(+new Date()/1000);
	
	var timeField = document.getElementById("submitTimeField");
	
	timeField.value = unix;
}