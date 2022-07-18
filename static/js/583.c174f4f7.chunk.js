"use strict";(self.webpackChunksecond_app=self.webpackChunksecond_app||[]).push([[583],{4930:function(e,n,r){var a=r(5861),t=r(7757),s=r.n(t),u=r(6724),l=r(3078);function i(){return(i=(0,a.Z)(s().mark((function e(n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.PL)((0,u.hJ)(l.db,"users"));case 2:return r=e.sent,a=!0,r.forEach((function(e){e.data().username!==n||(a=!1)})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.Z=function(e){return i.apply(this,arguments)}},8583:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var a=r(1413),t=r(5861),s=r(885),u=r(7757),l=r.n(u),i=r(2791),c=r(9434),o=r(3504),d=r(6871),h=r(4615),m=r(4930),p=r(6724),f=r(3078),x=r(70),g=r(8238),b=r(1088),v=r(68),j=r(7420),N=r(887),y=r(184);function Z(){var e=(0,c.v9)((function(e){return e.currentUser.user})),n=(0,c.v9)((function(e){return e.isPageDisabled})),r=(0,c.I0)(),u=(0,d.s0)(),Z=(0,i.useState)(!1),k=(0,s.Z)(Z,2),w=k[0],C=k[1],E=(0,i.useState)(""),A=(0,s.Z)(E,2),P=A[0],F=A[1],U=(0,i.useState)({emailAddress:e.emailAddress,username:e.username,fullName:e.fullName,gender:e.gender,birthday:e.birthday,phoneNumber:e.phoneNumber}),S=(0,s.Z)(U,2),T=S[0],B=S[1],D=(0,i.useState)(!1),G=(0,s.Z)(D,2),I=G[0],L=G[1],M=T.emailAddress.length<6||T.username.length<6||T.fullName.length<6;if((0,i.useEffect)((function(){function n(){return(n=(0,t.Z)(l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!["","Male","Female"].every((function(e){return e!==T.gender}))){n.next=4;break}return F('The gender can only be "Male" or "Female"'),L(!1),n.abrupt("return");case 4:return F(""),n.next=7,(0,m.Z)(T.username);case 7:if(n.sent||T.username===e.username){n.next=12;break}return F("This username is not available"),L(!1),n.abrupt("return");case 12:return F(""),L(!0),n.abrupt("return");case 16:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[T.username,T.gender]),!e.username)return(0,y.jsx)(d.Fg,{to:h.ym});function J(){return(J=(0,t.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r((0,N.E)(!0)),n.next=3,(0,p.r7)((0,p.JU)(f.db,"users",e.userId),T);case 3:if(e.emailAddress===T.emailAddress){n.next=7;break}return t=(0,g.v0)(),n.next=7,(0,g.s)(t.currentUser,T.emailAddress);case 7:r((0,x.nl)((0,a.Z)((0,a.Z)({},e),T))),r((0,N.E)(!1)),u(h.ih);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,y.jsxs)(v.E.div,{className:"div-column",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[n&&(0,y.jsx)(b.Tv,{text:"change your profile",callback:function(){return J.apply(this,arguments)}}),(0,y.jsxs)("div",{className:"login-register col-11 col-sm-8 col-md-9 col-lg-7 col-xl-6 ".concat(n&&"disabled-page"),children:[(0,y.jsx)("img",{src:"/clothes-store/Images/icon.svg",className:"login-register-icon",alt:"The company's logo"}),(0,y.jsx)("button",{className:"switch",onClick:function(){return C((function(e){return!e}))},children:(0,y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,y.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})})}),w?(0,y.jsx)(b.G$,{}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{children:"Change Profile Data"}),P.length?(0,y.jsx)("p",{className:"info red",children:P}):(0,y.jsxs)("p",{className:"info",children:["Push ",(0,y.jsx)("b",{children:"Change"})," to continue"]}),(0,y.jsxs)("form",{method:"POST",className:"login-register-form change-user-form",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{className:"",children:"Username"}),(0,y.jsx)("input",{"aria-label":"Enter your username",className:"change-user-input",type:"text",placeholder:"Username",value:T.username,onChange:function(e){return B((function(n){return(0,a.Z)((0,a.Z)({},n),{},{username:e.target.value})}))}})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{className:"",children:"Full Name"}),(0,y.jsx)("input",{"aria-label":"Enter your full name",className:"change-user-input",type:"text",placeholder:"Full name",value:T.fullName,onChange:function(e){return B((function(n){return(0,a.Z)((0,a.Z)({},n),{},{fullName:e.target.value})}))}})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{className:"",children:"Email Address"}),(0,y.jsx)("input",{"aria-label":"Enter your email address",className:"change-user-input",type:"text",placeholder:"Email address",value:T.emailAddress,onChange:function(e){return B((function(n){return(0,a.Z)((0,a.Z)({},n),{},{emailAddress:e.target.value})}))}})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{className:"",children:"Gender"}),(0,y.jsx)("input",{"aria-label":"Enter your gender",className:"change-user-input",type:"text",placeholder:"Gender",value:T.gender,onChange:function(e){return B((function(n){return(0,a.Z)((0,a.Z)({},n),{},{gender:e.target.value})}))}})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{className:"",children:"Birthday"}),(0,y.jsx)("input",{"aria-label":"Enter your birthday",className:"change-user-input",type:"text",placeholder:"Birthdate",value:T.birthday,onFocus:function(e){return e.target.type="date"},onChange:function(e){return B((function(n){return(0,a.Z)((0,a.Z)({},n),{},{birthday:e.target.value})}))}})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{className:"",children:"Phone Number"}),(0,y.jsx)("input",{"aria-label":"Enter your phone number",className:"change-user-input",type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",placeholder:"Phone number",value:T.phoneNumber,onChange:function(e){return B((function(n){return(0,a.Z)((0,a.Z)({},n),{},{phoneNumber:e.target.value})}))}})]}),(0,y.jsx)("div",{className:"check-out",children:(0,y.jsx)("button",{disabled:!I||M,type:"submit",className:"check-out-button ".concat((!I||M)&&"disabled-button"),onClick:function(e){e.preventDefault(),r((0,j.k)(!0))},children:(0,y.jsx)("h2",{className:"h2-default",children:"Change"})})})]})]}),(0,y.jsxs)("div",{className:"link",children:[(0,y.jsx)("p",{className:"info",children:"Return to"}),(0,y.jsx)(o.rU,{to:h.ih,className:"info blue",children:"Profile"})]})]})]})}}}]);
//# sourceMappingURL=583.c174f4f7.chunk.js.map