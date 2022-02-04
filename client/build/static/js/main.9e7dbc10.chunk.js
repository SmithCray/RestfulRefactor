(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,a,t){e.exports=t(132)},118:function(e,a,t){},132:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(41),m=t.n(u),d=(t(117),t(118),t(142)),b=t(106),g=t(55),p=t(14),v=t(107),k=t(24),E=t.n(k),h=t(34),f=t(16),w=t(136),O=t(137),j=t(144),S=t(97),y=t(138),I=t(139),x=t(148),C=t(94),B=t(95),F=t(82),T=t.n(F),L=new(function(){function e(){Object(C.a)(this,e)}return Object(B.a)(e,[{key:"getProfile",value:function(){return T()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return T()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),_=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},N=t(48),$=t(35),q=Object($.a)(n||(n=Object(N.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n          bookId\n          authors\n          description\n          title\n          image\n          link\n        }\n      }\n    }\n  }\n"]))),P=Object($.a)(r||(r=Object(N.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n          bookId\n          authors\n          description\n          title\n          image\n          link\n        }\n      }\n    }\n  }\n"]))),D=Object($.a)(o||(o=Object(N.a)(["\n  mutation saveBook($input: bookInput!) {\n    saveBook(input: $input) {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"]))),V=Object($.a)(l||(l=Object(N.a)(["\n  mutation removeBook($bookId: String!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"]))),G=t(135),U=function(){var e=Object(i.useState)([]),a=Object(f.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(""),o=Object(f.a)(r,2),l=o[0],c=o[1],u=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),m=Object(f.a)(u,2),d=m[0],b=m[1],g=Object(G.a)(D),p=Object(f.a)(g,2),k=p[0],C=p[1].error;Object(i.useEffect)((function(){return function(){var e;(e=d).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var B=function(){var e=Object(h.a)(E.a.mark((function e(a){var t,r,o,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),n(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),F=function(){var e=Object(h.a)(E.a.mark((function e(a){var n,r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),L.loggedIn()?L.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,k({variables:{input:n}});case 7:if(r=e.sent,o=r.data,!C){e.next=11;break}throw new Error("something went wrong!");case 11:console.log("libro:",o),b([].concat(Object(v.a)(d),[n.bookId])),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(O.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(j.a,{onSubmit:B},s.a.createElement(j.a.Row,null,s.a.createElement(S.a,{xs:12,md:8},s.a.createElement(j.a.Control,{name:"searchInput",value:l,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(S.a,{xs:12,md:4},s.a.createElement(y.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(O.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement(I.a,null,t.map((function(e){return s.a.createElement(x.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(x.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(x.a.Body,null,s.a.createElement(x.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(x.a.Text,null,e.description),L.loggedIn()&&s.a.createElement(y.a,{disabled:null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return F(e.bookId)}},(null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},Y=t(140),J=Object($.a)(c||(c=Object(N.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        description\n        title\n        image\n        link\n      }\n    }\n  }\n"]))),K=function(){var e=Object(Y.a)(J),a=Object(f.a)(e,2),t=a[0],n=a[1],r=(null===n||void 0===n?void 0:n.me)||{},o=Object(G.a)(V),l=Object(f.a)(o,2),c=l[0],i=l[1].error,u=function(){var e=Object(h.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.loggedIn()?L.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,c({Variables:{bookId:a}});case 6:if(!i){e.next=8;break}throw new Error("Some other issue");case 8:_(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return t?s.a.createElement("h2",null,"LOADING..."):s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(O.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(O.a,null,s.a.createElement("h2",null,r.savedBooks.length?"Viewing ".concat(r.savedBooks.length," saved ").concat(1===r.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement(I.a,null,r.savedBooks.map((function(e){return s.a.createElement(x.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(x.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(x.a.Body,null,s.a.createElement(x.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(x.a.Text,null,e.description),s.a.createElement(y.a,{className:"btn-block btn-danger",onClick:function(){return u(e.bookId)}},"Delete this Book!")))})))))},z=t(146),A=t(145),H=t(143),M=t(147),R=t(52),W=t(44),Q=t(141),X=function(){var e=Object(i.useState)({username:"",email:"",password:""}),a=Object(f.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(f.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(f.a)(l,2),u=c[0],m=c[1],d=Object(G.a)(P),b=Object(f.a)(d,2),g=b[0],p=b[1].error,v=function(e){var a=e.target,r=a.name,o=a.value;n(Object(W.a)(Object(W.a)({},t),{},Object(R.a)({},r,o)))},k=function(){var e=Object(h.a)(E.a.mark((function e(a){var r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,g({variables:Object(W.a)({},t)});case 6:if(r=e.sent,o=r.data,!p){e.next=10;break}throw new Error("something went wrong!");case 10:console.log(o.user),L.login(o.addUser.token),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0),m(!0);case 18:n({username:"",email:"",password:""});case 19:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{noValidate:!0,validated:o,onSubmit:k},s.a.createElement(Q.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(j.a.Group,null,s.a.createElement(j.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(j.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:v,value:t.username,required:!0}),s.a.createElement(j.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(j.a.Group,null,s.a.createElement(j.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(j.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:v,value:t.email,required:!0}),s.a.createElement(j.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(j.a.Group,null,s.a.createElement(j.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(j.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:v,value:t.password,required:!0}),s.a.createElement(j.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(y.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},Z=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(f.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(f.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(f.a)(l,2),u=c[0],m=c[1],d=Object(G.a)(q),b=Object(f.a)(d,2),g=b[0],p=b[1].error,v=function(e){var a=e.target,r=a.name,o=a.value;n(Object(W.a)(Object(W.a)({},t),{},Object(R.a)({},r,o)))},k=function(){var e=Object(h.a)(E.a.mark((function e(a){var r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,g({variables:Object(W.a)({},t)});case 6:if(r=e.sent,o=r.data,!p){e.next=10;break}throw new Error("something went wrong!");case 10:console.log(o.user),L.login(o.login.token),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0),m(!0);case 18:n({username:"",email:"",password:""});case 19:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,{noValidate:!0,validated:o,onSubmit:k},s.a.createElement(Q.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(j.a.Group,null,s.a.createElement(j.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(j.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:v,value:t.email,required:!0}),s.a.createElement(j.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(j.a.Group,null,s.a.createElement(j.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(j.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:v,value:t.password,required:!0}),s.a.createElement(j.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(y.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},ee=function(){var e=Object(i.useState)(!1),a=Object(f.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(z.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(O.a,{fluid:!0},s.a.createElement(z.a.Brand,{as:g.b,to:"/"},"Google Books Search"),s.a.createElement(z.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(z.a.Collapse,{id:"navbar"},s.a.createElement(A.a,{className:"ml-auto"},s.a.createElement(A.a.Link,{as:g.b,to:"/"},"Search For Books"),L.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a.Link,{as:g.b,to:"/saved"},"See Your Books"),s.a.createElement(A.a.Link,{onClick:L.logout},"Logout")):s.a.createElement(A.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(H.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(M.a.Container,{defaultActiveKey:"login"},s.a.createElement(H.a.Header,{closeButton:!0},s.a.createElement(H.a.Title,{id:"signup-modal"},s.a.createElement(A.a,{variant:"pills"},s.a.createElement(A.a.Item,null,s.a.createElement(A.a.Link,{eventKey:"login"},"Login")),s.a.createElement(A.a.Item,null,s.a.createElement(A.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(H.a.Body,null,s.a.createElement(M.a.Content,null,s.a.createElement(M.a.Pane,{eventKey:"login"},s.a.createElement(Z,{handleModalClose:function(){return n(!1)}})),s.a.createElement(M.a.Pane,{eventKey:"signup"},s.a.createElement(X,{handleModalClose:function(){return n(!1)}})))))))},ae=new b.a({request:function(e){var a=localStorage.getItem("id_token");e.setContext({Headers:{authorization:a?"Bearer ".concat(a):""}})},uri:"/graphql"});var te=function(){return s.a.createElement(d.a,{client:ae},s.a.createElement(g.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(ee,null),s.a.createElement(p.c,null,s.a.createElement(p.a,{exact:!0,path:"/",component:U}),s.a.createElement(p.a,{exact:!0,path:"/saved",component:K}),s.a.createElement(p.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(te,null)),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.9e7dbc10.chunk.js.map