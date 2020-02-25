<?php
	$connection = mysql_connect("localhost", "id12691287_oaklandcantwait", "oaklandcantwait1!");
	$db = mysql_select_db("id12691287_wait_data", $connection);
	
	$restaurant=$_GET['r'];
	
	$beginOfDayTime = strtotime("today", time());

	$query = mysql_query("SELECT * FROM wait_data WHERE submit_time > $beginOfDayTime AND restaurant = \"$restaurant\"");
	if($query){
		
		$waitCount = 0;
		$waitSum = 0;
		
		while($row = mysql_fetch_assoc($query)){
			
			$timeDiff = time() - $row["submit_time"];
			$perPersonWaitTime = $row['wait_time'] / $row['num_people_front'];
			$numPeopleInLine = 1 + $row['num_people_front'] + $row["num_people_behind"];
			$numPeopleProcessed = $timeDiff / (60 * $row['wait_time']);
			
			if ($numPeopleProcessed < $numPeopleInLine){
				$waitCount = $waitCount + 1;
				$waitSum = $waitSum + (($numPeopleInLine - $numPeopleProcessed) * $perPersonWaitTime);
			}
		}
		
		if ($waitCount == 0 || $waitSum == 0){
			echo "Sorry, but there was no data returned for the current time";
		} else {
			$finalWaitTime = $waitSum / $waitCount;
			echo "Estimated wait time: ".round($finalWaitTime)." minutes";
		}
	} else {
		echo "There was an error processing your request, please try again.";
	}

	mysql_close($connection);
?>