<?php

class Clock {
	public const DAY_IN_SECONDS = 60*60*24;
	
	public function tomorrow() {
		return time()+ self::DAY_IN_SECONDS;
	}
	public $m = 1;
}

echo Clock::DAY_IN_SECONDS.'<br>';
echo Clock::tomorrow().'<br>';

$clock = new Clock;

echo $clock->tomorrow()."<br>";
// echo Clock::$m;



?>