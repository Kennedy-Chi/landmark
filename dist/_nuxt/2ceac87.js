(window.webpackJsonp=window.webpackJsonp||[]).push([[46,20,21,22],{343:function(t,e,r){"use strict";var n=r(2),o=r(3),l=r(39),c=r(27),d=r(40),h=r(235),v=r(14),m=r(4),f=r(234),_=r(152),C=r(344),x=r(345),y=r(93),w=r(346),k=[],D=o(k.sort),R=o(k.push),L=m((function(){k.sort(void 0)})),N=m((function(){k.sort(null)})),$=_("sort"),z=!m((function(){if(y)return y<70;if(!(C&&C>3)){if(x)return!0;if(w)return w<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)k.push({k:t+r,v:e})}for(k.sort((function(a,b){return b.v-a.v})),r=0;r<k.length;r++)t=k[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:L||!N||!$||!z},{sort:function(t){void 0!==t&&l(t);var e=c(this);if(z)return void 0===t?D(e):D(e,t);var r,n,o=[],m=d(e);for(n=0;n<m;n++)n in e&&R(o,e[n]);for(f(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:v(e)>v(r)?1:-1}}(t)),r=d(o),n=0;n<r;)e[n]=o[n++];for(;n<m;)h(e,n++);return e}})},344:function(t,e,r){var n=r(72).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},345:function(t,e,r){var n=r(72);t.exports=/MSIE|Trident/.test(n)},346:function(t,e,r){var n=r(72).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},355:function(t,e,r){var content=r(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(151).default)("bdf5d396",content,!0,{sourceMap:!1})},356:function(t,e,r){"use strict";r.r(e);var n={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var r=document.querySelector("#top");r?r.appendChild(e):console.error("Could not find app node to append script element")}},mounted:function(){this.loadScript(),this.setFileURL()}},o=r(57),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"down-logo-header"},[this._v("\n    2023 Crypto Investment, All Right Reserved\n  ")])])}],!1,null,null,null);e.default=component.exports},357:function(t,e,r){var content=r(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(151).default)("1306d97e",content,!0,{sourceMap:!1})},362:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(49),{head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/Dashboard.css"}]}},data:function(){return{company:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},getCompany:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return r=e.sent,e.next=6,r.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getCompany()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}}),l=(r(370),r(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo",attrs:{id:"top"}},[e("img",{staticClass:"image-37 dash",attrs:{src:"/dashboard-images/hamburger.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo dash",attrs:{src:"/dashboard-images/Landmark-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("div",{staticClass:"welcome-holder"},[e("div",{staticClass:"top-header-holder"},[e("h1",{staticClass:"top-header"},[t._v("Welcome To "+t._s(t.company.companyName))])]),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("Hi, "+t._s(t.user.fullName)+" Welcome back.")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[e("nuxt-link",{staticClass:"icon-holder gap",attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/user-persona-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"icon-holder",on:{click:t.logout}},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/switch-on-off-button-icon.svg",loading:"lazy",alt:""}})])],1)])}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(26),r(49),{data:function(){return{route:"",company:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},getCompany:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return r=e.sent,e.next=6,r.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav(),this.getCompany()}}),l=(r(368),r(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{hide:!t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close dash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/644620af8a8f42c537677a46_close.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder w-inline-block",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposit.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-withdrawal-funds"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/withdrawal.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Withdraw")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/earnings.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit-list"==t.route},attrs:{to:"/dashboard/deposit-list"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/transactions.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit List")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-history"==t.route},attrs:{to:"/dashboard/history"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposits.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Earnings")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-referrals"==t.route},attrs:{to:"/dashboard/referrals"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/referral.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Referrals")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Settings")])]),t._v(" "),e("span",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/logout.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("\n        @"+t._s(t.company.companyName)+" - "+t._s((new Date).getFullYear())+"\n      ")]),t._v(" "),e("div",{staticClass:"down-logo-texts"},[t._v("\n        Thanks for choosing "+t._s(t.company.companyName)+", we'll be glad you tell\n        others about us.\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,r){"use strict";r(355)},369:function(t,e,r){var n=r(150)((function(i){return i[1]}));n.push([t.i,".image-7.nav{width:18px}.board-logo-holder{position:relative}.menu-close.dash{display:none}@media screen and (max-width:767px){.menu-close.dash{display:block;right:-180px;top:20px}}",""]),n.locals={},t.exports=n},370:function(t,e,r){"use strict";r(357)},371:function(t,e,r){var n=r(150)((function(i){return i[1]}));n.push([t.i,".image-14.dash{width:25px}.logo.dash{display:block;min-width:100px}@media screen and (max-width:767px){.image-37.dash{display:block;width:25px}}",""]),n.locals={},t.exports=n},537:function(t,e,r){"use strict";r.r(e);r(58);var n=r(8),o=(r(49),r(43),r(20),r(42),r(11),r(95),r(33),r(53),r(343),r(356)),l=r(362),c={data:function(){return{plans:[],transactions:[],limit:10,sort:"-time"}},methods:{capitalize:function(data){return data.charAt(0).toUpperCase()+data.slice(1)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getTransactions:function(t){return this.transactions.filter((function(e){return e.planName===t})).map((function(t){return t}))},getPlans:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:r=e.sent,t.plans=r.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getDeposits:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/transactions/history/?transactionType=deposit&username=".concat(t.user.username,"&limit=").concat(t.limit,"&sort=").concat(t.sort));case 3:r=e.sent,t.transactions=r.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getPlans(),this.getDeposits()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardFooter:o.default,DashboardHeader:l.default}},d=r(57),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"deposit-list-holder"},[e("div",{staticClass:"deposit-list"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),t._m(0),t._v(" "),t._l(t.plans,(function(r){return e("div",{key:r._id,staticClass:"deposit-list-second"},[e("div",{staticClass:"deposit-button-top"},[e("h1",{staticClass:"main-heading"},[t._v(t._s(r.planName))])]),t._v(" "),e("div",{staticClass:"table-plan-holder"},[e("div",{staticClass:"table"},[e("div",{staticClass:"main-table"},[t._m(1,!0),t._v(" "),t._l(t.getTransactions(r.planName),(function(r,n){return e("div",{key:r._id,staticClass:"light-table-holder"},[e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v(t._s(n+1)+".")])]),t._v(" "),e("div",{staticClass:"table-transaction-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("Transactions")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("\n                    "+t._s(t.capitalize(r.transactionType))+"\n                  ")])]),t._v(" "),e("div",{staticClass:"symbols"},[e("h1",{staticClass:"table-header slash"},[t._v("Symbols")]),t._v(" "),e("img",{staticClass:"deposit-bitcoin slash",attrs:{src:"".concat(t.FILE_URL,"/").concat(r.symbol),loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"table-amount-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("Amounts")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v(t._s(r.amount))])]),t._v(" "),e("div",{staticClass:"table-date-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("Dates")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("\n                    "+t._s(t.formatDate(r.time))+"\n                  ")])])])}))],2)])])])}))],2)],1),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"deposit-list-second"},[t("h1",{staticClass:"main-heading"},[this._v("List of Deposits")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"light-table-holder table-green"},[e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header"},[t._v("S/N")])]),t._v(" "),e("div",{staticClass:"table-transaction-holder"},[e("h1",{staticClass:"table-header"},[t._v("Transactions")])]),t._v(" "),e("div",{staticClass:"symbols"},[e("h1",{staticClass:"table-header"},[t._v("Wallet")])]),t._v(" "),e("div",{staticClass:"table-amount-holder"},[e("h1",{staticClass:"table-header"},[t._v("Amounts")])]),t._v(" "),e("div",{staticClass:"table-date-holder"},[e("h1",{staticClass:"table-header"},[t._v("Dates")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:r(366).default,DashboardHeader:r(362).default,DashboardFooter:r(356).default})}}]);