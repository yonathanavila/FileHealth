
const { ethers } = require("hardhat");
const { chai } = require("chai");

const _tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("FileHealth", function () {

    let buyer, seller, inspector, lender
    let FileHealthNFT

    it("Get signers", async () => {
        let resultSigners = await ethers.getSigners()
        console.log("Result is: ", resultSigners)
    })
})