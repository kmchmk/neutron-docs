/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        {
            label: 'Neutron',
            type: 'category',
            items: [
                'neutron/overview',
                'neutron/faq',
                {
                    label: 'Build and run',
                    type: 'category',
                    items: [
                        'neutron/build-and-run/overview',
                        'neutron/build-and-run/neutron-build',
                        'neutron/build-and-run/neutron-docker',
                        'neutron/build-and-run/cosmopark',
                        'neutron/build-and-run/localnet'
                    ],
                },
                'neutron/contribute',
                'neutron/consumer-chain-launch',
                {
                    label: 'Neutron DAO',
                    type: 'category',
                    items: [
                        'neutron/dao/overview',
                        'neutron/dao/overrules',
                        'neutron/dao/dao-dao-diff',
                    ],
                },
                {
                    label: 'Tokenomics',
                    type: 'category',
                    items: [
                        'neutron/tokenomics/overview',
                        {
                            type: 'category',
                            label: 'Reserve',
                            items: [
                                'neutron/tokenomics/reserve/overview',
                                'neutron/tokenomics/reserve/messages',
                                'neutron/tokenomics/reserve/queries'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Distribution',
                            items: [
                                'neutron/tokenomics/distribution/overview',
                                'neutron/tokenomics/distribution/messages',
                                'neutron/tokenomics/distribution/queries'
                            ]
                        },
                        {
                            label: 'Token Generation Event',
                            type: 'category',
                            items: [
                                'neutron/token-generation-event/overview',
                                {
                                    type: 'category',
                                    label: 'Airdrop',
                                    items: [
                                        'neutron/token-generation-event/airdrop/overview',
                                        'neutron/token-generation-event/airdrop/messages',
                                        'neutron/token-generation-event/airdrop/queries',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Auction',
                                    items: [
                                        'neutron/token-generation-event/auction/overview',
                                        'neutron/token-generation-event/auction/messages',
                                        'neutron/token-generation-event/auction/queries',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Credits',
                                    items: [
                                        'neutron/token-generation-event/credits/overview',
                                        'neutron/token-generation-event/credits/messages',
                                        'neutron/token-generation-event/credits/queries',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Lockdrop',
                                    items: [
                                        'neutron/token-generation-event/lockdrop/overview',
                                        'neutron/token-generation-event/lockdrop/messages',
                                        'neutron/token-generation-event/lockdrop/queries',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'LP Vesting',
                                    items: [
                                        'neutron/token-generation-event/vesting-lp/overview',
                                        'neutron/token-generation-event/vesting-lp/messages',
                                        'neutron/token-generation-event/vesting-lp/queries',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Investors Vesting',
                                    items: [
                                        'neutron/token-generation-event/investors-vesting/overview',
                                        'neutron/token-generation-event/investors-vesting/messages',
                                        'neutron/token-generation-event/investors-vesting/queries',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Oracle',
                                    items: [
                                        'neutron/token-generation-event/oracle/overview',
                                        'neutron/token-generation-event/oracle/messages',
                                        'neutron/token-generation-event/oracle/queries',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Band Price Feed',
                                    items: [
                                        'neutron/token-generation-event/price-feed/overview',
                                        'neutron/token-generation-event/price-feed/messages',
                                        'neutron/token-generation-event/price-feed/queries',
                                    ]
                                },
                            ],
                        }
                    ]
                },
                {
                    label: 'Modules',
                    type: 'category',
                    items: [
                        {
                            label: 'Admin module',
                            type: 'category',
                            items: [
                                'neutron/modules/admin-module/overview',
                                'neutron/modules/admin-module/messages',
                            ]
                        },
                        {
                            label: 'Interchain Transactions',
                            type: 'category',
                            items: [
                                'neutron/modules/interchain-txs/overview',
                                'neutron/modules/interchain-txs/messages',
                                'neutron/modules/interchain-txs/client',
                                'neutron/modules/interchain-txs/state',
                                'neutron/modules/interchain-txs/events'
                            ]
                        },
                        {
                            label: 'Interchain Queries',
                            type: 'category',
                            items: [
                                'neutron/modules/interchain-queries/overview',
                                'neutron/modules/interchain-queries/messages',
                                'neutron/modules/interchain-queries/client',
                                'neutron/modules/interchain-queries/state',
                                'neutron/modules/interchain-queries/events'
                            ]
                        },
                        {
                            label: 'Transfer',
                            type: 'category',
                            items: [
                                'neutron/modules/transfer/overview',
                                'neutron/modules/transfer/state',
                                'neutron/modules/transfer/messages'
                            ]
                        },
                        {
                            label: 'Contract Manager',
                            type: 'category',
                            items: [
                                'neutron/modules/contract-manager/overview',
                                'neutron/modules/contract-manager/client',
                                'neutron/modules/contract-manager/state'
                            ]
                        },
                        {
                            label: 'Fee Refunder',
                            type: 'category',
                            items: [
                                'neutron/modules/feerefunder/overview',
                                'neutron/modules/feerefunder/client',
                                'neutron/modules/feerefunder/state',
                                'neutron/modules/feerefunder/events'
                            ]
                        },
                        {
                            label: 'Fee Burner',
                            type: 'category',
                            items: [
                                'neutron/modules/feeburner/overview',
                                'neutron/modules/feeburner/client',
                                'neutron/modules/feeburner/state'
                            ]
                        },
                        {
                            label: 'Cron',
                            type: 'category',
                            items: [
                                'neutron/modules/cron/overview',
                                'neutron/modules/cron/client',
                                'neutron/modules/cron/state',
                                'neutron/modules/cron/metrics'
                            ]
                        },
                        {
                            label: '3rd Party Modules',
                            type: 'category',
                            items: [
                                {
                                    label: 'Cosmos Hub',
                                    type: 'category',
                                    items: [
                                        {
                                            label: 'Global Fee',
                                            type: 'category',
                                            items: [
                                                'neutron/modules/3rdparty/cosmoshub/globalfee/overview',
                                            ]
                                        }
                                    ],
                                },
                                {
                                    type: 'category',
                                    label: 'Osmosis',
                                    items: [
                                        {
                                            label: 'Token Factory',
                                            type: 'category',
                                            items: [
                                                'neutron/modules/3rdparty/osmosis/tokenfactory/overview',
                                                'neutron/modules/3rdparty/osmosis/tokenfactory/messages'
                                            ]
                                        },
                                        {
                                            label: 'IBC Hooks',
                                            type: 'category',
                                            items: [
                                                'neutron/modules/3rdparty/osmosis/ibc-hooks/overview'
                                            ]
                                        }
                                    ],
                                },
                                {
                                    label: 'Strangelove',
                                    type: 'category',
                                    items: [
                                        {
                                            label: 'Packet Forward Middleware',
                                            type: 'category',
                                            items: [
                                                'neutron/modules/3rdparty/strangelove/packet-forward-middleware/overview',
                                            ]
                                        }
                                    ],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            label: 'Relaying',
            type: 'category',
            items: [
                'relaying/ibc-relayer',
                'relaying/icq-relayer',
                'relaying/target-chain',
            ],
        },
        {
            label: 'Tutorials',
            type: 'category',
            items: [
                'tutorials/cosmwasm-ica',
                'tutorials/cosmwasm-icq',
                'tutorials/integration-tests',
                'tutorials/cosmwasm-remix'
            ],
        },
        {
            label: 'Deployed contracts',
            type: 'category',
            items: [
                'deployment/testnet',
                'deployment/mainnet',
            ],
        },
    ]
};

module.exports = sidebars;
