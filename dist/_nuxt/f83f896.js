(window.webpackJsonp=window.webpackJsonp||[]).push([[44,20,21,22],{330:function(t,e,r){var content=r(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(150).default)("8bff8cba",content,!0,{sourceMap:!1})},331:function(t,e,r){"use strict";r.r(e);var l={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},n=r(61),component=Object(n.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"down-logo-header"},[this._v("\n    2023 Crypto Investment, All Right Reserved\n  ")])])}],!1,null,null,null);e.default=component.exports},333:function(t,e,r){var content=r(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(150).default)("3c03726f",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";r.r(e);var l={head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/Dashboard.css"}]}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")}},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}},n=(r(344),r(61)),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo"},[e("img",{staticClass:"image-37 dash",attrs:{src:"/dashboard-images/hamburger.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),t._v(" "),e("img",{staticClass:"logo dash",attrs:{src:"/images/Landmark-logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"welcome-holder"},[t._m(0),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("Hi, "+t._s(t.user.fullName)+" Welcome back.")])])])]),t._v(" "),t._m(1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"top-header-holder"},[t("h1",{staticClass:"top-header"},[this._v("Welcome To Bitpal")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon-profile-holder"},[e("div",{staticClass:"icon-holder gap"},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/user-persona-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"icon-holder gap"},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/bell-notification-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"icon-holder"},[e("img",{staticClass:"image-14 dash",attrs:{src:"/dashboard-images/switch-on-off-button-icon.svg",loading:"lazy",alt:""}})])])}],!1,null,null,null);e.default=component.exports},338:function(t,e,r){"use strict";r.r(e);var l=r(8),n=(r(30),r(53),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()}}),o=(r(341),r(61)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{hide:!t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close dash",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/644620af8a8f42c537677a46_close.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder w-inline-block",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Landmark-logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/deposit.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Deposit")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-withdrawal-funds"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/withdrawal.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Withdraw")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/withdrawal-funds"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/transactions.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-history"==t.route},attrs:{to:"/dashboard/history"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/earnings.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Earnings")])]),t._v(" "),e("nuxt-link",{staticClass:"each-button-flexer",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Settings")])]),t._v(" "),e("span",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-7 nav",attrs:{src:"/dashboard-images/logout.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("@ Bitpal - 2023")]),t._v(" "),e("div",{staticClass:"down-logo-texts"},[t._v("\n        This is some text inside of a div block.\n      ")])])}],!1,null,null,null);e.default=component.exports},341:function(t,e,r){"use strict";r(330)},342:function(t,e,r){var l=r(149)((function(i){return i[1]}));l.push([t.i,".image-7.nav{width:18px}.board-logo-holder{position:relative}.menu-close.dash{display:none}@media screen and (max-width:767px){.menu-close.dash{display:block;right:-180px;top:20px}}",""]),l.locals={},t.exports=l},344:function(t,e,r){"use strict";r(333)},345:function(t,e,r){var l=r(149)((function(i){return i[1]}));l.push([t.i,".image-14.dash{width:25px}.logo.dash{min-width:100px}@media screen and (max-width:767px){.image-37.dash{display:block;width:25px}}",""]),l.locals={},t.exports=l},395:function(t,e,r){var content=r(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(150).default)("2311e3e0",content,!0,{sourceMap:!1})},460:function(t,e,r){"use strict";r(395)},461:function(t,e,r){var l=r(149)((function(i){return i[1]}));l.push([t.i,".input-upload-holder{margin-top:20px}.text-field-2.w-input{background:#fff;color:#333}.button.custom{background:#7cb50c;border-radius:5px;color:#fff}",""]),l.locals={},t.exports=l},503:function(t,e,r){"use strict";r.r(e);r(62),r(30);var l=r(8),n=(r(53),r(97),r(21),r(46),r(13),r(99),r(331)),o={data:function(){return{amount:"",plan:"",wallet:"",currency:"",qrcodeSize:200,response:"",isError:!1,showResponse:!1}},methods:{callResponse:function(t,e){var r=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){r.showResponse=!1}),6e3)},formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},copyInputValue:function(){document.getElementById("walletAddress").select(),document.execCommand("copy")},generateCode:function(){var t=document.getElementById("qrcode"),e=200,r=this.currency.address,l="https://chart.googleapis.com/chart?chs=".concat(e,"x").concat(e,"&cht=qr&chl=").concat(r),img=new Image;img.src=l,img.width=e,img.height=e,t.appendChild(img)},goBack:function(){this.$router.push("/dashboard/deposit")},makeDeposit:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form={amount:t.amount,symbol:t.currency.symbol,transactionType:"deposit",username:t.user.username,referredBy:t.user.referredBy,user:t.user,planName:t.plan.planName,planDuration:t.plan.planDuration,planCycle:t.plan.planCycle,walletName:t.currency.name,percent:t.plan.planPercentage,currencyId:t.currency._id,walletId:t.wallet._id,time:(new Date).getTime(),fromBalance:t.$route.query.fromBalance},e.prev=1,e.next=4,t.$axios.post("/transactions",form);case 4:t.callResponse("The deposit is pending and will be approved after confirmation",!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},getCurrency:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.get("/currency/".concat(t,"/?username=").concat(e.user.username));case 3:l=r.sent,e.currency=l.data.data,e.wallet=l.data.wallet,r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0.response.data.message);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},getWallet:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.get("/wallet/".concat(t));case 3:l=r.sent,e.wallet=l.data.data,r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0.response.data.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},getPlan:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.get("/plans/".concat(t));case 3:l=r.sent,e.plan=l.data.data,r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0.response);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}},mounted:function(){this.amount=this.$route.query.amount,this.getCurrency(this.$route.query.currencyId),this.getPlan(this.$route.query.planId),"true"==this.$route.query.fromBalance&&this.getWallet(this.$route.query.walletId),this.generateCode()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardHeader:r(336).default,DashboardFooter:n.default}},c=(r(460),r(61)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"comfirm-deposit-holder"},[e("div",{staticClass:"comfirm-deposit"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"scan-section-holder"},[t._m(0),t._v(" "),e("div",{staticClass:"scan-div"},[t._m(1),t._v(" "),e("div",{attrs:{id:"qrcode"}}),t._v(" "),e("div",{staticClass:"input-upload-holder"},[e("div",{staticClass:"scan-form w-form"},[e("div",{staticClass:"over-flow"},[e("div",{staticClass:"upload-address-holder"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.currency.address,expression:"currency.address"}],staticClass:"text-field-2 w-input",attrs:{type:"text",id:"walletAddress"},domProps:{value:t.currency.address},on:{input:function(e){e.target.composing||t.$set(t.currency,"address",e.target.value)}}}),t._v(" "),e("div",{staticClass:"upload-icon-holder",on:{click:t.copyInputValue}},[e("img",{staticClass:"copied-icon",attrs:{src:"/dashboard-images/copy.svg",loading:"lazy",alt:""}})])])])])])])]),t._v(" "),e("div",{staticClass:"scan-deposit-table"},[e("div",{staticClass:"table"},[t._m(2),t._v(" "),e("div",{staticClass:"main-table"},[t._m(3),t._v(" "),e("div",{staticClass:"light-table-holder"},[t._m(4),t._v(" "),t._m(5),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v(t._s(t.formatDate(new Date)))])])]),t._v(" "),e("div",{staticClass:"light-table-holder"},[t._m(6),t._v(" "),t._m(7),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v(t._s(t.plan.planPercentage)+"%")])])]),t._v(" "),e("div",{staticClass:"light-table-holder"},[t._m(8),t._v(" "),t._m(9),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("\n                  "+t._s(t.plan.planPeriod)+" for "+t._s(t.plan.planDuration)+" days\n                ")])])]),t._v(" "),t._m(10),t._v(" "),e("div",{staticClass:"light-table-holder"},[t._m(11),t._v(" "),t._m(12),t._v(" "),t.currency?e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("img",{staticClass:"wallet-img",attrs:{src:"".concat(t.FILE_URL,"/").concat(t.currency.symbol),alt:""}}),t._v(" "),e("h1",{staticClass:"table-header"},[t._v(t._s(t.currency.name))])]):t._e()]),t._v(" "),e("div",{staticClass:"light-table-holder"},[t._m(13),t._v(" "),t._m(14),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v(t._s(t.formatMoney(t.amount)))])])]),t._v(" "),e("div",{staticClass:"light-table-holder"},[t._m(15),t._v(" "),t._m(16),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("\n                  $"+t._s(t.formatMoney(t.amount*t.plan.planPercentage*t.plan.planDuration/100+1*t.amount))+"\n                ")])])])])])]),t._v(" "),e("div",{staticClass:"scan-button-holder"},[e("div",{staticClass:"green-button-pad"},[e("button",{staticClass:"green-button custom w-button",on:{click:t.makeDeposit}},[t._v("\n            Confirm Deposit\n          ")])]),t._v(" "),e("button",{staticClass:"green-button custom w-button",on:{click:t.goBack}},[t._v("\n          Go Back\n        ")])])],1)],1),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"balance-header-holder"},[t("h1",{staticClass:"main-heading"},[this._v("Deposit Comfirmation")])])},function(){var t=this._self._c;return t("div",{staticClass:"scan-toptext-holder"},[t("div",{staticClass:"down-logo-texts"},[this._v("You can scan the code below")])])},function(){var t=this._self._c;return t("div",{staticClass:"details-top-holder"},[t("div",{staticClass:"details-texts-holder"},[t("div",{staticClass:"main-header"},[this._v("Latest Transaction")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"light-table-holder table-green"},[e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header"},[t._v("S/N")])]),t._v(" "),e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header"},[t._v("Title")])]),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header"},[t._v("Description")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("1.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Card At")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("2.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("No Profit")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("3.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Duration")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"light-table-holder"},[e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("4.")])]),t._v(" "),e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Principal Return")])]),t._v(" "),e("div",{staticClass:"table-amount-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Description")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Yes (Return 100% Principal)")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("5")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Wallet")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("6.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Deposit")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"sn-holder"},[e("h1",{staticClass:"table-header slash"},[t._v("S/N")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("7.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-transaction-holder long"},[e("h1",{staticClass:"table-header slash"},[t._v("Title")]),t._v(" "),e("h1",{staticClass:"table-header"},[t._v("Total Return")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:r(338).default,DashboardHeader:r(336).default,DashboardFooter:r(331).default})}}]);