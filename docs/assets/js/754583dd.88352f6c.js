"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[4590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(r),d=i,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(h,n(n({ref:t},p),{},{components:r})):a.createElement(h,n({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:i,n[1]=u;for(var s=2;s<o;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=r(7462),i=(r(7294),r(3905));const o={sidebar_position:100},n="Products",u={unversionedId:"products/index",id:"products/index",title:"Products",description:"Repositories",source:"@site/docs/products/index.md",sourceDirName:"products",slug:"/products/",permalink:"/docs/products/",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/products/index.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Change GOOS and GOARCH for testing Registry",permalink:"/docs/develop-registry/change-os-arch-for-test"},next:{title:"aqua-registry",permalink:"/docs/products/aqua-registry/"}},l={},s=[{value:"Checksum Verification",id:"checksum-verification",level:2},{value:"GitHub Actions",id:"github-actions",level:3},{value:"Example",id:"example",level:3},{value:"Develop Registry",id:"develop-registry",level:2},{value:"Develop custom Registry",id:"develop-custom-registry",level:3},{value:"Internal tools",id:"internal-tools",level:2},{value:"Archived",id:"archived",level:2}],p={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"products"},"Products"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/orgs/aquaproj/repositories"},"Repositories")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua"},"aqua"),": Main product. CLI Version Manager"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/products/aqua-registry/"},"aqua-registry"),": aqua's Standard Registry"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/products/aqua-installer"},"aqua-installer"),": A shell script and GitHub Actions to install aqua"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/products/aqua-renovate-config"},"aqua-renovate-config"),": Renovate Config Preset to update aqua, aqua-installer, packages, and registries"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aquaproj.github.io"},"aquaproj.github.io"),": aqua's official website")),(0,i.kt)("h2",{id:"checksum-verification"},"Checksum Verification"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/security/checksum"},"Checksum Verification")),(0,i.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/products/update-checksum-action"},"update-checksum-action"),": GitHub Actions to update aqua-checksums.json. If aqua-checksums.json isn't latest, update aqua-checksums.json and push a commit"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/products/update-checksum-workflow"},"update-checksum-workflow"),": GitHub Actions Reusable Workflow to update aqua-checksums.json")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/example-update-checksum"},"example-update-checksum")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/example-update-checksum-public"},"example-update-checksum-public"))),(0,i.kt)("h2",{id:"develop-registry"},"Develop Registry"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/develop-registry/"},"Develop Registry")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/registry-tool"},"registry-tool"),": "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/generate-registry-deep"},"generate-registry-deep"))),(0,i.kt)("h3",{id:"develop-custom-registry"},"Develop custom Registry"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/registry-tool"},"registry-action"),": "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/template-private-aqua-registry"},"template-private-aqua-registry"))),(0,i.kt)("h2",{id:"internal-tools"},"Internal tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/products/aqua-proxy"},"aqua-proxy"))),(0,i.kt)("h2",{id:"archived"},"Archived"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/slsa-verifier"},"slsa-verifier"),": Fork of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/slsa-framework/slsa-verifier"},"slsa-framework/slsa-verifier"))))}m.isMDXComponent=!0}}]);