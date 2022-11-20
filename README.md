# FileHealth
## Decentralized Medical Records

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

FileHealth provides secure, global, and private medical records for patients and doctors. Powered by Filecoin, Doctors are able to retrieve and add treatment records.

First, the user connects with their wallet. After signing up, they mint an updtable NFT of their medical records. This data can then be mutated and updated.

For access control, we are implementing using Medusa. The patient is able to grant access by adding the doctor's address. After that, the doctor only needs to input the patient's address in order to retrieve their record. 

In order to mutate data, we plan on using IPNS. 


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