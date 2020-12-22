const { ethers } = require('hardhat');
const { expect } = require('chai');

before(async () => {
  const [
    administrator,
    owner1,
    owner2,
    buyer1,
    buyer2,
  ] = await ethers.getSigners();

  this.Record = await ethers.getContractFactory('Record');
  `
 `;
  this.accounts = {
    administrator: administrator,
    owner1: owner1,
    owner2: owner2,
    buyer1: buyer1,
    buyer2: buyer2,
  };
});

beforeEach(async () => {
  this.record = await this.Record.deploy('https://energyweb.org/');
  await this.record.deployed();
  await this.record.mintAssetShares('Asset1', 'URI1');
});

describe('Record', () => {
  it('Should return balance of 1000 for new minted asset share', async () => {
    expect(
      await this.record.balance(this.accounts.administrator.address, 'Asset1')
    ).to.equal(1000);
  });

  it('Should return balance 1000 for another new minted asset token', async () => {
    await this.record.mintAssetShares('Asset2', 'URI2');
    expect(
      await this.record.balance(this.accounts.administrator.address, 'Asset2')
    ).to.equal(1000);
  });

  it('Should return balances for owners and minted asset tokens', async () => {
    await this.record.mintAssetShares('Asset2', 'URI2');

    const owners = [
      this.accounts.administrator.address,
      this.accounts.administrator.address,
    ];
    const assets = ['Asset1', 'Asset2'];

    const balances = await this.record.balanceBatch(owners, assets);

    expect(balances[0]).to.equal(1000);

    expect(balances[1]).to.equal(1000);
  });

  it('Should return balance of 1000 for new minted asset share', async () => {
    expect(
      await this.record.balance(this.accounts.administrator.address, 'Asset1')
    ).to.equal(1000);
  });

  it('Should return mintedAsset for new minted asset share', async () => {
    const mintedAsset = await this.record.assetShareTokens('Asset1');

    expect(mintedAsset['id']).to.equal(1);
    expect(mintedAsset['creator']).to.equal(
      this.accounts.administrator.address
    );
    expect(mintedAsset['status']).to.equal(0);
    expect(mintedAsset['shares']).to.equal(1000);
    expect(mintedAsset['metadataUri']).to.equal('URI1');
  });

  it('Should return holder with balance for new minted asset share', async () => {
    const shareHoldersWithalance = await this.record.shareHoldersWithBalance(
      'Asset1'
    );

    expect(shareHoldersWithalance[0][0]).to.equal(
      this.accounts.administrator.address
    );
    expect(shareHoldersWithalance[1][0]).to.equal(1000);
  });

  it('Should return mintedAsset for another minted asset share', async () => {
    await this.record.mintAssetShares('Asset2', 'URI2');
    const mintedAsset = await this.record.assetShareTokens('Asset2');

    expect(mintedAsset['id']).to.equal(2);
    expect(mintedAsset['creator']).to.equal(
      this.accounts.administrator.address
    );
    expect(mintedAsset['status']).to.equal(0);
    expect(mintedAsset['shares']).to.equal(1000);
    expect(mintedAsset['metadataUri']).to.equal('URI2');
  });

  it('Should return all holders with balance when another asset share was minted', async () => {
    await this.record.mintAssetShares('Asset2', 'URI2');

    const shareHoldersWithalanceForAsset1 = await this.record.shareHoldersWithBalance(
      'Asset1'
    );

    const shareHoldersWithalanceForAsset2 = await this.record.shareHoldersWithBalance(
      'Asset2'
    );

    expect(shareHoldersWithalanceForAsset1[0][0]).to.equal(
      this.accounts.administrator.address
    );
    expect(shareHoldersWithalanceForAsset1[1][0]).to.equal(1000);

    expect(shareHoldersWithalanceForAsset2[0][0]).to.equal(
      this.accounts.administrator.address
    );
    expect(shareHoldersWithalanceForAsset2[1][0]).to.equal(1000);
  });

  it('Should return metadataUri for minted Asset share', async () => {
    const uri = await this.record
      .connect(this.accounts.administrator)
      .metadataUri('Asset1');

    expect(await this.record.metadataUri('Asset1')).to.equal('URI1');
  });

  it('Should return all minted assets', async () => {
    await this.record.mintAssetShares('Asset2', 'URI2');
    await this.record.mintAssetShares('Asset3', 'URI3');

    const assets = await this.record.allAssets();

    expect(assets[0]).to.equal('Asset1');
    expect(assets[1]).to.equal('Asset2');
    expect(assets[2]).to.equal('Asset3');
  });

  it('Should return all minted assets by address', async () => {
    await this.record.mintAssetShares('Asset2', 'URI2');

    const assets = await this.record.mintedAssetSharesBy(
      this.accounts.administrator.address
    );

    expect(assets[0]).to.equal('Asset1');
    expect(assets[1]).to.equal('Asset2');
  });

  it('Should divide shares for asset to share holders', async () => {
    const shareHolders = [
      this.accounts.owner1.address,
      this.accounts.owner2.address,
    ];
    const amounts = [600, 400];

    await this.record
      .connect(this.accounts.administrator)
      .divideAssetShares(
        this.accounts.administrator.address,
        shareHolders,
        'Asset1',
        amounts,
        []
      );

    expect(
      await this.record
        .connect(this.accounts.administrator)
        .balance(this.accounts.owner1.address, 'Asset1')
    ).to.equal(600);

    expect(
      await this.record
        .connect(this.accounts.administrator)
        .balance(this.accounts.owner2.address, 'Asset1')
    ).to.equal(400);
  });

  it('Should get asset holders after divide shares for asset ', async () => {
    const shareHolders = [
      this.accounts.owner1.address,
      this.accounts.owner2.address,
    ];
    const amounts = [600, 400];

    await this.record.divideAssetShares(
      this.accounts.administrator.address,
      shareHolders,
      'Asset1',
      amounts,
      []
    );
  });

  it('Should return all divided assets', async () => {
    await this.record
      .connect(this.accounts.administrator)
      .mintAssetShares('Asset2', 'URI2');
    const shareHoldersAsset1 = [
      this.accounts.owner1.address,
      this.accounts.owner2.address,
    ];
    const amountsAsset1 = [600, 400];

    await this.record
      .connect(this.accounts.administrator)
      .divideAssetShares(
        this.accounts.administrator.address,
        shareHoldersAsset1,
        'Asset1',
        amountsAsset1,
        []
      );

    const shareHoldersAsset2 = [
      this.accounts.owner1.address,
      this.accounts.owner2.address,
    ];
    const amountsAsset2 = [600, 400];

    await this.record
      .connect(this.accounts.administrator)
      .divideAssetShares(
        this.accounts.administrator.address,
        shareHoldersAsset2,
        'Asset2',
        amountsAsset2,
        []
      );

    const allDividedAssets = await this.record.allDividedAssets();

    expect(allDividedAssets[0]).to.equal('Asset1');

    expect(allDividedAssets[1]).to.equal('Asset2');
  });

  it('Should return all holders for divided asset shares', async () => {
    const shareHoldersAsset1 = [
      this.accounts.administrator.address,
      this.accounts.owner1.address,
      this.accounts.owner2.address,
    ];
    const amountsAsset1 = [100, 600, 300];

    await this.record
      .connect(this.accounts.administrator)
      .divideAssetShares(
        this.accounts.administrator.address,
        shareHoldersAsset1,
        'Asset1',
        amountsAsset1,
        []
      );

    const shareHoldersWithalance = await this.record.shareHoldersWithBalance(
      'Asset1'
    );

    expect(shareHoldersWithalance[0][0]).to.equal(
      this.accounts.administrator.address
    );
    expect(shareHoldersWithalance[1][0]).to.equal(100);

    expect(shareHoldersWithalance[0][1]).to.equal(this.accounts.owner1.address);
    expect(shareHoldersWithalance[1][1]).to.equal(600);

    expect(shareHoldersWithalance[0][2]).to.equal(this.accounts.owner2.address);
    expect(shareHoldersWithalance[1][2]).to.equal(300);
  });

  it('Should return all holders for transfered asset shares', async () => {
    const shareHoldersAsset1 = [
      this.accounts.owner1.address,
      this.accounts.owner2.address,
    ];
    const amountsAsset1 = [600, 400];

    await this.record
      .connect(this.accounts.administrator)
      .divideAssetShares(
        this.accounts.administrator.address,
        shareHoldersAsset1,
        'Asset1',
        amountsAsset1,
        []
      );

    await this.record
      .connect(this.accounts.owner1)
      .transfer(
        this.accounts.owner1.address,
        this.accounts.buyer1.address,
        'Asset1',
        100,
        []
      );

    const shareHoldersWithalance = await this.record.shareHoldersWithBalance(
      'Asset1'
    );

    expect(shareHoldersWithalance[0][0]).to.equal(this.accounts.owner1.address);
    expect(shareHoldersWithalance[1][0]).to.equal(500);

    expect(shareHoldersWithalance[0][1]).to.equal(this.accounts.owner2.address);
    expect(shareHoldersWithalance[1][1]).to.equal(400);

    expect(shareHoldersWithalance[0][2]).to.equal(this.accounts.buyer1.address);
    expect(shareHoldersWithalance[1][2]).to.equal(100);
  });

  it('Should return owned asset shares with amount', async () => {
    await this.record
      .connect(this.accounts.administrator)
      .mintAssetShares('Asset2', 'URI2');

    const shareHoldersAsset1 = [
      this.accounts.owner1.address,
      this.accounts.owner2.address,
    ];

    const shareHoldersAsset2 = [
      this.accounts.owner1.address,
      this.accounts.owner2.address,
    ];
    const amountsAsset1 = [400, 600];

    const amountsAsset2 = [100, 900];

    await this.record
      .connect(this.accounts.administrator)
      .divideAssetShares(
        this.accounts.administrator.address,
        shareHoldersAsset1,
        'Asset1',
        amountsAsset1,
        []
      );

    await this.record
      .connect(this.accounts.administrator)
      .divideAssetShares(
        this.accounts.administrator.address,
        shareHoldersAsset2,
        'Asset2',
        amountsAsset2,
        []
      );

    const ownedAssetSharesWithBalanceOwner1 = await this.record
      .connect(this.accounts.owner1)
      .ownedAssetSharesWithBalances(this.accounts.owner1.address);

    expect(ownedAssetSharesWithBalanceOwner1[0][0]).to.equal('Asset1');
    expect(ownedAssetSharesWithBalanceOwner1[0][1]).to.equal('Asset2');
    expect(ownedAssetSharesWithBalanceOwner1[1][0]).to.equal(400);
    expect(ownedAssetSharesWithBalanceOwner1[1][1]).to.equal(100);

    const ownedAssetSharesWithBalanceOwner2 = await this.record
      .connect(this.accounts.owner2)
      .ownedAssetSharesWithBalances(this.accounts.owner2.address);

    expect(ownedAssetSharesWithBalanceOwner2[0][0]).to.equal('Asset1');
    expect(ownedAssetSharesWithBalanceOwner2[0][1]).to.equal('Asset2');
    expect(ownedAssetSharesWithBalanceOwner2[1][0]).to.equal(600);
    expect(ownedAssetSharesWithBalanceOwner2[1][1]).to.equal(900);
  });

  it('Should revert when token allready minted!', async () => {
    await this.expectRevert(
      this.record
        .connect(this.accounts.administrator)
        .mintAssetShares('Asset1', 'URI1'),
      'RECORD: Shares for asset allready minted'
    );
  });

  it('Should revert when get holders with balance for asset not minted yet!', async () => {
    await this.expectRevert(
      this.record.shareHoldersWithBalance('Asset2'),
      'RECORD: Asset not minted yet'
    );
  });

  it('Should revert divide shares for asset to share holders when shareholders and amounts lenght mismatch', async () => {
    const shareHolders = [this.accounts.administrator.address];
    const amounts = [500, 500];

    await this.expectRevert(
      this.record.divideAssetShares(
        this.accounts.administrator.address,
        shareHolders,
        'Asset1',
        amounts,
        []
      ),
      'RECORD: ShareHolders and amounts length mismatch'
    );
  });

  it('Should revert divide shares for asset to share holders when asset is not minted yet', async () => {
    const shareHolders = [
      this.accounts.administrator.address,
      this.accounts.administrator.address,
    ];
    const amounts = [500, 500];

    await this.expectRevert(
      this.record.divideAssetShares(
        this.accounts.administrator.address,
        shareHolders,
        'Asset2',
        amounts,
        []
      ),
      'RECORD: Asset not minted yet'
    );
  });

  it('Should revert divide shares for asset to share holders when not correctly divided: > 1000', async () => {
    const shareHoldersAsset1 = [
      this.accounts.administrator.address,
      this.accounts.owner1.address,
      this.accounts.owner2.address,
    ];
    const amountsAsset1 = [1, 600, 400];

    await this.expectRevert(
      this.record
        .connect(this.accounts.administrator)
        .divideAssetShares(
          this.accounts.administrator.address,
          shareHoldersAsset1,
          'Asset1',
          amountsAsset1,
          []
        ),
      'RECORD: All shares should be divided correctly'
    );
  });

  it('Should revert divide shares for asset to share holders when not correctly divided: < 1000', async () => {
    const shareHoldersAsset1 = [
      this.accounts.administrator.address,
      this.accounts.owner1.address,
      this.accounts.owner2.address,
    ];
    const amountsAsset1 = [99, 600, 300];

    await this.expectRevert(
      this.record
        .connect(this.accounts.administrator)
        .divideAssetShares(
          this.accounts.administrator.address,
          shareHoldersAsset1,
          'Asset1',
          amountsAsset1,
          []
        ),
      'RECORD: All shares should be divided correctly'
    );
  });

  it('Should revert when not owner calls owned Asset Shares With Balances', async () => {
    await this.expectRevert(
      this.record
        .connect(this.accounts.administrator)
        .ownedAssetSharesWithBalances(this.accounts.owner1.address),
      'RECORD: Only allowed by owner of asset shares'
    );
  });

  this.expectRevert = async (promise, expectedError) => {
    try {
      await promise;
    } catch (error) {
      const actualError = error.message.replace(
        'VM Exception while processing transaction: revert ',
        ''
      );
      expect(actualError).to.equal(expectedError);
      return;
    }
    expect.fail('Exception expected');
  };
});
