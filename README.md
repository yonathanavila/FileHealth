# FileHealth
## Decentralized Medical Records


We are FileHealth. We empower people to store, retrieve and share their medical records on FVM. The problem is, there is no global, decentralized platform that grants patients access to a  way to access their medical records. For example, this is a problem when patients travel and need assistance in another country. What better solution than Filecoin? By using Filecoin, we provide our clients with a way to keep their data stored securely, persistently, and decentralized.

First, the user connects with their wallet. After signing up, they mint an updtable NFT of their medical records. This data can then be mutated and updated.

First, we used Solidity to deploy into FVM.

- Contract: https://explorer.glif.io/address/0x86CC4Df2c3694cbaF440aE8aE7af54fef601beC2/?network=wallabynet
- NFT: https://explorer.glif.io/address/0x1955AFB61f8CF5Fc28826A4be19f3F20Ceb3fDd9/?network=wallabynet

For access control, we are implementing using Medusa. The patient is able to grant access by adding the doctor's address. After that, the doctor only needs to input the patient's address in order to retrieve their record. 
 
NEXT.js for the front.

To store the patient's files, we used IPFS, and to mutate them we wanted to implement IPNS.


## Technology used:

- Filecoin API
- Filecoin KIT
- Medusa for Access Control and Privacy
- Hardhat (deployed on FVM)
- IPFS & IPNS(mutable Data)
- Web3 Storage
- Firebase


## Features

- Retrieve Medical Records
- Update Medical Records
- Share Patients Data globally. For example, when travelling and using new doctors.


While the proyect is not finished and the features are not as perfect as we'd like, we plan to take this proyect long term. We believe in the uses cases, and know many people that could be saved by this.