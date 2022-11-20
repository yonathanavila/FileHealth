task("set-doctor", "Register the doctor rol")
    .addParam("contract", "The FileHealth contract")
    .addParam("account", "The address of the account you want to sign")
    .setAction(async (taskArgs) => {
        const contractAddr = taskArgs.contract
        const account = taskArgs.account
        const networkId = network.name
        console.log("Reading FileHealth owned by", account, " on network ", networkId)
        const FileHealth = await ethers.getContractFactory("FileHealth")

        /// @dev Get signer information
        const accounts = await ethers.getSigners()
        const signer = accounts[0]

        /// @dev get the main smart contract
        const simpleCoinContract = new ethers.Contract(contractAddr, FileHealth.interface, account)
        console.log(simpleCoinContract)

    })

module.exports = {}