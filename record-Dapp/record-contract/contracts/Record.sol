pragma solidity >=0.4.22 <0.8.0;

import  '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';

contract Record is ERC1155  {
 using SafeMath for uint256;

  uint256 ASSET_TOKEN_ADD = 1;

  uint256 private _assetTokenIdCount = 0;

  mapping(string => uint256)  private _mintedAssetTokens;  //Link assetDID with assetTokenID

  event assetMinted(string indexed assetRef, uint256 indexed assetTokenId);

  constructor(string memory _uri) public ERC1155(_uri) {
    
  }

  function mintAsset(string memory assetRef) public  {
    require(!assetAllReadyMinted(assetRef), "Asset with with DID is allready minted!");

    address assetMinter = msg.sender;

    _assetTokenIdCount = _assetTokenIdCount.add(ASSET_TOKEN_ADD);
    _mintedAssetTokens[assetRef] = _assetTokenIdCount; //Link asset with tokens

    _mint(assetMinter, _assetTokenIdCount, 1000, ""); //mint nbrOfAssetTokens for the asset x

    emit assetMinted(assetRef, _assetTokenIdCount);

  }

  function getAssetTokenIdForAsset(string memory assetRef) public view returns (uint256) {
    uint256 assetTokenId = _mintedAssetTokens[assetRef];
    return assetTokenId;
  }

  function assetAllReadyMinted(string memory assetRef) internal view returns (bool) {
    uint256 assetTokenId = _mintedAssetTokens[assetRef];
    return assetTokenId > 0;
  }
  
}