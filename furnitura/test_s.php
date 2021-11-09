<?php
/**
 * Created by PhpStorm.
 * User: khouloud.belguith
 * Date: 23/12/19
 * Time: 12:00
 */

ini_set('display_errors','on');
// Here we define constants /!\ You need to replace this parameters
define('DEBUG', true); // Debug mode
define('PS_SHOP_PATH', 'https://furnitura.az'); // Root path of your PrestaShop store
define('PS_WS_AUTH_KEY', 'Key'); // Auth key (Get it in your Back Office)
require_once('./PSWebServiceLibrary.php');

$psXML = <<<XML
<prestashop>
<product>
  <id/>
  <state>1</state>
  <id_category_default>2</id_category_default>
  <active>1</active>
  <advanced_stock_management>1</advanced_stock_management>
  <associations>
    <categories>
      <category><id>2</id></category>
    </categories>
  </associations>
  <reference>boom</reference>
  <name>
  <language id="1">abc</language></name>
  <price>100</price>
  <id_shop_default>1</id_shop_default>
  <low_stock_alert>0</low_stock_alert>
  <link_rewrite>abc</link_rewrite>
  <show_price>1</show_price>
  <minimal_quantity>1</minimal_quantity>
  <available_for_order>1</available_for_order>
</product>
</prestashop>
XML;
$webService = new PrestaShopWebservice(PS_SHOP_PATH, PS_WS_AUTH_KEY, DEBUG);
$xml = new SimpleXMLElement($psXML);
var_dump($xml->asXML());
$opt = array( 'resource' => 'products' );
$opt['postXml'] = $xml->asXML();
$xml = $webService->add( $opt );
