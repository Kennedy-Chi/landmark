(window.webpackJsonp=window.webpackJsonp||[]).push([[25,5,7,14],{342:function(t,l,c){var content=c(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(150).default)("10f9320e",content,!0,{sourceMap:!1})},343:function(t,l,c){"use strict";c.r(l);var e={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},n=c(57),component=Object(n.a)(e,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer",attrs:{id:"footer"}},[t("div",[this._v("www.kennytechstudios.com")])])}],!1,null,null,null);l.default=component.exports},344:function(t,l,c){"use strict";c.r(l);c(50),c(59);var e=c(8),n=(c(26),c(49),{data:function(){return{route:""}},computed:{navState:function(){return this.$store.state.adminNavState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},hideNav:function(){this.$store.commit("HIDE_NAV")},logout:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return l.stop()}}),l)})))()}},mounted:function(){this.route=this.$route.name,this.hideNav()}}),v=(c(357),c(57)),component=Object(v.a)(n,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[l("div",{staticClass:"sticky-navbar"},[l("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[l("img",{staticClass:"brand",attrs:{src:"/admin-images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/admin-images/Logo.png 500w, /admin-images/Logo.png 800w, /admin-images/Logo.png 1080w, /admin-images/Logo.png 2284w",alt:""}})]),t._v(" "),l("img",{staticClass:"menu-close",attrs:{src:"/admin-images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),l("ul",{staticClass:"nav-list",attrs:{role:"list"}},[l("li",{staticClass:"nav-list"},[l("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin"==t.route},attrs:{to:"/admin"}},[l("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin"==t.route?"colored-dashboard.svg":"dashboard.svg"),loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"link-text"},[t._v("Dashboard")])]),t._v(" "),l("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-users"==t.route},attrs:{to:"/admin/users"}},[l("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-users"==t.route?"colored-users.svg":"users.svg"),loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"link-text"},[t._v("Users")])]),t._v(" "),l("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("add-user")},attrs:{to:"/admin/add-user/new"}},[l("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("add-user")?"colored-user.svg":"user.svg"),loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"link-text"},[t._v("Add User")])]),t._v(" "),l("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-plans"==t.route},attrs:{to:"/admin/plans"}},[l("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-accounts"==t.route?"colored-plans.svg":"plans.svg"),loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"link-text"},[t._v("Plans")])]),t._v(" "),l("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-reviews"==t.route},attrs:{to:"/admin/reviews"}},[l("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-reviews"==t.route?"colored-reviews.svg":"reviews.svg"),loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"link-text"},[t._v("Reviews")])]),t._v(" "),l("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-currencies"==t.route},attrs:{to:"/admin/currencies"}},[l("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-currencies"==t.route?"colored-currency.svg":"currency.svg"),loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"link-text"},[t._v("Currencies")])]),t._v(" "),l("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("transactions")},attrs:{to:"/admin/transactions/list"}},[l("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("transactions")?"colored-deposit.svg":"deposit.svg"),loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"link-text"},[t._v("Transactions")])]),t._v(" "),l("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-email"==t.route},attrs:{to:"/admin/email"}},[l("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-email"==t.route?"colored-emails.svg":"emails.svg"),loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"link-text"},[t._v("Emails")])]),t._v(" "),l("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-pages"==t.route},attrs:{to:"/admin/pages"}},[l("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-pages"==t.route?"colored-pages.svg":"pages.svg"),loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"link-text"},[t._v("Pages")])]),t._v(" "),l("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-settings"==t.route},attrs:{to:"/admin/settings"}},[l("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-settings"==t.route?"colored-settings.svg":"settings.svg"),loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"link-text"},[t._v("Settings")])]),t._v(" "),l("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-referrals"==t.route},attrs:{to:"/admin/referrals"}},[l("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-referrals"==t.route?"colored-referrals.svg":"referrals.svg"),loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"link-text"},[t._v("Referrals")])]),t._v(" "),l("span",{staticClass:"nav-link w-inline-block",on:{click:t.logout}},[l("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/logout.svg\n            ",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"link-text"},[t._v("Logout")])])],1)])],1)])}),[],!1,null,null,null);l.default=component.exports},345:function(t,l,c){"use strict";c.r(l);var e=c(8),n=(c(49),{head:function(){return{link:[{rel:"stylesheet",href:"/css/main.css",type:"text/css"}]}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},authenticateUser:function(){this.isAuthenticated?"User"==this.user.status&&this.$router.push("/dashboard"):this.$router.push("/")},logout:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return l.stop()}}),l)})))()}},mounted:function(){this.authenticateUser()},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user}}}),v=c(57),component=Object(v.a)(n,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"content-header"},[l("img",{staticClass:"menu",attrs:{src:"/admin-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleNav}}),t._v(" "),l("div",{staticClass:"top-icons"},[l("img",{staticClass:"top-icon",attrs:{src:"/admin-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0),t._v(" "),l("img",{staticClass:"top-icon",attrs:{src:"/admin-images/logout.svg",loading:"lazy",alt:""},on:{click:t.logout}})])])}),[function(){var t=this,l=t._self._c;return l("div",{staticClass:"notification"},[l("div",{staticClass:"badge"}),t._v(" "),l("img",{staticClass:"top-icon",attrs:{src:"/admin-images/notification.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"custom-card pie-chart-holder notify"},[l("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),l("div",{staticClass:"each-activity"},[l("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),l("div",{staticClass:"activity-coin"},[l("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"activity-line"})]),t._v(" "),l("div",{staticClass:"activity-value"},[l("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),l("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),l("div",{staticClass:"each-activity"},[l("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),l("div",{staticClass:"activity-coin"},[l("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"activity-line"})]),t._v(" "),l("div",{staticClass:"activity-value"},[l("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),l("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),l("div",{staticClass:"each-activity"},[l("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),l("div",{staticClass:"activity-coin"},[l("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"activity-line"})]),t._v(" "),l("div",{staticClass:"activity-value"},[l("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),l("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),l("div",{staticClass:"each-activity"},[l("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),l("div",{staticClass:"activity-coin"},[l("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"activity-line"})]),t._v(" "),l("div",{staticClass:"activity-value"},[l("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),l("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])])}],!1,null,null,null);l.default=component.exports},357:function(t,l,c){"use strict";c(342)},358:function(t,l,c){var e=c(149)((function(i){return i[1]}));e.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a,span.nav-link{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),e.locals={},t.exports=e},380:function(t,l,c){var content=c(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(150).default)("0559ff90",content,!0,{sourceMap:!1})},409:function(t,l,c){"use strict";c(380)},410:function(t,l,c){var e=c(149)((function(i){return i[1]}));e.push([t.i,".content-wrapper{margin-bottom:20px}",""]),e.locals={},t.exports=e},459:function(t,l,c){"use strict";c.r(l);var e=c(343),n=c(344),v=c(345),o={methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/scripts/home.js",script.async=!0,script.id="script";var l=document.querySelector("#footer");l?l.appendChild(script):console.error("Could not find app node to append script element")}},mounted:function(){loadScript()},components:{AdminNavigation:n.default,AdminTopHeader:v.default,AdminFooter:e.default}},r=(c(409),c(57)),component=Object(r.a)(o,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"main-wrapper home"},[l("AdminNavigation"),t._v(" "),l("div",{staticClass:"body-wrapper"},[l("AdminTopHeader"),t._v(" "),t._m(0),t._v(" "),l("AdminFooter")],1),t._v(" "),t._m(1)],1)}),[function(){var t=this,l=t._self._c;return l("div",{staticClass:"content-wrapper"},[l("div",{staticClass:"custom-card main-stats"},[l("div",{staticClass:"stat-top"},[l("div",{staticClass:"caption-holder"},[l("div",{staticClass:"each-main-highlight top"},[l("h2",{staticClass:"highlight-title duration"},[t._v("\n                12/02/2022 - 11/11/2023\n              ")]),t._v(" "),l("div",{staticClass:"highlight-caption"},[t._v("Transaction Period")])]),t._v(" "),l("div",{staticClass:"each-main-highlight"},[l("h2",{staticClass:"highlight-title"},[t._v("$80,000")]),t._v(" "),l("div",{staticClass:"highlight-caption"},[t._v("Transaction Volume")])]),t._v(" "),l("div",{staticClass:"each-main-highlight"},[l("h2",{staticClass:"highlight-title"},[t._v("$40,000")]),t._v(" "),l("div",{staticClass:"highlight-caption"},[t._v("Current Balance")])]),t._v(" "),l("a",{staticClass:"main-btn w-button",attrs:{href:"#"}},[t._v("View Users")])]),t._v(" "),l("div",{staticClass:"stats-holder"},[l("h3",{staticClass:"chart-title"},[t._v("Deposits Vs Withdrawal Chart")]),t._v(" "),l("img",{staticClass:"chart-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1785663ea220b6f2d2f34_line-graph-excel.png",loading:"lazy",alt:""}})])]),t._v(" "),l("div",{staticClass:"stat-bottom"},[l("div",{staticClass:"each-coin-stat"},[l("img",{staticClass:"coin-stat-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",[l("div",[t._v("Bitcoin Balance")]),t._v(" "),l("h3",{staticClass:"coin-title"},[t._v("$6,000")])])]),t._v(" "),l("div",{staticClass:"each-coin-stat"},[l("img",{staticClass:"coin-stat-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737948a58b7255a6e0e9_ethereum-eth-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",[l("div",[t._v("Ethereum Balance")]),t._v(" "),l("h3",{staticClass:"coin-title"},[t._v("$6,000")])])]),t._v(" "),l("div",{staticClass:"each-coin-stat"},[l("img",{staticClass:"coin-stat-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",[l("div",[t._v("TRC20 Balance")]),t._v(" "),l("h3",{staticClass:"coin-title"},[t._v("$6,000")])])]),t._v(" "),l("div",{staticClass:"each-coin-stat"},[l("img",{staticClass:"coin-stat-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ad78aac69ab065aca_dogecoin-doge-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",[l("div",[t._v("Dogecoin Balance")]),t._v(" "),l("h3",{staticClass:"coin-title"},[t._v("$6,000")])])]),t._v(" "),l("div",{staticClass:"each-coin-stat"},[l("img",{staticClass:"coin-stat-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ad78aac69ab065aca_dogecoin-doge-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",[l("div",[t._v("Dogecoin Balance")]),t._v(" "),l("h3",{staticClass:"coin-title"},[t._v("$6,000")])])])])]),t._v(" "),l("div",{staticClass:"custom-card pie-chart-holder"},[l("div",{staticClass:"donut-chart"},[l("img",{attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f17bd70b3cfe4ddc1434d3_pie.png",loading:"lazy",sizes:"(max-width: 767px) 300px, (max-width: 991px) 25vw, (max-width: 1279px) 21vw, 22vw",srcset:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f17bd70b3cfe4ddc1434d3_pie-p-500.png 500w, https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f17bd70b3cfe4ddc1434d3_pie.png 505w",alt:""}})]),t._v(" "),l("div",{staticClass:"pie-stats"},[l("div",{staticClass:"each-pie-stat"},[l("h3",{staticClass:"heading"},[t._v("40"),l("sup",[t._v("%")])]),t._v(" "),l("div",{staticClass:"each-pie-label"},[l("div",{staticClass:"label-color"}),t._v(" "),l("div",[t._v("Bitcoin")])])]),t._v(" "),l("div",{staticClass:"each-pie-stat"},[l("h3",{staticClass:"heading"},[t._v("40"),l("sup",[t._v("%")])]),t._v(" "),l("div",{staticClass:"each-pie-label"},[l("div",{staticClass:"label-color"}),t._v(" "),l("div",[t._v("Bitcoin")])])]),t._v(" "),l("div",{staticClass:"each-pie-stat"},[l("h3",{staticClass:"heading"},[t._v("40"),l("sup",[t._v("%")])]),t._v(" "),l("div",{staticClass:"each-pie-label"},[l("div",{staticClass:"label-color"}),t._v(" "),l("div",[t._v("Bitcoin")])])]),t._v(" "),l("div",{staticClass:"each-pie-stat"},[l("h3",{staticClass:"heading"},[t._v("40"),l("sup",[t._v("%")])]),t._v(" "),l("div",{staticClass:"each-pie-label"},[l("div",{staticClass:"label-color"}),t._v(" "),l("div",[t._v("Bitcoin")])])])])]),t._v(" "),l("div",{staticClass:"trx-card"},[l("div",{staticClass:"tx-card-title"},[t._v("Total Deposits")]),t._v(" "),l("div",{staticClass:"tx-flex"},[l("img",{staticClass:"tx-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18162e1e45a44f1442f8c_column-chart-line-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),l("h4",{staticClass:"tx-card-value"},[t._v("\n            $45,000\n            "),l("span",{staticClass:"tx-date"},[l("br"),t._v("Last: Thu 5th Jun, 2022")])])])]),t._v(" "),l("div",{staticClass:"trx-card withdraw"},[l("div",{staticClass:"tx-card-title"},[t._v("Total Withdrawals")]),t._v(" "),l("div",{staticClass:"tx-flex"},[l("img",{staticClass:"tx-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18254f2b8ff803231951a_stock-market-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),l("h4",{staticClass:"tx-card-value"},[t._v("\n            $45,000\n            "),l("span",{staticClass:"tx-date"},[l("br"),t._v("Last: Thu 5th Jun, 2022")])])])]),t._v(" "),l("div",{staticClass:"trx-card active-depo"},[l("div",{staticClass:"tx-card-title"},[t._v("Active Deposits")]),t._v(" "),l("div",{staticClass:"tx-flex"},[l("img",{staticClass:"tx-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18c7669cfc0f135400b4f_growth-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),l("h4",{staticClass:"tx-card-value"},[t._v("\n            $45,000\n            "),l("span",{staticClass:"tx-date"},[l("br"),t._v("Last: Thu 5th Jun, 2022")])])])]),t._v(" "),l("div",{staticClass:"trx-card pending-widthdraw"},[l("div",{staticClass:"tx-card-title"},[t._v("Pending Withdrawals")]),t._v(" "),l("div",{staticClass:"tx-flex"},[l("img",{staticClass:"tx-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18c1e8c2e214d4b13be49_decrease-graph-recession-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),l("h4",{staticClass:"tx-card-value"},[t._v("\n            $45,000\n            "),l("span",{staticClass:"tx-date"},[l("br"),t._v("Last: Thu 5th Jun, 2022")])])])]),t._v(" "),l("div",{staticClass:"custom-card pie-chart-holder"},[l("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),l("div",{staticClass:"each-activity"},[l("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),l("div",{staticClass:"activity-coin"},[l("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"activity-line"})]),t._v(" "),l("div",{staticClass:"activity-value"},[l("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),l("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),l("div",{staticClass:"each-activity"},[l("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),l("div",{staticClass:"activity-coin"},[l("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"activity-line"})]),t._v(" "),l("div",{staticClass:"activity-value"},[l("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),l("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),l("div",{staticClass:"each-activity"},[l("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),l("div",{staticClass:"activity-coin"},[l("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"activity-line"})]),t._v(" "),l("div",{staticClass:"activity-value"},[l("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),l("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),l("div",{staticClass:"each-activity"},[l("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),l("div",{staticClass:"activity-coin"},[l("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"activity-line"})]),t._v(" "),l("div",{staticClass:"activity-value"},[l("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),l("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])]),t._v(" "),l("div",{staticClass:"custom-card main-stats"},[l("h4",{staticClass:"min-table-title"},[t._v("All Users")]),t._v(" "),l("div",{staticClass:"table-caption"},[t._v("\n          For actions please\n          "),l("a",{staticClass:"custom-link",attrs:{href:"#"}},[t._v("click users")]),t._v(" page\n        ")]),t._v(" "),l("div",{staticClass:"table-filters"},[l("div",{staticClass:"each-filter-option"},[l("div",{staticClass:"filter-page"},[t._v("Filter")]),t._v(" "),l("img",{staticClass:"filter-icon drop",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),l("h4",{staticClass:"filter-label"},[t._v("All Users")]),t._v(" "),l("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[l("li",{staticClass:"filter-items"},[l("div",[t._v("All Users")])]),t._v(" "),l("li",{staticClass:"filter-items"},[l("div",[t._v("Active")])]),t._v(" "),l("li",{staticClass:"filter-items"},[l("div",[t._v("Suspended")])]),t._v(" "),l("li",{staticClass:"filter-items"},[l("div",[t._v("Blocked")])])])]),t._v(" "),l("div",{staticClass:"each-filter-option"},[l("div",{staticClass:"filter-page"},[t._v("Sort")]),t._v(" "),l("h4",{staticClass:"filter-label"},[t._v("Name")]),t._v(" "),l("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[l("li",{staticClass:"filter-items"},[l("div",[t._v("Reg. Date")])]),t._v(" "),l("li",{staticClass:"filter-items"},[l("div",[t._v("Deposit")])]),t._v(" "),l("li",{staticClass:"filter-items"},[l("div",[t._v("Suspended")])]),t._v(" "),l("li",{staticClass:"filter-items"},[l("div",[t._v("Blocked")])])]),t._v(" "),l("img",{staticClass:"filter-icon drop",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"each-filter-option"},[l("div",{staticClass:"filter-page"},[t._v("Results")]),t._v(" "),l("h4",{staticClass:"filter-label input"},[t._v("10")]),t._v(" "),l("div",{staticClass:"filter-box"},[l("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f6007a954c77c293682c_check-mark-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),l("div",{staticClass:"each-filter-option search"},[l("div",{staticClass:"filter-page"},[t._v("Search Name")]),t._v(" "),l("img",{staticClass:"filter-icon",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7c16726c9a6581fd2_search-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),l("div",{staticClass:"table-label"},[l("div",[l("strong",[t._v("Results")]),t._v(": 10 "),l("strong",[t._v("Page")]),t._v(" 1 of 12\n          ")]),t._v(" "),l("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[l("li",{staticClass:"pagination-item"},[l("img",{staticClass:"pagination-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982bc1672608295369ae_arrow-thin-chevron-left-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("li",{staticClass:"pagination-item"},[l("div",[t._v("1")])]),t._v(" "),l("li",{staticClass:"pagination-item active"},[l("div",[t._v("2")])]),t._v(" "),l("li",{staticClass:"pagination-item"},[l("div",[t._v("3")])]),t._v(" "),l("li",{staticClass:"pagination-item"},[l("img",{staticClass:"pagination-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982b466e626df4567c6d_arrow-thin-chevron-right-icon.svg",loading:"lazy",alt:""}})])])]),t._v(" "),l("div",{staticClass:"table-actions"},[l("div",{staticClass:"each-filter-option"},[l("img",{staticClass:"filter-icon drop",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),l("h4",{staticClass:"filter-label"},[t._v("Send Email")]),t._v(" "),l("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[l("li",{staticClass:"filter-items"},[l("div",[t._v("All Users")])]),t._v(" "),l("li",{staticClass:"filter-items"},[l("div",[t._v("Active")])]),t._v(" "),l("li",{staticClass:"filter-items"},[l("div",[t._v("Suspended")])]),t._v(" "),l("li",{staticClass:"filter-items"},[l("div",[t._v("Blocked")])])])]),t._v(" "),l("div",{staticClass:"each-filter-option min"},[l("div",{staticClass:"filter-page"},[t._v("Delete")]),t._v(" "),l("div",{staticClass:"filter-box"},[l("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1da3b461fa0e7e3c7163c_trash-bin-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),l("div",{staticClass:"each-filter-option min"},[l("div",{staticClass:"filter-page"},[t._v("Suspend")]),t._v(" "),l("div",{staticClass:"filter-box"},[l("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1da205a0b87bc129e0ee4_remove-member-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),l("div",{staticClass:"each-filter-option min"},[l("div",{staticClass:"filter-page"},[t._v("Approve")]),t._v(" "),l("div",{staticClass:"filter-box"},[l("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1db68393797590894bada_join-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),l("div",{staticClass:"each-filter-option min"},[l("div",{staticClass:"filter-page"},[t._v("Bulk")]),t._v(" "),l("div",{staticClass:"filter-box"},[l("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1dbeaad117e09c9d6ba7c_select-all-icon%201.svg",loading:"lazy",alt:""}})])])])])])},function(){var t=this,l=t._self._c;return l("div",{staticClass:"confirm-action hide"},[l("div",{staticClass:"confirm-box"},[l("div",[t._v("Are you sure you want to delete this item?")]),t._v(" "),l("div",{staticClass:"confirm-holder"},[l("a",{staticClass:"button w-button",attrs:{href:"#"}},[t._v("Yes")]),l("a",{staticClass:"button w-button",attrs:{href:"#"}},[t._v("No")])])])])}],!1,null,null,null);l.default=component.exports;installComponents(component,{AdminNavigation:c(344).default,AdminTopHeader:c(345).default,AdminFooter:c(343).default})}}]);