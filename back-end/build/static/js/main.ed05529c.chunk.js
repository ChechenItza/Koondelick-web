(this["webpackJsonpreact-journey"]=this["webpackJsonpreact-journey"]||[]).push([[0],{1:function(n,e){n.exports={borderColor:"#D0D0D0",btnColor:"#ffffff",primaryColor:"#e53935",primaryHoverColor:"#ff6f60",gradientColor:"#ff6f60",gradient2Color:"#E1E2E1",inactiveColor:"#E1E2E1",navbarElemColor:"rgba(255, 255, 255, 1)",bgColor:"#EEEEEE",editorBgColor:"#ffffff",shadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"}},211:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),o=t.n(a),l=t(45),c=t.n(l),i=t(79),u=t(3),f=t(4),s=t(1),d=t.n(s);function m(){var n=Object(r.a)(["\n  background-color: ",";\n  height: 5rem;\n\n  border-radius: 15px 15px 0 0;\n\n  flex-shrink: 0;\n\n  padding: 0 0.8em;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  box-shadow: ",";\n"]);return m=function(){return n},n}function g(){var n=Object(r.a)(["\n  visibility: hidden;\n"]);return g=function(){return n},n}function b(){var n=Object(r.a)(["\n  border-radius: 25px;\n  padding: 0.6rem;\n  color: ",";\n\n  margin: 0.3rem;\n\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10+ and Edge */\n  user-select: none; /* Standard syntax */\n\n  &:hover {\n    background-color: ",";\n    cursor: pointer;\n  }\n"]);return b=function(){return n},n}function p(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]);return p=function(){return n},n}var v=u.b.div(p()),h=u.b.span.attrs((function(n){return{className:"material-icons"}}))(b(),d.a.navbarElemColor,d.a.primaryHoverColor),E=Object(u.b)(h)(g()),x=u.b.div(m(),d.a.primaryColor,d.a.shadow);function w(){var n=Object(r.a)(["\n  font-weight: bold;\n  color: ",";\n  font-size: 1rem;\n"]);return w=function(){return n},n}function y(){var n=Object(r.a)(["\n  font-weight: bold;\n  color: ",";\n  font-size: 1.7rem;\n  margin-right: 0.5rem;\n"]);return y=function(){return n},n}function j(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: baseline;\n  margin: 0 auto;\n\n  min-width: 15rem;\n"]);return j=function(){return n},n}function C(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  margin: 0 auto;\n"]);return C=function(){return n},n}var k=u.b.div(C()),O=u.b.div(j()),D=u.b.span(y(),d.a.navbarElemColor),F=u.b.span(w(),d.a.navbarElemColor),M=function(n){var e=n.date,t=n.changeDate,r=function(n,r){n.preventDefault();var a=new Date(e.getFullYear(),e.getMonth()+r,e.getDate());t(a)};return o.a.createElement(k,null,o.a.createElement(h,{onClick:function(n){return r(n,-1)}},"chevron_left"),o.a.createElement(O,null,o.a.createElement(D,null,e.toLocaleString("default",{month:"long"})),o.a.createElement(F,null,e.getFullYear())),o.a.createElement(h,{onClick:function(n){return r(n,1)}},"chevron_right"))},Y=t(6),z=t.n(Y),S=t(13),J=t(22),T=t.n(J),q={logout:function(){var n=Object(S.a)(z.a.mark((function n(){return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.a.get("".concat("/auth","/logout"));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},I=function(n){var e=n.date,t=n.changeDate;return o.a.createElement(x,null,o.a.createElement(v,null,o.a.createElement(E,null,"settings")),o.a.createElement(M,{date:e,changeDate:t}),o.a.createElement(v,null,o.a.createElement(h,{onClick:function(n){n.preventDefault(),q.logout()}},"settings")))};function B(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-top: 1px solid ",";\n  border-right: ",";\n  flex: 1;\n\n  font-size: 0.9rem;\n  font-weight: bold;\n"]);return B=function(){return n},n}function P(){var n=Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, minmax(auto, 1fr));\n  grid-template-rows: 1fr;\n  height: 1.9rem;\n\n  background-color: ",";\n\n  box-shadow: ",";\n"]);return P=function(){return n},n}var _=u.b.div(P(),d.a.bgColor,d.a.shadow),H=u.b.span(B(),d.a.borderColor,(function(n){return n.last?"0px":"1px solid "+d.a.borderColor})),R=function(){return o.a.createElement(_,null,o.a.createElement(H,null,"Sun"),o.a.createElement(H,null,"Mon"),o.a.createElement(H,null,"Tue"),o.a.createElement(H,null,"Wed"),o.a.createElement(H,null,"Thu"),o.a.createElement(H,null,"Fri"),o.a.createElement(H,{last:!0},"Sat"))};function L(){var n=Object(r.a)(["\n  background-color: ",";\n\n  &:hover {\n    filter: brightness(100%);\n    cursor: auto;\n  }\n"]);return L=function(){return n},n}function N(){var n=Object(r.a)(["\n  padding: 0.7rem;\n  background-color: ",";\n  border-top: 1px solid ",";\n  border-right: ",";\n\n  font-size: 0.8rem;\n\n  &:hover {\n    filter: brightness(96%);\n    cursor: pointer;\n  }\n"]);return N=function(){return n},n}function W(){var n=Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, minmax(auto, 1fr));\n  grid-template-rows: repeat(6, minmax(auto, 1fr));\n  flex: 1;\n\n  box-shadow: ",";\n"]);return W=function(){return n},n}var A=u.b.div(W(),d.a.shadow),G=u.b.div(N(),d.a.btnColor,d.a.borderColor,(function(n){return n.last?"0px":"1px solid "+d.a.borderColor})),K=Object(u.b)(G)(L(),d.a.bgColor),Q=function(n){var e=n.date,t=n.goToJournalPage;return o.a.createElement(A,null,function(){for(var n=[],r=new Date(e.getFullYear(),e.getMonth(),1).getDay(),a=0;a<r;a++)n.push(o.a.createElement(K,{key:n.length}));for(var l=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),c=function(r){n.push(o.a.createElement(G,{key:n.length,onClick:function(n){!function(n,e){n.preventDefault(),t(e)}(n,r)},last:(n.length+1)%7===0},function(n){var t=new Date,r=new Date(e.getFullYear(),e.getMonth(),n);return t.getFullYear()===r.getFullYear()&&t.getMonth()===r.getMonth()&&t.getDate()===r.getDate()}(r)?o.a.createElement("u",null,r):r))},i=1;i<=l;i++)c(i);for(;n.length<42;)n.push(o.a.createElement(K,{key:n.length,last:(n.length+1)%7===0}));return n}())},U=function(n){var e=n.date,t=n.changeDate,r=n.goToJournalPage;return o.a.createElement(o.a.Fragment,null,o.a.createElement(I,{date:e,changeDate:t}),o.a.createElement(R,null),o.a.createElement(Q,{date:e,goToJournalPage:r}))};function V(){var n=Object(r.a)(["\n  font-weight: bold;\n  color: ",";\n  font-size: 1rem;\n"]);return V=function(){return n},n}function X(){var n=Object(r.a)(["\n  font-weight: bold;\n  color: ",";\n  font-size: 1.7rem;\n  margin-right: 0.5rem;\n"]);return X=function(){return n},n}function Z(){var n=Object(r.a)(["\n  font-weight: bold;\n  color: ",";\n  font-size: 1.7rem;\n  margin-right: 0.4rem;\n"]);return Z=function(){return n},n}function $(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: baseline;\n  margin: 0 1.8rem;\n\n  min-width: 179px;\n"]);return $=function(){return n},n}var nn=u.b.div($()),en=u.b.span(Z(),d.a.navbarElemColor),tn=u.b.span(X(),d.a.navbarElemColor),rn=u.b.span(V(),d.a.navbarElemColor),an=function(n){var e=n.date,t=n.saveEntry,r=Object(f.f)();return o.a.createElement(x,null,o.a.createElement(v,null,o.a.createElement(h,{onClick:function(n){n.preventDefault(),r.goBack()}},"arrow_back"),o.a.createElement(E,null,"settings"),o.a.createElement(E,null,"save")),o.a.createElement(nn,null,o.a.createElement(en,null,e.getDate()),o.a.createElement(tn,null,e.toLocaleString("default",{month:"long"})),o.a.createElement(rn,null,e.getFullYear())),o.a.createElement(v,null,o.a.createElement(E,null,"arrow_back"),o.a.createElement(h,{onClick:t},"save"),o.a.createElement(h,null,"settings")))},on=t(78),ln=t.n(on);t(210);function cn(){var n=Object(r.a)(["\n  font-size: 1rem;\n  flex-grow: 1;\n\n  overflow: auto;\n"]);return cn=function(){return n},n}var un=u.b.div(cn()),fn={syntax:!0,toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["code-block"],["clean"]]},sn=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","code-block"],dn=function(n){var e=n.text;return o.a.createElement(ln.a,{theme:"snow",ref:e,modules:fn,formats:sn},o.a.createElement(un,null))},mn=function(n){return"".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDate())},gn={get:function(){var n=Object(S.a)(z.a.mark((function n(e){var t,r;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat("/entries","/").concat(mn(e)),n.next=3,T.a.get(t);case 3:return r=n.sent,n.abrupt("return",r.data?r.data.entry:void 0);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),post:function(){var n=Object(S.a)(z.a.mark((function n(e,t){var r,a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat("/entries","/").concat(mn(e)),n.next=3,T.a.post(r,{entry:t});case 3:return a=n.sent,n.abrupt("return",a.data.entry);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},bn=function(n){var e=n.date,t=Object(a.useRef)();Object(a.useEffect)((function(){Object(S.a)(z.a.mark((function n(){var r;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,gn.get(e);case 3:void 0!==(r=n.sent)&&t.current.getEditor().setContents(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}),[e]);var r=function(){var n=Object(S.a)(z.a.mark((function n(){return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,gn.post(e,t.current.getEditor().getContents());case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.error(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(an,{date:e,saveEntry:r}),o.a.createElement(dn,{text:t}))};function pn(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]);return pn=function(){return n},n}var vn=u.b.div(pn()),hn=function(){var n=Object(a.useState)(new Date),e=Object(i.a)(n,2),t=e[0],r=e[1],l=Object(f.f)(),c=Object(f.g)("/:date"),u=t;if(c&&!l.location.state){var s=c.params.date.split("-");u=new Date(parseInt(s[0]),parseInt(s[1])-1,parseInt(s[2]))}var d=u!==t;Object(a.useEffect)((function(){r(u)}),[d]);var m=function(n){r(n)};return o.a.createElement(vn,null,o.a.createElement(f.c,null,o.a.createElement(f.a,{exact:!0,path:"/"},o.a.createElement(U,{date:t,changeDate:m,goToJournalPage:function(n){var e=new Date(t.getFullYear(),t.getMonth(),n);m(e);var r={pathname:mn(e),state:{fromCalendar:!0}};l.push(r)}})),o.a.createElement(f.a,{path:"/:date"},o.a.createElement(bn,{date:u}))))},En=t(33);function xn(){var n=Object(r.a)(["\n  html, body {\n    height: 100vh;\n    width: 100vw;\n  }\n\n  html {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  strong {\n    font-weight: 700;\n  }\n\n  em {\n    font-style: italic;\n  }\n\n  u {\n    text-decoration: none;\n    border-bottom: 0.3rem solid ",";\n\n    padding-bottom: 0.1rem;\n  }\n\n  .quill {\n    background-color: ",";\n    flex-grow: 1;\n    \n    display: flex;\n    flex-direction: column;\n\n    box-shadow: ",";\n  }\n\n  .ql-toolbar, .ql-container {\n    border-left: 0px !important;\n    border-right: 0px !important;\n    font-family: Roboto !important;\n  }\n\n\n  #root {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(to bottom, "," 0%, "," 13%, "," 13%, "," 13%, "," 100%);\n    width: 100%;\n    height: 100%;\n    padding: 3% 21%;\n  }\n"]);return xn=function(){return n},n}var wn=Object(u.a)(xn(),d.a.primaryHoverColor,d.a.editorBgColor,d.a.shadow,d.a.gradientColor,d.a.gradientColor,d.a.gradientColor,d.a.gradient2Color,d.a.gradient2Color);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(wn,null),o.a.createElement(En.a,null,o.a.createElement(hn,null))),document.getElementById("root"))},80:function(n,e,t){n.exports=t(211)}},[[80,1,2]]]);
//# sourceMappingURL=main.ed05529c.chunk.js.map