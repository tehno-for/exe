<?php

function readFolderFile($dir){
    $files = scandir($dir);
    echo '<ul>'; 
    foreach($files as $v){
        if(substr($v, 0, 1) != '.'){
            echo '<li>';
            if(is_dir($dir.'/'.$v)){
                echo $v;
                readFolderFile($dir . '/' . $v);
            } else {
                echo '<a href="'.$dir . '/' . $v . '" >'.$v.'</a>';
            }            
            echo '</li>';
                  
        }
    } 
    echo '</ul>';
}

readFolderFile('data');