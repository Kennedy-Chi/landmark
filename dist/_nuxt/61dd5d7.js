(window.webpackJsonp=window.webpackJsonp||[]).push([[48,20,21,22],{330:function(t,e,r){var content=r(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(150).default)("8bff8cba",content,!0,{sourceMap:!1})},331:function(t,e,r){"use strict";r.r(e);var o={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},n=r(61),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"down-logo-header"},[this._v("\n    2023 Crypto Investment, All Right Reserved\n  ")])])}],!1,null,null,null);e.default=component.exports},333:function(t,e,r){var content=r(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(150).default)("3c03726f",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";r.r(e);var o={head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/Dashboard.css"}]}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")}},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}},n=(r(344),r(61)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo"},[e("img",{staticClass:"image-37 dash",attrs:{src:"/dashboard-images/hamburger.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),t._v(" "),e("img",{staticClass:"logo dash",attrs:{src:"/images/Landmark-logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"welcome-holder"},[t._m(0),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("Hi, "+t._s(t.user.fullName)+" Welcome back.")])])])]),t._v(" "),t._m(1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"top-header-holder"},[t("h1",{staticClass:"top-header"},[this._v("Welcome To Bitpal")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon-profile-holder"},[e("div",{staticClass:"icon-holder gap"},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/user-persona-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"icon-holder gap"},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/bell-notification-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"icon-holder"},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/switch-on-off-button-icon.svg",loading:"lazy",alt:""}})])])}],!1,null,null,null);e.default=component.exports},338:function(t,e,r){"use strict";r.r(e);var o=r(8),n=(r(30),r(53),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()}}),l=(r(341),r(61)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{hide:!t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close dash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/644620af8a8f42c537677a46_close.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder w-inline-block",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Landmark-logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposit.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-withdrawal-funds"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/withdrawal.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Withdraw")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/transactions.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-history"==t.route},attrs:{to:"/dashboard/history"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/earnings.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Earnings")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Settings")])]),t._v(" "),e("span",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/logout.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("@ Bitpal - 2023")]),t._v(" "),e("div",{staticClass:"down-logo-texts"},[t._v("\n        This is some text inside of a div block.\n      ")])])}],!1,null,null,null);e.default=component.exports},341:function(t,e,r){"use strict";r(330)},342:function(t,e,r){var o=r(149)((function(i){return i[1]}));o.push([t.i,".image-7.nav{width:18px}.board-logo-holder{position:relative}.menu-close.dash{display:none}@media screen and (max-width:767px){.menu-close.dash{display:block;right:-180px;top:20px}}",""]),o.locals={},t.exports=o},344:function(t,e,r){"use strict";r(333)},345:function(t,e,r){var o=r(149)((function(i){return i[1]}));o.push([t.i,".image-14.dash{width:25px}.logo.dash{min-width:100px}@media screen and (max-width:767px){.image-37.dash{display:block;width:25px}}",""]),o.locals={},t.exports=o},386:function(t,e,r){var content=r(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(150).default)("a756419e",content,!0,{sourceMap:!1})},413:function(t,e,r){"use strict";r(386)},414:function(t,e,r){var o=r(149)((function(i){return i[1]}));o.push([t.i,".image-17.dot{width:3px}.image-18.link{width:8px}.transact-button{background-color:#7cb50c;border-radius:5px;margin-right:20px}.green-card-button{background-color:#fff;border-radius:5px;color:#000}.depositing-button{background-color:#dcdcdc;border-radius:5px;color:#000}",""]),o.locals={},t.exports=o},486:function(t,e,r){"use strict";r.r(e);r(62);var o=r(8),n=(r(53),r(21),r(46),r(13),r(99),r(47),r(45),r(331)),l=r(336),d=r(338),c={data:function(){return{totalDeposit:"",totalWithdrawal:"",activeDeposit:"",pendingWithdrawal:"",transactions:[],user:""}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},capitalizeWord:function(data){return data.charAt(0).toUpperCase()+data.slice(1)},getVolumes:function(data){var t=this;data.forEach((function(e){"withdrawal"==e._id?t.withdrawal=e.volume:t.deposit=e.volume}))},getActive:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){t+=e.amount})),t},getPendingWithdrawal:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){0==e.status&&"withdrawal"==e.transactionType&&(t+=e.amount)})),t},getTotalWithdrawal:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){"withdrawal"==e.transactionType&&(t+=e.amount)})),t},getTotalDeposit:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){"deposit"==e.transactionType&&(t+=e.amount)})),t},getWallets:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:r=e.sent,t.wallets=t.checkItems(r.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getActiveDeposit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/transactions/active-deposits/?username=".concat(t.user.username));case 3:r=e.sent,t.activeDeposit=t.getActive(r.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getTransactions:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="?username=".concat(t.user.username,"&limit=5&sort=-time"),e.prev=1,e.next=4,t.$axios.get("/transactions/".concat(r));case 4:o=e.sent,t.pendingWithdrawal=t.getPendingWithdrawal(o.data.data),t.totalWithdrawal=t.getTotalWithdrawal(o.data.data),t.totalDeposit=t.getTotalDeposit(o.data.data),t.transactions=o.data.data,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},getAUser:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:r=e.sent,t.user=r.data.user,t.getTransactions(),t.getActiveDeposit(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.getAUser()},computed:{authUser:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardFooter:n.default,DashboardNavigation:d.default,DashboardHeader:l.default}},h=(r(413),r(61)),component=Object(h.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-holder"},[e("div",{staticClass:"dashboard"},[e("DashboardNavigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"card-holder"},[e("div",{staticClass:"top-card-one"},[e("div",{staticClass:"circle-bg"},[t._m(0),t._v(" "),e("div",{staticClass:"middle-holder"},[e("div",{staticClass:"middle-side-content"},[t._m(1),t._v(" "),e("div",{staticClass:"sub-text-holder"},[e("div",{staticClass:"sub-text"},[t._v(t._s(t.user.fullName))])])]),t._v(" "),e("div",{staticClass:"thick-header-holder"},[e("h1",{staticClass:"thick-header"},[e("span",{staticClass:"text-span"},[t._v("$"+t._s(t.user.totalBalance)+" USD")])])])]),t._v(" "),e("div",{staticClass:"card-button-holder"},[e("nuxt-link",{staticClass:"transact-button w-button",attrs:{to:"/dashboard/deposit"}},[t._v("Deposit")]),e("nuxt-link",{staticClass:"depositing-button w-button",attrs:{to:"/dashboard/withdrawal-funds"}},[t._v("Withdraw")])],1)])]),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"short-card-hold"},[e("div",{staticClass:"short-card-holder"},[e("div",{staticClass:"each-short-card"},[e("div",{staticClass:"short-top"},[e("div",{staticClass:"short-side-contents"},[t._m(3),t._v(" "),e("div",{staticClass:"short-middle-flexer"},[e("div",{staticClass:"main-text-holder"},[e("div",{staticClass:"main-text"},[t._v("\n                      $"+t._s(t.formatMoney(t.totalDeposit))+" USD\n                    ")])]),t._v(" "),e("img",{staticClass:"image-18 link",attrs:{src:"/dashboard-images/link-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("img",{staticClass:"deposit-icon-1",attrs:{src:"/dashboard-images/bank-finance-loan-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"short-down"},[e("h1",{staticClass:"sub-heading"},[t._v("\n                $"+t._s(t.formatMoney(t.totalDeposit))+" USD\n              ")]),t._v(" "),e("img",{staticClass:"image-17 dot",attrs:{src:"/dashboard-images/3-vertical-dots-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"each-short-card"},[e("div",{staticClass:"short-top"},[e("div",{staticClass:"short-side-contents"},[t._m(4),t._v(" "),e("div",{staticClass:"short-middle-flexer"},[e("div",{staticClass:"main-text-holder"},[e("div",{staticClass:"main-text"},[t._v("$"+t._s(t.activeDeposit)+" USD")])]),t._v(" "),e("img",{staticClass:"image-18 link",attrs:{src:"/dashboard-images/link-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("img",{staticClass:"deposit-icon-2",attrs:{src:"/dashboard-images/active.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"short-down"},[e("h1",{staticClass:"sub-heading"},[t._v("$"+t._s(t.activeDeposit)+" USD")]),t._v(" "),e("img",{staticClass:"image-17 dot",attrs:{src:"/dashboard-images/3-vertical-dots-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"each-short-card"},[e("div",{staticClass:"short-top"},[e("div",{staticClass:"short-side-contents"},[t._m(5),t._v(" "),e("div",{staticClass:"short-middle-flexer"},[e("div",{staticClass:"main-text-holder"},[e("div",{staticClass:"main-text"},[t._v("$"+t._s(t.pendingWithdrawal)+" USD")])]),t._v(" "),e("img",{staticClass:"image-18 link",attrs:{src:"/dashboard-images/link-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("img",{staticClass:"deposit-icon-3",attrs:{src:"/dashboard-images/pending.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"short-down"},[e("h1",{staticClass:"sub-heading"},[t._v("$"+t._s(t.pendingWithdrawal)+" USD")]),t._v(" "),e("img",{staticClass:"image-17 dot",attrs:{src:"/dashboard-images/3-vertical-dots-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"each-short-card"},[e("div",{staticClass:"short-top"},[e("div",{staticClass:"short-side-contents"},[t._m(6),t._v(" "),e("div",{staticClass:"short-middle-flexer"},[e("div",{staticClass:"main-text-holder"},[e("div",{staticClass:"main-text"},[t._v("$"+t._s(t.totalWithdrawal)+" USD")])]),t._v(" "),e("img",{staticClass:"image-18 link",attrs:{src:"/dashboard-images/link-icon.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("img",{staticClass:"deposit-icon-4",attrs:{src:"/dashboard-images/total.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"short-down"},[e("h1",{staticClass:"sub-heading"},[t._v("$"+t._s(t.totalWithdrawal)+" USD")]),t._v(" "),e("img",{staticClass:"image-17 dot",attrs:{src:"/dashboard-images/3-vertical-dots-icon.svg",loading:"lazy",alt:""}})])])])]),t._v(" "),e("div",{staticClass:"details-holder"},[e("div",{staticClass:"first-table-container"},[e("div",{staticClass:"table"},[t._m(7),t._v(" "),e("div",{staticClass:"main-table"},[t._m(8),t._v(" "),t._l(t.transactions,(function(r){return e("div",{key:r._id,staticClass:"light-table-holder"},[t._m(9,!0),t._v(" "),e("div",{staticClass:"table-transaction-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("\n                    "+t._s(t.capitalizeWord(r.transactionType))+"\n                  ")])]),t._v(" "),e("div",{staticClass:"symbols"},[e("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),e("img",{staticClass:"deposit-bitcoin slash",attrs:{src:"".concat(t.FILE_URL,"/").concat(r.symbol),loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"table-amount-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("\n                    $"+t._s(t.formatMoney(r.amount))+" USD\n                  ")])]),t._v(" "),e("div",{staticClass:"table-date-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("\n                    "+t._s(t.formatDate(r.time))+"\n                  ")])])])}))],2)])]),t._v(" "),e("div",{staticClass:"details-two"},[t._m(10),t._v(" "),e("div",{staticClass:"day-holder"},[e("div",{staticClass:"each-day active"},[e("div",{staticClass:"day-top-holder"},[t._m(11),t._v(" "),e("div",{staticClass:"day-header-holder"},[e("h1",{staticClass:"main-header"},[t._v("$"+t._s(t.totalDeposit)+" USD")])])])]),t._v(" "),e("div",{staticClass:"each-day"},[e("div",{staticClass:"day-top-holder"},[t._m(12),t._v(" "),e("div",{staticClass:"day-header-holder"},[e("h1",{staticClass:"main-header"},[t._v("$"+t._s(t.totalWithdrawal)+" USD")])])])])])])])],1)],1),t._v(" "),e("DashboardFooter")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-top-holder"},[e("div",{staticClass:"black-text"},[t._v("Total")]),t._v(" "),e("div",{staticClass:"black-text"},[t._v("Balance")])])},function(){var t=this._self._c;return t("div",{staticClass:"sub-heading-holder"},[t("h1",{staticClass:"sub-heading"},[this._v("Total Balance")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-card-two"},[e("div",{staticClass:"top-card-cover"},[e("div",{staticClass:"card-header-holder"},[e("h1",{staticClass:"card-header"},[t._v("Define Standing orders")])]),t._v(" "),e("div",{staticClass:"card-texts-holder"},[e("div",{staticClass:"card-text"},[t._v("\n                Dashboard concept design on storage"),e("br"),t._v("management. Users can\n                easily upload and manage their file on cloud with additional\n              ")])]),t._v(" "),e("a",{staticClass:"green-card-button w-button",attrs:{href:"#"}},[t._v("Define electing orders")])])])},function(){var t=this._self._c;return t("div",{staticClass:"main-header-holder"},[t("h1",{staticClass:"main-header"},[this._v("Total Deposit")])])},function(){var t=this._self._c;return t("div",{staticClass:"main-header-holder"},[t("h1",{staticClass:"main-header"},[this._v("Active Deposit")])])},function(){var t=this._self._c;return t("div",{staticClass:"main-header-holder"},[t("h1",{staticClass:"main-header"},[this._v("Pending Withdrawal")])])},function(){var t=this._self._c;return t("div",{staticClass:"main-header-holder"},[t("h1",{staticClass:"main-header"},[this._v("Total Withdrawal")])])},function(){var t=this._self._c;return t("div",{staticClass:"details-top-holder"},[t("div",{staticClass:"details-texts-holder"},[t("div",{staticClass:"main-header"},[this._v("Latest Transaction")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"light-table-holder table-green"},[e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header"},[t._v("S/N")])]),t._v(" "),e("div",{staticClass:"table-transaction-holder"},[e("h1",{staticClass:"table-header"},[t._v("Transactions")])]),t._v(" "),e("div",{staticClass:"symbols"},[e("h1",{staticClass:"table-header"},[t._v("Symbols")])]),t._v(" "),e("div",{staticClass:"table-amount-holder"},[e("h1",{staticClass:"table-header"},[t._v("Amounts")])]),t._v(" "),e("div",{staticClass:"table-date-holder"},[e("h1",{staticClass:"table-header"},[t._v("Dates")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("1.")])])},function(){var t=this._self._c;return t("div",{staticClass:"details-top-holder"},[t("div",{staticClass:"details-texts-holder"},[t("div",{staticClass:"main-header"},[this._v("Total Volume")])])])},function(){var t=this._self._c;return t("div",{staticClass:"day-text-holder"},[t("div",{staticClass:"main-text"},[this._v("Deposit")])])},function(){var t=this._self._c;return t("div",{staticClass:"day-text-holder"},[t("div",{staticClass:"main-text"},[this._v("Withdrawal")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:r(338).default,DashboardHeader:r(336).default,DashboardFooter:r(331).default})}}]);