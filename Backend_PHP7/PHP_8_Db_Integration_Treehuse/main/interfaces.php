<?php
interface A
{
    const B = 'Interface constant';
}

// Prints: Interface constant
echo A::B.'<br>';


// This will however not work because it's not allowed to 
// override constants.
class B implements A
 {
   const B = 'Class constant';
 }



?>