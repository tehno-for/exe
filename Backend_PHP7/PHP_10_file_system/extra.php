<?php
echo substr('vtpds', -3, 1).'<br>'; //p
echo substr('vtpdsmt', 2, 2).'<br>'; //pd

//---------------------------- polindrome -----------------
function isPol($x) {
    $d = strlen($x)-strlen($x)% 2;
    for($i=0; $i<$d; $i++)
        if(substr($x, $i, 1) !== substr($x, gmp_neg($i+1), 1)){
            echo $x . " is not a polindrome!";
        }
    }
}


function isPalindrome($x) {
    $m = 0;
    switch($x){
        case $x<=11:
        echo $x . " is not a polindrome!";
        exit;
        default:
        function 
        if(strlen($x)% 2 == 0){
            
        }
        echo $x . " is a polindrome!";

    }
     
}
isPalindrome(121);