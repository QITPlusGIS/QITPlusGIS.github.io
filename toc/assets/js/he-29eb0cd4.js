import{d}from"./calcite-input-time-picker-37f96b30.js";import"./index-95bf5a29.js";import"./form-65dd0efd.js";import"./guid-40d04074.js";import"./interactive-3cbb41b8.js";import"./browser-14ab28bd.js";import"./key-a512d618.js";import"./label2-7a7d8c5a.js";import"./loadable-800481cb.js";import"./t9n-dbb6780d.js";import"./observers-92a9f80f.js";import"./focusTrapComponent-99566fe8.js";import"./icon-73f51977.js";import"./action-c895b192.js";import"./loader-1f5ff5e3.js";import"./input-70f092e0.js";import"./progress-0b0df895.js";import"./popover-8f403c0d.js";import"./openCloseComponent-fcccfe5c.js";import"./debounce-9700caea.js";import"./FloatingArrow-34b9d536.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */var _={s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:"%d שעות",hh2:"שעתיים",d:"יום",dd:"%d ימים",dd2:"יומיים",M:"חודש",MM:"%d חודשים",MM2:"חודשיים",y:"שנה",yy:"%d שנים",yy2:"שנתיים"};function Y(m,M,t){var r=_[t+(m===2?"2":"")]||_[t];return r.replace("%d",m)}var i={name:"he",weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"),months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split("_"),relativeTime:{future:"בעוד %s",past:"לפני %s",s:Y,m:Y,mm:Y,h:Y,hh:Y,d:Y,dd:Y,M:Y,MM:Y,y:Y,yy:Y},ordinal:function(M){return M},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"}};d.locale(i,null,!0);export{i as default};