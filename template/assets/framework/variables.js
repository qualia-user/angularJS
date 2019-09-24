/**
 * Created by miha on 07.04.2015 18:39.
 */

var DEFAULT_LANGUAGE = "en";

var ADMIN_MODULE_ID = "2";
var BI_MODULE_ID = "1";
var PM_MODULE_ID = "3";
var SALES_MODULE_ID = "4";
var VM_MODULE_ID = "5";
var VENDOR_MODULE_ID = "6";
var INVOICE_MODULE_ID = "7";
var INHOUSE_TRANSLATORS_MODULE_ID = "8";
var HUMAN_RESOURCES_MODULE_ID = "9";
var VENDOR_INVOICE_MODULE_ID = "10";
var WORKLOG_MODULE_ID = "11";
var ORGANIZATION_MODULE_ID = "12";
var MANUALS_MODULE_ID = "13";

var HEADER_HEIGHT = 170;
var TABS_HEIGHT = 45;

var SEX = [
    {id: "M", name: Globalize.localize("sexMale")},
    {id: "F", name: Globalize.localize("sexFemale")}
];

var defaultdxChartObj = {
    commonSeriesSettings: {
        point: {size: 1, fillOpacity: "0.35"},
        width: 3,
        hoverStyle: {
            width: 6,
            border: {width: 3, color: "#ffffff", visible: true},
            hatching: {direction: 'left', opacity: 0.1, width: 4, step: 8}
        }
    },
//        series: valueFields,
    commonAxisSettings: {
        label: {font: {color: "#444444", size: 11}}
    },
    argumentAxis: {
        color: "#eeeeee",
        // placeholderSize: 120,
        width: 2,
        hoverMode: "allArgumentPoints",
        grid: {visible: false, color: "#eeeeee", opacity: 0.5},
        label: {font: {color: "#444444", size: 11}, "overlappingBehavior": {"mode": 'rotate'},
        customizeText: function () {
                if (this.value.length < 20) {
                    return this.value;
                } else {
                    return this.value.substring(0, 19) + '...';
                }

            }},
        inverted: true
    },
    valueAxis: {
        grid: {visible: true, color: "#eeeeee", opacity: 0.5},
        tick: {visible: true, opacity: 0.8},
        label: {font: {color: "#444444", size: 11}, format: 'largeNumber'},
        title: {text: ""},
        // min: -5,
        showZero: true
    },
    legend: {
        visible: true,
        verticalAlignment: "top",
        horizontalAlignment: "right",
        //  columnCount: 1,
        // rowCount : 20,
        rowItemSpacing: 4,
        margin: 10,
        markerSize: 14,
        orientation: "horizontal",
        position: "inside",
        //  backgroundColor: "#f9f9f9",
        paddingTopBottom: 3,
        border: {
            visible: false,
            color: '#f5f5f5',
            cornerRadius: 3,
            opacity: 0.9,
            width: 2
        }
    },
    animation: {
        duration: 700,
        easing: 'linear'
    },
    tooltip: {
        enabled: true, format: 'fixedPoint', precision: 2,
        arrowLength: 10,
        //    color: "#ffffff", opacity: 0.3,
        font: {
            weight: 400,
            size: 12

        },
        customizeTooltip: function (point) {
//             console.log("*******************************1");
//             console.log(point);
            return {text: point.argumentText + " , " + point.seriesName + ": " + point.valueText};
        }


    },
    loadingIndicator: {
        text: "Creating a chart..."
    }
};

function localizeVariables() {
    SEX = [
        {id: "M", name: Globalize.localize("sexMale")},
        {id: "F", name: Globalize.localize("sexFemale")}
    ];
}

var DEBUG = true;
if(!DEBUG){
    if(!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        console[methods[i]] = function(){};
    }
}




function getDefinitionIconClass(definition) {
    if (definition.type == 'dimension') {
        if (definition.subtype == 'date') {
            return 'dateIcon';
        } else {
            return 'dimensionIcon';
        }
    }
    else {
        return 'measureIcon';
    }
}


// DIFFERENT USEFUL FUNCTIONS

function getElementStyleColor(definition) {
    if (definition.type == 'dimension') {
        return '#1479a8';
    }
    else if (definition.subtype == 'date') {
        return '#1479a8';
    } else {
        return '#9a8a22';
    }
}
;
function getElementStyleBackgroundColor(definition) {
    if (definition.type == 'dimension') {
        return '#e4f3fa';
    }
    else if (definition.subtype == 'date') {
        return '#e4f3fa';
    } else {
        return '#f5efc9';
    }
}
;
