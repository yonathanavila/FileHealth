// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./../FileHealthNFT.sol";

interface IERC721Custom is IERC721 {
    function safeMint(address _addressToMintNFT, string memory _uri) external;
}
