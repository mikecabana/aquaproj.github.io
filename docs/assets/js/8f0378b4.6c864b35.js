"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[2001],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:100},l="Contributing",o={unversionedId:"products/aqua-registry/contributing",id:"products/aqua-registry/contributing",title:"Contributing",description:"How to contribute to Standard Registry. https://github.com/aquaproj/aqua-registry",source:"@site/docs/products/aqua-registry/contributing.md",sourceDirName:"products/aqua-registry",slug:"/products/aqua-registry/contributing",permalink:"/docs/products/aqua-registry/contributing",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/products/aqua-registry/contributing.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"aqua-registry",permalink:"/docs/products/aqua-registry/"},next:{title:"aqua-installer",permalink:"/docs/products/aqua-installer"}},s={},u=[{value:"See also",id:"see-also",level:2},{value:"Should you create an Issue before sending a Pull Request?",id:"should-you-create-an-issue-before-sending-a-pull-request",level:2},{value:"aqua can&#39;t support some tools&#39; plugin mechanism",id:"aqua-cant-support-some-tools-plugin-mechanism",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Set up",id:"set-up",level:2},{value:"How to add packages",id:"how-to-add-packages",level:2},{value:"Supported OS and CPU Architecture",id:"supported-os-and-cpu-architecture",level:2},{value:"Test multiple versions",id:"test-multiple-versions",level:2},{value:"Test in your laptop with Eartly",id:"test-in-your-laptop-with-eartly",level:2},{value:"Debug with earthly&#39;s <code>-i</code> option",id:"debug-with-earthlys--i-option",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"How to contribute to Standard Registry. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"https://github.com/aquaproj/aqua-registry")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2b50 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/oss-contribution-guide"},"OSS Contribution Guide")),(0,r.kt)("li",{parentName:"ul"},"\u2b50 ",(0,r.kt)("a",{parentName:"li",href:"https://aquaproj.github.io/docs/develop-registry/registry-style-guide"},"Registry Style Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/"},"Registry Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/develop-registry/change-os-arch-for-test"},"Change ",(0,r.kt)("inlineCode",{parentName:"a"},"GOOS")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"GOARCH")," for testing"))),(0,r.kt)("h2",{id:"should-you-create-an-issue-before-sending-a-pull-request"},"Should you create an Issue before sending a Pull Request?"),(0,r.kt)("p",null,"Basically, you don't have to create an Issue before sending a Pull Request.\nBut if the pull request requires the discussion before reviewing, you have to create an Issue in advance."),(0,r.kt)("p",null,"For example, you don't have to create an Issue in the following cases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a package"),(0,r.kt)("li",{parentName:"ul"},"Fix a typo")),(0,r.kt)("p",null,"On the other hand, for example if you want to change the directory structure in ",(0,r.kt)("inlineCode",{parentName:"p"},"pkgs")," or the workflow adding a package,\nyou have to create an Issue and describe what is changed and why the change is needed."),(0,r.kt)("h2",{id:"aqua-cant-support-some-tools-plugin-mechanism"},"aqua can't support some tools' plugin mechanism"),(0,r.kt)("p",null,"Some tools have the plugin mechanism."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github-cli/github-cli/creating-github-cli-extensions"},"GitHub CLI Extension")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/language/providers"},"Terraform provider")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gauge.org/plugin.html?os=macos&language=java&ide=null"},"Gauge plugin")),(0,r.kt)("li",{parentName:"ul"},"etc")),(0,r.kt)("p",null,"aqua simply installs commands in PATH (",(0,r.kt)("inlineCode",{parentName:"p"},"AQUA_ROOT_DIR/bin"),"), but some of these plugins expect to be installed in the other location.\nIf aqua can't support the plugin, we will reject the pull request adding the plugin to aqua-registry."),(0,r.kt)("p",null,"So if you send a pull request adding a plugin to aqua-registry, please check if aqua can support the plugin.\nWe aren't necessarily familiar with the plugin, so please explain where the plugin expects to be installed and how the plugin works in the pull request description."),(0,r.kt)("p",null,"If you don't know well, please create a pull request and consult us."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aquaproj.github.io/docs/install"},"aqua")," >= ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/releases/tag/v1.14.0"},"v1.14.0"))),(0,r.kt)("h2",{id:"set-up"},"Set up"),(0,r.kt)("p",null,"Checkout the repository and install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/registry-tool"},"aqua-registry CLI"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ git clone https://github.com/aquaproj/aqua-registry\n$ cd aqua-registry\n$ aqua i -l # Install aqua-registry CLI\n")),(0,r.kt)("h2",{id:"how-to-add-packages"},"How to add packages"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Scaffold configuration: ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua-registry scaffold [--deep] <package name>")),(0,r.kt)("li",{parentName:"ol"},"Fix generated files if the scaffold fails"),(0,r.kt)("li",{parentName:"ol"},"Update registry.yaml: ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua-registry gr")),(0,r.kt)("li",{parentName:"ol"},"Test: ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua i")," and run installed tools"),(0,r.kt)("li",{parentName:"ol"},"Repeat the step 2 ~ 4 until packages are installed properly"),(0,r.kt)("li",{parentName:"ol"},"Create a pull request: ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua-registry create-pr-new-pkg <package name>..."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you face GitHub API rate limiting, please set the GitHub Access token with environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AQUA_GITHUB_TOKEN"),"."),(0,r.kt)("p",{parentName:"admonition"},"e.g."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export GITHUB_TOKEN=<YOUR PERSONAL ACCESS TOKEN>\n"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When you update ",(0,r.kt)("inlineCode",{parentName:"p"},"pkgs/**/registry.yaml"),", you have to run ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua-registry gr")," to reflect the update to ",(0,r.kt)("inlineCode",{parentName:"p"},"registry.yaml")," on the repository root directory.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"--deep")," option requires ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua >= v1.34.0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"registry-tool >= v0.1.8"),".")),(0,r.kt)("h2",{id:"supported-os-and-cpu-architecture"},"Supported OS and CPU Architecture"),(0,r.kt)("p",null,"Please consider the following OS and CPU Architecture."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"windows"),(0,r.kt)("li",{parentName:"ul"},"darwin"),(0,r.kt)("li",{parentName:"ul"},"linux"))),(0,r.kt)("li",{parentName:"ul"},"CPU Architecture",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"amd64"),(0,r.kt)("li",{parentName:"ul"},"arm64")))),(0,r.kt)("p",null,"We test the registry in CI on the above environments by GitHub Actions' build matrix."),(0,r.kt)("h2",{id:"test-multiple-versions"},"Test multiple versions"),(0,r.kt)("p",null,"If the package has the field ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/registry-config/version-overrides"},"version_overrides"),",\nplease add not only the latest version but also old versions in ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg.yaml")," to test if old versions can be installed properly."),(0,r.kt)("p",null,"e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/pkgs/scaleway/scaleway-cli/pkg.yaml"},"pkg.yaml")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/pkgs/scaleway/scaleway-cli/registry.yaml"},"registry.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: scaleway/scaleway-cli@v2.12.0\n  - name: scaleway/scaleway-cli\n    version: v2.4.0\n")),(0,r.kt)("p",null,"\u26a0\ufe0f Don't use the short syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"<package name>@<version>")," for the old version to prevent Renovate from updating the old version."),(0,r.kt)("p",null,"\ud83d\udc4e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: scaleway/scaleway-cli@v2.12.0\n  - name: scaleway/scaleway-cli@v2.12.0\n")),(0,r.kt)("h2",{id:"test-in-your-laptop-with-eartly"},"Test in your laptop with Eartly"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.earthly.dev/"},"Earthly"),", you can do a test against a specific platform in your laptop.\nYou can test quickly without pushing a commit and waiting for CI.\nCompared with running ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua i --test")," in your laptop directly, you can keep your laptop clean and can test against other platform than your laptop."),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/Earthfile"},"Earthfile")," too."),(0,r.kt)("p",null,"Please run ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua i -l")," in this repository, then Earthly is installed by aqua."),(0,r.kt)("p",null,"After creating and updating a package's ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"registry.yaml"),", please run ",(0,r.kt)("inlineCode",{parentName:"p"},"earthly +test"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ earthly [-i] +test --pkg=<package name> [--os=linux|darwin|windows] [--arch=amd64|arm64]\n")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ earthly +test --pkg=suzuki-shunsuke/github-comment --os=windows --arch=amd64\n")),(0,r.kt)("p",null,"There are three args."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--pkg"),": (Required): package name. e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"suzuki-shunsuke/tfcmt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--os"),": (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"linux"),"): ",(0,r.kt)("a",{parentName:"li",href:"/docs/develop-registry/change-os-arch-for-test"},"AQUA_GOOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--arch"),": (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"amd64"),"): ",(0,r.kt)("a",{parentName:"li",href:"/docs/develop-registry/change-os-arch-for-test"},"AQUA_GOARCH"))),(0,r.kt)("h3",{id:"debug-with-earthlys--i-option"},"Debug with earthly's ",(0,r.kt)("inlineCode",{parentName:"h3"},"-i")," option"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.earthly.dev/best-practices#technique-use-earthly-i-to-debug-failures"},"earthly's ",(0,r.kt)("inlineCode",{parentName:"a"},"-i")," option is useful for debug"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.earthly.dev/docs/earthly-command"},"https://docs.earthly.dev/docs/earthly-command")),(0,r.kt)("p",null,"You can install tools for debug in a container."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ apk add tree\n")))}d.isMDXComponent=!0}}]);