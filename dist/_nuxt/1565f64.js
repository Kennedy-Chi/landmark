(window.webpackJsonp=window.webpackJsonp||[]).push([[53,24,25],{344:function(t,n,e){"use strict";var c=e(2),o=e(3),r=e(39),l=e(27),d=e(40),v=e(235),h=e(14),f=e(4),_=e(234),m=e(152),C=e(349),k=e(350),w=e(94),x=e(351),y=[],L=o(y.sort),R=o(y.push),A=f((function(){y.sort(void 0)})),E=f((function(){y.sort(null)})),F=m("sort"),U=!f((function(){if(w)return w<70;if(!(C&&C>3)){if(k)return!0;if(x)return x<603;var code,t,n,e,c="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(e=0;e<47;e++)y.push({k:t+e,v:n})}for(y.sort((function(a,b){return b.v-a.v})),e=0;e<y.length;e++)t=y[e].k.charAt(0),c.charAt(c.length-1)!==t&&(c+=t);return"DGBEFHACIJK"!==c}}));c({target:"Array",proto:!0,forced:A||!E||!F||!U},{sort:function(t){void 0!==t&&r(t);var n=l(this);if(U)return void 0===t?L(n):L(n,t);var e,c,o=[],f=d(n);for(c=0;c<f;c++)c in n&&R(o,n[c]);for(_(o,function(t){return function(n,e){return void 0===e?-1:void 0===n?1:void 0!==t?+t(n,e)||0:h(n)>h(e)?1:-1}}(t)),e=d(o),c=0;c<e;)n[c]=o[c++];for(;c<f;)v(n,c++);return n}})},349:function(t,n,e){var c=e(72).match(/firefox\/(\d+)/i);t.exports=!!c&&+c[1]},350:function(t,n,e){var c=e(72);t.exports=/MSIE|Trident/.test(c)},351:function(t,n,e){var c=e(72).match(/AppleWebKit\/(\d+)\./);t.exports=!!c&&+c[1]},352:function(t,n,e){var content=e(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(151).default)("395f4023",content,!0,{sourceMap:!1})},353:function(t,n,e){var content=e(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(151).default)("730ebd9c",content,!0,{sourceMap:!1})},357:function(t,n,e){"use strict";e.r(n);var c=e(8),o=(e(49),{data:function(){return{company:"",address:"",aboutContent:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var n=document.createElement("script");n.type="text/javascript",n.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",n.async=!0,n.id="translator";var e=document.querySelector("#footer");e?e.appendChild(n):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getAboutCompany:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.get("/about");case 3:return e=n.sent,n.next=6,e.data.data[0].content;case 6:t.aboutContent=n.sent,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},getCompany:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var e,c,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.get("/company");case 3:return o=n.sent,n.next=6,null===(e=o.data.data)||void 0===e||null===(c=e.media[0])||void 0===c?void 0:c.text;case 6:t.address=n.sent,t.company=o.data.data,n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.response.data);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()}},mounted:function(){this.loadScript(),this.setFileURL(),this.getAboutCompany(),this.getCompany()}}),r=(e(363),e(57)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"last-section",attrs:{id:"footer"}},[n("div",{staticClass:"container-new1"},[n("div",[n("div",{staticClass:"div-block-255"},[n("div",{staticClass:"div-block-256"},[t._m(0),t._v(" "),n("div",{staticClass:"text-block-63",domProps:{innerHTML:t._s("".concat(t.aboutContent.substring(0,200),"..."))}})]),t._v(" "),n("div",{staticClass:"div-block-258"},[n("h1",{staticClass:"heading-63"},[t._v("Quick Links")]),t._v(" "),n("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/about"}},[n("div",{staticClass:"text-block-64"},[t._v("About")])]),n("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/plan"}},[n("div",{staticClass:"text-block-64"},[t._v("Plans")])]),n("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/gallery"}},[n("div",{staticClass:"text-block-64"},[t._v("Gallery")])]),n("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/contact"}},[n("div",{staticClass:"text-block-64"},[t._v("Contact Us")])])],1),t._v(" "),n("div",{staticClass:"div-block-259"},[n("h1",{staticClass:"heading-63"},[t._v("Contact Us")]),t._v(" "),n("div",{staticClass:"text-block-65"},[t._v("\n            You can contact us with your email for mailing conversations at\n            our contact page us chat us directly in our website through our\n            live support.\n          ")]),t._v(" "),n("div",{staticClass:"text-block-66",domProps:{innerHTML:t._s(t.address)}})]),t._v(" "),t._m(1)])]),t._v(" "),t.company.social?n("div",{staticClass:"div-block-274"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)]):t._e(),t._v(" "),n("div",{staticClass:"div-block-275"}),t._v(" "),n("div",{staticClass:"div-block-276"},[n("div",{staticClass:"div-block-277"},[n("div",{staticClass:"text-block-70"},[t._v("\n          © "+t._s((new Date).getFullYear())+"\n          "),t.company?n("a",{staticClass:"link-5",attrs:{href:"#",target:"_blank"}},[t._v(t._s(t.company.companyName))]):t._e(),t._v(", All Rights Reserved\n        ")])]),t._v(" "),n("nuxt-link",{staticClass:"link-block-22 w-inline-block",attrs:{to:"/terms-conditions"}},[n("div",{staticClass:"text-block-70 b"},[t._v("\n          Privacy Policy Terms & Conditions\n        ")])])],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"div-block-257"},[t("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",width:"83",alt:""}})])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"div-block-259"},[n("h1",{staticClass:"heading-63"},[t._v("Subscribe")]),t._v(" "),n("div",{staticClass:"text-block-65 b"},[t._v("\n            Don’t forget to subscribe to our newsletter.\n          ")]),t._v(" "),n("div",{staticClass:"form-block-8 w-form"},[n("form",{staticClass:"form-9"},[n("div",{staticClass:"div-block-260"},[n("input",{staticClass:"text-field-9 w-input",attrs:{type:"text",maxlength:"256",name:"field-10","data-name":"Field 10",placeholder:"E-mail",id:"field-10",required:""}}),n("img",{staticClass:"image-78",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/6358ede42749b85419003355_Vector%20(2).svg",loading:"lazy",width:"15",alt:""}})])])])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/facebook-round.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/twitter-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/linkedin-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/vimeo-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/instagram-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/github-icon.svg",loading:"lazy",width:"Auto",height:"Auto",alt:""}})])}],!1,null,null,null);n.default=component.exports},363:function(t,n,e){"use strict";e(352)},364:function(t,n,e){var c=e(150)((function(i){return i[1]}));c.push([t.i,".div-block-257{width:200px}.div-block-257 img{width:100%}",""]),c.locals={},t.exports=c},365:function(t,n,e){"use strict";e.r(n);var c=e(8),o=(e(49),{methods:{logout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return n.stop()}}),n)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),r=(e(366),e(57)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"nav-about-us w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"container-new about-us"},[n("div",[n("nuxt-link",{staticClass:"brand-4 w-nav-brand",attrs:{to:"/"}},[n("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",width:"150",alt:""}})]),t._v(" "),n("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),n("nav",{staticClass:"nav-menu-3 w-nav-menu",attrs:{role:"navigation"}},[n("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/"}},[t._v("Home")]),n("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/about"}},[t._v("ABOUT")]),n("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/gallery"}},[t._v("GALLERY")]),n("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/plan"}},[t._v("PLAN")]),n("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/faq"}},[t._v("FAQ")]),n("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/contact"}},[t._v("CONTACT")]),n("nuxt-link",{staticClass:"navlink-new w-nav-link",class:{hide:t.isAuthenticated},attrs:{to:"/signup"}},[t._v("SIGN UP")]),t._v(" "),n("nuxt-link",{staticClass:"button-13 w-button",class:{hide:t.isAuthenticated},attrs:{"data-w-id":"4d4f1d77-0b7e-0bc8-3bb1-37cede9dd815",to:"/login"}},[t._v("Login")]),t._v(" "),n("nuxt-link",{staticClass:"navlink-new w-nav-link",class:{hide:!t.isAuthenticated},attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),n("a",{staticClass:"button-13 w-button",class:{hide:!t.isAuthenticated},attrs:{"data-w-id":"4d4f1d77-0b7e-0bc8-3bb1-37cede9dd815",to:"#"}},[t._v("Logout")])],1),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"div-block-278"})])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button-4 w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);n.default=component.exports},366:function(t,n,e){"use strict";e(353)},367:function(t,n,e){var c=e(150)((function(i){return i[1]}));c.push([t.i,".button-13.hide,.navlink-new.hide{display:none}",""]),c.locals={},t.exports=c},515:function(t,n,e){"use strict";e.r(n);e(58);var c=e(8),o=(e(49),e(20),e(42),e(11),e(95),e(41),e(344),e(357),{data:function(){return{houses:[],rents:[],sort:"-time",field:"",limit:15,resultLength:"",currentPage:1,pages:function(){for(var t=[],n=Math.ceil(this.resultLength/this.limit),i=0;i<n;i++)t.push("i");return t}}},methods:{formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var n=document.querySelector("#footer");n?n.appendChild(script):console.error("Could not find app node to append script element")},prepareProduct:function(t){this.editingId=t._id,this.editingState=!0,this.image=t.image,this.title=t.title,this.subtitle=t.subtitle,this.content=t.content,this.price=t.price,this.category=t.category,this.time=t.time},getHouses:function(data){var t=this;data.forEach((function(n){"House"==n.category&&t.houses.push(n)}))},getRents:function(data){var t=this;data.forEach((function(n){"Rent"==n.category&&t.rents.push(n)}))},getPrducts:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var e,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="?limit=".concat(t.limit,"&page=").concat(t.currentPage,"&sort=").concat(t.sort),n.prev=1,n.next=4,t.$axios.get("/products/".concat(e));case 4:c=n.sent,t.getRents(c.data.data),t.getHouses(c.data.data),t.resultLength=c.data.resultLength,t.loadScript(),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0.response.data.message);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()}},mounted:function(){this.getPrducts()},computed:{FILE_URL:function(){return this.$store.state.fileURL}}}),r=e(57),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"gallery-page"},[n("home-light-navigation"),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"gallery-1"},[n("div",{staticClass:"container-new1"},[t._m(1),t._v(" "),n("div",{staticClass:"div-block-382"},t._l(t.houses,(function(e){return n("div",{key:e._id,staticClass:"div-block-383"},[n("a",{staticClass:"link-block-25 w-inline-block",attrs:{href:"#"}},[n("img",{staticClass:"image-101",attrs:{src:"".concat(t.FILE_URL,"/").concat(e.image),loading:"lazy",sizes:"(max-width: 479px) 96vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, (max-width: 1279px) 30vw, 32vw",srcset:"\n                ".concat(t.FILE_URL,"/").concat(e.image," 500w,\n                ").concat(t.FILE_URL,"/").concat(e.image," 500w\n              "),alt:""}})]),t._v(" "),n("div",{staticClass:"div-block-385"},[n("div",{staticClass:"div-block-393"},[n("a",{staticClass:"link-block-26 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-113"},[t._v(t._s(e.title))])]),n("a",{staticClass:"button-23 w-button",attrs:{href:"#"}},[t._v("Buy")]),n("a",{staticClass:"button-23 w-button",attrs:{href:"#"}},[t._v("Rent")])]),t._v(" "),n("div",{staticClass:"div-block-384"},[n("div",{staticClass:"div-block-389"},[n("h1",{staticClass:"heading-114"},[t._v(t._s(e.subtitle))])]),t._v(" "),n("h1",{staticClass:"heading-115"},[t._v("$"+t._s(t.formatMoney(e.price)))])])])])})),0)])]),t._v(" "),n("div",{staticClass:"gallery-3"},[n("div",{staticClass:"container-new1"},[t._m(2),t._v(" "),n("div",{staticClass:"div-block-391"},t._l(t.rents,(function(e){return n("div",{key:e._id,staticClass:"div-block-383 c _2"},[n("a",{staticClass:"link-block-25 w-inline-block",attrs:{href:"#"}},[n("img",{staticClass:"image-101",attrs:{src:"".concat(t.FILE_URL,"/").concat(e.image),loading:"lazy",sizes:"(max-width: 479px) 96vw, (max-width: 767px) 95vw, (max-width: 991px) 47vw, (max-width: 1279px) 30vw, 32vw",srcset:"\n              ".concat(t.FILE_URL,"/").concat(e.image," 500w,\n              ").concat(t.FILE_URL,"/").concat(e.image,"     500w\n              "),alt:""}})]),t._v(" "),n("div",{staticClass:"div-block-385"},[n("div",{staticClass:"div-block-393"},[n("a",{staticClass:"link-block-26 w-inline-block",attrs:{href:"#"}},[n("h1",{staticClass:"heading-113"},[t._v(t._s(e.title))])]),n("a",{staticClass:"button-23 w-button",attrs:{href:"#"}},[t._v("Buy")]),n("a",{staticClass:"button-23 w-button",attrs:{href:"#"}},[t._v("Rent")])]),t._v(" "),n("div",{staticClass:"div-block-384"},[n("div",{staticClass:"div-block-389"},[n("h1",{staticClass:"heading-114"},[t._v(t._s(e.subtitle))])]),t._v(" "),n("h1",{staticClass:"heading-115"},[t._v("$"+t._s(t.formatMoney(e.price)))])])])])})),0),t._v(" "),t._m(3)])]),t._v(" "),n("home-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"container-new1 _2 a"},[t("div",{staticClass:"div-block-405"},[t("div",{staticClass:"div-block-279"},[t("h1",{staticClass:"heading-67"},[this._v("Gallery")])])])])},function(){var t=this,n=t._self._c;return n("div",[n("h1",{staticClass:"heading-118"},[t._v("Discover Our Featured Listings")]),t._v(" "),n("h1",{staticClass:"heading-119"},[t._v("\n          These featured listings contain exclusive real estate opportunities\n          within the city\n        ")])])},function(){var t=this,n=t._self._c;return n("div",[n("h1",{staticClass:"heading-118"},[t._v("Properties For Rent")]),t._v(" "),n("h1",{staticClass:"heading-119"},[t._v("\n          Search over 2000 properties to rent from the top agents in the\n          country\n        ")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-392"},[t("a",{staticClass:"button-22 w-button",attrs:{href:"#"}},[this._v("View More")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{HomeLightNavigation:e(365).default,HomeFooter:e(357).default})}}]);