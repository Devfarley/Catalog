(this.webpackJsonppresentation=this.webpackJsonppresentation||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),l=(a(28),a(29),a(12)),i=a(1),o=a(6),m=a(7),u=a(9),h=a(8),d=a(17),f=a(22),v=a(13),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(v.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=Object.assign({},n.state);fetch("".concat("","/terms/").concat(n.props.terms._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(n.props.toggleForm).then(n.props.refresh)},n.state={name:n.props.terms.name,def:n.props.terms.def},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"UpdateCardForm"},r.a.createElement("input",{type:"text",name:"name",placeholder:"New Term",value:this.state.name,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"def",placeholder:"Definition",value:this.state.def,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"submit"})))}}]),a}(r.a.Component);var E=function(e){var t=e.terms,a=e.erase,c=e.refresh,s=Object(n.useState)(!1),l=Object(d.a)(s,2),i=l[0],o=l[1],m=Object(n.useState)(!1),u=Object(d.a)(m,2),h=u[0],v=u[1],E=function(){return v(!h)};return r.a.createElement("div",null,r.a.createElement("div",{className:"card ".concat(i?"flip":""),onClick:function(){return o(!i)}},r.a.createElement("div",{className:"front"},t.name),r.a.createElement("p",{className:"back"},t.def)),r.a.createElement("div",{className:"options"},r.a.createElement("button",{className:"delbtn",style:{color:"red"},onClick:function(){return a(t._id,c)}},"X"),r.a.createElement("button",{className:"updatebtn",onClick:E},"Update"),h?r.a.createElement(p,{terms:t,toggleForm:E,refresh:c}):"",r.a.createElement("button",{className:"archivebtn",onClick:function(e){e.preventDefault(),t.archived=!t.archived;t._id;var a=Object(f.a)(t,["_id"]);fetch("".concat("","/terms/").concat(t._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(c)}},t.archived?"Unarchive":"Archive")))},b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(v.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=Object.assign({},n.state);fetch("".concat("","/terms"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){return n.setState({name:"",def:""})})).then(n.props.refresh)},n.state={name:"",def:"",archived:""},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"CreateCardForm"},r.a.createElement("input",{type:"text",name:"name",placeholder:"New Term",value:this.state.name,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"def",placeholder:"Definition",value:this.state.def,onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"def",placeholder:"Archive|Set to 'true' or 'false'",value:this.state.archived,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"submit"})))}}]),a}(r.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getTerms=function(){fetch("".concat("","/terms")).then((function(e){return e.json()})).then((function(e){return n.setState({terms:e})}))},n.deleteCard=function(e,t){fetch("".concat("","/terms/").concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){console.log(e),t()}))},n.state={terms:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getTerms()}},{key:"render",value:function(){var e=this,t=this.state.terms.filter((function(e){return e.archived?null:e})).map((function(t){return r.a.createElement(E,{key:t._id,archive:t.archived,terms:t,erase:e.deleteCard,refresh:e.getTerms})}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"create"},r.a.createElement("h1",{className:"Activecardspage"},"Active Cards"),r.a.createElement("h1",null,"Create A Card"),r.a.createElement(b,{className:"createinput",refresh:this.getTerms})),r.a.createElement("div",{className:"card-grid"},t))}}]),a}(r.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getTerms=function(){fetch("".concat("","/terms")).then((function(e){return e.json()})).then((function(e){return n.setState({terms:e})}))},n.deleteCard=function(e,t){fetch("".concat("","/terms/").concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){console.log(e),t()}))},n.state={terms:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getTerms()}},{key:"render",value:function(){var e=this,t=this.state.terms.filter((function(e){return e.archived?e:null})).map((function(t){return r.a.createElement(E,{key:t._id,archive:t.archived,terms:t,erase:e.deleteCard,refresh:e.getTerms})}));return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"archivedcardspage"},"Archived Cards"),r.a.createElement("div",{className:"card-grid"},t))}}]),a}(r.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getTerms=function(){fetch("".concat("","/terms")).then((function(e){return e.json()})).then((function(e){return n.setState({terms:e})}))},n.deleteCard=function(e,t){fetch("".concat("","/terms/").concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){console.log(e),t()}))},n.state={terms:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getTerms()}},{key:"render",value:function(){var e=this,t=this.state.terms.map((function(t){return r.a.createElement(E,{key:t._id,archive:t.archived,terms:t,erase:e.deleteCard,refresh:e.getTerms})}));return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"allpagetitle"},"All Cards"),r.a.createElement("div",{className:"create"},r.a.createElement("h1",null,"Create A Card"),r.a.createElement(b,{className:"createinput",refresh:this.getTerms})),r.a.createElement("div",{className:"card-grid"},t))}}]),a}(r.a.Component);var N=function(){return r.a.createElement(l.a,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"sitename"},"Programming Flash Cards"),r.a.createElement("ul",{className:"navigation"},r.a.createElement("li",{className:"navbutton"},r.a.createElement(l.b,{to:"/"},"Active Cards")),r.a.createElement("li",{className:"navbutton"},r.a.createElement(l.b,{to:"/Archive"},"Archived Cards")),r.a.createElement("li",{className:"navbutton"},r.a.createElement(l.b,{to:"/All"},"All Cards")))),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(g,null)),r.a.createElement(i.a,{path:"/Archive"},r.a.createElement(C,null)),r.a.createElement(i.a,{path:"/All"},r.a.createElement(j,null)))))};var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9938dc7a.chunk.js.map