(window.webpackJsonp=window.webpackJsonp||[]).push([[32,4,5,6,7,14],{342:function(t,e,n){var content=n(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(150).default)("4c814224",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";n.r(e);var r={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},c=n(57),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer",attrs:{id:"footer"}},[t("div",[this._v("www.kennytechstudios.com")])])}],!1,null,null,null);e.default=component.exports},344:function(t,e,n){"use strict";n.r(e);n(50),n(59);var r=n(8),c=(n(26),n(49),{data:function(){return{route:""}},computed:{navState:function(){return this.$store.state.adminNavState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},hideNav:function(){this.$store.commit("HIDE_NAV")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.route=this.$route.name,this.hideNav()}}),o=(n(357),n(57)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[e("div",{staticClass:"sticky-navbar"},[e("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[e("img",{staticClass:"brand",attrs:{src:"/admin-images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/admin-images/Logo.png 500w, /admin-images/Logo.png 800w, /admin-images/Logo.png 1080w, /admin-images/Logo.png 2284w",alt:""}})]),t._v(" "),e("img",{staticClass:"menu-close",attrs:{src:"/admin-images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("ul",{staticClass:"nav-list",attrs:{role:"list"}},[e("li",{staticClass:"nav-list"},[e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin"==t.route},attrs:{to:"/admin"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin"==t.route?"colored-dashboard.svg":"dashboard.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-users"==t.route},attrs:{to:"/admin/users"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-users"==t.route?"colored-users.svg":"users.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Users")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("add-user")},attrs:{to:"/admin/add-user/new"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("add-user")?"colored-user.svg":"user.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Add User")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-plans"==t.route},attrs:{to:"/admin/plans"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-accounts"==t.route?"colored-plans.svg":"plans.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Plans")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-reviews"==t.route},attrs:{to:"/admin/reviews"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-reviews"==t.route?"colored-reviews.svg":"reviews.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Reviews")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-currencies"==t.route},attrs:{to:"/admin/currencies"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-currencies"==t.route?"colored-currency.svg":"currency.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Currencies")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("transactions")},attrs:{to:"/admin/transactions/list"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("transactions")?"colored-deposit.svg":"deposit.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-active-deposits"==t.route},attrs:{to:"/admin/active-deposits"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-active-deposits"==t.route?"colored-active.svg":"active.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Active Deposits")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-email"==t.route},attrs:{to:"/admin/email"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-email"==t.route?"colored-emails.svg":"emails.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Emails")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-pages"==t.route},attrs:{to:"/admin/pages"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-pages"==t.route?"colored-pages.svg":"pages.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Pages")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-settings"==t.route},attrs:{to:"/admin/settings"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-settings"==t.route?"colored-settings.svg":"settings.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Settings")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-referrals"==t.route},attrs:{to:"/admin/referrals"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-referrals"==t.route?"colored-referrals.svg":"referrals.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Referrals")])]),t._v(" "),e("span",{staticClass:"nav-link w-inline-block",on:{click:t.logout}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/logout.svg\n            ",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Logout")])])],1)])],1)])}),[],!1,null,null,null);e.default=component.exports},345:function(t,e,n){"use strict";n.r(e);var r=n(8),c=(n(49),{head:function(){return{link:[{rel:"stylesheet",href:"/css/main.css",type:"text/css"}]}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},authenticateUser:function(){this.isAuthenticated?"User"==this.user.status&&this.$router.push("/dashboard"):this.$router.push("/")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.authenticateUser()},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user}}}),o=n(57),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-header"},[e("img",{staticClass:"menu",attrs:{src:"/admin-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("div",{staticClass:"top-icons"},[e("img",{staticClass:"top-icon",attrs:{src:"/admin-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/admin-images/logout.svg",loading:"lazy",alt:""},on:{click:t.logout}})])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"notification"},[e("div",{staticClass:"badge"}),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/admin-images/notification.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"custom-card pie-chart-holder notify"},[e("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])])}],!1,null,null,null);e.default=component.exports},346:function(t,e,n){"use strict";var r=n(2),c=n(4),o=n(40),l=n(27),v=n(41),d=n(234),m=n(14),f=n(3),h=n(233),_=n(151),C=n(350),w=n(351),y=n(95),k=n(352),T=[],x=c(T.sort),L=c(T.push),A=f((function(){T.sort(void 0)})),R=f((function(){T.sort(null)})),P=_("sort"),$=!f((function(){if(y)return y<70;if(!(C&&C>3)){if(w)return!0;if(k)return k<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)T.push({k:t+n,v:e})}for(T.sort((function(a,b){return b.v-a.v})),n=0;n<T.length;n++)t=T[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:A||!R||!P||!$},{sort:function(t){void 0!==t&&o(t);var e=l(this);if($)return void 0===t?x(e):x(e,t);var n,r,c=[],f=v(e);for(r=0;r<f;r++)r in e&&L(c,e[r]);for(h(c,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:m(e)>m(n)?1:-1}}(t)),n=v(c),r=0;r<n;)e[r]=c[r++];for(;r<f;)d(e,r++);return e}})},347:function(t,e,n){"use strict";n.r(e);var r={props:{msg:{type:String},state:{type:Boolean}},methods:{getState:function(){return this.$store.state.confirmState},confirm:function(data){this.$emit("confirm",data)}},computed:{}},c=n(57),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"confirm-action",class:{hide:t.state}},[e("div",{staticClass:"confirm-box"},[e("div",[t._v(t._s(t.msg))]),t._v(" "),e("div",{staticClass:"confirm-holder"},[e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("yes")}}},[t._v("Yes")]),e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("no")}}},[t._v("No")])])])])}),[],!1,null,null,null);e.default=component.exports},350:function(t,e,n){var r=n(72).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},351:function(t,e,n){var r=n(72);t.exports=/MSIE|Trident/.test(r)},352:function(t,e,n){var r=n(72).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},357:function(t,e,n){"use strict";n(342)},358:function(t,e,n){var r=n(149)((function(i){return i[1]}));r.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a,span.nav-link{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),r.locals={},t.exports=r},359:function(t,e,n){"use strict";n.r(e);var r={},c=n(57),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("INSTRUCTION")]),t._v(" "),e("div",{staticClass:"instruction"},[t._v("\n    Kindly fill in the required fields above to create a plan, in the case of\n    any confusion on how the above form works, kindly visit our\n    "),e("span",{staticClass:"custom-link"},[t._v("youtub link")]),t._v(", or our\n    "),e("span",{staticClass:"custom-link"},[t._v("website ")]),t._v("to watch the video tutorial\n    related to this form.\n  ")])])}],!1,null,null,null);e.default=component.exports},406:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(150).default)("1bf0f2af",content,!0,{sourceMap:!1})},460:function(t,e,n){"use strict";n(406)},461:function(t,e,n){var r=n(149)((function(i){return i[1]}));r.push([t.i,".banner.symbol{height:35px;width:auto}",""]),r.locals={},t.exports=r},494:function(t,e,n){"use strict";n.r(e);n(58),n(26);var r=n(8),c=n(28),o=(n(49),n(20),n(39),n(13),n(94),n(93),n(346),n(343)),l=n(344),v=n(345),d=n(347),m={data:function(){return{showEditButton:!1,showTransactionList:!1,showWalletList:!1,showPlanList:!1,hideTransactionFilter:!0,transactionFilters:["All Transactions","Deposit","Withdrawal","Approved","Pending"],transactionFilter:"All Transactions",transactionTypes:["deposit"],transactionType:"Choose Transaction Type",walletTypes:[],walletType:"Select Wallet",planTypes:[],planType:"Select Plan",transactions:[],transaction:"",narration:"",amount:"",dateTime:"",user:"",username:"",company:"",response:"",responseState:!1,showResponse:!1,confirmMessage:"",confirmState:!0,editingItem:"",deleteId:"",sort:"-time",field:"",limit:5,resultLength:"",currentPage:1,pages:function(){for(var t=[],e=Math.ceil(this.resultLength/this.limit),i=0;i<e;i++)t.push("i");return t}}},methods:{checkId:function(){return null==this.$route.params||24!=this.$route.params.id.length?(this.showEditButton=!1,!1):(this.showEditButton=!0,!0)},getTime:function(data){return data?new Date(data).toLocaleTimeString():"Not Available"},showConfirmation:function(t){"Select Email"==this.selectedEmailName?this.showResponseMsg("Please select email template",!1):(this.confirmMessage=t,this.confirmStatus=!1)},paginate:function(t){this.currentPage=t,this.getTransactions()},deleteConfirmation:function(t,e){this.deleteId=e,this.confirmMessage=t,this.confirmState=!1},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},formatDate:function(data){if(!data)return"Not Available";var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},showResponseMsg:function(t,e){var n=this;this.response=t,this.responseState=e,this.showResponse=!0,setTimeout((function(){n.response="",n.showResponse=!1}),6e3)},cleareInputs:function(){this.editingItem="",this.transactionType="Choose Transaction Type",this.amount="",this.planType="Select Plan",this.walletType="Select Wallet",this.dateTime=""},selectTransaction:function(t){this.transactionType=t,this.showTransactionList=!1},selectWallet:function(t){this.walletType=t.name,this.showWalletList=!1},selectPlan:function(t){this.planType=t.planName,this.showPlanList=!1},filterTransaction:function(t){this.transactionFilter=t,this.hideTransactionFilter=!0},selectAccount:function(t){this.accountType=t.name,this.account=t,this.showAccountList=!1},returnConfirmation:function(data){this.confirmState=!0,this.confirmMessage="","yes"==data&&(""!=this.deleteId?this.deleteTransaction(this.deleteId):this.approveTransaction())},startAproveTransaction:function(t){this.confirmMessage="Are you sure you want to approve this transaction?",this.confirmState=!1,this.editingItem=t},processTransaction:function(){var t,form=(t={username:this.username,amount:this.amount,account:this.account,transactionType:this.transactionType,autoTransact:!0,planName:this.planType,walletName:this.walletType},Object(c.a)(t,"autoTransact",!0),Object(c.a)(t,"user",this.user),Object(c.a)(t,"time",new Date(this.dateTime).getTime()),t);""==this.editingItem?this.createTransaction(form):this.updateTransaction(form)},getPlanDurationDays:function(data){return data/864e5},prepareTransactionEdit:function(t){this.showEditButton=!0,this.editingItem=t,this.username=t.username,this.transactionType=t.transactionType,this.amount=t.amount,this.dateTime=t.date,this.walletType=t.walletName,this.planType=t.planName},createTransaction:function(form){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&sort=").concat(t.sort,"&page=").concat(t.currentPage).concat(t.field),e.prev=1,e.next=4,t.$axios.post("/transactions/".concat(n),form);case 4:t.getTransactions(),t.cleareInputs(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.showResponseMsg(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},getUser:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.get("/users/".concat(t));case 3:r=n.sent,e.user=r.data.data,e.username=e.user.username,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},approveTransaction:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&sort=").concat(t.sort,"&page=").concat(t.currentPage).concat(t.field),t.editingItem.time=(new Date).getTime(),r="deposit"==t.editingItem.transactionType?"/transactions":"/transactions/approve-withdrawal",e.prev=3,e.next=6,t.$axios.patch("".concat(r,"/").concat(t.editingItem._id,"/").concat(n),t.editingItem);case 6:c=e.sent,t.transactions=c.data.data,t.resultLength=c.data.resultLength,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0.response.data.message);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))()},getTransactions:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&sort=").concat(t.sort,"&page=").concat(t.currentPage).concat(t.field),e.prev=1,e.next=4,t.$axios.get("/transactions/".concat(n));case 4:r=e.sent,t.transactions=r.data.data,t.resultLength=r.data.resultLength,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getWallets:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/currency");case 3:n=e.sent,t.walletTypes=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},updateTransaction:function(form){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&sort=").concat(t.sort,"&page=").concat(t.currentPage).concat(t.field),e.prev=1,e.next=4,t.$axios.patch("/transactions/update-transaction/".concat(t.editingItem._id,"/").concat(n),form);case 4:r=e.sent,t.transactions=r.data.data,t.resultLength=r.data.resultLength,t.cleareInputs(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},getPlans:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:n=e.sent,t.planTypes=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},deleteTransaction:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="?limit=".concat(e.limit,"&sort=").concat(e.sort,"&page=").concat(e.currentPage).concat(e.field),n.prev=1,n.next=4,e.$axios.delete("transactions/".concat(t,"/").concat(r));case 4:c=n.sent,e.transactions=c.data.data,e.resultLength=c.data.resultLength,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.response.data);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}},mounted:function(){this.checkId()&&this.getUser(this.$route.params.id),this.getPlans(),this.getWallets(),this.getTransactions()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{Instruction:n(359).default,AdminConfirmation:d.default,AdminFooter:o.default,AdminTopHeader:v.default,AdminNavigation:l.default}},f=(n(460),n(57)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper transactions"},[e("admin-confirmation",{attrs:{msg:t.confirmMessage,state:t.confirmState},on:{confirm:t.returnConfirmation}}),t._v(" "),e("admin-navigation"),t._v(" "),e("div",{staticClass:"body-wrapper"},[e("admin-top-header"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("TRANSACTION HISTORY")]),t._v(" "),e("div",{staticClass:"table-filters"},[e("div",{staticClass:"each-filter-option"},[e("img",{staticClass:"filter-icon drop",attrs:{src:"/admin-images/caret-down-gray.svg",loading:"lazy",alt:""},on:{click:function(e){t.hideTransactionFilter=!t.hideTransactionFilter}}}),t._v(" "),e("h4",{staticClass:"filter-label",on:{click:function(e){t.hideTransactionFilter=!t.hideTransactionFilter}}},[t._v("\n              "+t._s(t.transactionFilter)+"\n            ")]),t._v(" "),e("ul",{staticClass:"filter-list",class:{hide:t.hideTransactionFilter},attrs:{role:"list"}},t._l(t.transactionFilters,(function(filter,n){return e("li",{key:n,staticClass:"filter-items",on:{click:function(e){return t.filterTransaction(filter)}}},[e("div",[t._v(t._s(filter))])])})),0)]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"custom-table"},[t._m(1),t._v(" "),e("tbody",t._l(t.transactions,(function(n,r){return e("tr",{key:n._id},[e("td",[t._v(t._s(r+1))]),t._v(" "),e("td",[t._v(t._s(n.username))]),t._v(" "),e("td",[e("img",{staticClass:"banner symbol",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.symbol),alt:""}})]),t._v(" "),e("td",[t._v(t._s(n.walletName))]),t._v(" "),e("td",[t._v("$"+t._s(t.formatMoney(n.amount)))]),t._v(" "),e("td",[t._v(t._s(n.transactionType))]),t._v(" "),e("td",[t._v(t._s(n.planName))]),t._v(" "),e("td",[t._v(t._s(n.planDuration)+" days")]),t._v(" "),e("td",[t._v("\n                  "+t._s(t.formatDate(n.time))+" "),e("br"),t._v("\n                  "+t._s(t.getTime(n.time))+"\n                ")]),t._v(" "),e("td",[n.status?e("div",{staticClass:"status success"},[t._v("\n                    Approved\n                  ")]):e("div",{staticClass:"status",on:{click:function(e){return t.startAproveTransaction(n)}}},[t._v("\n                    Pending\n                  ")])]),t._v(" "),e("td",[e("div",{staticClass:"filter-box",on:{click:function(e){return t.prepareTransactionEdit(n)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/admin-images/edit-gray.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:function(e){return t.deleteConfirmation("Are you sure you want to delete this transaction?",n._id)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/admin-images/delete-gray.svg",loading:"lazy",alt:""}})])])])})),0)])]),t._v(" "),e("div",{staticClass:"table-label"},[e("div",[e("strong",{staticClass:"bold-text"},[t._v("Results")]),t._v(": "+t._s(t.resultLength)+"\n            "),e("strong",{staticClass:"bold-text-2"},[t._v("Page")]),t._v(" "+t._s(t.currentPage)+" of\n            "+t._s(t.pages().length)+"\n          ")]),t._v(" "),t.pages().length>1?e("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[1!=t.currentPage?e("li",{staticClass:"pagination-item",on:{click:function(e){return t.paginate(t.currentPage-1)}}},[e("img",{staticClass:"pagination-img",attrs:{src:"/admin-images/cheveron-left.svg",loading:"lazy",alt:""}})]):t._e(),t._v(" "),t._l(t.pages().length,(function(n,r){return e("li",{key:r,staticClass:"pagination-item",class:{active:r==t.currentPage-1,hide:r>=3+t.currentPage||r<t.currentPage-3,show:r+1==t.pages().length},on:{click:function(e){return t.paginate(r+1)}}},[e("div",[t._v(t._s(r+1))])])})),t._v(" "),t.currentPage<t.pages(t.currentPage+1).length?e("li",{staticClass:"pagination-item",on:{click:function(e){return t.paginate(t.currentPage+1)}}},[e("img",{staticClass:"pagination-img",attrs:{src:"/admin-images/cheveron-right.svg",loading:"lazy",alt:""}})]):t._e()],2):t._e()]),t._v(" "),t.showEditButton?e("div",{staticClass:"input-wrapper w-form"},[e("div",{staticClass:"input-form"},[e("div",{staticClass:"each-input"},[e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Transaction for "+t._s(t.user.username))]),t._v(" "),e("h4",{staticClass:"select-display",on:{click:function(e){t.showTransactionList=!t.showTransactionList}}},[t._v("\n                "+t._s(t.transactionType)+"\n              ")]),t._v(" "),e("ul",{staticClass:"filter-list down",class:{hide:!t.showTransactionList},attrs:{role:"list"}},t._l(t.transactionTypes,(function(n,i){return e("li",{key:i,staticClass:"filter-items"},[e("div",{on:{click:function(e){return t.selectTransaction(n)}}},[t._v("\n                    "+t._s(n)+"\n                  ")])])})),0),t._v(" "),e("img",{staticClass:"filter-icon middle",attrs:{src:"/admin-images/caret-down-gray.svg",loading:"lazy",alt:""},on:{click:function(e){t.showTransactionList=!t.showTransactionList}}})]),t._v(" "),e("div",{staticClass:"each-input"},[e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Wallet")]),t._v(" "),e("h4",{staticClass:"select-display",on:{click:function(e){t.showWalletList=!t.showWalletList}}},[t._v("\n                "+t._s(t.walletType)+"\n              ")]),t._v(" "),e("ul",{staticClass:"filter-list down",class:{hide:!t.showWalletList},attrs:{role:"list"}},t._l(t.walletTypes,(function(n,i){return e("li",{key:i,staticClass:"filter-items"},[e("div",{on:{click:function(e){return t.selectWallet(n)}}},[t._v("\n                    "+t._s(n.name)+"\n                  ")])])})),0),t._v(" "),e("img",{staticClass:"filter-icon middle",attrs:{src:"/admin-images/caret-down-gray.svg",loading:"lazy",alt:""},on:{click:function(e){t.showWalletList=!t.showWalletList}}})]),t._v(" "),e("div",{staticClass:"each-input"},[e("label",{staticClass:"input-label",attrs:{for:"name-4"}},[t._v("Plan")]),t._v(" "),e("h4",{staticClass:"select-display",on:{click:function(e){t.showPlanList=!t.showPlanList}}},[t._v("\n                "+t._s(t.planType)+"\n              ")]),t._v(" "),e("ul",{staticClass:"filter-list down",class:{hide:!t.showPlanList},attrs:{role:"list"}},t._l(t.planTypes,(function(n,i){return e("li",{key:i,staticClass:"filter-items"},[e("div",{on:{click:function(e){return t.selectPlan(n)}}},[t._v("\n                    "+t._s(n.planName)+"\n                  ")])])})),0),t._v(" "),e("img",{staticClass:"filter-icon middle",attrs:{src:"/admin-images/caret-down-gray.svg",loading:"lazy",alt:""},on:{click:function(e){t.showPlanList=!t.showPlanList}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"plan-input w-input",attrs:{type:"number"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input"},[t._m(3),e("input",{directives:[{name:"model",rawName:"v-model",value:t.dateTime,expression:"dateTime"}],staticClass:"plan-input w-input",attrs:{type:"datetime-local"},domProps:{value:t.dateTime},on:{input:function(e){e.target.composing||(t.dateTime=e.target.value)}}})]),t._v(" "),t.showResponse?e("div",{staticClass:"response",class:{success:t.responseState}},[t._v("\n              "+t._s(t.response)+"\n            ")]):t._e(),t._v(" "),e("div",{staticClass:"button-holder"},[e("input",{staticClass:"button w-button",attrs:{type:"button",value:"Create Transaction"},on:{click:t.processTransaction}}),e("input",{staticClass:"button w-button",attrs:{type:"submit",value:"Cancel","data-wait":"Please wait..."}})])])]):t._e()]),t._v(" "),e("Instruction")],1),t._v(" "),e("admin-footer")],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Sort")]),t._v(" "),e("h4",{staticClass:"filter-label"},[t._v("Name")]),t._v(" "),e("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[e("li",{staticClass:"filter-items"},[e("div",[t._v("Reg. Date")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Deposit")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Suspended")])]),t._v(" "),e("li",{staticClass:"filter-items"},[e("div",[t._v("Blocked")])])]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"/admin-images/caret-down-gray.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("td",[t._v("S/N")]),t._v(" "),e("td",[t._v("Username")]),t._v(" "),e("td",[t._v("Symbol")]),t._v(" "),e("td",[t._v("Wallet")]),t._v(" "),e("td",[t._v("Amount")]),t._v(" "),e("td",[t._v("Transaction")]),t._v(" "),e("td",[t._v("Plan")]),t._v(" "),e("td",[t._v("Duration")]),t._v(" "),e("td",[t._v("Date")]),t._v(" "),e("td",[t._v("Status")]),t._v(" "),e("td",[t._v("Action")])])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"email-3"}},[t._v("Amount"),e("span",{staticClass:"important"},[t._v("*")])])},function(){var t=this,e=t._self._c;return e("label",{staticClass:"input-label",attrs:{for:"email-3"}},[t._v("Date Time"),e("span",{staticClass:"important"},[t._v("*")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminConfirmation:n(347).default,AdminNavigation:n(344).default,AdminTopHeader:n(345).default,AdminFooter:n(343).default})}}]);