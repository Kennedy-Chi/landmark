(window.webpackJsonp=window.webpackJsonp||[]).push([[28,6,7,8,9,19],{343:function(t,n,e){"use strict";var r=e(2),c=e(3),o=e(39),l=e(27),v=e(40),d=e(235),m=e(14),f=e(4),_=e(234),h=e(152),C=e(344),y=e(345),k=e(93),w=e(346),x=[],A=c(x.sort),N=c(x.push),$=f((function(){x.sort(void 0)})),R=f((function(){x.sort(null)})),z=h("sort"),L=!f((function(){if(k)return k<70;if(!(C&&C>3)){if(y)return!0;if(w)return w<603;var code,t,n,e,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(e=0;e<47;e++)x.push({k:t+e,v:n})}for(x.sort((function(a,b){return b.v-a.v})),e=0;e<x.length;e++)t=x[e].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:$||!R||!z||!L},{sort:function(t){void 0!==t&&o(t);var n=l(this);if(L)return void 0===t?A(n):A(n,t);var e,r,c=[],f=v(n);for(r=0;r<f;r++)r in n&&N(c,n[r]);for(_(c,function(t){return function(n,e){return void 0===e?-1:void 0===n?1:void 0!==t?+t(n,e)||0:m(n)>m(e)?1:-1}}(t)),e=v(c),r=0;r<e;)n[r]=c[r++];for(;r<f;)d(n,r++);return n}})},344:function(t,n,e){var r=e(72).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},345:function(t,n,e){var r=e(72);t.exports=/MSIE|Trident/.test(r)},346:function(t,n,e){var r=e(72).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},347:function(t,n,e){"use strict";e.r(n);var r={props:{msg:{type:String},state:{type:Boolean}},methods:{getState:function(){return this.$store.state.confirmState},confirm:function(data){this.$emit("confirm",data)}},computed:{}},c=e(57),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"confirm-action",class:{hide:t.state}},[n("div",{staticClass:"confirm-box"},[n("div",[t._v(t._s(t.msg))]),t._v(" "),n("div",{staticClass:"confirm-holder"},[n("span",{staticClass:"button w-button",on:{click:function(n){return t.confirm("yes")}}},[t._v("Yes")]),n("span",{staticClass:"button w-button",on:{click:function(n){return t.confirm("no")}}},[t._v("No")])])])])}),[],!1,null,null,null);n.default=component.exports},349:function(t,n,e){var content=e(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(151).default)("4c814224",content,!0,{sourceMap:!1})},350:function(t,n,e){"use strict";e.r(n);var r={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},c=e(57),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer",attrs:{id:"footer"}},[t("div",[this._v("www.kennytechstudios.com")])])}],!1,null,null,null);n.default=component.exports},351:function(t,n,e){"use strict";e.r(n);e(50),e(59);var r=e(8),c=(e(26),e(49),{data:function(){return{route:""}},computed:{navState:function(){return this.$store.state.adminNavState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},hideNav:function(){this.$store.commit("HIDE_NAV")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.route=this.$route.name,this.hideNav()}}),o=(e(360),e(57)),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[n("div",{staticClass:"sticky-navbar"},[n("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[n("img",{staticClass:"brand",attrs:{src:"/admin-images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/admin-images/Logo.png 500w, /admin-images/Logo.png 800w, /admin-images/Logo.png 1080w, /admin-images/Logo.png 2284w",alt:""}})]),t._v(" "),n("img",{staticClass:"menu-close",attrs:{src:"/admin-images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),n("ul",{staticClass:"nav-list",attrs:{role:"list"}},[n("li",{staticClass:"nav-list"},[n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin"==t.route},attrs:{to:"/admin"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin"==t.route?"colored-dashboard.svg":"dashboard.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Dashboard")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-users"==t.route},attrs:{to:"/admin/users"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-users"==t.route?"colored-users.svg":"users.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Users")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("add-user")},attrs:{to:"/admin/add-user/new"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("add-user")?"colored-user.svg":"user.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Add User")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-plans"==t.route},attrs:{to:"/admin/plans"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-accounts"==t.route?"colored-plans.svg":"plans.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Plans")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-reviews"==t.route},attrs:{to:"/admin/reviews"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-reviews"==t.route?"colored-reviews.svg":"reviews.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Reviews")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-currencies"==t.route},attrs:{to:"/admin/currencies"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-currencies"==t.route?"colored-currency.svg":"currency.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Currencies")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("transactions")},attrs:{to:"/admin/transactions/list"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("transactions")?"colored-deposit.svg":"deposit.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Transactions")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-active-deposits"==t.route},attrs:{to:"/admin/active-deposits"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-active-deposits"==t.route?"colored-active.svg":"active.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Active Deposits")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-email"==t.route},attrs:{to:"/admin/email"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-email"==t.route?"colored-emails.svg":"emails.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Emails")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-pages"==t.route},attrs:{to:"/admin/pages"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-pages"==t.route?"colored-pages.svg":"pages.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Pages")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-settings"==t.route},attrs:{to:"/admin/settings"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-settings"==t.route?"colored-settings.svg":"settings.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Settings")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-referrals"==t.route},attrs:{to:"/admin/referrals"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-referrals"==t.route?"colored-referrals.svg":"referrals.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Referrals")])]),t._v(" "),n("span",{staticClass:"nav-link w-inline-block",on:{click:t.logout}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/logout.svg\n            ",loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Logout")])])],1)])],1)])}),[],!1,null,null,null);n.default=component.exports},352:function(t,n,e){"use strict";e.r(n);var r=e(8),c=(e(49),{head:function(){return{link:[{rel:"stylesheet",href:"/css/main.css",type:"text/css"}]}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},authenticateUser:function(){this.isAuthenticated?"User"==this.user.status&&this.$router.push("/dashboard"):this.$router.push("/")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.authenticateUser()},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user}}}),o=e(57),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"content-header"},[n("img",{staticClass:"menu",attrs:{src:"/admin-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleNav}}),t._v(" "),n("div",{staticClass:"top-icons"},[n("img",{staticClass:"top-icon",attrs:{src:"/admin-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0),t._v(" "),n("img",{staticClass:"top-icon",attrs:{src:"/admin-images/logout.svg",loading:"lazy",alt:""},on:{click:t.logout}})])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"notification"},[n("div",{staticClass:"badge"}),t._v(" "),n("img",{staticClass:"top-icon",attrs:{src:"/admin-images/notification.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"custom-card pie-chart-holder notify"},[n("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),n("div",{staticClass:"each-activity"},[n("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),n("div",{staticClass:"activity-coin"},[n("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"activity-line"})]),t._v(" "),n("div",{staticClass:"activity-value"},[n("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),n("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),n("div",{staticClass:"each-activity"},[n("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),n("div",{staticClass:"activity-coin"},[n("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"activity-line"})]),t._v(" "),n("div",{staticClass:"activity-value"},[n("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),n("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),n("div",{staticClass:"each-activity"},[n("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),n("div",{staticClass:"activity-coin"},[n("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"activity-line"})]),t._v(" "),n("div",{staticClass:"activity-value"},[n("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),n("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),n("div",{staticClass:"each-activity"},[n("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),n("div",{staticClass:"activity-coin"},[n("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"activity-line"})]),t._v(" "),n("div",{staticClass:"activity-value"},[n("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),n("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])])}],!1,null,null,null);n.default=component.exports},360:function(t,n,e){"use strict";e(349)},361:function(t,n,e){var r=e(150)((function(i){return i[1]}));r.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a,span.nav-link{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),r.locals={},t.exports=r},367:function(t,n,e){"use strict";e.r(n);var r={},c=e(57),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"custom-card plan"},[n("h4",{staticClass:"page-title"},[t._v("INSTRUCTION")]),t._v(" "),n("div",{staticClass:"instruction"},[t._v("\n    Kindly fill in the required fields above to create a plan, in the case of\n    any confusion on how the above form works, kindly visit our\n    "),n("span",{staticClass:"custom-link"},[t._v("youtub link")]),t._v(", or our\n    "),n("span",{staticClass:"custom-link"},[t._v("website ")]),t._v("to watch the video tutorial\n    related to this form.\n  ")])])}],!1,null,null,null);n.default=component.exports},374:function(t,n,e){"use strict";var r=e(2),c=e(3),o=e(60),l=e(238),v=e(237),d=e(4),m=RangeError,f=String,_=Math.floor,h=c(v),C=c("".slice),y=c(1..toFixed),k=function(t,n,e){return 0===n?e:n%2==1?k(t,n-1,e*t):k(t*t,n/2,e)},w=function(data,t,n){for(var e=-1,r=n;++e<6;)r+=t*data[e],data[e]=r%1e7,r=_(r/1e7)},x=function(data,t){for(var n=6,e=0;--n>=0;)e+=data[n],data[n]=_(e/t),e=e%t*1e7},A=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var n=f(data[t]);s=""===s?n:s+h("0",7-n.length)+n}return s};r({target:"Number",proto:!0,forced:d((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!d((function(){y({})}))},{toFixed:function(t){var n,e,r,c,v=l(this),d=o(t),data=[0,0,0,0,0,0],_="",y="0";if(d<0||d>20)throw m("Incorrect fraction digits");if(v!=v)return"NaN";if(v<=-1e21||v>=1e21)return f(v);if(v<0&&(_="-",v=-v),v>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(v*k(2,69,1))-69)<0?v*k(2,-n,1):v/k(2,n,1),e*=4503599627370496,(n=52-n)>0){for(w(data,0,e),r=d;r>=7;)w(data,1e7,0),r-=7;for(w(data,k(10,r,1),0),r=n-1;r>=23;)x(data,1<<23),r-=23;x(data,1<<r),w(data,1,1),x(data,2),y=A(data)}else w(data,0,e),w(data,1<<-n,0),y=A(data)+h("0",d);return y=d>0?_+((c=y.length)<=d?"0."+h("0",d-c)+y:C(y,0,c-d)+"."+C(y,c-d)):_+y}})},415:function(t,n,e){var content=e(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(151).default)("2de4166a",content,!0,{sourceMap:!1})},474:function(t,n,e){"use strict";e(415)},475:function(t,n,e){var r=e(150)((function(i){return i[1]}));r.push([t.i,".banner.symbol{height:35px;width:auto}",""]),r.locals={},t.exports=r},525:function(t,n,e){"use strict";e.r(n);e(58),e(374),e(236);var r=e(8),c=(e(49),e(20),e(42),e(11),e(95),e(343),e(350)),o=e(351),l=e(352),v=e(347),d={data:function(){return{transactions:[],transaction:"",narration:"",amount:"",dateTime:"",company:"",sort:"-time",field:"",limit:5,resultLength:"",currentPage:1,pages:function(){for(var t=[],n=Math.ceil(this.resultLength/this.limit),i=0;i<n;i++)t.push("i");return t}}},methods:{getTime:function(data){return data?new Date(data).toLocaleTimeString():"Not Available"},paginate:function(t){this.currentPage=t,this.getActiveDeposits()},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getDuration:function(data){return data?data/864e5:"N/A"},formatDate:function(data){if(!data)return"Not Available";var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},continueEarning:function(t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r,form,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="?limit=".concat(n.limit,"&sort=").concat(n.sort,"&page=").concat(n.currentPage),form={time:t.time},e.prev=2,e.next=5,n.$axios.patch("/transactions/continue-earnings/".concat(t._id,"/").concat(r),form);case 5:c=e.sent,n.transactions=c.data.data,n.resultLength=c.data.resultLength,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))()},getActiveDeposits:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="?limit=".concat(t.limit,"&sort=").concat(t.sort,"&page=").concat(t.currentPage),n.prev=1,n.next=4,t.$axios.get("/transactions/active-deposits/".concat(e));case 4:r=n.sent,t.transactions=r.data.data,t.resultLength=r.data.resultLength,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.response);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.get("/company");case 3:e=n.sent,t.company=e.data.data[0],n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}},mounted:function(){this.getActiveDeposits()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{Instruction:e(367).default,AdminConfirmation:v.default,AdminFooter:c.default,AdminTopHeader:l.default,AdminNavigation:o.default}},m=(e(474),e(57)),component=Object(m.a)(d,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"main-wrapper transactions"},[n("admin-navigation"),t._v(" "),n("div",{staticClass:"body-wrapper"},[n("admin-top-header"),t._v(" "),n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"custom-card plan"},[n("h4",{staticClass:"page-title"},[t._v("TRANSACTION HISTORY")]),t._v(" "),n("div",{staticClass:"table-wrapper"},[n("table",{staticClass:"custom-table"},[t._m(0),t._v(" "),n("tbody",t._l(t.transactions,(function(e,r){return n("tr",{key:e._id},[n("td",[t._v(t._s(r+1))]),t._v(" "),n("td",[t._v(t._s(e.username))]),t._v(" "),n("td",[n("img",{staticClass:"banner symbol",attrs:{src:"".concat(t.FILE_URL,"/").concat(e.symbol),alt:""}})]),t._v(" "),n("td",[t._v(t._s(e.walletName))]),t._v(" "),n("td",[t._v("$"+t._s(t.formatMoney(e.amount)))]),t._v(" "),n("td",[t._v(t._s(e.planName))]),t._v(" "),n("td",[t._v(t._s(t.getDuration(e.planDuration))+" days")]),t._v(" "),n("td",[t._v("\n                  "+t._s(Math.ceil(t.getDuration(e.daysRemaining)))+" days\n                ")]),t._v(" "),n("td",[e.earning>0?n("span",[t._v("\n                    $"+t._s(t.formatMoney(Number(e.earning).toFixed(2)))+"\n                  ")]):n("span",[t._v("$0")])]),t._v(" "),n("td",[t._v("\n                  "+t._s(t.formatDate(e.time))+" "),n("br"),t._v("\n                  "+t._s(t.getTime(e.time))+"\n                ")]),t._v(" "),n("td",[n("div",{staticClass:"status success",on:{click:function(n){return t.continueEarning(e)}}},[t._v("\n                    Continue\n                  ")])])])})),0)])]),t._v(" "),n("div",{staticClass:"table-label"},[n("div",[n("strong",{staticClass:"bold-text"},[t._v("Results")]),t._v(": "+t._s(t.resultLength)+"\n            "),n("strong",{staticClass:"bold-text-2"},[t._v("Page")]),t._v(" "+t._s(t.currentPage)+" of\n            "+t._s(t.pages().length)+"\n          ")]),t._v(" "),t.pages().length>1?n("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[1!=t.currentPage?n("li",{staticClass:"pagination-item",on:{click:function(n){return t.paginate(t.currentPage-1)}}},[n("img",{staticClass:"pagination-img",attrs:{src:"/admin-images/cheveron-left.svg",loading:"lazy",alt:""}})]):t._e(),t._v(" "),t._l(t.pages().length,(function(e,r){return n("li",{key:r,staticClass:"pagination-item",class:{active:r==t.currentPage-1,hide:r>=3+t.currentPage||r<t.currentPage-3,show:r+1==t.pages().length},on:{click:function(n){return t.paginate(r+1)}}},[n("div",[t._v(t._s(r+1))])])})),t._v(" "),t.currentPage<t.pages(t.currentPage+1).length?n("li",{staticClass:"pagination-item",on:{click:function(n){return t.paginate(t.currentPage+1)}}},[n("img",{staticClass:"pagination-img",attrs:{src:"/admin-images/cheveron-right.svg",loading:"lazy",alt:""}})]):t._e()],2):t._e()])]),t._v(" "),n("Instruction")],1),t._v(" "),n("admin-footer")],1)],1)}),[function(){var t=this,n=t._self._c;return n("thead",[n("tr",[n("td",[t._v("S/N")]),t._v(" "),n("td",[t._v("Username")]),t._v(" "),n("td",[t._v("Symbol")]),t._v(" "),n("td",[t._v("Wallet")]),t._v(" "),n("td",[t._v("Amount")]),t._v(" "),n("td",[t._v("Plan")]),t._v(" "),n("td",[t._v("Duration")]),t._v(" "),n("td",[t._v("Remaining")]),t._v(" "),n("td",[t._v("Earning")]),t._v(" "),n("td",[t._v("Date")]),t._v(" "),n("td",[t._v("Status")])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{AdminNavigation:e(351).default,AdminTopHeader:e(352).default,AdminFooter:e(350).default})}}]);