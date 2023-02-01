"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[4157],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>d});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,u=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||u;return r?t.createElement(m,a(a({ref:n},s),{},{components:r})):t.createElement(m,a({ref:n},s))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var u=r.length,a=new Array(u);a[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<u;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5970:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const u={},a="Client",i={unversionedId:"neutron/feerefunder/client",id:"neutron/feerefunder/client",title:"Client",description:"Queries",source:"@site/docs/neutron/feerefunder/client.md",sourceDirName:"neutron/feerefunder",slug:"/neutron/feerefunder/client",permalink:"/neutron/feerefunder/client",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron/feerefunder/overview"},next:{title:"State",permalink:"/neutron/feerefunder/state"}},l={},c=[{value:"Queries",id:"queries",level:2},{value:"fee-info port-id sequence",id:"fee-info-port-id-sequence",level:3}],s={toc:c};function f(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"client"},"Client"),(0,o.kt)("h2",{id:"queries"},"Queries"),(0,o.kt)("p",null,"In this section we describe the queries required on grpc server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'// Query defines the gRPC querier service.\nservice Query {\n  // Parameters queries the parameters of the module.\n  rpc Params(QueryParamsRequest) returns (QueryParamsResponse) {\n    option (google.api.http).get = "/neutron-org/neutron/feerefunder/params";\n  }\n  rpc FeeInfo(FeeInfoRequest) returns (FeeInfoResponse) {\n    option (google.api.http).get = "/neutron-org/neutron/feerefunder/info";\n  }\n  // this line is used by starport scaffolding # 2\n}\n')),(0,o.kt)("h3",{id:"fee-info-port-id-sequence"},"fee-info ","[port-id][channel-id]"," ","[sequence]"),(0,o.kt)("p",null,"Returns list of all failures."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond query feerefunder fee-info [port-id] [channel-id] [sequence]\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),"Returns fee info by port id, channel id and sequence:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond query feerefunder fee-info icacontroller-neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq_1 channel_1 1\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'fee_info:\n  - payer: neutron1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqcd0mrx\n    packet_id:\n      - channel_id: channel_1\n        port_id: icacontroller-neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq_1\n        sequence: 1\n    fee:\n      - recv_fee:\n          - denom: "untrn"\n            amount: "0"\n        ack_fee:\n          - denom: "untrn"\n            amount: "500"\n        timeout_fee:\n          - denom: "untrn"\n            amount: "500"\n'))))}f.isMDXComponent=!0}}]);