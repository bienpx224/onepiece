pragma solidity ^0.8.10;

import ".././@openzeppelin/contracts/token/ERC20/IERC20.sol";

// Contract này viết lại từ đầu các function ERC20

contract OneToken is IERC20{
    uint256 private constant MAX_UINT256 = 2**256-1;
    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowed;

    string public name;
    string public symbol;
    uint256 public _totalSupply;
    uint8 public decimals; 

    constructor(
        uint256 _initialAmount,
        string memory _tokenName,
        uint8 _decimalUnits,
        string memory _tokenSymbol
        )
    {
            balances[msg.sender] = _initialAmount;
            _totalSupply = _initialAmount;
            name = _tokenName;
            decimals = _decimalUnits;
            symbol = _tokenSymbol;
    }

    function transfer(address _to, uint _value) public override returns(bool success){
        require(balances[msg.sender] >= _value);
        balances[_to] += _value;
        balances[msg.sender] -= _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from,address _to,uint256 _value) public override returns(bool success){
        uint256 allowance_ = allowed[_from][msg.sender];
        require(balances[_from] >= _value && allowance_ >= _value);
        balances[_from] -= _value;
        balances[_to] += _value;
        if(allowance_ < MAX_UINT256){
            allowed[_from][msg.sender] -= _value;
        }
        emit Transfer(_from, _to, _value);
        return true;
    }

    function allowance(address _owner, address _spender) public view override returns(uint256 remaining){
        return allowed[_owner][_spender];
    }

    function approve(address _spender, uint256 _value) public override returns(bool success){
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function balanceOf( address _address) public view override returns(uint256 balance){
        return balances[_address];
    } 
    
    function totalSupply() public view override returns(uint256 amount){
        return _totalSupply;
    }

}
