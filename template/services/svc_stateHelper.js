/**
 * Created by miha on 09.07.15..
 */

app.service('svcStateHelper', [function () {

    var lastState = "",
        lastParams = {},
        saveState = true;

    // clear things on route change
    this.saveLastState = function(fromState, fromParams) {

        if (saveState) {
            lastState = fromState;
            lastParams = fromParams;
        } else {
            saveState = true;
        }

    };

    this.getLastStateName = function () {
        return "";
        //return lastState.name;
    };

    this.getLastStateParams = function () {
        return lastParams;
    };

    this.doNotSaveState = function () {
        saveState = false;
    }

}]);