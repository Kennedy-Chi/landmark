(window.webpackJsonp=window.webpackJsonp||[]).push([[42,17,18,19,20],{348:function(t,e,r){var content=r(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(150).default)("65d79b6c",content,!0,{sourceMap:!1})},349:function(t,e,r){var content=r(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(150).default)("250f0615",content,!0,{sourceMap:!1})},353:function(t,e,r){"use strict";r.r(e);r(58),r(26);var l=r(8),o=(r(49),r(20),r(39),r(13),r(94),{data:function(){return{topPlan:"",wallets:[]}},methods:{getTopPlan:function(data){if(data.length>0){for(var t=data[0],i=1;i<data.length;i++)data[i].planMinimum>t.planMinimum&&(t=data[i]);return t}},formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getPlans:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:r=e.sent,t.topPlan=t.getTopPlan(r.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getWallets:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:r=e.sent,t.wallets=r.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getPlans(),this.getWallets()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}}),n=r(57),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return t.topPlan?e("div",{staticClass:"child-d-3"},[e("div",{staticClass:"div-block-67"},[e("h1",{staticClass:"heading-16"},[t._v("Top plan")]),t._v(" "),e("div",{},[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Name")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v(t._s(t.topPlan.planName))])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),t._m(0),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Rate")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v(t._s(t.topPlan.planPercentage)+"%")])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Minimum")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("\n          "+t._s(t.formatMoney(t.topPlan.planMinimum))+"\n        ")])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Maximum")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("\n          "+t._s(t.formatMoney(t.topPlan.planMaximum))+"\n        ")])]),t._v(" "),e("div",{staticClass:"div-block-69"})])]),t._v(" "),e("div",{staticClass:"div-block-95"},[t.wallets?e("div",{staticClass:"div-block-96"},[e("h1",{staticClass:"heading-30"},[t._v("My Portfolio")]),t._v(" "),t._l(t.wallets,(function(r){return e("div",{key:r._id,staticClass:"div-block-132"},[e("div",{staticClass:"div-block-133"},[e("img",{staticClass:"image-43",attrs:{src:"".concat(t.FILE_URL,"/").concat(r.symbol),loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-131"},[e("h1",{staticClass:"heading-31"},[t._v(t._s(r.name))])]),t._v(" "),e("div",{staticClass:"div-block-99"},[e("div",{staticClass:"text-block-52"},[t._v(t._s(r.name))]),t._v(" "),e("div",{staticClass:"text-block-52"},[t._v("$"+t._s(t.formatMoney(r.balance)))])])])}))],2):t._e()])]):t._e()}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Currency")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("USD")])]),t._v(" "),e("div",{staticClass:"div-block-69"})])}],!1,null,null,null);e.default=component.exports},354:function(t,e,r){"use strict";r.r(e);var l=r(8),o=(r(49),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:r=e.sent,t.company=r.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),n=r(57),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return t.company?e("div",{staticClass:"div-block-134"},[e("div",{staticClass:"text-block-53"},[t._v("\n    "+t._s((new Date).getFullYear())+" "+t._s(t.company.companyName)+", All Right\n    Reserved\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,r){"use strict";r.r(e);var l=r(8),o=(r(49),r(93),{data:function(){return{time:(new Date).toLocaleTimeString()}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getClock:function(){var t=this;setInterval((function(){return t.getTime(new Date)}),1e3)},getTime:function(data){var t=new Date(data),e=t.getHours(),r=t.getMinutes(),l=e>=12?"PM":"AM";return(e=(e%=12)||12)+":"+(r=r<10?"0"+r:r)+" "+l},toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},authenticateUser:function(){this.isAuthenticated||this.$router.push("/")},logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.authenticateUser(),setInterval((function(){t.time=(new Date).toLocaleTimeString()}),1e3)},computed:{user:function(){return this.$store.state.auth.user},isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),n=(r(360),r(57)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-29"},[e("div",{staticClass:"div-block-139"}),t._v(" "),e("div",{staticClass:"div-block-26"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"image-44",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("img",{staticClass:"icon",attrs:{src:"/dashboard-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})],1),t._v(" "),e("div",{staticClass:"div-block-28"},[e("div",{staticClass:"div-block-140"},[e("img",{staticClass:"image-6",attrs:{src:"/dashboard-images/colored-user-profile.svg",loading:"lazy",alt:""}}),t._v(" "),t.user?e("div",{staticClass:"div-block-141"},[e("div",{staticClass:"text-block-9 _1"},[t._v(t._s(t.user.username))]),t._v(" "),e("div",{staticClass:"text-block-9"},[t._v(t._s(t.user.email))])]):t._e()]),t._v(" "),e("div",{staticClass:"div-block-140"},[e("img",{staticClass:"image-6",attrs:{src:"/dashboard-images/calendar.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"div-block-141"},[e("div",{staticClass:"text-block-9 _1"},[t._v(t._s(t.formatDate(new Date)))]),t._v(" "),e("div",{staticClass:"text-block-9"},[t._v(t._s(t.time))])]),t._v(" "),e("img",{staticClass:"image-46",attrs:{src:"/dashboard-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})])])])}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,r){"use strict";r.r(e);var l=r(8),o=(r(26),r(49),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name},head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/dashboard.css"}]}}}),n=(r(362),r(57)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"child-d-1",class:{hide:!t.navState}},[e("div",{staticClass:"div-block-18"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"image brand",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-21"},[e("img",{staticClass:"image-2",attrs:{src:"/dashboard-images/close-nav.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})])],1),t._v(" "),e("div",{staticClass:"div-block-25"},[e("nuxt-link",{staticClass:"div-block-19",class:{blue:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642e191c9a0935e1a449bd_dash-icon%20(1).svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link"},[t._v("Account Balance")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"deposit"==t.route},attrs:{to:"/deposit"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642e38650a2eef0383e3ce_deposit%20(1).svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Make deposit")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"deposit-list"==t.route},attrs:{to:"/deposit-list"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642eabd6ddf0a4ed0edf33_deposit_list.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Deposit List")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"withdrawal"==t.route},attrs:{to:"/withdrawal"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642ecc8b338263ec539dfd_withdraw.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Withdrawal")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"history"==t.route},attrs:{to:"/history"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f06dfc4d15aa04c5f3c_transaction.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("History")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"referral"==t.route},attrs:{to:"/referral"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f225578cd28b192fc2d_referral.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Referrals")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"profile"==t.route},attrs:{to:"/profile"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642fbdc818cd423ff2d48b_setting.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Profile")])])]),t._v(" "),e("div",{staticClass:"div-block-19",on:{click:t.logout}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642fe0a1bc891dfc0c29c0_logout.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0)])],1),t._v(" "),t._m(1)])}),[function(){var t=this._self._c;return t("h3",{staticClass:"heading-8"},[t("span",{staticClass:"link-9",attrs:{href:"https://realestatefinancecountry.com/?a=logout"}},[t("strong",{staticClass:"bold-text-17"},[this._v("Logout")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-24"},[e("h3",{staticClass:"heading-9"},[t._v("Support")]),t._v(" "),e("div",{staticClass:"text-block-6"},[e("strong",[t._v("For any enquiries about us")]),t._v("‍"),e("strong",[t._v("Kindly chat us on our live support")])]),t._v(" "),e("div",{staticClass:"div-block-23"},[e("div",{staticClass:"text-block-7"},[t._v("Online Enquiry")])])])}],!1,null,null,null);e.default=component.exports},360:function(t,e,r){"use strict";r(348)},361:function(t,e,r){var l=r(149)((function(i){return i[1]}));l.push([t.i,".image-44{min-width:100px}.image-46{min-width:25px}",""]),l.locals={},t.exports=l},362:function(t,e,r){"use strict";r(349)},363:function(t,e,r){var l=r(149)((function(i){return i[1]}));l.push([t.i,".div-block-19{cursor:pointer}.image.brand{height:auto;min-width:100px}",""]),l.locals={},t.exports=l},388:function(t,e,r){var content=r(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(150).default)("2ded546a",content,!0,{sourceMap:!1})},425:function(t,e,r){"use strict";r(388)},426:function(t,e,r){var l=r(149)((function(i){return i[1]}));l.push([t.i,".response-text{color:#364dce}label{color:#ee4284;display:block;opacity:0;width:100%}label.active{opacity:1}.text-field-3{color:#fff;font-size:14px}",""]),l.locals={},t.exports=l},468:function(t,e,r){"use strict";r.r(e);r(58),r(26);var l=r(8),o=(r(49),r(93),r(13),r(42),r(353)),n=r(354),c=r(355),d=r(356),v={data:function(){return{wallets:[],oldPassword:"",password:"",cPassword:"",showResponse:!1,showReviewResponse:!1,isError:!1,response:"",onRequest:!1}},methods:{callResponse:function(t,e){var r=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){r.showResponse=!1}),6e3)},checkErrorInputs:function(input,data){if("oldPassword"==input){if(""==data||!data||data.length<6)return this.$el.querySelector(".oldPassword").classList.add("active"),!1;this.$el.querySelector(".oldPassword").classList.remove("active"),this.isError=!0}else if("password"==input){if(""==data||!data||data.length<6)return this.$el.querySelector(".password").classList.add("active"),!1;this.$el.querySelector(".password").classList.remove("active"),this.isError=!0}else if("cPassword"==input){if(""==data||data!=this.password)return this.$el.querySelector(".cPassword").classList.add("active"),void(this.isError=!1);this.$el.querySelector(".cPassword").classList.remove("active"),this.isError=!0}},setArray:function(){this.checkArray=[{name:"oldPassword",data:this.oldPassword},{name:"password",data:this.password},{name:"cPassword",data:this.cPassword}]},updatePassword:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.setArray(),t.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),t.isError){e.next=4;break}return e.abrupt("return");case 4:return form={oldPassword:t.oldPassword,password:t.password,cPassword:t.cPassword},e.prev=5,e.next=8,t.$axios.patch("/users/update-password",form);case 8:t.callResponse("Your password has been updated, logout and login to continue",!1),t.clearInputs(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t.callResponse(e.t0,!0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))()},updateWallet:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form={wallets:t.wallets,user:t.user},e.prev=1,e.next=4,t.$axios.patch("/wallet",form);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))()},getWallets:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:r=e.sent,t.wallets=r.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getWallets()},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user}},components:{DashboardFooter:n.default,DashboardNavigation:d.default,DashboardHeader:c.default,DashboardAside:o.default}},f=(r(425),r(57)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"mother-d"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"child-d-2"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"div-block-30"}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"div-block-119 pro"},[t._m(1),t._v(" "),t.user?e("div",{staticClass:"div-block-124"},[e("div",{staticClass:"div-block-121"},[t._m(2),t._v(" "),e("div",{staticClass:"form-block-5 w-form"},[e("form",{staticClass:"form-4"},[e("input",{staticClass:"text-field-3 w-input",attrs:{type:"text",maxlength:"256",placeholder:t.user.username}})])])]),t._v(" "),e("div",{staticClass:"div-block-121"},[t._m(3),t._v(" "),e("div",{staticClass:"form-block-5 w-form"},[e("div",{staticClass:"form-4"},[e("input",{staticClass:"text-field-3 w-input",attrs:{type:"text",placeholder:t.user.email}})])])])]):t._e()]),t._v(" "),e("div",{staticClass:"div-block-119 div-block-122"},[e("div",{staticClass:"div-block-121 full"},[t._m(4),t._v(" "),e("div",{staticClass:"form-block-5 w-form"},[e("div",{staticClass:"form-4 full"},[e("input",{staticClass:"text-field-3 full w-input",attrs:{type:"text",maxlength:"256",placeholder:"".concat(t.user.firstName," ").concat(t.user.lastName)}})])])])]),t._v(" "),e("div",{staticClass:"div-block-119 div-block-122"},[t._m(5),t._v(" "),e("label",{staticClass:"oldPassword",attrs:{for:""}},[t._v("Enter a valid password")]),t._v(" "),e("div",{staticClass:"div-block-121 full validate"},[t._m(6),t._v(" "),e("div",{staticClass:"form-block-5 w-form"},[e("div",{staticClass:"form-4 full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPassword,expression:"oldPassword"}],staticClass:"text-field-3 full w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter old Password"},domProps:{value:t.oldPassword},on:{blur:function(e){return t.checkErrorInputs("oldPassword",t.oldPassword)},input:function(e){e.target.composing||(t.oldPassword=e.target.value)}}})])])]),t._v(" "),e("label",{staticClass:"password",attrs:{for:""}},[t._v("Password must be at least 6 characters")]),t._v(" "),e("div",{staticClass:"div-block-121 full"},[t._m(7),t._v(" "),e("div",{staticClass:"form-block-5 w-form"},[e("div",{staticClass:"form-4 full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"text-field-3 full w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter New Password"},domProps:{value:t.password},on:{blur:function(e){return t.checkErrorInputs("password",t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}})])])]),t._v(" "),e("label",{staticClass:"cPassword",attrs:{for:""}},[t._v("Password do not match")]),t._v(" "),e("div",{staticClass:"div-block-121 full"},[t._m(8),t._v(" "),e("div",{staticClass:"form-block-5 w-form"},[e("div",{staticClass:"form-4 full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cPassword,expression:"cPassword"}],staticClass:"text-field-3 full w-input",attrs:{type:"text",maxlength:"256",placeholder:"Confirm New Password"},domProps:{value:t.cPassword},on:{blur:function(e){return t.checkErrorInputs("cPassword",t.cPassword)},input:function(e){e.target.composing||(t.cPassword=e.target.value)}}})])])]),t._v(" "),t.showResponse?e("div",{staticClass:"response-text",class:{error:t.isError}},[t._v("\n            "+t._s(t.response)+"\n          ")]):t._e(),t._v(" "),e("span",{staticClass:"button-9 w-button",on:{click:t.updatePassword}},[t._v("Update Password")])]),t._v(" "),e("div",{staticClass:"div-block-119 div-block-122"},[t._m(9),t._v(" "),t._l(t.wallets,(function(r){return e("div",{key:r._id,staticClass:"div-block-121 full"},[e("div",{staticClass:"div-block-123 full"},[e("div",{staticClass:"text-block-49"},[t._v(t._s(r.name))])]),t._v(" "),e("div",{staticClass:"form-block-5 w-form"},[e("div",{staticClass:"form-4 full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.walletAddress,expression:"wallet.walletAddress"}],staticClass:"text-field-3 full w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter your ".concat(r.name," wallet address")},domProps:{value:r.walletAddress},on:{input:function(e){e.target.composing||t.$set(r,"walletAddress",e.target.value)}}})])])])})),t._v(" "),e("span",{staticClass:"button-9 w-button",on:{click:t.updateWallet}},[t._v("Update Wallet")])],2)],1),t._v(" "),e("dashboard-aside")],1)]),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"div-block-31"},[t("h1",{staticClass:"heading-10"},[this._v("Profile")])])},function(){var t=this._self._c;return t("h1",{staticClass:"heading-28"},[t("strong",[this._v("Personal information")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-123"},[t("div",{staticClass:"text-block-49"},[this._v("Username")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-123"},[t("div",{staticClass:"text-block-49"},[this._v("Email")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-123 full"},[t("div",{staticClass:"text-block-49"},[this._v("Full Name")])])},function(){var t=this._self._c;return t("h1",{staticClass:"heading-28"},[t("strong",[this._v("Change password")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-123 full"},[t("div",{staticClass:"text-block-49"},[this._v("Old Password")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-123 full"},[t("div",{staticClass:"text-block-49"},[this._v("Password")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-123 full"},[t("div",{staticClass:"text-block-49"},[this._v("Confirm Password")])])},function(){var t=this._self._c;return t("h1",{staticClass:"heading-28"},[t("strong",[this._v("Payment details")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:r(356).default,DashboardHeader:r(355).default,DashboardAside:r(353).default,DashboardFooter:r(354).default})}}]);