(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(9),i=n.n(a),o=(n(14),n(3)),r=n(2),l=(n(15),n.p+"static/media/arrow.ee86d316.png"),j=n.p+"static/media/todo.b468f517.png",m=n(5),u=n(8),d=n(0);function b(e){var t=Object(s.useState)({title:"",description:"",date:[]}),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(""),o=Object(r.a)(i,2);o[0],o[1];function l(e){var t,n=e.target,s=n.name,i=n.value;a(Object(u.a)(Object(u.a)({},c),{},(t={},Object(m.a)(t,s,i),Object(m.a)(t,"date",(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString()),t)))}return Object(d.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.onSubmit(c),a({title:"",description:""})},children:[Object(d.jsx)("label",{className:"left-menu__title",children:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(d.jsx)("input",{className:"form__input",name:"title",type:"text",value:c.title,onChange:l,placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(d.jsx)("textarea",{className:"form__input-area",name:"description",type:"text",value:c.description,onChange:l,placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(d.jsx)("button",{className:"form__button",type:"submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}),Object(d.jsx)("label",{className:"left-menu__title",children:"\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(d.jsx)("input",{className:"form__input",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u0434\u0430\u0447\u0430\u043c",value:e.searchValue,type:"text",name:"search",onChange:e.onSearch})]})}function _(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1];return Object(d.jsxs)("div",{className:c?"left-menu":"left-menu left-menu_hide",children:[Object(d.jsx)("div",{className:c?"left-menu__arrow-container":"left-menu__arrow-container left-menu__arrow-container_reverse ",onClick:function(){a(!c)},children:Object(d.jsx)("img",{className:c?"left-menu__arrow":"left-menu__arrow left-menu__arrow_reverse",src:l})}),Object(d.jsx)("div",{className:"left-menu__logo-container",children:Object(d.jsx)("img",{className:"left-menu__logo",src:j,alt:"todo"})}),Object(d.jsx)(b,{onSubmit:e.onSubmitForm,searchValue:e.searchValue,onSearch:e.onSearch})]})}var O=n.p+"static/media/list.b50b0d36.png",p=n.p+"static/media/notList.6e040f73.png";function h(e){return Object(d.jsxs)("div",{className:"sorting",children:[Object(d.jsxs)("div",{className:"sorting__icons",children:[Object(d.jsx)("div",{className:e.list?"sorting__image-container sorting__image-container_active":"sorting__image-container",onClick:e.handleListSort,children:Object(d.jsx)("img",{className:"sorting__image",src:O})}),Object(d.jsx)("div",{className:e.list?"sorting__image-container":"sorting__image-container sorting__image-container_active",onClick:e.handleIconsSort,children:Object(d.jsx)("img",{className:"sorting__image",src:p})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"sorting__description",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e: "}),Object(d.jsxs)("select",{className:"sorting__options",onChange:function(t){return e.onChange(t.target.value)},value:e.optionsValue,children:[Object(d.jsx)("option",{className:"sorting__option",value:"title",children:"\u0410\u043b\u0444\u0430\u0432\u0438\u0442\u0443"}),Object(d.jsx)("option",{className:"sorting__option",value:"title-reverse",children:"\u0410\u043b\u0444\u0430\u0432\u0438\u0442\u0443 \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435"}),Object(d.jsx)("option",{className:"sorting__option",value:"date-reverse",children:"\u0414\u0430\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u043e\u0432\u044b\u0435"}),Object(d.jsx)("option",{className:"sorting__option",value:"date",children:"\u0414\u0430\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0442\u0430\u0440\u044b\u0435"})]})]})]})}function f(e){return Object(d.jsxs)("div",{className:"confirm-delete",children:[Object(d.jsx)("p",{className:"confirm-delete__title",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443?"}),Object(d.jsxs)("div",{className:"confirm-delete__buttons-container",children:[Object(d.jsx)("button",{className:"confirm-delete__button confirm-delete__button_yes",onClick:e.onDelete,children:"\u0414\u0430"}),Object(d.jsx)("button",{className:"confirm-delete__button confirm-delete__button_no",onClick:e.onCancelDelete,children:"\u041d\u0435\u0442"})]})]})}function g(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1];function i(){a(!c)}return Object(d.jsxs)("div",{className:"list-item",children:[Object(d.jsxs)("div",{className:c?"list-item__container_hide":"list-item__container",children:[Object(d.jsxs)("div",{className:"list-item__item-container",children:[Object(d.jsxs)("h3",{className:"list-item__title",children:[Object(d.jsx)("span",{className:"list-item__id",children:e.post.id}),e.post.title]}),Object(d.jsx)("p",{className:"list-item__description",children:e.post.description}),Object(d.jsx)("span",{className:"list-item__time",children:e.post.date})]}),Object(d.jsx)("button",{className:"list-item__delete-button",onClick:i})]}),c?Object(d.jsx)(f,{onCancelDelete:i,onDelete:function(){e.onDelete(e.post),a(!1)}}):""]})}function x(e){return Object(d.jsx)("div",{className:e.list?"list2":"list",children:e.posts.map((function(t,n){return Object(d.jsx)(g,{post:t,onDelete:e.onDelete},t.id=n+1+". ")}))})}function v(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1];return Object(d.jsxs)("div",{className:"right-menu",children:[Object(d.jsxs)("div",{className:"right-menu__container",children:[Object(d.jsx)("h1",{className:"right-menu__title",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"}),Object(d.jsx)(h,{optionsValue:e.optionsValue,onChange:e.onSort,list:c,handleListSort:function(){a(!0)},handleIconsSort:function(){a(!1)}}),e.searchPosts.length?Object(d.jsx)(x,{posts:e.searchPosts,onDelete:e.onDeleteItem,list:c}):Object(d.jsx)("p",{children:"\u0417\u0430\u0434\u0430\u0447 \u043d\u0435\u0442"})]}),Object(d.jsx)("div",{className:"right-menu__transparent-gradient"})]})}var N=function(){var e=Object(s.useState)([{id:1,title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",description:"\u0417\u0430\u0434\u0430\u0447\u0430",date:""}]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(r.a)(a,2),l=i[0],j=i[1],m=Object(s.useState)(""),u=Object(r.a)(m,2),b=u[0],O=u[1];Object(s.useEffect)((function(){if(localStorage.getItem("posts")){var e=localStorage.getItem("posts"),t=JSON.parse(e);c(t)}if(localStorage.getItem("sort")){var n=localStorage.getItem("sort");j(n)}}),[]),Object(s.useEffect)((function(){localStorage.setItem("posts",JSON.stringify(Object(o.a)(n))),localStorage.setItem("sort",l)}),[n,l]);var p=Object(s.useMemo)((function(){return n.filter((function(e){return e.title.toLowerCase().includes(b)||e.description.toLowerCase().includes(b)}))}),[b,n]);return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(_,{onSubmitForm:function(e){c([e].concat(Object(o.a)(n)))},onSearch:function(e){O(e.target.value)},searchValue:b}),Object(d.jsx)(v,{optionsValue:l,onSort:function(e){return j(e),"title-reverse"===e?(e="title",c(Object(o.a)(n).sort((function(t,n){return t[e].localeCompare(n[e])})).reverse())):"date-reverse"===e?(e="date",c(Object(o.a)(n).sort((function(t,n){return t[e].localeCompare(n[e])})).reverse())):void c(Object(o.a)(n).sort((function(t,n){return t[e].localeCompare(n[e])})))},searchPosts:p,onDeleteItem:function(e){var t=n.filter((function(t){return t!==e}));localStorage.removeItem("posts"),c(t)}})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),S()}},[[17,1,2]]]);
//# sourceMappingURL=main.33ed0c37.chunk.js.map