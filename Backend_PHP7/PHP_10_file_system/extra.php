<?php
echo substr('vtpds', -3, 1).'<br>'; //p
echo substr('vtpdsmt', 2, 2).'<br>'; //pd

//---------------------------- polindrome -----------------

function isPalindrome($x) {
    $m = 0;
    switch($x){
        case $x<=11:
        echo $x . " is not a polindrome!";
        exit;
        default:
        if(strlen($x)% 2 == 0){
            
        }
        echo $x . " is a polindrome!";

    }
     
}
isPalindrome(121);