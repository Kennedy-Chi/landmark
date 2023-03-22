(window.webpackJsonp=window.webpackJsonp||[]).push([[45,19],{356:function(t,e,r){"use strict";r.r(e);var d=r(8),c=(r(48),r(20),r(37),r(13),r(90),r(38),{data:function(){return{cards:[],user:"",firstCard:"",secondCard:"",thirdCard:"",fourthCard:"",firstAbbreviation:""}},methods:{formatMoney:function(t){return""==t||null==t||null==t?0:t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},checkCard:function(t){var e={issued:"",available:""};return this.cards.forEach((function(r){r.cardType==t&&(e.issued=r.issued,e.available=r.totalNumber-r.issued)})),e},getCard:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/card");case 3:return r=e.sent,t.cards=r.data.data,e.next=7,r.data.data[0];case 7:return t.firstCard=e.sent,e.next=10,r.data.data[1];case 10:return t.secondCard=e.sent,e.next=13,r.data.data[2];case 13:return t.thirdCard=e.sent,e.next=16,r.data.data[3];case 16:t.fourthCard=e.sent,e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))()},getUser:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:return r=e.sent,t.user=r.data.user,e.next=7,r.data.user.firstName[0];case 7:t.firstAbbreviation=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},mounted:function(){this.getCard(),this.getUser()}}),l=r(56),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-card-wrap"},[e("div",{staticClass:"card-types"},[e("div",{staticClass:"card-details"},[t._m(0),t._v(" "),e("div",{staticClass:"card-holder"},[e("div",{staticClass:"card-number"},[t._v("1234 **** **** ****")]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"card-number name"},[t._v("\n          "+t._s(t.user.firstAbbreviation)+". "+t._s(t.user.lastName)+"\n        ")]),t._v(" "),e("img",{staticClass:"card",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/6413b7c66452a93e5640c298_Visa-Card-New.svg",loading:"lazy",alt:""}})]),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"card-types-wrapper add"},[e("div",{staticClass:"card-title"},[t._v("Our Available Cards")]),t._v(" "),e("div",{staticClass:"type-card"},[e("div",{staticClass:"card-type-flex"},[t.firstCard?e("h4",{staticClass:"type-card-title"},[t._v("Type")]):t._e(),t._v(" "),e("div",[t._v(t._s(t.firstCard.cardType))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Issued")]),t._v(" "),e("div",[t._v(t._s(t.formatMoney(t.checkCard(t.firstCard.cardType).issued)))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Available")]),t._v(" "),e("div",[t._v("\n            "+t._s(t.formatMoney(t.checkCard(t.firstCard.cardType).available))+"\n          ")])])]),t._v(" "),e("div",{staticClass:"type-card other"},[e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Type")]),t._v(" "),e("div",[t._v(t._s(t.secondCard.cardType))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Issued")]),t._v(" "),e("div",[t._v(t._s(t.formatMoney(t.checkCard(t.secondCard.cardType).issued)))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Available")]),t._v(" "),e("div",[t._v("\n            "+t._s(t.formatMoney(t.checkCard(t.secondCard.cardType).available))+"\n          ")])])]),t._v(" "),e("div",{staticClass:"type-card cool"},[e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Type")]),t._v(" "),e("div",[t._v(t._s(t.thirdCard.cardType))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Issued")]),t._v(" "),e("div",[t._v(t._s(t.formatMoney(t.checkCard(t.thirdCard.cardType).issued)))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Available")]),t._v(" "),e("div",[t._v("\n            "+t._s(t.formatMoney(t.checkCard(t.thirdCard.cardType).available))+"\n          ")])])]),t._v(" "),e("div",{staticClass:"type-card other"},[e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Type")]),t._v(" "),e("div",[t._v(t._s(t.fourthCard.cardType))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Issued")]),t._v(" "),e("div",[t._v(t._s(t.formatMoney(t.checkCard(t.fourthCard.cardType).issued)))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Available")]),t._v(" "),e("div",[t._v("\n            "+t._s(t.formatMoney(t.checkCard(t.fourthCard.cardType).available))+"\n          ")])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-wrap-header"},[t("h4",{staticClass:"card-wrap-title"},[this._v("Your Card Details")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"validity"},[e("div",{staticClass:"valid-time"},[t._v("Valid"),e("br"),t._v("Time")]),t._v(" "),e("div",{staticClass:"card-number date"},[t._v("12/24")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-apply"},[e("div",{staticClass:"add-card"},[e("h1",{staticClass:"add-text"},[t._v("+")])]),t._v(" "),e("div",{staticClass:"apply"},[t._v("Apply For Card")])])}],!1,null,null,null);e.default=component.exports},402:function(t,e,r){"use strict";r.r(e);var d=r(326),c=r(316),l=r(362),n=r(338),v={components:{DashboardNavigation:c.default,TotalBalance:n.default,DashboardTransactions:l.a,DashboardActivities:d.default}},o=r(56),component=Object(o.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-wrapper home"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"dashboard-content"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"content-body"},[e("total-balance"),t._v(" "),e("dashboard-card-details"),t._v(" "),e("dashboard-transactions"),t._v(" "),e("dashboard-activities")],1),t._v(" "),e("dashboard-footer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:r(316).default,DashboardHeader:r(325).default,TotalBalance:r(339).default,DashboardCardDetails:r(356).default,DashboardTransactions:r(340).default,DashboardActivities:r(326).default,DashboardFooter:r(315).default})}}]);