(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{254:function(e,t,n){"use strict";n.r(t);var r=n(45),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nuxt-link",{staticClass:"button is-info",attrs:{to:"./new"}},[n("b-icon",{attrs:{icon:"ballot"}}),e._v(" "),n("strong",[e._v("Create a poll")])],1)}),[],!1,null,null,null);t.default=component.exports},255:function(e,t,n){e.exports=n.p+"img/navbar-logo.6f28513.png"},256:function(e,t,n){"use strict";n.r(t);var r={props:{current:{type:String,required:!0}}},o=n(45),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{scopedSlots:e._u([{key:"brand",fn:function(){return[r("nuxt-link",{staticClass:"navbar-item",attrs:{to:"./"}},[r("img",{attrs:{src:n(255)}})])]},proxy:!0},{key:"start",fn:function(){return[r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"./"}},[r("span",{class:"/"===e.current?"has-text-primary":""},[e._v("\n                Home\n            ")])]),e._v(" "),r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"./new"}},[r("span",{class:"/new"===e.current?"has-text-primary":""},[e._v("\n                Create\n            ")])]),e._v(" "),r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"./about"}},[r("span",{class:"/about"===e.current?"has-text-primary":""},[e._v("\n                About\n            ")])])]},proxy:!0},{key:"end",fn:function(){return[r("b-navbar-item",{staticClass:"buttons"},[r("PollCreateButton")],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PollCreateButton:n(254).default})},260:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(58),n(73),n(2)),l=o.a.extend({name:"IndexPage",data:function(){return{maxWinners:0,candidates:[],numWinners:1,title:null,tagValidity:"",description:"",protection:!1,endTime:new Date(6e4*Math.floor(Date.now()/6e4)+864e5),id:null,isLoading:!1,idCustomValidity:"Must be between 2 and 32 characters",idValidateIsLoading:!1,name:""}},methods:{makePoll:function(e,t,n,o,l,c,d){var m=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var f,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return m.isLoading=!0,f={name:e,candidates:n,duration:o,numWinners:l,description:t,protection:d?"ip":"none"},c&&(f.id=c),r.prev=3,r.next=6,m.$axios.$post("".concat(m.$config.API_URL,"/create"),f);case 6:(data=r.sent).success?(m.isLoading=!1,m.$router.push("/poll/".concat(data.id)),m.$buefy.toast.open({duration:5e3,message:"The poll was successfully created!",type:"is-success"})):(m.isLoading=!1,m.$buefy.toast.open({duration:5e3,message:data.error||"There was an error creating the poll",type:"is-danger"})),r.next=15;break;case 10:r.prev=10,r.t0=r.catch(3),m.isLoading=!1,m.$buefy.toast.open({duration:5e3,message:"An error occured contacting our servers; make sure you are connected to the Internet",type:"is-danger"}),console.error("An error occurred while POSTing to /create: ".concat(r.t0," ").concat(JSON.stringify(r.t0)));case 15:case"end":return r.stop()}}),r,null,[[3,10]])})))()},validateID:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.customURL&&!e.$refs.customURL.$el){t.next=2;break}return t.abrupt("return");case 2:if(n=e.$refs.customURL.$el.children[0]){t.next=5;break}return t.abrupt("return");case 5:return r="".concat(e.$config.API_URL,"/poll/").concat(n.value),t.prev=6,t.next=9,e.$axios.$get(r);case 9:if(!t.sent.success){t.next=14;break}return n.setCustomValidity("A poll already exists with that URL."),n.reportValidity(),t.abrupt("return");case 14:t.next=18;break;case 16:t.prev=16,t.t0=t.catch(6);case 18:n.setCustomValidity("");case 19:case"end":return t.stop()}}),t,null,[[6,16]])})))()}},head:function(){return{title:"Create a poll | BetterPoll"}}}),c=n(45),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("NavigationMenu",{attrs:{current:"/new"}}),e._v(" "),n("section",{staticClass:"section"},[n("h1",{staticClass:"title"},[e._v("\n            Create a new poll\n        ")]),e._v(" "),n("form",{on:{submit:function(t){t.preventDefault(),e.makePoll(e.name,e.description,e.candidates.map((function(e){return e.toString()})),Math.floor((e.endTime-Date.now())/1e3),e.numWinners,e.id,e.protection)}}},[n("b-loading",{model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),n("b-field",{attrs:{label:"Title"}},[n("b-input",{attrs:{type:"text",required:"","validation-message":"Must be between 1 and 1024 characters",placeholder:"Give your poll a descriptive title",maxlength:"1024",minlength:"1"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),n("b-field",{attrs:{label:"Description"}},[n("b-input",{attrs:{type:"textarea",maxlength:"10000",placeholder:"Give your poll a description","validation-message":"Must be fewer than 10,000 characters"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),e._v(" "),n("b-field",{attrs:{label:"Choices"}},[n("b-taginput",{attrs:{icon:"label",placeholder:"Your poll needs at least 2 choices","aria-close-label":"Remove this choice",maxlength:"1024",minlength:"1",maxtags:"1024",type:"is-info"},on:{input:function(t){e.maxWinners=e.candidates.length-1}},model:{value:e.candidates,callback:function(t){e.candidates=t},expression:"candidates"}})],1),e._v(" "),n("b-field",{attrs:{label:"Number of winners"}},[n("b-numberinput",{attrs:{max:e.maxWinners,min:"1",required:""},model:{value:e.numWinners,callback:function(t){e.numWinners=t},expression:"numWinners"}})],1),e._v(" "),n("b-field",{attrs:{label:"Poll closing time"}},[n("b-datetimepicker",{attrs:{placeholder:"Date and time at which your poll will close and results will be available","min-datetime":new Date(Date.now()+1e4),required:""},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1),e._v(" "),n("b-field",[n("b-checkbox",{model:{value:e.protection,callback:function(t){e.protection=t},expression:"protection"}},[e._v("\n                Prevent double voting via IP address "),n("small",[e._v("(This will record voters' IP adddresses.)")])])],1),e._v(" "),n("b-field",{attrs:{label:"Custom URL (optional)"}},[n("p",{staticClass:"content"},[e._v("\n                "+e._s(e.$config.DOMAIN)+"/poll/\n            ")]),e._v(" "),n("b-input",{ref:"customURL",attrs:{type:"text",placeholder:"Give your poll a custom URL",maxlength:"32",minlength:"2",size:"is-small"},nativeOn:{change:function(t){return e.validateID.apply(null,arguments)}},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}})],1),e._v(" "),e._m(0)],1)])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"control"},[n("button",{staticClass:"button is-link"},[e._v("\n                Create poll\n            ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{NavigationMenu:n(256).default})}}]);