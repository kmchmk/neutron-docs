"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[6935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},o="Messages",s={unversionedId:"neutron/interchain-queries/messages",id:"neutron/interchain-queries/messages",title:"Messages",description:"Register Interchain Query",source:"@site/docs/neutron/interchain-queries/messages.md",sourceDirName:"neutron/interchain-queries",slug:"/neutron/interchain-queries/messages",permalink:"/neutron/interchain-queries/messages",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron/interchain-queries/overview"},next:{title:"Client",permalink:"/neutron/interchain-queries/client"}},l={},u=[{value:"Register Interchain Query",id:"register-interchain-query",level:3},{value:"State modifications",id:"state-modifications",level:4},{value:"Events",id:"events",level:4},{value:"Update Interchain Query",id:"update-interchain-query",level:3},{value:"State modifications",id:"state-modifications-1",level:4},{value:"Events",id:"events-1",level:4},{value:"Remove Interchain Query",id:"remove-interchain-query",level:3},{value:"State modifications",id:"state-modifications-2",level:4},{value:"Events",id:"events-2",level:4},{value:"Submit Query Result",id:"submit-query-result",level:3},{value:"State modifications",id:"state-modifications-3",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"messages"},"Messages"),(0,a.kt)("h3",{id:"register-interchain-query"},"Register Interchain Query"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/dd812d6a05f4036a789cdb4b895020e73543702e/proto/interchainqueries/tx.proto#L23"},(0,a.kt)("inlineCode",{parentName:"a"},"MsgRegisterInterchainQuery"))," can be submitted by smart-contract only via ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRegisterInterchainQuery")," transaction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgRegisterInterchainQuery {\n  // defines a query type: `kv` or `tx` now\n  string query_type = 1;\n\n  // is used to define KV-storage keys for which we want to get values from remote chain\n  repeated KVKey keys = 2;\n\n  // is used to define a filter for transaction search ICQ\n  string transactions_filter = 3;\n\n  // is IBC connection ID for getting ConsensusState to verify proofs\n  string connection_id = 4;\n\n  // is used to specify how often (in neutron blocks) the query must be updated\n  uint64 update_period = 5;\n\n  // is the signer of the message\n  string sender = 6;\n}\n\nmessage KVKey {\n  // Path (storage prefix) to the storage where you want to read value by key (usually name of cosmos-sdk module: 'staking', 'bank', etc.)\n  string path = 1;\n  // Key you want to read from the storage\n  bytes key = 2;\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," the maximum allowed number of KVKey values for a single InterchainQuery equals to 32.")),(0,a.kt)("p",null,"Currently ",(0,a.kt)("inlineCode",{parentName:"p"},"query_type")," can take the following values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"kv")," - query ",(0,a.kt)("strong",{parentName:"p"},"values")," from Cosmos-SDK KV-storage on remote chain which are stored under some ",(0,a.kt)("strong",{parentName:"p"},"keys"),". In this case ",(0,a.kt)("inlineCode",{parentName:"p"},"kv_keys")," must be filled in.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"tx")," - query to search for transactions on remote chain. ",(0,a.kt)("inlineCode",{parentName:"p"},"transactions_filter")," describes a filter by which the ",(0,a.kt)("a",{parentName:"p",href:"/relaying/icq-relayer"},"ICQ relayer")," will perform the transactions search. It has the following format:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[{"field": "{eventType}.{attributeKey}", "val": "{attributeValue}", "op": "gte"}, ...]\n')),(0,a.kt)("p",null,"Maximum allowed amount of filters is 32. Supplying more filters than allowed will return an error."),(0,a.kt)("p",null,"Supported operators:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eq")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lte")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gte"))),(0,a.kt)("p",null,"The ICQ relayer can easily parse this format and compose it into usual ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/v0.33/app-dev/indexing-transactions.html#querying-transactions"},"Tendermint syntax")," for searching transactions."),(0,a.kt)("p",null,"For instance, this query to search all transfer transactions with amount greater than 42:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[{"field": "transfer.amount", "op": "gt", "val": 42}, {"field": "message.module", "op": "eq", "val": "bank"}]\n')),(0,a.kt)("p",null,"will be converted by the ICQ relayer into a usual Tendermint search string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"transfer.amount" > 42 AND "message.module" = "bank"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MsgRegisterInterchainQuery")," returns ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/4313d35f8082dc124c5fe9491870720bbd3a5052/proto/interchainqueries/tx.proto#L42"},(0,a.kt)("inlineCode",{parentName:"a"},"MsgRegisterInterchainQueryResponse"))," where ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is unique identifier of newly registered interchain query on success:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgRegisterInterchainQueryResponse { \n  uint64 id = 1; \n}\n")),(0,a.kt)("h4",{id:"state-modifications"},"State modifications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"increments last registered query id;"),(0,a.kt)("li",{parentName:"ul"},"generates new ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/c8503c3c17df3c5ca24abeeafaba9123c28395ac/proto/interchainqueries/genesis.proto#L10"},"RegisteredQuery"),";"),(0,a.kt)("li",{parentName:"ul"},"save the record in storage under incremented query id;")),(0,a.kt)("h4",{id:"events"},"Events"),(0,a.kt)("p",null,"Emits ",(0,a.kt)("a",{parentName:"p",href:"/neutron/interchain-queries/events#eventtypeneutronmessage"},(0,a.kt)("inlineCode",{parentName:"a"},"EventTypeNeutonMessage"))," with ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," equals ",(0,a.kt)("inlineCode",{parentName:"p"},"query_updated"),"."),(0,a.kt)("h3",{id:"update-interchain-query"},"Update Interchain Query"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," as well as for query registration, for query updates the maximum allowed number of KVKey values for a single InterchainQuery equals to 32.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/dd812d6a05f4036a789cdb4b895020e73543702e/proto/interchainqueries/tx.proto#L111"},(0,a.kt)("inlineCode",{parentName:"a"},"MsgUpdateInterchainQueryRequest"))," can be submitted only by the owner of corresponding Interchain Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgUpdateInterchainQueryRequest {\n  uint64 query_id = 1;\n  repeated KVKey new_keys = 2;\n  uint64 new_update_period = 3;\n  string new_transactions_filter = 4;\n  string sender = 5; // is the signer of the message and owner of the corresponding ICQ\n}\n")),(0,a.kt)("p",null,"Returns just an empty ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/dd812d6a05f4036a789cdb4b895020e73543702e/proto/interchainqueries/tx.proto#L117"},(0,a.kt)("inlineCode",{parentName:"a"},"MsgUpdateInterchainQueryResponse"))," on success:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgUpdateInterchainQueryResponse {\n}\n")),(0,a.kt)("h4",{id:"state-modifications-1"},"State modifications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/dd812d6a05f4036a789cdb4b895020e73543702e/x/interchainqueries/keeper/msg_server.go#L130"},"Updates")," a corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},"RegisteredQuery")," structure.")),(0,a.kt)("h4",{id:"events-1"},"Events"),(0,a.kt)("p",null,"Emits ",(0,a.kt)("a",{parentName:"p",href:"/neutron/interchain-queries/events#eventtypeneutronmessage"},(0,a.kt)("inlineCode",{parentName:"a"},"EventTypeNeutonMessage"))," with ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," equals ",(0,a.kt)("inlineCode",{parentName:"p"},"query_updated"),"."),(0,a.kt)("h3",{id:"remove-interchain-query"},"Remove Interchain Query"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/dd812d6a05f4036a789cdb4b895020e73543702e/proto/interchainqueries/tx.proto#L104"},(0,a.kt)("inlineCode",{parentName:"a"},"MsgRemoveInterchainQueryRequest"))," can be submitted only by the owner of corresponding Interchain Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgRemoveInterchainQueryRequest {\n  uint64 query_id = 1;\n  string sender = 2; // is the signer of the message and the owner of corresponding ICQ\n}\n")),(0,a.kt)("p",null,"Returns just an empty ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/dd812d6a05f4036a789cdb4b895020e73543702e/proto/interchainqueries/tx.proto#L108"},(0,a.kt)("inlineCode",{parentName:"a"},"MsgRemoveInterchainQueryResponse"))," on success:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgRemoveInterchainQueryResponse {\n}\n")),(0,a.kt)("h4",{id:"state-modifications-2"},"State modifications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/dd812d6a05f4036a789cdb4b895020e73543702e/x/interchainqueries/keeper/msg_server.go#L93"},"Removes")," a corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},"RegisteredQuery")," structure."),(0,a.kt)("li",{parentName:"ul"},"Also ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/dd812d6a05f4036a789cdb4b895020e73543702e/x/interchainqueries/keeper/msg_server.go#L94"},"removes")," result for the ICQ if it's a KV type.")),(0,a.kt)("h4",{id:"events-2"},"Events"),(0,a.kt)("p",null,"Emits ",(0,a.kt)("a",{parentName:"p",href:"/neutron/interchain-queries/events#eventtypeneutronmessage"},(0,a.kt)("inlineCode",{parentName:"a"},"EventTypeNeutonMessage"))," with ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," equals ",(0,a.kt)("inlineCode",{parentName:"p"},"query_removed"),"."),(0,a.kt)("h3",{id:"submit-query-result"},"Submit Query Result"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/4313d35f8082dc124c5fe9491870720bbd3a5052/proto/interchainqueries/tx.proto#L44"},(0,a.kt)("inlineCode",{parentName:"a"},"MsgSubmitQueryResult"))," can be submitted by any Neutron account via ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgSubmitQueryResult")," transaction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgSubmitQueryResult {\n  uint64 query_id = 1;\n  string sender = 2;\n\n  // is the IBC client ID for an IBC connection between Neutron chain and target chain (where the result was obtained from)\n  string client_id = 3;\n  QueryResult result = 4;\n}\n\nmessage QueryResult {\n  repeated StorageValue kv_results = 1;\n  Block block = 2;\n  uint64 height = 3;\n  uint64 revision = 4;\n  bool allow_kv_callbacks = 5;\n}\n\nmessage StorageValue {\n  // is the substore name (acc, staking, etc.)\n  string storage_prefix = 1;\n\n  // is the key in IAVL store\n  bytes key = 2;\n\n  // is the value in IAVL store\n  bytes value = 3;\n\n  // is the Merkle Proof which proves existence of key-value pair in IAVL storage\n  tendermint.crypto.ProofOps Proof = 4;\n}\n\nmessage Block {\n  // We need to know block X+1 to verify response of transaction for block X\n  // since LastResultsHash is root hash of all results from the txs from the previous block\n  google.protobuf.Any next_block_header = 1;\n\n  // We need to know block X to verify inclusion of transaction for block X\n  google.protobuf.Any header = 2;\n\n  TxValue tx = 3;\n}\n\nmessage TxValue {\n  tendermint.abci.ResponseDeliverTx response = 1;\n\n  // is the Merkle Proof which proves existence of response in block with height next_block_header.Height\n  tendermint.crypto.Proof delivery_proof = 2;\n\n  // is the Merkle Proof which proves existence of data in block with height header.Height\n  tendermint.crypto.Proof inclusion_proof = 3;\n\n  // is body of the transaction\n  bytes data = 4;\n}\n")),(0,a.kt)("p",null,"Returns just an empty ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/4313d35f8082dc124c5fe9491870720bbd3a5052/proto/interchainqueries/tx.proto#L99"},(0,a.kt)("inlineCode",{parentName:"a"},"MsgSubmitQueryResultResponse"))," on success:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgSubmitQueryResultResponse {}\n")),(0,a.kt)("h4",{id:"state-modifications-3"},"State modifications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"get registered interchain query info by ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgSubmitQueryResult.query_id"),";"),(0,a.kt)("li",{parentName:"ul"},"for every ",(0,a.kt)("inlineCode",{parentName:"li"},"result")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgSubmitQueryResult.result.kv_results"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"read IBC connection consensus state from IBC keeper storage with ",(0,a.kt)("inlineCode",{parentName:"li"},"registered_query.ConnectionID"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgSubmitQueryResult.result.revision"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgSubmitQueryResult.result.height+1"),";"),(0,a.kt)("li",{parentName:"ul"},"verify ",(0,a.kt)("inlineCode",{parentName:"li"},"result.Proof")," with Merkle Root Hash from consensus state;"))),(0,a.kt)("li",{parentName:"ul"},"save ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgSubmitQueryResult.result.kv_results")," to the storage:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"clear ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgSubmitQueryResult.result")," from the proofs, Neutron doesn't need them anymore;"),(0,a.kt)("li",{parentName:"ul"},"save cleared result to storage with key ",(0,a.kt)("inlineCode",{parentName:"li"},"registered_query.id"),";"),(0,a.kt)("li",{parentName:"ul"},"set ",(0,a.kt)("inlineCode",{parentName:"li"},"registered_query.last_submitted_result_remote_height")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"result.height"),";"),(0,a.kt)("li",{parentName:"ul"},"set ",(0,a.kt)("inlineCode",{parentName:"li"},"registered_query.last_submitted_result_local_height")," to the current Neutron height;"))),(0,a.kt)("li",{parentName:"ul"},"callback ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgSubmitQueryResult.result.kv_results")," to thr appropriate smart-contract if needed;"),(0,a.kt)("li",{parentName:"ul"},"for every ",(0,a.kt)("inlineCode",{parentName:"li"},"block")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgSubmitQueryResult.result.blocks"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"verify ",(0,a.kt)("inlineCode",{parentName:"li"},"block.next_block_header")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"block.header")," by calling ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/4313d35f8082dc124c5fe9491870720bbd3a5052/x/interchainqueries/keeper/process_block_results.go#L63"},(0,a.kt)("inlineCode",{parentName:"a"},"ibcClientKeeper.UpdateClient(header)")),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/4313d35f8082dc124c5fe9491870720bbd3a5052/x/interchainqueries/keeper/process_block_results.go#L155"},"verify")," ",(0,a.kt)("inlineCode",{parentName:"li"},"block.txs")," with verified headers;"))),(0,a.kt)("li",{parentName:"ul"},"process every ",(0,a.kt)("inlineCode",{parentName:"li"},"transaction")," in every ",(0,a.kt)("inlineCode",{parentName:"li"},"block")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgSubmitQueryResult.result.blocks"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/4313d35f8082dc124c5fe9491870720bbd3a5052/x/interchainqueries/keeper/process_block_results.go#L125"},"check")," transaction was not processed previously to avoid double submitting"),(0,a.kt)("li",{parentName:"ul"},"save generated record to the storage with composite key ",(0,a.kt)("inlineCode",{parentName:"li"},"bigEndianBytes(registered_query.id) + bigEndianBytes(last_submitted_transaction_id")," prefixed by ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/c8503c3c17df3c5ca24abeeafaba9123c28395ac/x/interchainqueries/types/keys.go#L33"},(0,a.kt)("inlineCode",{parentName:"a"},"SubmittedTxKey")),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/4313d35f8082dc124c5fe9491870720bbd3a5052/x/interchainqueries/keeper/process_block_results.go#L134"},"callback")," transaction to the appropriate smart-contract;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/4313d35f8082dc124c5fe9491870720bbd3a5052/x/interchainqueries/keeper/process_block_results.go#L141"},"save")," transaction's hash to the storage to approach double-submission preventing mechanis,")))))}c.isMDXComponent=!0}}]);