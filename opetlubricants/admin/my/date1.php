<?php
echo "hi".'<br>';
$date1 = new DateTime();
$date2 = new DateTime();
$date3 = new DateTime();

$gmt1 = new DateTimeZone('Europe/London');
$gmt2 = new DateTimeZone('Asia/Baku');
$gmt3 = new DateTimeZone('America/Los_Angeles');



$date2->setTimezone($gmt1);
$date1->setTimezone($gmt2);
$date3->setTimezone($gmt3);

echo $date1->format('g:ia, l, F j, Y').'<br>';
echo $date2->format('g:ia, l, F j, Y').'<br>'; 
echo $date3->format('g:ia, l, F j, Y').'<br>'; 