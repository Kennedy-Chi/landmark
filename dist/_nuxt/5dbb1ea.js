(window.webpackJsonp=window.webpackJsonp||[]).push([[46,20,21,22],{330:function(t,l,e){var content=e(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(150).default)("8bff8cba",content,!0,{sourceMap:!1})},331:function(t,l,e){"use strict";e.r(l);var d={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},h=e(61),component=Object(h.a)(d,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"down-logo-header"},[this._v("\n    2023 Crypto Investment, All Right Reserved\n  ")])])}],!1,null,null,null);l.default=component.exports},333:function(t,l,e){var content=e(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(150).default)("3c03726f",content,!0,{sourceMap:!1})},336:function(t,l,e){"use strict";e.r(l);var d={head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/Dashboard.css"}]}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")}},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}},h=(e(344),e(61)),component=Object(h.a)(d,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"top-holder"},[l("div",{staticClass:"top-link-holder"},[l("div",{staticClass:"top-logo"},[l("img",{staticClass:"image-37 dash",attrs:{src:"/dashboard-images/hamburger.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),t._v(" "),l("img",{staticClass:"logo dash",attrs:{src:"/images/Landmark-logo.png",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"welcome-holder"},[t._m(0),t._v(" "),l("div",{staticClass:"top-text-holder"},[l("div",{staticClass:"top-text"},[t._v("Hi, "+t._s(t.user.fullName)+" Welcome back.")])])])]),t._v(" "),t._m(1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"top-header-holder"},[t("h1",{staticClass:"top-header"},[this._v("Welcome To Bitpal")])])},function(){var t=this,l=t._self._c;return l("div",{staticClass:"icon-profile-holder"},[l("div",{staticClass:"icon-holder gap"},[l("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/user-persona-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"icon-holder gap"},[l("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/bell-notification-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"icon-holder"},[l("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/switch-on-off-button-icon.svg",loading:"lazy",alt:""}})])])}],!1,null,null,null);l.default=component.exports},338:function(t,l,e){"use strict";e.r(l);var d=e(8),h=(e(30),e(53),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return l.stop()}}),l)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()}}),o=(e(341),e(61)),component=Object(o.a)(h,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"side-dash-board",class:{hide:!t.navState}},[l("div",{staticClass:"sticky-navigation"},[l("div",{staticClass:"board-logo-holder"},[l("img",{staticClass:"menu-close dash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/644620af8a8f42c537677a46_close.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),l("nuxt-link",{staticClass:"logo-holder w-inline-block",attrs:{to:"/"}},[l("img",{attrs:{src:"/images/Landmark-logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),l("div",{staticClass:"all-button-holder"},[l("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[l("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"button-text"},[t._v("Dashboard")])]),t._v(" "),l("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[l("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposit.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"button-text"},[t._v("Deposit")])]),t._v(" "),l("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-withdrawal-funds"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[l("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/withdrawal.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"button-text"},[t._v("Withdraw")])]),t._v(" "),l("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[l("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/transactions.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"button-text"},[t._v("Transactions")])]),t._v(" "),l("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-history"==t.route},attrs:{to:"/dashboard/history"}},[l("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/earnings.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"button-text"},[t._v("Earnings")])]),t._v(" "),l("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[l("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"button-text"},[t._v("Settings")])]),t._v(" "),l("span",{staticClass:"each-button-flexer",on:{click:t.logout}},[l("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/logout.svg",loading:"lazy",alt:""}}),t._v(" "),l("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),t._m(0)])])}),[function(){var t=this,l=t._self._c;return l("div",{staticClass:"down-nav-holder"},[l("h1",{staticClass:"down-logo-header"},[t._v("@ Bitpal - 2023")]),t._v(" "),l("div",{staticClass:"down-logo-texts"},[t._v("\n        This is some text inside of a div block.\n      ")])])}],!1,null,null,null);l.default=component.exports},341:function(t,l,e){"use strict";e(330)},342:function(t,l,e){var d=e(149)((function(i){return i[1]}));d.push([t.i,".image-7.nav{width:18px}.board-logo-holder{position:relative}.menu-close.dash{display:none}@media screen and (max-width:767px){.menu-close.dash{display:block;right:-180px;top:20px}}",""]),d.locals={},t.exports=d},344:function(t,l,e){"use strict";e(333)},345:function(t,l,e){var d=e(149)((function(i){return i[1]}));d.push([t.i,".image-14.dash{width:25px}.logo.dash{min-width:100px}@media screen and (max-width:767px){.image-37.dash{display:block;width:25px}}",""]),d.locals={},t.exports=d},505:function(t,l,e){"use strict";e.r(l);var d=e(331),h=e(336),o={components:{DashboardFooter:d.default,DashboardHeader:h.default}},c=e(61),component=Object(c.a)(o,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"deposit-list-holder"},[l("div",{staticClass:"deposit-list"},[l("dashboard-navigation"),t._v(" "),l("div",{staticClass:"main-dash-board"},[l("dashboard-header"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)],1)],1),t._v(" "),l("dashboard-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"deposit-list-second"},[t("h1",{staticClass:"main-heading"},[this._v("profile")])])},function(){var t=this,l=t._self._c;return l("div",{staticClass:"deposit-list-second"},[l("div",{staticClass:"deposit-button-top"},[l("h1",{staticClass:"main-heading"},[t._v("Start Plan")])]),t._v(" "),l("div",{staticClass:"table-plan-holder"},[l("div",{staticClass:"table"},[l("div",{staticClass:"main-table"},[l("div",{staticClass:"light-table-holder table-green"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header"},[t._v("S/N")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header"},[t._v("Transactions")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header"},[t._v("Wallet")])]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header"},[t._v("Amounts")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header"},[t._v("Dates")])])]),t._v(" "),l("div",{staticClass:"light-table-holder"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("1.")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("Deposit")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),l("img",{staticClass:"deposit-bitcoin slash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432b902545affb4f6ea0516_bitcoin-cash-bch-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("100")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])]),t._v(" "),l("div",{staticClass:"light-table-holder"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("2.")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("Withdraw")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),l("img",{staticClass:"deposit-ethereum",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432b8dc57e24b5e2bc78f3b_ethereum-eth-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("100")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])]),t._v(" "),l("div",{staticClass:"light-table-holder"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("3.")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("Deposit")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),l("img",{staticClass:"deposit-binace",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432b8f8a50b9c6c8f61c64e_binance-coin-bnb-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("100")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])]),t._v(" "),l("div",{staticClass:"light-table-holder"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("4.")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("Deposit")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),l("img",{staticClass:"deposit-red-icon",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432bb1fe14ea89d5dbd411c_tron-trx-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("100")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])]),t._v(" "),l("div",{staticClass:"light-table-holder"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("5.")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("Withdraw")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),l("img",{staticClass:"deposit-binace",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432b8f8a50b9c6c8f61c64e_binance-coin-bnb-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("100")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])]),t._v(" "),l("div",{staticClass:"light-table-holder"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("6.")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("Withdraw")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),l("img",{staticClass:"deposit-bitcoin",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432b902545affb4f6ea0516_bitcoin-cash-bch-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("100")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])])])])])])},function(){var t=this,l=t._self._c;return l("div",{staticClass:"deposit-list-second"},[l("div",{staticClass:"deposit-button-top"},[l("h1",{staticClass:"main-heading"},[t._v("Start Plan")])]),t._v(" "),l("div",{staticClass:"table-plan-holder"},[l("div",{staticClass:"table"},[l("div",{staticClass:"main-table"},[l("div",{staticClass:"light-table-holder table-green"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header"},[t._v("S/N")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header"},[t._v("Transactions")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header"},[t._v("Wallet")])]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header"},[t._v("Amounts")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header"},[t._v("Dates")])])]),t._v(" "),l("div",{staticClass:"light-table-holder"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("1.")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("Deposit")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),l("img",{staticClass:"deposit-bitcoin slash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432b902545affb4f6ea0516_bitcoin-cash-bch-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("100")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])]),t._v(" "),l("div",{staticClass:"light-table-holder"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("2.")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("Withdraw")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),l("img",{staticClass:"deposit-ethereum",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432b8dc57e24b5e2bc78f3b_ethereum-eth-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("100")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])]),t._v(" "),l("div",{staticClass:"light-table-holder"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("3.")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("Deposit")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),l("img",{staticClass:"deposit-binace",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432b8f8a50b9c6c8f61c64e_binance-coin-bnb-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("100")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])]),t._v(" "),l("div",{staticClass:"light-table-holder"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("4.")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("Deposit")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),l("img",{staticClass:"deposit-red-icon",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432bb1fe14ea89d5dbd411c_tron-trx-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("100")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])]),t._v(" "),l("div",{staticClass:"light-table-holder"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("5.")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("Withdraw")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),l("img",{staticClass:"deposit-binace",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432b8f8a50b9c6c8f61c64e_binance-coin-bnb-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("100")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])]),t._v(" "),l("div",{staticClass:"light-table-holder"},[l("div",{staticClass:"sn-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("6.")])]),t._v(" "),l("div",{staticClass:"table-transaction-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("Withdraw")])]),t._v(" "),l("div",{staticClass:"symbols"},[l("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),l("img",{staticClass:"deposit-bitcoin",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6432b902545affb4f6ea0516_bitcoin-cash-bch-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"table-amount-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("100")])]),t._v(" "),l("div",{staticClass:"table-date-holder"},[l("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),l("h1",{staticClass:"table-header"},[t._v("16/04/2023")])])])])])])])}],!1,null,null,null);l.default=component.exports;installComponents(component,{DashboardNavigation:e(338).default,DashboardHeader:e(336).default,DashboardFooter:e(331).default})}}]);