(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{354:function(n,t,e){var content=e(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(150).default)("2da74186",content,!0,{sourceMap:!1})},356:function(n,t,e){"use strict";e.r(t);var o=e(8),l=(e(49),{data:function(){return{}},head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/client.css"}]}},methods:{scrollDown:function(data){document.querySelector("#".concat(data)).scrollIntoView({behavior:"smooth"})},logout:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$auth.logout();case 2:n.$router.push("/");case 3:case"end":return t.stop()}}),t)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),r=(e(357),e(57)),component=Object(r.a)(l,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"nav-section top wf-section"},[t("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[t("div",{staticClass:"nav-container"},[t("div",{staticClass:"div-block-165"},[t("div",{staticClass:"brand-holder"},[t("nuxt-link",{staticClass:"brand w-nav-brand",attrs:{to:{path:"/",query:{username:n.$route.query.username}}}},[t("img",{staticClass:"image-brand",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),n._v(" "),t("div",{attrs:{id:"ytWidget"}})],1),n._v(" "),t("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[t("span",{staticClass:"nav-link w-nav-link",on:{click:function(t){return n.scrollDown("about")}}},[n._v("About")]),n._v(" "),t("span",{staticClass:"nav-link w-nav-link",on:{click:function(t){return n.scrollDown("map")}}},[n._v("Map")]),t("span",{staticClass:"nav-link w-nav-link",on:{click:function(t){return n.scrollDown("faq")}}},[n._v("Faq")]),t("span",{staticClass:"nav-link w-nav-link",on:{click:function(t){return n.scrollDown("plan")}}},[n._v("Investment Plan")]),t("span",{staticClass:"nav-link w-nav-link",on:{click:function(t){return n.scrollDown("team")}}},[n._v("\n            Team")]),t("span",{staticClass:"nav-link w-nav-link",on:{click:function(t){return n.scrollDown("blog")}}},[n._v("News/Blog")]),n._v(" "),t("span",{staticClass:"nav-link w-nav-link",on:{click:function(t){return n.scrollDown("contact")}}},[n._v("Contact")]),n._v(" "),n.isAuthenticated?n._e():t("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:n.$route.query.username}}}},[n._v("Sign Up")]),n._v(" "),n.isAuthenticated?n._e():t("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/login",query:{username:n.$route.query.username}}}},[n._v("Login")]),n._v(" "),n.isAuthenticated?t("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:"/dashboard"}},[n._v("Dashboard")]):n._e(),n._v(" "),n.isAuthenticated?t("span",{staticClass:"nav-link w-nav-link",on:{click:n.logout}},[n._v("Logout")]):n._e()],1),n._v(" "),n._m(0)])])])])}),[function(){var n=this._self._c;return n("div",{staticClass:"menu-button w-nav-button"},[n("div",{staticClass:"icon-7 w-icon-nav-menu"})])}],!1,null,null,null);t.default=component.exports},357:function(n,t,e){"use strict";e(354)},358:function(n,t,e){var o=e(149)((function(i){return i[1]}));o.push([n.i,".image-brand{width:100}",""]),o.locals={},n.exports=o}}]);