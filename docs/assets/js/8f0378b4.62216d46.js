"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7693],{5680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>m});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(t),d=r,m=g["".concat(s,".").concat(d)]||g[d]||c[d]||i;return t?n.createElement(m,o(o({ref:a},u),{},{components:t})):n.createElement(m,o({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1634:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(8168),r=(t(6540),t(5680));const i={sidebar_position:100},o="Contributing",l={unversionedId:"products/aqua-registry/contributing",id:"products/aqua-registry/contributing",title:"Contributing",description:"How to contribute to Standard Registry. https://github.com/aquaproj/aqua-registry",source:"@site/docs/products/aqua-registry/contributing.md",sourceDirName:"products/aqua-registry",slug:"/products/aqua-registry/contributing",permalink:"/docs/products/aqua-registry/contributing",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/products/aqua-registry/contributing.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"aqua-registry",permalink:"/docs/products/aqua-registry/"},next:{title:"Changelog",permalink:"/docs/products/aqua-registry/changelog"}},s={},p=[{value:"See also",id:"see-also",level:2},{value:"Changelog of development workflow",id:"changelog-of-development-workflow",level:2},{value:"Should you create an Issue before sending a Pull Request?",id:"should-you-create-an-issue-before-sending-a-pull-request",level:2},{value:"aqua can&#39;t support some tools&#39; plugin mechanism",id:"aqua-cant-support-some-tools-plugin-mechanism",level:2},{value:"Commit Signing",id:"commit-signing",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Set up",id:"set-up",level:2},{value:"cmdx - Task Runner",id:"cmdx---task-runner",level:2},{value:"How to add a package",id:"how-to-add-a-package",level:2},{value:"Use <code>cmdx s</code> definitely",id:"use-cmdx-s-definitely",level:3},{value:"Supported OS and CPU Architecture",id:"supported-os-and-cpu-architecture",level:2},{value:"Test multiple versions",id:"test-multiple-versions",level:2}],u={toc:p},g="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"contributing"},"Contributing"),(0,r.yg)("p",null,"How to contribute to Standard Registry. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry"},"https://github.com/aquaproj/aqua-registry")),(0,r.yg)("h2",{id:"see-also"},"See also"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u2b50 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/oss-contribution-guide"},"OSS Contribution Guide")),(0,r.yg)("li",{parentName:"ul"},"\u2b50 ",(0,r.yg)("a",{parentName:"li",href:"/docs/develop-registry/registry-style-guide"},"Registry Style Guide")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/reference/registry-config/"},"Registry Configuration")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/develop-registry/change-os-arch-for-test"},"Change ",(0,r.yg)("inlineCode",{parentName:"a"},"GOOS")," and ",(0,r.yg)("inlineCode",{parentName:"a"},"GOARCH")," for testing"))),(0,r.yg)("h2",{id:"changelog-of-development-workflow"},"Changelog of development workflow"),(0,r.yg)("p",null,"We have been improving the development workflow continuously.\nSo sometimes the development workflow is changed.\nPlease check ",(0,r.yg)("a",{parentName:"p",href:"/docs/products/aqua-registry/changelog"},"the change log"),"."),(0,r.yg)("h2",{id:"should-you-create-an-issue-before-sending-a-pull-request"},"Should you create an Issue before sending a Pull Request?"),(0,r.yg)("p",null,"Basically, you don't have to create an Issue before sending a Pull Request.\nBut if the pull request requires the discussion before reviewing, you have to create an Issue in advance."),(0,r.yg)("p",null,"For example, you don't have to create an Issue in the following cases."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add a package"),(0,r.yg)("li",{parentName:"ul"},"Fix a typo")),(0,r.yg)("p",null,"On the other hand, for example if you want to change the directory structure in ",(0,r.yg)("inlineCode",{parentName:"p"},"pkgs")," or the workflow adding a package,\nyou have to create an Issue and describe what is changed and why the change is needed."),(0,r.yg)("h2",{id:"aqua-cant-support-some-tools-plugin-mechanism"},"aqua can't support some tools' plugin mechanism"),(0,r.yg)("p",null,"Some tools have the plugin mechanism."),(0,r.yg)("p",null,"e.g."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.github.com/en/github-cli/github-cli/creating-github-cli-extensions"},"GitHub CLI Extension")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/language/providers"},"Terraform provider")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.gauge.org/plugin.html?os=macos&language=java&ide=null"},"Gauge plugin")),(0,r.yg)("li",{parentName:"ul"},"etc")),(0,r.yg)("p",null,"aqua simply installs commands in PATH (",(0,r.yg)("inlineCode",{parentName:"p"},"AQUA_ROOT_DIR/bin"),"), but some of these plugins expect to be installed in the other location.\nIf aqua can't support the plugin, we will reject the pull request adding the plugin to aqua-registry."),(0,r.yg)("p",null,"So if you send a pull request adding a plugin to aqua-registry, please check if aqua can support the plugin.\nWe aren't necessarily familiar with the plugin, so please explain where the plugin expects to be installed and how the plugin works in the pull request description."),(0,r.yg)("p",null,"If you don't know well, please create a pull request and consult us."),(0,r.yg)("h2",{id:"commit-signing"},"Commit Signing"),(0,r.yg)("p",null,"All commits of pull requests must be signed.\nPlease see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/oss-contribution-guide/blob/main/docs/commit-signing.md"},"the document"),"."),(0,r.yg)("h2",{id:"requirements"},"Requirements"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://aquaproj.github.io/docs/install"},"aqua")),(0,r.yg)("li",{parentName:"ul"},"Docker")),(0,r.yg)("p",null,"Please use the latest version."),(0,r.yg)("h2",{id:"set-up"},"Set up"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/aquaproj/aqua-registry\ncd aqua-registry\naqua i -l # Install dependencies\n")),(0,r.yg)("h2",{id:"cmdx---task-runner"},"cmdx - Task Runner"),(0,r.yg)("p",null,"We use ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/cmdx"},"cmdx")," as a task runner.\ncmdx is installed by ",(0,r.yg)("a",{parentName:"p",href:"#set-up"},"Set up")," already.\nWe also use Docker to run tests in a container.\nPlease run ",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx help")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx help <task>")," to show the help."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"cmdx help\ncmdx help scaffold\n")),(0,r.yg)("h2",{id:"how-to-add-a-package"},"How to add a package"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Scaffold configuration: ",(0,r.yg)("inlineCode",{parentName:"li"},"cmdx s <package name>")),(0,r.yg)("li",{parentName:"ol"},"Fix generated files ",(0,r.yg)("inlineCode",{parentName:"li"},"pkgs/<package name>/{pkg.yaml,registry.yaml")),(0,r.yg)("li",{parentName:"ol"},"Run test: ",(0,r.yg)("inlineCode",{parentName:"li"},"cmdx t <package name>")),(0,r.yg)("li",{parentName:"ol"},"Update registry.yaml: ",(0,r.yg)("inlineCode",{parentName:"li"},"cmdx gr")),(0,r.yg)("li",{parentName:"ol"},"Commit ",(0,r.yg)("inlineCode",{parentName:"li"},"registry.yaml")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"pkgs/<package name>/{pkg.yaml,registry.yaml")),(0,r.yg)("li",{parentName:"ol"},"Repeat the step 2 ~ 5 until packages are installed properly"),(0,r.yg)("li",{parentName:"ol"},"Create a pull request: ",(0,r.yg)("inlineCode",{parentName:"li"},"cmdx new <package name>")),(0,r.yg)("li",{parentName:"ol"},"(Optional) Stop the container: ",(0,r.yg)("inlineCode",{parentName:"li"},"cmdx stop"))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Sometimes the scaffold by ",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx s <package name>")," would fail, but this is expected.\nIn this case, please check the error message and fix ",(0,r.yg)("inlineCode",{parentName:"p"},"pkgs/<package name>/{pkg.yaml,registry.yaml"),".\nPlease check ",(0,r.yg)("a",{parentName:"p",href:"/docs/trouble-shooting"},"Troubleshooting")," too.\nIf you can't figure out how to fix, please open a pull request and ask us for help.")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"If you face GitHub API rate limiting, please set the GitHub Access token with environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"AQUA_GITHUB_TOKEN"),"."),(0,r.yg)("p",{parentName:"admonition"},"e.g."),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"export GITHUB_TOKEN=<YOUR PERSONAL ACCESS TOKEN>\n"))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"When you update ",(0,r.yg)("inlineCode",{parentName:"p"},"pkgs/**/registry.yaml"),", you have to run ",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx gr")," to reflect the update to ",(0,r.yg)("inlineCode",{parentName:"p"},"registry.yaml")," on the repository root directory.")),(0,r.yg)("h3",{id:"use-cmdx-s-definitely"},"Use ",(0,r.yg)("inlineCode",{parentName:"h3"},"cmdx s")," definitely"),(0,r.yg)("p",null,"We don't accept pull requests not following this guide.\nEspecially, we don't accept pull requests not using ",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx s"),".\nStandard Registry must support not only the latest version but also almost all versions and ",(0,r.yg)("a",{parentName:"p",href:"#supported-os-and-cpu-architecture"},"variaous platforms"),".\nMany tools have so many versions that people can't check all of them manually.\nSo we can't trust the code not using ",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx s"),".\n",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx s")," checks all GitHub Releases and generates code supporting all of them (Strictly speaking, if there are too many GitHub Releases we have to restrict the number of GitHub Releases, though ",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx s")," can still check over 200 versions).\n",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx s")," generates much better code than us."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"cmdx s")," isn't perfect and sometimes ",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx s")," causes errors and generates invalid code.\nThen you have to fix the code according to the error message.\n",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx s")," supports only ",(0,r.yg)("inlineCode",{parentName:"p"},"github_release")," type packages, so for other package types you have to fix the code.\nEven if so, you must still use ",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx s"),".\n",(0,r.yg)("inlineCode",{parentName:"p"},"cmdx s")," guarantees the quality of code."),(0,r.yg)("h2",{id:"supported-os-and-cpu-architecture"},"Supported OS and CPU Architecture"),(0,r.yg)("p",null,"Please consider the following OS and CPU Architecture."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"OS",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"windows"),(0,r.yg)("li",{parentName:"ul"},"darwin"),(0,r.yg)("li",{parentName:"ul"},"linux"))),(0,r.yg)("li",{parentName:"ul"},"CPU Architecture",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"amd64"),(0,r.yg)("li",{parentName:"ul"},"arm64")))),(0,r.yg)("p",null,"We test the registry in CI on the above environments by GitHub Actions' build matrix."),(0,r.yg)("h2",{id:"test-multiple-versions"},"Test multiple versions"),(0,r.yg)("p",null,"If the package has the field ",(0,r.yg)("a",{parentName:"p",href:"/docs/reference/registry-config/version-overrides"},"version_overrides"),",\nplease add not only the latest version but also old versions in ",(0,r.yg)("inlineCode",{parentName:"p"},"pkg.yaml")," to test if old versions can be installed properly."),(0,r.yg)("p",null,"e.g. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/pkgs/scaleway/scaleway-cli/pkg.yaml"},"pkg.yaml")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/pkgs/scaleway/scaleway-cli/registry.yaml"},"registry.yaml")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: scaleway/scaleway-cli@v2.12.0\n  - name: scaleway/scaleway-cli\n    version: v2.4.0\n")),(0,r.yg)("p",null,"\u26a0\ufe0f Don't use the short syntax ",(0,r.yg)("inlineCode",{parentName:"p"},"<package name>@<version>")," for the old version to prevent Renovate from updating the old version."),(0,r.yg)("p",null,"\ud83d\udc4e"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: scaleway/scaleway-cli@v2.12.0\n  - name: scaleway/scaleway-cli@v2.12.0\n")))}c.isMDXComponent=!0}}]);