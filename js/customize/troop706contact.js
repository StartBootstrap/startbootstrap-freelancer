//
//  Troop 706 validate data sent from website form (sign ups)
//
//  This jquery script is used to orchestrate invocation of server side troop706contact.php script, capture results and return results to webpage
//
//    1) When the form with the #contact-form id is submitted, we make the POST request to the contact.php script.
//    1.1) input type="submit"
//    2) a JSON reponse object that is returned from the PHP script. The object has two properties - type and message
//    3) We use type and message to construct the message visible for the user - in case of error we display alert-danger, in case of success we display alert-success
//    4) We display the message, reset form inputs and return false; to prevent the form submitting
//

function submitContactForm() //program entry point
{
	
		console.log( "submitContactForm invoked" ); //send to browser console log	
    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    //console.log("here we are inside jquery script");

		//trigger client side validation - see tags inside 	(form id="contact-form"...) tag that enforce validation
    //$('#contact-form').validator(); //run java script validator() method on input fields inside of "form"


    // // when the form is submitted using type=submit
    // $('#contact-form').on('submit', function (e) )
    // {
// 
        // // when html "contact-form" "submit" is pressed, method "preventDefault() will tell form not to invoke action="./php/troop706contact.php"
        // if (!e.isDefaultPrevented()) 
        // {
            var url = "./php/troop706contact.php";

						// this ajax step calls the server side php script and then checks results
            // POST values in the background the the php script 
            $.ajax(
				            	{
				                type: "POST",
				                url: url,
				                data: $(this).serialize(),
				                success: function (data)
				                {
				                    // data = JSON object that php returns
				
				                    // we recieve the type of the message: success x danger and apply it to the 
				                    var messageAlert = 'alert-' + data.type;
				                    var messageText = data.message;
				                    console.log("messageAlert:"+messageAlert);
				                    console.log("messageText:"+messageText);
				
				                    // let's compose Bootstrap alert box HTML
				                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
				                    
				                    // If we have messageAlert and messageText
				                    if (messageAlert && messageText) 
				                    {
				                    	
				                        // inject the alert to .messages div in our form
				                        $('#contact-form').find('.messages').html(alertBox);
				                        
				                        // empty the form
				                        $('#contact-form')[0].reset();
				                    }
				                }
				            }
            );
            return false;
    //}
  } 