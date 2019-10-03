<?php
/*
 *  Contact Form - Accepts data entered from Troop706 website (html-form) and sends email(s)
 *  
 * Pre-requisites:
 * PHP scripts only run on an application server. 
 * XAMPP application server can be excuted on Windows 10 for testing this script.
 * 
 * The application server must be configured to execute PHP scripts.
 * The application server must be configured to send emails.
 * . email service can be commented out for testing
 */
 
//phpinfo(); //spits out php version information and php server configuration
//exit();

$php_static_from = 'Troop706 Contact Form <mjkrueger@yahoo.com>';

$php_static_sendTo = 'mjkrueger@yahoo.com'; // an email address that will receive the email with the output of the form

$okMessage = 'Contact form successfully submitted. Troop706 will get back to you soon!'; // message that will be displayed on website when everything is OK

$errorMessage = 'There was an error while submitting the contact form. Please try again later or contact Website administrator'; // message that will be displayed on website if something goes wrong

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
//report runtime errors, compile errors are not reported here, this can be set in php.ini file also
error_reporting(E_ALL & ~E_NOTICE);
ini_set("display_errors", "On");
error_reporting(0); //detailed SMTP mail() service errors are posted if debug is enabled, comment out this line to enable

/*
 *  SENDING EMAIL
*/

//you can uncomment echo commands if you want to see variables assignment in web browser
//echo returns these fields back to calling program - so they need to be commented out when not debugging code
//echo ' name is:' 						.			$_POST['name'] 	; 	//note, variable names, they are not form_xxxx 
//echo ' surname is:' 				.			$_POST['surname'] 	; 

//foreach ($_POST as $key => $value) {
//        echo "<br>";
//	
//        echo "content of _POST key: $key" . " value:" . $value; //display each name value pair passed into script 
//	
//				echo "</br>";
//    }


try //wrap this in a try block to catch any Exceptions
{
	
	//check mandatory fields are passed from contact form
	if (!isset($_POST['name'])  )
	{
		throw new Exception('Form is is missing mandatory field  "name"');
	}
		if (!isset($_POST['lastname'])  )
	{
		throw new Exception('Form is is missing mandatory field "lastname"');
	}
		if (!isset($_POST['email'])  )
	{
		throw new Exception('Form is is missing mandatory field "email"');
	}
		if (!isset($_POST['need'])  )
	{
		throw new Exception('Form is is missing mandatory field "need"');
	}
			if (!isset($_POST['message'])  )
	{
		throw new Exception('Form is is missing mandatory field "message"');
	}
	
	//create variables, fields entered on html contact form arrive in an array called _POST (underscore POST)
	$php_firstname = 	$_POST['name'];
	$php_surname = 		$_POST['lastname'];
	$php_fromEmail = 	$_POST['email'];
	$php_subject = 		$_POST['need'];
	$php_emailText =	$_POST['message']; // HINT: use preg_replace() to filter the data

  // headers for the email.
	$headers = "From: $php_fromEmail\n";
	$headers .= "MIME-Version: 1.0\n"; //notice the period concatenates this field
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
    
  // Send email
	$success = mail($php_static_sendTo, $php_subject, $php_emailText, $headers);
	
	//$success=true; //note, you cant call mail() method when service is not running, it clogs up the works returning unexpected error info to caller when service is in debug mode see error_reporting(0)
	if ($success) 
	{
		$responseArray = array(	"type" => "success", "message" => $okMessage ); //array variable returned to AJAX caller
		$rc = "success";
	}
	else {
  	    $responseArray = array(	"type" => "danger", "message" => $errorMessage ); //array variable returned to AJAX caller
  	    $rc = "danger";
	}
}
catch (Exception $e)
{    
    $responseArray = array(	"type" => "error","message" => $e ); //array variable indicating error, returned to AJAX caller   
    $rc = "error";
}

//PROBLEMS parsing json response, lets return success and error for now
//return json structure to caller (java script/jquery)
//$encoded = json_encode($responseArray);
//header('Content-Type: application/json');
//echo $encoded; //this returns results to caller, make sure you dont have other echo commands enabled in this script or it will fail    



echo $rc;

//============================================
//this function wasnt helpful for me but leaving it here in case its use becomes apparent later
function debug_to_console( $data ) {
    $output = $data;
    if ( is_array( $output ) )
        $output = implode( ',', $output);

    echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
}

//close php file
?>
