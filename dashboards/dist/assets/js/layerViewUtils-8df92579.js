function a(e){return t=>{t.hasOwnProperty("_delegatedEventNames")||(t._delegatedEventNames=t._delegatedEventNames?t._delegatedEventNames.slice():[]);const n=t._delegatedEventNames,r=Array.isArray(e)?e:s(e);n.push(...r)}}function s(e){return e.split(",").map(t=>t.trim())}function d(e){return e&&typeof e.highlight=="function"}export{a as e,d as n};