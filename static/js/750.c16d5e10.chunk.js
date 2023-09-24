"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[750],{8750:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var t,a,i,o,d,s,c,l,p,u,x,g,m,b,h,f=r(9439),Z=r(2791),j=r(9434),v=r(3634),w=r(6916),k=function(n){return n.contacts.contacts},y=function(n){return n.contacts.isLoading},C=function(n){return n.filter},z=(0,w.P1)([k,C],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),A=r(168),L=r(5706),F=L.Z.form(t||(t=(0,A.Z)(["\n  border-radius: 20px;\n  margin: auto;\n  margin-top: 50px;\n  width: 300px;\n  padding: 40px;\n  background: linear-gradient(30deg, #8b59e7 10%, #4ec7e6 80%);\n"]))),I=L.Z.label(a||(a=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),N=L.Z.button(i||(i=(0,A.Z)(["\n  display: block;\n  font-size: 16px;\n  font-weight: 500;\n  padding: 10px 20px;\n  border: 0;\n  margin: 0 auto;\n  margin-top: 10px;\n  border-radius: 50px;\n  background-color: white;\n  display: inline-block;\n  text-decoration: none;\n  transition: all 0.3s;\n\n  &:hover {\n    background-color: #4ec7e6;\n    border-color: black;\n  }\n"]))),_=L.Z.input(o||(o=(0,A.Z)(["\n  padding: 7px;\n  border-radius: 10px;\n  width: 300px;\n"]))),S=r(184),q=function(){var n=(0,Z.useState)(""),e=(0,f.Z)(n,2),r=e[0],t=e[1],a=(0,Z.useState)(""),i=(0,f.Z)(a,2),o=i[0],d=i[1],s=(0,j.v9)(k),c=(0,j.I0)(),l=function(n){var e=n.target,r=e.name,a=e.value;switch(r){case"name":t(a);break;case"number":d(a);break;default:return}},p=function(){t(""),d("")};return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(F,{onSubmit:function(n){if(n.preventDefault(),s.some((function(n){return n.name.toLowerCase()===r.toLowerCase()})))return alert("Contact ".concat(r," is already in the contact list"));c((0,v.je)({name:r,number:o})),p()},children:[(0,S.jsxs)(I,{children:[(0,S.jsx)("span",{children:"Name"}),(0,S.jsx)(_,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,onChange:l})]}),(0,S.jsxs)(I,{children:[(0,S.jsx)("span",{children:"Number"}),(0,S.jsx)(_,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:l})]}),(0,S.jsx)(N,{type:"submit",children:"Add contact"})]})})},D=L.Z.div(d||(d=(0,A.Z)(["\n  margin-top: 20px;\n  margin-bottom: 150px;\n  padding: 40px;\n  background: linear-gradient(30deg, #8b59e7 10%, #4ec7e6 80%);\n"]))),M=L.Z.ul(s||(s=(0,A.Z)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin: 0;\n"]))),P=L.Z.button(c||(c=(0,A.Z)(["\n  padding: 10px;\n  background-color: #4ec7e6;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s;\n\n  &:hover {\n    background-color: #8b59e7;\n  }\n"]))),B=L.Z.li(l||(l=(0,A.Z)(["\n  border-radius: 10px;\n  align-items: baseline;\n  display: flex;\n  flex-direction: row;\n  background-color: white;\n  gap: 20px;\n  padding: 15px;\n  margin: 0;\n  font-size: 20px;\n  justify-content: space-between;\n"]))),E=L.Z.h3(p||(p=(0,A.Z)(["\n  margin: 0;\n"]))),J=L.Z.p(u||(u=(0,A.Z)(["\n  margin: 0;\n"]))),Q=L.Z.p(x||(x=(0,A.Z)(["\n  font-size: 20px;\n  color: white;\n"]))),T=r(9245),X=function(){var n=(0,j.v9)(z),e=(0,j.v9)(y),r=(0,j.I0)(),t=Array.isArray(n)&&n.length>0;return(0,S.jsx)(D,{children:(0,S.jsxs)(M,{children:[e&&(0,S.jsx)(T.a,{}),t?n.map((function(n){return(0,S.jsxs)(B,{children:[(0,S.jsx)(E,{children:n.name}),(0,S.jsx)(J,{children:n.number}),(0,S.jsx)(P,{onClick:function(){return e=n.id,void r((0,v.xX)(e));var e},type:"button","aria-label":"Delete contact",children:"\xd7"})]},n.id)})):(0,S.jsx)(Q,{children:"No contacts"})]})})},$=r(1819),G=L.Z.form(g||(g=(0,A.Z)(["\n  border-radius: 20px;\n  margin: auto;\n  margin-top: 20px;\n  width: 300px;\n  padding: 40px;\n  background: linear-gradient(30deg, #8b59e7 10%, #4ec7e6 80%);\n"]))),H=L.Z.label(m||(m=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),K=L.Z.input(b||(b=(0,A.Z)(["\n  padding: 7px;\n  border-radius: 10px;\n  width: 300px;\n"]))),O=L.Z.span(h||(h=(0,A.Z)(["\n  font-size: 20px;\n  text-align: center;\n"]))),R=function(){var n=(0,j.I0)(),e=(0,j.v9)(C);return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(G,{children:(0,S.jsxs)(H,{children:[(0,S.jsx)(O,{children:"Find contact by name"}),(0,S.jsx)(K,{type:"text",name:"filter",value:e,onChange:function(e){var r=e.target.value.toLowerCase();n((0,$.T)(r))}})]})})})},U=r(4217),V=function(){var n=(0,j.I0)(),e=(0,j.v9)(U.Mb),r=(0,j.v9)(y);return(0,Z.useEffect)((function(){n((0,v.nQ)())}),[e,n]),(0,S.jsxs)("div",{children:[(0,S.jsx)(q,{}),(0,S.jsxs)("div",{children:[(0,S.jsx)(R,{}),(0,S.jsx)(X,{})]}),r&&(0,S.jsx)(T.a,{})]})}}}]);
//# sourceMappingURL=750.c16d5e10.chunk.js.map