"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[93],{22:function(n,t,r){r.d(t,{E3:function(){return i},Hx:function(){return h},Y5:function(){return p},uV:function(){return f},wr:function(){return o}});var e=r(861),a=r(687),u=r.n(a),c=r(912),s="2390bc0c07f3ecc54a6e60472acdfb3a";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie",{params:{api_key:s,query:t}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day",{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t),{params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},93:function(n,t,r){r.r(t),r.d(t,{default:function(){return g}});var e,a,u,c,s=r(861),i=r(439),o=r(687),p=r.n(o),f=r(791),h=r(689),l=r(22),d=r(168),v=r(934),m=v.Z.li(e||(e=(0,d.Z)(["\n  display: flex;\n  gap: 8px;\n  padding: 4px;\n"]))),x=v.Z.img(a||(a=(0,d.Z)(["\n  display: block;\n  width: 50px;\n  height: 100px;\n"]))),w=v.Z.h3(u||(u=(0,d.Z)(["\n  margin-bottom: 4px;\n  font-weight: 500;\n"]))),Z=v.Z.p(c||(c=(0,d.Z)(["\n  font-size: 12px;\n"]))),k=r(184),g=function(){var n=(0,f.useState)(null),t=(0,i.Z)(n,2),r=t[0],e=t[1],a=(0,f.useState)(null),u=(0,i.Z)(a,2),c=u[0],o=u[1],d=(0,f.useState)(!1),v=(0,i.Z)(d,2),g=v[0],y=v[1],b=(0,h.UO)().movieId;return(0,f.useEffect)((function(){function n(){return(n=(0,s.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,y(!0),n.next=4,(0,l.uV)(b);case 4:t=n.sent,e(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),o("Sorry, something went wrong. Please, try again.");case 11:return n.prev=11,y(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[b]),(0,k.jsxs)("ul",{children:[r.map((function(n){var t=n.name,r=n.profile_path,e=n.cast_id,a=n.character;return(0,k.jsxs)(m,{children:[(0,k.jsx)(x,{src:"https://www.themoviedb.org/t/p/w500/".concat(r)||0,alt:t}),(0,k.jsxs)("div",{children:[(0,k.jsx)(w,{children:t}),(0,k.jsxs)(Z,{children:["Character: ",a]})]})]},e)})),g&&(0,k.jsx)("li",{children:"Loading"}),c&&(0,k.jsx)("li",{children:c})]})}}}]);
//# sourceMappingURL=93.e3325739.chunk.js.map