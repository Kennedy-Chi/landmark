(window.webpackJsonp=window.webpackJsonp||[]).push([[43,19,20],{326:function(t,l,e){var content=e(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(149).default)("4cd7634c",content,!0,{sourceMap:!1})},328:function(t,l,e){"use strict";e.r(l);var n=e(8),c=(e(53),{data:function(){return{company:"",address:"",aboutContent:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var l=document.createElement("script");l.type="text/javascript",l.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",l.async=!0,l.id="translator";var e=document.querySelector("#footer");e?e.appendChild(l):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getAboutCompany:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function l(){var e;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,t.$axios.get("/about");case 3:return e=l.sent,l.next=6,e.data.data[0].content;case 6:t.aboutContent=l.sent,l.next=12;break;case 9:l.prev=9,l.t0=l.catch(0),console.log(l.t0);case 12:case"end":return l.stop()}}),l,null,[[0,9]])})))()},getCompany:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function l(){var e,n,c;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,t.$axios.get("/company");case 3:return c=l.sent,l.next=6,null===(e=c.data.data)||void 0===e||null===(n=e.media[0])||void 0===n?void 0:n.text;case 6:t.address=l.sent,t.company=c.data.data,l.next=13;break;case 10:l.prev=10,l.t0=l.catch(0),console.log(l.t0.response.data);case 13:case"end":return l.stop()}}),l,null,[[0,10]])})))()}},mounted:function(){this.loadScript(),this.setFileURL(),this.getAboutCompany(),this.getCompany()}}),o=(e(329),e(61)),component=Object(o.a)(c,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"last-section",attrs:{id:"footer"}},[l("div",{staticClass:"container-new1"},[l("div",[l("div",{staticClass:"div-block-255"},[l("div",{staticClass:"div-block-256"},[t._m(0),t._v(" "),l("div",{staticClass:"text-block-63",domProps:{innerHTML:t._s("".concat(t.aboutContent.substring(0,200),"..."))}})]),t._v(" "),l("div",{staticClass:"div-block-258"},[l("h1",{staticClass:"heading-63"},[t._v("Quick Links")]),t._v(" "),l("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/about"}},[l("div",{staticClass:"text-block-64"},[t._v("About")])]),l("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/plan"}},[l("div",{staticClass:"text-block-64"},[t._v("Plans")])]),l("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/gallery"}},[l("div",{staticClass:"text-block-64"},[t._v("Gallery")])]),l("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/contact"}},[l("div",{staticClass:"text-block-64"},[t._v("Contact Us")])])],1),t._v(" "),l("div",{staticClass:"div-block-259"},[l("h1",{staticClass:"heading-63"},[t._v("Contact Us")]),t._v(" "),l("div",{staticClass:"text-block-65"},[t._v("\n            You can contact us with your email for mailing conversations at\n            our contact page us chat us directly in our website through our\n            live support.\n          ")]),t._v(" "),l("div",{staticClass:"text-block-66"},[t._v("\n            "+t._s(t.address)+"\n          ")])]),t._v(" "),t._m(1)])]),t._v(" "),t._m(2),t._v(" "),l("div",{staticClass:"div-block-275"}),t._v(" "),l("div",{staticClass:"div-block-276"},[l("div",{staticClass:"div-block-277"},[l("div",{staticClass:"text-block-70"},[t._v("\n          © "+t._s((new Date).getFullYear())+"\n          "),t.company?l("a",{staticClass:"link-5",attrs:{href:"#",target:"_blank"}},[t._v(t._s(t.company.companyName))]):t._e(),t._v(", All Rights Reserved\n        ")])]),t._v(" "),l("nuxt-link",{staticClass:"link-block-22 w-inline-block",attrs:{to:"/terms-conditions"}},[l("div",{staticClass:"text-block-70 b"},[t._v("\n          Privacy Policy Terms & Conditions\n        ")])])],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"div-block-257"},[t("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",width:"83",alt:""}})])},function(){var t=this,l=t._self._c;return l("div",{staticClass:"div-block-259"},[l("h1",{staticClass:"heading-63"},[t._v("Subscribe")]),t._v(" "),l("div",{staticClass:"text-block-65 b"},[t._v("\n            Don’t forget to subscribe to our newsletter.\n          ")]),t._v(" "),l("div",{staticClass:"form-block-8 w-form"},[l("form",{staticClass:"form-9"},[l("div",{staticClass:"div-block-260"},[l("input",{staticClass:"text-field-9 w-input",attrs:{type:"text",maxlength:"256",name:"field-10","data-name":"Field 10",placeholder:"E-mail",id:"field-10",required:""}}),l("img",{staticClass:"image-78",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/6358ede42749b85419003355_Vector%20(2).svg",loading:"lazy",width:"15",alt:""}})])]),t._v(" "),l("div",{staticClass:"w-form-done"},[l("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),l("div",{staticClass:"w-form-fail"},[l("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])},function(){var t=this,l=t._self._c;return l("div",{staticClass:"div-block-274"},[l("div",{staticClass:"div-block-273"},[l("img",{staticClass:"image-81",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/63331fc68346e236d2f92430_facebook-round-line-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-273"},[l("img",{staticClass:"image-81",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/63332c7f896510ed6fe986aa_twitter.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-273"},[l("img",{staticClass:"image-81",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/63609a201e9ac21857377050_linkedin-round-line-icon%202.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-273"},[l("img",{staticClass:"image-81",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/63609ae4701e5f5599879f53_vimeo-round-line-color-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-273"},[l("img",{staticClass:"image-81",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/63332e07e9bce66eb1225884_black-instagram%201.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-273"},[l("img",{staticClass:"image-81",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/6360ad92adbd3b69a27af93b_github-icon%201.svg",loading:"lazy",width:"Auto",height:"Auto",alt:""}})])])}],!1,null,null,null);l.default=component.exports},329:function(t,l,e){"use strict";e(326)},330:function(t,l,e){var n=e(148)((function(i){return i[1]}));n.push([t.i,".div-block-257{width:200px}.div-block-257 img{width:100%}",""]),n.locals={},t.exports=n},331:function(t,l,e){"use strict";e.r(l);var n={},c=e(61),component=Object(c.a)(n,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"nav-about-us w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[l("div",{staticClass:"container-new about-us"},[l("div",[l("nuxt-link",{staticClass:"brand-4 w-nav-brand",attrs:{to:"/"}},[l("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",width:"150",alt:""}})]),t._v(" "),l("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),l("nav",{staticClass:"nav-menu-3 w-nav-menu",attrs:{role:"navigation"}},[l("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/"}},[t._v("Home")]),l("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/about"}},[t._v("ABOUT")]),l("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/gallery"}},[t._v("GALLERY")]),l("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/plan"}},[t._v("PLAN")]),l("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/faq"}},[t._v("FAQ")]),l("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/contact"}},[t._v("CONTACT")]),l("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:"/signup"}},[t._v("SIGN UP")]),l("nuxt-link",{staticClass:"button-13 w-button",attrs:{"data-w-id":"4d4f1d77-0b7e-0bc8-3bb1-37cede9dd815",to:"/login"}},[t._v("Login")])],1),t._v(" "),t._m(0)]),t._v(" "),l("div",{staticClass:"div-block-278"})])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button-4 w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);l.default=component.exports},411:function(t,l,e){"use strict";e.r(l);var n=e(328),c={components:{HomeLightNavigation:e(331).default,HomeFooter:n.default}},o=e(61),component=Object(o.a)(c,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"plan-page"},[l("home-light-navigation"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),l("home-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"container-new1 _2 e"},[t("div",{staticClass:"div-block-279"},[t("h1",{staticClass:"heading-67"},[this._v("Plan")])])])},function(){var t=this,l=t._self._c;return l("div",{staticClass:"plan-1"},[l("div",{staticClass:"container-new1"},[l("div",{staticClass:"div-block-394"},[l("div",{staticClass:"div-block-395"},[l("h1",{staticClass:"heading-120"},[t._v("Basic Plan")]),t._v(" "),l("div",{staticClass:"div-block-396"}),t._v(" "),l("div",{staticClass:"div-block-397"},[l("h1",{staticClass:"heading-121"},[t._v("%")]),t._v(" "),l("h1",{staticClass:"heading-121 _2"},[t._v("1.5")]),t._v(" "),l("h1",{staticClass:"heading-121"},[t._v("Daily")])]),t._v(" "),l("div",{staticClass:"div-block-396 _2"}),t._v(" "),l("div",{staticClass:"div-block-399"},[l("div",{staticClass:"div-block-398"},[l("img",{staticClass:"image-103",attrs:{src:"/images/approved-accept-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-400"},[l("h1",{staticClass:"heading-122"},[t._v("Minimum Investment:")]),t._v(" "),l("h1",{staticClass:"heading-123"},[t._v("$100.00")])])]),t._v(" "),l("div",{staticClass:"div-block-399"},[l("div",{staticClass:"div-block-398"},[l("img",{staticClass:"image-103",attrs:{src:"/images/approved-accept-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-400"},[l("h1",{staticClass:"heading-122"},[t._v("Maximum Investment:")]),t._v(" "),l("h1",{staticClass:"heading-123"},[t._v("$4999.00")])])]),t._v(" "),l("div",{staticClass:"div-block-399"},[l("div",{staticClass:"div-block-398"},[l("img",{staticClass:"image-103",attrs:{src:"/images/approved-accept-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-400"},[l("h1",{staticClass:"heading-122"},[t._v("Investment Duration:")]),t._v(" "),l("h1",{staticClass:"heading-123"},[t._v("8 Days.")])])]),t._v(" "),l("div",{staticClass:"div-block-401"},[l("a",{staticClass:"button-25 w-button",attrs:{href:"#"}},[t._v("Invest Now")])])]),t._v(" "),l("div",{staticClass:"div-block-395"},[l("h1",{staticClass:"heading-120"},[t._v("Premium Plan")]),t._v(" "),l("div",{staticClass:"div-block-396"}),t._v(" "),l("div",{staticClass:"div-block-397"},[l("h1",{staticClass:"heading-121"},[t._v("%")]),t._v(" "),l("h1",{staticClass:"heading-121 _2"},[t._v("2.5")]),t._v(" "),l("h1",{staticClass:"heading-121"},[t._v("Daily")])]),t._v(" "),l("div",{staticClass:"div-block-396 _2"}),t._v(" "),l("div",{staticClass:"div-block-399"},[l("div",{staticClass:"div-block-398"},[l("img",{staticClass:"image-103",attrs:{src:"/images/approved-accept-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-400"},[l("h1",{staticClass:"heading-122"},[t._v("Minimum Investment:")]),t._v(" "),l("h1",{staticClass:"heading-123"},[t._v("$5000.00")])])]),t._v(" "),l("div",{staticClass:"div-block-399"},[l("div",{staticClass:"div-block-398"},[l("img",{staticClass:"image-103",attrs:{src:"/images/approved-accept-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-400"},[l("h1",{staticClass:"heading-122"},[t._v("Maximum Investment:")]),t._v(" "),l("h1",{staticClass:"heading-123"},[t._v("$14999.00")])])]),t._v(" "),l("div",{staticClass:"div-block-399"},[l("div",{staticClass:"div-block-398"},[l("img",{staticClass:"image-103",attrs:{src:"/images/approved-accept-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-400"},[l("h1",{staticClass:"heading-122"},[t._v("Investment Duration:")]),t._v(" "),l("h1",{staticClass:"heading-123"},[t._v("14 Days.")])])]),t._v(" "),l("div",{staticClass:"div-block-401"},[l("a",{staticClass:"button-25 w-button",attrs:{href:"#"}},[t._v("Invest Now")])])]),t._v(" "),l("div",{staticClass:"div-block-395 b"},[l("h1",{staticClass:"heading-120"},[t._v("Property Plan")]),t._v(" "),l("div",{staticClass:"div-block-396"}),t._v(" "),l("div",{staticClass:"div-block-397"},[l("h1",{staticClass:"heading-121"},[t._v("%")]),t._v(" "),l("h1",{staticClass:"heading-121 _2"},[t._v("3.5")]),t._v(" "),l("h1",{staticClass:"heading-121"},[t._v("Daily")])]),t._v(" "),l("div",{staticClass:"div-block-396 _2"}),t._v(" "),l("div",{staticClass:"div-block-399"},[l("div",{staticClass:"div-block-398"},[l("img",{staticClass:"image-103",attrs:{src:"/images/approved-accept-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-400"},[l("h1",{staticClass:"heading-122"},[t._v("Minimum Investment:")]),t._v(" "),l("h1",{staticClass:"heading-123"},[t._v("$15000.00")])])]),t._v(" "),l("div",{staticClass:"div-block-399"},[l("div",{staticClass:"div-block-398"},[l("img",{staticClass:"image-103",attrs:{src:"/images/approved-accept-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-400"},[l("h1",{staticClass:"heading-122"},[t._v("Maximum Investment:")]),t._v(" "),l("h1",{staticClass:"heading-123"},[t._v("Unlimited")])])]),t._v(" "),l("div",{staticClass:"div-block-399"},[l("div",{staticClass:"div-block-398"},[l("img",{staticClass:"image-103",attrs:{src:"/images/approved-accept-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"div-block-400"},[l("h1",{staticClass:"heading-122"},[t._v("Investment Duration:")]),t._v(" "),l("h1",{staticClass:"heading-123"},[t._v("21 Days.")])])]),t._v(" "),l("div",{staticClass:"div-block-401"},[l("a",{staticClass:"button-25 w-button",attrs:{href:"#"}},[t._v("Invest Now")])])])])])])},function(){var t=this,l=t._self._c;return l("div",{staticClass:"plan-2"},[l("div",{staticClass:"slider-2 b w-slider",attrs:{"data-delay":"4000","data-animation":"slide","data-autoplay":"true","data-easing":"ease","data-hide-arrows":"false","data-disable-swipe":"false","data-autoplay-limit":"0","data-nav-spacing":"3","data-duration":"500","data-infinite":"true"}},[l("div",{staticClass:"w-slider-mask"},[l("div",{staticClass:"slide w-slide"},[l("div",{staticClass:"container-new1"},[l("div",{staticClass:"div-block-235"},[l("div",{staticClass:"div-block-234"},[l("img",{staticClass:"image-74",attrs:{src:"/images/lady-1.png",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"text-block-56"},[t._v("\n                If you are here, you are definitely at the right place if you\n                want to grow your capital without the worries of trust, risk\n                management or market fluctuation just invest in Estate\n                Marketing Assets Managements.\n              ")]),t._v(" "),l("h1",{staticClass:"heading-55"},[t._v("Alice Adams")]),t._v(" "),l("h1",{staticClass:"heading-56"},[t._v("Engineer")])])])]),t._v(" "),l("div",{staticClass:"slide w-slide"},[l("div",{staticClass:"container-new1"},[l("div",{staticClass:"div-block-235"},[l("div",{staticClass:"div-block-234"},[l("img",{staticClass:"image-74",attrs:{src:"/images/man-1.png",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"text-block-56"},[t._v("\n                Estate Marketing Assets Management is by far the most\n                profitable and trusted investment company in UK that I've\n                invested in. For straight two years they have changed my\n                financial story to glory and I'm now a proud\n                representative of this company in Nottingham.\n              ")]),t._v(" "),l("h1",{staticClass:"heading-55"},[t._v("Steven Griffin")]),t._v(" "),l("h1",{staticClass:"heading-56"},[t._v("Miner")])])])]),t._v(" "),l("div",{staticClass:"slide w-slide"},[l("div",{staticClass:"container-new1"},[l("div",{staticClass:"div-block-235"},[l("div",{staticClass:"div-block-234"},[l("img",{staticClass:"image-74",attrs:{src:"/images/lady-2.png",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"text-block-56"},[t._v("\n                Lorem Ipsum dolor sit amet, consectetuer adipiscing elit.\n                Aenean commodo ligula"),l("br"),t._v("eget dolor. Aenean massa. Cum\n                sociis Theme natoque penatibus et magnis dis\n              ")]),t._v(" "),l("h1",{staticClass:"heading-55"},[t._v("Linda Porter")]),t._v(" "),l("h1",{staticClass:"heading-56"},[t._v("Software Architect")])])])])]),t._v(" "),l("div",{staticClass:"left-arrow-2 w-slider-arrow-left"},[l("img",{staticClass:"image-73",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/6358ece12749b88d77002983_Vector%20(1).svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"right-arrow-2 w-slider-arrow-right"},[l("img",{staticClass:"image-73",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/6358ede42749b85419003355_Vector%20(2).svg",loading:"lazy",alt:""}})]),t._v(" "),l("div",{staticClass:"w-slider-nav w-round"})])])}],!1,null,null,null);l.default=component.exports;installComponents(component,{HomeLightNavigation:e(331).default,HomeFooter:e(328).default})}}]);