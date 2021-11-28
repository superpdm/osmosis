(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{468:function(s,t,e){"use strict";e.r(t);var n=e(7),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"bank"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bank"}},[s._v("#")]),s._v(" Bank")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("NOTE")]),s._v(" "),e("p",[s._v("Osmosis's Bank module inherits from Cosmos SDK's "),e("a",{attrs:{href:"https://docs.cosmos.network/master/modules/bank/",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("bank")]),e("OutboundLink")],1),s._v(" module. This document is a stub, and covers mainly important Osmosis-specific notes about how it is used.")])]),s._v(" "),e("p",[s._v("The Bank module is the base transactional layer of the Osmosis blockchain: it allows assets to be sent from one "),e("code",[s._v("Account")]),s._v(" to another. Bank defines 2 types of Send-Transactions: "),e("code",[s._v("MsgSend")]),s._v(" and "),e("code",[s._v("MsgMultiSend")]),s._v(". These messages automatically incur a stability fee, which is performed by the "),e("RouterLink",{attrs:{to:"/developing/modules/spec-auth.html#stability-fee"}},[s._v("ante handler in the "),e("code",[s._v("Auth")]),s._v(" module")]),s._v(".")],1),s._v(" "),e("h2",{attrs:{id:"message-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#message-types"}},[s._v("#")]),s._v(" Message Types")]),s._v(" "),e("h3",{attrs:{id:"msgsend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgsend"}},[s._v("#")]),s._v(" MsgSend")]),s._v(" "),e("div",{staticClass:"language-go line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// MsgSend - high level transaction of the coin module")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" MsgSend "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    FromAddress sdk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AccAddress "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"from_address"`')]),s._v("\n    ToAddress   sdk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AccAddress "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"to_address"`')]),s._v("\n    Amount      sdk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Coins      "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"amount"`')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("The Bank module can be used to send coins from one "),e("code",[s._v("Account")]),s._v(" ("),e("code",[s._v("osmosis-")]),s._v(" prefixed account) to another. A "),e("code",[s._v("MsgSend")]),s._v(" is constructed to facilitate the transfer. If the balance of coins in the "),e("code",[s._v("Account")]),s._v(" is insufficient or the recipient "),e("code",[s._v("Account")]),s._v(" is not allowed to receive the funds via Bank module, the transaction fails.")]),s._v(" "),e("h3",{attrs:{id:"msgmultisend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#msgmultisend"}},[s._v("#")]),s._v(" MsgMultiSend")]),s._v(" "),e("div",{staticClass:"language-go line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// MsgMultiSend - high level transaction of the coin module")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" MsgMultiSend "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Inputs  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("Input  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"inputs"`')]),s._v("\n    Outputs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("Output "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"outputs"`')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("The Bank module can be used to send multiple transactions at once. "),e("code",[s._v("Inputs")]),s._v(" contains the incoming transactions, and "),e("code",[s._v("Outputs")]),s._v(" contains the outgoing transactions. The coin balance of the "),e("code",[s._v("Inputs")]),s._v(" and the "),e("code",[s._v("Outputs")]),s._v(" must match exactly. Batching transactions via multisend has the benefit of conserving network bandwidth and gas fees.")]),s._v(" "),e("p",[s._v("If any of the "),e("code",[s._v("Accounts")]),s._v(" fails, then taxes and fees already paid through the transaction is not refunded.")])])}),[],!1,null,null,null);t.default=a.exports}}]);