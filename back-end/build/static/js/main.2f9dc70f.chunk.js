(this["webpackJsonpreact-journey"]=this["webpackJsonpreact-journey"]||[]).push([[0],{149:function(e,n,t){e.exports=t(355)},279:function(e,n,t){},355:function(e,n,t){"use strict";t.r(n);var a=t(8),r=t(0),o=t.n(r),c=t(11),l=t.n(c),i=t(28),u=t(9),s=t(137),d=t.n(s),m=t(15),f=t(139),g=function(e){var n=e.user,t=e.children,a=Object(f.a)(e,["user","children"]);return o.a.createElement(m.b,a,n?t:o.a.createElement(m.a,{to:"/login"}))},b=t(6),p=t(390),h=t(391),v=t(7),E=t.n(v);function x(){var e=Object(a.a)(["\n  background-color: ",";\n  height: 4.8rem;\n\n  border-radius: 15px 15px 0 0;\n\n  flex-shrink: 0;\n\n  padding: 0 1rem;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  box-shadow: ",";\n\n  @media (max-width: 570px) {\n    border-radius: 0;\n  }\n  @media (max-width: 500px), (max-height: 700px) {\n    height: 4rem;\n  }\n"]);return x=function(){return e},e}function w(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]);return w=function(){return e},e}var y=Object(b.a)((function(e){return{root:{"&:hover":{backgroundColor:e.palette.primary.light}}}}))(p.a),j=Object(b.a)((function(e){return{root:{color:"#ffffff"}}}))(h.a),O=Object(b.a)((function(e){return{root:{visibility:"hidden"}}}))(p.a),k=function(){return o.a.createElement(O,null,o.a.createElement(j,null,"settings"))},S=u.b.div(w()),D=u.b.div(x(),E.a.primary,E.a.shadow);function C(){var e=Object(a.a)(["\n  font-weight: bold;\n  color: ",";\n  font-size: 1rem;\n"]);return C=function(){return e},e}function F(){var e=Object(a.a)(["\n  font-weight: bold;\n  color: ",";\n  font-size: 1.6rem;\n  margin-right: 0.5rem;\n"]);return F=function(){return e},e}function M(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: baseline;\n  margin: 0 auto;\n\n  min-width: 14rem;\n"]);return M=function(){return e},e}function z(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  margin: 0 auto;\n"]);return z=function(){return e},e}var I=function(e){var n=e.changeMonth;return o.a.createElement(y,{"aria-label":"prev_month",onClick:function(){return n(-1)}},o.a.createElement(j,null,"chevron_left"))},N=function(e){var n=e.changeMonth;return o.a.createElement(y,{"aria-label":"next_month",onClick:function(){return n(1)}},o.a.createElement(j,null,"chevron_right"))},T=u.b.div(z()),Y=u.b.div(M()),B=u.b.span(F(),E.a.icon),L=u.b.span(C(),E.a.icon),q=function(e){var n=e.date,t=e.setDate,a=function(e){var a=new Date(n.getFullYear(),n.getMonth()+e,n.getDate());t(a)};return o.a.createElement(T,null,o.a.createElement(I,{changeMonth:a}),o.a.createElement(Y,null,o.a.createElement(B,null,n.toLocaleString("default",{month:"long"})),o.a.createElement(L,null,n.getFullYear())),o.a.createElement(N,{changeMonth:a}))},_=t(402),J=t(405),U=function(e){var n=e.username,t=e.logout,a=o.a.useState(null),r=Object(i.a)(a,2),c=r[0],l=r[1],u=function(){l(null)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{"aria-controls":"settings-menu","aria-label":"settings",onClick:function(e){l(e.currentTarget)}},o.a.createElement(j,null,"settings")),o.a.createElement(_.a,{id:"settings-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:u},o.a.createElement(J.a,{onClick:u,disabled:!0},n),o.a.createElement(J.a,{onClick:t},"Logout")))},A=function(e){var n=e.date,t=e.username,a=e.setDate,r=e.logout;return o.a.createElement(D,null,o.a.createElement(S,null,o.a.createElement(k,null)),o.a.createElement(q,{date:n,setDate:a}),o.a.createElement(S,null,o.a.createElement(U,{username:t,logout:r})))};function G(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-top: 1px solid ",";\n  border-right: ",";\n  flex: 1;\n\n  font-size: 0.88rem;\n  font-weight: bold;\n"]);return G=function(){return e},e}function R(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, minmax(auto, 1fr));\n  grid-template-rows: 1fr;\n  height: 1.8rem;\n\n  background-color: ",";\n\n  box-shadow: ",";\n"]);return R=function(){return e},e}var H=u.b.div(R(),E.a.background,E.a.shadow),W=u.b.span(G(),E.a.border,(function(e){return e.last?"0px":"1px solid "+E.a.border})),K=function(){return o.a.createElement(H,null,o.a.createElement(W,null,"Sun"),o.a.createElement(W,null,"Mon"),o.a.createElement(W,null,"Tue"),o.a.createElement(W,null,"Wed"),o.a.createElement(W,null,"Thu"),o.a.createElement(W,null,"Fri"),o.a.createElement(W,{last:!0},"Sat"))},P=function(e){return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())};function Q(){var e=Object(a.a)(["\n  border-bottom: 0.3rem solid ",";\n  padding-bottom: 0.1rem;\n"]);return Q=function(){return e},e}function V(){var e=Object(a.a)(["\n  background-color: ",";\n\n  &:hover {\n    filter: brightness(100%);\n    cursor: default;\n  }\n"]);return V=function(){return e},e}function X(){var e=Object(a.a)(["\n  padding: 0.7rem;\n  background-color: ",";\n  border-top: 1px solid ",";\n  border-right: ",";\n\n  font-size: 0.8rem;\n\n  &:hover {\n    filter: brightness(96%);\n    cursor: pointer;\n  }\n"]);return X=function(){return e},e}function Z(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(7, minmax(auto, 1fr));\n  grid-template-rows: repeat(6, minmax(auto, 1fr));\n  flex: 1;\n\n  box-shadow: ",";\n"]);return Z=function(){return e},e}var $=u.b.div(Z(),E.a.shadow),ee=u.b.div(X(),E.a.button,E.a.border,(function(e){return e.last?"0px":"1px solid "+E.a.border})),ne=Object(u.b)(ee)(V(),E.a.background),te=u.b.span(Q(),E.a.primaryLight),ae=function(e){var n=e.date,t=(e.setDate,Object(m.g)()),a=function(e,a){e.preventDefault(),function(e){var a=new Date(n.getFullYear(),n.getMonth(),e),r={pathname:"/entry/"+P(a),state:{fromCalendar:!0}};t.push(r)}(a)};return o.a.createElement($,null,function(){for(var e=[],t=new Date(n.getFullYear(),n.getMonth(),1).getDay(),r=0;r<t;r++)e.push(o.a.createElement(ne,{key:e.length}));for(var c=new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),l=function(t){e.push(o.a.createElement(ee,{key:e.length,onClick:function(e){a(e,t)},last:(e.length+1)%7===0},function(e){var t=new Date,a=new Date(n.getFullYear(),n.getMonth(),e);return t.getFullYear()===a.getFullYear()&&t.getMonth()===a.getMonth()&&t.getDate()===a.getDate()}(t)?o.a.createElement(te,null,t):t))},i=1;i<=c;i++)l(i);for(;e.length<42;)e.push(o.a.createElement(ne,{key:e.length,last:(e.length+1)%7===0}));return e}())},re=function(e){var n=e.date,t=e.username,a=e.setDate,r=e.logout;return o.a.createElement(o.a.Fragment,null,o.a.createElement(A,{date:n,username:t,setDate:a,logout:r}),o.a.createElement(K,null),o.a.createElement(ae,{setDate:a,date:n}))},oe=t(18),ce=t.n(oe),le=t(24),ie=t(403);function ue(){var e=Object(a.a)(["\n  font-size: 1rem;\n  margin-right: 0;\n"]);return ue=function(){return e},e}function se(){var e=Object(a.a)(["\n  margin-right: 0.5rem;\n"]);return se=function(){return e},e}function de(){var e=Object(a.a)(["\n  font-weight: bold;\n  color: ",";\n  font-size: 1.6rem;\n  margin-right: 0.4rem;\n"]);return de=function(){return e},e}function me(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: baseline;\n  margin: 0 1.8rem;\n\n  min-width: 11.1875rem;\n"]);return me=function(){return e},e}var fe=function(e){var n=e.handleBack;return o.a.createElement(y,{"aria-label":"back",onClick:n},o.a.createElement(j,null,"arrow_back"))},ge=function(e){var n=e.saveEntry,t=e.disabled;return o.a.createElement(y,{disabled:t,"aria-label":"save",onClick:n},o.a.createElement(j,null,"save"))},be=u.b.div(me()),pe=u.b.span(de(),E.a.icon),he=Object(u.b)(pe)(se()),ve=Object(u.b)(pe)(ue()),Ee=function(e){var n=e.date,t=e.goBack,a=e.saveEntry,r=e.saveEnabled;return o.a.createElement(D,null,o.a.createElement(S,null,o.a.createElement(fe,{handleBack:t}),o.a.createElement(k,null)),o.a.createElement(be,null,o.a.createElement(pe,null,n.getDate()),o.a.createElement(he,null,n.toLocaleString("default",{month:"long"})),o.a.createElement(ve,null,n.getFullYear())),o.a.createElement(S,null,o.a.createElement(k,null),o.a.createElement(ge,{disabled:!r,saveEntry:a},"save")))},xe=t(135),we=t.n(xe),ye=t(394);t(262);function je(){var e=Object(a.a)(["\n  font-size: 1rem;\n  flex-grow: 1;\n\n  overflow: auto;\n"]);return je=function(){return e},e}var Oe=u.b.div(je()),ke={syntax:!0,toolbar:[[{header:[1,2,3,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["code-block"],["clean"]]},Se=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","code-block"],De=function(e){var n=e.text,t=e.saveEnabled,a=e.setSaveEnabled,r=e.loaded,c=e.savedEntry;return o.a.createElement(o.a.Fragment,null,r?o.a.createElement(o.a.Fragment,null):o.a.createElement(ye.a,{color:"secondary"}),o.a.createElement(we.a,{readOnly:!r,theme:"snow",ref:n,onChange:function(e,n,r,o){JSON.stringify(o.getContents())===c?t&&a(!1):t||a(!0)},modules:ke,formats:Se},o.a.createElement(Oe,null)))},Ce=t(399),Fe=t(404),Me=t(398),ze=t(396),Ie=t(397),Ne=t(395),Te=function(e){var n=e.show,t=e.setShowAlert,a=e.saveEntry,r=e.setEntryTooLarge,c=function(){t(!1)},l=Object(m.g)(),i=function(){l.goBack(),c()},u=function(){var e=Object(le.a)(ce.a.mark((function e(){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a();case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),413===e.t0.response.status?(r(!0),c()):console.error(e.t0),e.abrupt("return");case 9:i();case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(Fe.a,{open:n,onClose:c,"aria-labelledby":"save-dialog-title","aria-describedby":"save-dialog-description"},o.a.createElement(Ne.a,{id:"save-dialog-title"},"Unsaved changes"),o.a.createElement(ze.a,null,o.a.createElement(Ie.a,{id:"save-dialog-description"},"There are unsaved changes. Do you wish to save before leaving?")),o.a.createElement(Me.a,null,o.a.createElement(Ce.a,{onClick:c,color:"primary"},"Cancel"),o.a.createElement(Ce.a,{onClick:i,color:"primary"},"Don't Save"),o.a.createElement(Ce.a,{onClick:u,color:"primary",autoFocus:!0},"Save"))))},Ye=t(52),Be=t.n(Ye),Le=window.localStorage.getItem("user")?"bearer ".concat(window.localStorage.getItem("user")):null,qe={setToken:function(e){Le="bearer ".concat(e)},get:function(){var e=Object(le.a)(ce.a.mark((function e(n){var t,a,r;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("/entries","/").concat(P(n)),a={headers:{Authorization:Le}},e.prev=2,e.next=5,Be.a.get(t,a);case 5:return r=e.sent,e.abrupt("return",r.data?r.data.entry:void 0);case 9:return e.prev=9,e.t0=e.catch(2),console.error("Error while getting an entry from the server"),e.abrupt("return",void 0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}(),post:function(){var e=Object(le.a)(ce.a.mark((function e(n,t){var a,r,o;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("/entries","/").concat(P(n)),r={headers:{Authorization:Le}},e.next=4,Be.a.post(a,{entry:t},r);case 4:return o=e.sent,e.abrupt("return",o.data.entry);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},_e=function(e){var n=e.date,t=Object(r.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1],u=Object(r.useState)(null),s=Object(i.a)(u,2),d=s[0],f=s[1],g=Object(r.useState)(!1),b=Object(i.a)(g,2),p=b[0],h=b[1],v=Object(r.useState)(!1),E=Object(i.a)(v,2),x=E[0],w=E[1],y=Object(r.useState)(!1),j=Object(i.a)(y,2),O=j[0],k=j[1],S=Object(r.useRef)();Object(r.useEffect)((function(){Object(le.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qe.get(n);case 2:void 0!==(t=e.sent)&&S.current.getEditor().setContents(t),l(!0),f(JSON.stringify(S.current.getEditor().getContents())),w(!1),S.current.editor.enable(!0),S.current.editor.setSelection(S.current.editor.getText(0).length,0);case 9:case"end":return e.stop()}}),e)})))()}),[n]);var D=Object(m.g)(),C=function(){var e=Object(le.a)(ce.a.mark((function e(){var t,a;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.current.getEditor().getContents(),e.prev=1,e.next=4,qe.post(n,t);case 4:a=e.sent,e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(1),413===e.t0.response.status?k(!0):console.error(e.t0),e.t0;case 11:a&&(f(JSON.stringify(t)),w(!1));case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ee,{goBack:function(){JSON.stringify(S.current.getEditor().getContents())!==d?h(!0):D.push("/")},date:n,saveEntry:C,saveEnabled:x}),o.a.createElement(De,{text:S,loaded:c,saveEnabled:x,setSaveEnabled:w,savedEntry:d}),o.a.createElement(Te,{show:p,setShowAlert:h,saveEntry:C,setEntryTooLarge:k}),o.a.createElement(ie.a,{open:O,autoHideDuration:6e3,onClose:function(){k(!1)},message:"Error! Entry is too long!"}))},Je=t(136),Ue=(t(279),{auth:function(){var e=Object(le.a)(ce.a.mark((function e(n,t){var a;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Be.a.post("".concat("/auth","/").concat(n),{name:t});case 3:return a=e.sent,e.abrupt("return",a.data.token);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error while authenticating the user"),e.abrupt("return",void 0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()});function Ae(){var e=Object(a.a)(["\n  margin: 0 auto;\n  width: max-content;\n"]);return Ae=function(){return e},e}function Ge(){var e=Object(a.a)(["\n  margin: 0 auto 40px;\n  font-family: 'Open Sans','Noto Sans Myanmar UI',arial,sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: .1px;\n  line-height: 1.5;\n  width: max-content;\n"]);return Ge=function(){return e},e}function Re(){var e=Object(a.a)(["\n  margin: 0 auto 10px; \n  font-family: 'Open Sans','Noto Sans Myanmar UI',arial,sans-serif;\n  line-height: 1.3333;\n  font-size: 1.5rem;\n  font-weight: 400;\n  width: max-content;\n"]);return Re=function(){return e},e}function He(){var e=Object(a.a)(["\n  width: 300px;\n  height: 220px;\n  background-color: #ffffff;\n  box-shadow: ",";\n  border-radius: 5px;\n\n  padding: 30px;\n"]);return He=function(){return e},e}var We=u.b.div(He(),E.a.shadow),Ke=u.b.p(Re()),Pe=u.b.p(Ge()),Qe=u.b.div(Ae()),Ve=function(e){var n=e.setUser,t=function(){var e=Object(le.a)(ce.a.mark((function e(t){var a,r;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ue.auth(t.profileObj.googleId,t.profileObj.name);case 2:a=e.sent,qe.setToken(a),r={token:a,name:t.profileObj.name},n(r),window.localStorage.setItem("user",a),window.localStorage.setItem("username",t.profileObj.name);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return o.a.createElement(We,null,o.a.createElement(Ke,null,"Sign in"),o.a.createElement(Pe,null,"to continue using this app"),o.a.createElement(Qe,null,o.a.createElement(Je.GoogleLogin,{clientId:"571051428609-3lt1sq0sfe4qqrd67kcj0suo5af5006n.apps.googleusercontent.com",render:function(e){return o.a.createElement("div",{className:"google-btn",onClick:e.onClick,disabled:e.disabled},o.a.createElement("div",{className:"google-icon-wrapper"},o.a.createElement("img",{className:"google-icon",alt:"google-logo",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})),o.a.createElement("p",{className:"btn-text"},o.a.createElement("b",null,"Sign in with google")))},buttonText:"Sign in with google",onSuccess:t,onFailure:function(e,n){console.error("err: ".concat(e)),console.error("details: ".concat(n))}})))};function Xe(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-top: 8%; \n  background: linear-gradient(to bottom, "," 0%, "," 23%, "," 23%, "," 23%, "," 100%);\n  @media (max-width: 680px) {\n    padding-top: 3.5%;\n  }\n  @media (max-width: 570px) {\n    padding-top: 0;\n    justify-content: center;\n  }\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 3.5% 21%;\n  background: linear-gradient(to bottom, "," 0%, "," 13%, "," 13%, "," 13%, "," 100%);\n  @media (max-width: 1025px) {\n    padding: 3.5% 10%;\n  }\n  @media (max-width: 680px) {\n    padding: 3.5% 1%;\n  }\n  @media (max-width: 570px) {\n    padding: 0;\n  }\n  @media (max-width: 420px) and (min-height: 600px) {\n    padding-bottom: 30%;\n  }\n  @media (max-width: 420px) and (min-height: 800px) {\n    padding-bottom: 40%;\n  }\n"]);return Ze=function(){return e},e}var $e=u.b.div(Ze(),E.a.gradient1,E.a.gradient1,E.a.gradient1,E.a.gradient2,E.a.gradient2),en=u.b.div(Xe(),E.a.gradient1,E.a.gradient1,E.a.gradient1,E.a.gradient2,E.a.gradient2),nn=function(){var e=Object(r.useState)(new Date),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(window.localStorage.getItem("user")?{token:window.localStorage.getItem("user"),name:window.localStorage.getItem("username")}:null),l=Object(i.a)(c,2),u=l[0],s=l[1],f=t,b=!1,p=Object(m.h)("/entry/:date");if(p){var h=d.a.toDate(p.params.date);h?f=h:b=!0}var v=f!==t;return Object(r.useEffect)((function(){a(f)}),[v]),o.a.createElement(m.d,null,o.a.createElement(g,{user:u,exact:!0,path:"/"},o.a.createElement($e,null,o.a.createElement(re,{date:t,username:u?u.name:"",setDate:a,logout:function(){window.localStorage.removeItem("user"),window.localStorage.removeItem("username"),s(null)}}))),o.a.createElement(m.b,{exact:!0,path:"/login"},u?o.a.createElement(m.a,{to:"/"}):o.a.createElement(en,null,o.a.createElement(Ve,{setUser:s}))),o.a.createElement(g,{user:u,path:"/entry/:date"},o.a.createElement($e,null,b?o.a.createElement(m.a,{to:"/"}):o.a.createElement(_e,{date:f}))),o.a.createElement(m.b,{path:"/"},o.a.createElement(m.a,{to:"/"})))},tn=t(37),an=t(138),rn=t(400);function on(){var e=Object(a.a)(["\n  html, body {\n    height: 100vh;\n    width: 100vw;\n  }\n\n  html {\n    font-family: 'Roboto', sans-serif;\n  }\n  \n  @media (max-width: 570px), (max-height: 590px) {\n    html {\n      font-size: 0.8rem;\n    }\n  }\n\n  @media (max-width: 400px) {\n    html {\n      font-size: 0.7rem;\n    }\n  }\n\n  @media (max-width: 330px) {\n    html {\n      font-size: 0.6rem;\n    }\n  }\n\n  strong {\n    font-weight: 700;\n  }\n\n  em {\n    font-style: italic;\n  }\n\n  .quill {\n    background-color: ",";\n    flex-grow: 1;\n\n    overflow: auto;\n    \n    display: flex;\n    flex-direction: column;\n\n    box-shadow: ",";\n  }\n\n  .ql-toolbar, .ql-container {\n    border-left: 0px !important;\n    border-right: 0px !important;\n    font-family: Roboto !important;\n  }\n\n  #root {\n    width: 100%;\n    height: 100%;\n  }\n"]);return on=function(){return e},e}var cn=Object(an.a)({palette:{primary:{main:"#e53935",light:"#ff6f60",dark:"#ab000d"},secondary:{main:"#ff6f60",light:"#ffbcaf"}}}),ln=Object(u.a)(on(),E.a.editorBackground,E.a.shadow);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ln,null),o.a.createElement(tn.a,null,o.a.createElement(rn.a,{theme:cn},o.a.createElement(nn,null)))),document.getElementById("root"))},7:function(e,n){e.exports={border:"#D0D0D0",button:"#ffffff",primary:"#e53935",primaryLight:"#ff6f60",gradient1:"#ff6f60",gradient2:"#E1E2E1",inactive:"#E1E2E1",icon:"rgba(255, 255, 255, 1)",background:"#EEEEEE",editorBackground:"#ffffff",shadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"}}},[[149,1,2]]]);
//# sourceMappingURL=main.2f9dc70f.chunk.js.map