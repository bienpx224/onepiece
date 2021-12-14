pragma solidity ^0.8.10;

import "./OnepiToken.sol";

contract OnepiCharacter {
    event NewCharacter(uint256 indexed character, address _address);

    string[] typeToName = [
        "Soldier",
        "Chopper",
        "Nami",
        "Franky",
        "Robin",
        "Brook",
        "Usopp",
        "Sanji",
        "Zoro",
        "Luffy"
    ];
    struct Character {
        string name; // name of character: Luffy, Nami, Zoro, Usopp, Brook, Robin, Chopper, Sanji, Franky
        uint256 power; // power of character created random 100 - 300, add random 30 - 70 each level up
        uint256 readyTime; // each 5p
        uint16 xp;
        uint16 winCount;
        uint16 lossCount;
        uint16 level; // 1-xxx.
        uint8 typeCharacter; // 9: Luffy, 8: Zoro, 7 Sanji, 6 Usopp, 5 Brook, 4 Robin, 3 Franky, 2 Nami, 1 Chopper , 0: Soldier
    }
    address private owner;
    uint cooldownTime = 2 minutes;
    uint randomEnemiesFee = 0.001 ether;
    uint nonce = 0;

    Character[] public characters;

    mapping(uint256 => address) public characterToOwner;
    mapping(address => uint256) ownerCharacterCount;

    constructor(){
        owner = msg.sender;
    }

    function createRandomCharacter() public {
        require(ownerCharacterCount[msg.sender] == 0);
        _createRandomCharacter();
    }

    function _createRandomCharacter() internal {
        uint8 randTypeCharacter = uint8(_generateRandom(10));
        uint256 randPower = _randomMinMax(300, 700);
        randPower = randPower + (randTypeCharacter * 30);
        uint256 readyTime = block.timestamp;
        uint16 xp = 0;
        uint16 winCount = 0;
        uint16 lossCount = 0;
        uint16 level = 1;
        uint256 id = characters.length;
        // Character memory char = Character(typeToName[randTypeCharacter],randPower,readyTime,xp,winCount,lossCount,level,randTypeCharacter);
        characters.push(
            Character(
                typeToName[randTypeCharacter],
                randPower,
                readyTime,
                xp,
                winCount,
                lossCount,
                level,
                randTypeCharacter
            )
        );
        characterToOwner[id] = msg.sender;
        ownerCharacterCount[msg.sender]++;
        emit NewCharacter(id, msg.sender);
    }

    function getCharactersByOwner(address _address)
        external
        view
        returns (uint256[] memory)
    {
        uint256[] memory result = new uint256[](ownerCharacterCount[_address]);
        uint256 counter = 0;
        for (uint256 i = 0; i < characters.length; i++) {
            if (characterToOwner[i] == _address) {
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }

    // Factory: random from 1 -> 9
    function _generateRandom(uint32 modulus) private view returns (uint256) {
        uint256 randomHash = uint256(
            keccak256(
                abi.encodePacked(block.difficulty, block.timestamp, msg.sender)
            )
        );
        uint256 rand = randomHash % modulus;
        return rand == 0 ? rand + 1 : rand;
    }
    // Factory : Random from min to max
    function _randomMinMax(uint min, uint max) private view returns (uint) {
        // inclusive,inclusive (don't use absolute min and max values of uint256)
        // deterministic based on seed provided
        uint seed = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender)));
        uint diff = max-min+1;
        uint randomVar = uint(keccak256(abi.encodePacked(seed))) % diff;
        randomVar = randomVar+min;
        return randomVar;
    }

    // start readyTime from now
    function _triggerCooldown(Character storage _character) internal {
        _character.readyTime = uint16(block.timestamp + cooldownTime);
    }

    function _isReady(Character storage _character)
        internal
        view
        returns (bool)
    {
        return (_character.readyTime <= block.timestamp);
    }

    // Lấy thời gian còn lại của character, yêu cầu character đó phải đúng là của msg.sender
    function getReadyTimeCharacter(uint _characterId) external view returns(uint ){
        require(msg.sender == characterToOwner[_characterId]);
        return characters[_characterId].readyTime;
    } 

    function payGetEnemiesRandom(uint _characterId) external payable returns(Character[] memory listEnemy){
        require(msg.value == randomEnemiesFee);
        
    }

    modifier onlyOwnerOf(uint256 _characterId) {
        require(msg.sender == characterToOwner[_characterId]);
        _;
    }
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}
