import{d as i}from"./calcite-input-time-picker-37f96b30.js";import"./index-95bf5a29.js";import"./form-65dd0efd.js";import"./guid-40d04074.js";import"./interactive-3cbb41b8.js";import"./browser-14ab28bd.js";import"./key-a512d618.js";import"./label2-7a7d8c5a.js";import"./loadable-800481cb.js";import"./t9n-dbb6780d.js";import"./observers-92a9f80f.js";import"./focusTrapComponent-99566fe8.js";import"./icon-73f51977.js";import"./action-c895b192.js";import"./loader-1f5ff5e3.js";import"./input-70f092e0.js";import"./progress-0b0df895.js";import"./popover-8f403c0d.js";import"./openCloseComponent-fcccfe5c.js";import"./debounce-9700caea.js";import"./FloatingArrow-34b9d536.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */var m={name:"bg",weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekStart:1,ordinal:function(t){var _=t%100;if(_>10&&_<20)return t+"-ти";var r=t%10;return r===1?t+"-ви":r===2?t+"-ри":r===7||r===8?t+"-ми":t+"-ти"},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"}};i.locale(m,null,!0);export{m as default};