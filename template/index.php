<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Template</title>


            <link href="assets/framework/Common.js" rel="stylesheet" type="text/css"/>
            <!-- assets/css/styles.css -->
<!--            <link href="assets/js/dx/dx16.1.5/Lib/css/dx.common.css" rel="stylesheet" type="text/css"/>-->
<!--            <link href="assets/js/dx/dx16.1.5/Lib/css/dx.light.css" rel="stylesheet" type="text/css"/>-->
<!--            <link href="assets/js/dx/dx16.1.5/Lib/css/dx.light.compact.css" rel="stylesheet" type="text/css"/>-->

            <link href="assets/css/dx.common.css" rel="stylesheet" type="text/css"/>
            <link href="assets/css/dx.light.compact.css" rel="stylesheet" type="text/css"/>
            <link href="assets/css/dx_theme.css" rel="stylesheet" type="text/css"/>
            <link href="assets/css/dx-custom.css" rel="stylesheet" type="text/css"/>

            <link href="assets/css/animate.css" rel="stylesheet" type="text/css"/>
            <link href="assets/css/loading-bar.css" rel="stylesheet" type="text/css"/>
            <link href="assets/css/bootstrap.min.css" rel="stylesheet">
            <!-- Style for this template-->
            <link href="assets/css/paper-dashboard.css" rel="stylesheet">
            <link href="assets/css/custom-paper.css" rel="stylesheet">
            <!--     Fonts and icons     -->
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
            <!-- Style for this template-->
            <link href="assets/css/paper-dashboard.css" rel="stylesheet">

        </head>



<!--        <div style="display: none !important;">-->
<!--            <h1>Analytics for Clover POS reporting analytics business intelligence </h1>-->
<!--            <h2>Analytics for Clover POS reporting analytics business intelligence </h2>-->
<!--            <h3>Analytics for Clover POS reporting analytics business intelligence </h3>-->
<!---->
<!--            <p>Analytics App provides MULTI-LOCATION, detailed and visual REPORTS, DASHBOARDS, COMMISSIONS and other business insights for managers and business owners. It is the must-have reporting web app: you can access it on any device via web browser, at any time. Reports: Multi-Location Customers Device Orders Overview (and Order Types) Trends , Day in a Week, Modifiers Report, Category, Item Label/ Tag Profit Overview, Item, SKU, Employee, Payment Type Dashboards: Today’s Performance, Day vs Day Performance, Revenue by hour, Month-to-date Performance, Category/Item Analysis Additional: - use Analytics to define Employees Commission percentages Please visit our support webpage on additional info about App Tiers. (http://businessq-software.com/analytics/) </p>-->
<!--        </div>-->
<!---->
<!--        <div class="background_image_login" style="height:100%">-->
<!--            <div style="margin: 0px 10px; font-size: 38pt;color: white; font-weight:700; padding-top:50px;padding-left:50px;">Analytics for Clover</div>-->
<!--            <div style="padding-left:50px;margin: 0px 10px;font-size: 9pt;color: white; font-weight:300">Powered by Qualia BusinessQ - data visualization and business intelligence software</div>-->
<!---->
<!--            <div style="margin-left:auto; margin-right:auto; margin-top:250px; padding:2em; text-align:center;">-->
<!--                In order to use the Analytics app you will have to log in at Clover website.<br>-->
<!--                "Login with Clover" button will lead you to Clover authentication.<br><br>-->
<!---->
<!--                <a class="btn clickMeButton" href="' . $urlNoCodeMerchant . '">Login with Clover</a>-->
<!---->
<!---->
<!--        <style>-->
<!--            html, body{-->
<!--                font-family:  "Museo500","Segoe UI","Helvetica Neue",Helvetica,Verdana,san-serif;-->
<!--            }-->
<!---->
<!--            @font-face{ font-family: "Museo500";-->
<!--                font-weight: 500;-->
<!--                font-weight: bold;-->
<!--                font-weight: normal;-->
<!--                src: url("assets/fonts/MuseoSans_500-webfont.ttf") format("truetype");-->
<!--            }-->
<!---->
<!--            .clickMeButton {-->
<!--                font-family:  "Museo500","Segoe UI","Helvetica Neue",Helvetica,Verdana,san-serif;-->
<!--                -moz-appearance: button;-->
<!--                -ms-appearance: button;-->
<!--                -o-appearance: button;-->
<!--                -webkit-appearance: button;-->
<!--                appearance: button;-->
<!--                text-decoration: none;-->
<!--                color: #000;-->
<!--                padding: 10px 10px;;-->
<!--                margin-top:5px;-->
<!--                border: none;-->
<!--                height: 30px;-->
<!--                cursor: pointer;-->
<!--                font-size: 16pt;-->
<!--                font-weight: 600;-->
<!--                min-width: 100px;-->
<!--                border-width: 0px;-->
<!--                background-color: #d9b310;-->
<!--                color: white;-->
<!--            }​-->
<!--             .clickMeButton:hover{-->
<!--                 background-color: #92d8ec;-->
<!--             //background-color: #e6dc9c;-->
<!--                 color: white;-->
<!--             }-->
<!--        </style>-->

        <!--    <body ng-app="app" ng-controller="controller as main">-->
        <body data-ng-app="app">
        <div class="wrapper ">
            <div class="sidebar" data-color="white" data-active-color="danger">
                <!--
                  Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
              -->
                <div class="logo">
                    <a href="http://www.creative-tim.com" class="simple-text logo-mini">
                        <div class="logo-image-small">
                            <img src="assets/img/commissions_favicon.png">
                        </div>
                    </a>
                    <a href="#Welcome" class="simple-text logo-normal">
                        Commission App
                        <!-- <div class="logo-image-big">
                          <img src="../assets/img/logo-big.png">
                        </div> -->
                    </a>
                </div>
                <div class="sidebar-wrapper">
                    <ul class="nav">
                        <li class="active ">
                            <a ui-sref="welcome">
                                <i class="nc-icon nc-bank"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <a ui-sref="settings">
                                <i class="nc-icon nc-settings"></i>
                                <p>Settings</p>
                            </a>
                        </li>
                        <li>
                            <a ui-sref="/search">
                                <i class="nc-icon nc-single-02"></i>
                                <p>Fixed/scaled settings</p>
                            </a>
                        </li>
                        <li>
                            <a href="#CategoriesSettings">
                                <i class="nc-icon nc-single-02"></i>
                                <p>Category settings</p>
                            </a>
                        </li>
                        <li>
                            <a href="#Report_RevenuePerEmployee">
                                <i class="nc-icon nc-paper"></i>
                                <p>Fixed/scaled report</p>
                            </a>
                        </li>
                        <li>
                            <a href="#Report_RevenuePerCategory">
                                <i class="nc-icon nc-single-copy-04"></i>
                                <p>Category Report</p>
                            </a>
                        </li>
                        <!--                    <li>-->
                        <!--                        <a href="./typography.html">-->
                        <!--                            <i class="nc-icon nc-caps-small"></i>-->
                        <!--                            <p>Typography</p>-->
                        <!--                        </a>-->
                        <!--                    </li>-->
                        <!--                    <li class="active-pro">-->
                        <!--                        <a href="./upgrade.html">-->
                        <!--                            <i class="nc-icon nc-spaceship"></i>-->
                        <!--                            <p>Upgrade to PRO</p>-->
                        <!--                        </a>-->
                        <!--                    </li>-->
                    </ul>
                </div>
            </div>
            <div class="main-panel">
                <!-- Navbar -->
                <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">
                            <div class="navbar-toggle">
                                <button type="button" class="navbar-toggler">
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <a class="navbar-brand" href="#pablo">{{merchantObject.name}}</a>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-bar navbar-kebab"></span>
                            <span class="navbar-toggler-bar navbar-kebab"></span>
                            <span class="navbar-toggler-bar navbar-kebab"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navigation">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link btn-magnify" href="mailto:clover@qualia.hr">
                                        <i class="nc-icon nc-email-85"></i>
                                        <p>
                                            <span class="d-lg-none d-md-block">Contact Us</span>
                                        </p>
                                    </a>
                                </li>
                                <li class="nav-item btn-rotate dropdown">
                                    <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="nc-icon nc-settings-gear-65"></i>
                                        <p>
                                            <span class="d-lg-none d-md-block">Settings</span>
                                        </p>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#GeneralSettings">General settings</a>
                                        <a class="dropdown-item" href="#EmployeesSettings">Fixed/scaled settings</a>
                                        <a class="dropdown-item" href="#CategoriesSettings">Category settings</a>
                                    </div>
                                </li>
                                <!--                            <li class="nav-item">-->
                                <!--                                <a class="nav-link btn-rotate" href="#pablo">-->
                                <!--                                    <i class="nc-icon nc-settings-gear-65"></i>-->
                                <!--                                    <p>-->
                                <!--                                        <span class="d-lg-none d-md-block">Account</span>-->
                                <!--                                    </p>-->
                                <!--                                </a>-->
                                <!--                            </li>-->
                            </ul>
                        </div>
                    </div>
                </nav>

        <!--        <header ng-if="showHeader" id="app-header">-->
        <!--            <div id="logo-header" ui-sref="welcome"></div>-->
        <!---->
        <!--            <div id="header">-->
        <!--                <div class="content">-->
        <!--                    <div class="menu" dx-menu="dxMenu"></div>-->
        <!--                    <div class="profileMenu" dx-menu="dxProfileMenu"></div>-->
        <!--                    -->
        <!--                </div>-->
        <!--            </div>-->
        <!--           -->
        <!--            -->
        <!--        </header>-->
        <!---->
        <!--        <div ng-if="showHeader" id="action-bar" style="">-->
        <!--            <div id="action-bar-title">{{pageTitle}}<div class="action-bar-title-content">{{entityName}}</div></div>-->
        <!--            <div id="buttons-bar">-->
        <!--                <div ng-repeat="button in buttons" class="buttons-bar-button">-->
        <!--                    <div dx-button="button"></div>-->
        <!--                </div>-->
        <!---->
        <!--            </div>-->
        <!--        </div>-->



        <section id="main">
            <div class="container">

                <div ui-view class="root-ui-view"></div>
            </div>
        </section>

<!--        <section id="site-bar" data-ng-controller="BarController as bar">-->
<!--            <div class="container">-->
<!--                <h1>{{bar.data.title}}</h1>-->
<!--                <p>{{bar.data.description}}</p>-->
<!--            </div>-->
<!--            <div class="page-loader" data-ng-show="bar.data.loading"><div class="throbber"></div></div>-->
<!--        </section>-->


        <!--        footer-->
        <footer class="footer footer-black  footer-white ">
            <div class="container-fluid">
                <div class="row">
                    <nav class="footer-nav">
                        <ul>
                            <li>
                                <a href="https://qualiadatasciences.com/" target="_blank"><img src="assets/img/powered_by_businessQ.png"/></a>
                            </li>
                            <li class="text-muted small">
                                {{powered_by_text}}
                            </li>
                            <li class="text-muted small">
                                <a href="https://qualiadatasciences.com/analytics-app-for-clover-privacy-policy/" target="_blank" style=text-decoration:underline;">{{Privacy_policy}}</a>
                            </li>
                            <li class="text-muted small">
                                <a href="https://qualiadatasciences.com/analytics-app-for-clover-eula/" target="_blank" style=text-decoration:underline;">EULA</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="credits ml-auto">
      <span class="copyright">
        ©
        <script>
          document.write(new Date().getFullYear())

        </script>, made with <i class="fa fa-heart heart"></i> by <a href="https://qualiadatasciences.com/">QualiaDataSciences</a>
      </span>
                    </div>
                </div>
            </div>
        </footer>

<!--        <div ui-view class="root-ui-view"></div>-->



<!--    </div>-->

<!--    <div id="modal" ng-show="blockUI" class="animate-show">-->
<!--        <div id="modalBackground"></div>-->
<!--        <div id="modalContent">-->
<!--<!--            <div class="spinner">-->
<!--                <div class="cube1"></div>-->
<!--                <div class="cube2"></div>-->
<!--            </div>-->
<!--            <div class="spinner">-->
<!--                <div class="dot1"></div>-->
<!--                <div class="dot2"></div>-->
<!--            </div>-->
<!--            <div class="modal-msg">{{blockMsg}}</div>-->
<!--        </div>-->
<!--    </div>-->

<!--<q-toast></q-toast>-->
<!--<q-popup></q-popup>-->

<!-- ASSETS-->
<script src="assets/js/angular/angular1.3.15.min.js" type="text/javascript"></script>
<script src="assets/js/angular/angular-animate1.3.15.min.js" type="text/javascript"></script>
<script src="assets/js/angular/angular-sanitize1.3.15.min.js" type="text/javascript"></script>
<script src="assets/js/angular/angular-ui-router-0.2.13.js" type="text/javascript"></script>

<!-- Third Party Libraries -->
<script src="assets/js/jquery/jquery-2.1.3.min.js" type="text/javascript"></script>
<script src="assets/js/jquery/jquery-ui-1.10.4.custom.min.js" type="text/javascript"></script>
<!--        <script src="lib/ngStorage.min.js" type="text/javascript"></script>-->
<script src="assets/js/angular/angular-jwt.js" type="text/javascript"></script>
<script src="assets/js/thirdp/loading-bar.js" type="text/javascript"></script>

<!--<script src="assets/js/dx/dx16.1.5/Lib/js/jszip.js" type="text/javascript"></script>-->
<!--<script src="assets/js/dx/dx16.1.5/Lib/js/dx.viz-web.js" type="text/javascript"></script>-->
<script src="assets/js/dx/dx17.1.8/Lib/js/jszip.min.js" type="text/javascript"></script>
<script src="assets/js/dx/dx17.1.8/Lib/js/dx.viz-web.js" type="text/javascript"></script>

<!-- MODULES-->
<script src="app.routes.js" type="text/javascript"></script>
<script src="app.config.js" type="text/javascript"></script>
<script src="app.core.js" type="text/javascript"></script>
<script src="app.services.js" type="text/javascript"></script>
<!--<script src="app.controller.js" type="text/javascript"></script>-->
<script src="app.js" type="text/javascript"></script>

<!-- CONTROLLERS -->
<script src="sections/welcome/welcome.ctrl.js"></script>
<script src="sections/search/search.ctrl.js"></script>
<script src="sections/settings/settings.ctrl.js"></script>
<script src="components/bar/bar.ctrl.js"></script>

<!--    Services -->
<script src="services/page.val.js"></script>
<!--        <script src="services/svc_api.js" type="text/javascript"></script>-->

<!--DIRECTIVES                -->
<script src="directives/ngEnter.drct.js"></script>


</body>
</html>
