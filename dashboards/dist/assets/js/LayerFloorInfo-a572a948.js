import{a as l,y as o,R as t,V as s,c as d}from"./uuid-854440a9.js";var i;let e=i=class extends t{constructor(r){super(r),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new s}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};l([o({type:String,json:{write:!0}})],e.prototype,"floorField",void 0),l([o({json:{read:!1,write:!1}})],e.prototype,"viewAllMode",void 0),l([o({json:{read:!1,write:!1}})],e.prototype,"viewAllLevelIds",void 0),e=i=l([d("esri.layers.support.LayerFloorInfo")],e);const n=e;export{n as p};