"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4750],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,v=f["".concat(u,".").concat(d)]||f[d]||l[d]||i;return t?r.createElement(v,a(a({ref:n},s),{},{components:t})):r.createElement(v,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6954:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:300},u="pyenv, rbenv, tfenv, and etc",p={unversionedId:"comparison/pyenv-rbenv-tfenv",id:"comparison/pyenv-rbenv-tfenv",title:"pyenv, rbenv, tfenv, and etc",description:"Pros",source:"@site/docs/comparison/pyenv-rbenv-tfenv.md",sourceDirName:"comparison",slug:"/comparison/pyenv-rbenv-tfenv",permalink:"/docs/comparison/pyenv-rbenv-tfenv",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/comparison/pyenv-rbenv-tfenv.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"apt and yum",permalink:"/docs/comparison/apt-yum"},next:{title:"GitHub Actions",permalink:"/docs/comparison/github-actions"}},s=[{value:"Pros",id:"pros",children:[],level:2},{value:"Cons",id:"cons",children:[],level:2}],l={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pyenv-rbenv-tfenv-and-etc"},"pyenv, rbenv, tfenv, and etc"),(0,i.kt)("h2",{id:"pros"},"Pros"),(0,i.kt)("p",null,"These tools are specialized for the specific tool such as Python, Ruby, and Terraform.\naqua is more general.\naqua is written in Go, so aqua doesn't depend on the specific shell."),(0,i.kt)("h2",{id:"cons"},"Cons"),(0,i.kt)("p",null,"aqua doesn't support building the tool when installing. So aqua doesn't support tools which the build is required."))}f.isMDXComponent=!0}}]);