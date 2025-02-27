export const suiQuestions = [
  {
    question: "When was the Sui Blockchain created?",
    options: ["2020", "2021", "2022", "2023"],
    correctAnswer: "2021",
    explanation:
      "Sui was founded in 2021 by former Meta (Facebook) employees who worked on the Diem blockchain project.",
  },
  {
    question: "What programming language is used to write smart contracts on Sui?",
    options: ["Solidity", "Move", "Rust", "Go"],
    correctAnswer: "Move",
    explanation:
      "Sui uses the Move programming language, which was originally developed for the Diem blockchain and is designed for safe resource management.",
  },
  {
    question: "What consensus mechanism does Sui use?",
    options: ["Proof of Work", "Proof of Stake", "Delegated Proof of Stake", "Narwhal and Bullshark"],
    correctAnswer: "Narwhal and Bullshark",
    explanation:
      "Sui uses a combination of Narwhal (for mempool and data availability) and Bullshark (for consensus) to achieve high throughput and low latency.",
  },
  {
    question: "What is the native token of the Sui blockchain?",
    options: ["SUI", "SUIX", "MOVE", "META"],
    correctAnswer: "SUI",
    explanation: "SUI is the native token used for gas fees, staking, and governance on the Sui blockchain.",
  },
  {
    question: "Which company developed the Sui blockchain?",
    options: ["Consensys", "Mysten Labs", "Ava Labs", "Solana Labs"],
    correctAnswer: "Mysten Labs",
    explanation:
      "Sui was developed by Mysten Labs, a company founded by former Meta (Facebook) employees who worked on the Diem blockchain.",
  },
  {
    question: "What makes Sui's transaction processing different from many other blockchains?",
    options: [
      "It uses sharding",
      "It processes all transactions sequentially",
      "It can process independent transactions in parallel",
      "It uses zero-knowledge proofs for all transactions",
    ],
    correctAnswer: "It can process independent transactions in parallel",
    explanation:
      "Sui can process transactions that don't depend on each other in parallel, which significantly increases throughput compared to blockchains that process all transactions sequentially.",
  },
  {
    question: "What is a unique feature of Sui's object model?",
    options: [
      "Objects are immutable",
      "Objects are owned by accounts",
      "Objects can only be created by validators",
      "Objects can only be strings or numbers",
    ],
    correctAnswer: "Objects are owned by accounts",
    explanation:
      "In Sui, objects are owned by accounts, which is different from account-based models like Ethereum where state is associated with contracts.",
  },
  {
    question: "When did Sui launch its mainnet?",
    options: ["January 2022", "May 2023", "December 2023", "It's still in testnet"],
    correctAnswer: "May 2023",
    explanation: "Sui launched its mainnet on May 3, 2023, after extensive testing phases.",
  },
  {
    question: "What is 'causal order' in the context of Sui?",
    options: [
      "The order of transactions in a block",
      "The dependency relationship between transactions",
      "The order of validator consensus",
      "The sequence of smart contract calls",
    ],
    correctAnswer: "The dependency relationship between transactions",
    explanation:
      "Causal order refers to the dependency relationships between transactions. Sui only enforces ordering between transactions that have dependencies, allowing independent transactions to be processed in parallel.",
  },
  {
    question: "What is a 'gas object' in Sui?",
    options: [
      "A special object that pays for transaction fees",
      "An object that stores gas price information",
      "A validator node that processes gas payments",
      "A smart contract that calculates gas fees",
    ],
    correctAnswer: "A special object that pays for transaction fees",
    explanation:
      "In Sui, gas objects are special objects that contain SUI tokens and are used to pay for transaction fees.",
  },
  {
    question: "What is 'shared ownership' in Sui?",
    options: [
      "When multiple accounts own the same object",
      "When validators share transaction fees",
      "When an object can be accessed by anyone",
      "When staking rewards are distributed",
    ],
    correctAnswer: "When an object can be accessed by anyone",
    explanation:
      "In Sui, objects with shared ownership can be accessed and modified by any user, not just the owner, which is useful for public resources and applications.",
  },
  {
    question: "What is a key advantage of the Move programming language used in Sui?",
    options: [
      "It's easier to learn than other languages",
      "It has built-in resource safety",
      "It compiles to WebAssembly",
      "It supports JavaScript libraries",
    ],
    correctAnswer: "It has built-in resource safety",
    explanation:
      "Move has built-in resource safety features that prevent resources from being copied or implicitly discarded, reducing the risk of bugs and vulnerabilities in smart contracts.",
  },
  {
    question: "What is Sui's approach to storage?",
    options: [
      "All data is stored on-chain permanently",
      "Data is automatically deleted after 30 days",
      "Users can choose to pay for long-term storage",
      "All data is stored off-chain with proofs on-chain",
    ],
    correctAnswer: "Users can choose to pay for long-term storage",
    explanation:
      "Sui allows users to pay for long-term storage of their data, giving them control over storage costs and data persistence.",
  },
  {
    question: "What is a 'checkpoint' in Sui?",
    options: [
      "A backup of the blockchain state",
      "A collection of finalized transactions",
      "A point where new validators join",
      "A snapshot used for rollbacks",
    ],
    correctAnswer: "A collection of finalized transactions",
    explanation:
      "In Sui, a checkpoint is a collection of finalized transactions that have been certified by a quorum of validators, representing an agreed-upon state of the blockchain.",
  },
  {
    question: "How does Sui handle transaction finality?",
    options: [
      "Probabilistic finality like Bitcoin",
      "Instant finality with BFT consensus",
      "Finality after 6 block confirmations",
      "Finality requires off-chain verification",
    ],
    correctAnswer: "Instant finality with BFT consensus",
    explanation:
      "Sui provides instant transaction finality through its Byzantine Fault Tolerant (BFT) consensus mechanism, meaning once a transaction is confirmed, it cannot be reversed.",
  },
  {
    question: "What is 'Move-to-Sui' in the context of the Sui ecosystem?",
    options: [
      "A bridge from Ethereum to Sui",
      "A tool to convert Move code from other blockchains to Sui",
      "A migration service for users",
      "A token swap platform",
    ],
    correctAnswer: "A tool to convert Move code from other blockchains to Sui",
    explanation:
      "Move-to-Sui is a tool that helps developers port Move code from other blockchains (like Aptos) to be compatible with Sui's implementation of Move.",
  },
  {
    question: "What is a 'dynamic field' in Sui?",
    options: [
      "A field that changes value automatically",
      "A field that can be added to objects after creation",
      "A field with variable data types",
      "A field that only validators can modify",
    ],
    correctAnswer: "A field that can be added to objects after creation",
    explanation:
      "Dynamic fields in Sui allow developers to add new fields to objects after they've been created, providing flexibility in object design and evolution.",
  },
  {
    question: "What is the role of 'epochs' in Sui's consensus mechanism?",
    options: [
      "They determine block production speed",
      "They define validator set changes and reward distribution",
      "They control gas prices",
      "They limit transaction throughput",
    ],
    correctAnswer: "They define validator set changes and reward distribution",
    explanation:
      "In Sui, epochs are fixed time periods during which the validator set remains constant. At the end of each epoch, validator performance is evaluated, rewards are distributed, and the validator set may change.",
  },
  {
    question: "What is 'sui-move' in the development ecosystem?",
    options: [
      "A Move language variant specific to Sui",
      "A package manager for Move packages",
      "A CLI tool for Sui development",
      "A testing framework for Move contracts",
    ],
    correctAnswer: "A CLI tool for Sui development",
    explanation:
      "sui-move is a command-line interface (CLI) tool that helps developers build, test, and deploy Move packages on the Sui blockchain.",
  },
  {
    question: "How does Sui's transaction model differ from account-based blockchains like Ethereum?",
    options: [
      "Sui uses UTXO model instead of accounts",
      "Sui uses object-centric model instead of accounts",
      "Sui doesn't have smart contracts",
      "Sui only supports native token transfers",
    ],
    correctAnswer: "Sui uses object-centric model instead of accounts",
    explanation:
      "Sui uses an object-centric model where transactions operate directly on objects, unlike account-based blockchains where transactions modify state within smart contracts associated with accounts.",
  },
]

