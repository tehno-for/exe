<?php

$files = scandir('data');

foreach($files as $v){
    echo '<ul>';
    echo '<li>';
    echo $v;
    echo '</li>';
    echo '</ul>';
}