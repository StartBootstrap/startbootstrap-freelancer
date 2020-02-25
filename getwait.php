<?php
	$connection = mysql_connect("localhost", "id12691287_oaklandcantwait", "oaklandcantwait1!");
	$db = mysql_select_db("id12691287_wait_data", $connection);
	
	$restaurant=$_GET['r'];
	//$restaurant="roots";
	
	$beginOfDayTime = strtotime("today", time());
	

	$query = mysql_query("SELECT * FROM wait_data WHERE submit_time > $beginOfDayTime AND restaurant = \"$restaurant\"");
	if($query){
		
		$waitCount = 0;
		$waitSum = 0;
		
		while($row = mysql_fetch_assoc($query)){
			
			//echo "<br><br>NEW ROW<br>";
			//echo "Wait Time: ".$row['wait_time']."<br>";
			
			$timeDiff = time() - $row["submit_time"];
			$perPersonWaitTime = $row['wait_time'] / $row['num_people_front'];
			$numPeopleInLine = 1 + $row['num_people_front'] + $row["num_people_behind"];
			$numPeopleProcessed = $timeDiff / (60 * $row['wait_time']);
			
			//echo "Time Diff: ".$timeDiff."<br>";
			//echo "perPersonWaitTime: ".$perPersonWaitTime."<br>";
			//echo "numPeopleInLine: ".$numPeopleInLine."<br>";
			//echo "numPeopleProcessed: ".$numPeopleProcessed."<br>";
			
			if ($numPeopleProcessed < $numPeopleInLine){
				
				$waitCount = $waitCount + 1;
				$waitSum = $waitSum + (($numPeopleInLine - $numPeopleProcessed) * $perPersonWaitTime);
				
			}
		}
		
		//echo "<br>";
		
		//echo "Wait Count: ".$waitCount."<br>";
		//echo "Wait Sum: ".$waitSum."<br>";
		
		
		if ($waitCount == 0 || $waitSum == 0){
			echo "No data returned for the current time";
		} else {
			$finalWaitTime = $waitSum / $waitCount;
			echo "Estimated wait time: ".round($finalWaitTime)." minutes";
		}
		
		
	} else {
		echo "There was an error processing your request, please try again.";
	}

	mysql_close($connection);
?>