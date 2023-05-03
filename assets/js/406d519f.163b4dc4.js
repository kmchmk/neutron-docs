"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[1937],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3568:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={},s="Overview",l={unversionedId:"neutron/dao/overview",id:"neutron/dao/overview",title:"Overview",description:"Governance.png",source:"@site/docs/neutron/dao/overview.md",sourceDirName:"neutron/dao",slug:"/neutron/dao/overview",permalink:"/neutron/dao/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Consumer Chain Upgrade Readiness",permalink:"/neutron/consumer-chain-upgrade"},next:{title:"Overrules",permalink:"/neutron/dao/overrules"}},i={},p=[{value:"Neutron DAO",id:"neutron-dao",level:2},{value:"Voting Power Registry",id:"voting-power-registry",level:3},{value:"Voting vaults",id:"voting-vaults",level:4},{value:"Overrule proposals",id:"overrule-proposals",level:3},{value:"subDAOs",id:"subdaos",level:2},{value:"Timelocks &amp; Overrules",id:"timelocks--overrules",level:3},{value:"Important notes",id:"important-notes",level:3},{value:"Security subDAO",id:"security-subdao",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Governance.png",src:o(4566).Z,width:"2000",height:"967"})),(0,r.kt)("p",null,"Being an Interchain Secured network, Neutron does not use standard Cosmos SDK governance module. Neutron governance\nis based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DA0-DA0/dao-contracts"},"DAO DAO")," contracts, with some modifications. It consists of two\nparts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The Neutron DAO,"),(0,r.kt)("li",{parentName:"ol"},"Multiple subDAOs.")),(0,r.kt)("p",null,"For privileged actions (e.g., changing network parameters and making software update proposals) Neutron uses\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Ethernal-Tech/admin-module"},"admin-module")," fork managed by the Informal team. This module allows\nto specify a list of admin addresses that are able to submit proposals that are automatically executed. Neutron DAO\nsmart contract address is added as an admin during genesis, allowing the DAO to manage the network as it sees fit."),(0,r.kt)("h2",{id:"neutron-dao"},"Neutron DAO"),(0,r.kt)("p",null,"The Neutron DAO\nsupports ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DA0-DA0/dao-contracts/tree/main/contracts/proposal/dao-proposal-single"},"single-choice"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DA0-DA0/dao-contracts/tree/main/contracts/proposal/dao-proposal-multiple"},"multiple-choice"),"\nproposals by registering the corresponding proposal contracts in the core contract, along with a special type of ",(0,r.kt)("em",{parentName:"p"},"\noverrule")," proposals (see below). In the future, additional types of proposals might be introduced (e.g., gauges)."),(0,r.kt)("p",null,"Each type of proposal can only be submitted through a\ndedicated ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DA0-DA0/dao-contracts/tree/main/contracts/pre-propose"},"pre-propose contract")," (separate\npre-propose contracts for single-, multi-choice and overrule proposals exist), which manages deposits and makes sure\nthat only DAO members can submit proposals."),(0,r.kt)("h3",{id:"voting-power-registry"},"Voting Power Registry"),(0,r.kt)("p",null,"Instead of a single voting power module, Neutron DAO core contract interacts with the ",(0,r.kt)("em",{parentName:"p"},"Voting Power Registry")," contract\nthat keeps track of multiple ",(0,r.kt)("em",{parentName:"p"},"Voting Vaults")," (see below)."),(0,r.kt)("h4",{id:"voting-vaults"},"Voting vaults"),(0,r.kt)("p",null,"A voting vault is a smart contract that implements the DAO DAO voting module interface, namely, it is capable of:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Providing the total voting power at a given height,"),(0,r.kt)("li",{parentName:"ol"},"Providing the voting power of an address at a given height.")),(0,r.kt)("p",null,"The overall voting power of a given address is a sum of the voting powers that the address has in all of the registered\nvoting vaults."),(0,r.kt)("p",null,"There are two types of Voting Vaults:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Real vaults,"),(0,r.kt)("li",{parentName:"ol"},"Virtual vaults.")),(0,r.kt)("p",null,"An example of a ",(0,r.kt)("strong",{parentName:"p"},"real")," vault is the Neutron Vault, which allows its users to directly bond and unbond NTRN tokens. (\nThis is\ndone without locking them, i.e., you can bond and unbond tokens with this vault with no unbonding period.)"),(0,r.kt)("p",null,"In most cases, however, a Voting Vault does not directly store user funds; in this sense, such voting vaults can be\ncalled ",(0,r.kt)("strong",{parentName:"p"},'"virtual"')," vaults.**. For example, the Lockdrop vault does not allow users to directly bond or unbond LP\ntokens; instead it implements a relatively complicated query to multiple contracts to determine the amount of NTRN\ntokens that correspond to a certain amount of LP tokens at a given height."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The voting power is based exclusively on the amount of NTRN tokens, regardless of the type of the vault.")),(0,r.kt)("p",null,"Below is the list of Voting Vaults that will be available at launch:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Neutron Vault;")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Credits Vault")," (virtual) \u2014 keeps track of the NTRN tokens that are vested in the ",(0,r.kt)("a",{parentName:"li",href:"/neutron/token-generation-event/overview"},"Credits")," contract. ",(0,r.kt)("em",{parentName:"li"},"You can not add\ntokens or remove tokens from this vault directly"),";"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Lockdrop Vault")," (virtual) \u2014 keeps track of the NTRN tokens that are locked in the Lockdrop contract. You can not add\ntokens or remove tokens from this vault directly;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"LP Vesting Vault")," (virtual) \u2014 keeps track of the NTRN tokens that are vested in the LP Vesting contract. You can not\nadd tokens or remove tokens from this vault directly;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Investors Vault")," (virtual) \u2014 keeps track of the NTRN tokens that are vested in the early backers vesting contract. You\ncan not add tokens or remove tokens from this vault directly.")),(0,r.kt)("h3",{id:"overrule-proposals"},"Overrule proposals"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"N.B.: you need to read the subDAOs design below to understand this section.")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Overrule")," proposal type has a low threshold (0.01 of the total voting power). It only allows to call the ",(0,r.kt)("em",{parentName:"p"},"\noverrule_proposal()")," method of a subDAO proposal contract."),(0,r.kt)("p",null,"Re-voting should be disabled for such proposals (execute immediately after the threshold is reached)."),(0,r.kt)("h2",{id:"subdaos"},"subDAOs"),(0,r.kt)("p",null,"The Neutron DAO creates subDAOs by executing Neutron DAO proposals that contain ",(0,r.kt)("em",{parentName:"p"},"Instantiate")," messages for the subDAO\ncontracts. At the launch time, only the ",(0,r.kt)("em",{parentName:"p"},"Multisig-type")," subDAO will be available, which is similar to the Neutron DAO,\nbut\nuses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DA0-DA0/dao-contracts/tree/main/contracts/voting/dao-voting-cw4"},"cw4 voting module"),"\nimplementation for voting power (that\u2019s where the multisig logic is implemented)."),(0,r.kt)("p",null,"One important feature of the subDAOs is that their proposals can be overruled by the Neutron DAO within a specified\ntimelock period."),(0,r.kt)("h3",{id:"timelocks--overrules"},"Timelocks & Overrules"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more info on Overrules, check ",(0,r.kt)("a",{parentName:"p",href:"/neutron/dao/overrules"},"Overrules")," page.")),(0,r.kt)("p",null,"Proposals approved by a subDAO are timelocked. During the timelock period, the Neutron DAO can overrule any proposal by\ncreating a new Overrule proposal; this proposal has a lower threshold than the regular proposals, and is executed\nimmediately after reaching the threshold."),(0,r.kt)("p",null,"The timelock mechanism is implemented as follows. When creating a proposal, the user sends a regular proposal message to\nthe subDAO pre-propose contract. This contract wraps the messages to be executed in a ",(0,r.kt)("em",{parentName:"p"},"TimelockProposal")," message that is\ndefined by the ",(0,r.kt)("strong",{parentName:"p"},"Timelock")," ",(0,r.kt)("strong",{parentName:"p"},"contract"),". When the proposal passes, the subDAO core contract does not execute the\noriginal messages; instead, it sends them wrapped in a ",(0,r.kt)("em",{parentName:"p"},"TimelockProposal")," message to the Timelock contract."),(0,r.kt)("p",null,"The Timelock contract has 3 handlers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"execute_timelock_proposal(proposal_id, msgs)"),": timelocks the given proposal messages, (permissioned, only by subDAO\ncore contract);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"execute_execute_proposal(proposal_id)"),": executes the proposal if the timelock period has passed (permissionless);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"execute_overrule_proposal(proposal_id)"),": overrules the proposal (permissioned, only by the Neutron DAO).")),(0,r.kt)("p",null,"When a ",(0,r.kt)("em",{parentName:"p"},"TimelockProposal")," message is processed by the Timelock contract, the submission time is recorded in the state.\nThe Timelock contract has a parameter ",(0,r.kt)("em",{parentName:"p"},"timelock_period")," that defines how much time needs to pass before the proposal can\nbe executed."),(0,r.kt)("h3",{id:"important-notes"},"Important notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The wasmd-level admin of the Timelock contract is the Neutron DAO core contract;"),(0,r.kt)("li",{parentName:"ol"},"The owner of the Timelock contract is the Neutron DAO core contract;"),(0,r.kt)("li",{parentName:"ol"},"The Timelock contract is instantiated by the pre-propose contract;"),(0,r.kt)("li",{parentName:"ol"},"The subDAO address is queried from the pre-propose module during instantiation.")),(0,r.kt)("h3",{id:"security-subdao"},"Security subDAO"),(0,r.kt)("p",null,"There is a special ",(0,r.kt)("em",{parentName:"p"},"Security subDAO")," that can only execute ",(0,r.kt)("em",{parentName:"p"},"pause()")," methods on the following contracts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"All other subDAOs;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/neutron/tokenomics/reserve/overview"},"Reserve")," contract;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/neutron/tokenomics/distribution/overview"},"Distribution")," contract;")),(0,r.kt)("p",null,"The Security subDAO implements a modified version of the single-choice proposal that only allows to send ",(0,r.kt)("inlineCode",{parentName:"p"},"pause()"),"\nmessages to smart contracts."))}u.isMDXComponent=!0},4566:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/governance-f968e5ec6d35892d85dc437b52dd8f80.png"}}]);