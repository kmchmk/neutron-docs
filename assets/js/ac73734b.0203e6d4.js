"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[1107],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||u;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var u=t.length,a=new Array(u);a[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<u;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1999:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const u={},a="Client",l={unversionedId:"neutron/feeburner/client",id:"neutron/feeburner/client",title:"Client",description:"Queries",source:"@site/docs/neutron/feeburner/client.md",sourceDirName:"neutron/feeburner",slug:"/neutron/feeburner/client",permalink:"/neutron/feeburner/client",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron/feeburner/overview"},next:{title:"State",permalink:"/neutron/feeburner/state"}},i={},s=[{value:"Queries",id:"queries",level:2},{value:"total-burned-neutrons-amount",id:"total-burned-neutrons-amount",level:3}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"client"},"Client"),(0,o.kt)("h2",{id:"queries"},"Queries"),(0,o.kt)("p",null,"In this section we describe the queries required on grpc server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'// Query defines the gRPC querier service.\nservice Query {\n  // Parameters queries the parameters of the module.\n  rpc Params(QueryParamsRequest) returns (QueryParamsResponse) {\n    option (google.api.http).get = "/neutron/feeburner/params";\n  }\n  // TotalBurnedNeutronsAmount queries total amount of burned neutron fees.\n  rpc TotalBurnedNeutronsAmount(QueryTotalBurnedNeutronsAmountRequest) returns (QueryTotalBurnedNeutronsAmountResponse) {\n    option (google.api.http).get = "/neutron/feeburner/total_burned_neutrons_amount";\n  }\n  // this line is used by starport scaffolding # 2\n}\n')),(0,o.kt)("h3",{id:"total-burned-neutrons-amount"},"total-burned-neutrons-amount"),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk.Coin")," with all-time amount of burned Neutron tokens."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond query feeburner total-burned-neutrons-amount\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),"Returns amount of burned Neutrons:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond query feeburner total-burned-neutrons-amount\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'total_burned_neutrons_amount:\n  coin:\n    amount: "551"\n    denom: untrn\n\n'))))}p.isMDXComponent=!0}}]);