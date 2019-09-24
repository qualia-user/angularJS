/**
 * Created by miha on 07.04.2015 18:56.
 */

app.service("svcQUI", ["$rootScope", function($rootScope) {

    // clear things on route change
    this.onRouteChanged = function() {
        this.setPageTitle("");
        this.removeAllButtons();
    };

    this.showHeader = function() {
        $rootScope.showHeader = true;
    };

    this.hideHeader = function() {
        $rootScope.showHeader = false;
    };

    // toast
    this.showToastSuccess = function(message, displayTime) {
        this.unblockUI();
        //$rootScope.showToastSuccess(message, displayTime);
        DevExpress.ui.notify({
            message: message,
            type: 'success',
            displayTime: displayTime || 3000,
            position: {
                my: ' center',
                at: ' center',
                of: window,
                offset: '0 0'
            },
            width: '500px'
        });
    };

    this.showToastInfo = function(message, displayTime) {
        this.unblockUI();
        //$rootScope.showToastInfo(message, displayTime);
        DevExpress.ui.notify({
            message: message,
            type: 'info',
            displayTime: displayTime || 3000,
            position: {
                my: ' center',
                at: ' center',
                of: window,
                offset: '0 0'
            },
            width: '500px'
        });
    };

    this.showToastWarning = function(message, displayTime) {
        this.unblockUI();
        //$rootScope.showToastWarning(message, displayTime);
        DevExpress.ui.notify({
            message: message,
            type: 'warning',
            displayTime: displayTime || 3000,
            position: {
                my: ' center',
                at: ' center',
                of: window,
                offset: '0 0'
            },
            width: '500px'
        });
    };

    this.showToastError = function(message, displayTime) {
        this.unblockUI();
        //$rootScope.showToastError(message, displayTime);
        DevExpress.ui.notify({
            message: message,
            type: 'error',
            displayTime: displayTime || 3000,
            position: {
            my: ' center',
                at: ' center',
                of: window,
                offset: '0 0'
            },
            width: '500px'
        });
    };

    // popup
    this.showPopup = function (content, title, onClose, closeOnOutsideClick, fullscreen, height, width) {
        this.unblockUI();
            console.log("showPopup");
        $rootScope.showPopup(content, title, onClose, closeOnOutsideClick, fullscreen, height, width);
    };

    this.showPopupError = function (error, okFunction) {
        this.unblockUI();
        console.log("showPopupE", error);
        //console.log("showPopupError");
        //console.log(error);

        var errorMsg = "";
        error = error.toString();

        switch (error) {
            case "1": errorMsg = Globalize.localize("internalServerError");
                break;
            case "2": errorMsg = Globalize.localize("invalidAPICall");
                break;
            case "3": errorMsg = Globalize.localize("invalidArguments");
                break;
            case "4": errorMsg = Globalize.localize("infoNotFound");
                break;
            case "5": errorMsg = Globalize.localize("invalidInfo");
                break;
            case "6": errorMsg = Globalize.localize("userExists");
                break;
            case "7": errorMsg = Globalize.localize("invalidUsernameOrPass");
                break;
            case "8": errorMsg = Globalize.localize("oibExists");
                break;
            case "9": errorMsg = Globalize.localize("entityInUse");
                break;
            case "10": errorMsg = Globalize.localize("projectOnAnotherInvoice");
                break;
            case "11": errorMsg = Globalize.localize("invoiceWithoutProjects");
                break;
            case "12": errorMsg = Globalize.localize("employeeIsLeader");
                break;
            case "13": errorMsg = Globalize.localize("errorSendingEmail");
                break;
            case "14": errorMsg = Globalize.localize("errorSendingEmailUser");
                break;
            case "19": errorMsg = Globalize.localize("errorResetingPasswordUserType");
                break;

            default:
                errorMsg = error;
        }
       
            $rootScope.showPopup(errorMsg, Globalize.localize("error"), okFunction);
        
        
    };

    this.showPopupQuestion = function (content, title, onConfirm, onDecline, fullscreen, height, width) {
        this.unblockUI();
        $rootScope.showPopupQuestion(content, title, onConfirm, onDecline, fullscreen, height, width);
    };

    // page title changer
    this.setPageTitle = function(pageTitle, entityName) {
        if (angular.isDefined(entityName)) {
            $rootScope.pageTitle = pageTitle + ":";
            $rootScope.entityName = entityName;
                console.log("defined!", entityName);
        } else {
            $rootScope.pageTitle = pageTitle;
            $rootScope.entityName = "";
        }

    };

    // UI blocker
    this.blockUI = function(msg) {
        $rootScope.blockUI(msg);
    };

    this.unblockUI = function() {
        $rootScope.unblockUI();
    };

    // Buttons controller
    var buttons = [];
    this.removeAllButtons = function () {
        buttons = [];
        $rootScope.setButtons(buttons);
    };

    this.addSuccessButton = function(text, onClick, icon) {
        buttons.push({
            text: text,
            type: "success",
            onClick: onClick,
            icon: icon
        });
        $rootScope.setButtons(buttons);
    };

    this.addDangerButton = function(text, onClick, icon) {
        buttons.push({
            text: text,
            type: "default",
            onClick: onClick,
            icon: icon
        });
        $rootScope.setButtons(buttons);
    };

    this.addDefaultButton = function(text, onClickFunction, icon) {
        buttons.push({
            text: text,
            type: "default",
            onClick: onClickFunction,
            icon: icon
        });
        $rootScope.setButtons(buttons);
    };

}]);