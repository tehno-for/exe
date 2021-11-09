<?php

/* __string_template__ed04d348a9e1c6d3ae5dc815a5c50875b74cfd3daa3412bffd8adbf8fa7886fd */
class __TwigTemplate_812764d93f8e5c3692429b3054a2a8a87e1adbeee3a13fc03401da81c5b6acdd extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'stylesheets' => array($this, 'block_stylesheets'),
            'extra_stylesheets' => array($this, 'block_extra_stylesheets'),
            'content_header' => array($this, 'block_content_header'),
            'content' => array($this, 'block_content'),
            'content_footer' => array($this, 'block_content_footer'),
            'sidebar_right' => array($this, 'block_sidebar_right'),
            'javascripts' => array($this, 'block_javascripts'),
            'extra_javascripts' => array($this, 'block_extra_javascripts'),
            'translate_javascripts' => array($this, 'block_translate_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"utf-8\">
<meta name=\"viewport\" content=\"width=device-width, initial-scale=0.75, maximum-scale=0.75, user-scalable=0\">
<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">
<meta name=\"robots\" content=\"NOFOLLOW, NOINDEX\">

<link rel=\"icon\" type=\"image/x-icon\" href=\"/img/favicon.ico\" />
<link rel=\"apple-touch-icon\" href=\"/img/app_icon.png\" />

<title>Products • furnitura.az</title>

  <script type=\"text/javascript\">
    var help_class_name = 'AdminProducts';
    var iso_user = 'en';
    var lang_is_rtl = '0';
    var full_language_code = 'en-us';
    var full_cldr_language_code = 'en-US';
    var country_iso_code = 'AZ';
    var _PS_VERSION_ = '1.7.5.2';
    var roundMode = 2;
    var youEditFieldFor = '';
        var new_order_msg = 'A new order has been placed on your shop.';
    var order_number_msg = 'Order number: ';
    var total_msg = 'Total: ';
    var from_msg = 'From: ';
    var see_order_msg = 'View this order';
    var new_customer_msg = 'A new customer registered on your shop.';
    var customer_name_msg = 'Customer name: ';
    var new_msg = 'A new message was posted on your shop.';
    var see_msg = 'Read this message';
    var token = 'a9f7238ec8b3cb08af12dd24db2c49e1';
    var token_admin_orders = '166cb96582db96e0af389e52d2b6d5db';
    var token_admin_customers = '570c7b0cf512ee4522632f8c07bc027c';
    var token_admin_customer_threads = '8629e7167b413bdae5beace9f0ab6424';
    var currentIndex = 'index.php?controller=AdminProducts';
    var employee_token = 'db74c7090d03cae322929268ae64b48d';
    var choose_language_translate = 'Choose language';
    var default_language = '2';
    var admin_modules_link = '/admin573dz2fdq/index.php/improve/modules/catalog/recommended?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po';
    var tab_modules_list = 'prestagiftvouchers,dmuassocprodcat,etranslation,apiway,prestashoptoquickbooks';
    var update_success_msg = 'Update successful';
    var errorLogin = 'PrestaShop was unable to log in to Addons. Please check your credentials and your Internet connection.';
    var search_product_msg = 'Search for a product';
  </script>

      <link href=\"/admin573dz2fdq/themes/new-theme/public/theme.css\" rel=\"stylesheet\" type=\"text/css\"/>
      <link href=\"/js/jquery/plugins/chosen/jquery.chosen.css\" rel=\"stylesheet\" type=\"text/css\"/>
      <link href=\"/admin573dz2fdq/themes/default/css/vendor/nv.d3.css\" rel=\"stylesheet\" type=\"text/css\"/>
      <link href=\"/modules/gamification/views/css/gamification.css\" rel=\"stylesheet\" type=\"text/css\"/>
      <link href=\"/js/jquery/plugins/fancybox/jquery.fancybox.css\" rel=\"stylesheet\" type=\"text/css\"/>
  
  <script type=\"text/javascript\">
var baseAdminDir = \"\\/admin573dz2fdq\\/\";
var baseDir = \"\\/\";
var currency = {\"iso_code\":\"AZN\",\"sign\":\"AZN\",\"name\":\"Azerbaijani Manat\",\"format\":\"\\u00a4#,##0.00\"};
var host_mode = false;
var show_new_customers = \"1\";
var show_new_messages = false;
var show_new_orders = \"1\";
</script>
<script type=\"text/javascript\" src=\"/js/jquery/jquery-1.11.0.min.js\"></script>
<script type=\"text/javascript\" src=\"/js/jquery/jquery-migrate-1.2.1.min.js\"></script>
<script type=\"text/javascript\" src=\"/admin573dz2fdq/themes/new-theme/public/main.bundle.js\"></script>
<script type=\"text/javascript\" src=\"/js/jquery/plugins/jquery.chosen.js\"></script>
<script type=\"text/javascript\" src=\"/js/admin.js?v=1.7.5.2\"></script>
<script type=\"text/javascript\" src=\"/js/cldr.js\"></script>
<script type=\"text/javascript\" src=\"/js/tools.js?v=1.7.5.2\"></script>
<script type=\"text/javascript\" src=\"/admin573dz2fdq/public/bundle.js\"></script>
<script type=\"text/javascript\" src=\"/js/vendor/d3.v3.min.js\"></script>
<script type=\"text/javascript\" src=\"/admin573dz2fdq/themes/default/js/vendor/nv.d3.min.js\"></script>
<script type=\"text/javascript\" src=\"/modules/gamification/views/js/gamification_bt.js\"></script>
<script type=\"text/javascript\" src=\"/js/jquery/plugins/fancybox/jquery.fancybox.js\"></script>

  

";
        // line 78
        $this->displayBlock('stylesheets', $context, $blocks);
        $this->displayBlock('extra_stylesheets', $context, $blocks);
        echo "</head>
<body class=\"lang-en adminproducts\">


<header id=\"header\">
  <nav id=\"header_infos\" class=\"main-header\">

    <button class=\"btn btn-primary-reverse onclick btn-lg unbind ajax-spinner\"></button>

        
        <i class=\"material-icons js-mobile-menu\">menu</i>
    <a id=\"header_logo\" class=\"logo float-left\" href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminDashboard&amp;token=8bcbffc2cb95524ea7dda295bf478257\"></a>
    <span id=\"shop_version\">1.7.5.2</span>

    <div class=\"component\" id=\"quick-access-container\">
      <div class=\"dropdown quick-accesses\">
  <button class=\"btn btn-link btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"quick_select\">
    Quick Access
  </button>
  <div class=\"dropdown-menu\">
          <a class=\"dropdown-item\"
         href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminStats&amp;module=statscheckup&amp;token=bfb74aef275d75069efaaebcea2fc8fe\"
                 data-item=\"Catalog evaluation\"
      >Catalog evaluation</a>
          <a class=\"dropdown-item\"
         href=\"https://furnitura.az/admin573dz2fdq/index.php/improve/modules/manage?token=91eba5ccc50bcda988f34a32c87ff4ca\"
                 data-item=\"Installed modules\"
      >Installed modules</a>
          <a class=\"dropdown-item\"
         href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminCategories&amp;addcategory&amp;token=d4d1d68537ea51f6593478307ece3db4\"
                 data-item=\"New category\"
      >New category</a>
          <a class=\"dropdown-item\"
         href=\"https://furnitura.az/admin573dz2fdq/index.php/sell/catalog/products/new?token=91eba5ccc50bcda988f34a32c87ff4ca\"
                 data-item=\"New product\"
      >New product</a>
          <a class=\"dropdown-item\"
         href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminCartRules&amp;addcart_rule&amp;token=cff9f3981c4592f73389cb382214dcd3\"
                 data-item=\"New voucher\"
      >New voucher</a>
          <a class=\"dropdown-item\"
         href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminOrders&amp;token=166cb96582db96e0af389e52d2b6d5db\"
                 data-item=\"Orders\"
      >Orders</a>
          <a class=\"dropdown-item\"
         href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminModules&amp;&amp;configure=xipblog&amp;token=340834dbac2be867c41277384851fa23\"
                 data-item=\"XipBlog Settings\"
      >XipBlog Settings</a>
        <div class=\"dropdown-divider\"></div>
          <a
        class=\"dropdown-item js-quick-link\"
        href=\"#\"
        data-rand=\"141\"
        data-icon=\"icon-AdminCatalog\"
        data-method=\"add\"
        data-url=\"index.php/sell/catalog/products?-_xdYGk6AfdI5409EPIyjhGrFg35po\"
        data-post-link=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminQuickAccesses&token=784c5e9b679a34acc02eb6f4a60e8711\"
        data-prompt-text=\"Please name this shortcut:\"
        data-link=\"Products - List\"
      >
        <i class=\"material-icons\">add_circle</i>
        Add current page to QuickAccess
      </a>
        <a class=\"dropdown-item\" href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminQuickAccesses&token=784c5e9b679a34acc02eb6f4a60e8711\">
      <i class=\"material-icons\">settings</i>
      Manage quick accesses
    </a>
  </div>
</div>
    </div>
    <div class=\"component\" id=\"header-search-container\">
      <form id=\"header_search\"
      class=\"bo_search_form dropdown-form js-dropdown-form collapsed\"
      method=\"post\"
      action=\"/admin573dz2fdq/index.php?controller=AdminSearch&amp;token=4f2d411190832d30223c117f699c3630\"
      role=\"search\">
  <input type=\"hidden\" name=\"bo_search_type\" id=\"bo_search_type\" class=\"js-search-type\" />
    <div class=\"input-group\">
    <input type=\"text\" class=\"form-control js-form-search\" id=\"bo_query\" name=\"bo_query\" value=\"\" placeholder=\"Search (e.g.: product reference, customer name…)\">
    <div class=\"input-group-append\">
      <button type=\"button\" class=\"btn btn-outline-secondary dropdown-toggle js-dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
        Everywhere
      </button>
      <div class=\"dropdown-menu js-items-list\">
        <a class=\"dropdown-item\" data-item=\"Everywhere\" href=\"#\" data-value=\"0\" data-placeholder=\"What are you looking for?\" data-icon=\"icon-search\"><i class=\"material-icons\">search</i> Everywhere</a>
        <div class=\"dropdown-divider\"></div>
        <a class=\"dropdown-item\" data-item=\"Catalog\" href=\"#\" data-value=\"1\" data-placeholder=\"Product name, SKU, reference...\" data-icon=\"icon-book\"><i class=\"material-icons\">store_mall_directory</i> Catalog</a>
        <a class=\"dropdown-item\" data-item=\"Customers by name\" href=\"#\" data-value=\"2\" data-placeholder=\"Email, name...\" data-icon=\"icon-group\"><i class=\"material-icons\">group</i> Customers by name</a>
        <a class=\"dropdown-item\" data-item=\"Customers by ip address\" href=\"#\" data-value=\"6\" data-placeholder=\"123.45.67.89\" data-icon=\"icon-desktop\"><i class=\"material-icons\">desktop_mac</i> Customers by IP address</a>
        <a class=\"dropdown-item\" data-item=\"Orders\" href=\"#\" data-value=\"3\" data-placeholder=\"Order ID\" data-icon=\"icon-credit-card\"><i class=\"material-icons\">shopping_basket</i> Orders</a>
        <a class=\"dropdown-item\" data-item=\"Invoices\" href=\"#\" data-value=\"4\" data-placeholder=\"Invoice Number\" data-icon=\"icon-book\"><i class=\"material-icons\">book</i> Invoices</a>
        <a class=\"dropdown-item\" data-item=\"Carts\" href=\"#\" data-value=\"5\" data-placeholder=\"Cart ID\" data-icon=\"icon-shopping-cart\"><i class=\"material-icons\">shopping_cart</i> Carts</a>
        <a class=\"dropdown-item\" data-item=\"Modules\" href=\"#\" data-value=\"7\" data-placeholder=\"Module name\" data-icon=\"icon-puzzle-piece\"><i class=\"material-icons\">extension</i> Modules</a>
      </div>
      <button class=\"btn btn-primary\" type=\"submit\"><span class=\"d-none\">SEARCH</span><i class=\"material-icons\">search</i></button>
    </div>
  </div>
</form>

<script type=\"text/javascript\">
 \$(document).ready(function(){
    \$('#bo_query').one('click', function() {
    \$(this).closest('form').removeClass('collapsed');
  });
});
</script>
    </div>

            <div class=\"component\" id=\"header-shop-list-container\">
        <div class=\"shop-list\">
    <a class=\"link\" id=\"header_shopname\" href=\"https://furnitura.az/\" target= \"_blank\">
      <i class=\"material-icons\">visibility</i>
      View my shop
    </a>
  </div>
    </div>
          <div class=\"component header-right-component\" id=\"header-notifications-container\">
        <div id=\"notif\" class=\"notification-center dropdown dropdown-clickable\">
  <button class=\"btn notification js-notification dropdown-toggle\" data-toggle=\"dropdown\">
    <i class=\"material-icons\">notifications_none</i>
    <span id=\"notifications-total\" class=\"count hide\">0</span>
  </button>
  <div class=\"dropdown-menu dropdown-menu-right js-notifs_dropdown\">
    <div class=\"notifications\">
      <ul class=\"nav nav-tabs\" role=\"tablist\">
                          <li class=\"nav-item\">
            <a
              class=\"nav-link active\"
              id=\"orders-tab\"
              data-toggle=\"tab\"
              data-type=\"order\"
              href=\"#orders-notifications\"
              role=\"tab\"
            >
              Orders<span id=\"_nb_new_orders_\"></span>
            </a>
          </li>
                                    <li class=\"nav-item\">
            <a
              class=\"nav-link \"
              id=\"customers-tab\"
              data-toggle=\"tab\"
              data-type=\"customer\"
              href=\"#customers-notifications\"
              role=\"tab\"
            >
              Customers<span id=\"_nb_new_customers_\"></span>
            </a>
          </li>
                                    <li class=\"nav-item\">
            <a
              class=\"nav-link \"
              id=\"messages-tab\"
              data-toggle=\"tab\"
              data-type=\"customer_message\"
              href=\"#messages-notifications\"
              role=\"tab\"
            >
              Messages<span id=\"_nb_new_messages_\"></span>
            </a>
          </li>
                        </ul>

      <!-- Tab panes -->
      <div class=\"tab-content\">
                          <div class=\"tab-pane active empty\" id=\"orders-notifications\" role=\"tabpanel\">
            <p class=\"no-notification\">
              No new order for now :(<br>
              Did you check your conversion rate lately?
            </p>
            <div class=\"notification-elements\"></div>
          </div>
                                    <div class=\"tab-pane  empty\" id=\"customers-notifications\" role=\"tabpanel\">
            <p class=\"no-notification\">
              No new customer for now :(<br>
              Have you considered selling on marketplaces?
            </p>
            <div class=\"notification-elements\"></div>
          </div>
                                    <div class=\"tab-pane  empty\" id=\"messages-notifications\" role=\"tabpanel\">
            <p class=\"no-notification\">
              No new message for now.<br>
              No news is good news, isn't it?
            </p>
            <div class=\"notification-elements\"></div>
          </div>
                        </div>
    </div>
  </div>
</div>

  <script type=\"text/html\" id=\"order-notification-template\">
    <a class=\"notif\" href='order_url'>
      #_id_order_ -
      from <strong>_customer_name_</strong> (_iso_code_)_carrier_
      <strong class=\"float-sm-right\">_total_paid_</strong>
    </a>
  </script>

  <script type=\"text/html\" id=\"customer-notification-template\">
    <a class=\"notif\" href='customer_url'>
      #_id_customer_ - <strong>_customer_name_</strong>_company_ - registered <strong>_date_add_</strong>
    </a>
  </script>

  <script type=\"text/html\" id=\"message-notification-template\">
    <a class=\"notif\" href='message_url'>
    <span class=\"message-notification-status _status_\">
      <i class=\"material-icons\">fiber_manual_record</i> _status_
    </span>
      - <strong>_customer_name_</strong> (_company_) - <i class=\"material-icons\">access_time</i> _date_add_
    </a>
  </script>
      </div>
        <div class=\"component\" id=\"header-employee-container\">
      <div class=\"dropdown employee-dropdown\">
  <div class=\"rounded-circle person\" data-toggle=\"dropdown\">
    <i class=\"material-icons\">account_circle</i>
  </div>
  <div class=\"dropdown-menu dropdown-menu-right\">
    <div class=\"text-center employee_avatar\">
      <img class=\"avatar rounded-circle\" src=\"https://profile.prestashop.com/teamsag%40gmail.com.jpg\" />
      <span>Rustam  Sh.</span>
    </div>
    <a class=\"dropdown-item employee-link profile-link\" href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminEmployees&amp;id_employee=1&amp;updateemployee=1&amp;token=db74c7090d03cae322929268ae64b48d\">
      <i class=\"material-icons\">settings_applications</i>
      Your profile
    </a>
    <a class=\"dropdown-item employee-link\" id=\"header_logout\" href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminLogin&amp;logout=1&amp;token=906ef05ac0ea8ee0879a261f2cbb0a8c\">
      <i class=\"material-icons\">power_settings_new</i>
      <span>Sign out</span>
    </a>
  </div>
</div>
    </div>

      </nav>
  </header>

<nav class=\"nav-bar d-none d-md-block\">
  <span class=\"menu-collapse\">
    <i class=\"material-icons\">chevron_left</i>
    <i class=\"material-icons\">chevron_left</i>
  </span>

  <ul class=\"main-menu\">

          
                
                
        
          <li class=\"link-levelone \" data-submenu=\"1\" id=\"tab-AdminDashboard\">
            <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminDashboard&amp;token=8bcbffc2cb95524ea7dda295bf478257\" class=\"link\" >
              <i class=\"material-icons\">trending_up</i> <span>Dashboard</span>
            </a>
          </li>

        
                
                                  
                
        
          <li class=\"category-title -active\" data-submenu=\"2\" id=\"tab-SELL\">
              <span class=\"title\">Sell</span>
          </li>

                          
                
                                                
                
                <li class=\"link-levelone has_submenu\" data-submenu=\"3\" id=\"subtab-AdminParentOrders\">
                  <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminOrders&amp;token=166cb96582db96e0af389e52d2b6d5db\" class=\"link\">
                    <i class=\"material-icons mi-shopping_basket\">shopping_basket</i>
                    <span>
                    Orders
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                          <ul id=\"collapse-3\" class=\"submenu panel-collapse\">
                                                  
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"4\" id=\"subtab-AdminOrders\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminOrders&amp;token=166cb96582db96e0af389e52d2b6d5db\" class=\"link\"> Orders
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"5\" id=\"subtab-AdminInvoices\">
                              <a href=\"/admin573dz2fdq/index.php/sell/orders/invoices/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Invoices
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"6\" id=\"subtab-AdminSlip\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminSlip&amp;token=bcca3254b6c7b41dd6a638ee45606b0d\" class=\"link\"> Credit Slips
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"7\" id=\"subtab-AdminDeliverySlip\">
                              <a href=\"/admin573dz2fdq/index.php/sell/orders/delivery-slips/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Delivery Slips
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"8\" id=\"subtab-AdminCarts\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminCarts&amp;token=46da3a591e2d6c42e433ae873c8d057d\" class=\"link\"> Shopping Carts
                              </a>
                            </li>

                                                                        </ul>
                                    </li>
                                        
                
                                                
                                                    
                <li class=\"link-levelone has_submenu -active open ul-open\" data-submenu=\"9\" id=\"subtab-AdminCatalog\">
                  <a href=\"/admin573dz2fdq/index.php/sell/catalog/products?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\">
                    <i class=\"material-icons mi-store\">store</i>
                    <span>
                    Catalog
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_up
                                                        </i>
                                        </a>
                                          <ul id=\"collapse-9\" class=\"submenu panel-collapse\">
                                                  
                            
                                                        
                            <li class=\"link-leveltwo -active\" data-submenu=\"10\" id=\"subtab-AdminProducts\">
                              <a href=\"/admin573dz2fdq/index.php/sell/catalog/products?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Products
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"11\" id=\"subtab-AdminCategories\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminCategories&amp;token=d4d1d68537ea51f6593478307ece3db4\" class=\"link\"> Categories
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"12\" id=\"subtab-AdminTracking\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminTracking&amp;token=3c548e058ee52f28e7ee0751645fe5d0\" class=\"link\"> Monitoring
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"13\" id=\"subtab-AdminParentAttributesGroups\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminAttributesGroups&amp;token=f23d28c1fe6b1621bdc714a759a7c6cc\" class=\"link\"> Attributes &amp; Features
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"16\" id=\"subtab-AdminParentManufacturers\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminManufacturers&amp;token=f67a645ff5e94a5a809aec33a80870d8\" class=\"link\"> Brands &amp; Suppliers
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"19\" id=\"subtab-AdminAttachments\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminAttachments&amp;token=85086433c96a695938b6f97b5488bf24\" class=\"link\"> Files
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"20\" id=\"subtab-AdminParentCartRules\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminCartRules&amp;token=cff9f3981c4592f73389cb382214dcd3\" class=\"link\"> Discounts
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"23\" id=\"subtab-AdminStockManagement\">
                              <a href=\"/admin573dz2fdq/index.php/sell/stocks/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Stocks
                              </a>
                            </li>

                                                                        </ul>
                                    </li>
                                        
                
                                                
                
                <li class=\"link-levelone has_submenu\" data-submenu=\"24\" id=\"subtab-AdminParentCustomer\">
                  <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminCustomers&amp;token=570c7b0cf512ee4522632f8c07bc027c\" class=\"link\">
                    <i class=\"material-icons mi-account_circle\">account_circle</i>
                    <span>
                    Customers
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                          <ul id=\"collapse-24\" class=\"submenu panel-collapse\">
                                                  
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"25\" id=\"subtab-AdminCustomers\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminCustomers&amp;token=570c7b0cf512ee4522632f8c07bc027c\" class=\"link\"> Customers
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"26\" id=\"subtab-AdminAddresses\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminAddresses&amp;token=95d988680b124e2a2cd70df4c3fd894f\" class=\"link\"> Addresses
                              </a>
                            </li>

                                                                                                                          </ul>
                                    </li>
                                        
                
                                                
                
                <li class=\"link-levelone has_submenu\" data-submenu=\"28\" id=\"subtab-AdminParentCustomerThreads\">
                  <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminCustomerThreads&amp;token=8629e7167b413bdae5beace9f0ab6424\" class=\"link\">
                    <i class=\"material-icons mi-chat\">chat</i>
                    <span>
                    Customer Service
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                          <ul id=\"collapse-28\" class=\"submenu panel-collapse\">
                                                  
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"29\" id=\"subtab-AdminCustomerThreads\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminCustomerThreads&amp;token=8629e7167b413bdae5beace9f0ab6424\" class=\"link\"> Customer Service
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"30\" id=\"subtab-AdminOrderMessage\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminOrderMessage&amp;token=8a8047c5b04c44c85bd181887a5ab07d\" class=\"link\"> Order Messages
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"31\" id=\"subtab-AdminReturn\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminReturn&amp;token=212916f1e34f6b82907bacd7657b142a\" class=\"link\"> Merchandise Returns
                              </a>
                            </li>

                                                                        </ul>
                                    </li>
                                        
                
                                                
                
                <li class=\"link-levelone\" data-submenu=\"32\" id=\"subtab-AdminStats\">
                  <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminStats&amp;token=bfb74aef275d75069efaaebcea2fc8fe\" class=\"link\">
                    <i class=\"material-icons mi-assessment\">assessment</i>
                    <span>
                    Stats
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                    </li>
                          
        
                
                                  
                
        
          <li class=\"category-title \" data-submenu=\"42\" id=\"tab-IMPROVE\">
              <span class=\"title\">Improve</span>
          </li>

                          
                
                                                
                
                <li class=\"link-levelone has_submenu\" data-submenu=\"43\" id=\"subtab-AdminParentModulesSf\">
                  <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminPsMboModule&amp;token=12db548294651192d04f97cd1ec1f2bf\" class=\"link\">
                    <i class=\"material-icons mi-extension\">extension</i>
                    <span>
                    Modules
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                          <ul id=\"collapse-43\" class=\"submenu panel-collapse\">
                                                  
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"44\" id=\"subtab-AdminParentModulesCatalog\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminPsMboModule&amp;token=12db548294651192d04f97cd1ec1f2bf\" class=\"link\"> Module Catalog
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"47\" id=\"subtab-AdminModulesSf\">
                              <a href=\"/admin573dz2fdq/index.php/improve/modules/manage?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Module Manager
                              </a>
                            </li>

                                                                                                                          </ul>
                                    </li>
                                        
                
                                                
                
                <li class=\"link-levelone has_submenu\" data-submenu=\"52\" id=\"subtab-AdminParentThemes\">
                  <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminThemes&amp;token=2c3c95636e38c6808ee104bbbc19f595\" class=\"link\">
                    <i class=\"material-icons mi-desktop_mac\">desktop_mac</i>
                    <span>
                    Design
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                          <ul id=\"collapse-52\" class=\"submenu panel-collapse\">
                                                  
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"163\" id=\"subtab-AdminThemesParent\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminThemes&amp;token=2c3c95636e38c6808ee104bbbc19f595\" class=\"link\"> Theme &amp; Logo
                              </a>
                            </li>

                                                                                                                              
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"131\" id=\"subtab-AdminPsMboTheme\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminPsMboTheme&amp;token=09e4e621cf70d1bf19578071e0499c76\" class=\"link\"> Theme Catalog
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"55\" id=\"subtab-AdminCmsContent\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminCmsContent&amp;token=9dd058bd8d533eabfe04ddf91f808f2c\" class=\"link\"> Pages
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"56\" id=\"subtab-AdminModulesPositions\">
                              <a href=\"/admin573dz2fdq/index.php/improve/design/modules/positions/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Positions
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"57\" id=\"subtab-AdminImages\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminImages&amp;token=d0705b0acb094a00d6c1d4b8cd81fdc1\" class=\"link\"> Image Settings
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"122\" id=\"subtab-AdminLinkWidget\">
                              <a href=\"/admin573dz2fdq/index.php/modules/link-widget/list?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Link Widget
                              </a>
                            </li>

                                                                        </ul>
                                    </li>
                                        
                
                                                
                
                <li class=\"link-levelone has_submenu\" data-submenu=\"58\" id=\"subtab-AdminParentShipping\">
                  <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminCarriers&amp;token=e9d3f800ec4ac86a7a3f9162caca7aa9\" class=\"link\">
                    <i class=\"material-icons mi-local_shipping\">local_shipping</i>
                    <span>
                    Shipping
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                          <ul id=\"collapse-58\" class=\"submenu panel-collapse\">
                                                  
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"59\" id=\"subtab-AdminCarriers\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminCarriers&amp;token=e9d3f800ec4ac86a7a3f9162caca7aa9\" class=\"link\"> Carriers
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"60\" id=\"subtab-AdminShipping\">
                              <a href=\"/admin573dz2fdq/index.php/improve/shipping/preferences?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Preferences
                              </a>
                            </li>

                                                                        </ul>
                                    </li>
                                        
                
                                                
                
                <li class=\"link-levelone has_submenu\" data-submenu=\"61\" id=\"subtab-AdminParentPayment\">
                  <a href=\"/admin573dz2fdq/index.php/improve/payment/payment_methods?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\">
                    <i class=\"material-icons mi-payment\">payment</i>
                    <span>
                    Payment
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                          <ul id=\"collapse-61\" class=\"submenu panel-collapse\">
                                                  
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"62\" id=\"subtab-AdminPayment\">
                              <a href=\"/admin573dz2fdq/index.php/improve/payment/payment_methods?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Payment Methods
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"63\" id=\"subtab-AdminPaymentPreferences\">
                              <a href=\"/admin573dz2fdq/index.php/improve/payment/preferences?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Preferences
                              </a>
                            </li>

                                                                        </ul>
                                    </li>
                                        
                
                                                
                
                <li class=\"link-levelone has_submenu\" data-submenu=\"64\" id=\"subtab-AdminInternational\">
                  <a href=\"/admin573dz2fdq/index.php/improve/international/localization/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\">
                    <i class=\"material-icons mi-language\">language</i>
                    <span>
                    International
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                          <ul id=\"collapse-64\" class=\"submenu panel-collapse\">
                                                  
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"65\" id=\"subtab-AdminParentLocalization\">
                              <a href=\"/admin573dz2fdq/index.php/improve/international/localization/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Localization
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"70\" id=\"subtab-AdminParentCountries\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminZones&amp;token=6180b9017a35fdf18c0b0ea159aac1c2\" class=\"link\"> Locations
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"74\" id=\"subtab-AdminParentTaxes\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminTaxes&amp;token=e15cdcfc68ee9044ba27839472447d06\" class=\"link\"> Taxes
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"77\" id=\"subtab-AdminTranslations\">
                              <a href=\"/admin573dz2fdq/index.php/improve/international/translations/settings?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Translations
                              </a>
                            </li>

                                                                        </ul>
                                    </li>
                                        
                
                                                
                
                <li class=\"link-levelone has_submenu\" data-submenu=\"256\" id=\"subtab-Adminxprtblogdashboard\">
                  <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=Adminxippost&amp;token=d654bcf9781bce223546c4072ef99c1d\" class=\"link\">
                    <i class=\"material-icons mi-\"></i>
                    <span>
                    Xpert Blog
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                          <ul id=\"collapse-256\" class=\"submenu panel-collapse\">
                                                  
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"257\" id=\"subtab-Adminxippost\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=Adminxippost&amp;token=d654bcf9781bce223546c4072ef99c1d\" class=\"link\"> Blog Posts
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"258\" id=\"subtab-Adminxipcategory\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=Adminxipcategory&amp;token=0a00aff9efabdb2a737d5e3cee57cfef\" class=\"link\"> Blog Categories
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"259\" id=\"subtab-Adminxipcomment\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=Adminxipcomment&amp;token=788ebc29a21b748fef5e885f32265851\" class=\"link\"> Blog Comments
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"260\" id=\"subtab-Adminxipimagetype\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=Adminxipimagetype&amp;token=058e05894017913139fe5e351cfe474d\" class=\"link\"> Blog Image Type
                              </a>
                            </li>

                                                                        </ul>
                                    </li>
                          
        
                
                                  
                
        
          <li class=\"category-title \" data-submenu=\"78\" id=\"tab-CONFIGURE\">
              <span class=\"title\">Configure</span>
          </li>

                          
                
                                                
                
                <li class=\"link-levelone has_submenu\" data-submenu=\"79\" id=\"subtab-ShopParameters\">
                  <a href=\"/admin573dz2fdq/index.php/configure/shop/preferences/preferences?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\">
                    <i class=\"material-icons mi-settings\">settings</i>
                    <span>
                    Shop Parameters
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                          <ul id=\"collapse-79\" class=\"submenu panel-collapse\">
                                                  
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"80\" id=\"subtab-AdminParentPreferences\">
                              <a href=\"/admin573dz2fdq/index.php/configure/shop/preferences/preferences?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> General
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"83\" id=\"subtab-AdminParentOrderPreferences\">
                              <a href=\"/admin573dz2fdq/index.php/configure/shop/order-preferences/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Order Settings
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"86\" id=\"subtab-AdminPPreferences\">
                              <a href=\"/admin573dz2fdq/index.php/configure/shop/product-preferences/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Product Settings
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"87\" id=\"subtab-AdminParentCustomerPreferences\">
                              <a href=\"/admin573dz2fdq/index.php/configure/shop/customer-preferences/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Customer Settings
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"91\" id=\"subtab-AdminParentStores\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminContacts&amp;token=c3c94028d51babd581cd630d00467a68\" class=\"link\"> Contact
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"94\" id=\"subtab-AdminParentMeta\">
                              <a href=\"/admin573dz2fdq/index.php/configure/shop/seo-urls/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Traffic &amp; SEO
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"98\" id=\"subtab-AdminParentSearchConf\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminSearchConf&amp;token=0682e1e57002610d94cccd6aaebfc98b\" class=\"link\"> Search
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"127\" id=\"subtab-AdminGamification\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminGamification&amp;token=dfedcff2bd02071a82bf808d23e2c38c\" class=\"link\"> Merchant Expertise
                              </a>
                            </li>

                                                                        </ul>
                                    </li>
                                        
                
                                                
                
                <li class=\"link-levelone has_submenu\" data-submenu=\"101\" id=\"subtab-AdminAdvancedParameters\">
                  <a href=\"/admin573dz2fdq/index.php/configure/advanced/system-information/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\">
                    <i class=\"material-icons mi-settings_applications\">settings_applications</i>
                    <span>
                    Advanced Parameters
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                          <ul id=\"collapse-101\" class=\"submenu panel-collapse\">
                                                  
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"102\" id=\"subtab-AdminInformation\">
                              <a href=\"/admin573dz2fdq/index.php/configure/advanced/system-information/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Information
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"103\" id=\"subtab-AdminPerformance\">
                              <a href=\"/admin573dz2fdq/index.php/configure/advanced/performance/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Performance
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"104\" id=\"subtab-AdminAdminPreferences\">
                              <a href=\"/admin573dz2fdq/index.php/configure/advanced/administration/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Administration
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"105\" id=\"subtab-AdminEmails\">
                              <a href=\"/admin573dz2fdq/index.php/configure/advanced/emails/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> E-mail
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"106\" id=\"subtab-AdminImport\">
                              <a href=\"/admin573dz2fdq/index.php/configure/advanced/import/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Import
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"107\" id=\"subtab-AdminParentEmployees\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminEmployees&amp;token=db74c7090d03cae322929268ae64b48d\" class=\"link\"> Team
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"111\" id=\"subtab-AdminParentRequestSql\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminRequestSql&amp;token=cc6d946ff3936de2e6b8c6a0eeb55f63\" class=\"link\"> Database
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"114\" id=\"subtab-AdminLogs\">
                              <a href=\"/admin573dz2fdq/index.php/configure/advanced/logs/?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" class=\"link\"> Logs
                              </a>
                            </li>

                                                                            
                            
                                                        
                            <li class=\"link-leveltwo \" data-submenu=\"115\" id=\"subtab-AdminWebservice\">
                              <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminWebservice&amp;token=2bd2da9ae2e429de73c8b9e7cef42325\" class=\"link\"> Webservice
                              </a>
                            </li>

                                                                                                                                                                            </ul>
                                    </li>
                          
        
                
                                  
                
        
          <li class=\"category-title \" data-submenu=\"133\" id=\"tab-AdminPosMenu\">
              <span class=\"title\">PosExtentions</span>
          </li>

                          
                
                                                
                
                <li class=\"link-levelone\" data-submenu=\"134\" id=\"subtab-AdminPosLogo\">
                  <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminPosLogo&amp;token=7ce44375026f71787f957d0eb1d2863d\" class=\"link\">
                    <i class=\"material-icons mi-extension\">extension</i>
                    <span>
                    Manage Logo
                    </span>
                                                <i class=\"material-icons sub-tabs-arrow\">
                                                                keyboard_arrow_down
                                                        </i>
                                        </a>
                                    </li>
                          
        
            </ul>
  
</nav>

<div id=\"main-div\">

  
    
<div class=\"header-toolbar\">
  <div class=\"container-fluid\">

    
      <nav aria-label=\"Breadcrumb\">
        <ol class=\"breadcrumb\">
                      <li class=\"breadcrumb-item\">Catalog</li>
          
                      <li class=\"breadcrumb-item active\">
              <a href=\"/admin573dz2fdq/index.php/sell/catalog/products?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\" aria-current=\"page\">Products</a>
            </li>
                  </ol>
      </nav>
    

    <div class=\"title-row\">
      
          <h1 class=\"title\">
            Products          </h1>
      

      
        <div class=\"toolbar-icons\">
          <div class=\"wrapper\">
             

<script>
    
    var isSymfonyContext = true;
    var admin_module_ajax_url_psmbo = 'https://furnitura.az/admin573dz2fdq/index.php?controller=AdminPsMboModule&token=12db548294651192d04f97cd1ec1f2bf';
    var controller = 'AdminProducts';
    
    if (isSymfonyContext === false) {
        
        \$(document).ready(function() {
            
            \$('.process-icon-modules-list').parent('a').prop('href', admin_module_ajax_url_psmbo);
            
            \$('.fancybox-quick-view').fancybox({
                type: 'ajax',
                autoDimensions: false,
                autoSize: false,
                width: 600,
                height: 'auto',
                helpers: {
                    overlay: {
                        locked: false
                    }
                }
            });
        });
    }
\t
\t\$(document).on('click', '#page-header-desc-configuration-modules-list', function(event) {
\t\tevent.preventDefault();
\t\topenModalOrRedirect(isSymfonyContext);
\t});
\t
\t\$('.process-icon-modules-list').parent('a').unbind().bind('click', function (event) {
\t\tevent.preventDefault();
\t\topenModalOrRedirect(isSymfonyContext);
\t});
    
    function openModalOrRedirect(isSymfonyContext) {
        if (isSymfonyContext === false) {
            \$('#modules_list_container').modal('show');
            openModulesList();
        } else {
            window.location.href = admin_module_ajax_url_psmbo;
        }
    }
\t
    function openModulesList() {
        \$.ajax({
            type: 'POST',
            url: admin_module_ajax_url_psmbo,
            data: {
                ajax : true,
                action : 'GetTabModulesList',
                controllerName: controller
            },
            success : function(data) {
                \$('#modules_list_container_tab_modal').html(data).slideDown();
                \$('#modules_list_loader').hide();
            },
        });
    }
\t
\t
</script>

                                                                                    <a
                  class=\"btn btn-primary  pointer\"                  id=\"page-header-desc-configuration-add\"
                  href=\"/admin573dz2fdq/index.php/sell/catalog/products/new?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\"                  title=\"Create a new product: CTRL+P\"                  data-toggle=\"pstooltip\"
                  data-placement=\"bottom\"                >
                  <i class=\"material-icons\">add_circle_outline</i>
                  New product
                </a>
                                                                  <a
                class=\"btn btn-outline-secondary \"
                id=\"page-header-desc-configuration-modules-list\"
                href=\"/admin573dz2fdq/index.php/improve/modules/catalog?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\"                title=\"Recommended Modules\"
                              >
                Recommended Modules
              </a>
            
            
                              <a class=\"btn btn-outline-secondary btn-help btn-sidebar\" href=\"#\"
                   title=\"Help\"
                   data-toggle=\"sidebar\"
                   data-target=\"#right-sidebar\"
                   data-url=\"/admin573dz2fdq/index.php/common/sidebar/https%253A%252F%252Fhelp.prestashop.com%252Fen%252Fdoc%252FAdminProducts%253Fversion%253D1.7.5.2%2526country%253Den/Help?_token=8osvKv7hCmCYf-_xdYGk6AfdI5409EPIyjhGrFg35po\"
                   id=\"product_form_open_help\"
                >
                  Help
                </a>
                                    </div>
        </div>
      
    </div>
  </div>

  
    
</div>
    
    <div class=\"content-div  \">

      

      
                        
      <div class=\"row \">
        <div class=\"col-sm-12\">
          <div id=\"ajax_confirmation\" class=\"alert alert-success\" style=\"display: none;\"></div>


  ";
        // line 1195
        $this->displayBlock('content_header', $context, $blocks);
        // line 1196
        echo "                 ";
        $this->displayBlock('content', $context, $blocks);
        // line 1197
        echo "                 ";
        $this->displayBlock('content_footer', $context, $blocks);
        // line 1198
        echo "                 ";
        $this->displayBlock('sidebar_right', $context, $blocks);
        // line 1199
        echo "
           
<div class=\"modal fade\" id=\"modules_list_container\">
\t<div class=\"modal-dialog\">
\t\t<div class=\"modal-content\">
\t\t\t<div class=\"modal-header\">
\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>
\t\t\t\t<h3 class=\"modal-title\">Recommended Modules and Services</h3>
\t\t\t</div>
\t\t\t<div class=\"modal-body\">
\t\t\t\t<div id=\"modules_list_container_tab_modal\" style=\"display:none;\"></div>
\t\t\t\t<div id=\"modules_list_loader\"><i class=\"icon-refresh icon-spin\"></i></div>
\t\t\t</div>
\t\t</div>
\t</div>
</div>
        </div>
      </div>

    </div>

  
</div>

<div id=\"non-responsive\" class=\"js-non-responsive\">
  <h1>Oh no!</h1>
  <p class=\"mt-3\">
    The mobile version of this page is not available yet.
  </p>
  <p class=\"mt-2\">
    Please use a desktop computer to access this page, until is adapted to mobile.
  </p>
  <p class=\"mt-2\">
    Thank you.
  </p>
  <a href=\"https://furnitura.az/admin573dz2fdq/index.php?controller=AdminDashboard&amp;token=8bcbffc2cb95524ea7dda295bf478257\" class=\"btn btn-primary py-1 mt-3\">
    <i class=\"material-icons\">arrow_back</i>
    Back
  </a>
</div>
<div class=\"mobile-layer\"></div>

  <div id=\"footer\" class=\"bootstrap\">
    
</div>


  <div class=\"bootstrap\">
    <div class=\"modal fade\" id=\"modal_addons_connect\" tabindex=\"-1\">
\t<div class=\"modal-dialog modal-md\">
\t\t<div class=\"modal-content\">
\t\t\t\t\t\t<div class=\"modal-header\">
\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>
\t\t\t\t<h4 class=\"modal-title\"><i class=\"icon-puzzle-piece\"></i> <a target=\"_blank\" href=\"https://addons.prestashop.com/?utm_source=back-office&utm_medium=modules&utm_campaign=back-office-EN&utm_content=download\">PrestaShop Addons</a></h4>
\t\t\t</div>
\t\t\t
\t\t\t<div class=\"modal-body\">
\t\t\t\t\t\t<!--start addons login-->
\t\t\t<form id=\"addons_login_form\" method=\"post\" >
\t\t\t\t<div>
\t\t\t\t\t<a href=\"https://addons.prestashop.com/en/login?email=teamsag%40gmail.com&amp;firstname=Rustam+&amp;lastname=Sh.&amp;website=https%3A%2F%2Ffurnitura.az%2F&amp;utm_source=back-office&amp;utm_medium=connect-to-addons&amp;utm_campaign=back-office-EN&amp;utm_content=download#createnow\"><img class=\"img-responsive center-block\" src=\"/admin573dz2fdq/themes/default/img/prestashop-addons-logo.png\" alt=\"Logo PrestaShop Addons\"/></a>
\t\t\t\t\t<h3 class=\"text-center\">Connect your shop to PrestaShop's marketplace in order to automatically import all your Addons purchases.</h3>
\t\t\t\t\t<hr />
\t\t\t\t</div>
\t\t\t\t<div class=\"row\">
\t\t\t\t\t<div class=\"col-md-6\">
\t\t\t\t\t\t<h4>Don't have an account?</h4>
\t\t\t\t\t\t<p class='text-justify'>Discover the Power of PrestaShop Addons! Explore the PrestaShop Official Marketplace and find over 3 500 innovative modules and themes that optimize conversion rates, increase traffic, build customer loyalty and maximize your productivity</p>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-md-6\">
\t\t\t\t\t\t<h4>Connect to PrestaShop Addons</h4>
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t<div class=\"input-group\">
\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">
\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"icon-user\"></i></span>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<input id=\"username_addons\" name=\"username_addons\" type=\"text\" value=\"\" autocomplete=\"off\" class=\"form-control ac_input\">
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t<div class=\"input-group\">
\t\t\t\t\t\t\t\t<div class=\"input-group-prepend\">
\t\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"icon-key\"></i></span>
\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t<input id=\"password_addons\" name=\"password_addons\" type=\"password\" value=\"\" autocomplete=\"off\" class=\"form-control ac_input\">
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<a class=\"btn btn-link float-right _blank\" href=\"//addons.prestashop.com/en/forgot-your-password\">I forgot my password</a>
\t\t\t\t\t\t\t<br>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t\t<div class=\"row row-padding-top\">
\t\t\t\t\t<div class=\"col-md-6\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t<a class=\"btn btn-default btn-block btn-lg _blank\" href=\"https://addons.prestashop.com/en/login?email=teamsag%40gmail.com&amp;firstname=Rustam+&amp;lastname=Sh.&amp;website=https%3A%2F%2Ffurnitura.az%2F&amp;utm_source=back-office&amp;utm_medium=connect-to-addons&amp;utm_campaign=back-office-EN&amp;utm_content=download#createnow\">
\t\t\t\t\t\t\t\tCreate an Account
\t\t\t\t\t\t\t\t<i class=\"icon-external-link\"></i>
\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"col-md-6\">
\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t<button id=\"addons_login_button\" class=\"btn btn-primary btn-block btn-lg\" type=\"submit\">
\t\t\t\t\t\t\t\t<i class=\"icon-unlock\"></i> Sign in
\t\t\t\t\t\t\t</button>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t\t<div id=\"addons_loading\" class=\"help-block\"></div>

\t\t\t</form>
\t\t\t<!--end addons login-->
\t\t\t</div>


\t\t\t\t\t</div>
\t</div>
</div>

  </div>

";
        // line 1322
        $this->displayBlock('javascripts', $context, $blocks);
        $this->displayBlock('extra_javascripts', $context, $blocks);
        $this->displayBlock('translate_javascripts', $context, $blocks);
        echo "</body>
</html>";
    }

    // line 78
    public function block_stylesheets($context, array $blocks = array())
    {
    }

    public function block_extra_stylesheets($context, array $blocks = array())
    {
    }

    // line 1195
    public function block_content_header($context, array $blocks = array())
    {
    }

    // line 1196
    public function block_content($context, array $blocks = array())
    {
    }

    // line 1197
    public function block_content_footer($context, array $blocks = array())
    {
    }

    // line 1198
    public function block_sidebar_right($context, array $blocks = array())
    {
    }

    // line 1322
    public function block_javascripts($context, array $blocks = array())
    {
    }

    public function block_extra_javascripts($context, array $blocks = array())
    {
    }

    public function block_translate_javascripts($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "__string_template__ed04d348a9e1c6d3ae5dc815a5c50875b74cfd3daa3412bffd8adbf8fa7886fd";
    }

    public function getDebugInfo()
    {
        return array (  1401 => 1322,  1396 => 1198,  1391 => 1197,  1386 => 1196,  1381 => 1195,  1372 => 78,  1364 => 1322,  1239 => 1199,  1236 => 1198,  1233 => 1197,  1230 => 1196,  1228 => 1195,  107 => 78,  28 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "__string_template__ed04d348a9e1c6d3ae5dc815a5c50875b74cfd3daa3412bffd8adbf8fa7886fd", "");
    }
}
