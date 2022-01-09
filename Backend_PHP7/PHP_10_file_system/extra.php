<?php

//echo substr('vtpds', -3, 1).'<br>'; //p
//echo substr('vtpdsmt', 2, 2).'<br>'; //pd
//echo substr('0123456', -1, 1).'<br>'; //pd
//echo substr('0123456', 0, 1).'<br>'; //pd


//---------------------------- polindrome -----------------
function isPol($x) {
    $d = (strlen($x)-strlen($x)% 2)/2;
    $status = false;
    for($i=0; $i<$d; $i++){
        $a = number_format(substr(strval($x), $i, 1));
        $b = number_format(substr(strval($x), -$i-1, 1));
        //echo $a . $b."<br>";
        if($a !== $b){
            
            $status = false;
            break;
        } else {
            $status = true;
        }
    } 
    return $status;
}


function isPalindrome($x) {
    $m = 0;
    switch($x){
        case $x<=11:
        return false;
        exit;
        default:
        
        echo isPol($x);
        }
     
}
isPalindrome(12);
