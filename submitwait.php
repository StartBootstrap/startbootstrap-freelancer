<?php
	$connection = mysql_connect("localhost", "id12691287_oaklandcantwait", "oaklandcantwait1!");
	$db = mysql_select_db("id12691287_wait_data", $connection);
	
	$submitTime = $_POST['submitTime'];
	$restaurant = $_POST['restaurant'];
	$waitTime = $_POST['waitTime'];
	$numPeopleFront = $_POST['numPeopleFront'];
	$numPeopleBehind = $_POST['numPeopleBehind'];

	$query = mysql_query("insert into wait_data(submit_time, restaurant, wait_time, num_people_front, num_people_behind) values ('$submitTime','$restaurant','$waitTime','$numPeopleFront', '$numPeopleBehind')");
	if($query){
		echo "Thank you for your submission";
	} else {
		echo "There was an error processing your request, please try again.";
	}

	mysql_close($connection);
?>