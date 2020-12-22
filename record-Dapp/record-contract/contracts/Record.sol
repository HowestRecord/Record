// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';

contract Record is ERC1155  {
  enum AssetShareTokenStatus {MINTED, DIVIDED}

  struct AssetShareToken {
    uint256 id;
    address creator;
    AssetShareTokenStatus status;
    uint256 shares;
    string metadataUri;
    address[] holders;
  }

  mapping(string => AssetShareToken) public assetShareTokens;

  string[] public assetRefs;

  mapping(address => mapping(uint256 => bool)) private _ownedAssetShares;

  mapping(uint256 => string) private _tokenAssetRefs;

  constructor(string memory _uri) ERC1155(_uri) {}

  modifier isCreatorOrApproved(address account) {
    require(account == msg.sender  || isApprovedForAll(account, msg.sender),
        "ERC1155: caller is not creator nor approved");
    _;
  }

  function mintAssetShares(
    string memory _assetRef, 
    string memory _uri) 
    public  
  {
    require(!_isAssetSharesExists(_assetRef), "RECORD: Shares for asset allready minted");

    assetRefs.push(_assetRef);

    address[] memory adr;
    AssetShareToken memory assetShareToken  = AssetShareToken(assetRefs.length, msg.sender, AssetShareTokenStatus.MINTED, 1000, _uri, adr);

    assetShareTokens[_assetRef] = assetShareToken;

    _tokenAssetRefs[assetShareToken.id] = _assetRef;


    _mint(assetShareToken.creator, assetShareToken.id, assetShareToken.shares, ""); 

  }

  function divideAssetShares(
      address creator,
      address[] memory _shareHolders,
      string memory _assetRef,
      uint256[] memory _amounts,
      bytes memory _data) 
      public  
      isCreatorOrApproved(creator)
  {
    require(_shareHolders.length == _amounts.length, "RECORD: ShareHolders and amounts length mismatch");
    require(_isAssetSharesExists(_assetRef), "RECORD: Asset not minted yet");
    require(!_isAssetSharesDivided(_assetRef), "RECORD: Shares for Asset allready divided");
    require(_isAllSharesDivided(_amounts), "RECORD: All shares should be divided correctly");

    assetShareTokens[_assetRef].status = AssetShareTokenStatus.DIVIDED;

    for (uint256 i = 0; i < _shareHolders.length; i++) {
      transfer(creator, _shareHolders[i], _assetRef, _amounts[i], _data);
    }

  }

  function transfer(
      address _from, 
      address _to, 
      string memory _assetRef, 
      uint256 _amount, 
      bytes memory _data) 
      public 
  {
    uint256 id = assetShareTokens[_assetRef].id;
    super.safeTransferFrom(_from, _to, id, _amount, _data);
  }

  function transferBatch(
      address _from,
      address _to, 
      string[] memory _assetRefs,
      uint256[] memory _amounts,
      bytes memory _data) 
      public 
  {
    uint256[] memory ids = _idsByAssetRefs(_assetRefs);
    super.safeBatchTransferFrom(_from, _to, ids, _amounts, _data);
  }

  function balance(
      address _owner, 
      string memory _asserRef) 
      public 
      view 
      returns (uint256)  
  {
    return super.balanceOf(_owner, assetShareTokens[_asserRef].id);
  }

  function balanceBatch(
    address[] memory _owners, 
    string[] memory _assetRefs) 
    public 
    view 
    returns (uint256[] memory)
  {
    return super.balanceOfBatch(_owners, _idsByAssetRefs(_assetRefs));
  }

  function mintedAssetSharesBy(
    address creator)
    public
    view
    isCreatorOrApproved(creator)
    returns (string[] memory mintedAssets)

  {
    string[] memory created = new string[](assetRefs.length);

    uint256 mintedCount = 0;

    for (uint256 i = 0; i < assetRefs.length; i++) {
      if (assetShareTokens[assetRefs[i]].status == AssetShareTokenStatus.MINTED 
          && assetShareTokens[assetRefs[i]].creator == creator) {
        created[mintedCount++] = assetRefs[i];
      }
    }

    mintedAssets = new string[](mintedCount);

    for (uint256 i = 0; i < mintedCount; i++) {
      mintedAssets[i] = created[i];
    }
     
  }

   function ownedAssetSharesWithBalances(
    address owner)
    public
    view
    returns (string[] memory ownedAssets,  uint256[] memory ownedBalances)
  {
    require(owner == msg.sender, "RECORD: Only allowed by owner of asset shares");
    string[] memory owned = new string[](assetRefs.length);

    uint256 ownedCount = 0;

    for (uint256 i = 0; i < assetRefs.length; i++) {
      if(assetShareTokens[assetRefs[i]].status == AssetShareTokenStatus.DIVIDED
         && _ownedAssetShares[owner][assetShareTokens[assetRefs[i]].id] 
         && balanceOf(owner, assetShareTokens[assetRefs[i]].id) > 0
         ){
        owned[ownedCount++] = assetRefs[i];
      }
    }

    ownedAssets = new string[](ownedCount);
    ownedBalances= new uint256[](ownedCount);

    for (uint256 i = 0; i < ownedCount; i++) {
      ownedAssets[i] = owned[i];
      ownedBalances[i] = balance(owner, owned[i]);
    }
     
  }

  function allDividedAssets()
    public 
    view 
    returns (string[] 
    memory dividedAssets) 
  {
    string[] memory created = new string[](assetRefs.length);

    uint256 mintedCount = 0;

    for (uint256 i = 0; i < assetRefs.length; i++) {
      if (assetShareTokens[assetRefs[i]].status == AssetShareTokenStatus.DIVIDED) {
        created[mintedCount++] = assetRefs[i];
      }
    }

    dividedAssets = new string[](mintedCount);

    for (uint256 i = 0; i < mintedCount; i++) {
      dividedAssets[i] = created[i];
    }
  }

  function shareHoldersWithBalance(
    string memory _assetRef) 
    public view 
    returns (address[] memory,
    uint256[] memory)
  {
    require(_isAssetSharesExists(_assetRef), "RECORD: Asset not minted yet");

    AssetShareToken memory share = assetShareTokens[_assetRef];

    address[] memory holdersWithBalanceTemp = new address[](share.holders.length);
    uint256[] memory amountsOfHoldersWithBalanceTemp = new uint256[](share.holders.length);

    uint holderWithBalanceCount = 0;

    for (uint256 i=0; i< share.holders.length; i++ ) {
      uint256 balanceForHolder = balance(share.holders[i], _assetRef);
      if (balanceForHolder > 0) {
        holdersWithBalanceTemp[holderWithBalanceCount] = share.holders[i];
        amountsOfHoldersWithBalanceTemp[holderWithBalanceCount] = balanceForHolder;
        holderWithBalanceCount++;
      }
    }

    address[] memory holdersWithBalance = new address[](holderWithBalanceCount);
    uint256[] memory amountsOfHoldersWithBalance = new uint256[](holderWithBalanceCount);

    for (uint256 i=0; i< holderWithBalanceCount; i++ ) {
        holdersWithBalance[i] = holdersWithBalanceTemp[i];
        amountsOfHoldersWithBalance[i] = amountsOfHoldersWithBalanceTemp[i];
    }

    return (holdersWithBalance, amountsOfHoldersWithBalance);

  }

  function metadataUri(string memory _assetRef)
      public 
      view 
      isCreatorOrApproved(assetShareTokens[_assetRef].creator) 
      returns (string memory) 
  {
        return assetShareTokens[_assetRef].metadataUri;
  }

  function allAssets()
  public
  view
  returns (string[] memory)
  {
    return assetRefs;
  }

  function _beforeTokenTransfer(
          address operator,
          address from,
          address to,
          uint256[] memory ids,
          uint256[] memory amounts,
          bytes memory data
    )
          internal virtual override(ERC1155) {
    super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    
    for (uint i = 0; i < ids.length; i++) {
      if (_ownedAssetShares[to][ids[i]] != true) {
         string memory ref = _tokenAssetRefs[ids[i]];
         assetShareTokens[ref].holders.push(to);
         _ownedAssetShares[to][ids[i]] = true;
      }
    }
  }

  function _idsByAssetRefs(
    string[] memory _assetRefs) 
    internal 
    view
    returns (uint256[] memory ids)
  {
    ids = new uint256[](_assetRefs.length);
    
    for (uint256 i = 0; i < _assetRefs.length; i++) {
      ids[i] = assetShareTokens[_assetRefs[i]].id;
    }
  }

  function _isAssetSharesExists(
    string memory _assetRef) 
    internal 
    view 
    returns (bool) 
  {
    return assetShareTokens[_assetRef].id > 0;
  }

  function _isAssetSharesDivided(
    string memory _assetRef) 
    internal 
    view 
    returns (bool) 
  {
    return assetShareTokens[_assetRef].status == AssetShareTokenStatus.DIVIDED;
  }

  function _isAllSharesDivided(
    uint256[] memory _amounts) 
    internal 
    pure 
    returns (bool) 
  {
    uint256 counter = 0;

    for (uint256 i = 0; i < _amounts.length; i++) {
      counter = counter + _amounts[i];
    }

    return counter == 1000;
  }

}