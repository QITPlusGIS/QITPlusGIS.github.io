import{aD as v,aE as E}from"./index-285b86bc.js";function L(n){return n!=null&&n.timeZoneIANA?n==null?void 0:n.timeZoneIANA:n!=null&&n.timeZone?E(n,""):""}class s{constructor(){this.dateTimeReferenceMetaData=null,this._fieldTimeZoneIndex={},this._fieldIndex=null,this._ianaPreferred=null,this._ianaTimeInfo=null,this._ianaEditFields=null,this._ianaLayerDateFields=null}static create(e,t){const i=new s;return i.dateTimeReferenceMetaData=t,i._fieldIndex=e instanceof v?e:new v(e),i}static createFromLayer(e){var i,a,r,d;if(!e)return null;if(!e.fieldsIndex)return!e.declaredClass&&e.fields?s.create(e.fields,e):null;const t=new s;return t._fieldIndex=e.fieldsIndex,t.dateTimeReferenceMetaData={timeInfo:((i=e==null?void 0:e.timeInfo)==null?void 0:i.toJSON())??null,editFieldsInfo:((a=e==null?void 0:e.editFieldsInfo)==null?void 0:a.toJSON())??null,dateFieldsTimeReference:((r=e==null?void 0:e.dateFieldsTimeReference)==null?void 0:r.toJSON())??null,preferredTimeReference:((d=e==null?void 0:e.preferredTimeReference)==null?void 0:d.toJSON())??null,datesInUnknownTimezone:(e==null?void 0:e.datesInUnknownTimezone)===!0},t}fieldTimeZone(e){var d,o,l,m,c,T,h,I,u,R,D,F,_,M,w,A,k,y,N,Z,x,z,U;const t=(d=this._fieldIndex)==null?void 0:d.get(e);if(!t||t.type!=="date"&&t.type!=="esriFieldTypeDate")return null;const i=this._fieldTimeZoneIndex[t.name];if(i!==void 0)return i;const a=[{field:(l=(o=this.dateTimeReferenceMetaData)==null?void 0:o.editFieldsInfo)==null?void 0:l.creationDateField,timeReference:(c=(m=this.dateTimeReferenceMetaData)==null?void 0:m.editFieldsInfo)==null?void 0:c.dateFieldsTimeReference,isunknown:((T=this.dateTimeReferenceMetaData)==null?void 0:T.datesInUnknownTimezone)===!0},{field:(I=(h=this.dateTimeReferenceMetaData)==null?void 0:h.editFieldsInfo)==null?void 0:I.editDateField,timeReference:(R=(u=this.dateTimeReferenceMetaData)==null?void 0:u.editFieldsInfo)==null?void 0:R.dateFieldsTimeReference,isunknown:((D=this.dateTimeReferenceMetaData)==null?void 0:D.datesInUnknownTimezone)===!0},{field:(_=(F=this.dateTimeReferenceMetaData)==null?void 0:F.timeInfo)==null?void 0:_.startTimeField,timeReference:(w=(M=this.dateTimeReferenceMetaData)==null?void 0:M.timeInfo)==null?void 0:w.timeReference,isunknown:((A=this.dateTimeReferenceMetaData)==null?void 0:A.datesInUnknownTimezone)===!0},{field:(y=(k=this.dateTimeReferenceMetaData)==null?void 0:k.timeInfo)==null?void 0:y.endTimeField,timeReference:(Z=(N=this.dateTimeReferenceMetaData)==null?void 0:N.timeInfo)==null?void 0:Z.timeReference,isunknown:((x=this.dateTimeReferenceMetaData)==null?void 0:x.datesInUnknownTimezone)===!0}];for(const f of a)if(f.field===t.name){const p=this.convertToIANA(f.timeReference,f.isunknown);return this._fieldTimeZoneIndex[t.name]=p,p}const r=this.convertToIANA((z=this.dateTimeReferenceMetaData)==null?void 0:z.dateFieldsTimeReference,(U=this.dateTimeReferenceMetaData)==null?void 0:U.datesInUnknownTimezone);return this._fieldTimeZoneIndex[t.name]=r,r}convertToIANA(e,t){return t?"unknown":L(e)}get layerPreferredTimeZone(){var t,i;if(this._ianaPreferred!==null)return this._ianaPreferred;this._ianaPreferred="";const e=(t=this.dateTimeReferenceMetaData)==null?void 0:t.preferredTimeReference;return this._ianaPreferred=this.convertToIANA(e,((i=this.dateTimeReferenceMetaData)==null?void 0:i.datesInUnknownTimezone)===!0),this._ianaPreferred}get layerTimeInfoTimeZone(){var t,i;if(this._ianaTimeInfo!==null)return this._ianaTimeInfo;this._ianaTimeInfo="";const e=(i=(t=this.dateTimeReferenceMetaData)==null?void 0:t.timeInfo)==null?void 0:i.timeReference;return this._ianaTimeInfo=this.convertToIANA(e,!1),this._ianaTimeInfo}get layerEditFieldsTimeZone(){var t,i,a;if(this._ianaEditFields!==null)return this._ianaEditFields;this._ianaEditFields="";const e=(i=(t=this.dateTimeReferenceMetaData)==null?void 0:t.editFieldsInfo)==null?void 0:i.dateFieldsTimeReference;return this._ianaEditFields=this.convertToIANA(e,(a=this.dateTimeReferenceMetaData)==null?void 0:a.datesInUnknownTimezone),this._ianaEditFields}get layerDateFieldsTimeZone(){var t,i;if(this._ianaLayerDateFields!==null)return this._ianaLayerDateFields;this._ianaLayerDateFields="";const e=(t=this.dateTimeReferenceMetaData)==null?void 0:t.dateFieldsTimeReference;return this._ianaLayerDateFields=this.convertToIANA(e,((i=this.dateTimeReferenceMetaData)==null?void 0:i.datesInUnknownTimezone)===!0),this._ianaLayerDateFields}}export{s as T};