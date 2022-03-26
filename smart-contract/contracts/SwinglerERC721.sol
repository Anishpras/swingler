// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SwinglerERC721 is ERC721URIStorage {
    uint256 SWINGLER_TOKEN_ID;
    constructor() ERC721("SwinglerNFT", "SN"){}

    function mintNFT(address _userone, address _userTwo, string memory tokenURI) public {
        _mint(_userone, SWINGLER_TOKEN_ID);
        _setTokenURI(SWINGLER_TOKEN_ID, tokenURI);
        SWINGLER_TOKEN_ID++;

        _mint(_userTwo, SWINGLER_TOKEN_ID);
        _setTokenURI(SWINGLER_TOKEN_ID, tokenURI);
        SWINGLER_TOKEN_ID++;
    }
}
