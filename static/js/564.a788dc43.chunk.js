"use strict";(self.webpackChunksecond_app=self.webpackChunksecond_app||[]).push([[564],{4930:function(e,n,r){var t=r(5861),a=r(7757),s=r.n(a),u=r(6724),i=r(3078);function c(){return(c=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.PL)((0,u.hJ)(i.db,"users"));case 2:return r=e.sent,t=!0,r.forEach((function(e){e.data().username!==n||(t=!1)})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.Z=function(e){return c.apply(this,arguments)}},5564:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var t=r(1413),a=r(5861),s=r(885),u=r(7757),i=r.n(u),c=r(2791),l=r(3504),o=r(6871),d=r(8238),p=r(3078),m=r(6724),f=r(4615),h=r(70),g=r(9434),x=r(4930),v=r(68),b=r(887),y=r(8504),N=r(184);function Z(){var e=(0,g.I0)(),n=(0,o.s0)(),r=(0,g.v9)((function(e){return e.currentUser.user})),u=(0,g.v9)((function(e){return e.shouldUserLogin})),Z=(0,c.useState)({fullName:"",username:"",emailAddress:"",password:""}),w=(0,s.Z)(Z,2),j=w[0],k=w[1],C=(0,c.useState)(u?"You must sign up first":""),E=(0,s.Z)(C,2),A=E[0],S=E[1],L=(0,c.useState)(!1),U=(0,s.Z)(L,2),I=U[0],J=U[1],P=j.password.length<6||j.emailAddress.length<6||j.username.length<6||j.fullName.length<6;if((0,c.useEffect)((function(){function e(){return(e=(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Z)(j.username);case 2:if(e.sent){e.next=7;break}return S("This username is not available"),J(!1),e.abrupt("return");case 7:S(u?"You must sign up first":""),J(!0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j.username]),r.username)return(0,N.jsx)(o.Fg,{to:f.ih});function T(){return(T=(0,a.Z)(i().mark((function r(a){var s,c;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.preventDefault(),e((0,b.E)(!0)),I){r.next=4;break}return r.abrupt("return");case 4:return r.prev=4,r.next=7,(0,d.Xb)(p.I8,j.emailAddress,j.password);case 7:return s=r.sent,r.next=10,(0,m.pl)((0,m.JU)(p.db,"users",s.user.uid),{userId:s.user.uid,username:j.username.toLowerCase(),fullName:j.fullName,emailAddress:j.emailAddress,gender:"",birthday:"",phoneNumber:"",purchasesList:[],profileImage:"",dateCreated:Date.now()});case 10:return r.next=12,(0,m.QT)((0,m.JU)(p.db,"users",s.user.uid));case 12:c=r.sent,e((0,h.nl)(c.data())),u?(e((0,y.t)(!1)),n(f.$L)):n(f.ih),r.next=23;break;case 17:r.prev=17,r.t0=r.catch(4),k((function(e){return(0,t.Z)((0,t.Z)({},e),{},{emailAddress:""})})),k((function(e){return(0,t.Z)((0,t.Z)({},e),{},{password:""})})),S(r.t0.message),console.log(r.t0);case 23:e((0,b.E)(!1));case 24:case"end":return r.stop()}}),r,null,[[4,17]])})))).apply(this,arguments)}return(0,N.jsxs)(v.E.div,{className:"login-register col-12 col-sm-8 col-md-6",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,N.jsx)("img",{src:"/clothes-store/Images/icon.svg",className:"login-register-icon"}),(0,N.jsx)("h1",{children:"Welcome to My Site's Name"}),A?(0,N.jsx)("p",{className:"info red",children:A}):(0,N.jsx)("p",{className:"info",children:"Sign up to continue"}),(0,N.jsxs)("form",{method:"POST",className:"login-register-form",children:[(0,N.jsx)("input",{"aria-label":"Enter your username",className:"",type:"text",placeholder:"Username",value:j.username,onChange:function(e){return k((function(n){return(0,t.Z)((0,t.Z)({},n),{},{username:e.target.value})}))}}),(0,N.jsx)("input",{"aria-label":"Enter your full name",className:"",type:"text",placeholder:"Full name",value:j.fullName,onChange:function(e){return k((function(n){return(0,t.Z)((0,t.Z)({},n),{},{fullName:e.target.value})}))}}),(0,N.jsx)("input",{"aria-label":"Enter your email address",className:"",type:"text",placeholder:"Email address",value:j.emailAddress,onChange:function(e){return k((function(n){return(0,t.Z)((0,t.Z)({},n),{},{emailAddress:e.target.value})}))}}),(0,N.jsx)("input",{"aria-label":"Enter your password",className:"",autoComplete:"on",type:"password",placeholder:"Password",value:j.password,onChange:function(e){return k((function(n){return(0,t.Z)((0,t.Z)({},n),{},{password:e.target.value})}))}}),(0,N.jsx)("div",{className:"check-out",children:(0,N.jsx)("button",{disabled:!I||P,type:"submit",className:"check-out-button ".concat((!I||P)&&"disabled-button"),onClick:function(e){return function(e){return T.apply(this,arguments)}(e)},children:(0,N.jsx)("h2",{className:"h2-default",children:"Sign up"})})})]}),(0,N.jsxs)("div",{className:"link",children:[(0,N.jsx)("p",{className:"info",children:"Already have an account?"}),(0,N.jsx)(l.rU,{to:f.ym,className:"info blue",children:"Login"})]})]})}},8504:function(e,n,r){r.d(n,{t:function(){return a}});var t=r(6832);function a(e){return{type:t.i,payload:e}}}}]);
//# sourceMappingURL=564.a788dc43.chunk.js.map