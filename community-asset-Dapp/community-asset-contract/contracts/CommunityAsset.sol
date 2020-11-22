pragma solidity >=0.4.22 <0.7.0;

import  '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';

contract CommunityAssetContract is ERC1155  {

  address private _administrator;

  string private _communityDID;

  uint256 private _assetIdCount = 0;

  uint256 private _assetTokenIdCount = 0;

  mapping(string => Asset) public _communityAssets;

  mapping(uint256 => string) private _communityAssetsDID;

  struct Asset {
    uint256 assetId;
    string assetDID;
    uint nbrOfAssetTokens;
    uint256 assetTokenId;
  }

  modifier isAdministrator() {
    require(msg.sender == _administrator, "Only administrator role can change administrator!");
    _;
  }

  event administratorChanged(address indexed currentAministrator, address indexed newAdministrator);

  constructor(string memory _uri, string memory communityDID) public ERC1155(_uri) {
      _administrator = msg.sender;
      _communityDID = communityDID;
  }


  function createAsset(string memory assetDID, uint256 nbrOfAssetTokens) public isAdministrator {
    require(!existsAsset(assetDID), "Asset with with DID allready exists in this communitie");

    address administrator = msg.sender;

    _assetIdCount++;
    _assetTokenIdCount ++;

    _communityAssets[assetDID] = Asset(_assetIdCount, assetDID, nbrOfAssetTokens, _assetTokenIdCount);
    _communityAssetsDID[_assetIdCount] = assetDID;

    _mint(administrator, _assetIdCount, 1, ""); // mint asset unique
    _mint(administrator, _assetIdCount, nbrOfAssetTokens, ""); //mint nbrOfAssetTokens for the asset x

  }


  function getNbrOfAssets() public view returns (uint256) {
    return _assetIdCount;
  }


  function existsAsset(string memory assetDID) internal view returns (bool) {
    string memory assetDIDSearch = _communityAssets[assetDID].assetDID;
    return keccak256(abi.encodePacked(assetDIDSearch)) == keccak256(abi.encodePacked(assetDID));
  }

  function administrator() public view returns (address) {
    return _administrator;
  }

  function changeAdministrator(address newAdministrator) public isAdministrator {
    address currentAdministrator = msg.sender;
    _administrator = newAdministrator;
    emit administratorChanged(currentAdministrator, newAdministrator);
  }
}