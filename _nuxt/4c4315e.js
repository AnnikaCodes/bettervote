(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{254:function(t,e,n){"use strict";n.r(e);var r=n(45),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"button is-info",attrs:{to:"/new"}},[n("b-icon",{attrs:{icon:"ballot"}}),t._v(" "),n("strong",[t._v("Create a poll")])],1)}),[],!1,null,null,null);e.default=component.exports},255:function(t,e,n){"use strict";n.r(e);var r={props:{current:{type:String,required:!0}}},o=n(45),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{scopedSlots:t._u([{key:"brand",fn:function(){return[n("nuxt-link",{staticClass:"navbar-item",attrs:{to:"/"}},[n("img",{attrs:{src:"/navbar-logo.png"}})])]},proxy:!0},{key:"start",fn:function(){return[n("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/"}},[n("span",{class:"/"===t.current?"has-text-primary":""},[t._v("\n                Home\n            ")])]),t._v(" "),n("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/new"}},[n("span",{class:"/new"===t.current?"has-text-primary":""},[t._v("\n                Create\n            ")])]),t._v(" "),n("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/about"}},[n("span",{class:"/about"===t.current?"has-text-primary":""},[t._v("\n                About\n            ")])])]},proxy:!0},{key:"end",fn:function(){return[n("b-navbar-item",{staticClass:"buttons"},[n("PollCreateButton")],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PollCreateButton:n(254).default})},258:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"AboutPage",head:function(){return{title:"About | BetterPoll"}}}),o=n(45),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("NavigationMenu",{attrs:{current:"/about"}}),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-info"},[n("div",{staticClass:"hero-body"},[n("h1",{staticClass:"title"},[t._v("\nAbout BetterPoll\n")]),t._v(" "),n("p",[t._v("\n                    BetterPoll is an app that lets you make quick, easy, working ranked-choice polls.\n                    It's open source, meaning you can read the\n                    "),n("a",{staticClass:"has-text-black",attrs:{href:"https://github.com/AnnikaCodes/betterpoll"}},[t._v("source code")]),t._v(" yourself.\n                ")]),t._v(" "),n("p",[t._v("\n                    If you have questions, concerns, or suggestions, feel free to email us at\n                    "),n("a",{staticClass:"has-text-black",attrs:{href:"mailto:betterpoll.cc@gmail.com"}},[t._v("betterpoll.cc@gmail.com")]),t._v(".\n\n                    We welcome your feedback!\n                ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavigationMenu:n(255).default})}}]);