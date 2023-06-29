(this["webpackJsonptodo-app-01"]=this["webpackJsonptodo-app-01"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(19),a=n.n(c),i=n(13),l=n(3),s=n(7),d=n(5),u=n(6),j=n(9);function b(e,t){var n=r.a.useReducer(p,f({initialValue:t})),o=Object(d.a)(n,2),c=o[0],a=o[1],i=c.sincronizedItem,l=c.error,s=c.loading,u=c.item,j=function(e){return a({type:O.error,payload:e})};r.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),function(e){a({type:O.success,payload:e})}(n)}catch(l){j(l)}}),3e3)}),[i]);return{item:u,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),function(e){a({type:O.save,payload:e})}(t)}catch(l){j(l)}},loading:s,error:l,sincronizeItem:function(){a({type:O.sincronize})}}}var f=function(e){return{sincronizedItem:!0,error:!1,loading:!0,item:e.initialValue}},O={error:"ERROR",success:"SUCCESS",save:"SAVE",sincronize:"SINCRONIZE"},p=function(e,t){return function(e,t){var n;return n={},Object(u.a)(n,O.error,Object(j.a)(Object(j.a)({},e),{},{error:!0})),Object(u.a)(n,O.success,Object(j.a)(Object(j.a)({},e),{},{error:!1,loading:!1,sincronizedItem:!0,item:t})),Object(u.a)(n,O.save,Object(j.a)(Object(j.a)({},e),{},{item:t})),Object(u.a)(n,O.sincronize,Object(j.a)(Object(j.a)({},e),{},{sincronizedItem:!1,loading:!0})),n}(e,t.payload)[t.type]||e};function m(){var e=b("TODOS_V2",[]),t=e.item,n=e.saveItem,o=e.sincronizeItem,c=e.loading,a=e.error,i=r.a.useState(""),l=Object(d.a)(i,2),u=l[0],j=l[1],f=r.a.useState(!1),O=Object(d.a)(f,2),p=(O[0],O[1],t.filter((function(e){return!!e.completed})).length),m=t.length,v=[];v=!u.length>=1?t:t.filter((function(e){var t=e.text.toLowerCase(),n=u.toLowerCase();return t.includes(n)}));return{state:{loading:c,error:a,totalTodos:m,completedTodos:p,searchValue:u,searchedTodos:v,getTodo:function(e){var n=t.findIndex((function(t){return t.id===e}));return t[n]}},stateUpdaters:{setSearchValue:j,addTodo:function(e){var o=h(t),r=Object(s.a)(t);r.push({completed:!1,text:e,id:o}),n(r)},completeTodo:function(e){var o=t.findIndex((function(t){return t.id===e})),r=Object(s.a)(t);r[o].completed=!0,n(r)},deleteTodo:function(e){var o=t.findIndex((function(t){return t.id===e})),r=Object(s.a)(t);r.splice(o,1),n(r)},editTodo:function(e,o){var r=t.findIndex((function(t){return t.id===e})),c=Object(s.a)(t);c[r].text=o,n(c)},sincronizeTodos:o}}}var h=function(e){if(!e.length)return 1;var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(s.a)(t))+1},v=n(2);function x(e){var t=e.children,n=e.loading;return Object(v.jsx)("header",{children:r.a.Children.toArray(t).map((function(e){return r.a.cloneElement(e,{loading:n})}))})}n(30);function g(e){var t=e.totalTodos,n=e.completedTodos,o=e.loading;return Object(v.jsxs)("h2",{className:"TodoCounter ".concat(!!o&&"TodoCounter--loading"),children:["Has completado ",n," de ",t," TODOs"]})}n(31);function T(e){var t=e.searchValue,n=e.setSearchValue,o=e.loading;return Object(v.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)},disabled:o})}n(32);function y(e){var t=e.children||e.render;return Object(v.jsxs)("section",{className:"TodoList-container",children:[e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.searchedTodos.length&&e.onEmptySearchResults(e.searchText),!e.loading&&!e.error&&e.searchedTodos.map(t)]})}function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S=o.createElement("path",{d:"M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"});function E(e,t){var n=e.title,r=e.titleId,c=C(e,["title","titleId"]);return o.createElement("svg",I({viewBox:"0 0 405.272 405.272",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,S)}var w=o.forwardRef(E);n.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=o.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"});function z(e,t){var n=e.title,r=e.titleId,c=L(e,["title","titleId"]);return o.createElement("svg",N({viewBox:"0 0 348.333 348.334",xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,k)}var D=o.forwardRef(z);n.p;function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var R=o.createElement("path",{d:"M0 18.9993V24H5.00069L19.756 9.24459L14.7553 4.2439L0 18.9993Z"}),F=o.createElement("path",{d:"M23.6099 3.5038L20.4961 0.390054C19.9761 -0.130018 19.1293 -0.130018 18.6092 0.390054L16.1689 2.83039L21.1695 7.83108L23.6099 5.39074C24.13 4.87067 24.13 4.02387 23.6099 3.5038Z"});function M(e,t){var n=e.title,r=e.titleId,c=P(e,["title","titleId"]);return o.createElement("svg",V({viewBox:"0 0 24 24",fill:"none",xmlns:"https://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,R,F)}var U=o.forwardRef(M),A=(n.p,n(33),{check:function(e){return Object(v.jsx)(w,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(v.jsx)(D,{className:"Icon-svg Icon-svg--delete",fill:e})},edit:function(e){return Object(v.jsx)(U,{className:"Icon-svg Icon-svg--edit",fill:e})}});function B(e){var t=e.type,n=e.color,o=void 0===n?"gray":n,r=e.onClick;return Object(v.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:r,children:A[t](o)})}function J(e){var t=e.completed,n=e.onComplete;return Object(v.jsx)(B,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function H(e){var t=e.onDelete;return Object(v.jsx)(B,{type:"delete",onClick:t})}function Z(e){var t=e.onEdit;return Object(v.jsx)(B,{type:"edit",onClick:t})}n(34);function _(e){return Object(v.jsxs)("li",{className:"TodoItem",children:[Object(v.jsx)(J,{completed:e.completed,onComplete:e.onComplete}),Object(v.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(v.jsx)(Z,{onEdit:e.onEdit}),Object(v.jsx)(H,{onDelete:e.onDelete})]})}function q(){return Object(v.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})}n(35);function G(){return Object(v.jsxs)("div",{className:"LoadingTodo-container",children:[Object(v.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(v.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(v.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}n(36);function Q(e){var t=Object(l.n)(),n=r.a.useState(e.defaultTodoText||""),o=Object(d.a)(n,2),c=o[0],a=o[1];return Object(v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e.submitEvent(c),t("/")},children:[Object(v.jsx)("label",{children:e.label}),Object(v.jsx)("textarea",{value:c,onChange:function(e){a(e.target.value)},placeholder:"Cortar la cebolla oara el almuerzo"}),Object(v.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(v.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){t("/")},children:"Cancelar"}),Object(v.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:e.submitText})]})]})}function Y(){return Object(v.jsx)("p",{children:"\xa1Crea tu primer TODO!"})}n(38);function K(e){return Object(v.jsx)("button",{className:"CreateTodoButton",onClick:e.onClick,children:"+"})}n(39);n(40);function W(e){var t=function(e){var t=r.a.useState(!1),n=Object(d.a)(t,2),o=n[0],c=n[1];return window.addEventListener("storage",(function(e){"TODOS_V1"===e.key&&(console.log("Hubo cambios en TODOS_V1"),c(!0))})),{show:o,toggleShow:function(){e(),c(!1)}}}(e.sincronize),n=t.show,o=t.toggleShow;return n?Object(v.jsx)("div",{className:"ChangeAlert-bg",children:Object(v.jsxs)("div",{className:"ChangeAlert-container",children:[Object(v.jsx)("p",{children:"Parece que cambiaste tus TODOs en otra pesta\xf1a o ventana del navegador."}),Object(v.jsx)("p",{children:"\xbfQuieres sincronizar tus TODOs?"}),Object(v.jsx)("button",{className:"TodoForm-button TodoForm-button--add",onClick:o,children:"Yes!"})]})}):null}function X(){var e=Object(l.n)(),t=m(),n=t.state,o=t.stateUpdaters,c=n.error,a=n.loading,i=n.searchedTodos,s=n.totalTodos,d=n.completedTodos,u=n.searchValue,j=(o.addTodo,o.completeTodo),b=o.deleteTodo,f=(o.editTodo,o.setSearchValue),O=o.sincronizeTodos;return Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsxs)(x,{loading:a,children:[Object(v.jsx)(g,{totalTodos:s,completedTodos:d}),Object(v.jsx)(T,{searchValue:u,setSearchValue:f})]}),Object(v.jsx)(y,{error:c,loading:a,totalTodos:s,searchedTodos:i,searchText:u,onError:function(){return Object(v.jsx)(q,{})},onLoading:function(){return Object(v.jsx)(G,{})},onEmptyTodos:function(){return Object(v.jsx)(Y,{})},onEmptySearchResults:function(e){return Object(v.jsxs)("p",{children:["No hay resultados para ",e]})},children:function(t){return Object(v.jsx)(_,{text:t.text,completed:t.completed,onComplete:function(){return j(t.id)},onDelete:function(){return b(t.id)},onEdit:function(){return e("/edit/"+t.id,{state:{todo:t}})}},t.id)}}),Object(v.jsx)(K,{onClick:function(){e("/new")}}),Object(v.jsx)(W,{sincronize:O})]})}function $(){var e,t,n=Object(l.l)(),o=Object(l.p)(),r=Number(o.id),c=m(),a=c.stateUpdaters,i=c.state,s=i.getTodo,d=i.loading,u=a.editTodo;if(null===(e=n.state)||void 0===e?void 0:e.todo)t=n.state.todo.text;else{if(d)return Object(v.jsx)("p",{children:"Cargando datos..."});t=s(r).text}return Object(v.jsx)(Q,{label:"Edita Todo",defaultTodoText:t,submitText:"Actualizar",submitEvent:function(e){return u(r,e)}})}function ee(){var e=m().stateUpdaters.addTodo;return Object(v.jsx)(Q,{label:"Nuevo Todo",submitText:"Guardar",submitEvent:function(t){return e(t)}})}function te(){return Object(v.jsx)(i.a,{children:Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{path:"/",element:Object(v.jsx)(X,{})}),Object(v.jsx)(l.a,{path:"/new",element:Object(v.jsx)(ee,{})}),Object(v.jsx)(l.a,{path:"/edit/:id",element:Object(v.jsx)($,{})}),Object(v.jsx)(l.a,{path:"*",element:Object(v.jsx)("p",{children:"NOT FOUND"})})]})})}n(41);a.a.render(Object(v.jsx)(te,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.4b376b20.chunk.js.map