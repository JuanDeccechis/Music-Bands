(this["webpackJsonpmusic-bands"]=this["webpackJsonpmusic-bands"]||[]).push([[0],{31:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(22),s=n.n(i),r=(n(43),n(44),n(20)),l=n(4),o=n(5),d=n(8),h=n(7),j=n(6),b=n(14),u=n(9),m=(n(45),n(33)),O=n.n(m),p=n(21),v=n.n(p),g=n(34),x=n.n(g),f=n(0),y=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.isLogged;return Object(f.jsxs)("ul",{className:"nav",children:[Object(f.jsx)("li",{children:Object(f.jsxs)(b.b,{exact:!0,to:"/",className:"link",activeClassName:"active",children:[" ",Object(f.jsx)(O.a,{className:"icon"})," "]})}),Object(f.jsx)("li",{children:e?Object(f.jsxs)(b.b,{to:"/account",className:"link",activeClassName:"active",children:[" ",Object(f.jsx)(x.a,{className:"icon"})," "]}):Object(f.jsxs)(b.b,{to:"/login",className:"link",activeClassName:"active",children:[" ",Object(f.jsx)(v.a,{className:"icon"})," "]})})]})}}]),n}(a.Component),k=n(23),N=n(35),C=n.n(N),S=(n(71),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.selected;return Object(f.jsx)("div",{className:"tabs",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{className:"tab-li-item",onClick:function(){return e.props.handleClick(null)},children:Object(f.jsx)("div",{className:"tab-item special ".concat(a?"":"selected"),children:"All genres"})}),n&&n.map((function(t,n){return Object(f.jsx)("li",{className:"tab-li-item",onClick:function(){return e.props.handleClick(t)},children:Object(f.jsx)("div",{className:"tab-item ".concat(a&&t.code===a.code?"selected":""),children:t.name})},n)}))]})})}}]),n}(a.Component)),L=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.album;if(e)return Object(f.jsxs)("span",{children:[" ",e.name," , ",e.year]})}}]),n}(a.Component),w=(n(72),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.content,n=e.selected;return Object(f.jsxs)("tr",{onClick:this.props.onClick,className:"".concat(n&&"selected"),children:[Object(f.jsx)("td",{children:t.name}),Object(f.jsx)("td",{children:t.country}),Object(f.jsx)("td",{children:t.year})]})}}]),n}(a.Component)),P=(n(73),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={bands:null,albums:null,genre:null,genreSelected:null,bandSelected:null},a.handleGenreSelected=a.handleGenreSelected.bind(Object(d.a)(a)),a.handleBandSelected=a.handleBandSelected.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.state,t=e.bands,n=e.albums;e.genre||this.getDataFromApi("genre"),t||this.getDataFromApi("bands"),n||this.getDataFromApi("albums")}},{key:"getDataFromApi",value:function(e){var t=this;fetch("".concat(localStorage.getItem("APIURL"),"/").concat(e)).then((function(e){return e.json()})).then((function(n){t.setState(Object(k.a)({},e,n))}))}},{key:"handleGenreSelected",value:function(e){var t=this.state.genreSelected;t&&e&&e.code===t.code||this.setState({genreSelected:e,bandSelected:null})}},{key:"handleBandSelected",value:function(e){this.setState({bandSelected:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.bands,a=t.albums,c=t.genre,i=t.genreSelected,s=t.bandSelected,r=n&&a&&c,l=n,o=null;return i&&n&&(l=n.filter((function(e){return e.genreCode===i.code}))),s&&a&&(o=a.filter((function(e){return e.bandId===s.id}))),r?Object(f.jsxs)("article",{className:"container",children:[Object(f.jsx)("h1",{children:"Music Bands"}),Object(f.jsx)("div",{className:"espaciado",children:Object(f.jsx)("h2",{children:"Here you can find albums and bands that we have, sorted and filtered"})}),c&&Object(f.jsx)("div",{className:"espaciado",children:Object(f.jsx)(S,{list:c,handleClick:this.handleGenreSelected,selected:i})}),Object(f.jsx)("div",{className:"espaciado",children:Object(f.jsx)("div",{className:"results",children:n&&Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Bands"}),Object(f.jsxs)("table",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Country"}),Object(f.jsx)("th",{children:"Year"})]}),l.map((function(t,n){return Object(f.jsx)(w,{onClick:function(){return e.handleBandSelected(t)},content:t,selected:s&&t.id===s.id},n)}))]})]})})}),s&&Object(f.jsxs)("div",{className:"columns",children:[Object(f.jsxs)("div",{className:"espaciado",children:[Object(f.jsxs)("h2",{children:["Members of",s.name]}),Object(f.jsx)("ul",{children:s.members.map((function(e,t){return Object(f.jsxs)("li",{children:[" ",e.name," "]},t)}))})]}),o&&o.length>0&&Object(f.jsxs)("div",{className:"espaciado",children:[Object(f.jsxs)("h2",{children:["Albums created by ",s.name]}),Object(f.jsx)("ul",{children:o.map((function(e,t){return Object(f.jsxs)("li",{children:[" ",Object(f.jsx)(L,{album:e})," "]},t)}))})]})]}),Object(f.jsx)("div",{className:"espaciado",children:Object(f.jsx)("div",{className:"results",children:a&&Object(f.jsxs)("ul",{children:[Object(f.jsx)("h2",{children:"Albums"}),a.map((function(e,t){return Object(f.jsx)("li",{children:Object(f.jsx)(L,{album:e})},t)}))]})})})]}):Object(f.jsx)(C.a,{type:"TailSpin",color:"#2020bf",height:100,width:100,className:"loader"})}}]),n}(a.Component)),I=(n(74),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={value:"",error:""},a.handleKeyPress=a.handleKeyPress.bind(Object(d.a)(a)),a.handleChangeInput=a.handleChangeInput.bind(Object(d.a)(a)),a.validateInput=a.validateInput.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"handleChangeInput",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value;this.setState({value:n})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&(e.preventDefault(),e.stopPropagation())}},{key:"validateInput",value:function(e){var t=this.props.hasError,n=e.target,a=e.target.name,c=null;switch(!0){case!n.value:c="".concat(a," is empty.");break;case t:c="Wrong ".concat(a,".");break;case n.minLength>-1&&n.value.length<n.minLength:c="Your ".concat(a," must contains at least ").concat(n.minLength," characters.");break;case n.maxLength>-1&&n.value.length>n.maxLength:c="Your ".concat(a," must contains up to ").concat(n.maxLength," characters.");break;default:c=null}this.setState({error:c})}},{key:"render",value:function(){var e=this.state.error,t=this.props,n=t.placeholder,a=t.name,i=t.minLength,s=t.maxLength,r=t.type,l=t.className,o=[];return this.props.children&&(o=c.a.Children.map(this.props.children,(function(t){return c.a.cloneElement(t,{className:"".concat(t.props.className," ").concat(e?"with-error error-text":"")})}))),Object(f.jsxs)("div",{className:"input-icons",children:[this.props.children&&o[0],Object(f.jsx)("input",{id:a,name:a,ref:a,className:"input-with-padding ".concat(null===e?"valid":e?"error":""," ").concat(l||""),type:r,placeholder:"".concat(n||a,"*"),required:!0,minLength:i,maxLength:s,value:this.state.value,onChange:this.handleChangeInput,onKeyPress:this.handleKeyPress,onBlur:this.validateInput}),o[1],e&&Object(f.jsx)("span",{className:"error-text",children:e})]})}}]),n}(a.Component)),F=I,D=(n(75),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleClickAfterValidations=a.handleClickAfterValidations.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"handleClickAfterValidations",value:function(){var e=document.querySelectorAll(".error"),t=document.querySelectorAll(".valid"),n=document.querySelectorAll(".input-with-padding");(!e||0===e.length&&t.length===n.length)&&this.props.handleClick()}},{key:"render",value:function(){var e=this.props.disabled;return Object(f.jsx)(f.Fragment,{children:e?Object(f.jsx)("button",{disabled:!0,className:"".concat(this.props.className," disabled"),children:this.props.text}):Object(f.jsx)("button",{className:this.props.className,onClick:this.handleClickAfterValidations,children:this.props.text})})}}]),n}(a.Component)),A=(n(31),n(25)),V=n.n(A),M=n(27),R=n.n(M),B=n(26),z=n.n(B),E=n(36),U=n.n(E),q=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={visibilityPassword:!1,firstTry:!0,remember:!1},a.handleChangeVisibilityPassword=a.handleChangeVisibilityPassword.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleSubmitForm=a.handleSubmitForm.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"handleChangeVisibilityPassword",value:function(){this.setState({visibilityPassword:!this.state.visibilityPassword})}},{key:"handleSubmit",value:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.changePath()}},{key:"handleSubmitForm",value:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.setState({firstTry:!1})}},{key:"changePath",value:function(){var e=document.querySelector("#Username");if(e&&e.value){this.props.handleLogin(e.value);this.props.history.push("/")}}},{key:"render",value:function(){var e=this,t=this.state,n=t.visibilityPassword,a=t.remember;return Object(f.jsx)("form",{action:"",method:"post",className:"form-container login-form",onSubmit:this.handleSubmitForm,children:Object(f.jsxs)("div",{className:"login-form-container",children:[Object(f.jsx)(F,{name:"Username",minLength:"0",maxLength:"20",type:"text",children:Object(f.jsx)(v.a,{className:"icon icon-color"})}),Object(f.jsxs)(F,{name:"Password",type:n?"text":"password",children:[Object(f.jsx)(V.a,{className:"icon icon-color"}),n?Object(f.jsx)(z.a,{className:"icon icon-color right",onClick:this.handleChangeVisibilityPassword}):Object(f.jsx)(R.a,{className:"icon icon-color right",onClick:this.handleChangeVisibilityPassword})]}),Object(f.jsxs)("div",{className:"espaciado login-links-container",children:[Object(f.jsxs)("div",{className:"checkbox-container",onClick:function(){e.setState({remember:!e.state.remember})},children:[a?Object(f.jsx)(U.a,{className:"icon-color"}):Object(f.jsx)("div",{className:"checkbox-circle"}),Object(f.jsx)("label",{htmlFor:"checkbox",className:"checkbox-label",children:"Remember me"})]}),Object(f.jsx)("div",{children:Object(f.jsx)(b.b,{to:"/login/recoveryPassword",className:"forgot-password",activeClassName:"",children:Object(f.jsx)("span",{children:"Forgot Password"})})})]}),Object(f.jsx)("div",{className:"espaciado",children:Object(f.jsx)(D,{className:"principal",handleClick:this.handleSubmit,text:"Log in"})}),Object(f.jsx)("div",{className:"login-register-container espaciado",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"I haven't accounts "}),Object(f.jsx)(b.b,{to:"/register",activeClassName:"",children:Object(f.jsx)("span",{children:"Register"})})]})})]})})}}]),n}(a.Component),K=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(f.jsx)("article",{className:"container",children:Object(f.jsxs)("div",{className:"login-page-global-container",children:[Object(f.jsx)("h1",{children:"Log in"}),Object(f.jsx)(q,{history:this.props.history,location:this.props.location,handleLogin:this.props.handleLogin})]})})}}]),n}(a.Component),T=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"handleSubmit",value:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.changePath()}},{key:"changePath",value:function(){this.props.handleLogout();this.props.history.push("/")}},{key:"render",value:function(){return Object(f.jsxs)("article",{className:"container",children:[Object(f.jsxs)("h1",{children:["Hi ",localStorage.getItem("username")]}),Object(f.jsx)("div",{className:"espaciado",children:Object(f.jsx)(D,{className:"principal",handleClick:this.handleSubmit,text:"Close"})})]})}}]),n}(a.Component),G=n(37),W=n.n(G),Y=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={visibilityPassword:!1},a.handleChangeVisibilityPassword=a.handleChangeVisibilityPassword.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleSubmitForm=a.handleSubmitForm.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"handleChangeVisibilityPassword",value:function(){this.setState({visibilityPassword:!this.state.visibilityPassword})}},{key:"handleSubmit",value:function(e){e&&(e.preventDefault(),e.stopPropagation()),this.changePath()}},{key:"handleSubmitForm",value:function(e){e&&(e.preventDefault(),e.stopPropagation())}},{key:"changePath",value:function(){this.props.handleLogin();this.props.history.push("/")}},{key:"render",value:function(){var e=this.state.visibilityPassword;return Object(f.jsx)("form",{action:"",method:"post",className:"form-container login-form",onSubmit:this.handleSubmitForm,children:Object(f.jsxs)("div",{className:"login-form-container",children:[Object(f.jsx)(F,{name:"Username",minLength:"0",maxLength:"20",type:"text",children:Object(f.jsx)(v.a,{className:"icon icon-color"})}),Object(f.jsx)(F,{name:"Email",minLength:"0",maxLength:"20",type:"text",children:Object(f.jsx)(W.a,{className:"icon icon-color"})}),Object(f.jsxs)(F,{name:"Password",type:e?"text":"password",children:[Object(f.jsx)(V.a,{className:"icon icon-color"}),e?Object(f.jsx)(z.a,{className:"icon icon-color right",onClick:this.handleChangeVisibilityPassword}):Object(f.jsx)(R.a,{className:"icon icon-color right",onClick:this.handleChangeVisibilityPassword})]}),Object(f.jsx)("div",{className:"espaciado",children:Object(f.jsx)(D,{className:"principal",handleClick:this.handleSubmit,text:"Register"})}),Object(f.jsx)("div",{className:"login-register-container espaciado",children:Object(f.jsx)("div",{children:Object(f.jsx)(b.b,{to:"/login",activeClassName:"",children:Object(f.jsx)("span",{children:"I have an account"})})})})]})})}}]),n}(a.Component),H=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(f.jsx)("article",{className:"container",children:Object(f.jsxs)("div",{className:"login-page-global-container",children:[Object(f.jsx)("h1",{children:"Register"}),Object(f.jsx)(Y,{history:this.props.history,location:this.props.location,handleLogin:this.props.handleLogin})]})})}}]),n}(a.Component),J=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).toggleLogin=function(e){var t=a.state.isLogged;localStorage.setItem("isLogged",!t),localStorage.setItem("username",e),a.setState({isLogged:!t,username:e})},a.state={width:window.innerWidth,isLogged:!1,username:""},a.handleResize=a.handleResize.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"handleResize",value:function(){this.setState({width:window.innerWidth})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this,t=this.state,n=t.isLogged,a=t.width;return Object(f.jsx)("div",{className:"router",children:Object(f.jsxs)(b.a,{basename:"/Music-bands",children:[Object(f.jsx)(y,{isMobile:!(a>=992),isLogged:n}),n?Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{exact:!0,path:"/",component:P}),Object(f.jsx)(u.a,{path:"/account",component:function(t){return Object(f.jsx)(T,Object(r.a)(Object(r.a)({},t),{},{handleLogout:e.toggleLogin}))}})]}):Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{exact:!0,path:"/register",component:function(t){return Object(f.jsx)(H,Object(r.a)(Object(r.a)({},t),{},{handleLogin:e.toggleLogin}))}}),Object(f.jsx)(u.a,{path:"/",component:function(t){return Object(f.jsx)(K,Object(r.a)(Object(r.a)({},t),{},{handleLogin:e.toggleLogin}))}})]})]})})}}]),n}(a.Component);var Q=function(){return localStorage.setItem("isLogged","false"),localStorage.setItem("APIURL","https://my-json-server.typicode.com/improvein/dev-challenge"),Object(f.jsx)("div",{className:"app",children:Object(f.jsx)(J,{})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Q,{})}),document.getElementById("root")),X()}},[[77,1,2]]]);
//# sourceMappingURL=main.2740afe7.chunk.js.map