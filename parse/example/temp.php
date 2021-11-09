<?php
// example of how to modify HTML contents
include('../simple_html_dom.php');

// get DOM from URL or file
$html = file_get_html('https://furnitura.az/index.php?id_product=65&id_product_attribute=0&rewrite=pvc-konstruksiyalar-uecuen-havalandirma-sistemi&controller=product&id_lang=1');

// Find all title
foreach($html->find('<title>') as $element)
       echo $element->innertext . '<br><br>';
	   
// Find all h1
foreach($html->find('<h1>') as $element)
       echo $element->innertext . '<br><br>';

// Find all img
foreach($html->find('img') as $element){
    $item['src'] = $element->src;	
	$item['alt']= $element->alt;
	$articles[] = $item; 
}
echo '<pre>';
print_r($articles);
echo '</pre>';	   
   
// Find all content
foreach($html->find('description') as $element)
       echo $element->content . '<br>';	   
	   
	   
	   
	   

?>