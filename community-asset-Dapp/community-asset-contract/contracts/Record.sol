pragma solidity >=0.4.22 <0.7.0;

import  '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';

contract Record is ERC1155  {

  uint256 ASSET_TOKEN_COUNT_START = 2**255;
  uint256 ASSET_COUNT_MAX = ASSET_TOKEN_COUNT_START - 1;
  uint256 ASSET_COUNT_START = 0;

  address private _administrator;

  uint256 private _assetIdCount = ASSET_COUNT_START;

  uint256 private _assetTokenIdCount = ASSET_TOKEN_COUNT_START;

  mapping(string => uint256)  private _mintedAssetTokens;  //Link assetDID with assetTokenID

   modifier isAdministrator() {
    require(msg.sender == _administrator, "Only administrator role can perform this action!");
    _;
  } 

  event administratorChanged(address indexed currentAministrator, address indexed newAdministrator);

  event assetMinted(string indexed assetDID, uint256 indexed asssetId, uint256 indexed assetTokenId);

  constructor(string memory _uri) public ERC1155(_uri) {
      _administrator = msg.sender;
  }

  function mintAsset(string memory assetDID) public  {
    require(!assetAllReadyMinted(assetDID), "Asset with with DID is allready minted!");
    require(_assetIdCount < ASSET_COUNT_MAX, "Max number of assets reached!")

    address assetMinter = msg.sender;

    _assetTokenIdCount++;
    _assetIdCount++;

    _mintedAssetTokens[assetDID] = _assetIdCount;

    _mint(assetMinter, _assetIdCount, 1, ""); //mint nbrOfAssetTokens for the asset x 
    _mint(assetMinter, _assetTokenIdCount, 1000, ""); //mint nbrOfAssetTokens for the asset x

    emit assetMinted(assetDID, _assetIdCount, _assetTokenIdCount);

  }

  function getNbrOfAssets() public view returns (uint256) {
    return _assetIdCount;
  }


  function assetAllReadyMinted(string memory assetDID) internal view returns (bool) {
    uint256 assetTokenId = _mintedAssetTokens[assetDID];
    return assetTokenId > 0;
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