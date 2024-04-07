// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PDRSmartContract2 is IERC721Receiver, Ownable {
    struct Token {
        uint256 tokenId;
        address tokenAddress;
    }

    // 수신한 NFT를 저장하는 배열
    Token[] public receivedTokens;

    // NFT를 수신할 때 호출되는 함수
    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external override returns (bytes4) {
        // 수신한 NFT 정보를 저장
        receivedTokens.push(Token({
            tokenId: tokenId,
            tokenAddress: msg.sender
        }));

        return this.onERC721Received.selector;
    }

    // 수신한 토큰 목록을 반환하는 함수
    function getReceivedTokens() public view returns (Token[] memory) {
        return receivedTokens;
    }

    // 외부 NFT를 전송하는 함수
    function transferExternalToken(address tokenAddress, address from, address to, uint256 tokenId) public onlyOwner {
        ERC721(tokenAddress).safeTransferFrom(from, to, tokenId);
    }
}
