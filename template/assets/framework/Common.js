/**
 * @license BusinessQ  v1-27.8.14-1
 * (c) 2010-2014 Qualia d.o.o. Zagreb-Croatia, www.qualia.hr
 * All rights reserved
 */

function onStart() {
//     var m_names = new Array("January", "February", "March",
//     "April", "May", "June", "July", "August", "September",
//     "October", "November", "December");
//    var m_names = new Array("Sij", "Velj", "Ožu",
//            "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj",
//            "Lis", "Stu", "Pro");
    var m_names = new Array("Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec");
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    document.getElementById('currentDate').innerHTML = curr_date + "-" + m_names[curr_month]
            + "-" + curr_year;

}


/**
 * 
 * @param {type} name
 * @param {type} parent
 * @returns {unresolved}
 */
function getURLParam(name, parent) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results;
    if (parent === true)
        results = regex.exec(window.parent.location.href);
    else
        results = regex.exec(window.location.href);
    if (results == null)
        return null;
    else
        return decodeURIComponent(results[1]);
}

/**
 * 
 * @param {type} stringToEncode
 * @returns {unresolved}
 */
function encodeXML(stringToEncode) {
    return stringToEncode.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
}

/**
 * 
 * @param {type} stringToDecode
 * @returns {unresolved}
 */
function decodeXML(stringToDecode) {
    return stringToDecode.replace(/&apos;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<')
            .replace(/&amp;/g, '&');
}


/**
 * 
 * @param {type} arr
 * @param {type} measure
 * @returns {unresolved}
 */
function addMissingHours(arr, measure, market) {
    console.log("addMissingHours", arr, measure);
    for (var i = 0; i < 24; i++) {
        var hour = "";
        if (i < 10)
            hour = "0" + i;
        else
            hour = "" + i;
        if(market === "EU"){
            // do nothing
        }else{
            hour = transform_hour_to_AM_PM(hour);
        }
        var obj = new Object();
        obj["hour"] = hour;
        obj[measure + "_SUM"] = 0;
        obj[measure + "_AVG"] = 0;
        obj[measure + "_COUNT"] = 0;
        arr.push(obj);
    }
    //  console.log("addMissingHours");
    //  console.log(arr);
    // var ret =  groupDataByValue(arr, "hour", "priceD_SUM");

    return arr;
}


function transform_hour_to_AM_PM(hour_orig){
    var hour_return = hour_orig;
    switch (hour_orig) {
        case '00': hour_return = '00 (12AM)'; break;
        case '01': hour_return = '01 (1AM)'; break;
        case '02': hour_return = '02 (2AM)'; break;
        case '03': hour_return = '03 (3AM)'; break;
        case '04': hour_return = '04 (4AM)'; break;
        case '05': hour_return = '05 (5AM)'; break;
        case '06': hour_return = '06 (6AM)'; break;
        case '07': hour_return = '07 (7AM)'; break;
        case '08': hour_return = '08 (8AM)'; break;
        case '09': hour_return = '09 (9AM)'; break;
        case '10': hour_return = '10 (10AM)'; break;
        case '11': hour_return = '11 (11AM)'; break;
        case '12': hour_return = '12 (12PM)'; break;
        case '13': hour_return = '13 (1PM)'; break;
        case '14': hour_return = '14 (2PM)'; break;
        case '15': hour_return = '15 (3PM)'; break;
        case '16': hour_return = '16 (4PM)'; break;
        case '17': hour_return = '17 (5PM)'; break;
        case '18': hour_return = '18 (6PM)'; break;
        case '19': hour_return = '19 (7PM)'; break;
        case '20': hour_return = '20 (8PM)'; break;
        case '21': hour_return = '21 (9PM)'; break;
        case '22': hour_return = '22 (10PM)'; break;
        case '23': hour_return = '23 (11PM)'; break;
        case '24': hour_return = '24 (12AM)'; break;
    }
    return hour_return;
}

/**
 * 
 * @param {type} date
 * @returns {String}
 */
function dateToYYYYMMDD(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();
    //  console.log(yyyy + (mm[1] ? mm : "0" + mm[0]) + (dd[1] ? dd : "0" + dd[0]));
    return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]);
}


/**
 * 
 * @param {type} arr
 * @param {type} fromDate
 * @param {type} untilDate
 * @returns {undefined}
 */
function addMissingDates(arr, fromDate, untilDate){
  //  console.log("addMissingDates");
    var ret = arr.slice(0);
    var tmpDate = new Date(fromDate);
//    console.log(fromDate);
//    console.log(untilDate);
//    console.log(tmpDate);
//    console.log("----------------------------------------") 
     for (var i = 0; i < 30; i++) {
         tmpDate.setDate(tmpDate.getDate() + 1);
         var obj = new Object();
         obj["date"] = dateToYYYYMMDD(tmpDate);
         obj["priceD"] = 0;
         ret.push(obj);
       //  console.log(tmpDate);
         if (tmpDate.getDate() === untilDate.getDate()) {
        //    console.log("!!!!!!!!!!!!!!") 
            break;
         }
     }
  //  console.log(arr);
  return ret;
}



/**
 * 
 * @param {string} message - message to show on uiblock
 * @returns {undefined}
 */
function addBlockUI(message, noOpacity) {
    
    var opacity = 0.85;
    var overlayCSS = {backgroundColor: '#063a5d'};
    if (noOpacity) {
        overlayCSS = {opacity: 0};
    }
    
    $.blockUI({
        message: '<div style=" font-family: Segoe UI;font-size: 13pt; font-weight:400;color:#222222; padding-top:0px; padding-left:10px"><div><img style="margin-right:0px;padding-top:0px;height:40px" src="assets/box.gif" /></div>' + message + '</div>',
        css: {
            border: 'none',
            padding: '5px',
            backgroundColor: '#fff',
            'border-radius': '4px',
            '-webkit-border-radius': '4px',
            '-moz-border-radius': '4px',
            opacity: opacity,
            color: '#fff'
        },
         overlayCSS: { backgroundColor: '#444' }
    });
}





/* returns last item with matching value

     args:

      array - array containing objects
      value - search value of object
      attribute name - attribute to search

     example:
        svcTools.getItemFromArray(cityList, 'Zagreb', 'name')
    */

    this.getItemFromArray = function(array, value, attributeName) {
        var matchingItem = undefined;

        if (angular.isDefined(attributeName)) {
            angular.forEach(array, function(item) {
                if (angular.equals(item[attributeName], value)) matchingItem = item;
            })

        } else {
            angular.forEach(array, function(item) {
                if (angular.equals(item, value)) matchingItem = item;
            })
        }

        return matchingItem;
    };
    
    
var LIST_EXPORT_FILE_TYPES = [
    {text: 'Print', type:"print"},
    {text: 'PNG', type:"png"},
    {text: 'PDF', type:"pdf"},
    {text: 'JPEG', type:"jpeg"},
    {text: 'SVG', type:"svg"},
    {text: 'GIF', type:"gif"}
];  


function getSameDayLastYear(date){ 
    var todaysDayInWeek = moment(date).format('e');        
    var lastYearDate = moment(date).subtract(1, 'year').format("YYYY-MM-DD");
    var LastYearDayInWeek = moment(lastYearDate).format('e');
    
    if (todaysDayInWeek === LastYearDayInWeek){
        // Mjesec treba umanjiti za 1 jer se u PHP-u dodaje jedan mjesec jer u J-u mjeseci počinju od nule
        lastYearDate = moment(lastYearDate).subtract(1, 'months').format("YYYY-MM-DD");
        return lastYearDate.format("YYYY-MM-DD");
    }
    else {
        var option1 = Math.abs(todaysDayInWeek - LastYearDayInWeek);
        
        if (todaysDayInWeek > LastYearDayInWeek){
           var option2 = 7 - parseInt(todaysDayInWeek) + parseInt(LastYearDayInWeek);  
           
           if (option1 < option2){
                lastYearDate = moment(lastYearDate).add(option1, 'days').format("YYYY-MM-DD");
            }
            else {
                lastYearDate = moment(lastYearDate).subtract(option2, 'days').format("YYYY-MM-DD");
            }
        }
        else {
            var option2 = 7 + parseInt(todaysDayInWeek) - parseInt(LastYearDayInWeek);
           
            if (option1 < option2){
                lastYearDate = moment(lastYearDate).subtract(option1, 'days').format("YYYY-MM-DD");
            }
            else {
                lastYearDate = moment(lastYearDate).add(option2, 'days').format("YYYY-MM-DD");
            }
        }
        
        // Mjesec treba umanjiti za 1 jer se u PHP-u dodaje jedan mjesec jer u JS-u mjeseci počinju od nule
        lastYearDate = moment(lastYearDate).subtract(1, 'months').format("YYYY-MM-DD");
        return lastYearDate; 
    }  
}

function getSameDayLastWeek(date){ 
    var lastWeekDate = moment(date).subtract(7, 'days').format("YYYY-MM-DD");
    
    // Mjesec treba umanjiti za 1 jer se u PHP-u dodaje jedan mjesec jer u JS-u mjeseci počinju od nule
    lastWeekDate = moment(lastWeekDate).subtract(1, 'months').format("YYYY-MM-DD");
    return lastWeekDate;
}


