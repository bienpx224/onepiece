pragma solidity ^0.8.10;

import "./@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 * Based on https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.5.1/contracts/examples/SimpleToken.sol
 */
contract OnepiToken is ERC20 {
    address public admin;
    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor() ERC20("Onepiece Token", "OPT") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
        admin = msg.sender;
        _approve(address(this), msg.sender, totalSupply());
    }

    function mint(address _to, uint _amount) external {
        require(msg.sender == admin, "only admin");
        _mint(_to, _amount);
    }

    function burn(uint _amount) external {
        _burn(msg.sender, _amount);
    }

    function getOwner() external view returns (address){
        return admin;
    }
}