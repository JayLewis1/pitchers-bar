(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[833],{2661:function(e,t,l){"use strict";var a=l(7294),r=(0,l(6921).connect)((function(e){return{gallery:e.gallery}}),{toggleGallery:function(e){return{type:"TOGGLE_GALLERY",payload:e}}});t.Z=r((function(e){var t=e.index,l=e.toggleGallery,r=e.from,n=(0,a.useState)(t),c=n[0],o=n[1];return a.createElement("div",{className:"gallery-popup"},"home"===r&&a.createElement("img",{src:"/assets/photos/g"+c+"@2x.jpg",alt:"Gallery Item"}),"gallery"===r&&a.createElement("img",{src:"/assets/gallery/p"+c+".jpg",alt:"Gallery Item"}),a.createElement("span",{className:"button-wrapper"},a.createElement("button",{onClick:function(){return e=c-1,o("home"===r&&e<1?e=5:e),void o("gallery"===r&&e<1?e=29:e);var e}},a.createElement("img",{src:"/assets/icons/arrow.svg",alt:"Left arrow"})),a.createElement("button",{id:"exit-btn",onClick:function(){return console.log("exit gallery"),void l(!1)}},a.createElement("span",{className:"btn-bg"}),a.createElement("p",null,"Exit")),a.createElement("button",{id:"right-arrow",onClick:function(){return e=c+1,o("home"===r&&e>5?e=1:e),void o("gallery"===r&&e>29?e=1:e);var e}},a.createElement("img",{src:"/assets/icons/arrow.svg",alt:"Right arrow"}))))}))},9647:function(e,t,l){"use strict";l.r(t);var a=l(18),r=l(7294),n=l(843),c=l(8972),o=l(2661),s=(0,l(6921).connect)((function(e){return{gallery:e.gallery}}),{toggleGallery:function(e){return{type:"TOGGLE_GALLERY",payload:e}}});t.default=s((function(e){var t=e.gallery,l=e.toggleGallery,s=(0,r.useState)([{url:"",loaded:!1}]),i=s[0],u=s[1],m=(0,r.useState)(0),g=m[0],y=m[1];(0,r.useEffect)((function(){d()}),[]);var d=function(){for(var e=[],t=1;t<=29;t++){var l={url:"/assets/gallery/p"+t+".jpg",loaded:!1};e.push(l)}u(e)};return r.createElement(n.Z,null,r.createElement(c.Z,{title:"Gallery"}),r.createElement("div",{className:"gallery-container"},r.createElement("div",{className:"wrapper"},r.createElement("h3",null,"Pitchers photo gallery"),r.createElement("ul",{className:"gallery-grid"},i&&i.map((function(e){return r.createElement("li",{key:e.url,className:"gallery-image",style:!0===e.loaded?{minHeight:"0"}:{minHeight:"200px"}},r.createElement("div",{className:"img-placeholder",style:!0===e.loaded?{display:"none"}:{display:"block"}}),r.createElement("img",{style:!1===e.loaded?{display:"none"}:{display:"inline-block"},src:e.url,alt:"Gallery Item",onLoad:function(){return function(e){for(var t,l=(0,a.Z)(i),r={url:e.url,loaded:!0},n=0;n<l.length;n++)l[n].url===e.url&&(t=l.indexOf(l[n]),l.splice(t,1,r),u(l))}(e)}}),r.createElement("span",{className:"img-hover"},r.createElement("button",{className:"gallery-link",onClick:function(){return function(e){for(var t,a=0;a<i.length;a++)i[a].url===e&&(t=i.indexOf(i[a]),y(t+1),l(!0))}(e.url)}},r.createElement("span",{className:"btn-bg"}),r.createElement("p",null,"View photo"))))})))),!0===t.toggle&&r.createElement(o.Z,{index:g,from:"gallery"})))}))}}]);
//# sourceMappingURL=component---src-pages-gallery-tsx-93544a7c9fc6cbf9f4e8.js.map