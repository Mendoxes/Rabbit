(this["webpackJsonprabbit-blog"]=this["webpackJsonprabbit-blog"]||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(38),a=n.n(s),r=(n(46),n.p,n(47),n(15)),l=n(12),i=n(39),o=n.n(i)()({projectId:"b3z50f05",dataset:"production",apiVersion:"2021-03-25",useCdn:!0}),u=n(1);function d(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){o.fetch('*[_type == "post"]{\n        title,\n        slug,\n        mainImage{\n        asset->{\n          _id,\n          url\n        }\n      }\n    }').then((function(e){return s(e)})).catch(console.error)}),[]),Object(u.jsx)("div",{className:"bg-green-100 min-h-screen p-12",children:Object(u.jsxs)("div",{className:"container mx-auto",children:[Object(u.jsx)("h2",{className:"text-5xl flex justify-center cursive",children:"Life of Levi"}),Object(u.jsx)("h3",{className:"text-lg text-gray-600 flex justify-center mb-12",children:"Adventure of Levi the rabbit"}),Object(u.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-2 gap-8",children:n&&n.map((function(e,t){return Object(u.jsx)(l.b,{to:"/"+e.slug.current,children:Object(u.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-white\r border-green-100",children:[Object(u.jsx)("img",{className:"w-full h-full rounded-r object-cover absolute",src:e.mainImage.asset.url,alt:""}),Object(u.jsx)("span",{className:"block relative h-full flex justify-end items-end pr\r -4 pb-4",children:Object(u.jsx)("h2",{className:"text-gray-800 text-lg font-bold px-3 py-4 bg-red-700\r text-red-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)}))})]})})}var j=n(3),b=n(41),g=n.n(b),x=n(21),h=n.n(x)()(o);function m(e){return h.image(e)}function f(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(j.e)().slug;return Object(c.useEffect)((function(){o.fetch('*[slug.current == "'.concat(a,'"]{\n           title,\n           slug,\n           mainImage{\n           asset->{\n              _id,\n              url\n            }\n          },\n          body,\n          "name": author->name,\n          "authorImage": author->image\n       }')).then((function(e){return s(e[0])})).catch(console.error)}),[a]),n?Object(u.jsx)("div",{className:"bg-gray-200 min-h-screen p-12",children:Object(u.jsxs)("div",{className:"container shadow-lg mx-auto bg-green-100 rounded-lg",children:[Object(u.jsxs)("div",{className:"relative",children:[Object(u.jsx)("div",{className:"absolute h-full w-full flex items-center justify-center p-8",children:Object(u.jsxs)("div",{className:"bg-gray-100 bg-opacity-75 rounded p-12",children:[Object(u.jsx)("h2",{className:"cursive text-2xl lg:text-4xl mb-4",children:n.title}),Object(u.jsxs)("div",{className:"flex justify-center text-gray-800",children:[Object(u.jsx)("img",{src:m(n.authorImage).url(),className:"w-10 h-10 rounded-full",alt:"Seb"}),Object(u.jsx)("h4",{className:"cursive flex items-center pl-2 text-2xl",children:n.name})]})]})}),Object(u.jsx)("img",{className:"w-full object-cover rounded-t",src:m(n.mainImage).url(),alt:"",style:{height:"400px"}})]}),Object(u.jsx)("div",{className:"px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full",children:Object(u.jsx)(g.a,{blocks:n.body,projectId:o.clientConfig.projectId,dataset:o.clientConfig.dataset})})]})}):Object(u.jsx)("div",{children:"Loading..."})}var p=function(){return Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j.a,{component:d,path:"/",exact:!0}),Object(u.jsx)(j.a,{component:f,path:"/:slug",exact:!0})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};a.a.render(Object(u.jsx)(p,{}),document.getElementById("root")),O()},46:function(e,t,n){},47:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.3e7d3e15.chunk.js.map