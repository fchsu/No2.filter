webpackJsonp([1],{FGW6:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s={name:"App",data:function(){return{allTravelData:[],allZone:[],categories:["全部","免費參觀","全天候開放"],categoriesJson:[" ","Ticketinfo","Opentime"],filterData:[],travelData:[],totalSelect:[0,!1,!1,!1],zone:[],noData:[{Ticketinfo:"",Zone:"",Px:"",Py:"",Add:"",Gov:"",Class2:"",Class1:"",Website:"",Opentime:"",Description:"",Remarks:"",Parkinginfo_py:"",Parkinginfo_px:"",Name:"",Level:"",Picture1:"",Toldescribe:"",Changetime:"",Tel:"",Picdescribe1:"",Travellinginfo:"",_id:"",Id:""}]}},mounted:function(){var t=this;t.$http.get("../../static/json/data.JSON").then(function(e){4===e.request.readyState&&200===e.request.status&&(t.allTravelData=JSON.parse(e.request.responseText),t.allTravelData.forEach(function(e,a,i){t.zone.push(e.Zone),t.travelData.push(e)}),t.allZone=t.zone.filter(function(t,e,a){return a.indexOf(t)==e}),t.$bus.$emit("updated",t.travelData),t.$bus.$emit("label",t.totalSelect),console.log("json get"))}).catch(function(t){console.log("error.response")})},methods:{filterZone:function(t){" "===t.target.value?(this.totalSelect.splice(0,1,"0"),this.travelFilter()):(this.totalSelect.splice(0,1,t.target.value),this.travelFilter())},checkOnOff:function(t){switch(t){case 0:0==this.totalSelect[1]?(this.totalSelect.splice(1,1,!0),this.totalSelect.splice(2,1,!0),this.totalSelect.splice(3,1,!0),this.travelFilter()):(this.totalSelect.splice(1,1,!1),this.totalSelect.splice(2,1,!1),this.totalSelect.splice(3,1,!1),this.travelFilter());break;case 1:1==this.totalSelect[2]?(this.totalSelect.splice(1,1,!1),this.totalSelect.splice(2,1,!1),this.travelFilter()):(this.totalSelect.splice(2,1,!0),this.travelFilter());break;case 2:1==this.totalSelect[3]?(this.totalSelect.splice(1,1,!1),this.totalSelect.splice(3,1,!1),this.travelFilter()):(this.totalSelect.splice(3,1,!0),this.travelFilter())}},travelFilter:function(){var t=this;if(0==this.totalSelect[0])switch(this.travelData.length=0,this.filterData.length=0,this.allTravelData.forEach(function(e,a,i){t.travelData.push(e)}),this.totalSelect.filter(function(t,e,a){return e>0}).join(" ")){case"true true true":this.filterData=this.travelData.filter(function(e,a,i){return e[t.categoriesJson[1]]==t.categories[1]&&e[t.categoriesJson[2]]==t.categories[2]}),0==this.filterData.length?this.$bus.$emit("updated",this.noData):(this.$bus.$emit("updated",this.filterData),this.$bus.$emit("label",this.totalSelect));break;case"false false false":0==this.travelData.length?this.$bus.$emit("updated",this.noData):(this.$bus.$emit("updated",this.travelData),this.$bus.$emit("label",this.totalSelect));break;case"false false true":this.filterData=this.travelData.filter(function(e,a,i){return e[t.categoriesJson[2]]==t.categories[2]}),0==this.filterData.length?this.$bus.$emit("updated",this.noData):(this.$bus.$emit("updated",this.filterData),this.$bus.$emit("label",this.totalSelect));break;case"false true true":this.filterData=this.travelData.filter(function(e,a,i){return e[t.categoriesJson[1]]==t.categories[1]&&e[t.categoriesJson[2]]==t.categories[2]}),0==this.filterData.length?this.$bus.$emit("updated",this.noData):(this.$bus.$emit("updated",this.filterData),this.$bus.$emit("label",this.totalSelect));break;case"false true false":this.filterData=this.travelData.filter(function(e,a,i){return e[t.categoriesJson[1]]==t.categories[1]}),0==this.filterData.length?this.$bus.$emit("updated",this.noData):(this.$bus.$emit("updated",this.filterData),this.$bus.$emit("label",this.totalSelect))}else switch(this.travelData.length=0,this.filterData.length=0,this.travelData=this.allTravelData.filter(function(e,a,i){return e.Zone==t.totalSelect[0]}),this.totalSelect.filter(function(t,e,a){return e>0}).join(" ")){case"true true true":this.filterData=this.travelData.filter(function(e,a,i){return e[t.categoriesJson[1]]==t.categories[1]&&e[t.categoriesJson[2]]==t.categories[2]}),0==this.filterData.length?this.$bus.$emit("updated",this.noData):(this.$bus.$emit("updated",this.filterData),this.$bus.$emit("label",this.totalSelect));break;case"false false false":0==this.travelData.length?this.$bus.$emit("updated",this.noData):(this.$bus.$emit("updated",this.travelData),this.$bus.$emit("label",this.totalSelect));break;case"false false true":this.filterData=this.travelData.filter(function(e,a,i){return e[t.categoriesJson[2]]==t.categories[2]}),0==this.filterData.length?this.$bus.$emit("updated",this.noData):(this.$bus.$emit("updated",this.filterData),this.$bus.$emit("label",this.totalSelect));break;case"false true true":this.filterData=this.travelData.filter(function(e,a,i){return e[t.categoriesJson[1]]==t.categories[1]&&e[t.categoriesJson[2]]==t.categories[2]}),0==this.filterData.length?this.$bus.$emit("updated",this.noData):(this.$bus.$emit("updated",this.filterData),this.$bus.$emit("label",this.totalSelect));break;case"false true false":this.filterData=this.travelData.filter(function(e,a,i){return e[t.categoriesJson[1]]==t.categories[1]}),0==this.filterData.length?this.$bus.$emit("updated",this.noData):(this.$bus.$emit("updated",this.filterData),this.$bus.$emit("label",this.totalSelect))}}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header"},[a("div",[a("router-link",{attrs:{to:"/",tag:"h1"}},[t._v("Have Fun")]),t._v(" "),t._m(0)],1)]),t._v(" "),a("div",{staticClass:"side-content"},[a("div",[a("div",{staticClass:"side"},[a("div",{staticClass:"location"},[a("h3",[t._v("Location")]),t._v(" "),a("select",{on:{change:function(e){t.filterZone(e)}}},[a("option",{attrs:{value:"0"}},[t._v("-- Select district --")]),t._v(" "),t._l(t.allZone,function(e,i){return a("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])})],2)]),t._v(" "),a("div",{staticClass:"categories"},[a("h3",[t._v("Categories")]),t._v(" "),a("ul",t._l(t.categories,function(e,i){return a("li",{key:i,staticClass:"checkbox",on:{click:function(e){t.checkOnOff(i)}}},[a("label",{attrs:{for:t.categories[i]}},[a("span",{class:{check:t.totalSelect[i+1]}},[a("i",{staticClass:"fas fa-check"})]),t._v("\n                "+t._s(t.categories[i])+"\n              ")])])}))])]),t._v(" "),a("router-view")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-search"}),this._v(" "),e("input",{attrs:{type:"text",placeholder:"Explore your own activities"}})])}]};var r=a("VU/8")(s,l,!1,function(t){a("cyNe")},null,null).exports,n=a("/ocq"),o=a("mvHQ"),c=a.n(o),u={name:"travelContent",data:function(){return{travelData:JSON.parse(localStorage.getItem("updated"))||[],travelLabel:[]}},mounted:function(){this.$bus.$on("updated",this.updated),this.$bus.$on("label",this.label)},methods:{updated:function(t){var e=t.length;this.travelData.length=0;for(var a=0;a<e;a++)this.travelData.push(t[a]);localStorage.setItem("updated",c()(this.travelData))},travelDetail:function(t){localStorage.setItem("travelContent",c()(t))},label:function(t){var e=this;this.travelLabel.length=0,t.forEach(function(t,a,i){e.travelLabel.push(t)})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[""!=t.travelData[0]._id?a("p",[t._v("Showing "),a("span",[t._v(t._s(t.travelData.length))]),t._v(" results by…")]):t._e(),t._v(" "),""!=t.travelData[0]._id?a("ul",{staticClass:"label"},[0!=t.travelLabel[0]?a("li",[t._v(t._s(t.travelLabel[0])),a("i",{staticClass:"far fa-times-circle"})]):t._e(),t._v(" "),1==t.travelLabel[2]?a("li",[t._v("免費參觀"),a("i",{staticClass:"far fa-times-circle"})]):t._e(),t._v(" "),1==t.travelLabel[3]?a("li",[t._v("全天候開放"),a("i",{staticClass:"far fa-times-circle"})]):t._e()]):t._e(),t._v(" "),""!=t.travelData[0]._id?a("ul",{attrs:{id:"travel-content"}},t._l(t.travelData,function(e){return a("li",{key:e._id,on:{click:function(a){t.travelDetail(e)}}},[a("router-link",{attrs:{to:{name:"travelDetail",params:{id:e._id}}}},[a("div",{staticClass:"img",style:{backgroundImage:"url("+e.Picture1+")"}}),t._v(" "),a("div",{staticClass:"data"},[a("h2",[t._v(t._s(e.Name))]),t._v(" "),a("p",[t._v(t._s(e.Description))]),t._v(" "),a("div",[a("span",[t._v(t._s(e.Zone))]),t._v(" "),a("ul",{staticClass:"categories-label"},["免費參觀"==e.Ticketinfo?a("li",[t._v(t._s(e.Ticketinfo))]):t._e(),t._v(" "),"全天候開放"==e.Opentime?a("li",[t._v(t._s(e.Opentime))]):t._e()])]),t._v(" "),a("ul",{staticClass:"address-tel"},[a("li",[a("i",{staticClass:"fas fa-map-marker-alt"}),a("div",[t._v(t._s(e.Add))])]),t._v(" "),a("li",[a("i",{staticClass:"fas fa-phone"}),a("div",[t._v(t._s(e.Tel))])])])])])],1)})):t._e()])},staticRenderFns:[]};var v=a("VU/8")(u,h,!1,function(t){a("lWl7")},"data-v-0777b22e",null).exports,f={name:"travelDetail",data:function(){return{travelContent:JSON.parse(localStorage.getItem("travelContent"))}},mounted:function(){},methods:{}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("div",{staticClass:"explore"},[a("p",[a("router-link",{staticClass:"explore-span",attrs:{to:"/"}},[t._v("Explore ")]),a("span",[t._v("/ "+t._s(t.travelContent.Name))])],1)]),t._v(" "),a("div",{staticClass:"detail-content"},[a("div",{staticClass:"img",style:{backgroundImage:"url("+t.travelContent.Picture1+")"}}),t._v(" "),a("div",{staticClass:"article"},[a("h2",[t._v(t._s(t.travelContent.Name))]),t._v(" "),a("div",{staticClass:"detail-label"},[a("span",[t._v(t._s(t.travelContent.Zone))]),t._v(" "),a("ul",{staticClass:"categories-label"},["免費參觀"==t.travelContent.Ticketinfo?a("li",[t._v(t._s(t.travelContent.Ticketinfo))]):t._e(),t._v(" "),"全天候開放"==t.travelContent.Opentime?a("li",[t._v(t._s(t.travelContent.Opentime))]):t._e()])]),t._v(" "),a("ul",{staticClass:"address-tel"},[a("li",[a("i",{staticClass:"fas fa-map-marker-alt"}),a("div",[t._v(t._s(t.travelContent.Add))])]),t._v(" "),a("li",[a("i",{staticClass:"fas fa-phone"}),a("div",[t._v(t._s(t.travelContent.Tel))])])]),t._v(" "),a("p",[t._v("\n        "+t._s(t.travelContent.Description)+"\n      ")])])])])},staticRenderFns:[]};var p=a("VU/8")(f,d,!1,function(t){a("FGW6")},"data-v-30b8208c",null).exports;i.a.use(n.a);var _=new n.a({routes:[{path:"/",redirect:"/travelContent"},{path:"/travelContent",name:"travelContent",component:v},{path:"/travelContent/travelDetail/:id",name:"travelDetail",component:p}]}),b=a("mtWM"),m=a.n(b),D=new i.a;Object.defineProperty(i.a.prototype,"$bus",{get:function(){return this.$root.bus}});var g=D;a("R90W");i.a.config.productionTip=!1,i.a.prototype.$http=m.a,new i.a({el:"#app",data:function(){return{bus:g}},router:_,components:{App:r},template:"<App/>"})},R90W:function(t,e){},cyNe:function(t,e){},lWl7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a7c7324d4294f09737d5.js.map