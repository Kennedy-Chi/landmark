(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{359:function(t,e,r){"use strict";r.r(e);var d=r(8),c=(r(48),r(20),r(37),r(13),r(90),r(38),{data:function(){return{cards:[],user:""}},methods:{formatMoney:function(t){return""==t||null==t||null==t?0:t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},checkCard:function(t){var e={issued:"",available:""};return this.cards.forEach((function(r){r.cardType==t&&(e.issued=r.issued,e.available=r.totalNumber-r.issued)})),e},getCard:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/card");case 3:r=e.sent,t.cards=r.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getUser:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:r=e.sent,t.user=r.data.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getCard()}}),v=r(56),component=Object(v.a)(c,(function(){var t,e,r,d,c,v,l,n,o,_,y,C,f=this,h=f._self._c;return h("div",{staticClass:"dashboard-card-wrap"},[h("div",{staticClass:"card-types"},[h("div",{staticClass:"card-details"},[f._m(0),f._v(" "),h("div",{staticClass:"card-holder"},[h("div",{staticClass:"card-number"},[f._v("1234 **** **** ****")]),f._v(" "),f._m(1),f._v(" "),h("div",{staticClass:"card-number name"},[f._v("\n          "+f._s(f.user.firstName[0])+". "+f._s(f.user.lastName)+"\n        ")]),f._v(" "),h("img",{staticClass:"card",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/6413b7c66452a93e5640c298_Visa-Card-New.svg",loading:"lazy",alt:""}})]),f._v(" "),f._m(2)]),f._v(" "),h("div",{staticClass:"card-types-wrapper add"},[h("div",{staticClass:"card-title"},[f._v("Our Available Cards")]),f._v(" "),h("div",{staticClass:"type-card"},[h("div",{staticClass:"card-type-flex"},[f.cards[0]?h("h4",{staticClass:"type-card-title"},[f._v("Type")]):f._e(),f._v(" "),h("div",[f._v(f._s(null===(t=f.cards[0])||void 0===t?void 0:t.cardType))])]),f._v(" "),h("div",{staticClass:"card-type-flex"},[h("h4",{staticClass:"type-card-title"},[f._v("Issued")]),f._v(" "),h("div",[f._v(f._s(f.formatMoney(f.checkCard(null===(e=f.cards[0])||void 0===e?void 0:e.cardType).issued)))])]),f._v(" "),h("div",{staticClass:"card-type-flex"},[h("h4",{staticClass:"type-card-title"},[f._v("Available")]),f._v(" "),h("div",[f._v("\n            "+f._s(f.formatMoney(f.checkCard(null===(r=f.cards[0])||void 0===r?void 0:r.cardType).available))+"\n          ")])])]),f._v(" "),h("div",{staticClass:"type-card other"},[h("div",{staticClass:"card-type-flex"},[h("h4",{staticClass:"type-card-title"},[f._v("Type")]),f._v(" "),h("div",[f._v(f._s(null===(d=f.cards[1])||void 0===d?void 0:d.cardType))])]),f._v(" "),h("div",{staticClass:"card-type-flex"},[h("h4",{staticClass:"type-card-title"},[f._v("Issued")]),f._v(" "),h("div",[f._v(f._s(f.formatMoney(f.checkCard(null===(c=f.cards[1])||void 0===c?void 0:c.cardType).issued)))])]),f._v(" "),h("div",{staticClass:"card-type-flex"},[h("h4",{staticClass:"type-card-title"},[f._v("Available")]),f._v(" "),h("div",[f._v("\n            "+f._s(f.formatMoney(f.checkCard(null===(v=f.cards[1])||void 0===v?void 0:v.cardType).available))+"\n          ")])])]),f._v(" "),h("div",{staticClass:"type-card cool"},[h("div",{staticClass:"card-type-flex"},[h("h4",{staticClass:"type-card-title"},[f._v("Type")]),f._v(" "),h("div",[f._v(f._s(null===(l=f.cards[2])||void 0===l?void 0:l.cardType))])]),f._v(" "),h("div",{staticClass:"card-type-flex"},[h("h4",{staticClass:"type-card-title"},[f._v("Issued")]),f._v(" "),h("div",[f._v(f._s(f.formatMoney(f.checkCard(null===(n=f.cards[2])||void 0===n?void 0:n.cardType).issued)))])]),f._v(" "),h("div",{staticClass:"card-type-flex"},[h("h4",{staticClass:"type-card-title"},[f._v("Available")]),f._v(" "),h("div",[f._v("\n            "+f._s(f.formatMoney(f.checkCard(null===(o=f.cards[2])||void 0===o?void 0:o.cardType).available))+"\n          ")])])]),f._v(" "),h("div",{staticClass:"type-card other"},[h("div",{staticClass:"card-type-flex"},[h("h4",{staticClass:"type-card-title"},[f._v("Type")]),f._v(" "),h("div",[f._v(f._s(null===(_=f.cards[3])||void 0===_?void 0:_.cardType))])]),f._v(" "),h("div",{staticClass:"card-type-flex"},[h("h4",{staticClass:"type-card-title"},[f._v("Issued")]),f._v(" "),h("div",[f._v(f._s(f.formatMoney(f.checkCard(null===(y=f.cards[3])||void 0===y?void 0:y.cardType).issued)))])]),f._v(" "),h("div",{staticClass:"card-type-flex"},[h("h4",{staticClass:"type-card-title"},[f._v("Available")]),f._v(" "),h("div",[f._v("\n            "+f._s(f.formatMoney(f.checkCard(null===(C=f.cards[3])||void 0===C?void 0:C.cardType).available))+"\n          ")])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-wrap-header"},[t("h4",{staticClass:"card-wrap-title"},[this._v("Your Card Details")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"validity"},[e("div",{staticClass:"valid-time"},[t._v("Valid"),e("br"),t._v("Time")]),t._v(" "),e("div",{staticClass:"card-number date"},[t._v("12/24")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-apply"},[e("div",{staticClass:"add-card"},[e("h1",{staticClass:"add-text"},[t._v("+")])]),t._v(" "),e("div",{staticClass:"apply"},[t._v("Apply For Card")])])}],!1,null,null,null);e.default=component.exports}}]);