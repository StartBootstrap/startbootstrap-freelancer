/*
 * Java Script code to call server side php script passing in contact form variables
 */
function submitEmailForm()
{
	console.log( "submitEmailForm invoked" ); //send to browser console log
	
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
	
	console.log( "email_formdata:" + email_formdata ); //send to browser console log
	
	ajax.onreadystatechange = function() //event that fires when state changes
	{
		if(ajax.readyState == 4 && ajax.status == 200) //4=loaded, response=OK
		{			
			console.log('jsonEmailResponseObj:' + ajax.responseText);
			try{
					var jsonEmailResponseObj = JSON.parse(ajax.responseText);
					  //var jsonEmailResponseObj = ajax.responseText;
						var type = jsonEmailResponseObj.type; //success, error or danger
						var msg = jsonEmailResponseObj.message; //response message
			} catch (ex)
			{
				console.log("error processing json response:" + ajax.responseText + " ex:"+ ex);
        //return;
			}

console.log("type:" + type);
			if(type == "success")
			{
				("contact-form").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
			} else {
				("status").innerHTML = msg;
				("status").disabled = false;
			}
		}
	}
	ajax.send( email_formdata ); //send the request to PHP now
	document.getElementById("status").innerHTML = "processing...";
}