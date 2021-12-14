"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[3869],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9657:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:450},u="Declarative vs Imperative",l={unversionedId:"reference/declarative-imperative",id:"reference/declarative-imperative",title:"Declarative vs Imperative",description:"aqua is easy to use. You only have to run aqua i.",source:"@site/docs/reference/declarative-imperative.md",sourceDirName:"reference",slug:"/reference/declarative-imperative",permalink:"/docs/reference/declarative-imperative",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/declarative-imperative.md",tags:[],version:"current",sidebarPosition:450,frontMatter:{sidebar_position:450},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/reference/usage"},next:{title:"Clean unused packages",permalink:"/docs/reference/clean"}},s=[],p={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"declarative-vs-imperative"},"Declarative vs Imperative"),(0,o.kt)("p",null,"aqua is easy to use. You only have to run ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua i"),".\nBut why is aqua easy? What's the difference between aqua and other tools?\nWe believe a declarative tool management is a key concept of aqua.\naqua manages tools declaratively, while some other tools manage imperatively."),(0,o.kt)("p",null,"For example, the following command is imperative."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ brew install direnv \n$ brew uninstall direnv \n")),(0,o.kt)("p",null,"Tools such as Homebrew provide various sub commands to manage tools.\nSo users have to be able to use them well."),(0,o.kt)("p",null,"On the other hand, in case of aqua you manage tools with declarative YAML configuration files."))}f.isMDXComponent=!0}}]);