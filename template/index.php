<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Template</title>


            <link href="assets/framework/Common.js" rel="stylesheet" type="text/css"/>
            <!-- assets/css/styles.css -->
            <link href="assets/js/dx/dx16.1.5/Lib/css/dx.common.css" rel="stylesheet" type="text/css"/>
            <link href="assets/js/dx/dx16.1.5/Lib/css/dx.light.css" rel="stylesheet" type="text/css"/>
            <link href="assets/js/dx/dx16.1.5/Lib/css/dx.light.compact.css" rel="stylesheet" type="text/css"/>

        </head>

        <!--    <body ng-app="app" ng-controller="controller as main">-->
        <body data-ng-app="app">
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
<script src="assets/js/dx/dx16.1.5/Lib/js/jszip.js" type="text/javascript"></script>
<script src="assets/js/dx/dx16.1.5/Lib/js/dx.viz-web.js" type="text/javascript"></script>

<!-- MODULES-->
<script src="app.routes.js" type="text/javascript"></script>
<script src="app.config.js" type="text/javascript"></script>
<script src="app.core.js" type="text/javascript"></script>
<script src="app.services.js" type="text/javascript"></script>
<!--<script src="app.controller.js" type="text/javascript"></script>-->
<script src="app.js" type="text/javascript"></script>

<!-- CONTROLLERS -->
<script src="sections/welcome/welcome.ctrl.js"></script>

<!--    Services -->
<script src="services/page.val.js"></script>
<!--        <script src="services/svc_api.js" type="text/javascript"></script>-->
</body>
</html>
