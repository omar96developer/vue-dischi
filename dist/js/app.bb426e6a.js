(function(t){function e(e){for(var r,c,i=e[0],s=e[1],l=e[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navapp"),n("div",{staticClass:"container"},[n("Songcontainer")],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row row-cols-1 row-cols-md-5 gx-5 gy-4 pt-5 pb-5"},t._l(t.songList,(function(t,e){return n("div",{key:e,staticClass:"col "},[n("Songcard",{attrs:{image:t.poster,title:t.title,author:t.author,year:t.year}})],1)})),0),!0===t.loading?n("Loader"):t._e()],1)},i=[],s=n("bc3a"),l=n.n(s),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card p-3"},[n("img",{staticClass:"card-img-top",attrs:{src:t.image,alt:"..."}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title text-center text-uppercase"},[t._v(t._s(t.title))]),n("p",{staticClass:"card-text mb-0 text-center"},[t._v(t._s(t.author))]),n("p",{staticClass:"card-text text-center"},[t._v(t._s(t.year))])])])},p=[],f={name:"Songcard",props:["image","title","author","year"],data:function(){return{}}},d=f,v=n("2877"),g=Object(v["a"])(d,u,p,!1,null,null,null),m=g.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loader"},[r("div",[r("img",{attrs:{src:n("d092"),alt:""}}),r("h1",[t._v("LOADING...")])])])}],h={name:"Loader",data:function(){return{}}},y=h,x=(n("e496"),Object(v["a"])(y,b,_,!1,null,"eaf5e2ba",null)),O=x.exports,j={name:"Songcontainer",components:{Songcard:m,Loader:O},data:function(){return{songList:"",loading:!0}},mounted:function(){var t=this;l.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(e){t.songList=e.data.response,console.log(e),setTimeout((function(){t.loading=!1}),3e3)}))}},w=j,C=Object(v["a"])(w,c,i,!1,null,null,null),S=C.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav_spotify container-fluid mb-5 p-3"},[r("img",{attrs:{src:n("d092"),alt:"spot_logo"}})])}],L={name:"Navapp"},P=L,k=Object(v["a"])(P,$,E,!1,null,null,null),M=k.exports,N={name:"App",components:{Navapp:M,Songcontainer:S}},T=N,A=(n("5c0b"),Object(v["a"])(T,a,o,!1,null,null,null)),J=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},d092:function(t,e,n){t.exports=n.p+"img/logo3.daf13776.png"},e496:function(t,e,n){"use strict";n("ea29")},ea29:function(t,e,n){}});
//# sourceMappingURL=app.bb426e6a.js.map