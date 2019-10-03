/*
 * Java Script code to call server side php script passing in contact form variables
 */

/********************** NOT USED COMMENTED OUT *******************************************
function submitEmailForm()
{
	
	console.log( "submitEmailForm invoked" ); //send to browser console log
	// e.preventDefault(); //stop default behaviour of html post request opening up new window with php file name
	
	("emailButton").disabled = true; //disable button after user selects
	("status").innerHTML = 'please wait ...';
	
	var fn = document.getElementById("form_name").value;
	console.log( "submitEmailForm invoked for name:" + fn); //send to browser console log
	
	var email_formdata = new FormData();
	email_formdata.set( "name", 				document.getElementById("form_name").value );
	email_formdata.set( "lastname", 		document.getElementById("form_lastname").value );
	email_formdata.set( "email", 				document.getElementById("form_email").value );
	email_formdata.set( "message", 			document.getElementById("form_message").value );
	email_formdata.set( "need", 				document.getElementById("form_need").value );
	
	var ajax = new XMLHttpRequest();
	
	//initialize request with POST, php script
	ajax.open( "POST", "././php/troop706contact.php", true ); //php email script asynchronous
	

	
	ajax.onload = function() //event that fires php script executes on server and returns results
	{
				
			//var jsonEmailResponseObj = this.responseText;
			var rc = this.responseText;
			console.log( "rc:" + rc ); //send to browser console log
			if(rc == "danger")
			{
								//("status").innerHTML = "danger - come back later.";
								document.getElementById('status').innerHTML = "danger - come back later";
								//("status").disabled = false;
			} else {
				//("status").innerHTML = "There was a problem - come back later.";
				//("status").disabled = false;
				document.getElementById('status').innerHTML = "error - come back later";
			}
			
			
	
	}
	
	ajax.onerror = function() //event that excutes when php script has critical failure
	{
		//add logic for error
		console.log("fatal php error");
	}
	
	ajax.send( email_formdata ); //send the request to PHP now
	document.getElementById("status").innerHTML = "processing...";
}

 */