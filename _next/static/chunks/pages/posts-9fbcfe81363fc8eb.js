(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{5161:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return l(5502)}])},7681:function(e,s,l){"use strict";l.d(s,{Z:function(){return C}});var t=l(5893),n=l(9008),r=l.n(n);let c=e=>{let{children:s}=e;return(0,t.jsx)("div",{className:"mx-auto w-full max-w-screen-lg",children:s})};var x=l(1664),i=l.n(x),a=l(682),d=l(97);let h=e=>{let{url:s,text:l,children:n}=e;return(0,t.jsx)(i(),{href:s,children:(0,t.jsxs)("div",{className:"cursor-pointer flex space-x-2 font-semibold hover:text-indigo-600",children:[n,(0,t.jsx)("span",{className:"hidden sm:block",children:l})]})})},o=()=>(0,t.jsxs)("div",{className:"flex space-x-4 sm:space-x-8",children:[(0,t.jsx)(h,{url:"/posts",text:"posts",children:(0,t.jsx)(a.Z,{className:"h-6 w-6"})}),(0,t.jsx)(h,{url:"/about",text:"about",children:(0,t.jsx)(d.Z,{className:"h-6 w-6"})})]}),j=()=>(0,t.jsx)(i(),{href:"/",children:(0,t.jsx)("div",{className:"font-extrabold text-2xl",children:"Rangyu"})}),u=()=>(0,t.jsx)("header",{className:"border-b border-stone-300",children:(0,t.jsx)(c,{children:(0,t.jsxs)("div",{className:"h-[60px] flex-between px-4",children:[(0,t.jsx)(j,{}),(0,t.jsx)(o,{})]})})}),m=e=>{let{url:s,children:l}=e;return(0,t.jsx)(i(),{href:s,children:(0,t.jsx)("div",{className:"hover:underline hover:text-stone-600",children:l})})},p=()=>(0,t.jsxs)("div",{className:"flex-left space-x-4",children:[(0,t.jsx)(m,{url:"/terms",children:"terms"}),(0,t.jsx)(m,{url:"/privacy",children:"privacy"})]}),f=()=>(0,t.jsx)("footer",{className:"border-t border-stone-300",children:(0,t.jsx)(c,{children:(0,t.jsxs)("div",{className:"text-stone-500 text-sm py-4 sm:py-8 px-4 flex-between",children:[(0,t.jsx)("div",{children:"\xa9 2023 Rangyu"}),(0,t.jsx)(p,{})]})})}),v=e=>{let{children:s}=e;return(0,t.jsxs)("div",{className:"w-full min-h-screen",children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:"Rangyu"}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(u,{}),(0,t.jsx)("div",{children:(0,t.jsx)(c,{children:s})}),(0,t.jsx)(f,{})]})};var N=l(13),g=l(7524);let b=e=>{let{url:s,children:l}=e;return(0,t.jsx)(i(),{href:s,children:(0,t.jsx)("div",{className:"hover:bg-indigo-50 rounded-lg px-2 py-2 flex-left space-x-1",children:l})})},w=e=>{let{post:s}=e;return(0,t.jsxs)(b,{url:"/"+s.slug,children:[(0,t.jsx)(N.Z,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"pr-2",children:s.title})]})},y=e=>{let{post:s}=e;return(0,t.jsxs)(b,{url:"/"+s.slug,children:[(0,t.jsx)("span",{className:"pl-2",children:s.title}),(0,t.jsx)(g.Z,{className:"h-4 w-4"})]})},_=e=>{let{prev:s,next:l}=e;return(0,t.jsxs)("div",{className:"flex justify-between text-indigo-500 hover:text-indigo-600 -mx-4 py-4",children:[s?(0,t.jsx)(w,{post:s}):(0,t.jsx)("span",{}),l?(0,t.jsx)(y,{post:l}):(0,t.jsx)("span",{})]})};var k=l(381),Z=l.n(k);let E=e=>{let{children:s}=e;return(0,t.jsx)(i(),{href:"/tags/"+s,children:(0,t.jsx)("span",{className:"bg-indigo-50 rounded-lg px-2 py-1 text-sm text-indigo-500",children:s})})},P=e=>{let{tags:s}=e;return(0,t.jsx)("div",{className:"flex-left sm:flex-center space-x-4",children:s.map(e=>(0,t.jsx)(E,{children:e},"tag-".concat(e)))})},M=e=>{let{title:s,tags:l,wdate:n}=e;return(0,t.jsxs)("div",{className:"flex-col-left sm:flex-col-center space-y-2 sm:space-y-6 border-b py-4 sm:py-8 lg:py-16 mb-4 sm:mb-8 lg:mb-16 ",children:[l&&(0,t.jsx)(P,{tags:l}),s&&(0,t.jsx)("h1",{className:"font-bold text-2xl sm:text-3xl lg:text-4xl",children:s}),n&&(0,t.jsx)("div",{className:"text-stone-400 text-sm",children:n})]})},Y=e=>{let{prev:s,next:l}=e;return(0,t.jsx)("div",{className:"pb-4 sm:pb-8 lg:pb-16",children:(0,t.jsx)(_,{prev:s,next:l})})},R=e=>{let{isLoading:s,title:l,tags:n,wdate:r,prev:c,next:x,children:i}=e;return(0,t.jsx)(v,{children:(0,t.jsxs)("article",{className:"px-4 sm:px-16 lg:px-24",children:[(0,t.jsx)(M,{title:l,tags:n,wdate:r&&Z()(r).format("dddd, MMMM Do YYYY")}),(0,t.jsx)("div",{className:"page-content",children:i}),(0,t.jsx)(Y,{prev:c,next:x})]})})};var C=R},5502:function(e,s,l){"use strict";l.r(s),l.d(s,{__N_SSG:function(){return a},default:function(){return d}});var t=l(5893),n=l(7681),r=l(1664),c=l.n(r),x=l(2962);let i=e=>{let{tag:s,posts:l}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:s}),(0,t.jsx)("ul",{children:null==l?void 0:l.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(c(),{href:e.slug,children:e.title})},"post-".concat(e.slug)))})]},"posts-tag-".concat(s))};var a=!0;function d(e){let{tags:s,posts:l}=e;return(0,t.jsxs)(n.Z,{title:"Posts",children:[(0,t.jsx)(x.PB,{title:"Posts - 랑유"}),s.filter(e=>e.cnt>0).map(e=>(0,t.jsx)(i,{tag:e.name,posts:l.filter(s=>s.tags.includes(e.name))}))]})}}},function(e){e.O(0,[885,573,962,774,888,179],function(){return e(e.s=5161)}),_N_E=e.O()}]);