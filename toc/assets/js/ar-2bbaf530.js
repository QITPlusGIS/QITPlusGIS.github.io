import{d as p}from"./calcite-input-time-picker-1a5e91ea.js";import"./index-285b86bc.js";import"./form-4d5eabbc.js";import"./guid-40d04074.js";import"./interactive-3cbb41b8.js";import"./browser-14ab28bd.js";import"./key-a512d618.js";import"./label2-c4db6a6d.js";import"./loadable-800481cb.js";import"./t9n-308b4fd8.js";import"./observers-dd39161b.js";import"./focusTrapComponent-b13bdf56.js";import"./icon-e926e068.js";import"./action-4c314e4d.js";import"./loader-bf785c96.js";import"./input-03032bd3.js";import"./progress-745ef387.js";import"./popover-567a095e.js";import"./openCloseComponent-4e8fd990.js";import"./debounce-9700caea.js";import"./FloatingArrow-4bd0c04d.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */var o="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),e={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},i={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},_={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:o,monthsShort:o,weekStart:6,relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function(r){return r.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(t){return i[t]}).replace(/،/g,",")},postformat:function(r){return r.replace(/\d/g,function(t){return e[t]}).replace(/,/g,"،")},ordinal:function(r){return r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};p.locale(_,null,!0);export{_ as default};